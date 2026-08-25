(function () {
    const SUPPORTED_LANGS = {
        "ko": "한국어",
        "en": "English",
        "ja": "日本語",
        "de": "Deutsch",
        "es": "Español",
        "fr": "Français",
        "pt": "Português",
        "zh-CN": "简体中文",
        "zh-TW": "繁體中文"
    };

    function detectUserLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const langParam = urlParams.get('lang');
        if (langParam && SUPPORTED_LANGS[langParam]) {
            localStorage.setItem('nemo_lang', langParam);
            return langParam;
        }

        const savedLang = localStorage.getItem('nemo_lang');
        if (savedLang && SUPPORTED_LANGS[savedLang]) {
            return savedLang;
        }

        const userLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
        if (userLang.startsWith('ko')) return 'ko';
        if (userLang.startsWith('ja')) return 'ja';
        if (userLang.startsWith('de')) return 'de';
        if (userLang.startsWith('es')) return 'es';
        if (userLang.startsWith('fr')) return 'fr';
        if (userLang.startsWith('pt')) return 'pt';
        if (userLang === 'zh-tw' || userLang === 'zh-hk' || userLang === 'zh-mo') return 'zh-TW';
        if (userLang.startsWith('zh')) return 'zh-CN';

        return 'ko'; // Default fallback
    }

    let currentLang = detectUserLanguage();

    function setLanguage(lang) {
        if (!SUPPORTED_LANGS[lang]) return;
        currentLang = lang;
        localStorage.setItem('nemo_lang', lang);
        document.documentElement.lang = lang;

        updateDOM();
        updateSelectorUI();
        preserveLangInLinks();
    }

    function updateDOM() {
        const dict = window.translations ? window.translations[currentLang] : null;
        if (!dict) return;

        if (document.body) {
            const pageTitleKey = document.body.getAttribute('data-i18n-page-title');
            if (pageTitleKey && dict[pageTitleKey]) {
                document.title = dict[pageTitleKey];
            }
        }

        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                if (dict[key].includes('<br>') || dict[key].includes('<span>')) {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });
    }

    function updateSelectorUI() {
        const selectors = document.querySelectorAll('.lang-select');
        selectors.forEach(select => {
            select.value = currentLang;
        });
    }

    function preserveLangInLinks() {
        // Automatically append ?lang=currentLang to internal links
        const links = document.querySelectorAll('a[href]');
        links.forEach(a => {
            const href = a.getAttribute('href');
            if (href && !href.startsWith('http') && !href.startsWith('#') && !href.startsWith('mailto')) {
                try {
                    const url = new URL(href, window.location.href);
                    url.searchParams.set('lang', currentLang);
                    const relativePath = url.pathname + url.search;
                    a.setAttribute('href', relativePath);
                } catch (e) {}
            }
        });
    }

    function createLangSelectorHTML() {
        let optionsHTML = '';
        for (const [code, label] of Object.entries(SUPPORTED_LANGS)) {
            optionsHTML += `<option value="${code}">${label}</option>`;
        }

        return `
            <div class="lang-switcher">
                <span class="globe-icon" aria-hidden="true">🌐</span>
                <select class="lang-select" aria-label="Select Language">
                    ${optionsHTML}
                </select>
            </div>
        `;
    }

    function initLanguageSwitcherUI() {
        const headerInners = document.querySelectorAll('.header-inner');
        headerInners.forEach(headerInner => {
            if (!headerInner.querySelector('.lang-switcher')) {
                const nav = headerInner.querySelector('.nav');
                const switcherWrapper = document.createElement('div');
                switcherWrapper.innerHTML = createLangSelectorHTML();
                
                if (nav) {
                    nav.appendChild(switcherWrapper.firstElementChild);
                } else {
                    headerInner.appendChild(switcherWrapper.firstElementChild);
                }
            }
        });

        document.addEventListener('change', function (e) {
            if (e.target && e.target.classList.contains('lang-select')) {
                setLanguage(e.target.value);
            }
        });

        updateSelectorUI();
    }

    function init() {
        initLanguageSwitcherUI();
        setLanguage(currentLang);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    window.i18nManager = {
        setLanguage: setLanguage,
        getCurrentLang: () => currentLang
    };
})();
