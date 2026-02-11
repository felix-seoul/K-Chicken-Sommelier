// K-Chicken Sommelier - App Logic

// ========== STATE MANAGEMENT ==========
const state = {
    currentPage: 'home',
    currentQuestion: 0,
    answers: {},
    userProfile: null,
    matches: [],
    isPremium: false,
    history: []
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initNavigation();
    initQuiz();
    initPremium();
    initSettings();
    initFAQ();
    initLanguages();
    initShare();
    showPage('home');
});

// ========== NAVIGATION ==========
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show target page
    const targetPage = document.getElementById(`page-${pageName}`);
    if (targetPage) {
        targetPage.classList.add('active');
        state.currentPage = pageName;

        // Scroll to top
        window.scrollTo(0, 0);

        // Page-specific initialization
        if (pageName === 'quiz') {
            renderQuizQuestion();
        } else if (pageName === 'results') {
            renderResults();
        } else if (pageName === 'settings') {
            renderSettings();
        }
    }
}

function initNavigation() {
    // Navigation buttons
    document.querySelectorAll('[data-navigate]').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.navigate;
            showPage(target);
        });
    });

    // Start quiz button
    document.querySelectorAll('[data-action="start-quiz"]').forEach(btn => {
        btn.addEventListener('click', () => {
            state.currentQuestion = 0;
            state.answers = {};
            showPage('quiz');
        });
    });
}

// ========== QUIZ LOGIC ==========
function initQuiz() {
    // Next button
    const nextBtn = document.getElementById('quiz-next');
    if (nextBtn) {
        nextBtn.addEventListener('click', handleQuizNext);
    }

    // Skip button
    const skipBtn = document.getElementById('quiz-skip');
    if (skipBtn) {
        skipBtn.addEventListener('click', handleQuizSkip);
    }

    // Back button
    const backBtn = document.getElementById('quiz-back');
    if (backBtn) {
        backBtn.addEventListener('click', handleQuizBack);
    }
}

function renderQuizQuestion() {
    const question = QUIZ_QUESTIONS[state.currentQuestion];
    if (!question) return;

    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    const lang = state.language || 'en';

    // Update progress
    if (progressText) {
        progressText.textContent = `Question ${state.currentQuestion + 1} of ${QUIZ_QUESTIONS.length}`;
    }
    if (progressFill) {
        const progress = ((state.currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;
        progressFill.style.width = `${progress}%`;
    }

    // Get translations
    const qTrans = QUIZ_TRANSLATIONS[question.id];
    const titleText = qTrans?.title[lang] || question.title;

    // Update question title
    const titleEl = document.getElementById('quiz-title');
    if (titleEl) {
        titleEl.textContent = titleText;
    }

    // Render options
    const optionsContainer = document.getElementById('quiz-options');
    if (optionsContainer) {
        optionsContainer.innerHTML = question.options.map((option, index) => {
            const labelText = qTrans?.options[option.value]?.[lang] || option.label;
            return `
      <button class="quiz-option ${state.answers[question.id] === option.value ? 'selected' : ''}" 
              data-value="${option.value}" 
              data-index="${index}">
        ${labelText}
      </button>
    `;
        }).join('');

        // Add click handlers
        optionsContainer.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', () => handleOptionSelect(question.id, btn.dataset.value));
        });
    }

    // Update button states
    updateQuizButtons();
}

function handleOptionSelect(questionId, value) {
    state.answers[questionId] = value;

    // Update visual selection
    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.classList.toggle('selected', btn.dataset.value === value);
    });

    updateQuizButtons();
}

function updateQuizButtons() {
    const question = QUIZ_QUESTIONS[state.currentQuestion];
    const nextBtn = document.getElementById('quiz-next');
    const hasAnswer = state.answers[question?.id];

    if (nextBtn) {
        nextBtn.disabled = !hasAnswer;

        // Update button text for last question
        if (state.currentQuestion === QUIZ_QUESTIONS.length - 1) {
            nextBtn.textContent = 'Get My Matches';
        } else {
            nextBtn.textContent = 'Next';
        }
    }
}

function handleQuizNext() {
    if (state.currentQuestion < QUIZ_QUESTIONS.length - 1) {
        state.currentQuestion++;
        renderQuizQuestion();
    } else {
        // Calculate results and show
        calculateResults();
        showPage('results');
    }
}

function handleQuizSkip() {
    if (state.currentQuestion < QUIZ_QUESTIONS.length - 1) {
        state.currentQuestion++;
        renderQuizQuestion();
    } else {
        calculateResults();
        showPage('results');
    }
}

function handleQuizBack() {
    if (state.currentQuestion > 0) {
        state.currentQuestion--;
        renderQuizQuestion();
    } else {
        showPage('home');
    }
}

// ========== SCORING ALGORITHM ==========
function calculateResults() {
    // Build user tag weights from answers
    const userTags = {};

    QUIZ_QUESTIONS.forEach(question => {
        const answerValue = state.answers[question.id];
        if (answerValue) {
            const option = question.options.find(o => o.value === answerValue);
            if (option && option.tags) {
                Object.entries(option.tags).forEach(([tag, weight]) => {
                    userTags[tag] = (userTags[tag] || 0) + weight;
                });
            }
        }
    });

    // Score each menu item
    const scored = MENU_ITEMS.map(item => {
        let score = 0;
        Object.entries(item.tags).forEach(([tag, weight]) => {
            if (userTags[tag]) {
                score += weight * userTags[tag];
            }
        });

        // Normalize to 0-100
        const maxPossible = Object.values(item.tags).reduce((a, b) => a + b, 0) * 4;
        const normalizedScore = Math.min(99, Math.round((score / maxPossible) * 100) + 50);

        return { ...item, score: normalizedScore };
    });

    // Sort by score and take top 3
    scored.sort((a, b) => b.score - a.score);
    state.matches = scored.slice(0, 3);

    // Build user profile
    state.userProfile = {
        crunch: state.answers.crunch || 'Balanced',
        heat: state.answers.heat || 'None',
        mood: state.answers.mood || 'Clean',
        sauce: state.answers.sauce || 'Light',
        situation: state.answers.situation || 'Solo',
        goal: state.answers.goal || 'Taste'
    };

    // Save to history
    addToHistory();
    saveState();
}

// ========== RESULTS PAGE ==========
function renderResults() {
    renderProfileChips();
    renderMatchCards();
    updatePremiumSection();
}

function renderProfileChips() {
    const container = document.getElementById('profile-chips');
    const lang = state.language || 'en';
    const strings = UI_STRINGS[lang];

    if (!container || !state.userProfile) return;

    const chips = [
        { label: strings.crunch, value: state.userProfile.crunch },
        { label: strings.heat, value: state.userProfile.heat },
        { label: strings.sauce, value: state.userProfile.sauce }
    ];

    container.innerHTML = chips.map(chip => `
    <div class="profile-chip">
      <span class="profile-chip-label">${chip.label}:</span>
      <span class="profile-chip-value">${chip.value}</span>
    </div>
  `).join('');
}

function renderMatchCards() {
    const container = document.getElementById('match-cards');
    if (!container) return;

    const lang = state.language || 'en';
    const strings = UI_STRINGS[lang];

    container.innerHTML = state.matches.map(item => `
    <div class="match-card">
      <div class="match-card-image" onclick="window.open('${item.menuPage}', '_blank')" style="cursor: pointer; overflow: hidden;">
        <img class="match-card-photo" src="${item.image}" data-fallback="${item.fallbackImage || ''}" alt="${item.name}" loading="lazy" decoding="async" referrerpolicy="no-referrer">
        <div class="match-card-badge">
          <span class="badge ${item.badge === 'Spicy' ? 'badge-spicy' : ''}">${item.badge}</span>
        </div>
      </div>
      <div class="match-card-content">
        <div class="match-card-header">
          <div class="match-card-meta" onclick="window.open('${item.website}', '_blank')">
            <div class="match-card-name">${item.name} <span style="font-size: 12px; vertical-align: middle;">🔗</span></div>
            <div class="match-card-brand-row">
              ${item.brandImage ? `<img class="match-card-brand-logo" src="${item.brandImage}" alt="${item.brand} logo" loading="lazy" decoding="async" referrerpolicy="no-referrer">` : ''}
              <div class="match-card-brand">${item.brand}</div>
            </div>
          </div>
          <div class="match-card-score">
            <div class="match-card-score-value">${item.score}</div>
            <div class="match-card-score-label">${strings.matchScore}</div>
          </div>
        </div>
        <div class="mini-meters">
          <div class="mini-meter">
            <div class="mini-meter-label">${strings.crunch}</div>
            <div class="mini-meter-bar">
              <div class="mini-meter-fill" style="width: ${(item.crunchLevel || 0) * 33}%"></div>
            </div>
          </div>
          <div class="mini-meter">
            <div class="mini-meter-label">${strings.heat}</div>
            <div class="mini-meter-bar">
              <div class="mini-meter-fill" style="width: ${item.heatLevel * 20}%"></div>
            </div>
          </div>
          <div class="mini-meter">
            <div class="mini-meter-label">${strings.sauce}</div>
            <div class="mini-meter-bar">
              <div class="mini-meter-fill" style="width: ${item.sauceLevel * 20}%"></div>
            </div>
          </div>
        </div>
        <div class="match-card-reason">${item.characteristics || 'Perfect match for your taste profile.'}</div>
      </div>
    </div>
  `).join('');

    attachMatchCardImageFallbacks(container);
}

function attachMatchCardImageFallbacks(container) {
    container.querySelectorAll('.match-card-photo').forEach(img => {
        img.addEventListener('error', () => {
            const fallback = img.dataset.fallback;
            const isFallbackApplied = img.dataset.fallbackApplied === 'true';

            if (fallback && !isFallbackApplied) {
                img.dataset.fallbackApplied = 'true';
                img.src = fallback;
                return;
            }

            img.style.display = 'none';
            img.closest('.match-card-image')?.classList.add('is-placeholder');
        });
    });

    container.querySelectorAll('.match-card-brand-logo').forEach(img => {
        img.addEventListener('error', () => {
            img.style.display = 'none';
        });
    });
}

function updatePremiumSection() {
    const lockedSection = document.getElementById('locked-premium-section');
    if (lockedSection) {
        lockedSection.style.display = state.isPremium ? 'none' : 'block';
    }
}

// ========== PREMIUM ==========
function initPremium() {
    // Start free month buttons
    document.querySelectorAll('[data-action="start-premium"]').forEach(btn => {
        btn.addEventListener('click', handleStartPremium);
    });

    // Restore purchase
    document.querySelectorAll('[data-action="restore-purchase"]').forEach(btn => {
        btn.addEventListener('click', handleRestorePurchase);
    });
}

function handleStartPremium() {
    // Simulate subscription
    state.isPremium = true;
    saveState();

    // Update UI
    alert('🎉 Welcome to Premium! Your free month has started.');
    showPage('results');
}

function handleRestorePurchase() {
    // Check localStorage for premium status
    if (state.isPremium) {
        alert('✓ Your Premium subscription has been restored!');
    } else {
        alert('No previous subscription found.');
    }
}

// ========== SETTINGS ==========
function initSettings() {
    // Language toggle
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            langToggle.classList.toggle('active');
        });
    }

    // Edit taste quiz
    document.querySelectorAll('[data-action="edit-quiz"]').forEach(btn => {
        btn.addEventListener('click', () => {
            state.currentQuestion = 0;
            showPage('quiz');
        });
    });
}

function renderSettings() {
    // Render profile chips in settings
    const profileSection = document.getElementById('settings-profile-chips');
    const lang = state.language || 'en';
    const uiStrings = UI_STRINGS[lang];

    if (profileSection && state.userProfile) {
        const chips = Object.entries(state.userProfile).map(([key, value]) => {
            // Translate Key
            const label = uiStrings[key] || capitalize(key);

            // Translate Value (if available)
            const qTrans = QUIZ_TRANSLATIONS[key];
            const valTrans = qTrans?.options[value]?.[lang] || value;

            // Skip legacy keys if needed, or show them
            if (['situation', 'goal'].includes(key)) return '';

            return `
      <div class="profile-chip">
        <span class="profile-chip-label">${label}:</span>
        <span class="profile-chip-value">${valTrans}</span>
      </div>
    `;
        }).join('');
        profileSection.innerHTML = chips;
    }

    // Render history
    const historyList = document.getElementById('history-list');
    if (historyList) {
        if (state.history.length === 0) {
            historyList.innerHTML = '<p class="text-muted">No picks yet. Take the quiz!</p>';
        } else {
            historyList.innerHTML = state.history.slice(0, 5).map(item => `
        <div class="history-item">
          <div>
            <div class="history-name">${item.name}</div>
            <div class="history-date">${item.date}</div>
          </div>
        </div>
      `).join('');
        }
    }

    // Update premium banner
    const premiumBanner = document.getElementById('settings-premium-banner');
    if (premiumBanner) {
        if (state.isPremium) {
            premiumBanner.innerHTML = `
        <div class="premium-banner premium-active-banner">
          <div class="premium-banner-title">Premium Active</div>
          <div class="premium-banner-text">Next billing: March 6, 2026</div>
          <button class="btn btn-secondary" style="background: white; color: #1A1A1A;">Manage Subscription</button>
        </div>
      `;
        } else {
            premiumBanner.innerHTML = `
        <div class="premium-banner">
          <div class="premium-banner-title">Try Premium</div>
          <div class="premium-banner-text">First month free. Then $4.99/month.</div>
          <button class="btn btn-primary" data-action="start-premium">Start Free Month</button>
        </div>
      `;
            // Re-attach handler
            premiumBanner.querySelector('[data-action="start-premium"]')?.addEventListener('click', handleStartPremium);
        }
    }
}

// ========== FAQ ==========
function initFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            item.classList.toggle('open');
        });
    });
}

// ========== HISTORY ==========
function addToHistory() {
    if (state.matches.length > 0) {
        const topMatch = state.matches[0];
        state.history.unshift({
            name: topMatch.name,
            score: topMatch.score,
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        });

        // Keep only last 10
        state.history = state.history.slice(0, 10);
    }
}

// ========== PERSISTENCE ==========
function saveState() {
    localStorage.setItem('kcs-state', JSON.stringify({
        userProfile: state.userProfile,
        history: state.history,
        isPremium: state.isPremium,
        answers: state.answers
    }));
}

function loadState() {
    try {
        const saved = localStorage.getItem('kcs-state');
        if (saved) {
            const data = JSON.parse(saved);
            state.userProfile = data.userProfile || null;
            state.history = data.history || [];
            state.isPremium = data.isPremium || false;
            state.answers = data.answers || {};
        }
    } catch (e) {
        console.error('Failed to load state:', e);
    }
}

// ========== UTILITIES ==========
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function hashText(text) {
    return (text || '').split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
}

function getStrings() {
    return UI_STRINGS[state.language || 'en'] || UI_STRINGS.en;
}

function pickBySeed(list, seedBase) {
    if (!list.length) return '';
    return list[Math.abs(hashText(seedBase)) % list.length];
}

function buildSharePayload() {
    const strings = getStrings();
    const lang = state.language || 'en';
    const top = state.matches[0];
    const second = state.matches[1];
    const third = state.matches[2];
    const url = window.location.href;

    if (!top) {
        const fallback = lang === 'ko'
            ? '30초 취향 테스트로 내 치킨 소울메이트 찾았다. 너도 해봐.'
            : 'I just took a 30-second test and found my K-chicken soulmate. Try it.';
        return {
            url,
            x: `${fallback} #KChickenSommelier`,
            facebook: fallback,
            instagram: `${fallback}\n#kchicken #foodtest #kchickensommelier`,
            preview: fallback,
            strings
        };
    }

    const hooksKo = [
        '치킨 취향 테스트했더니 소름 돋는 결과 나옴.',
        '오늘 야식, 이 테스트 한 번으로 종결.',
        '치킨 고르다 시간 버리는 사람들 필수.'
    ];
    const hooksEn = [
        'This chicken taste test read me too well.',
        'One quiz and tonight’s order is settled.',
        'If you overthink chicken orders, take this test.'
    ];
    const seed = `${top.id}-${top.score}`;
    const hook = lang === 'ko' ? pickBySeed(hooksKo, seed) : pickBySeed(hooksEn, seed);
    const topLine = lang === 'ko'
        ? `${top.score}% 취향 일치: ${top.brand} ${top.name}`
        : `${top.score}% match: ${top.brand} ${top.name}`;
    const rankLine = second && third
        ? (lang === 'ko' ? `2위 ${second.name} / 3위 ${third.name}` : `2nd ${second.name} / 3rd ${third.name}`)
        : '';
    const challengeLine = lang === 'ko'
        ? '너도 테스트하고 결과 공개해봐.'
        : 'Take the test and post your result.';

    const xText = [
        hook,
        topLine,
        rankLine,
        challengeLine,
        '#치킨테스트 #치킨추천 #KChickenSommelier'
    ].filter(Boolean).join('\n');

    const facebookText = [
        hook,
        topLine,
        rankLine,
        lang === 'ko'
            ? '치킨 메뉴 고민 끝내고 싶으면 이 테스트 추천.'
            : 'If you want faster chicken picks, this quiz is worth it.',
        challengeLine
    ].filter(Boolean).join('\n');

    const instagramText = [
        lang === 'ko' ? '오늘의 치킨 결과 공개' : 'Dropping my chicken test result',
        `${top.brand} ${top.name} (${top.score}% match)`,
        rankLine,
        challengeLine,
        '#치킨테스트 #치킨추천 #야식추천 #kchicken #foodie #kchickensommelier'
    ].filter(Boolean).join('\n');

    return {
        url,
        x: xText,
        facebook: facebookText,
        instagram: instagramText,
        preview: instagramText,
        strings
    };
}

function updateShareSheetTexts() {
    const payload = buildSharePayload();
    const strings = payload.strings;

    const titleEl = document.getElementById('share-sheet-title');
    if (titleEl) titleEl.textContent = strings.shareSheetTitle || 'Share your result';

    const subTitleEl = document.getElementById('share-sheet-subtitle');
    if (subTitleEl) subTitleEl.textContent = strings.shareSheetSubtitle || 'Post your chicken flex on social.';

    const previewEl = document.getElementById('share-preview-text');
    if (previewEl) previewEl.textContent = payload.preview;

    const xBtn = document.querySelector('[data-share-platform="x"]');
    if (xBtn) xBtn.textContent = strings.shareX || 'Share on X';

    const fbBtn = document.querySelector('[data-share-platform="facebook"]');
    if (fbBtn) fbBtn.textContent = strings.shareFacebook || 'Share on Facebook';

    const igBtn = document.querySelector('[data-share-platform="instagram"]');
    if (igBtn) igBtn.textContent = strings.shareInstagram || 'Share on Instagram';

    const copyBtn = document.querySelector('[data-share-platform="copy"]');
    if (copyBtn) copyBtn.textContent = strings.shareCopy || 'Copy caption';
}

function setShareStatus(message) {
    const statusEl = document.getElementById('share-status');
    if (statusEl) statusEl.textContent = message || '';
}

function openShareModal() {
    const modal = document.getElementById('share-modal');
    if (!modal) return;
    updateShareSheetTexts();
    setShareStatus('');
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
}

function closeShareModal() {
    const modal = document.getElementById('share-modal');
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
}

async function copyToClipboard(text) {
    if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
        return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
}

function openExternalShare(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

async function handleSharePlatform(platform) {
    const payload = buildSharePayload();
    const strings = payload.strings;

    if (platform === 'x') {
        const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(payload.x)}&url=${encodeURIComponent(payload.url)}`;
        openExternalShare(xUrl);
        closeShareModal();
        return;
    }

    if (platform === 'facebook') {
        const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(payload.url)}&quote=${encodeURIComponent(payload.facebook)}`;
        openExternalShare(fbUrl);
        closeShareModal();
        return;
    }

    if (platform === 'instagram') {
        try {
            await copyToClipboard(`${payload.instagram}\n${payload.url}`);
            setShareStatus(strings.shareInstagramCopied || 'Caption copied. Paste it on Instagram.');
        } catch (error) {
            console.error(error);
            setShareStatus('Copy failed. Please try again.');
        }
        openExternalShare('https://www.instagram.com/');
        return;
    }

    if (platform === 'copy') {
        try {
            await copyToClipboard(`${payload.instagram}\n${payload.url}`);
            setShareStatus(strings.shareCopied || 'Copied to clipboard!');
        } catch (error) {
            console.error(error);
            setShareStatus('Copy failed. Please try again.');
        }
    }
}

// ========== LANGUAGES ==========
function initLanguages() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            applyTranslations(lang);
        });
    });
}

function applyTranslations(lang) {
    state.language = lang;
    const strings = UI_STRINGS[lang];
    if (!strings) return;

    // Helper to safe update
    const updateText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
    };

    // Home Page
    updateText('hero-headline', strings.heroHeadline);
    updateText('hero-sub', strings.heroSub);
    updateText('start-quiz-btn', strings.startBtn);

    // Header & Quiz
    updateText('back-btn-text', strings.backBtn);
    updateText('quiz-next', strings.nextBtn);
    updateText('quiz-skip', strings.skipBtn);

    // Results
    updateText('results-title', strings.resultTitle);
    updateText('share-btn', strings.shareBtn);
    updateShareSheetTexts();

    // Update active state on all buttons
    document.querySelectorAll('.lang-btn').forEach(b => {
        b.classList.toggle('active', b.dataset.lang === lang);
    });

    console.log(`Language switched to: ${lang}`);

    // Re-render current content if needed
    if (state.currentPage === 'quiz') {
        renderQuizQuestion();
    } else if (state.currentPage === 'results') {
        renderResults(); // This re-renders match cards with new language
    } else if (state.currentPage === 'settings') {
        renderSettings();
    }
}

// ========== SHARE ==========
function initShare() {
    const shareBtn = document.getElementById('share-btn');
    const closeBtn = document.getElementById('share-close-btn');

    if (shareBtn) shareBtn.addEventListener('click', openShareModal);
    if (closeBtn) closeBtn.addEventListener('click', closeShareModal);

    document.querySelectorAll('[data-share-close]').forEach(el => {
        el.addEventListener('click', closeShareModal);
    });

    document.querySelectorAll('[data-share-platform]').forEach(btn => {
        btn.addEventListener('click', () => handleSharePlatform(btn.dataset.sharePlatform));
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') closeShareModal();
    });
}
window.shareResults = initShare; // Backwards compatibility just in case

