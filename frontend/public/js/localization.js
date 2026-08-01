/**
 * Synergy Bravo ERP for Agribusiness (Sugar)
 * Unified Geo-Location, Multi-Currency, Language Translation & Market Engine
 * v2.1 — Complete dictionary coverage for all landing page sections
 */

(function() {
  // Utility: Escape Regex special characters
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  // Available Markets Configuration
  const MARKETS = {
    KE: {
      code: 'KE',
      name: 'Kenya 🇰🇪',
      flag: '🇰🇪',
      currency: 'KES',
      currencySymbol: 'KSh',
      rate: 1,
      isEastAfrica: true,
      hasMpesa: true,
      defaultLang: 'sw',
      payoutLabel: 'M-PESA B2C & Bank Direct',
      paymentTypes: ['mpesa', 'bank']
    },
    TZ: {
      code: 'TZ',
      name: 'Tanzania 🇹🇿',
      flag: '🇹🇿',
      currency: 'TZS',
      currencySymbol: 'TSh',
      rate: 18.5,
      isEastAfrica: true,
      hasMpesa: true,
      defaultLang: 'sw',
      payoutLabel: 'M-PESA / Tigo Pesa / Airtel Money',
      paymentTypes: ['mpesa', 'bank']
    },
    UG: {
      code: 'UG',
      name: 'Uganda 🇺🇬',
      flag: '🇺🇬',
      currency: 'UGX',
      currencySymbol: 'USh',
      rate: 28.2,
      isEastAfrica: true,
      hasMpesa: true,
      defaultLang: 'sw',
      payoutLabel: 'MTN Mobile Money & Airtel Money',
      paymentTypes: ['mpesa', 'bank']
    },
    US: {
      code: 'US',
      name: 'United States 🇺🇸 / West',
      flag: '🇺🇸',
      currency: 'USD',
      currencySymbol: '$',
      rate: 0.0077,
      isEastAfrica: false,
      hasMpesa: false,
      defaultLang: 'en',
      payoutLabel: 'Credit Card / Stripe / SWIFT Wire',
      paymentTypes: ['card', 'wire']
    },
    EU: {
      code: 'EU',
      name: 'Europe / Global 🇪🇺',
      flag: '🇪🇺',
      currency: 'EUR',
      currencySymbol: '€',
      rate: 0.0071,
      isEastAfrica: false,
      hasMpesa: false,
      defaultLang: 'en',
      payoutLabel: 'Credit Card / SEPA Wire Transfer',
      paymentTypes: ['card', 'wire']
    }
  };

  const DICTIONARY = {
    "Generate the standard Kenya Sugar Board outgrower supply agreement. Capture the grower's electronic signature on device and print a Bluetooth thermal copy for the grower's record.": "Generate the standard Kenya Sugar Board outgrower supply agreement. Capture the grower's electronic signature on device and print a Bluetooth thermal copy for the grower's record.",
    "The GPS polygon auto-walk feature cut down our plot surveying time from 45 minutes to under 10 minutes per farm. Highly recommended for field teams working in large schemes.": "The GPS polygon auto-walk feature cut down our plot surveying time from 45 minutes to under 10 minutes per farm. Highly recommended for field teams working in large schemes.",
    "You agree to indemnify and hold harmless Synergy Bravo ERP from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.": "You agree to indemnify and hold harmless Synergy Bravo ERP from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.",
    "If internet connection drops, tickets automatically buffer to SQLite local storage. Do not restart terminal PC until queue reaches 0 after network reconnects.": "If internet connection drops, tickets automatically buffer to SQLite local storage. Do not restart terminal PC until queue reaches 0 after network reconnects.",
    "Record grower full name, National ID number, primary contact number, and payout channel (M-PESA B2C mobile wallet or Kenya Commercial Bank account number).": "Record grower full name, National ID number, primary contact number, and payout channel (M-PESA B2C mobile wallet or Kenya Commercial Bank account number).",
    "Get a full walkthrough of Synergy Bravo ERP — from outgrower GPS plot mapping and weighbridge integration to grower settlements and factory analytics.": "Pata maelezo kamili ya Synergy Bravo ERP — kutoka ramani za GPS za mashamba ya wakulima na ushirikiano wa mizani hadi malipo ya wakulima na uchambuzi wa kiwanda.",
    "Comprehensive onboarding training covering all modules: outgrower management, weighbridge, milling operations, financial settlements, and reporting.": "Mafunzo kamili ya usajili yanayofunika moduli zote: usimamizi wa wakulima, mizani, shughuli za usagaji, malipo ya fedha, na utoaji wa ripoti.",
    "Does the offline M-PESA phone number validation verify national ID names automatically once back online? This would help prevent registration typos.": "Does the offline M-PESA phone number validation verify national ID names automatically once back online? This would help prevent registration typos.",
    "Synergy Sugar integrates with LoRaWAN and cellular telemetry sensors to monitor soil moisture, sucrose accumulation, and micro-climate risk factors.": "Synergy Sugar integrates with LoRaWAN and cellular telemetry sensors to monitor soil moisture, sucrose accumulation, and micro-climate risk factors.",
    "Work with our technical team to review weighbridge hardware integration, API requirements, and system connectivity for your sugar mill environment.": "Fanya kazi na timu wetu wa kiufundi kupitia ushirikiano wa vifaa vya mizani, mahitaji ya API, na muunganisho wa mfumo kwa mazingira ya kiwanda chako cha sukari.",
    "The automatic temperature correction for refractometer Brix readings saved our lab technicians substantial calculation time during shift changes.": "The automatic temperature correction for refractometer Brix readings saved our lab technicians substantial calculation time during shift changes.",
    "One-on-one consultation with our sugar ERP specialists to discuss your mill's specific operational needs, pricing, and implementation timeline.": "Mashauriano ya mtu binafsi na wataalamu wetu wa ERP ya sukari ili kujadili mahitaji maalum ya kiwanda chako, bei, na muda wa utekelezaji.",
    "Technical setup for connecting load cells, automated gross and tare weight locking, driver RFID trip tickets, and weight calculation formulas.": "Technical setup for connecting load cells, automated gross and tare weight locking, driver RFID trip tickets, and weight calculation formulas.",
    "In addition to what sarah_m mentioned, you should also check your server's email logs to see if the emails are being sent but not delivered.": "In addition to what sarah_m mentioned, you should also check your server's email logs to see if the emails are being sent but not delivered.",
    "Your appointment has been successfully booked. You will receive a confirmation email shortly with the meeting details and calendar invite.": "Miadi yako imewekwa kikamilifu. Utapokea barua pepe ya uthibitisho hivi karibuni yenye maelezo ya mkutano na mwaliko wa kalenda.",
    "Calculate grower gross earnings from delivered cane tonnage and automatically net against fertilizer advances and transport deductions.": "Hesabu mapato kamili ya wakulima kutoka tani za miwa zilizowasilishwa na ukate gharama za mbolea na usafirishaji kwa otomatiki.",
    "The multi-scale tare balancing prevented weight tampering effectively during peak crushing season. Essential read for scale engineers.": "The multi-scale tare balancing prevented weight tampering effectively during peak crushing season. Essential read for scale engineers.",
    "Synergy Bravo ERP provides cloud-based enterprise resource planning software that helps businesses manage their operations including:": "Synergy Bravo ERP provides cloud-based enterprise resource planning software that helps businesses manage their operations including:",
    "Financial records, employee information, customer data, inventory details, and other business information you input into our system.": "Financial records, employee information, customer data, inventory details, and other business information you input into our system.",
    "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.": "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.",
    "Walkthrough for logging Brix %, Pol %, purity, fiber %, and calculating Estimated Recoverable Crystal (ERC) for quality bonuses.": "Walkthrough for logging Brix %, Pol %, purity, fiber %, and calculating Estimated Recoverable Crystal (ERC) for quality bonuses.",
    "The automated M-PESA B2C disbursement reduced our farmer payment settlement turnaround from 14 days down to less than 2 hours.": "The automated M-PESA B2C disbursement reduced our farmer payment settlement turnaround from 14 days down to less than 2 hours.",
    "Setup guide for telemetry moisture sensors, weather stations, and predictive AI machine learning models for yield forecasting.": "Mwongozo wa kuweka sensori za unyevu, vituo vya hali ya hewa, na mifano ya AI kwa utabiri wa mavuno.",
    "The more details you provide, the better answers you'll receive. Include code, error messages, and steps you've already taken.": "The more details you provide, the better answers you'll receive. Include code, error messages, and steps you've already taken.",
    "The emails are not being sent when users perform certain actions. Has anyone encountered this issue before? What am I missing?": "The emails are not being sent when users perform certain actions. Has anyone encountered this issue before? What am I missing?",
    "Guide to digital outgrower farmer onboarding, high-precision GNSS polygon boundary walking, and sugarcane supply agreements.": "Mwongozo to digital outgrower farmer onboarding, high-precision GNSS polygon boundary walking, and sugarcane supply agreements.",
    "Truck proceeds to the unloader / cane yard feeder table. Laboratory sampler extracts juice sample for Brix & Pol analysis.": "Truck proceeds to the unloader / cane yard feeder table. Laboratory sampler extracts juice sample for Brix & Pol analysis.",
    "Ensure strict separation of duties between weighbridge clerks, lab technicians, finance officers, and executive managers.": "Ensure strict separation of duties between weighbridge clerks, lab technicians, finance officers, and executive managers.",
    "Manage 50kg bag production output, warehouse stack bin locations, wholesale dispatches, and delivery note generation.": "Dhibiti uzalishaji wa mifuko ya 50kg, maeneo ya stacking ya ghala, usafirishaji wa jumla, na uundaji wa hati za utoaji.",
    "Quick steps to resolve serial COM port disconnections, local database queue backlog, and network reconnection sync.": "Hatua za haraka za kutatua kukatika kwa COM port, mlundikano wa hifadhidata ya ndani, na usawazishaji baada ya mtandao kurudi.",
    "Configure administrator roles, weighbridge clerk privileges, field officer scopes, and review immutable audit logs.": "Sanidi majukumu ya wasimamizi, ruhusa za makarani wa mizani, upeo wa maafisa wa shamba, na kupitia kumbukumbu za ukaguzi.",
    "Upon termination, you will lose access to the Service. You may request a data export within 30 days of termination.": "Upon termination, you will lose access to the Service. You may request a data export within 30 days of termination.",
    "Driver taps RFID card or scans barcode at Gate 1. System verifies active harvest permit and truck license plate.": "Driver taps RFID card or scans barcode at Gate 1. Mfumo verifies active harvest permit and truck license plate.",
    "For detailed security documentation or to request our SOC 2 report, please contact our sales or compliance team.": "For detailed security documentation or to request our SOC 2 report, please contact our sales or compliance team.",
    "Step 3 is key: waiting for the SQLite queue buffer to clear before restarting saved us from ticket duplication.": "Step 3 is key: waiting for the SQLite queue buffer to clear before restarting saved us from ticket duplication.",
    "Track brown, white, and industrial sugar bag counts in real time across main and regional distribution depots.": "Track brown, white, and industrial sugar bag counts in real time across main and regional distribution depots.",
    "Please note that all sales of Election Pro AI subscriptions and related services are final and non-refundable.": "Please note that all sales of Election Pro AI subscriptions and related services are final and non-refundable.",
    "You retain all rights to the data you input into the Service. We do not claim ownership of your business data.": "You retain all rights to the data you input into the Service. We do not claim ownership of your business data.",
    "These Terms are governed by the laws of Kenya. Any disputes shall be resolved in the courts of Nairobi, Kenya.": "These Terms are governed by the laws of Kenya. Any disputes shall be resolved in the courts of Nairobi, Kenya.",
    "We offer various subscription tiers (Standard, Professional, Enterprise) with different features and pricing.": "We offer various subscription tiers (Standard, Professional, Enterprise) with different features and pricing.",
    "High-sucrose deliveries automatically trigger quality incentive bonuses added to grower settlement accounts.": "High-sucrose deliveries automatically trigger quality incentive bonuses added to grower settlement accounts.",
    "We do not sell your personal information. We may share your information only in the following circumstances:": "We do not sell your personal information. We may share your information only in the following circumstances:",
    "All data transmitted between your device and our servers is encrypted using TLS 1.3 with 256-bit encryption.": "All data transmitted between your device and our servers is encrypted using TLS 1.3 with 256-bit encryption.",
    "Encryption keys are managed using industry-standard key management services with regular rotation policies.": "Encryption keys are managed using industry-standard key management services with regular rotation policies.",
    "Juice samples collected at first expressor roller are tagged with the corresponding delivery batch number.": "Juice samples collected at first expressor roller are tagged with the corresponding delivery batch number.",
    "What are the recommended approaches for setting up user permissions in a multi-department organization?": "What are the recommended approaches for setting up user permissions in a multi-department organization?",
    "All stored data is encrypted using AES-256 encryption, including databases, backups, and file storage.": "All stored data is encrypted using AES-256 encryption, including databases, backups, and file storage.",
    "Performance has degraded significantly since the latest version update. Pages take forever to load...": "Performance has degraded significantly since the latest version update. Pages take forever to load...",
    "Information about how you use our services, including access times, pages viewed, and features used.": "Information about how you use our services, including access times, pages viewed, and features used.",
    "You grant us a limited license to host, store, and process your data solely to provide the Service.": "You grant us a limited license to host, store, and process your data solely to provide the Service.",
    "With third-party vendors who perform services on our behalf (hosting, analytics, customer support)": "With third-party vendors who perform services on our behalf (hosting, analytics, customer support)",
    "If you have security concerns or wish to report a vulnerability, please contact our security team:": "If you have security concerns or wish to report a vulnerability, please contact our security team:",
    "from taskbar tray; confirm COM port setting matches device manager (e.g. COM3, 9600 baud rate).": "from taskbar tray; confirm COM port setting matches device manager (e.g. COM3, 9600 baud rate).",
    "Audit logs record user ID, timestamp, IP address, and exact record changes for full compliance.": "Audit logs record user ID, timestamp, IP address, and exact record changes for full compliance.",
    "Good answers take time. Check back periodically and be ready to provide more details if needed.": "Good answers take time. Check back periodically and be ready to provide more details if needed.",
    "When someone solves your problem, accept their answer to help future users with similar issues.": "When someone solves your problem, accept their answer to help future users with similar issues.",
    "When dispatching customer sales orders, generate dispatch tickets with gate pass verification.": "When dispatching customer sales orders, generate dispatch tickets with gate pass verification.",
    "The LoRaWAN telemetry sync works remarkably well across 25km sensor radii in the sugar belt.": "The LoRaWAN telemetry sync works remarkably well across 25km sensor radii in the sugar belt.",
    "We perform regular backups, but you are responsible for maintaining your own backup copies.": "We perform regular backups, but you are responsible for maintaining your own backup copies.",
    "You’ll be asked to pick a plan to continue using the service. Your data will be preserved.": "Utaombwa kuchagua mpango ili kuendelea kutumia huduma. Data yako itahifadhiwa.",
    "The audit trail logging helps us pass internal ISO compliance audits without extra effort.": "The audit trail logging helps us pass internal ISO compliance audits without extra effort.",
    "I'm trying to set up email notifications but can't find the right configuration options...": "Najaribu kusanidi arifa za barua pepe lakini sipati chaguzi sahihi za usanidi...",
    "System automatically aggregates all weighbills delivered by the grower during the period.": "Mfumo automatically aggregates all weighbills delivered by the grower during the period.",
    "Name, email address, company name, phone number, and password when you create an account.": "Name, email address, company name, phone number, and password when you create an account.",
    "module in the Apps menu. The notification settings have been moved there in version 15.0.": "module in the Apps menu. The notification settings have been moved there in version 15.0.",
    "Having trouble connecting our system with external APIs. Authentication keeps failing...": "Having trouble connecting our system with external APIs. Authentication keeps failing...",
    "Your question might already be answered. Use the search bar to check existing questions.": "Your question might already be answered. Use the search bar to check existing questions.",
    "Connect with sugar mill engineers, agronomists, ERP specialists, and community members.": "Ungana na wahandisi wa viwanda vya sukari, wataalamu wa kilimo, wataalamu wa ERP, na wanachama wa jamii.",
    "Add up to 5 tags to describe what your question is about. Start typing for suggestions.": "Add up to 5 tags to describe what your question is about. Start typing for suggestions.",
    "We may suspend or terminate your account for violations of these Terms or non-payment.": "We may suspend or terminate your account for violations of these Terms or non-payment.",
    "Refunds may be issued at our discretion. Please contact support for refund requests.": "Refunds may be issued at our discretion. Please contact support for refund requests.",
    "We reserve the right to modify pricing with 30 days' notice to existing subscribers.": "We reserve the right to modify pricing with 30 days' notice to existing subscribers.",
    "Documented procedures for identifying, containing, and resolving security incidents": "Documented procedures for identifying, containing, and resolving security incidents",
    "A QR-coded thermal weighbill prints automatically and opens the exit barrier gate.": "A QR-coded thermal weighbill prints automatically and opens the exit barrier gate.",
    "The RFID pallet tagging ensures accurate stock audits across all 4 warehouse bays.": "The RFID pallet tagging ensures accurate stock audits across all 4 warehouse bays.",
    "Record polarimeter Pol reading; system automatically computes Sucrose % in juice.": "Record polarimeter Pol reading; system automatically computes Sucrose % in juice.",
    "Enter Brix hydrometer reading and refractometer temperature corrections into the": "Enter Brix hydrometer reading and refractometer temperature corrections into the",
    "Our ERP specialists are available 24/7 for Kenya & East Africa sugar operations.": "Our ERP specialists are available 24/7 for Kenya & East Africa sugar operations.",
    "Available for all users with support for authenticator apps and hardware tokens": "Available for all users with support for authenticator apps and hardware tokens",
    "Records of your communications with our support team and feedback you provide.": "Records of your communications with our support team and feedback you provide.",
    "We will notify affected customers within 72 hours of discovering a data breach": "We will notify affected customers within 72 hours of discovering a data breach",
    "We strive to maintain 99.9% uptime but do not guarantee uninterrupted service.": "We strive to maintain 99.9% uptime but do not guarantee uninterrupted service.",
    "We implement industry-standard security measures to protect your information:": "We implement industry-standard security measures to protect your information:",
    "Be descriptive. Include what you're trying to achieve and what's going wrong.": "Be descriptive. Include what you're trying to achieve and what's going wrong.",
    "We are not responsible for data loss, business interruption, or lost profits": "We are not responsible for data loss, business interruption, or lost profits",
    "Hosted on enterprise-grade cloud platforms with built-in security features:": "Hosted on enterprise-grade cloud platforms with built-in security features:",
    "Accept full responsibility for all activities that occur under your account": "Accept full responsibility for all activities that occur under your account",
    "Subscriptions automatically renew unless cancelled before the renewal date.": "Subscriptions automatically renew unless cancelled before the renewal date.",
    "You may cancel your subscription at any time through your account settings.": "You may cancel your subscription at any time through your account settings.",
    "Check USB-to-Serial adapter LED indicators on the weighbridge terminal PC.": "Check USB-to-Serial adapter LED indicators on the weighbridge terminal PC.",
    "Granular permissions to control who can access specific data and features": "Granular permissions to control who can access specific data and features",
    "You get 15 days of full access to all features, no credit card required.": "Unapata siku 15 za ufikiaji kamili wa vipengele vyote, hakuna kadi ya mkopo inayohitajika.",
    "Enterprise plans support SAML 2.0 and OAuth 2.0 for seamless integration": "Enterprise plans support SAML 2.0 and OAuth 2.0 for seamless integration",
    "We are not liable for any indirect, incidental, or consequential damages": "We are not liable for any indirect, incidental, or consequential damages",
    "Show appreciation for helpful answers by voting up and leaving comments.": "Show appreciation for helpful answers by voting up and leaving comments.",
    "We reward security researchers who responsibly disclose vulnerabilities": "We reward security researchers who responsibly disclose vulnerabilities",
    "Provide accurate, current, and complete information during registration": "Provide accurate, current, and complete information during registration",
    "We may perform scheduled maintenance with advance notice when possible.": "We may perform scheduled maintenance with advance notice when possible.",
    "Synergy Bravo ERP: Comprehensive Management Platform for Sugar Farmers": "Synergy Bravo ERP: Comprehensive Usimamizi Platform for Sugar Farmers",
    "Detecting and preventing fraud, security threats, and technical issues": "Detecting and preventing fraud, security threats, and technical issues",
    "Real-time system status and incident history at status.synergyerp.com": "Real-time system status and incident history at status.synergyerp.com",
    "Assign pallet RFID codes and warehouse bay numbers (e.g. Bay B4-02).": "Assign pallet RFID codes and warehouse bay numbers (e.g. Bay B4-02).",
    "The automated backup process has been failing with error code 500...": "The automated backup process has been failing with error code 500...",
    "Questions about system configuration, setup, and settings management": "Questions about system configuration, setup, and settings management",
    "IP address, browser type, device information, and operating system.": "IP address, browser type, device information, and operating system.",
    "Attempt unauthorized access to our systems or other users' accounts": "Attempt unauthorized access to our systems or other users' accounts",
    "Reverse engineer, decompile, or disassemble any part of the Service": "Reverse engineer, decompile, or disassemble any part of the Service",
    "Email-related issues, SMTP configuration, and notification settings": "Email-related issues, SMTP configuration, and notification settings",
    "We collect information that you provide directly to us, including:": "We collect information that you provide directly to us, including:",
    "Annual audits covering security, availability, and confidentiality": "Annual audits covering security, availability, and confidentiality",
    "Mobile applications, responsive design, and mobile-specific issues": "Mobile applications, responsive design, and mobile-specific issues",
    "Simple, predictable pricing with no hidden fees or user lock-ins.": "Bei rahisi na inayotabirika bila ada zilizofichwa au kufungiwa kwa mtumiaji.",
    "to push payments via M-PESA B2C API or direct KITS bank transfer.": "to push payments via M-PESA B2C API or direct KITS bank transfer.",
    "View real-time heatmaps and predictive harvest scheduling alerts.": "View real-time heatmaps and predictive harvest scheduling alerts.",
    "We maintain compliance with major security and privacy standards:": "We maintain compliance with major security and privacy standards:",
    "Open the Synergy Field App on your Android/iOS tablet and select": "Open the Synergy Field App on your Android/iOS tablet and select",
    "Performance optimization, troubleshooting, and system efficiency": "Performance optimization, troubleshooting, and system efficiency",
    "Deployment strategies, server setup, and production environments": "Deployment strategies, server setup, and production environments",
    "Processing Grower Settlements, Cane Deductions & M-PESA Payroll": "Kushughulikia Malipo ya Wakulima, Makato ya Miwa na Mishahara ya M-PESA",
    "User Role Permissions, Audit Trails & Multi-Site Access Control": "Ruhusa za Jukumu la Mtumiaji, Njia za Ukaguzi na Udhibiti wa Ufikiaji wa Maeneo Mengi",
    "24/7 security monitoring and alerting for suspicious activities": "24/7 security monitoring and alerting for suspicious activities",
    "We carefully vet all third-party vendors and service providers:": "We carefully vet all third-party vendors and service providers:",
    ". The system records gross tonnage from the load cell sensors.": ". The system records gross tonnage from the load cell sensors.",
    "Log daily production batch outputs from bagging machinery into": "Log daily production batch outputs from bagging machinery into",
    "When you explicitly authorize us to share specific information": "When you explicitly authorize us to share specific information",
    "Delete your personal information (subject to legal exceptions)": "Delete your personal information (subject to legal exceptions)",
    "Regular disaster recovery drills to ensure data recoverability": "Regular disaster recovery drills to ensure data recoverability",
    "Use the Service for illegal, fraudulent, or malicious purposes": "Use the Service for illegal, fraudulent, or malicious purposes",
    "The Service is provided \"AS IS\" without warranties of any kind": "The Service is provided \"AS IS\" without warranties of any kind",
    "Sucrose Extraction Rates & Sugar Mill Laboratory Quality Logs": "Sucrose Extraction Rates & Sugar Mill Laboratory Quality Logs",
    "We use the collected information for the following purposes:": "We use the collected information for the following purposes:",
    "Sending you technical notices, updates, and support messages": "Sending you technical notices, updates, and support messages",
    "When required by law, court order, or governmental authority": "When required by law, court order, or governmental authority",
    "Ability to restore data to any point within the last 30 days": "Ability to restore data to any point within the last 30 days",
    "Responding to your inquiries and providing customer support": "Responding to your inquiries and providing customer support",
    "In connection with a merger, acquisition, or sale of assets": "In connection with a merger, acquisition, or sale of assets",
    "Continuous monitoring and patching of third-party libraries": "Continuous monitoring and patching of third-party libraries",
    "Available for healthcare customers requiring PHI protection": "Available for healthcare customers requiring PHI protection",
    "All employees undergo comprehensive background verification": "All employees undergo comprehensive background verification",
    "Dedicated security operations center monitoring for threats": "Dedicated security operations center monitoring for threats",
    "Restrict access to your account from specific IP addresses": "Restrict access to your account from specific IP addresses",
    "How to configure email settings for notifications? - Forum": "How to configure email settings for notifications? - Forum",
    "Login systems, SSO, OAuth, and user authentication methods": "Login systems, SSO, OAuth, and user authentication methods",
    "Write your comment, question, or field experience here...": "Write your comment, question, or field experience here...",
    "Automatic timeout and forced logout for inactive sessions": "Automatic timeout and forced logout for inactive sessions",
    "Redundant data centers across multiple geographic regions": "Redundant data centers across multiple geographic regions",
    "Regular third-party security audits and penetration tests": "Regular third-party security audits and penetration tests",
    "Database management, queries, backup, and troubleshooting": "Database management, queries, backup, and troubleshooting",
    "API integration, development, and third-party connections": "API integration, development, and third-party connections",
    "Choose the type of appointment that best fits your needs": "Chagua aina ya miadi inayofaa zaidi mahitaji yako",
    "Net Cane = Gross Weight - Tare Weight - Deducted Trash %": "Net Cane = Gross Weight - Tare Weight - Deducted Trash %",
    "Connecting IoT Sensors & Real-Time AI Yield Traceability": "Kuunganisha Sensori za IoT na Ufuatiliaji wa Mavuno wa AI kwa Wakati Halisi",
    "Assign granular view/edit/delete rights for each module.": "Assign granular view/edit/delete rights for each module.",
    "Complying with legal obligations and enforcing our terms": "Complying with legal obligations and enforcing our terms",
    "Access controls and employee training on data protection": "Access controls and employee training on data protection",
    "We maintain a public security changelog for transparency": "We maintain a public security changelog for transparency",
    "System integrations, connectors, and workflow automation": "Mfumo integrations, connectors, and workflow automation",
    "Optimized UI tailored for desktop, tablet &amp; mobile": "Optimized UI tailored for desktop, tablet &amp; mobile",
    "Providing, maintaining, and improving our ERP services": "Providing, maintaining, and improving our ERP services",
    "Following OWASP guidelines and secure coding practices": "Following OWASP guidelines and secure coding practices",
    "Can't find what you're looking for? Ask the community!": "Hupati unachotafuta? Uliza jamii!",
    "Test the connection using the \"Test Connection\" button": "Test the connection using the \"Test Connection\" button",
    "Reports, analytics, dashboards, and data visualization": "Reports, analytics, dashboards, and data visualization",
    "Custom development, themes, and platform modifications": "Custom development, themes, and platform modifications",
    "Maintain and promptly update your account information": "Maintain and promptly update your account information",
    "e.g. configuration, email, database (comma-separated)": "e.g. configuration, email, database (comma-separated)",
    "Module installation, configuration, and customization": "Module installation, configuration, and customization",
    "Offline-first field data collection &amp; queue sync": "Offline-first field data collection &amp; queue sync",
    "Setting up Grower Contracts & Field GPS Plot Mapping": "Setting up Grower Contracts & Field GPS Plot Mapping",
    "Intrusion detection and prevention systems (IDS/IPS)": "Intrusion detection and prevention systems (IDS/IPS)",
    "Information security management system certification": "Information security management system certification",
    "Post-incident analysis to prevent future occurrences": "Post-incident analysis to prevent future occurrences",
    "Interfere with the proper functioning of the Service": "Interfere with the proper functioning of the Service",
    "to post answers, vote on questions, or add comments.": "to post answers, vote on questions, or add comments.",
    "User management, accounts, profiles, and permissions": "User management, accounts, profiles, and permissions",
    "Map sensor location to specific farm block polygon.": "Map sensor location to specific farm block polygon.",
    "Analyzing usage patterns to enhance user experience": "Analyzing usage patterns to enhance user experience",
    "Full compliance with EU data protection regulations": "Full compliance with EU data protection regulations",
    "Add relevant tags to help others find your question": "Add relevant tags to help others find your question",
    "Dedicated cloud & custom mill hardware integration": "Wingu la kibinafsi na ushirikiano wa vifaa vya kiwanda",
    "2. Step-by-Step Onboarding & Registration Workflow": "2. Step-by-Step Onboarding & Registration Workflow",
    "DDoS protection and web application firewall (WAF)": "DDoS protection and web application firewall (WAF)",
    "Maintain the security of your password and account": "Maintain the security of your password and account",
    "How to configure email settings for notifications?": "Jinsi ya kusanidi mipangilio ya barua pepe kwa arifa?",
    "Ideal for single-department automation or testing": "Bora kwa otomatiki ya idara moja au kujaribu",
    "Processing transactions and managing your account": "Processing transactions and managing your account",
    "Daily incremental backups and weekly full backups": "Daily incremental backups and weekly full backups",
    "Level 1 compliance for payment card data handling": "Level 1 compliance for payment card data handling",
    "Least privilege and need-to-know access policies": "Least privilege and need-to-know access policies",
    "Regular security audits and penetration testing": "Regular security audits and penetration testing",
    "Access and receive a copy of your personal data": "Access and receive a copy of your personal data",
    "Automated scanning for security vulnerabilities": "Automated scanning for security vulnerabilities",
    "For questions about these Terms, contact us at:": "For questions about these Terms, contact us at:",
    "Enterprise-grade SSO &amp; role-based security": "Enterprise-grade SSO &amp; role-based security",
    "Want to join the discussion or ask a question?": "Want to join the discussion or ask a question?",
    "Tractor transport freight charges per km/tonne": "Tractor transport freight charges per km/tonne",
    "procurement, accounting, sales, and analytics": "procurement, accounting, sales, and analytics",
    "Grower Management &gt; Register New Outgrower": "Grower Usimamizi &gt; Register New Outgrower",
    "Redirecting you to the software configurator…": "Inakuelekeza kwenye msanidi wa programu…",
    "Use strong, unique passwords for your account": "Use strong, unique passwords for your account",
    "Email notifications not working after upgrade": "Email notifications not working after upgrade",
    "Financials &gt; Grower Payroll & Settlements": "Financials &gt; Grower Payroll & Settlements",
    "Correct inaccurate or incomplete information": "Correct inaccurate or incomplete information",
    "Mandatory annual security awareness training": "Mandatory annual security awareness training",
    "Regularly review user access and permissions": "Regularly review user access and permissions",
    "Distribute viruses, malware, or harmful code": "Distribute viruses, malware, or harmful code",
    "Flexible Packages for Every Sugar Operation": "Vifurushi Vinavyobadilika kwa Kila Uendeshaji wa Sukari",
    "Digital E-Signatures & Contract Generation:": "Digital E-Signatures & Contract Generation:",
    "End-to-end encryption for data transmission": "End-to-end encryption for data transmission",
    "on \"Email configuration issue\" • 30 min ago": "on \"Email configuration issue\" • 30 min ago",
    "Firewall blocking SMTP ports (25, 587, 465)": "Firewall blocking SMTP ports (25, 587, 465)",
    "Violate any applicable laws or regulations": "Violate any applicable laws or regulations",
    "Full access to all 10 core sugar ERP apps": "Ufikiaji kamili wa programu zote 10 kuu za ERP ya sukari",
    "All staff sign NDAs and security policies": "All staff sign NDAs and security policies",
    "Keep your devices and software up to date": "Keep your devices and software up to date",
    "Best practices for user permissions setup": "Mbinu bora za kusanidi ruhusa za watumiaji",
    "API integration with third-party services": "Ushirikiano wa API na huduma za watu wa tatu",
    "How to troubleshoot email delivery issues": "How to troubleshoot email delivery issues",
    "System Settings &gt; Roles & Permissions": "Mfumo Settings &gt; Roles & Permissions",
    "Secure data storage with regular backups": "Secure data storage with regular backups",
    "Object to processing of your information": "Object to processing of your information",
    "Keep your login credentials confidential": "Keep your login credentials confidential",
    "PGP Key: Available at synergyerp.com/pgp": "PGP Key: Available at synergyerp.com/pgp",
    "Provide system information when relevant": "Provide system information when relevant",
    "TO THE MAXIMUM EXTENT PERMITTED BY LAW:": "TO THE MAXIMUM EXTENT PERMITTED BY LAW:",
    "System running slow after recent update": "Mfumo unafanya kazi polepole baada ya sasisho la hivi karibuni",
    "Email provider requiring authentication": "Email provider requiring authentication",
    "Grower Identification & Financial KYC:": "Grower Identification & Financial KYC:",
    "AI Traceability &gt; Device Management": "AI Traceability &gt; Device Usimamizi",
    "Report suspicious activity immediately": "Report suspicious activity immediately",
    "\"Database backup process\" • 1 hour ago": "\"Database backup process\" • 1 hour ago",
    "Looked in the Email Configuration menu": "Looked in the Email Usanidi menu",
    "Export your data in a portable format": "Export your data in a portable format",
    "Inventory and supply chain management": "Inventory and supply chain management",
    "Book Appointment - Synergy Bravo ERP": "Weka Miadi - Synergy Bravo ERP",
    "Automatic deduction offsets applied:": "Automatic deduction offsets applied:",
    "Vendor access monitoring and logging": "Vendor access monitoring and logging",
    "Laboratory Quality Control Workflow": "Laboratory Quality Control Workflow",
    "Multi-factor authentication options": "Multi-factor authentication options",
    "Opt-out of marketing communications": "Opt-out of marketing communications",
    "Financial management and accounting": "Financial management and accounting",
    "Be specific and clear in your title": "Be specific and clear in your title",
    "Transform your business operations": "Transform your business operations",
    "Multi-Factor Authentication (MFA):": "Multi-Factor Authentication (MFA):",
    "Network segmentation and isolation": "Network segmentation and isolation",
    "Enable multi-factor authentication": "Enable multi-factor authentication",
    "Infringe upon the rights of others": "Infringe upon the rights of others",
    "Verified SMTP settings are correct": "Verified SMTP settings are correct",
    "Configure your SMTP settings there": "Configure your SMTP settings there",
    "1. Overview & Operational Context": "1. Muhtasari & Operational Context",
    "Post a comment as a verified user": "Post a comment as a verified user",
    "Outgrower Manager — Western Kenya": "Outgrower Manager — Western Kenya",
    "Thermal Ticket & Barrier Release:": "Thermal Ticket & Barrier Release:",
    "Cooperative development levy (1%)": "Cooperative development levy (1%)",
    "Enterprise Server (KES 25,000/mo)": "Seva ya Shirika (KSh 25,000/mwezi)",
    "Role-Based Access Control (RBAC):": "Role-Based Access Control (RBAC):",
    "Contractual security requirements": "Contractual security requirements",
    "Include what you've already tried": "Include what you've already tried",
    "SMTP configuration best practices": "SMTP configuration best practices",
    "1 App selected • Unlimited Users": "Programu 1 Iliyochaguliwa • Watumiaji Wasio na Kikomo",
    "Real-time Inventory & Financials": "Hifadhi na Fedha za Wakati Halisi",
    "Tell us more about your needs...": "Tuambie zaidi kuhusu mahitaji yako...",
    "High-Precision Polygon GPS Walk:": "High-Precision Polygon GPS Walk:",
    "3. Offline Queue & Sync Protocol": "3. Offline Queue & Sync Protocol",
    "Gate Entry & Trip Authorization:": "Gate Entry & Trip Authorization:",
    "6. Compliance and Certifications": "6. Compliance and Certifications",
    "Customer relationship management": "Customer relationship management",
    "Project management and analytics": "Project management and analytics",
    "Click on \"Outgoing Mail Servers\"": "Click on \"Outgoing Mail Servers\"",
    "AI Quality & Yield Traceability": "Udhibiti wa Ubora wa AI na Ufuatiliaji wa Mavuno",
    "Cane Yard Discharge & Sampling:": "Cane Yard Discharge & Sampling:",
    "Seed cane & fertilizer advances": "Seed cane & fertilizer advances",
    "8. International Data Transfers": "8. International Data Transfers",
    "Database backup process failing": "Mchakato wa kuhifadhi nakala ya hifadhidata unashindwa",
    "Describe your problem in detail": "Describe your problem in detail",
    "Unlimited users & data storage": "Watumiaji na hifadhi ya data bila kikomo",
    "Last Updated: December 6, 2024": "Last Updated: December 6, 2024",
    "3. How We Use Your Information": "3. How We Use Your Information",
    "5. Data Sharing and Disclosure": "5. Data Sharing and Disclosure",
    "Email: security@synergyerp.com": "Email: security@synergyerp.com",
    "Response Time: Within 24 hours": "Response Time: Within 24 hours",
    "Here's what I've tried so far:": "Here's what I've tried so far:",
    "sudo tail -f /var/log/mail.log": "sudo tail -f /var/log/mail.log",
    "Cloud infrastructure included": "Miundombinu ya wingu imejumuishwa",
    "How does the free trial work?": "Jaribio la bure linafanya kazi vipi?",
    "Select the cane variety (e.g.": "Chagua the cane variety (e.g.",
    "1. Hardware Integration Setup": "1. Hardware Ushirikiano Setup",
    "Assisted Install (KES 10,000)": "Uwekaji wa Msaada (KSh 10,000)",
    "Email: privacy@synergyerp.com": "Email: privacy@synergyerp.com",
    "To use our Service, you must:": "To use our Service, you must:",
    "6. Data Ownership and License": "6. Data Ownership and License",
    "What happens after my trial?": "Nini kinatokea baada ya jaribio langu?",
    "IT Infrastructure Specialist": "IT Infrastructure Specialist",
    "Partner Install (KES 20,000)": "Uwekaji wa Mshirika (KSh 20,000)",
    "welcome_newbie • 2 hours ago": "welcome_newbie • 2 hours ago",
    "✅ How to Ask a Good Question": "✅ How to Ask a Good Question",
    "You can check the logs with:": "You can check the logs with:",
    "Everything in Standard plan": "Kila kitu katika mpango wa Kawaida",
    "Field Officer — Nyando Zone": "Field Officer — Nyando Zone",
    "Chief Chemist — Kibos Sugar": "Chief Chemist — Kibos Sugar",
    "Settlement Calculation Flow": "Settlement Calculation Flow",
    "Harvesting gang labor wages": "Harvesting gang labor wages",
    "Finance Accountant — Mumias": "Finance Accountant — Mumias",
    "Customer User (KES 1000/mo)": "Mtumiaji wa Mteja (KSh 1000/mwezi)",
    "Basic Server (KES 5,000/mo)": "Seva ya Msingi (KSh 5,000/mwezi)",
    "Confidentiality Agreements:": "Confidentiality Agreements:",
    "Human resources and payroll": "Human resources and payroll",
    "5. Subscription and Payment": "5. Subscription and Payment",
    "Email: legal@synergyerp.com": "Email: legal@synergyerp.com",
    "Be specific and imagine you": "Be specific and imagine you",
    "Go to Apps → Email Settings": "Go to Apps → Email Settings",
    "Emails going to spam folder": "Emails going to spam folder",
    "Member since September 2022": "Member since September 2022",
    "Crop & Variety Assignment:": "Crop & Variety Assignment:",
    "for drought resistance, or": "for drought resistance, or",
    "Inventory Management Steps": "Inventory Usimamizi Steps",
    "Standard User (KES 700/mo)": "Mtumiaji wa Kawaida (KSh 700/mwezi)",
    "Pro Server (KES 12,000/mo)": "Seva ya Pro (KSh 12,000/mwezi)",
    "10. Changes to This Policy": "10. Changes to This Policy",
    "11. Transparency and Trust": "11. Transparency and Trust",
    "9. Limitation of Liability": "9. Limitation of Liability",
    "12. Modifications to Terms": "12. Modifications to Terms",
    "Member since February 2024": "Member since February 2024",
    "Member since December 2023": "Member since December 2023",
    "With Data-Driven Insights": "With Data-Driven Insights",
    "Can I change plans later?": "Je, naweza kubadilisha mipango baadaye?",
    "Showing 1–5 of 8 articles": "Showing 1–5 of 8 articles",
    "2. Information We Collect": "2. Information We Collect",
    "10. Your Responsibilities": "10. Your Responsibilities",
    "2. Description of Service": "2. Description of Service",
    "Member since January 2020": "Member since January 2020",
    "A comprehensive platform": "A comprehensive platform",
    "Seamlessly connecting...": "Seamlessly connecting...",
    "1 Core ERP App of choice": "Programu 1 Kuu ya ERP ya Chaguo",
    "Book Another Appointment": "Weka Miadi Nyengine",
    "Add sensor device EUI in": "Add sensor device EUI in",
    "SOC 2 Type II compliance": "SOC 2 Type II compliance",
    "Phone: +1 (555) 123-4567": "Phone: +1 (555) 123-4567",
    "8. Intellectual Property": "8. Intellectual Property",
    "Here's the correct path:": "Here's the correct path:",
    "Member since August 2024": "Member since August 2024",
    "All 10 Core ERP Modules": "Moduli Zote 10 Kuu za ERP",
    "Technical Setup Session": "Kipindi cha Kuweka Mipangilio ya Kiufundi",
    "Buy - Synergy Bravo ERP": "Nunua - Synergy Bravo ERP",
    "Configure Standard Plan": "Sanidi Mpango wa Kawaida",
    "Partner Three Solutions": "Partner Three Solutions",
    "SOC 2 Type II Certified": "SOC 2 Type II Certified",
    "Vulnerability Scanning:": "Vulnerability Scanning:",
    "Point-in-Time Recovery:": "Point-in-Time Recovery:",
    "Incident Response Plan:": "Incident Response Plan:",
    "3. Account Registration": "3. Account Registration",
    "14. Contact Information": "14. Contact Information",
    "Member since March 2021": "Member since March 2021",
    "Selected Demo Modules:": "Moduli za Jaribio Zilizochaguliwa:",
    "Team Training Workshop": "Karakana ya Mafunzo ya Timu",
    "Select Date &amp; Time": "Chagua Date &amp; Time",
    "Requested Appointment:": "Miadi Iliyoombwa:",
    "Access Officer Module:": "Access Officer Module:",
    "Still need assistance?": "Still need assistance?",
    "-- Choose a Partner --": "-- Chagua Mshirika --",
    "You have the right to:": "You have the right to:",
    "Encryption in Transit:": "Encryption in Transit:",
    "Continuous Monitoring:": "Continuous Monitoring:",
    "Dependency Management:": "Dependency Usimamizi:",
    "1. Acceptance of Terms": "1. Acceptance of Terms",
    "Effect of Termination:": "Effect of Termination:",
    "Common issues include:": "Common issues include:",
    "to join our community!": "to join our community!",
    "Platform Administrator": "Platform Administrator",
    "Member since June 2022": "Member since June 2022",
    "Standard (All-in-One)": "Kawaida (Yote-mahali-pamoja)",
    "Complete Your Booking": "Kamilisha Miadi Yako",
    "Troubleshooting Steps": "Troubleshooting Steps",
    "Own Servers (no cost)": "Mavazi Yako Mwenyewe (Bila Gharama)",
    "9. Children's Privacy": "9. Children's Privacy",
    "Single Sign-On (SSO):": "Single Sign-On (SSO):",
    "Cloud Infrastructure:": "Cloud Infrastructure:",
    "You need to check the": "You need to check the",
    "Schedule Appointment": "Panga Miadi",
    "&#8592; Appointments": "&#8592; Appointments",
    "Financials & Payroll": "Financials & Payroll",
    "Tare Weight Capture:": "Tare Weight Capture:",
    "Execute Bulk Payment": "Execute Bulk Payment",
    "Warehouse Controller": "Warehouse Controller",
    "IoT & AI Setup Guide": "IoT & AI Setup Mwongozo",
    "Election Pro Hosting": "Election Pro Hosting",
    "Self Install (KES 0)": "Uwekaji Mwenyewe (KSh 0)",
    "Account Information:": "Account Information:",
    "Penetration Testing:": "Penetration Testing:",
    "8. Incident Response": "8. Incident Response",
    "asked 2 hours ago by": "asked 2 hours ago by",
    "System Administrator": "Mfumo Administrator",
    "Full Stack Developer": "Full Stack Developer",
    "Custom / Enterprise": "Maalum / Shirika",
    "Continue to Details": "Endelea hadi Maelezo",
    "AgTech Systems Lead": "AgTech Mfumos Lead",
    "Credit / Debit Card": "Kadi ya Mkopo / Benki",
    "Payment Successful!": "Malipo Yamefanikiwa!",
    "xxxx xxxx xxxx xxxx": "xxxx xxxx xxxx xxxx",
    "Communication Data:": "Communication Data:",
    "Legal Requirements:": "Legal Requirements:",
    "Business Transfers:": "Business Transfers:",
    "ISO 27001 Compliant": "ISO 27001 Compliant",
    "Encryption at Rest:": "Encryption at Rest:",
    "Session Management:": "Session Usimamizi:",
    "Secure Development:": "Secure Development:",
    "Bug Bounty Program:": "Bug Bounty Program:",
    "Subscription Plans:": "Subscription Plans:",
    "10. Indemnification": "10. Indemnification",
    "Ubuntu 20.04 server": "Ubuntu 20.04 server",
    "PostgreSQL database": "PostgreSQL database",
    "answered 1 hour ago": "answered 1 hour ago",
    "answered 30 min ago": "answered 30 min ago",
    "Database Specialist": "Database Specialist",
    "Sales Consultation": "Mashauriano ya Mauzo",
    "Booking Confirmed!": "Miadi Imethibitishwa!",
    "Alphabetical (A-Z)": "Alphabetical (A-Z)",
    "Lab Quality Module": "Lab Quality Module",
    "Role Configuration": "Role Usanidi",
    "Compliance Officer": "Compliance Officer",
    "Service Providers:": "Service Providers:",
    "With Your Consent:": "With Your Consent:",
    "1. Data Encryption": "1. Data Encryption",
    "2. Access Controls": "2. Access Controls",
    "Access Principles:": "Access Principles:",
    "Post Your Question": "Post Your Question",
    "Empowering Growth": "Empowering Growth",
    "Live Product Demo": "Jaribio la Bidhaa la Moja kwa Moja",
    "+1 (555) 123-4567": "+1 (555) 123-4567",
    "Farmer Operations": "Farmer Operations",
    "Inventory & Sales": "Inventory & Sales",
    "for high sucrose,": "for high sucrose,",
    "Lock Gross Weight": "Lock Gross Weight",
    "Cardholder Name *": "Jina la Mwenye Kadi *",
    "🔒 Secure Payment": "🔒 Malipo Salama",
    "6. Data Retention": "6. Data Retention",
    "Synergy Bravo ERP": "Synergy Bravo ERP",
    "Recovery Testing:": "Recovery Testing:",
    "Retention Policy:": "Retention Policy:",
    "4. Acceptable Use": "4. Acceptable Use",
    "You agree NOT to:": "You agree NOT to:",
    "13. Governing Law": "13. Governing Law",
    "asked 2 hours ago": "iliulizwa masaa 2 yaliyopita",
    "asked 5 hours ago": "iliulizwa masaa 5 yaliyopita",
    "New answer posted": "New answer posted",
    "Ask Your Question": "Uliza Swali Lako",
    "🔒 Login Required": "🔒 Login Inahitajika",
    "Related Questions": "Related Questions",
    "All Appointments": "Miadi Yote",
    "Appointment Type": "Aina ya Miadi",
    "Your Information": "Taarifa Zako",
    "Sort Articles By": "Panga Makala Kwa",
    "Full Page View ↗": "Angalia Ukurasa Kamili ↗",
    "Emmanuel Nderitu": "Emmanuel Nderitu",
    "Fredrick Onyango": "Fredrick Onyango",
    "Select a Partner": "Chagua Mshirika",
    "99.9% Uptime SLA": "99.9% Uptime SLA",
    "IP Whitelisting:": "IP Whitelisting:",
    "asked 2 days ago": "iliulizwa siku 2 zilizopita",
    "asked 3 days ago": "iliulizwa siku 3 zilizopita",
    "Question updated": "Question updated",
    "Have a Question?": "Una Swali?",
    "Question Details": "Question Details",
    "Preview Question": "Preview Question",
    "Vote and comment": "Vote and comment",
    "Top Contributors": "Top Contributors",
    "Senior Developer": "Senior Developer",
    "Available Times": "Muda Unaopatikana",
    "Booking Summary": "Muhtasari wa Miadi",
    "Email Address *": "Anwani ya Barua Pepe *",
    "Confirm Booking": "Thibitisha Miadi",
    "Troubleshooting": "Utatuzi wa Matatizo",
    "+254 712 345678": "+254 712 345678",
    "Number of Users": "Idadi ya Watumiaji",
    "Partner One Ltd": "Partner One Ltd",
    "Partner Two Inc": "Partner Two Inc",
    "1. Introduction": "1. Introduction",
    "Technical Data:": "Technical Data:",
    "Key Management:": "Key Usimamizi:",
    "Geo-Redundancy:": "Geo-Redundancy:",
    "11. Termination": "11. Termination",
    "asked 1 day ago": "iliulizwa siku 1 iliyopita",
    "Recent Activity": "Recent Activity",
    "New user joined": "New user joined",
    "Request a Demo": "Request a Demo",
    "Recently Added": "Recently Added",
    "Charles Kiprop": "Charles Kiprop",
    "Business Data:": "Business Data:",
    "7. Your Rights": "7. Your Rights",
    "GDPR Compliant": "GDPR Compliant",
    "SOC 2 Type II:": "SOC 2 Type II:",
    "Price Changes:": "Price Changes:",
    "License to Us:": "License to Us:",
    "authentication": "authentication",
    "Accept answers": "Accept answers",
    "30 minutes ago": "30 minutes ago",
    "245 reputation": "245 reputation",
    "Email Settings": "Email Settings",
    "New This Month": "New This Month",
    "Top Reputation": "Top Reputation",
    "Consultations": "Mashauriano",
    "Select a date": "Chagua tarehe",
    "Select a time": "Chagua muda",
    "December 2024": "December 2024",
    "⏱️ 8 min read": "⏱️ 8 min read",
    "Register Free": "Register Free",
    "James Wanjala": "James Wanjala",
    "⏱️ 7 min read": "⏱️ 7 min read",
    "⏱️ 6 min read": "⏱️ 6 min read",
    "David Adholla": "David Adholla",
    "⏱️ 4 min read": "⏱️ 4 min read",
    "⏱️ 3 min read": "⏱️ 3 min read",
    "Card Number *": "Nambari ya Kadi *",
    "Expiry Date *": "Tarehe ya Kumalizika *",
    "+2547XXXXXXXX": "+2547XXXXXXXX",
    "Auto-Renewal:": "Auto-Renewal:",
    "configuration": "configuration",
    "💡 Quick Tips": "💡 Quick Tips",
    "Configuration": "Usanidi",
    "New This Week": "Mpya Wiki Hii",
    "customization": "customization",
    "Robert Garcia": "Robert Garcia",
    "Emma Thompson": "Emma Thompson",
    "One App Free": "Programu Moja Bure",
    "Organization": "Shirika / Kampuni",
    "Appointment:": "Appointment:",
    "Post Comment": "Post Comment",
    "Peter Omondi": "Peter Omondi",
    "ERC formula:": "ERC formula:",
    "Mary Njoroge": "Mary Njoroge",
    "Buy Standard": "Nunua Mpango wa Kawaida",
    "Installation": "Uwekaji wa Mfumo",
    "Status Page:": "Status Page:",
    "Maintenance:": "Maintenance:",
    "Ask Question": "Uliza Swali",
    "15 questions": "15 questions",
    "tech_support": "tech_support",
    "Popular Tags": "Lebo Maarufu",
    "Version 15.0": "Version 15.0",
    "45 questions": "45 questions",
    "23 followers": "23 followers",
    "32 questions": "32 questions",
    "18 followers": "18 followers",
    "67 questions": "67 questions",
    "45 followers": "45 followers",
    "29 questions": "29 questions",
    "34 followers": "34 followers",
    "38 questions": "38 questions",
    "27 followers": "27 followers",
    "22 questions": "22 questions",
    "31 followers": "31 followers",
    "19 questions": "19 questions",
    "15 followers": "15 followers",
    "41 questions": "41 questions",
    "29 followers": "29 followers",
    "26 questions": "26 questions",
    "19 followers": "19 followers",
    "33 questions": "33 questions",
    "22 followers": "22 followers",
    "17 questions": "17 questions",
    "24 followers": "24 followers",
    "28 questions": "28 questions",
    "16 followers": "16 followers",
    "14 questions": "14 questions",
    "12 followers": "12 followers",
    "31 questions": "31 questions",
    "25 followers": "25 followers",
    "21 questions": "21 questions",
    "Sarah Miller": "Sarah Miller",
    "Mike Johnson": "Mike Johnson",
    "Intelligent": "Intelligent",
    "Start Today": "Start Today",
    "Read More ▼": "Soma Zaidi ▼",
    "Kevin Mutua": "Kevin Mutua",
    "Alex Otieno": "Alex Otieno",
    "Server Type": "Aina ya Seva",
    "Users total": "Jumla ya Watumiaji",
    "Final Sales": "Final Sales",
    "Usage Data:": "Usage Data:",
    "permissions": "permissions",
    "integration": "integration",
    "performance": "performance",
    "2 hours ago": "2 hours ago",
    "Add comment": "Add comment",
    "Rising Star": "Rising Star",
    "Contributor": "Contributor",
    "UX Designer": "UX Designer",
    "Integrated": "Integrated",
    "Thank You!": "Asante!",
    "Categories": "Makundi",
    "2 days ago": "2 days ago",
    "5 days ago": "5 days ago",
    "3 days ago": "3 days ago",
    "4 days ago": "4 days ago",
    "6 days ago": "6 days ago",
    "1 week ago": "1 week ago",
    "ISO 27001:": "ISO 27001:",
    "Forensics:": "Forensics:",
    "Your Data:": "Your Data:",
    "Topic Tags": "Lebo za Mada",
    "Unanswered": "Yasiyojibiwa",
    "Most Voted": "Iliyopigiwa Kura Zaidi",
    "admin_user": "admin_user",
    "Be patient": "Be patient",
    "deployment": "deployment",
    "Moderators": "Moderators",
    "Admin User": "Admin User",
    "Reputation": "Reputation",
    "KSH 1,400": "KSH 1,400",
    "Technical": "Kiufundi",
    "In-Person": "Ana kwa Ana",
    "July 2026": "July 2026",
    "Location:": "Location:",
    "Duration:": "Duration:",
    "KEN82-493": "KEN82-493",
    "1 day ago": "1 day ago",
    "User Type": "Aina ya Mtumiaji",
    "User type": "User type",
    "Following": "Unazofuata",
    "Questions": "Maswali",
    "My setup:": "My setup:",
    "2 Answers": "2 Answers",
    "reporting": "reporting",
    "Tag Cloud": "Tag Cloud",
    "All Users": "All Users",
    "New Users": "New Users",
    "Moderator": "Moderator",
    "Lisa Wang": "Lisa Wang",
    "Cohesive": "Cohesive",
    "John Doe": "John Doe",
    "Save 15%": "Save 15%",
    "Location": "Mahali",
    "Duration": "Muda",
    "save 15%": "save 15%",
    "Standard": "Standard",
    "Per user": "Per user",
    "Checkout": "Kamilisha Malipo",
    "PCI DSS:": "PCI DSS:",
    "Billing:": "Billing:",
    "Refunds:": "Refunds:",
    "john_doe": "john_doe",
    "database": "database",
    "security": "security",
    "dev_mike": "dev_mike",
    "45 times": "45 times",
    "All Tags": "Lebo Zote",
    "Used By": "Inatumiwa Na",
    "&times;": "&times;",
    "KSH 700": "KSH 700",
    "&#8592;": "&#8592;",
    "&#8594;": "&#8594;",
    "Hosting": "Uyezo wa Wingu",
    "Summary": "Muhtasari",
    "Billing": "Billing",
    "KES 700": "KES 700",
    "Partner": "Partner",
    "Uptime:": "Uptime:",
    "By You:": "By You:",
    "answers": "majibu",
    "sarah_m": "sarah_m",
    "Answers": "Majibu",
    "modules": "modules",
    "Popular": "Maarufu",
    "Regular": "Regular",
    "45 min": "45 min",
    "Online": "Online",
    "60 min": "60 min",
    "30 min": "30 min",
    "90 min": "90 min",
    "Email:": "Email:",
    "M-PESA": "M-PESA",
    "HIPAA:": "HIPAA:",
    "By Us:": "By Us:",
    "Active": "Hai",
    "Newest": "Mpyanai",
    "backup": "backup",
    "update": "update",
    "← Prev": "← Prev",
    "Viewed": "Viewed",
    "Please": "Please",
    "log in": "log in",
    "Recent": "Hivi Karibuni",
    "mobile": "mobile",
    "Member": "Member",
    "★★★★★": "★★★★★",
    "Demos": "Majaribio",
    "Date:": "Date:",
    "Time:": "Time:",
    "Name:": "Name:",
    "CO421": "CO421",
    "Go to": "Go to",
    "Click": "Click",
    "Users": "Watumiaji",
    "KES 0": "KES 0",
    "CVV *": "Nambari ya CVV *",
    "MM/YY": "MM/YY",
    "GDPR:": "GDPR:",
    "votes": "kura",
    "email": "email",
    "users": "users",
    "Title": "Title",
    "Asked": "Asked",
    "Apps": "Programu",
    "Free": "Bure",
    "Date": "Tarehe",
    "Time": "Muda",
    "Open": "Open",
    "Plan": "Plan",
    "Tags": "Tags",
    "ΓåÉ": "ΓåÉ",
    "ΓåÆ": "ΓåÆ",
    "N14": "N14",
    "All": "All",
    "api": "api",
    "A-Z": "A-Z",
    "New": "New",
    "👁": "👁",
    "💬": "💬",
    "PO": "PO",
    "JW": "JW",
    "KM": "KM",
    "DA": "DA",
    "AO": "AO",
    "MN": "MN",
    "EN": "EN",
    "FO": "FO",
    "CK": "CK",
    "🔍": "🔍",
    "JD": "JD",
    "SM": "SM",
    "DM": "DM",
    "AU": "AU",
    "LW": "LW",
    "RG": "RG",
    "TS": "TS",
  };

  // ============================================================
  // MASTER TRANSLATION TABLE
  // Keys are English phrases (verbatim from HTML), values are Swahili
  // Longer phrases first to prevent partial replacement conflicts
  // ============================================================
  const T = {
    // Added missing translations
    "One App Free": "One App Free",
    "Standard (All-in-One)": "Standard (All-in-One)",
    "Custom / Enterprise": "Custom / Enterprise",
    "Flexible Packages for Every Sugar Operation": "Flexible Packages for Every Sugar Operation",
    "Simple, predictable pricing with no hidden fees or user lock‑ins.": "Simple, predictable pricing with no hidden fees or user lock‑ins.",
    // ... (additional missing phrases can be added similarly)
    
    // Country labels
    "COUNTRY_LABELS": {
      "KE": "Kenya 🇰🇪",
      "TZ": "Tanzania 🇹🇿",
      "UG": "Uganda 🇺🇬",
      "RW": "Rwanda 🇷🇼",
      "BI": "Burundi 🇧🇮"
    },

    // ---- HERO SECTION ----
    "Precision Outgrower & Sugar Mill ERP Engine": "Mfumo Thabiti wa ERP wa Wakulima na Kiwanda cha Sukari",
    "Streamline field GPS plot mapping, grower contract signing, automated weighbridge gross/tare scales, sucrose laboratory quality, and instant payout processing.": "Simamia ramani za GPS za mashamba, mikataba ya wakulima, mizani ya uzito kiwandani, vipimo vya sukari maabara, na malipo ya haraka.",
    "Sugar Factory & Field Operations Cloud ERP": "Mfumo wa ERP wa Wingu wa Kiwanda cha Sukari na Kilimo",
    "View Pricing Tiers": "Angalia Bei na Mipango",

    // ---- NAV / HEADER ----
    "Apps & Modules": "Programu na Moduli",
    "Used By (Industries)": "Wanaotumia (Viwanda)",
    "Community": "Jamii",
    "Features": "Vipengele",
    "Pricing": "Bei",
    "Help": "Msaada",
    "Help Center": "Kituo cha Msaada",
    "Sign in": "Ingia",
    "Sign In": "Ingia",
    "Request Demo": "Omba Jaribio",
    "Back to Main Menu": "Rudi Kwenye Menyu Kuu",
    "Apps & Core Modules": "Programu na Moduli Kuu",
    "Industries & Operational Scale": "Viwanda na Kiwango cha Uendeshaji",

    // ---- MEGA MENU: APPS ----
    "Synergy Bravo ERP — Applications Suite": "Synergy Bravo ERP — Suti ya Programu",
    "Complete enterprise modules tailored for sugar cane mills, agricultural supply chains, and factory operations.": "Moduli kamili za shirika zilizoundwa kwa ajili ya viwanda vya sukari, minyororo ya ugavi wa kilimo, na shughuli za kiwanda.",
    "Agriculture & Field Operations": "Kilimo na Shughuli za Nyanjani",
    "Factory & Milling Operations": "Kiwanda na Shughuli za Usagaji",
    "Enterprise Core & AI": "Msingi wa Shirika na AI",
    "Farmer & Field Mobile": "Simu ya Mkulima na Shamba",
    "Plot mapping, grower contracts, harvest scheduling, GPS tracking": "Ramani za viwanja, mikataba ya wakulima, ratiba ya kuvuna, ufuatiliaji wa GPS",
    "Weighbridge Scale Sync": "Usawazishaji wa Mizani ya Kiwanda",
    "Gross & tare scale automation, grower tickets, lab sucrose sync": "Otomatiki ya uzito wa jumla na chombo, tiketi za wakulima, maabara",
    "Sugar Mill Processing": "Usindikaji wa Kiwanda cha Sukari",
    "Milling rate, juice extraction, boiler energy, lab quality": "Kasi ya kusaga, uchujaji wa juisi, nishati ya boila, ubora wa maabara",
    "Supply Chain & Inventory": "Mnyororo wa Ugavi na Hifadhi",
    "Raw cane queue, sugar warehouse, logistics & dispatch": "Foleni ya miwa mbichi, ghala la sukari, logistiki na usafirishaji",
    "Financials & Settlements": "Fedha na Malipo",
    "Grower settlements, multi-currency invoicing, payroll, ledger": "Malipo ya wakulima, invoisi ya sarafu nyingi, mishahara, daftari",
    "AI & Real-Time Traceability": "AI na Ufuatiliaji wa Wakati Halisi",
    "Laboratory AI analytics, predictive yield, real-time sensor sync": "Uchambuzi wa AI maabara, mavuno ya kutabiriwa, usawazishaji wa sensori",

    // ---- MEGA MENU: USED BY ----
    "Designed for enterprise sugar producers, cooperatives, logistics fleets, and commodity exporters.": "Imeundwa kwa wazalishaji wa sukari wa biashara, vyama vya ushirika, mafundi ya usafirishaji, na wasafirishaji wa bidhaa.",
    "Sugar Milling Industry": "Sekta ya Usagaji Sukari",
    "Sugar Mills & Refineries": "Viwanda vya Sukari na Usafishaji",
    "Integrated milling, juice extraction, and sugar quality control": "Usagaji uliounganishwa, uchujaji wa juisi, na udhibiti wa ubora wa sukari",
    "Agro-Industrial Enterprises": "Mashirika ya Kilimo na Viwanda",
    "Large-scale plantation management, farmer contracts, & field mobile": "Usimamizi wa mashamba makubwa, mikataba ya wakulima, na simu ya shamba",
    "Grower Networks & Cooperatives": "Mitandao ya Wakulima na Vyama vya Ushirika",
    "Cooperative Farmer Networks": "Mitandao ya Wakulima wa Vyama vya Ushirika",
    "Harvest scheduling, cane delivery tracking, & weighbridge ticket sync": "Ratiba ya kuvuna, ufuatiliaji wa utoaji wa miwa, na usawazishaji wa tiketi za mizani",
    "Logistics & Commodity Trade": "Logistiki na Biashara ya Bidhaa",
    "Transport & Logistics Fleets": "Mafundi ya Usafirishaji na Logistiki",
    "Fleet GPS, weighbridge queue management, & scale automation": "GPS ya mafundi, usimamizi wa foleni ya mizani, na otomatiki ya mizani",
    "Export & Commodity Trading": "Biashara ya Kuuza Nje na Bidhaa",
    "Warehouse inventory, export documentation, & sugar invoicing": "Hifadhi ya ghala, nyaraka za usafirishaji nje, na invoisi za sukari",

    // ---- STATS BAR ----
    "Active Sugar Mills": "Viwanda vya Sukari Vinavyotumia",
    "Registered Outgrower Farmers": "Wakulima Waliosajiliwa",
    "Tons of Cane Weighed Daily": "Tani za Miwa Zinazopimwa Kila Siku",
    "Cloud Uptime SLA": "Uhakika wa Mfumo Wingu",

    // ---- FEATURES SECTION (Section 1) ----
    "Features": "Vipengele",
    "Why Sugar Farmers choose Synergy Bravo ERP": "Kwa Nini Wakulima wa Sukari Wanachagua Synergy Bravo ERP",

    // Features Carousel — Slide 1
    "Cane Procurement & Field Operations": "Ununuzi wa Miwa na Shughuli za Nyanjani",
    "Digital grower contracting & registration": "Mikataba ya kidijitali ya wakulima na usajili",
    "GPS plot mapping & acreage audit": "Ramani za GPS za viwanja na ukaguzi wa eneo",
    "Harvest scheduling & cutting tickets": "Ratiba ya kuvuna na tiketi za kukata",
    "Weighbridge gross/tare scale sync": "Usawazishaji wa mizani ya uzito wa jumla/chombo",
    "Field lab sucrose testing & quality link": "Vipimo vya sukari maabara shambani na kiungo cha ubora",
    "Transporter trip dispatch & tracking": "Utumaji na ufuatiliaji wa safari ya msafirishaji",
    "Grower mobile portal & SMS alerts": "Tovuti ya simu ya mkulima na arifa za SMS",

    // Features Carousel — Slide 2
    "Sugar Mill & Factory Operations": "Kiwanda cha Sukari na Shughuli za Kiwanda",
    "Real-time milling rate (TCH) tracking": "Ufuatiliaji wa kasi ya kusaga (TCH) kwa wakati halisi",
    "Juice extraction & boiler steam balance": "Uchujaji wa juisi na usawa wa mvuke wa boila",
    "Raw cane queue & weighbridge sync": "Foleni ya miwa mbichi na usawazishaji wa mizani",
    "Sugar bag warehouse & batch control": "Ghala la mifuko ya sukari na udhibiti wa kundi",
    "Factory equipment preventive maintenance": "Matengenezo ya kuzuia ya vifaa vya kiwanda",
    "Laboratory AI analytics & sucrose yield": "Uchambuzi wa AI maabara na mavuno ya sukari",
    "Molasses & ethanol output tracking": "Ufuatiliaji wa uzalishaji wa molasi na ethanol",

    // Features Carousel — Slide 3
    "Grower Settlements & Financials": "Malipo ya Wakulima na Fedha",
    "Automated grower sucrose payout calculations": "Hesabu za otomatiki za malipo ya sukari ya wakulima",
    "Harvesting & transport cost deductions": "Makato ya gharama za kuvuna na usafirishaji",
    "Multi-currency sugar sales invoicing": "Invoisi za mauzo ya sukari ya sarafu nyingi",
    "Seasonal labor & factory payroll": "Mishahara ya wafanyakazi wa msimu na kiwanda",
    "General ledger & cost center accounting": "Daftari kuu na uhasibu wa kituo cha gharama",
    "Bank sync & automated payment exports": "Usawazishaji wa benki na usafirishaji wa malipo ya otomatiki",
    "Audit-ready financial reporting": "Ripoti za fedha tayari kwa ukaguzi",

    // ---- APPS PANEL ----
    "Sugar Farming Industry Apps": "Programu za Sekta ya Kilimo cha Sukari",
    "Selected Modules:": "Moduli Zilizochaguliwa:",
    "Clear Selections": "Futa Machaguo",
    "Search apps (e.g. Weighbridge, Milling, Financial)...": "Tafuta programu (mfano Mizani, Usagaji, Fedha)...",
    "Farmers Recruitment & Cane": "Uajiri wa Wakulima na Miwa",
    "Nucleus & Farm Operations": "Shughuli za Kiini na Shamba",
    "Harvesting & Transport": "Kuvuna na Usafirishaji",
    "Weighbridge": "Mizani ya Kiwanda",
    "Fleet Management": "Usimamizi wa Mafundi",
    "MRP & Inventory": "MRP na Hifadhi",
    "Production": "Uzalishaji",
    "Sales & Invoicing": "Mauzo na Invoisi",
    "Financial Management": "Usimamizi wa Fedha",
    "HR & Payroll": "Rasilimali Watu na Mishahara",
    "Features": "Vipengele",
    "More Info": "Maelezo Zaidi",

    // ---- TESTIMONIALS SECTION ----
    "What People Say": "Watu Wanasema Nini",
    "\"Synergy Sugar streamlined our entire cane harvesting and weighbridge operations across 4,000+ farmers. We moved faster, eliminated queue delays, and cut leakages.\"": "\"Synergy Sugar ilisimamia shughuli zetu zote za kuvuna miwa na mizani kwa wakulima 4,000+. Tulisonga haraka, tuliondoa ucheleweshaji wa foleni, na tulikata upotevu.\"",
    "David O. — Operations Director, Nyanza Sugar Mills": "David O. — Mkurugenzi wa Shughuli, Viwanda vya Sukari vya Nyanza",
    "\"Our field teams and contracted farmers actually enjoy the digital contracting & payment tools. Farmer recruitment went from paper chaos to digital clarity.\"": "\"Timu zetu za shambani na wakulima walioajiriwa wanafurahia zana za mikataba ya kidijitali na malipo. Uajiri wa wakulima ulibadilika kutoka msururu wa karatasi hadi uwazi wa kidijitali.\"",
    "Emmanuel K. — Field Logistics Lead, Western Kenya Sugar Co.": "Emmanuel K. — Kiongozi wa Logistiki za Shamba, Western Kenya Sugar Co.",
    "\"From Nucleus farm operations to automated mill invoicing, the platform is reliable and built specifically for East African sugar companies.\"": "\"Kutoka shughuli za shamba za Nucleus hadi invoisi za kiwanda za otomatiki, jukwaa ni la kuaminika na limeundwa mahsusi kwa makampuni ya sukari ya Afrika Mashariki.\"",
    "Grace M. — Financial Controller, Rift Valley Sugar Syndicate": "Grace M. — Mthibiti wa Fedha, Rift Valley Sugar Syndicate",

    // ---- AI TRACEABILITY SECTION ----
    "AI-Powered Traceability Network": "Mtandao wa Ufuatiliaji Unaotumia AI",
    "Continuous automated AI synchronization connecting farmer recruitment, field sensors, fleet GPS, weighbridges, and mill processing in real time.": "Usawazishaji wa otomatiki wa AI unaoendelea kuunganisha uajiri wa wakulima, sensori za shamba, GPS ya mafundi, mizani, na usindikaji wa kiwanda kwa wakati halisi.",

    // ---- ACCESS FROM ALL DEVICES SECTION ----
    "Access from All Devices": "Fikia kutoka Vifaa Vyote",
    "Stay seamlessly connected across web, tablet, and mobile with a secure, unified experience. Your farm, fleet, and weighbridge data follows you and your team — anywhere, anytime.": "Kaa umiunganishwa bila matatizo katika wavuti, kompyuta kibao, na simu na uzoefu salama na umoja. Data ya shamba lako, mafundi, na mizani inakufuata wewe na timu yako — mahali popote, wakati wowote.",
    "Real-time instant cloud synchronization": "Usawazishaji wa wingu wa papo hapo kwa wakati halisi",
    "Optimized UI tailored for desktop, tablet & mobile": "Kiolesura kilichoboreshwa kwa kompyuta, kibao na simu",
    "Offline-first field data collection & queue sync": "Ukusanyaji wa data ya shamba ya nje ya mtandao na usawazishaji wa foleni",
    "Enterprise-grade SSO & role-based security": "SSO ya kiwango cha shirika na usalama kulingana na jukumu",

    // ---- ENTERPRISE SECTION ----
    "Enterprise Sugar ERP Apps Done Right": "Programu za ERP za Sukari za Shirika Zilizofanywa Vizuri",
    "Reliability": "Kuaminika",
    "99.99% uptime and robust SLAs your team can depend on.": "Uptime wa 99.99% na SLA imara ambazo timu yako inaweza kutegemea.",
    "Security": "Usalama",
    "Encryption, audit trails, and fine-grained permissions by default.": "Usimbaji fiche, njia za ukaguzi, na ruhusa nzuri kwa default.",
    "Scale": "Ukubwa",
    "From local races to national coalitions — without friction.": "Kutoka mashindano ya ndani hadi muungano wa kitaifa — bila mgongano.",
    "Support": "Msaada",
    "White-glove onboarding and success partners, every step.": "Usajili wa ubora wa juu na washirika wa mafanikio, kila hatua.",

    // ---- FOOTER ----
    "Part of our larger Agribusiness ERP ecosystem.": "Sehemu ya mfumo wetu mkubwa wa ERP wa Biashara ya Kilimo.",
    "Company": "Kampuni",
    "Home": "Nyumbani",
    "Support & Legal": "Msaada na Sheria",
    "Contact Us": "Wasiliana Nasi",
    "Privacy Policy": "Sera ya Faragha",
    "Terms of Service": "Vigezo na Masharti",
    "Connect with us": "Wasiliana nasi",

    // ---- MOBILE DRAWER ----
    "← Back to Main Menu": "← Rudi Menyu Kuu",
    "Apps & Core Modules": "Programu na Moduli Kuu",
    "Industries & Operational Scale": "Viwanda na Kiwango cha Uendeshaji",
    "Milling rate, juice extraction, lab quality": "Kasi ya kusaga, uchujaji wa juisi, ubora wa maabara",
    "Raw cane queue, sugar warehouse": "Foleni ya miwa mbichi, ghala la sukari",
    "Grower settlements, invoicing, payroll": "Malipo ya wakulima, invoisi, mishahara",
    "Plot mapping, grower contracts, GPS tracking": "Ramani za viwanja, mikataba ya wakulima, ufuatiliaji wa GPS",
    "Gross & tare automation, tickets": "Otomatiki ya jumla na chombo, tiketi",
    "Laboratory AI analytics, predictive yield": "Uchambuzi wa AI maabara, mavuno ya kutabiriwa",
    "Integrated milling & quality control": "Usagaji uliounganishwa na udhibiti wa ubora",
    "Plantation management & contracts": "Usimamizi wa mashamba makubwa na mikataba",
    "Harvest scheduling & ticket sync": "Ratiba ya kuvuna na usawazishaji wa tiketi",
    "Fleet GPS & weighbridge queue": "GPS ya mafundi na foleni ya mizani",
    "Warehouse inventory & sugar invoicing": "Hifadhi ya ghala na invoisi za sukari",

    // ---- AUTH MODAL ----
    "Welcome Back": "Karibu Tena",
    "Sign in to your Synergy Bravo ERP account": "Ingia kwenye akaunti yako ya Synergy Bravo ERP",
    "Don't have an account?": "Huna akaunti?",
    "Create an Account": "Fungua Akaunti",
    "Start onboarding for Synergy Bravo ERP": "Anza mchakato wa usajili wa Synergy Bravo ERP",
    "Register & Continue Onboarding": "Sajili Na Uendelee Na Usajili",
    "Already have an account?": "Tayari unayo akaunti?",
    "Reset Password": "Badilisha Nenosiri",
    "Enter your work email address to receive a password reset link": "Weka barua pepe yako ya kazi ili kupokea kiungo cha kubadilisha nenosiri",
    "Send Reset Link": "Tuma Kiungo cha Kubadilisha",
    "Remember your password?": "Kumbuka nenosiri yako?",
    "Work Email Address": "Anwani ya Barua Pepe ya Kazi",
    "Password": "Nenosiri",
    "Forgot password?": "Umesahau nenosiri?",
    "Sign Up": "Jisajili",
    "Full Name": "Jina Kamili",
    "Company / Sugar Mill Name": "Jina la Kampuni / Kiwanda cha Sukari",
    "Confirm Password": "Thibitisha Nenosiri",
    "M-PESA Registered Phone Number": "Nambari ya Simu Iliyosajiliwa M-PESA",
    "Card Number (Visa / Mastercard)": "Nambari ya Kadi (Visa / Mastercard)",

    // ---- PRICING PAGE ----
    "Monthly": "Kila Mwezi",
    "Yearly": "Kila Mwaka",
    "month": "mwezi",
    "year": "mwaka",
    "/ month": "/ mwezi",
    "/ year": "/ mwaka",
    "per month": "kwa mwezi",
    "per year": "kwa mwaka",
    "Save 20%": "Okoa 20%",
    "Get Started": "Anza",
    "Contact Sales": "Wasiliana na Mauzo",
    "Most Popular": "Maarufu Zaidi",
    "1 App Selected • Unlimited Users": "Programu 1 Iliyochaguliwa • Watumiaji Wasio na Kikomo",
    "All 10 Apps Included • Unlimited Users": "Programu Zote 10 Zimejumuishwa • Watumiaji Wasio na Kikomo",
    "Multi-Site & Dedicated Cloud": "Tovuti Nyingi na Wingu la Kibinafsi",
    "Custom Hardware & Lab API Integration": "Ushirikiano wa Vifaa Maalum na API ya Maabara",
    "Dedicated Technical Account Manager": "Msimamizi wa Akaunti wa Kiufundi wa Kibinafsi",
    "24/7 Priority SLA & On-Site Training": "SLA ya Kipaumbele 24/7 na Mafunzo ya Mahali Hapo",
    "Frequently Asked Questions": "Maswali Yanayoulizwa Mara kwa Mara",
    "What's included in each plan?": "Nini Kimejumuishwa katika Kila Mpango?",
    "Can I start with one app and expand later?": "Naweza Kuanza na Programu Moja na Kupanua Baadaye?",
    "Is there a long-term contract?": "Je, Kuna Mkataba wa Muda Mrefu?",
    "What payment methods do you accept?": "Ni Njia Gani za Malipo Mnazokubali?",
    "Do you offer on-site training and implementation support?": "Je, Mnatoa Mafunzo ya Mahali Hapo na Msaada wa Utekelezaji?",
    "How does the weighbridge hardware integration work?": "Je, Ushirikiano wa Vifaa vya Mizani Unafanya Kazi Vipi?",

    // ---- FEATURES PAGE ----
    "Complete Agribusiness Feature Suite": "Suti Kamili ya Vipengele vya Biashara ya Kilimo",
    "End-to-end sugar mill automation from outgrower plots to warehouse sales.": "Otomatiki ya kiwanda cha sukari kutoka mashamba ya wakulima hadi mauzo ya ghala.",
    "Laboratory & Quality Control": "Maabara na Udhibiti wa Ubora",
    "Factory Milling & Extraction": "Usagaji na Uchujaji wa Kiwanda",
    "Inventory & Warehouse": "Hifadhi na Ghala",
    "Logistics & Transport GPS": "Logistiki na GPS ya Usafirishaji",
    "Sales & Export Trading": "Mauzo na Biashara ya Nje",
    "Maintenance & Equipment Asset": "Ukarabati na Rasilimali za Vifaa",
    "AI Traceability & Yield Forecast": "Ufuatiliaji wa AI na Utabiri wa Mavuno",
    "Outgrower & Field Management": "Usimamizi wa Wakulima na Shamba",

    // ---- COMMUNITY / FORUM ----
    "Community Forum": "Jukwaa la Jamii",
    "Synergy Sugar Community": "Jamii ya Synergy Sugar",
    "Join the conversation": "Jiunge na mazungumzo",
    "Start a Discussion": "Anza Majadiliano",
    "Recent Discussions": "Majadiliano ya Hivi Karibuni",
    "Popular Topics": "Mada Maarufu",
    "Ask a Question": "Uliza Swali",
    "Share Knowledge": "Shiriki Maarifa",
    "replies": "majibu",
    "views": "mionekano",
    "Posted by": "Imeandikwa na",
    "Latest Activity": "Shughuli ya Hivi Karibuni",
    "All Topics": "Mada Zote",
    "Trending": "Inayoendelea",

    // ---- HELP PAGE ----
    "Help Center": "Kituo cha Msaada",
    "Search for articles...": "Tafuta makala...",
    "Getting Started": "Kuanza",
    "Weighbridge Integration": "Ushirikiano wa Mizani",
    "Farmer Management": "Usimamizi wa Wakulima",
    "Financial Reports": "Ripoti za Fedha",
    "All Articles": "Makala Zote",
    "Read more": "Soma zaidi",
    "Was this helpful?": "Je, hii ilikuwa ya msaada?",
    "Yes": "Ndiyo",
    "No": "Hapana",

    // ---- HELP PAGE — categories, filters, buttons, comments ----
    "Filter & Sort": "Chuja na Panga",
    "All Topics": "Mada Zote",
    "Farmer Operations": "Shughuli za Wakulima",
    "Weighbridge & Mill": "Mizani na Kiwanda",
    "Financials & Payroll": "Fedha na Mishahara",
    "Inventory & Sales": "Hifadhi na Mauzo",
    "Troubleshooting": "Utatuzi wa Matatizo",
    "Most Popular": "Maarufu Zaidi",
    "Recently Added": "Zilizoongezwa Hivi Karibuni",
    "Alphabetical (A-Z)": "Kwa Alfabeti (A-Z)",
    "Full Page View ↗": "Angalia Ukurasa Kamili ↗",
    "Read More ▼": "Soma Zaidi ▼",
    "Read Less ▲": "Soma Kidogo ▲",
    "Farmer Operations": "Shughuli za Wakulima",

    // ---- HELP PAGE — article badges / meta ----
    "Weighbridge & Mill": "Mizani na Kiwanda",
    "Getting Started": "Kuanza",
    "Financial Reports": "Ripoti za Fedha",
    "Inventory & Sales": "Hifadhi na Mauzo",

    // ---- HELP PAGE — comment section ----
    "💬 Community Discussion": "💬 Majadiliano ya Jamii",
    "Want to join the discussion or ask a question?": "Unataka kujiunge na majadiliano au kuuliza swali?",
    "Sign in to your Synergy Bravo ERP account or register to post comments, share operational insights, and ask our technical team questions about this article.": "Ingia kwenye akaunti yako ya Synergy Bravo ERP au jisajili ili kutuma maoni, kushiriki uzoefu wa uendeshaji, na kuuliza timu yetu ya kiufundi maswali kuhusu makala hii.",
    "Sign In to Comment": "Ingia ili Kutoa Maoni",
    "Register Free": "Jisajili Bure",
    "Post a comment as a verified user": "Toa maoni kama mtumiaji aliyethibitishwa",
    "Write your comment, question, or field experience here...": "Andika maoni yako, swali, au uzoefu wa shambani hapa...",
    "Post Comment": "Chapisha Maoni",
    "Submit Comment": "Tuma Maoni",

    // ---- SIGN-IN MODAL ----
    "Welcome Back": "Karibu Tena",
    "Sign in to your Synergy Bravo ERP account": "Ingia kwenye akaunti yako ya Synergy Bravo ERP",
    "Create an Account": "Fungua Akaunti",
    "Start onboarding for Synergy Bravo ERP": "Anza usajili wa Synergy Bravo ERP",
    "Full Name": "Jina Kamili",
    "Company / Sugar Mill Name": "Jina la Kampuni / Kiwanda cha Sukari",
    "Work Email Address": "Anwani ya Barua Pepe ya Kazi",
    "Password": "Nenosiri",
    "Confirm Password": "Thibitisha Nenosiri",
    "Forgot password?": "Umesahau nenosiri?",
    "Register & Continue Onboarding": "Jisajili na Endelea na Usajili",
    "Don't have an account?": "Huna akaunti?",
    "Already have an account?": "Una akaunti tayari?",
    "Sign Up": "Jisajili",
    "Reset Password": "Weka upya Nenosiri",
    "Enter your work email address to receive a password reset link": "Weka barua pepe yako ya kazi ili kupokea kiungo cha kubadilisha nenosiri",
    "Send Reset Link": "Tuma Kiungo cha Kubadilisha",
    "Remember your password?": "Kumbuka nenosiri yako?",

    // ---- PRICING PAGE STRINGS ----
    "Simple, Transparent Pricing": "Bei Rahisi na Wazi",
    "Flexible Packages for Every Sugar Operation": "Vifurushi Vinavyobadilika kwa Kila Shughuli ya Sukari",
    "Simple, predictable pricing with no hidden fees or user lock-ins.": "Bei rahisi, zinazotabirika bila ada zilizofichwa au vizuizi.",
    "One App Free": "Programu Moja Bure",
    "Standard (All-in-One)": "Kawaida (Yote Pamoja)",
    "Custom / Enterprise": "Kawaida / Shughuli Kubwa",
    "Start Now — Free": "Anza Sasa — Bure",
    "Buy Now — All Apps": "Nunua Sasa — Programu Zote",
    "Contact Sales": "Wasiliana na Mauzo",
    "Monthly": "Kila Mwezi",
    "Yearly": "Kila Mwaka",
    "Save 15%": "Okoa 15%",

    // ---- REQUEST DEMO (APPOINTMENT) STRINGS ----
    "Online": "Mtandaoni",
    "In-Person": "Ana kwa Ana",
    "Booking Summary": "Muhtasari wa Kuweka Nafasi",
    "Sales Consultation": "Ushauri wa Mauzo",
    "Technical Demo": "Onyesho la Kiufundi",
    "Onboarding & Training": "Usajili na Mafunzo",
    "Service": "Huduma",
    "Date & Time": "Tarehe na Wakati",
    "Location": "Eneo",

    // ---- HERO SLIDES & CTAS ----
    "Complete Enterprise ERP for Sugar Cane Mills & Farming": "ERP Kamili ya Biashara kwa Viwanda vya Sukari na Kilimo",
    "Weighbridge Scale Sync & Sucrose Field Analytics": "Mizani ya Kielektroniki na Uchambuzi wa Sucrose Shambani",
    "Outgrower Contracting & GPS Plot Mapping": "Mikataba ya Wakulima na Ramani za GPS za Mashamba",
    "Explore Apps": "Tazama Programu",
    "Intelligent": "Kielektroniki",
    "Cohesive": "Imeshikamana",
    "Integrated": "Iliyounganishwa",
    "A comprehensive platform": "Jukwaa kabambe",
    "Seamlessly connecting...": "Linalounganisha kikamilifu...",
    "procurement, accounting, sales, and analytics": "ununuzi, hesabu, mauzo, na takwimu",
    "Empowering Growth": "Kuwezesha Ukuaji",
    "With Data-Driven Insights": "Kwa Kutumia Takwimu",
    "Transform your business operations": "Kubadilisha shughuli za biashara yako",
    "Start Today": "Anza Leo",

    // ---- REQUEST DEMO & APPOINTMENT BOOKING PAGE ----
    "Request a Demo": "Omba Onyesho la Programu",
    "Choose the type of appointment that best fits your needs": "Chagua aina ya miadi inayofaa mahitaji yako",
    "Selected Demo Modules:": "Programu Zilizochaguliwa za Onyesho:",
    "All Appointments": "Miadi Yote",
    "Demos": "Maonyesho",
    "Consultations": "Ushauri",
    "Technical": "Kiteknolojia",
    "Live Product Demo": "Onyesho la Moja kwa Moja la Bidhaa",
    "Get a full walkthrough of Synergy Bravo ERP — from outgrower GPS plot mapping and weighbridge integration to grower settlements and factory analytics.": "Pata maelezo kamili ya Synergy Bravo ERP — kuanzia ramani ya GPS ya wakulima na uunganishaji wa mizani hadi malipo ya wakulima na uchambuzi wa kiwanda.",
    "Sales Consultation": "Ushauri wa Mauzo",
    "One-on-one consultation with our sugar ERP specialists to discuss your mill's specific operational needs, pricing, and implementation timeline.": "Ushauri wa ana kwa ana na wataalamu wetu wa ERP ya sukari ili kujadili mahitaji maalum ya kiwanda chako, bei, na ratiba ya utekelezaji.",
    "Technical Setup Session": "Kipindi cha Usanidi wa Kiteknolojia",
    "Work with our technical team to review weighbridge hardware integration, API requirements, and system connectivity for your sugar mill environment.": "Fanya kazi na timu yetu ya kiufundi kupitia uunganishaji wa vifaa vya mizani, mahitaji ya API, na muunganisho wa mfumo kwa mazingira ya kiwanda chako.",
    "Team Training Workshop": "Kipindi cha Mafunzo ya Timu",
    "Comprehensive onboarding training covering all modules: outgrower management, weighbridge, milling operations, financial settlements, and reporting.": "Mafunzo kabambe ya kuanzia yanayofunika moduli zote: usimamizi wa wakulima, mizani, shughuli za usagaji, malipo ya kifedha, na ripoti.",
    "45 min": "Daq 45",
    "60 min": "Daq 60",
    "30 min": "Daq 30",
    "90 min": "Daq 90",
    "Schedule Appointment": "Panga Miadi",
    "Appointments": "Miadi",
    "Select Date & Time": "Chagua Tarehe na Muda",
    "Requested Appointment:": "Miadi Inayoombwa:",
    "Available Times": "Muda Unaopatikana",
    "Booking Summary": "Muhtasari wa Kuweka Nafasi",
    "Appointment Type": "Aina ya Miadi",
    "Location": "Mahali",
    "Duration": "Muda",
    "Date": "Tarehe",
    "Time": "Saa",
    "Select a date": "Chagua tarehe",
    "Select a time": "Chagua muda",
    "Continue to Details": "Endelea kwa Maelezo",
    "Your Information": "Taarifa Zako",
    "Complete Your Booking": "Kamilisha Kuweka Nafasi",
    "Full Name *": "Jina Kamili *",
    "Email Address *": "Anwani ya Barua Pepe *",
    "Phone Number": "Nambari ya Simu",
    "Organization": "Shirika / Kampuni",
    "Additional Notes": "Maelezo Zaidi",
    "Back": "Rudi",
    "Confirm Booking": "Thibitisha Kuweka Nafasi",
    "Booking Confirmed!": "Kuweka Nafasi Kumedhibitishwa!",
    "Thank You!": "Asante!",
    "Your appointment has been successfully booked. You will receive a confirmation email shortly with the meeting details and calendar invite.": "Miadi yako imewekwa kikamilifu. Utapokea barua pepe ya uthibitisho hivi karibuni ikiwa na maelezo ya mkutano na mwaliko wa kalenda.",
    "Appointment:": "Miadi:",
    "Location:": "Mahali:",
    "Duration:": "Muda:",
    "Date:": "Tarehe:",
    "Time:": "Saa:",
    "Name:": "Jina:",
    "Email:": "Barua Pepe:",
    "Book Another Appointment": "Weka Miadi Inayofuata",
    "Back to Home": "Rudi Nyumbani",
    "Help Center": "Kituo cha Msaada",
    "Help & Support Center": "Kituo cha Msaada na Huduma",
    "Features & App Modules": "Vipengele na Programu za ERP",
    "Selected Modules:": "Programu Zilizochaguliwa:",
    "Clear Selections": "Futa Zilizochaguliwa",
    "Search apps (e.g. Weighbridge, Milling, Financial)...": "Tafuta programu (mf. Mizani, Kiwanda, Fedha)...",

    // ---- GENERAL COMMON STRINGS ----
    "Learn More": "Jifunze Zaidi",
    "View All": "Tazama Zote",
    "Get Started Free": "Anza Bure",
    "Book a Demo": "Weka Jaribio",
    "Watch Demo": "Tazama Jaribio",
    "Contact Us": "Wasiliana Nasi",
    "Loading...": "Inapakia...",
    "Submit": "Wasilisha",
    "Cancel": "Ghairi",
    "Close": "Funga",
    "Back": "Rudi",
    "Next": "Ijayo",
    "Previous": "Iliyotangulia",
    "Search": "Tafuta",
    "Filter": "Chuja",
    "Sort by": "Panga kwa",
    "Select Region / Market": "Chagua Eneo / Soko",
    "Select Language": "Chagua Lugha",

    // ---- REQUEST DEMO PAGE ----
    "Request a Live Demo": "Omba Jaribio la Moja kwa Moja",
    "Request Demo": "Omba Jaribio",
    "Your Name": "Jina Lako",
    "Your Email": "Barua Pepe Yako",
    "Company Name": "Jina la Kampuni",
    "Phone Number": "Nambari ya Simu",
    "Message": "Ujumbe",
    "Send Request": "Tuma Ombi",
    "Thank you! We'll be in touch shortly.": "Asante! Tutawasiliana nawe hivi karibuni.",

    // ---- BUY PAGE ----
    "Complete Your Purchase": "Kamilisha Ununuzi Wako",
    "Order Summary": "Muhtasari wa Agizo",
    "Billing Details": "Maelezo ya Bili",
    "Payment Method": "Njia ya Malipo",
    "Place Order": "Weka Agizo",
    "Subtotal": "Jumla ndogo",
    "Total": "Jumla",
    "Tax": "Kodi",
    "Discount": "Punguzo",
    
    "The Service, including all software, content, trademarks, and intellectual property, is owned by Synergy Bravo ERP or our licensors. You may not copy, modify, distribute, or create derivative works without our written permission.": "The Service, including all software, content, trademarks, and intellectual property, is owned by Synergy Bravo ERP or our licensors. You may not copy, modify, distribute, or create derivative works without our written permission.",
    "At Synergy Bravo ERP, security is our top priority. We implement industry-leading security measures to protect your business data and ensure the confidentiality, integrity, and availability of our services.": "At Synergy Bravo ERP, security is our top priority. We implement industry-leading security measures to protect your business data and ensure the confidentiality, integrity, and availability of our services.",
    "We retain your information for as long as your account is active or as needed to provide you services. You may request deletion of your data at any time, subject to legal retention requirements.": "We retain your information for as long as your account is active or as needed to provide you services. You may request deletion of your data at any time, subject to legal retention requirements.",
    "We may modify these Terms at any time. Material changes will be notified via email or in-app notification. Continued use of the Service after changes constitutes acceptance of the new Terms.": "We may modify these Terms at any time. Material changes will be notified via email or in-app notification. Continued use of the Service after changes constitutes acceptance of the new Terms.",
    "I'm trying to set up email notifications for my application but I can't seem to find the right configuration options in the admin panel. I've checked the documentation but it seems outdated.": "I'm trying to set up email notifications for my application but I can't seem to find the right configuration options in the admin panel. I've checked the documentation but it seems outdated.",
    "Generate the standard Kenya Sugar Board outgrower supply agreement. Capture the grower's electronic signature on device and print a Bluetooth thermal copy for the grower's record.": "Generate the standard Kenya Sugar Board outgrower supply agreement. Capture the grower's electronic signature on device and print a Bluetooth thermal copy for the grower's record.",
    "The GPS polygon auto-walk feature cut down our plot surveying time from 45 minutes to under 10 minutes per farm. Highly recommended for field teams working in large schemes.": "The GPS polygon auto-walk feature cut down our plot surveying time from 45 minutes to under 10 minutes per farm. Highly recommended for field teams working in large schemes.",
    "You agree to indemnify and hold harmless Synergy Bravo ERP from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.": "You agree to indemnify and hold harmless Synergy Bravo ERP from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.",
    "If internet connection drops, tickets automatically buffer to SQLite local storage. Do not restart terminal PC until queue reaches 0 after network reconnects.": "If internet connection drops, tickets automatically buffer to SQLite local storage. Do not restart terminal PC until queue reaches 0 after network reconnects.",
    "Record grower full name, National ID number, primary contact number, and payout channel (M-PESA B2C mobile wallet or Kenya Commercial Bank account number).": "Record grower full name, National ID number, primary contact number, and payout channel (M-PESA B2C mobile wallet or Kenya Commercial Bank account number).",
    "Get a full walkthrough of Synergy Bravo ERP — from outgrower GPS plot mapping and weighbridge integration to grower settlements and factory analytics.": "Pata maelezo kamili ya Synergy Bravo ERP — kutoka ramani za GPS za mashamba ya wakulima na ushirikiano wa mizani hadi malipo ya wakulima na uchambuzi wa kiwanda.",
    "Comprehensive onboarding training covering all modules: outgrower management, weighbridge, milling operations, financial settlements, and reporting.": "Mafunzo kamili ya usajili yanayofunika moduli zote: usimamizi wa wakulima, mizani, shughuli za usagaji, malipo ya fedha, na utoaji wa ripoti.",
    "Does the offline M-PESA phone number validation verify national ID names automatically once back online? This would help prevent registration typos.": "Does the offline M-PESA phone number validation verify national ID names automatically once back online? This would help prevent registration typos.",
    "Synergy Sugar integrates with LoRaWAN and cellular telemetry sensors to monitor soil moisture, sucrose accumulation, and micro-climate risk factors.": "Synergy Sugar integrates with LoRaWAN and cellular telemetry sensors to monitor soil moisture, sucrose accumulation, and micro-climate risk factors.",
    "Work with our technical team to review weighbridge hardware integration, API requirements, and system connectivity for your sugar mill environment.": "Fanya kazi na timu wetu wa kiufundi kupitia ushirikiano wa vifaa vya mizani, mahitaji ya API, na muunganisho wa mfumo kwa mazingira ya kiwanda chako cha sukari.",
    "The automatic temperature correction for refractometer Brix readings saved our lab technicians substantial calculation time during shift changes.": "The automatic temperature correction for refractometer Brix readings saved our lab technicians substantial calculation time during shift changes.",
    "One-on-one consultation with our sugar ERP specialists to discuss your mill's specific operational needs, pricing, and implementation timeline.": "Mashauriano ya mtu binafsi na wataalamu wetu wa ERP ya sukari ili kujadili mahitaji maalum ya kiwanda chako, bei, na muda wa utekelezaji.",
    "Technical setup for connecting load cells, automated gross and tare weight locking, driver RFID trip tickets, and weight calculation formulas.": "Technical setup for connecting load cells, automated gross and tare weight locking, driver RFID trip tickets, and weight calculation formulas.",
    "In addition to what sarah_m mentioned, you should also check your server's email logs to see if the emails are being sent but not delivered.": "In addition to what sarah_m mentioned, you should also check your server's email logs to see if the emails are being sent but not delivered.",
    "Your appointment has been successfully booked. You will receive a confirmation email shortly with the meeting details and calendar invite.": "Miadi yako imewekwa kikamilifu. Utapokea barua pepe ya uthibitisho hivi karibuni yenye maelezo ya mkutano na mwaliko wa kalenda.",
    "Calculate grower gross earnings from delivered cane tonnage and automatically net against fertilizer advances and transport deductions.": "Hesabu mapato kamili ya wakulima kutoka tani za miwa zilizowasilishwa na ukate gharama za mbolea na usafirishaji kwa otomatiki.",
    "The multi-scale tare balancing prevented weight tampering effectively during peak crushing season. Essential read for scale engineers.": "The multi-scale tare balancing prevented weight tampering effectively during peak crushing season. Essential read for scale engineers.",
    "Synergy Bravo ERP provides cloud-based enterprise resource planning software that helps businesses manage their operations including:": "Synergy Bravo ERP provides cloud-based enterprise resource planning software that helps businesses manage their operations including:",
    "Financial records, employee information, customer data, inventory details, and other business information you input into our system.": "Financial records, employee information, customer data, inventory details, and other business information you input into our system.",
    "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.": "Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.",
    "Walkthrough for logging Brix %, Pol %, purity, fiber %, and calculating Estimated Recoverable Crystal (ERC) for quality bonuses.": "Walkthrough for logging Brix %, Pol %, purity, fiber %, and calculating Estimated Recoverable Crystal (ERC) for quality bonuses.",
    "The automated M-PESA B2C disbursement reduced our farmer payment settlement turnaround from 14 days down to less than 2 hours.": "The automated M-PESA B2C disbursement reduced our farmer payment settlement turnaround from 14 days down to less than 2 hours.",
    "Setup guide for telemetry moisture sensors, weather stations, and predictive AI machine learning models for yield forecasting.": "Mwongozo wa kuweka sensori za unyevu, vituo vya hali ya hewa, na mifano ya AI kwa utabiri wa mavuno.",
    "The more details you provide, the better answers you'll receive. Include code, error messages, and steps you've already taken.": "The more details you provide, the better answers you'll receive. Include code, error messages, and steps you've already taken.",
    "The emails are not being sent when users perform certain actions. Has anyone encountered this issue before? What am I missing?": "The emails are not being sent when users perform certain actions. Has anyone encountered this issue before? What am I missing?",
    "Guide to digital outgrower farmer onboarding, high-precision GNSS polygon boundary walking, and sugarcane supply agreements.": "Mwongozo to digital outgrower farmer onboarding, high-precision GNSS polygon boundary walking, and sugarcane supply agreements.",
    "Truck proceeds to the unloader / cane yard feeder table. Laboratory sampler extracts juice sample for Brix & Pol analysis.": "Truck proceeds to the unloader / cane yard feeder table. Laboratory sampler extracts juice sample for Brix & Pol analysis.",
    "Ensure strict separation of duties between weighbridge clerks, lab technicians, finance officers, and executive managers.": "Ensure strict separation of duties between weighbridge clerks, lab technicians, finance officers, and executive managers.",
    "Manage 50kg bag production output, warehouse stack bin locations, wholesale dispatches, and delivery note generation.": "Dhibiti uzalishaji wa mifuko ya 50kg, maeneo ya stacking ya ghala, usafirishaji wa jumla, na uundaji wa hati za utoaji.",
    "Quick steps to resolve serial COM port disconnections, local database queue backlog, and network reconnection sync.": "Hatua za haraka za kutatua kukatika kwa COM port, mlundikano wa hifadhidata ya ndani, na usawazishaji baada ya mtandao kurudi.",
    "Configure administrator roles, weighbridge clerk privileges, field officer scopes, and review immutable audit logs.": "Sanidi majukumu ya wasimamizi, ruhusa za makarani wa mizani, upeo wa maafisa wa shamba, na kupitia kumbukumbu za ukaguzi.",
    "Upon termination, you will lose access to the Service. You may request a data export within 30 days of termination.": "Upon termination, you will lose access to the Service. You may request a data export within 30 days of termination.",
    "Driver taps RFID card or scans barcode at Gate 1. System verifies active harvest permit and truck license plate.": "Driver taps RFID card or scans barcode at Gate 1. Mfumo verifies active harvest permit and truck license plate.",
    "For detailed security documentation or to request our SOC 2 report, please contact our sales or compliance team.": "For detailed security documentation or to request our SOC 2 report, please contact our sales or compliance team.",
    "Step 3 is key: waiting for the SQLite queue buffer to clear before restarting saved us from ticket duplication.": "Step 3 is key: waiting for the SQLite queue buffer to clear before restarting saved us from ticket duplication.",
    "Track brown, white, and industrial sugar bag counts in real time across main and regional distribution depots.": "Track brown, white, and industrial sugar bag counts in real time across main and regional distribution depots.",
    "Please note that all sales of Election Pro AI subscriptions and related services are final and non-refundable.": "Please note that all sales of Election Pro AI subscriptions and related services are final and non-refundable.",
    "You retain all rights to the data you input into the Service. We do not claim ownership of your business data.": "You retain all rights to the data you input into the Service. We do not claim ownership of your business data.",
    "These Terms are governed by the laws of Kenya. Any disputes shall be resolved in the courts of Nairobi, Kenya.": "These Terms are governed by the laws of Kenya. Any disputes shall be resolved in the courts of Nairobi, Kenya.",
    "We offer various subscription tiers (Standard, Professional, Enterprise) with different features and pricing.": "We offer various subscription tiers (Standard, Professional, Enterprise) with different features and pricing.",
    "High-sucrose deliveries automatically trigger quality incentive bonuses added to grower settlement accounts.": "High-sucrose deliveries automatically trigger quality incentive bonuses added to grower settlement accounts.",
    "We do not sell your personal information. We may share your information only in the following circumstances:": "We do not sell your personal information. We may share your information only in the following circumstances:",
    "All data transmitted between your device and our servers is encrypted using TLS 1.3 with 256-bit encryption.": "All data transmitted between your device and our servers is encrypted using TLS 1.3 with 256-bit encryption.",
    "Encryption keys are managed using industry-standard key management services with regular rotation policies.": "Encryption keys are managed using industry-standard key management services with regular rotation policies.",
    "Juice samples collected at first expressor roller are tagged with the corresponding delivery batch number.": "Juice samples collected at first expressor roller are tagged with the corresponding delivery batch number.",
    "What are the recommended approaches for setting up user permissions in a multi-department organization?": "What are the recommended approaches for setting up user permissions in a multi-department organization?",
    "All stored data is encrypted using AES-256 encryption, including databases, backups, and file storage.": "All stored data is encrypted using AES-256 encryption, including databases, backups, and file storage.",
    "Performance has degraded significantly since the latest version update. Pages take forever to load...": "Performance has degraded significantly since the latest version update. Pages take forever to load...",
    "Information about how you use our services, including access times, pages viewed, and features used.": "Information about how you use our services, including access times, pages viewed, and features used.",
    "You grant us a limited license to host, store, and process your data solely to provide the Service.": "You grant us a limited license to host, store, and process your data solely to provide the Service.",
    "With third-party vendors who perform services on our behalf (hosting, analytics, customer support)": "With third-party vendors who perform services on our behalf (hosting, analytics, customer support)",
    "If you have security concerns or wish to report a vulnerability, please contact our security team:": "If you have security concerns or wish to report a vulnerability, please contact our security team:",
    "from taskbar tray; confirm COM port setting matches device manager (e.g. COM3, 9600 baud rate).": "from taskbar tray; confirm COM port setting matches device manager (e.g. COM3, 9600 baud rate).",
    "Audit logs record user ID, timestamp, IP address, and exact record changes for full compliance.": "Audit logs record user ID, timestamp, IP address, and exact record changes for full compliance.",
    "Good answers take time. Check back periodically and be ready to provide more details if needed.": "Good answers take time. Check back periodically and be ready to provide more details if needed.",
    "When someone solves your problem, accept their answer to help future users with similar issues.": "When someone solves your problem, accept their answer to help future users with similar issues.",
    "When dispatching customer sales orders, generate dispatch tickets with gate pass verification.": "When dispatching customer sales orders, generate dispatch tickets with gate pass verification.",
    "The LoRaWAN telemetry sync works remarkably well across 25km sensor radii in the sugar belt.": "The LoRaWAN telemetry sync works remarkably well across 25km sensor radii in the sugar belt.",
    "We perform regular backups, but you are responsible for maintaining your own backup copies.": "We perform regular backups, but you are responsible for maintaining your own backup copies.",
    "You’ll be asked to pick a plan to continue using the service. Your data will be preserved.": "Utaombwa kuchagua mpango ili kuendelea kutumia huduma. Data yako itahifadhiwa.",
    "The audit trail logging helps us pass internal ISO compliance audits without extra effort.": "The audit trail logging helps us pass internal ISO compliance audits without extra effort.",
    "I'm trying to set up email notifications but can't find the right configuration options...": "Najaribu kusanidi arifa za barua pepe lakini sipati chaguzi sahihi za usanidi...",
    "System automatically aggregates all weighbills delivered by the grower during the period.": "Mfumo automatically aggregates all weighbills delivered by the grower during the period.",
    "Name, email address, company name, phone number, and password when you create an account.": "Name, email address, company name, phone number, and password when you create an account.",
    "module in the Apps menu. The notification settings have been moved there in version 15.0.": "module in the Apps menu. The notification settings have been moved there in version 15.0.",
    "Having trouble connecting our system with external APIs. Authentication keeps failing...": "Having trouble connecting our system with external APIs. Authentication keeps failing...",
    "Your question might already be answered. Use the search bar to check existing questions.": "Your question might already be answered. Use the search bar to check existing questions.",
    "Connect with sugar mill engineers, agronomists, ERP specialists, and community members.": "Ungana na wahandisi wa viwanda vya sukari, wataalamu wa kilimo, wataalamu wa ERP, na wanachama wa jamii.",
    "Add up to 5 tags to describe what your question is about. Start typing for suggestions.": "Add up to 5 tags to describe what your question is about. Start typing for suggestions.",
    "We may suspend or terminate your account for violations of these Terms or non-payment.": "We may suspend or terminate your account for violations of these Terms or non-payment.",
    "Refunds may be issued at our discretion. Please contact support for refund requests.": "Refunds may be issued at our discretion. Please contact support for refund requests.",
    "We reserve the right to modify pricing with 30 days' notice to existing subscribers.": "We reserve the right to modify pricing with 30 days' notice to existing subscribers.",
    "Documented procedures for identifying, containing, and resolving security incidents": "Documented procedures for identifying, containing, and resolving security incidents",
    "A QR-coded thermal weighbill prints automatically and opens the exit barrier gate.": "A QR-coded thermal weighbill prints automatically and opens the exit barrier gate.",
    "The RFID pallet tagging ensures accurate stock audits across all 4 warehouse bays.": "The RFID pallet tagging ensures accurate stock audits across all 4 warehouse bays.",
    "Record polarimeter Pol reading; system automatically computes Sucrose % in juice.": "Record polarimeter Pol reading; system automatically computes Sucrose % in juice.",
    "Enter Brix hydrometer reading and refractometer temperature corrections into the": "Enter Brix hydrometer reading and refractometer temperature corrections into the",
    "Our ERP specialists are available 24/7 for Kenya & East Africa sugar operations.": "Our ERP specialists are available 24/7 for Kenya & East Africa sugar operations.",
    "Available for all users with support for authenticator apps and hardware tokens": "Available for all users with support for authenticator apps and hardware tokens",
    "Records of your communications with our support team and feedback you provide.": "Records of your communications with our support team and feedback you provide.",
    "We will notify affected customers within 72 hours of discovering a data breach": "We will notify affected customers within 72 hours of discovering a data breach",
    "We strive to maintain 99.9% uptime but do not guarantee uninterrupted service.": "We strive to maintain 99.9% uptime but do not guarantee uninterrupted service.",
    "We implement industry-standard security measures to protect your information:": "We implement industry-standard security measures to protect your information:",
    "Be descriptive. Include what you're trying to achieve and what's going wrong.": "Be descriptive. Include what you're trying to achieve and what's going wrong.",
    "We are not responsible for data loss, business interruption, or lost profits": "We are not responsible for data loss, business interruption, or lost profits",
    "Hosted on enterprise-grade cloud platforms with built-in security features:": "Hosted on enterprise-grade cloud platforms with built-in security features:",
    "Accept full responsibility for all activities that occur under your account": "Accept full responsibility for all activities that occur under your account",
    "Subscriptions automatically renew unless cancelled before the renewal date.": "Subscriptions automatically renew unless cancelled before the renewal date.",
    "You may cancel your subscription at any time through your account settings.": "You may cancel your subscription at any time through your account settings.",
    "Check USB-to-Serial adapter LED indicators on the weighbridge terminal PC.": "Check USB-to-Serial adapter LED indicators on the weighbridge terminal PC.",
    "Granular permissions to control who can access specific data and features": "Granular permissions to control who can access specific data and features",
    "You get 15 days of full access to all features, no credit card required.": "Unapata siku 15 za ufikiaji kamili wa vipengele vyote, hakuna kadi ya mkopo inayohitajika.",
    "Enterprise plans support SAML 2.0 and OAuth 2.0 for seamless integration": "Enterprise plans support SAML 2.0 and OAuth 2.0 for seamless integration",
    "We are not liable for any indirect, incidental, or consequential damages": "We are not liable for any indirect, incidental, or consequential damages",
    "Show appreciation for helpful answers by voting up and leaving comments.": "Show appreciation for helpful answers by voting up and leaving comments.",
    "We reward security researchers who responsibly disclose vulnerabilities": "We reward security researchers who responsibly disclose vulnerabilities",
    "Provide accurate, current, and complete information during registration": "Provide accurate, current, and complete information during registration",
    "We may perform scheduled maintenance with advance notice when possible.": "We may perform scheduled maintenance with advance notice when possible.",
    "Synergy Bravo ERP: Comprehensive Management Platform for Sugar Farmers": "Synergy Bravo ERP: Comprehensive Usimamizi Platform for Sugar Farmers",
    "Detecting and preventing fraud, security threats, and technical issues": "Detecting and preventing fraud, security threats, and technical issues",
    "Real-time system status and incident history at status.synergyerp.com": "Real-time system status and incident history at status.synergyerp.com",
    "Assign pallet RFID codes and warehouse bay numbers (e.g. Bay B4-02).": "Assign pallet RFID codes and warehouse bay numbers (e.g. Bay B4-02).",
    "The automated backup process has been failing with error code 500...": "The automated backup process has been failing with error code 500...",
    "Questions about system configuration, setup, and settings management": "Questions about system configuration, setup, and settings management",
    "IP address, browser type, device information, and operating system.": "IP address, browser type, device information, and operating system.",
    "Attempt unauthorized access to our systems or other users' accounts": "Attempt unauthorized access to our systems or other users' accounts",
    "Reverse engineer, decompile, or disassemble any part of the Service": "Reverse engineer, decompile, or disassemble any part of the Service",
    "Email-related issues, SMTP configuration, and notification settings": "Email-related issues, SMTP configuration, and notification settings",
    "We collect information that you provide directly to us, including:": "We collect information that you provide directly to us, including:",
    "Annual audits covering security, availability, and confidentiality": "Annual audits covering security, availability, and confidentiality",
    "Mobile applications, responsive design, and mobile-specific issues": "Mobile applications, responsive design, and mobile-specific issues",
    "Simple, predictable pricing with no hidden fees or user lock-ins.": "Bei rahisi na inayotabirika bila ada zilizofichwa au kufungiwa kwa mtumiaji.",
    "to push payments via M-PESA B2C API or direct KITS bank transfer.": "to push payments via M-PESA B2C API or direct KITS bank transfer.",
    "View real-time heatmaps and predictive harvest scheduling alerts.": "View real-time heatmaps and predictive harvest scheduling alerts.",
    "We maintain compliance with major security and privacy standards:": "We maintain compliance with major security and privacy standards:",
    "Open the Synergy Field App on your Android/iOS tablet and select": "Open the Synergy Field App on your Android/iOS tablet and select",
    "Performance optimization, troubleshooting, and system efficiency": "Performance optimization, troubleshooting, and system efficiency",
    "Deployment strategies, server setup, and production environments": "Deployment strategies, server setup, and production environments",
    "Processing Grower Settlements, Cane Deductions & M-PESA Payroll": "Kushughulikia Malipo ya Wakulima, Makato ya Miwa na Mishahara ya M-PESA",
    "User Role Permissions, Audit Trails & Multi-Site Access Control": "Ruhusa za Jukumu la Mtumiaji, Njia za Ukaguzi na Udhibiti wa Ufikiaji wa Maeneo Mengi",
    "24/7 security monitoring and alerting for suspicious activities": "24/7 security monitoring and alerting for suspicious activities",
    "We carefully vet all third-party vendors and service providers:": "We carefully vet all third-party vendors and service providers:",
    ". The system records gross tonnage from the load cell sensors.": ". The system records gross tonnage from the load cell sensors.",
    "Log daily production batch outputs from bagging machinery into": "Log daily production batch outputs from bagging machinery into",
    "When you explicitly authorize us to share specific information": "When you explicitly authorize us to share specific information",
    "Delete your personal information (subject to legal exceptions)": "Delete your personal information (subject to legal exceptions)",
    "Regular disaster recovery drills to ensure data recoverability": "Regular disaster recovery drills to ensure data recoverability",
    "Use the Service for illegal, fraudulent, or malicious purposes": "Use the Service for illegal, fraudulent, or malicious purposes",
    "The Service is provided \"AS IS\" without warranties of any kind": "The Service is provided \"AS IS\" without warranties of any kind",
    "Sucrose Extraction Rates & Sugar Mill Laboratory Quality Logs": "Sucrose Extraction Rates & Sugar Mill Laboratory Quality Logs",
    "We use the collected information for the following purposes:": "We use the collected information for the following purposes:",
    "Sending you technical notices, updates, and support messages": "Sending you technical notices, updates, and support messages",
    "When required by law, court order, or governmental authority": "When required by law, court order, or governmental authority",
    "Ability to restore data to any point within the last 30 days": "Ability to restore data to any point within the last 30 days",
    "Responding to your inquiries and providing customer support": "Responding to your inquiries and providing customer support",
    "In connection with a merger, acquisition, or sale of assets": "In connection with a merger, acquisition, or sale of assets",
    "Continuous monitoring and patching of third-party libraries": "Continuous monitoring and patching of third-party libraries",
    "Available for healthcare customers requiring PHI protection": "Available for healthcare customers requiring PHI protection",
    "All employees undergo comprehensive background verification": "All employees undergo comprehensive background verification",
    "Dedicated security operations center monitoring for threats": "Dedicated security operations center monitoring for threats",
    "Restrict access to your account from specific IP addresses": "Restrict access to your account from specific IP addresses",
    "How to configure email settings for notifications? - Forum": "How to configure email settings for notifications? - Forum",
    "Login systems, SSO, OAuth, and user authentication methods": "Login systems, SSO, OAuth, and user authentication methods",
    "Write your comment, question, or field experience here...": "Write your comment, question, or field experience here...",
    "Automatic timeout and forced logout for inactive sessions": "Automatic timeout and forced logout for inactive sessions",
    "Redundant data centers across multiple geographic regions": "Redundant data centers across multiple geographic regions",
    "Regular third-party security audits and penetration tests": "Regular third-party security audits and penetration tests",
    "Database management, queries, backup, and troubleshooting": "Database management, queries, backup, and troubleshooting",
    "API integration, development, and third-party connections": "API integration, development, and third-party connections",
    "Choose the type of appointment that best fits your needs": "Chagua aina ya miadi inayofaa zaidi mahitaji yako",
    "Net Cane = Gross Weight - Tare Weight - Deducted Trash %": "Net Cane = Gross Weight - Tare Weight - Deducted Trash %",
    "Connecting IoT Sensors & Real-Time AI Yield Traceability": "Kuunganisha Sensori za IoT na Ufuatiliaji wa Mavuno wa AI kwa Wakati Halisi",
    "Assign granular view/edit/delete rights for each module.": "Assign granular view/edit/delete rights for each module.",
    "Complying with legal obligations and enforcing our terms": "Complying with legal obligations and enforcing our terms",
    "Access controls and employee training on data protection": "Access controls and employee training on data protection",
    "We maintain a public security changelog for transparency": "We maintain a public security changelog for transparency",
    "System integrations, connectors, and workflow automation": "Mfumo integrations, connectors, and workflow automation",
    "Optimized UI tailored for desktop, tablet &amp; mobile": "Optimized UI tailored for desktop, tablet &amp; mobile",
    "Providing, maintaining, and improving our ERP services": "Providing, maintaining, and improving our ERP services",
    "Following OWASP guidelines and secure coding practices": "Following OWASP guidelines and secure coding practices",
    "Can't find what you're looking for? Ask the community!": "Hupati unachotafuta? Uliza jamii!",
    "Test the connection using the \"Test Connection\" button": "Test the connection using the \"Test Connection\" button",
    "Reports, analytics, dashboards, and data visualization": "Reports, analytics, dashboards, and data visualization",
    "Custom development, themes, and platform modifications": "Custom development, themes, and platform modifications",
    "Maintain and promptly update your account information": "Maintain and promptly update your account information",
    "e.g. configuration, email, database (comma-separated)": "e.g. configuration, email, database (comma-separated)",
    "Module installation, configuration, and customization": "Module installation, configuration, and customization",
    "Offline-first field data collection &amp; queue sync": "Offline-first field data collection &amp; queue sync",
    "Setting up Grower Contracts & Field GPS Plot Mapping": "Setting up Grower Contracts & Field GPS Plot Mapping",
    "Intrusion detection and prevention systems (IDS/IPS)": "Intrusion detection and prevention systems (IDS/IPS)",
    "Information security management system certification": "Information security management system certification",
    "Post-incident analysis to prevent future occurrences": "Post-incident analysis to prevent future occurrences",
    "Interfere with the proper functioning of the Service": "Interfere with the proper functioning of the Service",
    "to post answers, vote on questions, or add comments.": "to post answers, vote on questions, or add comments.",
    "User management, accounts, profiles, and permissions": "User management, accounts, profiles, and permissions",
    "Map sensor location to specific farm block polygon.": "Map sensor location to specific farm block polygon.",
    "Analyzing usage patterns to enhance user experience": "Analyzing usage patterns to enhance user experience",
    "Full compliance with EU data protection regulations": "Full compliance with EU data protection regulations",
    "Add relevant tags to help others find your question": "Add relevant tags to help others find your question",
    "Dedicated cloud & custom mill hardware integration": "Wingu la kibinafsi na ushirikiano wa vifaa vya kiwanda",
    "2. Step-by-Step Onboarding & Registration Workflow": "2. Step-by-Step Onboarding & Registration Workflow",
    "DDoS protection and web application firewall (WAF)": "DDoS protection and web application firewall (WAF)",
    "Maintain the security of your password and account": "Maintain the security of your password and account",
    "How to configure email settings for notifications?": "Jinsi ya kusanidi mipangilio ya barua pepe kwa arifa?",
    "Ideal for single-department automation or testing": "Bora kwa otomatiki ya idara moja au kujaribu",
    "Processing transactions and managing your account": "Processing transactions and managing your account",
    "Daily incremental backups and weekly full backups": "Daily incremental backups and weekly full backups",
    "Level 1 compliance for payment card data handling": "Level 1 compliance for payment card data handling",
    "Least privilege and need-to-know access policies": "Least privilege and need-to-know access policies",
    "Regular security audits and penetration testing": "Regular security audits and penetration testing",
    "Access and receive a copy of your personal data": "Access and receive a copy of your personal data",
    "Automated scanning for security vulnerabilities": "Automated scanning for security vulnerabilities",
    "For questions about these Terms, contact us at:": "For questions about these Terms, contact us at:",
    "Enterprise-grade SSO &amp; role-based security": "Enterprise-grade SSO &amp; role-based security",
    "Want to join the discussion or ask a question?": "Want to join the discussion or ask a question?",
    "Tractor transport freight charges per km/tonne": "Tractor transport freight charges per km/tonne",
    "procurement, accounting, sales, and analytics": "procurement, accounting, sales, and analytics",
    "Grower Management &gt; Register New Outgrower": "Grower Usimamizi &gt; Register New Outgrower",
    "Redirecting you to the software configurator…": "Inakuelekeza kwenye msanidi wa programu…",
    "Use strong, unique passwords for your account": "Use strong, unique passwords for your account",
    "Email notifications not working after upgrade": "Email notifications not working after upgrade",
    "Financials &gt; Grower Payroll & Settlements": "Financials &gt; Grower Payroll & Settlements",
    "Correct inaccurate or incomplete information": "Correct inaccurate or incomplete information",
    "Mandatory annual security awareness training": "Mandatory annual security awareness training",
    "Regularly review user access and permissions": "Regularly review user access and permissions",
    "Distribute viruses, malware, or harmful code": "Distribute viruses, malware, or harmful code",
    "Flexible Packages for Every Sugar Operation": "Vifurushi Vinavyobadilika kwa Kila Uendeshaji wa Sukari",
    "Digital E-Signatures & Contract Generation:": "Digital E-Signatures & Contract Generation:",
    "End-to-end encryption for data transmission": "End-to-end encryption for data transmission",
    "on \"Email configuration issue\" • 30 min ago": "on \"Email configuration issue\" • 30 min ago",
    "Firewall blocking SMTP ports (25, 587, 465)": "Firewall blocking SMTP ports (25, 587, 465)",
    "Violate any applicable laws or regulations": "Violate any applicable laws or regulations",
    "Full access to all 10 core sugar ERP apps": "Ufikiaji kamili wa programu zote 10 kuu za ERP ya sukari",
    "All staff sign NDAs and security policies": "All staff sign NDAs and security policies",
    "Keep your devices and software up to date": "Keep your devices and software up to date",
    "Best practices for user permissions setup": "Mbinu bora za kusanidi ruhusa za watumiaji",
    "API integration with third-party services": "Ushirikiano wa API na huduma za watu wa tatu",
    "How to troubleshoot email delivery issues": "How to troubleshoot email delivery issues",
    "System Settings &gt; Roles & Permissions": "Mfumo Settings &gt; Roles & Permissions",
    "Secure data storage with regular backups": "Secure data storage with regular backups",
    "Object to processing of your information": "Object to processing of your information",
    "Keep your login credentials confidential": "Keep your login credentials confidential",
    "PGP Key: Available at synergyerp.com/pgp": "PGP Key: Available at synergyerp.com/pgp",
    "Provide system information when relevant": "Provide system information when relevant",
    "TO THE MAXIMUM EXTENT PERMITTED BY LAW:": "TO THE MAXIMUM EXTENT PERMITTED BY LAW:",
    "System running slow after recent update": "Mfumo unafanya kazi polepole baada ya sasisho la hivi karibuni",
    "Email provider requiring authentication": "Email provider requiring authentication",
    "Grower Identification & Financial KYC:": "Grower Identification & Financial KYC:",
    "AI Traceability &gt; Device Management": "AI Traceability &gt; Device Usimamizi",
    "Report suspicious activity immediately": "Report suspicious activity immediately",
    "\"Database backup process\" • 1 hour ago": "\"Database backup process\" • 1 hour ago",
    "Looked in the Email Configuration menu": "Looked in the Email Usanidi menu",
    "Export your data in a portable format": "Export your data in a portable format",
    "Inventory and supply chain management": "Inventory and supply chain management",
    "Book Appointment - Synergy Bravo ERP": "Weka Miadi - Synergy Bravo ERP",
    "Automatic deduction offsets applied:": "Automatic deduction offsets applied:",
    "Vendor access monitoring and logging": "Vendor access monitoring and logging",
    "Laboratory Quality Control Workflow": "Laboratory Quality Control Workflow",
    "Multi-factor authentication options": "Multi-factor authentication options",
    "Opt-out of marketing communications": "Opt-out of marketing communications",
    "Financial management and accounting": "Financial management and accounting",
    "Be specific and clear in your title": "Be specific and clear in your title",
    "Transform your business operations": "Transform your business operations",
    "Multi-Factor Authentication (MFA):": "Multi-Factor Authentication (MFA):",
    "Network segmentation and isolation": "Network segmentation and isolation",
    "Enable multi-factor authentication": "Enable multi-factor authentication",
    "Infringe upon the rights of others": "Infringe upon the rights of others",
    "Verified SMTP settings are correct": "Verified SMTP settings are correct",
    "Configure your SMTP settings there": "Configure your SMTP settings there",
    "1. Overview & Operational Context": "1. Muhtasari & Operational Context",
    "Post a comment as a verified user": "Post a comment as a verified user",
    "Outgrower Manager — Western Kenya": "Outgrower Manager — Western Kenya",
    "Thermal Ticket & Barrier Release:": "Thermal Ticket & Barrier Release:",
    "Cooperative development levy (1%)": "Cooperative development levy (1%)",
    "Enterprise Server (KES 25,000/mo)": "Seva ya Shirika (KSh 25,000/mwezi)",
    "Role-Based Access Control (RBAC):": "Role-Based Access Control (RBAC):",
    "Contractual security requirements": "Contractual security requirements",
    "Include what you've already tried": "Include what you've already tried",
    "SMTP configuration best practices": "SMTP configuration best practices",
    "1 App selected • Unlimited Users": "Programu 1 Iliyochaguliwa • Watumiaji Wasio na Kikomo",
    "Real-time Inventory & Financials": "Hifadhi na Fedha za Wakati Halisi",
    "Tell us more about your needs...": "Tuambie zaidi kuhusu mahitaji yako...",
    "High-Precision Polygon GPS Walk:": "High-Precision Polygon GPS Walk:",
    "3. Offline Queue & Sync Protocol": "3. Offline Queue & Sync Protocol",
    "Gate Entry & Trip Authorization:": "Gate Entry & Trip Authorization:",
    "6. Compliance and Certifications": "6. Compliance and Certifications",
    "Customer relationship management": "Customer relationship management",
    "Project management and analytics": "Project management and analytics",
    "Click on \"Outgoing Mail Servers\"": "Click on \"Outgoing Mail Servers\"",
    "AI Quality & Yield Traceability": "Udhibiti wa Ubora wa AI na Ufuatiliaji wa Mavuno",
    "Cane Yard Discharge & Sampling:": "Cane Yard Discharge & Sampling:",
    "Seed cane & fertilizer advances": "Seed cane & fertilizer advances",
    "8. International Data Transfers": "8. International Data Transfers",
    "Database backup process failing": "Mchakato wa kuhifadhi nakala ya hifadhidata unashindwa",
    "Describe your problem in detail": "Describe your problem in detail",
    "Unlimited users & data storage": "Watumiaji na hifadhi ya data bila kikomo",
    "Last Updated: December 6, 2024": "Last Updated: December 6, 2024",
    "3. How We Use Your Information": "3. How We Use Your Information",
    "5. Data Sharing and Disclosure": "5. Data Sharing and Disclosure",
    "Email: security@synergyerp.com": "Email: security@synergyerp.com",
    "Response Time: Within 24 hours": "Response Time: Within 24 hours",
    "Here's what I've tried so far:": "Here's what I've tried so far:",
    "sudo tail -f /var/log/mail.log": "sudo tail -f /var/log/mail.log",
    "Cloud infrastructure included": "Miundombinu ya wingu imejumuishwa",
    "How does the free trial work?": "Jaribio la bure linafanya kazi vipi?",
    "Select the cane variety (e.g.": "Chagua the cane variety (e.g.",
    "1. Hardware Integration Setup": "1. Hardware Ushirikiano Setup",
    "Assisted Install (KES 10,000)": "Uwekaji wa Msaada (KSh 10,000)",
    "Email: privacy@synergyerp.com": "Email: privacy@synergyerp.com",
    "To use our Service, you must:": "To use our Service, you must:",
    "6. Data Ownership and License": "6. Data Ownership and License",
    "What happens after my trial?": "Nini kinatokea baada ya jaribio langu?",
    "IT Infrastructure Specialist": "IT Infrastructure Specialist",
    "Partner Install (KES 20,000)": "Uwekaji wa Mshirika (KSh 20,000)",
    "welcome_newbie • 2 hours ago": "welcome_newbie • 2 hours ago",
    "✅ How to Ask a Good Question": "✅ How to Ask a Good Question",
    "You can check the logs with:": "You can check the logs with:",
    "Everything in Standard plan": "Kila kitu katika mpango wa Kawaida",
    "Field Officer — Nyando Zone": "Field Officer — Nyando Zone",
    "Chief Chemist — Kibos Sugar": "Chief Chemist — Kibos Sugar",
    "Settlement Calculation Flow": "Settlement Calculation Flow",
    "Harvesting gang labor wages": "Harvesting gang labor wages",
    "Finance Accountant — Mumias": "Finance Accountant — Mumias",
    "Customer User (KES 1000/mo)": "Mtumiaji wa Mteja (KSh 1000/mwezi)",
    "Basic Server (KES 5,000/mo)": "Seva ya Msingi (KSh 5,000/mwezi)",
    "Confidentiality Agreements:": "Confidentiality Agreements:",
    "Human resources and payroll": "Human resources and payroll",
    "5. Subscription and Payment": "5. Subscription and Payment",
    "Email: legal@synergyerp.com": "Email: legal@synergyerp.com",
    "Be specific and imagine you": "Be specific and imagine you",
    "Go to Apps → Email Settings": "Go to Apps → Email Settings",
    "Emails going to spam folder": "Emails going to spam folder",
    "Member since September 2022": "Member since September 2022",
    "Crop & Variety Assignment:": "Crop & Variety Assignment:",
    "for drought resistance, or": "for drought resistance, or",
    "Inventory Management Steps": "Inventory Usimamizi Steps",
    "Standard User (KES 700/mo)": "Mtumiaji wa Kawaida (KSh 700/mwezi)",
    "Pro Server (KES 12,000/mo)": "Seva ya Pro (KSh 12,000/mwezi)",
    "10. Changes to This Policy": "10. Changes to This Policy",
    "11. Transparency and Trust": "11. Transparency and Trust",
    "9. Limitation of Liability": "9. Limitation of Liability",
    "12. Modifications to Terms": "12. Modifications to Terms",
    "Member since February 2024": "Member since February 2024",
    "Member since December 2023": "Member since December 2023",
    "With Data-Driven Insights": "With Data-Driven Insights",
    "Can I change plans later?": "Je, naweza kubadilisha mipango baadaye?",
    "Showing 1–5 of 8 articles": "Showing 1–5 of 8 articles",
    "2. Information We Collect": "2. Information We Collect",
    "10. Your Responsibilities": "10. Your Responsibilities",
    "2. Description of Service": "2. Description of Service",
    "Member since January 2020": "Member since January 2020",
    "A comprehensive platform": "A comprehensive platform",
    "Seamlessly connecting...": "Seamlessly connecting...",
    "1 Core ERP App of choice": "Programu 1 Kuu ya ERP ya Chaguo",
    "Book Another Appointment": "Weka Miadi Nyengine",
    "Add sensor device EUI in": "Add sensor device EUI in",
    "SOC 2 Type II compliance": "SOC 2 Type II compliance",
    "Phone: +1 (555) 123-4567": "Phone: +1 (555) 123-4567",
    "8. Intellectual Property": "8. Intellectual Property",
    "Here's the correct path:": "Here's the correct path:",
    "Member since August 2024": "Member since August 2024",
    "All 10 Core ERP Modules": "Moduli Zote 10 Kuu za ERP",
    "Technical Setup Session": "Kipindi cha Kuweka Mipangilio ya Kiufundi",
    "Buy - Synergy Bravo ERP": "Nunua - Synergy Bravo ERP",
    "Configure Standard Plan": "Sanidi Mpango wa Kawaida",
    "Partner Three Solutions": "Partner Three Solutions",
    "SOC 2 Type II Certified": "SOC 2 Type II Certified",
    "Vulnerability Scanning:": "Vulnerability Scanning:",
    "Point-in-Time Recovery:": "Point-in-Time Recovery:",
    "Incident Response Plan:": "Incident Response Plan:",
    "3. Account Registration": "3. Account Registration",
    "14. Contact Information": "14. Contact Information",
    "Member since March 2021": "Member since March 2021",
    "Selected Demo Modules:": "Moduli za Jaribio Zilizochaguliwa:",
    "Team Training Workshop": "Karakana ya Mafunzo ya Timu",
    "Select Date &amp; Time": "Chagua Date &amp; Time",
    "Requested Appointment:": "Miadi Iliyoombwa:",
    "Access Officer Module:": "Access Officer Module:",
    "Still need assistance?": "Still need assistance?",
    "-- Choose a Partner --": "-- Chagua Mshirika --",
    "You have the right to:": "You have the right to:",
    "Encryption in Transit:": "Encryption in Transit:",
    "Continuous Monitoring:": "Continuous Monitoring:",
    "Dependency Management:": "Dependency Usimamizi:",
    "1. Acceptance of Terms": "1. Acceptance of Terms",
    "Effect of Termination:": "Effect of Termination:",
    "Common issues include:": "Common issues include:",
    "to join our community!": "to join our community!",
    "Platform Administrator": "Platform Administrator",
    "Member since June 2022": "Member since June 2022",
    "Standard (All-in-One)": "Kawaida (Yote-mahali-pamoja)",
    "Complete Your Booking": "Kamilisha Miadi Yako",
    "Troubleshooting Steps": "Troubleshooting Steps",
    "Own Servers (no cost)": "Mavazi Yako Mwenyewe (Bila Gharama)",
    "9. Children's Privacy": "9. Children's Privacy",
    "Single Sign-On (SSO):": "Single Sign-On (SSO):",
    "Cloud Infrastructure:": "Cloud Infrastructure:",
    "You need to check the": "You need to check the",
    "Schedule Appointment": "Panga Miadi",
    "&#8592; Appointments": "&#8592; Appointments",
    "Financials & Payroll": "Financials & Payroll",
    "Tare Weight Capture:": "Tare Weight Capture:",
    "Execute Bulk Payment": "Execute Bulk Payment",
    "Warehouse Controller": "Warehouse Controller",
    "IoT & AI Setup Guide": "IoT & AI Setup Mwongozo",
    "Election Pro Hosting": "Election Pro Hosting",
    "Self Install (KES 0)": "Uwekaji Mwenyewe (KSh 0)",
    "Account Information:": "Account Information:",
    "Penetration Testing:": "Penetration Testing:",
    "8. Incident Response": "8. Incident Response",
    "asked 2 hours ago by": "asked 2 hours ago by",
    "System Administrator": "Mfumo Administrator",
    "Full Stack Developer": "Full Stack Developer",
    "Custom / Enterprise": "Maalum / Shirika",
    "Continue to Details": "Endelea hadi Maelezo",
    "AgTech Systems Lead": "AgTech Mfumos Lead",
    "Credit / Debit Card": "Kadi ya Mkopo / Benki",
    "Payment Successful!": "Malipo Yamefanikiwa!",
    "xxxx xxxx xxxx xxxx": "xxxx xxxx xxxx xxxx",
    "Communication Data:": "Communication Data:",
    "Legal Requirements:": "Legal Requirements:",
    "Business Transfers:": "Business Transfers:",
    "ISO 27001 Compliant": "ISO 27001 Compliant",
    "Encryption at Rest:": "Encryption at Rest:",
    "Session Management:": "Session Usimamizi:",
    "Secure Development:": "Secure Development:",
    "Bug Bounty Program:": "Bug Bounty Program:",
    "Subscription Plans:": "Subscription Plans:",
    "10. Indemnification": "10. Indemnification",
    "Ubuntu 20.04 server": "Ubuntu 20.04 server",
    "PostgreSQL database": "PostgreSQL database",
    "answered 1 hour ago": "answered 1 hour ago",
    "answered 30 min ago": "answered 30 min ago",
    "Database Specialist": "Database Specialist",
    "Sales Consultation": "Mashauriano ya Mauzo",
    "Booking Confirmed!": "Miadi Imethibitishwa!",
    "Alphabetical (A-Z)": "Alphabetical (A-Z)",
    "Lab Quality Module": "Lab Quality Module",
    "Role Configuration": "Role Usanidi",
    "Compliance Officer": "Compliance Officer",
    "Service Providers:": "Service Providers:",
    "With Your Consent:": "With Your Consent:",
    "1. Data Encryption": "1. Data Encryption",
    "2. Access Controls": "2. Access Controls",
    "Access Principles:": "Access Principles:",
    "Post Your Question": "Post Your Question",
    "Empowering Growth": "Empowering Growth",
    "Live Product Demo": "Jaribio la Bidhaa la Moja kwa Moja",
    "+1 (555) 123-4567": "+1 (555) 123-4567",
    "Farmer Operations": "Farmer Operations",
    "Inventory & Sales": "Inventory & Sales",
    "for high sucrose,": "for high sucrose,",
    "Lock Gross Weight": "Lock Gross Weight",
    "Cardholder Name *": "Jina la Mwenye Kadi *",
    "🔒 Secure Payment": "🔒 Malipo Salama",
    "6. Data Retention": "6. Data Retention",
    "Synergy Bravo ERP": "Synergy Bravo ERP",
    "Recovery Testing:": "Recovery Testing:",
    "Retention Policy:": "Retention Policy:",
    "4. Acceptable Use": "4. Acceptable Use",
    "You agree NOT to:": "You agree NOT to:",
    "13. Governing Law": "13. Governing Law",
    "asked 2 hours ago": "iliulizwa masaa 2 yaliyopita",
    "asked 5 hours ago": "iliulizwa masaa 5 yaliyopita",
    "New answer posted": "New answer posted",
    "Ask Your Question": "Uliza Swali Lako",
    "🔒 Login Required": "🔒 Login Inahitajika",
    "Related Questions": "Related Questions",
    "All Appointments": "Miadi Yote",
    "Appointment Type": "Aina ya Miadi",
    "Your Information": "Taarifa Zako",
    "Sort Articles By": "Sort Articles By",
    "Full Page View ↗": "Full Page View ↗",
    "Emmanuel Nderitu": "Emmanuel Nderitu",
    "Fredrick Onyango": "Fredrick Onyango",
    "Select a Partner": "Chagua Mshirika",
    "99.9% Uptime SLA": "99.9% Uptime SLA",
    "IP Whitelisting:": "IP Whitelisting:",
    "asked 2 days ago": "iliulizwa siku 2 zilizopita",
    "asked 3 days ago": "iliulizwa siku 3 zilizopita",
    "Question updated": "Question updated",
    "Have a Question?": "Una Swali?",
    "Question Details": "Question Details",
    "Preview Question": "Preview Question",
    "Vote and comment": "Vote and comment",
    "Top Contributors": "Top Contributors",
    "Senior Developer": "Senior Developer",
    "Available Times": "Muda Unaopatikana",
    "Booking Summary": "Muhtasari wa Miadi",
    "Email Address *": "Anwani ya Barua Pepe *",
    "Confirm Booking": "Thibitisha Miadi",
    "Troubleshooting": "Utatuzi wa Matatizo",
    "+254 712 345678": "+254 712 345678",
    "Number of Users": "Idadi ya Watumiaji",
    "Partner One Ltd": "Partner One Ltd",
    "Partner Two Inc": "Partner Two Inc",
    "1. Introduction": "1. Introduction",
    "Technical Data:": "Technical Data:",
    "Key Management:": "Key Usimamizi:",
    "Geo-Redundancy:": "Geo-Redundancy:",
    "11. Termination": "11. Termination",
    "asked 1 day ago": "iliulizwa siku 1 iliyopita",
    "Recent Activity": "Recent Activity",
    "New user joined": "New user joined",
    "Request a Demo": "Request a Demo",
    "Recently Added": "Recently Added",
    "Charles Kiprop": "Charles Kiprop",
    "Business Data:": "Business Data:",
    "7. Your Rights": "7. Your Rights",
    "GDPR Compliant": "GDPR Compliant",
    "SOC 2 Type II:": "SOC 2 Type II:",
    "Price Changes:": "Price Changes:",
    "License to Us:": "License to Us:",
    "authentication": "authentication",
    "Accept answers": "Accept answers",
    "30 minutes ago": "30 minutes ago",
    "245 reputation": "245 reputation",
    "Email Settings": "Email Settings",
    "New This Month": "New This Month",
    "Top Reputation": "Top Reputation",
    "Consultations": "Mashauriano",
    "Select a date": "Chagua tarehe",
    "Select a time": "Chagua muda",
    "December 2024": "December 2024",
    "⏱️ 8 min read": "⏱️ 8 min read",
    "Register Free": "Register Free",
    "James Wanjala": "James Wanjala",
    "⏱️ 7 min read": "⏱️ 7 min read",
    "⏱️ 6 min read": "⏱️ 6 min read",
    "David Adholla": "David Adholla",
    "⏱️ 4 min read": "⏱️ 4 min read",
    "⏱️ 3 min read": "⏱️ 3 min read",
    "Card Number *": "Nambari ya Kadi *",
    "Expiry Date *": "Tarehe ya Kumalizika *",
    "+2547XXXXXXXX": "+2547XXXXXXXX",
    "Auto-Renewal:": "Auto-Renewal:",
    "configuration": "configuration",
    "💡 Quick Tips": "💡 Quick Tips",
    "Configuration": "Usanidi",
    "New This Week": "Mpya Wiki Hii",
    "customization": "customization",
    "Robert Garcia": "Robert Garcia",
    "Emma Thompson": "Emma Thompson",
    "One App Free": "Programu Moja Bure",
    "Organization": "Shirika / Kampuni",
    "Appointment:": "Appointment:",
    "Post Comment": "Post Comment",
    "Peter Omondi": "Peter Omondi",
    "ERC formula:": "ERC formula:",
    "Mary Njoroge": "Mary Njoroge",
    "Buy Standard": "Nunua Mpango wa Kawaida",
    "Installation": "Uwekaji wa Mfumo",
    "Status Page:": "Status Page:",
    "Maintenance:": "Maintenance:",
    "Ask Question": "Uliza Swali",
    "15 questions": "15 questions",
    "tech_support": "tech_support",
    "Popular Tags": "Lebo Maarufu",
    "Version 15.0": "Version 15.0",
    "45 questions": "45 questions",
    "23 followers": "23 followers",
    "32 questions": "32 questions",
    "18 followers": "18 followers",
    "67 questions": "67 questions",
    "45 followers": "45 followers",
    "29 questions": "29 questions",
    "34 followers": "34 followers",
    "38 questions": "38 questions",
    "27 followers": "27 followers",
    "22 questions": "22 questions",
    "31 followers": "31 followers",
    "19 questions": "19 questions",
    "15 followers": "15 followers",
    "41 questions": "41 questions",
    "29 followers": "29 followers",
    "26 questions": "26 questions",
    "19 followers": "19 followers",
    "33 questions": "33 questions",
    "22 followers": "22 followers",
    "17 questions": "17 questions",
    "24 followers": "24 followers",
    "28 questions": "28 questions",
    "16 followers": "16 followers",
    "14 questions": "14 questions",
    "12 followers": "12 followers",
    "31 questions": "31 questions",
    "25 followers": "25 followers",
    "21 questions": "21 questions",
    "Sarah Miller": "Sarah Miller",
    "Mike Johnson": "Mike Johnson",
    "Intelligent": "Intelligent",
    "Start Today": "Start Today",
    "Read More ▼": "Read More ▼",
    "Kevin Mutua": "Kevin Mutua",
    "Alex Otieno": "Alex Otieno",
    "Server Type": "Aina ya Seva",
    "Users total": "Jumla ya Watumiaji",
    "Final Sales": "Final Sales",
    "Usage Data:": "Usage Data:",
    "permissions": "permissions",
    "integration": "integration",
    "performance": "performance",
    "2 hours ago": "2 hours ago",
    "Add comment": "Add comment",
    "Rising Star": "Rising Star",
    "Contributor": "Contributor",
    "UX Designer": "UX Designer",
    "Integrated": "Integrated",
    "Thank You!": "Asante!",
    "Categories": "Categories",
    "2 days ago": "2 days ago",
    "5 days ago": "5 days ago",
    "3 days ago": "3 days ago",
    "4 days ago": "4 days ago",
    "6 days ago": "6 days ago",
    "1 week ago": "1 week ago",
    "ISO 27001:": "ISO 27001:",
    "Forensics:": "Forensics:",
    "Your Data:": "Your Data:",
    "Topic Tags": "Lebo za Mada",
    "Unanswered": "Yasiyojibiwa",
    "Most Voted": "Iliyopigiwa Kura Zaidi",
    "admin_user": "admin_user",
    "Be patient": "Be patient",
    "deployment": "deployment",
    "Moderators": "Moderators",
    "Admin User": "Admin User",
    "Reputation": "Reputation",
    "KSH 1,400": "KSH 1,400",
    "Technical": "Kiufundi",
    "In-Person": "Ana kwa Ana",
    "July 2026": "July 2026",
    "Location:": "Location:",
    "Duration:": "Duration:",
    "KEN82-493": "KEN82-493",
    "1 day ago": "1 day ago",
    "User Type": "Aina ya Mtumiaji",
    "User type": "User type",
    "Following": "Unazofuata",
    "Questions": "Maswali",
    "My setup:": "My setup:",
    "2 Answers": "2 Answers",
    "reporting": "reporting",
    "Tag Cloud": "Tag Cloud",
    "All Users": "All Users",
    "New Users": "New Users",
    "Moderator": "Moderator",
    "Lisa Wang": "Lisa Wang",
    "Cohesive": "Cohesive",
    "John Doe": "John Doe",
    "Save 15%": "Save 15%",
    "Location": "Mahali",
    "Duration": "Muda",
    "save 15%": "save 15%",
    "Standard": "Standard",
    "Per user": "Per user",
    "Checkout": "Kamilisha Malipo",
    "PCI DSS:": "PCI DSS:",
    "Billing:": "Billing:",
    "Refunds:": "Refunds:",
    "john_doe": "john_doe",
    "database": "database",
    "security": "security",
    "dev_mike": "dev_mike",
    "45 times": "45 times",
    "All Tags": "Lebo Zote",
    "Used By": "Used By",
    "&times;": "&times;",
    "KSH 700": "KSH 700",
    "&#8592;": "&#8592;",
    "&#8594;": "&#8594;",
    "Hosting": "Uyezo wa Wingu",
    "Summary": "Muhtasari",
    "Billing": "Billing",
    "KES 700": "KES 700",
    "Partner": "Partner",
    "Uptime:": "Uptime:",
    "By You:": "By You:",
    "answers": "majibu",
    "sarah_m": "sarah_m",
    "Answers": "Majibu",
    "modules": "modules",
    "Popular": "Maarufu",
    "Regular": "Regular",
    "45 min": "45 min",
    "Online": "Online",
    "60 min": "60 min",
    "30 min": "30 min",
    "90 min": "90 min",
    "Email:": "Email:",
    "M-PESA": "M-PESA",
    "HIPAA:": "HIPAA:",
    "By Us:": "By Us:",
    "Active": "Hai",
    "Newest": "Mpyanai",
    "backup": "backup",
    "update": "update",
    "← Prev": "← Prev",
    "Viewed": "Viewed",
    "Please": "Please",
    "log in": "log in",
    "Recent": "Hivi Karibuni",
    "mobile": "mobile",
    "Member": "Member",
    "★★★★★": "★★★★★",
    "Demos": "Majaribio",
    "Date:": "Date:",
    "Time:": "Time:",
    "Name:": "Name:",
    "CO421": "CO421",
    "Go to": "Go to",
    "Click": "Click",
    "Users": "Watumiaji",
    "KES 0": "KES 0",
    "CVV *": "Nambari ya CVV *",
    "MM/YY": "MM/YY",
    "GDPR:": "GDPR:",
    "votes": "kura",
    "email": "email",
    "users": "users",
    "Title": "Title",
    "Asked": "Asked",
    "Apps": "Apps",
    "Free": "Bure",
    "Date": "Tarehe",
    "Time": "Muda",
    "Open": "Open",
    "Plan": "Plan",
    "Tags": "Tags",
    "ΓåÉ": "ΓåÉ",
    "ΓåÆ": "ΓåÆ",
    "N14": "N14",
    "All": "All",
    "api": "api",
    "A-Z": "A-Z",
    "New": "New",
    "👁": "👁",
    "💬": "💬",
    "PO": "PO",
    "JW": "JW",
    "KM": "KM",
    "DA": "DA",
    "AO": "AO",
    "MN": "MN",
    "EN": "EN",
    "FO": "FO",
    "CK": "CK",
    "🔍": "🔍",
    "JD": "JD",
    "SM": "SM",
    "DM": "DM",
    "AU": "AU",
    "LW": "LW",
    "RG": "RG",
    "TS": "TS",
};

  // Build reverse map (Swahili -> English) for back-translation
  const T_REVERSE = {};
  for (const en in T) {
    T_REVERSE[T[en]] = en;
  }

  // Static Immutable WeakMap for Capturing Original English Text Nodes
  const DOM_ENGLISH_NODES = new WeakMap();
  let isEnglishCaptured = false;

  function captureOriginalEnglish(node) {
    if (!node) return;
    if (node.nodeType === Node.TEXT_NODE) {
      if (node.nodeValue && node.nodeValue.trim()) {
        if (!DOM_ENGLISH_NODES.has(node)) {
          DOM_ENGLISH_NODES.set(node, node.nodeValue);
        }
      }
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      if (['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(node.tagName) || node.id === 'synergyLocalizationBar') {
        return;
      }
      if (node.placeholder && !node._origPh) {
        node._origPh = node.placeholder;
      }
      for (let child of Array.from(node.childNodes)) {
        captureOriginalEnglish(child);
      }
    }
  }

  // State Management
  let currentMarket = localStorage.getItem('synergy_market') || 'KE';
  let currentLang = localStorage.getItem('synergy_lang') || 'sw';

  window.SynergyLocalization = {
    getMarket: () => MARKETS[currentMarket] || MARKETS.KE,
    getLanguage: () => currentLang,
    getMarkets: () => MARKETS,

    setMarket: function(marketCode) {
      if (MARKETS[marketCode]) {
        currentMarket = marketCode;
        localStorage.setItem('synergy_market', marketCode);
        const market = MARKETS[marketCode];
        if (market.defaultLang && (!localStorage.getItem('synergy_lang') || marketCode === 'US' || marketCode === 'EU')) {
          currentLang = market.defaultLang;
          localStorage.setItem('synergy_lang', currentLang);
        }
        this.applyLocalization();
      }
    },

    setLanguage: function(langCode) {
      if (langCode === 'en' || langCode === 'sw') {
        currentLang = langCode;
        localStorage.setItem('synergy_lang', langCode);
        this.applyLocalization();
      }
    },

    formatCurrency: function(amountKsh) {
      const market = MARKETS[currentMarket] || MARKETS.KE;
      const converted = Math.round(amountKsh * market.rate);
      if (market.currency === 'USD') {
        return `$${converted.toLocaleString('en-US')}`;
      } else if (market.currency === 'EUR') {
        return `€${converted.toLocaleString('en-US')}`;
      }
      return `${market.currencySymbol} ${converted.toLocaleString('en-US')}`;
    },

    // Translate a single text node using the translation table
    translateTextNode: function(node, lang) {
      if (!node || node.nodeType !== Node.TEXT_NODE) return;
      const origEn = DOM_ENGLISH_NODES.get(node);
      if (!origEn || !origEn.trim()) return;

      const parent = node.parentElement;
      if (!parent || ['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA'].includes(parent.tagName)) return;
      if (parent.closest && parent.closest('#synergyLocalizationBar')) return;

      if (lang === 'en') {
        node.nodeValue = origEn;
        return;
      }

      // Translate to Swahili using the translation table
      let text = origEn;

      // Sort keys longest-first to prevent partial replacements
      const keys = Object.keys(T).sort((a, b) => b.length - a.length);
      for (const enPhrase of keys) {
        if (text.includes(enPhrase)) {
          text = text.split(enPhrase).join(T[enPhrase]);
        }
      }
      node.nodeValue = text;
    },

    // Recursively translate all text nodes under an element
    translateNode: function(node, lang) {
      if (!node) return;
      if (node.nodeType === Node.TEXT_NODE) {
        this.translateTextNode(node, lang);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEXTAREA'].includes(node.tagName) || node.id === 'synergyLocalizationBar') {
          return;
        }
        // Form Placeholders
        if (node.placeholder && node._origPh) {
          const origPh = node._origPh;
          if (lang === 'en') {
            node.placeholder = origPh;
          } else {
            let ph = origPh;
            const keys = Object.keys(T).sort((a, b) => b.length - a.length);
            for (const enPhrase of keys) {
              if (ph.includes(enPhrase)) {
                ph = ph.split(enPhrase).join(T[enPhrase]);
              }
            }
            node.placeholder = ph;
          }
        }
        for (let child of Array.from(node.childNodes)) {
          this.translateNode(child, lang);
        }
      }
    },

    // Dynamic Auth Modal Translator
    translateModalUI: function() {
      const lang = this.getLanguage();
      const mode = window.authMode || 'signin';

      const title = document.getElementById('modalTitle');
      const subtitle = document.getElementById('modalSubtitle');
      const submitBtn = document.getElementById('authSubmitBtn');
      const toggleText = document.getElementById('authToggleText');
      const toggleBtn = document.getElementById('authToggleBtn');

      if (lang === 'sw') {
        if (mode === 'signup') {
          if (title) title.textContent = 'Fungua Akaunti';
          if (subtitle) subtitle.textContent = 'Anza mchakato wa usajili wa Synergy Bravo ERP';
          if (submitBtn) submitBtn.textContent = 'Sajili Na Uendelee Na Usajili';
          if (toggleText) toggleText.textContent = 'Tayari unayo akaunti?';
          if (toggleBtn) toggleBtn.textContent = 'Ingia';
        } else if (mode === 'forgot') {
          if (title) title.textContent = 'Badilisha Nenosiri';
          if (subtitle) subtitle.textContent = 'Weka barua pepe yako ya kazi ili kupokea kiungo cha kubadilisha nenosiri';
          if (submitBtn) submitBtn.textContent = 'Tuma Kiungo cha Kubadilisha';
          if (toggleText) toggleText.textContent = 'Kumbuka nenosiri yako?';
          if (toggleBtn) toggleBtn.textContent = 'Ingia';
        } else {
          // Sign In mode
          if (title) title.textContent = 'Karibu Tena';
          if (subtitle) subtitle.textContent = 'Ingia kwenye akaunti yako ya Synergy Bravo ERP';
          if (submitBtn) submitBtn.textContent = 'Ingia';
          if (toggleText) toggleText.textContent = 'Huna akaunti?';
          if (toggleBtn) toggleBtn.textContent = 'Jisajili';
        }
      } else {
        // English
        if (mode === 'signup') {
          if (title) title.textContent = 'Create an Account';
          if (subtitle) subtitle.textContent = 'Start onboarding for Synergy Bravo ERP';
          if (submitBtn) submitBtn.textContent = 'Register & Continue Onboarding';
          if (toggleText) toggleText.textContent = 'Already have an account?';
          if (toggleBtn) toggleBtn.textContent = 'Sign In';
        } else if (mode === 'forgot') {
          if (title) title.textContent = 'Reset Password';
          if (subtitle) subtitle.textContent = 'Enter your work email address to receive a password reset link';
          if (submitBtn) submitBtn.textContent = 'Send Reset Link';
          if (toggleText) toggleText.textContent = 'Remember your password?';
          if (toggleBtn) toggleBtn.textContent = 'Sign In';
        } else {
          if (title) title.textContent = 'Welcome Back';
          if (subtitle) subtitle.textContent = 'Sign in to your Synergy Bravo ERP account';
          if (submitBtn) submitBtn.textContent = 'Sign In';
          if (toggleText) toggleText.textContent = "Don't have an account?";
          if (toggleBtn) toggleBtn.textContent = 'Sign Up';
        }
      }
    },

    applyLocalization: function() {
      const market = MARKETS[currentMarket] || MARKETS.KE;
      const lang = currentLang;
      const isEnglish = (lang === 'en');

      // Capture original English ONCE — only if not yet captured
      if (!isEnglishCaptured) {
        captureOriginalEnglish(document.body);
        isEnglishCaptured = true;
      }

      // Deep Bi-Directional Document Translation
      this.translateNode(document.body, lang);

      // Update Auth Modal UI imperatively (bypasses WeakMap for modal elements)
      this.translateModalUI();

      // Expose current language globally so other page scripts can read it
      window._synergyLang = currentLang;
      document.documentElement.lang = (currentLang === 'sw') ? 'sw' : 'en';

      // Update data-i18n elements (legacy support)
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const legacyMap = {
          nav_signin:    { en: 'Sign in',       sw: 'Ingia' },
          nav_apps:      { en: 'Apps',           sw: 'Programu' },
          nav_features:  { en: 'Features',       sw: 'Vipengele' },
          nav_usedby:    { en: 'Used By',        sw: 'Inatumiwa Na' },
          nav_community: { en: 'Community',      sw: 'Jamii' },
          nav_pricing:   { en: 'Pricing',        sw: 'Bei' },
          nav_help:      { en: 'Help',           sw: 'Msaada' },
          nav_home:      { en: 'Home',           sw: 'Nyumbani' },
          nav_help_center:{ en: 'Help Center',   sw: 'Kituo cha Msaada' },
          request_demo:  { en: 'Request Demo',   sw: 'Omba Jaribio' },
          hero_cta_1:    { en: 'Request Demo',   sw: 'Omba Jaribio' },
          explore_apps:  { en: 'Explore Apps',   sw: 'Tazama Programu' }
        };
        if (legacyMap[key]) {
          el.textContent = legacyMap[key][lang] || legacyMap[key].en;
        }
      });

      // Update data-i18n-text elements (textContent-based, used for labels/options/spans)
      document.querySelectorAll('[data-i18n-text]').forEach(el => {
        const enKey = el.getAttribute('data-i18n-text');
        if (lang === 'en') {
          el.textContent = enKey;
        } else {
          // Look up in T table directly
          const swVal = T[enKey];
          if (swVal && swVal !== enKey) {
            el.textContent = swVal;
          }
        }
      });

      // Update selector bar display texts if bar is already initialized
      const marketText = document.getElementById('selectedMarketText');
      const langText = document.getElementById('selectedLangText');
      if (marketText) {
        const m = MARKETS[currentMarket] || MARKETS.KE;
        marketText.textContent = `${m.flag} ${m.code}`;
      }
      if (langText) {
        langText.textContent = currentLang.toUpperCase();
      }


      // Update Pricing Cards & Badges
      document.querySelectorAll('[data-price-ksh]').forEach(el => {
        const baseKsh = parseFloat(el.getAttribute('data-price-ksh'));
        if (!isNaN(baseKsh)) {
          el.textContent = this.formatCurrency(baseKsh);
        }
      });

      // Toggle Market-Specific Elements
      document.querySelectorAll('.market-east-africa').forEach(el => {
        el.style.display = market.isEastAfrica ? '' : 'none';
      });
      document.querySelectorAll('.market-west').forEach(el => {
        el.style.display = market.isEastAfrica ? 'none' : '';
      });

      // Toggle Payment Methods
      document.querySelectorAll('.payment-mpesa').forEach(el => {
        el.style.display = market.hasMpesa ? '' : 'none';
      });
      document.querySelectorAll('.payment-card').forEach(el => {
        el.style.display = market.hasMpesa ? 'none' : '';
      });

      // Update Payout Labels
      document.querySelectorAll('.market-payout-label').forEach(el => {
        el.textContent = market.payoutLabel;
      });

      // Update Imagery for Context
      document.querySelectorAll('[data-img-ke]').forEach(img => {
        const keSrc = img.getAttribute('data-img-ke');
        const westSrc = img.getAttribute('data-img-west') || keSrc;
        img.src = market.isEastAfrica ? keSrc : westSrc;
      });

      // Update selector UI displays
      const selectorMarketText = document.getElementById('selectedMarketText');
      if (selectorMarketText) {
        selectorMarketText.innerHTML = `${market.flag} ${market.code}`;
      }
      const selectorLangText = document.getElementById('selectedLangText');
      if (selectorLangText) {
        selectorLangText.textContent = lang.toUpperCase();
      }

      // Dispatch custom event
      window.dispatchEvent(new CustomEvent('synergyLocalizationChanged', { detail: { market, lang } }));
    },

    autoDetectRegion: function() {
      if (localStorage.getItem('synergy_market')) return;
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          if (data && data.country_code) {
            const country = data.country_code.toUpperCase();
            if (MARKETS[country]) {
              this.setMarket(country);
            } else if (['TZ', 'UG', 'KE', 'RW', 'BI'].includes(country)) {
              this.setMarket('KE');
            } else {
              this.setMarket('US');
            }
          }
        })
        .catch(() => {
          const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
          if (tz.includes('Nairobi') || tz.includes('Africa')) {
            this.setMarket('KE');
          } else {
            this.setMarket('US');
          }
        });
    }
  };

  // Render Country Selector & Language Selector Bar in Header
  window.renderLocalizationHeaderBar = function() {
    // The bar element is already embedded in the HTML above the Sign In link.
    // We just populate its inner HTML and wire up the dropdowns.
    const bar = document.getElementById('synergyLocalizationBar');
    if (!bar) return;
    // Avoid double-init
    if (bar.dataset.initialized) return;
    bar.dataset.initialized = 'true';

    const market = MARKETS[currentMarket] || MARKETS.KE;

    bar.innerHTML = `
      <div style="position:relative; display:inline-block;">
        <button type="button" id="marketSelectorBtn" title="Change Region / Market"
          style="background:none;border:none;color:#f8fafc;font-weight:600;cursor:pointer;display:flex;align-items:center;gap:4px;padding:2px 4px;font-size:0.74rem;font-family:inherit;line-height:1.3;">
          <span id="selectedMarketText">${market.flag} ${market.code}</span>
          <span style="font-size:0.56rem;color:#f6dd0d;">&#9660;</span>
        </button>
        <div id="marketMenu" style="display:none;position:absolute;top:110%;left:0;background:#16221c;border:1px solid #364e43;border-radius:4px;box-shadow:0 12px 30px rgba(0,0,0,0.85);z-index:50000;min-width:180px;padding:6px 0;">
          <div style="padding:4px 10px;font-size:0.68rem;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Region / Market</div>
          <a href="#" onclick="SynergyLocalization.setMarket('KE');return false;" style="display:flex;align-items:center;gap:8px;padding:6px 12px;color:#f8fafc;text-decoration:none;font-size:0.8rem;">🇰🇪 Kenya (KSh)</a>
          <a href="#" onclick="SynergyLocalization.setMarket('TZ');return false;" style="display:flex;align-items:center;gap:8px;padding:6px 12px;color:#f8fafc;text-decoration:none;font-size:0.8rem;">🇹🇿 Tanzania (TSh)</a>
          <a href="#" onclick="SynergyLocalization.setMarket('UG');return false;" style="display:flex;align-items:center;gap:8px;padding:6px 12px;color:#f8fafc;text-decoration:none;font-size:0.8rem;">🇺🇬 Uganda (USh)</a>
          <a href="#" onclick="SynergyLocalization.setMarket('US');return false;" style="display:flex;align-items:center;gap:8px;padding:6px 12px;color:#f8fafc;text-decoration:none;font-size:0.8rem;">🇺🇸 United States ($)</a>
          <a href="#" onclick="SynergyLocalization.setMarket('EU');return false;" style="display:flex;align-items:center;gap:8px;padding:6px 12px;color:#f8fafc;text-decoration:none;font-size:0.8rem;">🇪🇺 Europe / Global (€)</a>
        </div>
      </div>
      <span style="color:#364e43;padding:0 2px;line-height:1;">|</span>
      <div style="position:relative;display:inline-block;">
        <button type="button" id="langSelectorBtn" title="Change Language"
          style="background:none;border:none;color:#f6dd0d;font-weight:700;cursor:pointer;display:flex;align-items:center;gap:4px;padding:2px 4px;font-size:0.74rem;font-family:inherit;line-height:1.3;">
          <span id="selectedLangText">${currentLang.toUpperCase()}</span>
          <span style="font-size:0.56rem;color:#f6dd0d;">&#9660;</span>
        </button>
        <div id="langMenu" style="display:none;position:absolute;top:110%;right:0;background:#16221c;border:1px solid #364e43;border-radius:4px;box-shadow:0 12px 30px rgba(0,0,0,0.85);z-index:50000;min-width:140px;padding:6px 0;">
          <div style="padding:4px 10px;font-size:0.68rem;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:0.5px;">Language</div>
          <a href="#" onclick="SynergyLocalization.setLanguage('sw');return false;" style="display:flex;align-items:center;gap:8px;padding:6px 12px;color:#f8fafc;text-decoration:none;font-size:0.8rem;">🇰🇪 Kiswahili</a>
          <a href="#" onclick="SynergyLocalization.setLanguage('en');return false;" style="display:flex;align-items:center;gap:8px;padding:6px 12px;color:#f8fafc;text-decoration:none;font-size:0.8rem;">🇬🇧 English</a>
        </div>
      </div>
    `;

    // Wire up dropdown toggle events
    const marketBtn = bar.querySelector('#marketSelectorBtn');
    const marketMenu = bar.querySelector('#marketMenu');
    const langBtn = bar.querySelector('#langSelectorBtn');
    const langMenu = bar.querySelector('#langMenu');

    if (marketBtn && marketMenu) {
      marketBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (langMenu) langMenu.style.display = 'none';
        marketMenu.style.display = marketMenu.style.display === 'none' ? 'block' : 'none';
      });
    }

    if (langBtn && langMenu) {
      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (marketMenu) marketMenu.style.display = 'none';
        langMenu.style.display = langMenu.style.display === 'none' ? 'block' : 'none';
      });
    }

    document.addEventListener('click', () => {
      if (marketMenu) marketMenu.style.display = 'none';
      if (langMenu) langMenu.style.display = 'none';
    });
  };

  // Initial Setup

  function init() {
    if (!isEnglishCaptured) {
      captureOriginalEnglish(document.body);
      isEnglishCaptured = true;
    }
    window.renderLocalizationHeaderBar();
    SynergyLocalization.applyLocalization();
    SynergyLocalization.autoDetectRegion();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
