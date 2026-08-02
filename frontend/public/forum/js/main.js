// Forum functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    initializeFilters();
    initializeSorting();
    initializeTags();
    
    // Load question data from URL if on detail page
    if (window.location.pathname.includes('question-detail.html')) {
        loadQuestionDetail();
    }
});

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase();
        filterQuestionsBySearch(query);
    });
}

function filterQuestionsBySearch(query) {
    const questionItems = document.querySelectorAll('.question-item');
    
    questionItems.forEach(item => {
        const title = item.querySelector('.question-title a').textContent.toLowerCase();
        const excerpt = item.querySelector('.question-excerpt').textContent.toLowerCase();
        
        if (title.includes(query) || excerpt.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = query ? 'none' : 'block';
        }
    });
    
    updateQuestionCount();
}

// Filter functionality
function initializeFilters() {
    // Tab filtering is handled by onclick events in HTML
}

function filterQuestions(type) {
    const tabs = document.querySelectorAll('.forum-tabs button');
    const questionItems = document.querySelectorAll('.question-item');
    
    // Update active tab
    tabs.forEach(tab => tab.classList.remove('active'));
    event.target.classList.add('active');
    
    // Filter questions based on type
    questionItems.forEach(item => {
        const answerCount = parseInt(item.dataset.answers);
        
        switch(type) {
            case 'all':
                item.style.display = 'block';
                break;
            case 'unanswered':
                item.style.display = answerCount === 0 ? 'block' : 'none';
                break;
            case 'following':
                // Mock following logic - in real app this would check user's followed questions
                item.style.display = Math.random() > 0.7 ? 'block' : 'none';
                break;
        }
    });
    
    updateQuestionCount();
}

// Sorting functionality
function initializeSorting() {
    // Sorting is handled by onclick events in HTML
}

function sortQuestions(type) {
    const sortButtons = document.querySelectorAll('.sort-buttons button');
    const questionList = document.getElementById('questionList');
    const questions = Array.from(questionList.querySelectorAll('.question-item'));
    
    // Update active sort button
    sortButtons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    // Sort questions based on type
    questions.sort((a, b) => {
        switch(type) {
            case 'newest':
                // Mock sorting by date - in real app would use actual timestamps
                return Math.random() - 0.5;
            case 'votes':
                const aVotes = parseInt(a.querySelector('.question-stat-number').textContent);
                const bVotes = parseInt(b.querySelector('.question-stat-number').textContent);
                return bVotes - aVotes;
            case 'active':
            default:
                // Mock activity sorting
                return Math.random() - 0.5;
        }
    });
    
    // Re-append sorted questions
    questions.forEach(question => questionList.appendChild(question));
}

// Tag functionality
function initializeTags() {
    // Tag filtering is handled by onclick events in HTML
}

function filterByTag(tagName) {
    const questionItems = document.querySelectorAll('.question-item');
    
    questionItems.forEach(item => {
        const tags = item.querySelectorAll('.question-tag');
        const hasTag = Array.from(tags).some(tag => 
            tag.textContent.toLowerCase().includes(tagName.toLowerCase())
        );
        
        item.style.display = hasTag ? 'block' : 'none';
    });
    
    updateQuestionCount();
    
    // Highlight active tag
    const tagItems = document.querySelectorAll('.tag-item, .question-tag');
    tagItems.forEach(tag => {
        if (tag.textContent.toLowerCase().includes(tagName.toLowerCase())) {
            tag.style.opacity = '1';
            tag.style.transform = 'scale(1.05)';
        } else {
            tag.style.opacity = '0.6';
            tag.style.transform = 'scale(1)';
        }
    });
    
    // Reset after 2 seconds
    setTimeout(() => {
        tagItems.forEach(tag => {
            tag.style.opacity = '';
            tag.style.transform = '';
        });
    }, 2000);
}

// Utility functions
function updateQuestionCount() {
    const visibleQuestions = document.querySelectorAll('.question-item[style*="block"], .question-item:not([style*="none"])');
    const countElement = document.querySelector('.question-count');
    if (countElement) {
        countElement.textContent = `${visibleQuestions.length} questions`;
    }
}

function changePage(pageNum) {
    const paginationButtons = document.querySelectorAll('.pagination button');
    
    paginationButtons.forEach(btn => btn.classList.remove('active'));
    
    if (typeof pageNum === 'number') {
        // Find and activate the specific page button
        paginationButtons.forEach(btn => {
            if (btn.textContent == pageNum) {
                btn.classList.add('active');
            }
        });
    }
    
    // In a real application, this would load different questions
    console.log(`Loading page ${pageNum}`);
}

// Navigation functions
function navigateToMainSite() {
    alert('This would navigate back to your main website - in a real app, this would be something like window.location.href = "/"');
}

function navigateTo(page) {
    switch(page) {
        case 'questions':
            window.location.href = 'index.html';
            break;
        default:
            console.log(`Navigate to ${page}`);
    }
}

// Login/Auth functions
function showLoginDialog() {
    if (typeof window.openSignInModal === 'function') {
        window.openSignInModal('signin');
    }
}

function closeLoginDialog() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.remove();
    }
}

function handleLogin() {
    alert('Login functionality would be implemented here');
    closeLoginDialog();
}

// Question detail page functionality
function loadQuestionDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const questionId = urlParams.get('id');
    
    // In a real app, this would fetch question data from an API
    const questionData = getQuestionById(questionId);
    
    if (questionData) {
        updateQuestionDetailPage(questionData);
    }
}

function getQuestionById(id) {
    // Mock question data - in real app this would come from database
    const questions = {
        '1': {
            title: 'How to configure email settings for notifications?',
            body: `I'm trying to set up email notifications for my application but I can't seem to find the right configuration options in the admin panel. I've checked the documentation but it seems outdated.

Here's what I've tried so far:
• Checked the Settings > General > Notifications section
• Looked in the Email Configuration menu  
• Verified SMTP settings are correct

The emails are not being sent when users perform certain actions. Has anyone encountered this issue before? What am I missing?

My setup:
• Version 15.0
• Ubuntu 20.04 server
• PostgreSQL database`,
            author: 'john_doe',
            votes: 3,
            views: 45,
            answers: 2,
            tags: ['configuration', 'email'],
            asked: '2 hours ago'
        },
        '2': {
            title: 'Database backup process failing',
            body: `The automated backup process has been failing with error code 500. This started happening after the recent system update.

Error details:
• Error Code: 500
• Frequency: Every backup attempt
• Started: After version 14.2 update

Has anyone experienced similar issues? Any suggestions for troubleshooting?`,
            author: 'admin_user',
            votes: 1,
            views: 12,
            answers: 0,
            tags: ['database', 'backup'],
            asked: '5 hours ago'
        }
        // Add more mock questions as needed
    };
    
    return questions[id] || questions['1']; // Default to first question
}

function updateQuestionDetailPage(questionData) {
    // Update page title
    document.title = `${questionData.title} - Forum`;
    
    // Update question content
    const titleElement = document.querySelector('.question-detail-title');
    if (titleElement) {
        titleElement.textContent = questionData.title;
    }
    
    const bodyElement = document.querySelector('.question-body');
    if (bodyElement) {
        // Convert line breaks to paragraphs
        const paragraphs = questionData.body.split('\n\n').map(p => `<p>${p}</p>`).join('');
        bodyElement.innerHTML = paragraphs.replace(/•/g, '<li>').replace(/<p><li>/g, '<ul><li>').replace(/<\/li><\/p>/g, '</li></ul>');
    }
    
    const voteElement = document.querySelector('.vote-score');
    if (voteElement) {
        voteElement.textContent = questionData.votes;
    }
}

// Form handling for ask question page
function handleAskQuestion(event) {
    event.preventDefault();
    
    const formData = {
        title: document.getElementById('questionTitle').value,
        body: document.getElementById('questionBody').value,
        tags: document.getElementById('questionTags').value
    };
    
    if (!formData.title || !formData.body) {
        alert('Please fill in all required fields');
        return;
    }
    
    // In a real app, this would submit to a server
    console.log('Submitting question:', formData);
    alert('Question submitted successfully! Redirecting to forum...');
    
    // Redirect to main forum
    window.location.href = 'index.html';
}

function previewQuestion() {
    const title = document.getElementById('questionTitle').value;
    const body = document.getElementById('questionBody').value;
    
    if (!title || !body) {
        alert('Please enter a title and body to preview');
        return;
    }
    
    // Create preview modal
    const previewHtml = `
        <div id="previewModal" style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 20px;">
            <div style="background: white; padding: 30px; border-radius: 10px; width: 100%; max-width: 800px; max-height: 90%; overflow-y: auto;">
                <h3 style="margin-top: 0; color: #333;">Preview</h3>
                <div style="border: 1px solid #ddd; border-radius: 6px; padding: 20px; margin: 20px 0;">
                    <h2 style="color: var(--secondary); margin-top: 0;">${title}</h2>
                    <div style="white-space: pre-wrap; line-height: 1.6;">${body}</div>
                </div>
                <button onclick="closePreview()" style="padding: 10px 20px; background: var(--primary); color: white; border: none; border-radius: 4px; cursor: pointer;">Close Preview</button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', previewHtml);
}

function closePreview() {
    const modal = document.getElementById('previewModal');
    if (modal) {
        modal.remove();
    }
}

// Voting functionality
function vote(direction) {
    const voteScore = document.querySelector('.vote-score');
    let currentScore = parseInt(voteScore.textContent);
    
    if (direction === 'up') {
        currentScore++;
    } else {
        currentScore--;
    }
    
    voteScore.textContent = currentScore;
    
    // Visual feedback
    const button = event.target;
    button.style.background = '#e8f5e8';
    button.style.borderColor = '#28a745';
    
    setTimeout(() => {
        button.style.background = '';
        button.style.borderColor = '';
    }, 1000);
}

// Tag suggestion functionality
function initializeTagSuggestions() {
    const tagInput = document.getElementById('questionTags');
    if (!tagInput) return;
    
    const allTags = ['configuration', 'email', 'database', 'backup', 'permissions', 'security', 'users', 'api', 'integration', 'authentication', 'performance', 'update', 'modules'];
    
    tagInput.addEventListener('input', function() {
        const query = this.value.split(',').pop().trim().toLowerCase();
        
        if (query.length < 2) {
            hideSuggestions();
            return;
        }
        
        const matches = allTags.filter(tag => 
            tag.toLowerCase().includes(query) && 
            !this.value.toLowerCase().includes(tag.toLowerCase())
        );
        
        showSuggestions(matches, query);
    });
}

function showSuggestions(tags, query) {
    hideSuggestions();
    
    if (tags.length === 0) return;
    
    const tagInput = document.getElementById('questionTags');
    const container = tagInput.parentElement;
    
    const suggestions = document.createElement('div');
    suggestions.className = 'tag-suggestions';
    suggestions.id = 'tagSuggestions';
    
    tags.forEach(tag => {
        const suggestion = document.createElement('div');
        suggestion.className = 'tag-suggestion';
        suggestion.textContent = tag;
        suggestion.onclick = () => selectTag(tag);
        suggestions.appendChild(suggestion);
    });
    
    container.appendChild(suggestions);
}

function hideSuggestions() {
    const existing = document.getElementById('tagSuggestions');
    if (existing) {
        existing.remove();
    }
}

function selectTag(tag) {
    const tagInput = document.getElementById('questionTags');
    const currentTags = tagInput.value.split(',').map(t => t.trim()).filter(t => t);
    
    // Remove the partial tag being typed
    currentTags.pop();
    currentTags.push(tag);
    
    tagInput.value = currentTags.join(', ') + ', ';
    tagInput.focus();
    hideSuggestions();
}

// Initialize tag suggestions on ask question page
if (window.location.pathname.includes('ask-question.html')) {
    document.addEventListener('DOMContentLoaded', initializeTagSuggestions);
}

// Utility function to go back to forum
function goBackToForum(event) {
    if (event) event.preventDefault();
    window.location.href = 'index.html';
}

// Mock data for users page
function loadUsers() {
    const users = [
        {
            name: 'John Doe',
            username: 'john_doe',
            title: 'Senior Developer',
            questions: 15,
            answers: 42,
            reputation: 1250
        },
        {
            name: 'Sarah Miller',
            username: 'sarah_m',
            title: 'System Administrator',
            questions: 8,
            answers: 67,
            reputation: 2100
        },
        {
            name: 'Mike Johnson',
            username: 'dev_mike',
            title: 'Full Stack Developer',
            questions: 23,
            answers: 31,
            reputation: 890
        },
        {
            name: 'Admin User',
            username: 'admin_user',
            title: 'Platform Administrator',
            questions: 5,
            answers: 123,
            reputation: 3500
        }
    ];
    
    return users;
}

// Mock data for tags page
function loadTags() {
    const tags = [
        {
            name: 'configuration',
            description: 'Questions about system configuration and setup',
            questions: 45,
            followers: 23
        },
        {
            name: 'email',
            description: 'Email-related issues and configurations',
            questions: 32,
            followers: 18
        },
        {
            name: 'database',
            description: 'Database management and troubleshooting',
            questions: 67,
            followers: 45
        },
        {
            name: 'security',
            description: 'Security, permissions, and authentication',
            questions: 29,
            followers: 34
        },
        {
            name: 'api',
            description: 'API integration and development',
            questions: 38,
            followers: 27
        },
        {
            name: 'performance',
            description: 'Performance optimization and troubleshooting',
            questions: 22,
            followers: 31
        }
    ];
    
    return tags;
}

// Search functionality for users page
function searchUsers() {
    const searchInput = document.getElementById('userSearch');
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase();
    const userCards = document.querySelectorAll('.user-card');
    
    userCards.forEach(card => {
        const name = card.querySelector('.user-name').textContent.toLowerCase();
        const title = card.querySelector('.user-title').textContent.toLowerCase();
        
        if (name.includes(query) || title.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = query ? 'none' : 'block';
        }
    });
}

// Search functionality for tags page
function searchTags() {
    const searchInput = document.getElementById('tagSearch');
    if (!searchInput) return;
    
    const query = searchInput.value.toLowerCase();
    const tagCards = document.querySelectorAll('.tag-card');
    
    tagCards.forEach(card => {
        const name = card.querySelector('.tag-name').textContent.toLowerCase();
        const description = card.querySelector('.tag-description').textContent.toLowerCase();
        
        if (name.includes(query) || description.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = query ? 'none' : 'block';
        }
    });
}

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add loading states for better UX
function showLoading() {
    const loading = document.createElement('div');
    loading.id = 'loading';
    loading.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(255,255,255,0.8); z-index: 3000; display: flex; align-items: center; justify-content: center;">
            <div style="text-align: center;">
                <div style="width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid var(--primary); border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 15px;"></div>
                <p style="color: #666;">Loading...</p>
            </div>
        </div>
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        </style>
    `;
    document.body.appendChild(loading);
}

function hideLoading() {
    const loading = document.getElementById('loading');
    if (loading) {
        loading.remove();
    }
}

// Simulate API calls with loading states
function simulateApiCall(callback, delay = 1000) {
    showLoading();
    setTimeout(() => {
        hideLoading();
        callback();
    }, delay);
}

// Enhanced form validation
function validateAskQuestionForm() {
    const title = document.getElementById('questionTitle');
    const body = document.getElementById('questionBody');
    const tags = document.getElementById('questionTags');
    
    let isValid = true;
    
    // Clear previous errors
    clearFieldErrors();
    
    // Validate title
    if (!title.value.trim()) {
        showFieldError(title, 'Title is required');
        isValid = false;
    } else if (title.value.trim().length < 10) {
        showFieldError(title, 'Title must be at least 10 characters');
        isValid = false;
    }
    
    // Validate body
    if (!body.value.trim()) {
        showFieldError(body, 'Question body is required');
        isValid = false;
    } else if (body.value.trim().length < 30) {
        showFieldError(body, 'Question body must be at least 30 characters');
        isValid = false;
    }
    
    // Validate tags
    const tagArray = tags.value.split(',').map(t => t.trim()).filter(t => t);
    if (tagArray.length === 0) {
        showFieldError(tags, 'At least one tag is required');
        isValid = false;
    } else if (tagArray.length > 5) {
        showFieldError(tags, 'Maximum 5 tags allowed');
        isValid = false;
    }
    
    return isValid;
}

function showFieldError(field, message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.cssText = 'color: #dc3545; font-size: 0.85rem; margin-top: 5px;';
    errorDiv.textContent = message;
    
    field.style.borderColor = '#dc3545';
    field.parentNode.appendChild(errorDiv);
}

function clearFieldErrors() {
    const errors = document.querySelectorAll('.field-error');
    errors.forEach(error => error.remove());
    
    const fields = document.querySelectorAll('.form-input, .form-textarea');
    fields.forEach(field => {
        field.style.borderColor = '';
    });
}

// Auto-save draft functionality
let draftTimer;

function initializeAutoSave() {
    const titleField = document.getElementById('questionTitle');
    const bodyField = document.getElementById('questionBody');
    const tagsField = document.getElementById('questionTags');
    
    if (!titleField || !bodyField || !tagsField) return;
    
    [titleField, bodyField, tagsField].forEach(field => {
        field.addEventListener('input', () => {
            clearTimeout(draftTimer);
            draftTimer = setTimeout(saveDraft, 2000);
        });
    });
    
    // Load existing draft
    loadDraft();
}

function saveDraft() {
    const draft = {
        title: document.getElementById('questionTitle').value,
        body: document.getElementById('questionBody').value,
        tags: document.getElementById('questionTags').value,
        timestamp: Date.now()
    };
    
    localStorage.setItem('questionDraft', JSON.stringify(draft));
    showDraftSaved();
}

function loadDraft() {
    const draft = localStorage.getItem('questionDraft');
    if (!draft) return;
    
    try {
        const draftData = JSON.parse(draft);
        
        // Only load if draft is less than 7 days old
        if (Date.now() - draftData.timestamp < 7 * 24 * 60 * 60 * 1000) {
            if (confirm('You have a saved draft. Would you like to restore it?')) {
                document.getElementById('questionTitle').value = draftData.title || '';
                document.getElementById('questionBody').value = draftData.body || '';
                document.getElementById('questionTags').value = draftData.tags || '';
            }
        }
    } catch (e) {
        console.error('Error loading draft:', e);
    }
}

function clearDraft() {
    localStorage.removeItem('questionDraft');
}

function showDraftSaved() {
    const indicator = document.getElementById('draftIndicator') || createDraftIndicator();
    indicator.textContent = 'Draft saved';
    indicator.style.opacity = '1';
    
    setTimeout(() => {
        indicator.style.opacity = '0';
    }, 2000);
}

function createDraftIndicator() {
    const indicator = document.createElement('div');
    indicator.id = 'draftIndicator';
    indicator.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: var(--secondary);
        color: white;
        padding: 8px 15px;
        border-radius: 4px;
        font-size: 0.85rem;
        opacity: 0;
        transition: opacity 0.3s;
        z-index: 1000;
    `;
    document.body.appendChild(indicator);
    return indicator;
}

// Initialize auto-save on ask question page
if (window.location.pathname.includes('ask-question.html')) {
    document.addEventListener('DOMContentLoaded', initializeAutoSave);
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
        }
    }
    
    // Escape to close modals
    if (e.key === 'Escape') {
        closeLoginDialog();
        closePreview();
        hideSuggestions();
    }
});

// Analytics tracking (placeholder)
function trackEvent(category, action, label) {
    console.log(`Analytics: ${category} - ${action} - ${label}`);
    // In a real app, this would send to analytics service
}

// Track common interactions
document.addEventListener('click', function(e) {
    if (e.target.matches('.question-title a')) {
        trackEvent('Navigation', 'Question Click', e.target.textContent);
    }
    
    if (e.target.matches('.question-tag')) {
        trackEvent('Filter', 'Tag Click', e.target.textContent);
    }
    
    if (e.target.matches('.btn')) {
        trackEvent('Button', 'Click', e.target.textContent);
    }
});

// Performance monitoring
function measurePageLoad() {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
            // In a real app, this would send to monitoring service
        }, 0);
    });
}

measurePageLoad();
 