/**
 * Synergy Sugar ERP — AI Copilot & Chat Assistant Widget
 * Version: 2.3.0 — Clean Professional Typography (Icons & Wave Emoji Removed)
 * Adheres strictly to Synergy Sugar UI/UX Design System Specification:
 * - Surface: #101915 / #1e2b25
 * - Accent: #f6dd0d (gold)
 * - Border: #283a31 / #364e43
 * - Border-radius: 3px !important (containers/buttons/inputs)
 * - Position: Fixed bottom right (bottom: 24px; right: 24px)
 * - Proactive Trigger: 20 seconds after browsing starts
 */

(function () {
  'use strict';

  // Prevent duplicate initialization
  if (window.SynergyAICopilot) return;

  const AUTO_POPUP_DELAY_MS = 20000; // 20 seconds best-practice interval

  // Inject Styles
  const style = document.createElement('style');
  style.id = 'synergy-ai-copilot-styles';
  style.textContent = `
    @import url('https://fonts.cdnfonts.com/css/sansation');
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

    /* Floating Launcher Square Button */
    #synergy-ai-launcher {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 15000;
      width: 54px;
      height: 54px;
      border-radius: 3px !important;
      background: #101915;
      color: #f6dd0d;
      border: 1px solid #f6dd0d;
      box-shadow: 0 8px 28px rgba(0, 0, 0, 0.6);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
    }
    #synergy-ai-launcher:hover {
      transform: scale(1.06) translateY(-2px);
      background: #1e2b25;
      border-color: #ffffff;
      box-shadow: 0 12px 32px rgba(246, 221, 13, 0.35);
    }
    #synergy-ai-launcher .badge-pulse {
      position: absolute;
      top: -3px;
      right: -3px;
      width: 12px;
      height: 12px;
      background: #10b981;
      border: 2px solid #101915;
      border-radius: 2px !important;
      animation: synergyPulse 2s infinite;
    }

    @keyframes synergyPulse {
      0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
      70% { box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
      100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
    }

    /* Proactive Greeting Bubble */
    #synergy-ai-proactive-toast {
      position: fixed;
      bottom: 92px;
      right: 24px;
      z-index: 14999;
      background: #101915;
      border: 1px solid #364e43;
      border-radius: 3px !important;
      padding: 14px 16px;
      width: 290px;
      color: #f8fafc;
      box-shadow: 0 12px 36px rgba(0,0,0,0.6);
      font-family: 'Roboto', sans-serif;
      font-size: 0.85rem;
      line-height: 1.45;
      display: none;
      animation: toastSlideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }
    #synergy-ai-proactive-toast .toast-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 6px;
    }
    #synergy-ai-proactive-toast .toast-title {
      font-family: 'Sansation', sans-serif;
      font-weight: 700;
      color: #f6dd0d;
      font-size: 0.88rem;
    }
    #synergy-ai-proactive-toast .toast-close {
      cursor: pointer;
      color: #94a3b8;
      font-size: 16px;
    }
    #synergy-ai-proactive-toast .toast-close:hover { color: #f8fafc; }
    #synergy-ai-proactive-toast .toast-action-btn {
      margin-top: 10px;
      background: #f6dd0d;
      color: #101915;
      border: none;
      border-radius: 3px !important;
      font-weight: 700;
      font-size: 0.78rem;
      padding: 6px 12px;
      cursor: pointer;
      width: 100%;
      text-align: center;
      transition: background 0.2s ease;
    }
    #synergy-ai-proactive-toast .toast-action-btn:hover { background: #e5cd0c; }

    @keyframes toastSlideUp {
      from { opacity: 0; transform: translateY(15px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Main Chat Modal Window */
    #synergy-ai-window {
      position: fixed;
      bottom: 92px;
      right: 24px;
      z-index: 15001;
      width: 370px;
      max-width: calc(100vw - 32px);
      height: 530px;
      max-height: calc(100vh - 120px);
      background: #101915;
      border: 1px solid #364e43;
      border-radius: 3px !important;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.75);
      display: none;
      flex-direction: column;
      overflow: hidden;
      font-family: 'Roboto', sans-serif;
      animation: chatWindowPop 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    }
    @keyframes chatWindowPop {
      from { opacity: 0; transform: scale(0.95) translateY(10px); }
      to { opacity: 1; transform: scale(1) translateY(0); }
    }

    /* Chat Header */
    #synergy-ai-window .chat-header {
      background: #1e2b25;
      border-bottom: 1px solid #283a31;
      padding: 14px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    #synergy-ai-window .chat-title-box {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    #synergy-ai-window .chat-title {
      font-family: 'Sansation', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      color: #f8fafc;
      margin: 0;
      line-height: 1.2;
    }
    #synergy-ai-window .chat-subtitle {
      font-size: 0.73rem;
      color: #10b981;
      margin: 0;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    #synergy-ai-window .chat-subtitle::before {
      content: '';
      display: inline-block;
      width: 6px;
      height: 6px;
      background: #10b981;
      border-radius: 50% !important;
    }
    #synergy-ai-window .chat-close-btn {
      background: transparent;
      border: none;
      color: #cbd5e1;
      font-size: 22px;
      cursor: pointer;
      padding: 0 4px;
      line-height: 1;
    }
    #synergy-ai-window .chat-close-btn:hover { color: #f8fafc; }

    /* Chat Messages Container */
    #synergy-ai-window .chat-messages {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      background: #101915;
    }

    /* Message Bubbles */
    .synergy-msg {
      max-width: 85%;
      padding: 10px 14px;
      font-size: 0.85rem;
      line-height: 1.45;
      border-radius: 3px !important;
      word-wrap: break-word;
    }
    .synergy-msg.bot {
      background: #1e2b25;
      border: 1px solid #283a31;
      color: #f8fafc;
      align-self: flex-start;
    }
    .synergy-msg.user {
      background: #f6dd0d;
      color: #101915;
      font-weight: 500;
      align-self: flex-end;
    }
    .synergy-msg-time {
      font-size: 0.65rem;
      color: #94a3b8;
      margin-top: 4px;
      text-align: right;
    }
    .synergy-msg.user .synergy-msg-time { color: rgba(16, 25, 21, 0.65); }

    /* Chips Container */
    #synergy-ai-window .chat-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: 6px;
    }
    .chat-chip {
      background: rgba(40, 58, 49, 0.6);
      border: 1px solid #364e43;
      color: #f6dd0d;
      font-size: 0.74rem;
      padding: 5px 10px;
      border-radius: 3px !important;
      cursor: pointer;
      transition: background 0.2s ease, border-color 0.2s ease;
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }
    .chat-chip:hover {
      background: #364e43;
      border-color: #f6dd0d;
      color: #ffffff;
    }

    /* Chat Input Area */
    #synergy-ai-window .chat-input-area {
      background: #1e2b25;
      border-top: 1px solid #283a31;
      padding: 12px;
      display: flex;
      gap: 8px;
      align-items: center;
    }
    #synergy-ai-input {
      flex: 1;
      background: #101915 !important;
      border: 1px solid #283a31 !important;
      color: #f8fafc !important;
      padding: 9px 12px;
      border-radius: 3px !important;
      font-size: 0.85rem;
      font-family: 'Roboto', sans-serif;
    }
    #synergy-ai-input:focus {
      outline: none;
      border-color: #364e43 !important;
      box-shadow: 0 0 0 2px rgba(246, 221, 13, 0.2);
    }
    #synergy-ai-send-btn {
      background: #f6dd0d !important;
      color: #101915 !important;
      border: none !important;
      border-radius: 3px !important;
      padding: 9px 14px;
      font-weight: 700;
      cursor: pointer;
      font-size: 0.85rem;
      transition: background 0.2s ease;
    }
    #synergy-ai-send-btn:hover { background: #e5cd0c !important; }

    /* Scrollbar styling */
    #synergy-ai-window .chat-messages::-webkit-scrollbar { width: 4px; }
    #synergy-ai-window .chat-messages::-webkit-scrollbar-thumb { background: #364e43; border-radius: 2px; }
  `;
  document.head.appendChild(style);

  // Extensible Multi-Language Dictionary (Clean Typography)
  const I18N = {
    en: {
      toastTitle: 'Synergy AI Assistant',
      toastBody: 'Hello! Welcome to Synergy Sugar ERP. Need help selecting outgrower modules, checking weighbridge scale sync, or starting onboarding?',
      toastBtn: 'Chat with AI Assistant',
      chatTitle: 'Synergy AI Copilot',
      chatSub: 'Active & Ready',
      sendBtn: 'Send',
      inputPhKe: 'Ask about modules, KSh pricing, or onboarding...',
      inputPhUs: 'Ask about modules, $ USD pricing, or onboarding...',
      welcomeGreeting: 'Jambo! I am your <strong>Synergy Sugar AI Assistant</strong>.<br><br>How can I help you transform your agribusiness or outgrower operations today?',
      chipOutgrowers: 'Outgrower Modules',
      chipWeighbridge: 'Weighbridge Sync',
      chipOnboarding: 'Start Onboarding',
      chipDemo: 'Book Demo'
    },
    sw: {
      toastTitle: 'Msaidizi wa Synergy AI',
      toastBody: 'Jambo! Karibu Synergy Sugar ERP. Unahitaji msaada kuchagua moduli za wakulima, kuunganisha mizani, au kuanza usajili?',
      toastBtn: 'Zungumza na Msaidizi wa AI',
      chatTitle: 'Msaidizi wa Synergy AI',
      chatSub: 'Yupo Tayari',
      sendBtn: 'Tuma',
      inputPhKe: 'Uliza kuhusu moduli, bei za KSh, au usajili...',
      inputPhUs: 'Uliza kuhusu moduli, bei za USD $, au usajili...',
      welcomeGreeting: 'Jambo! Mimi ni <strong>Msaidizi wako wa Synergy Sugar AI</strong>.<br><br>Nawezaje kukusaidia kukuza kilimo-biashara na shughuli zako za kiwanda leo?',
      chipOutgrowers: 'Moduli za Wakulima',
      chipWeighbridge: 'Mizani ya Kiwanda',
      chipOnboarding: 'Anza Usajili',
      chipDemo: 'Weka Miadi'
    }
  };

  // Create Elements
  const launcher = document.createElement('button');
  launcher.id = 'synergy-ai-launcher';
  launcher.setAttribute('aria-label', 'Open AI Copilot Chat');
  launcher.innerHTML = `
    <span class="badge-pulse"></span>
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3V7" stroke="#f6dd0d" stroke-width="2.2" stroke-linecap="round"/>
      <circle cx="16" cy="3" r="2" fill="#f6dd0d"/>
      <rect x="5" y="7" width="22" height="18" rx="3" fill="#1e2b25" stroke="#f6dd0d" stroke-width="2"/>
      <rect x="8" y="10" width="16" height="7" rx="2" fill="#101915" stroke="#364e43" stroke-width="1.2"/>
      <circle cx="12" cy="13.5" r="1.8" fill="#f6dd0d"/>
      <circle cx="20" cy="13.5" r="1.8" fill="#f6dd0d"/>
      <path d="M12 20C13.5 21.5 18.5 21.5 20 20" stroke="#f6dd0d" stroke-width="1.8" stroke-linecap="round"/>
      <rect x="2" y="12" width="3" height="8" rx="1" fill="#f6dd0d"/>
      <rect x="27" y="12" width="3" height="8" rx="1" fill="#f6dd0d"/>
    </svg>
  `;

  const proactiveToast = document.createElement('div');
  proactiveToast.id = 'synergy-ai-proactive-toast';
  proactiveToast.innerHTML = `
    <div class="toast-header">
      <span class="toast-title">Synergy AI Assistant</span>
      <span class="toast-close" id="synergy-toast-close">&times;</span>
    </div>
    <div id="toast-body-text">Hello! Welcome to Synergy Sugar ERP. Need help selecting outgrower modules, checking weighbridge scale sync, or starting onboarding?</div>
    <button class="toast-action-btn" id="synergy-toast-action">Chat with AI Assistant</button>
  `;

  const chatWindow = document.createElement('div');
  chatWindow.id = 'synergy-ai-window';
  chatWindow.innerHTML = `
    <div class="chat-header">
      <div class="chat-title-box">
        <div class="chat-avatar" style="background:none; border:none; display:flex; align-items:center; justify-content:center;">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3V7" stroke="#f6dd0d" stroke-width="2.2" stroke-linecap="round"/>
            <circle cx="16" cy="3" r="2" fill="#f6dd0d"/>
            <rect x="5" y="7" width="22" height="18" rx="3" fill="#101915" stroke="#f6dd0d" stroke-width="2"/>
            <rect x="8" y="10" width="16" height="7" rx="2" fill="#1e2b25" stroke="#364e43" stroke-width="1.2"/>
            <circle cx="12" cy="13.5" r="1.8" fill="#f6dd0d"/>
            <circle cx="20" cy="13.5" r="1.8" fill="#f6dd0d"/>
            <path d="M12 20C13.5 21.5 18.5 21.5 20 20" stroke="#f6dd0d" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </div>
        <div>
          <h4 class="chat-title" id="ai-chat-title">Synergy AI Copilot</h4>
          <p class="chat-subtitle" id="ai-chat-sub">Active & Ready</p>
        </div>
      </div>
      <button class="chat-close-btn" id="synergy-chat-close">&times;</button>
    </div>
    <div class="chat-messages" id="synergy-chat-msg-container"></div>
    <div class="chat-input-area">
      <input type="text" id="synergy-ai-input" placeholder="Ask about modules, pricing, or onboarding..." />
      <button id="synergy-ai-send-btn">Send</button>
    </div>
  `;

  document.body.appendChild(launcher);
  document.body.appendChild(proactiveToast);
  document.body.appendChild(chatWindow);

  // State
  let isOpen = false;
  let hasAutoOpened = false;
  let lastActiveLang = null;

  function getLang() {
    return (window.SynergyLocalization && window.SynergyLocalization.getLanguage) 
      ? window.SynergyLocalization.getLanguage() 
      : (localStorage.getItem('synergy_lang') || 'en');
  }

  function getMarket() {
    return (window.SynergyLocalization && window.SynergyLocalization.getMarket) 
      ? window.SynergyLocalization.getMarket() 
      : { code: 'KE', currencySymbol: 'KSh', rate: 1 };
  }

  function getCurrentTimeStr() {
    const d = new Date();
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Dynamic Bi-Directional Localization Engine
  function updateCopilotLocalization() {
    const rawLang = getLang();
    const lang = I18N[rawLang] ? rawLang : 'en';
    const dict = I18N[lang];
    const market = getMarket();

    const toastTitle = document.querySelector('#synergy-ai-proactive-toast .toast-title');
    const toastText = document.getElementById('toast-body-text');
    const toastBtn = document.getElementById('synergy-toast-action');
    const chatTitle = document.getElementById('ai-chat-title');
    const chatSub = document.getElementById('ai-chat-sub');
    const inputEl = document.getElementById('synergy-ai-input');
    const sendBtn = document.getElementById('synergy-ai-send-btn');
    const greetingTextEl = document.getElementById('synergy-initial-greeting-text');

    if (toastTitle) toastTitle.textContent = dict.toastTitle;
    if (toastText) toastText.textContent = dict.toastBody;
    if (toastBtn) toastBtn.textContent = dict.toastBtn;
    if (chatTitle) chatTitle.textContent = dict.chatTitle;
    if (chatSub) chatSub.textContent = dict.chatSub;
    if (sendBtn) sendBtn.textContent = dict.sendBtn;
    if (inputEl) inputEl.placeholder = (market.code === 'US') ? dict.inputPhUs : dict.inputPhKe;
    if (greetingTextEl) greetingTextEl.innerHTML = dict.welcomeGreeting;

    // Dynamically update chip labels & greeting text EVERY TIME language switches
    if (lastActiveLang !== lang) {
      document.querySelectorAll('.chat-chip[data-query="outgrowers"]').forEach(el => el.textContent = dict.chipOutgrowers);
      document.querySelectorAll('.chat-chip[data-query="weighbridge"]').forEach(el => el.textContent = dict.chipWeighbridge);
      document.querySelectorAll('.chat-chip[data-query="onboarding"]').forEach(el => el.textContent = dict.chipOnboarding);
      document.querySelectorAll('.chat-chip[data-query="demo"]').forEach(el => el.textContent = dict.chipDemo);
      lastActiveLang = lang;
    }
  }

  function initChatGreeting() {
    const msgContainer = document.getElementById('synergy-chat-msg-container');
    if (!msgContainer || msgContainer.children.length > 0) return;

    const lang = getLang();
    const dict = I18N[lang] || I18N.en;

    let text = `<div id="synergy-initial-greeting-text">${dict.welcomeGreeting}</div>`;

    let chips = [
      { label: dict.chipOutgrowers, action: 'outgrowers' },
      { label: dict.chipWeighbridge, action: 'weighbridge' },
      { label: dict.chipOnboarding, action: 'onboarding' },
      { label: dict.chipDemo, action: 'demo' }
    ];

    addMessage(text, 'bot', chips, 'synergy-initial-greeting-box');
  }

  function openChat() {
    proactiveToast.style.display = 'none';
    chatWindow.style.display = 'flex';
    isOpen = true;
    initChatGreeting();
    updateCopilotLocalization();
    const inputEl = document.getElementById('synergy-ai-input');
    if (inputEl) inputEl.focus();
  }

  function closeChat() {
    chatWindow.style.display = 'none';
    isOpen = false;
  }

  function toggleChat() {
    if (isOpen) closeChat();
    else openChat();
  }

  // Auto Pop-up Timer (20 Seconds Best Practice)
  setTimeout(() => {
    if (!hasAutoOpened && !isOpen && !sessionStorage.getItem('synergy_ai_dismissed')) {
      proactiveToast.style.display = 'block';
      hasAutoOpened = true;
    }
  }, AUTO_POPUP_DELAY_MS);

  // Event Listeners
  launcher.addEventListener('click', toggleChat);

  document.getElementById('synergy-toast-close').addEventListener('click', () => {
    proactiveToast.style.display = 'none';
    sessionStorage.setItem('synergy_ai_dismissed', 'true');
  });

  document.getElementById('synergy-toast-action').addEventListener('click', openChat);
  document.getElementById('synergy-chat-close').addEventListener('click', closeChat);

  // Handle Input Send
  const sendBtn = document.getElementById('synergy-ai-send-btn');
  const inputEl = document.getElementById('synergy-ai-input');
  const msgContainer = document.getElementById('synergy-chat-msg-container');

  function addMessage(text, sender = 'bot', chips = null, boxId = null) {
    const msgDiv = document.createElement('div');
    msgDiv.className = `synergy-msg ${sender}`;
    if (boxId) msgDiv.id = boxId;
    let html = text;
    if (chips && chips.length > 0) {
      html += `<div class="chat-chips">`;
      chips.forEach(chip => {
        html += `<span class="chat-chip" data-query="${chip.action}">${chip.label}</span>`;
      });
      html += `</div>`;
    }
    html += `<div class="synergy-msg-time">${getCurrentTimeStr()}</div>`;
    msgDiv.innerHTML = html;
    msgContainer.appendChild(msgDiv);
    msgContainer.scrollTop = msgContainer.scrollHeight;

    msgDiv.querySelectorAll('.chat-chip').forEach(chipEl => {
      chipEl.addEventListener('click', () => {
        const query = chipEl.getAttribute('data-query');
        handleChipQuery(query, chipEl.textContent);
      });
    });
  }

  function handleUserSubmit() {
    const text = inputEl.value.trim();
    if (!text) return;
    addMessage(text, 'user');
    inputEl.value = '';

    setTimeout(() => {
      respondToQuery(text.toLowerCase());
    }, 450);
  }

  sendBtn.addEventListener('click', handleUserSubmit);
  inputEl.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleUserSubmit();
  });

  function handleChipQuery(action, label) {
    addMessage(label, 'user');
    const lang = getLang();
    const dict = I18N[lang] || I18N.en;

    setTimeout(() => {
      if (action === 'outgrowers') {
        const reply = (lang === 'sw')
          ? '<strong>Moduli ya Wakulima na Miwa</strong> inatoa usajili wa dijiti wa wakulima, ramani za GPS za mashamba, kufuatilia ukomavu wa miwa, na malipo ya haraka ya M-PESA.'
          : '<strong>Farmers Recruitment & Outgrower Module</strong> provides digital farmer registration, GPS plot mapping, crop maturity tracking, and direct payout settlements.';
        const chips = [{ label: dict.chipOnboarding, action: 'onboarding' }, { label: dict.chipDemo, action: 'demo' }];
        addMessage(reply, 'bot', chips);
      } else if (action === 'weighbridge') {
        const reply = (lang === 'sw')
          ? '<strong>Mizani ya Kiwanda</strong> inaunganisha moja kwa moja mizani ya RS232, inafunga uzito dhidi ya wizi, na kurekodi sampuli za maabara ya sukari kwa wakati halisi.'
          : '<strong>Weighbridge Scale Sync</strong> connects directly to indicator scales (RS232/IP), locks tare/gross weights to prevent tampering, and records sucrose quality lab samples in real time.';
        const chips = [{ label: dict.chipOnboarding, action: 'onboarding' }];
        addMessage(reply, 'bot', chips);
      } else if (action === 'onboarding') {
        const reply = (lang === 'sw')
          ? 'Inafungua <strong>Mchawi wa Usajili</strong> sasa! Inakupeleka kusanidi hali ya kiwanda chako...'
          : 'Launching our smooth <strong>Onboarding Wizard</strong> now! Redirecting you to set up your mill profile...';
        addMessage(reply, 'bot');
        setTimeout(() => { window.location.href = 'onboarding.html'; }, 1200);
      } else if (action === 'demo') {
        const reply = (lang === 'sw')
          ? 'Inakupeleka kuweka miadi na wataalamu wetu wa kilimo-biashara...'
          : 'Redirecting to schedule your live demo with our agribusiness specialists...';
        addMessage(reply, 'bot');
        setTimeout(() => { window.location.href = 'appointment.html'; }, 1200);
      } else {
        respondToQuery(action);
      }
    }, 400);
  }

  function respondToQuery(q) {
    const lang = getLang();
    const market = getMarket();
    const dict = I18N[lang] || I18N.en;

    if (q.includes('onboard') || q.includes('buy') || q.includes('sajili') || q.includes('nunua') || q.includes('try')) {
      const reply = (lang === 'sw')
        ? 'Uzuri kabisa! Unaweza kukamilisha Mchawi wetu wa Usajili wa hatua 4 ili kusanidi kiwanda chako, kuchagua moduli, na kufungua Cloud ERP Sandbox.'
        : 'Great! You can complete our smooth 4-step onboarding wizard to configure your mill, pick modules, and launch your test Cloud ERP Sandbox.';
      addMessage(reply, 'bot', [{ label: dict.chipOnboarding, action: 'onboarding' }]);
    } else if (q.includes('price') || q.includes('ksh') || q.includes('cost') || q.includes('bei') || q.includes('usd') || q.includes('$')) {
      const priceStr = (market.code === 'US') ? '$650/mo' : 'KSh 85,000/mo';
      const reply = (lang === 'sw')
        ? `Synergy Sugar ERP inatoa bei nafuu kulingana na ukubwa wa kiwanda na mashamba, kuanzia ${priceStr} hadi usambazaji wa viwanda vingi.`
        : `Synergy Sugar ERP offers flexible pricing tailored to mill capacity & outgrower acreage, starting from ${priceStr} up to Enterprise multi-factory deployments.`;
      addMessage(reply, 'bot', [{ label: dict.chipOnboarding, action: 'onboarding' }]);
    } else {
      const reply = (lang === 'sw')
        ? 'Asante kwa kuuliza! Synergy Sugar ERP ni mfumo mkuu wa mabadiliko ya dijiti katika sekta ya sukari Afrika Mashariki na Kimataifa. Unapenda kufungua mchawi wa usajili?'
        : 'Thank you for asking! Synergy Sugar ERP is the leading sugar industry digital transformation platform in East Africa & globally. Would you like to launch the onboarding wizard?';
      addMessage(reply, 'bot', [{ label: dict.chipOnboarding, action: 'onboarding' }]);
    }
  }

  // Periodically sync localization & initial setup
  updateCopilotLocalization();
  setInterval(updateCopilotLocalization, 500);

  // Global API object to trigger copilot programmatically
  window.SynergyAICopilot = {
    open: openChat,
    close: closeChat,
    toggle: toggleChat,
    updateLocalization: updateCopilotLocalization,
    ask: function (prompt) {
      openChat();
      addMessage(prompt, 'user');
      setTimeout(() => respondToQuery(prompt.toLowerCase()), 500);
    }
  };
})();
