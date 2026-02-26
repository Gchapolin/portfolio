/**
 * RPG-style typewriter text effect (language-aware)
 */
(function () {
  var TARGET_ID = 'typewriter-target';
  var TEXTS = {
    rpg: {
      en: 'Product Manager | AI Solutions',
      pt: 'Gerente de Produto | Solu\u00E7\u00F5es em IA'
    },
    pro: {
      en: 'Product Manager | AI Solutions',
      pt: 'Gerente de Produto | Solu\u00E7\u00F5es em IA'
    }
  };
  var SPEED = 80;
  var CURSOR_BLINK = 530;

  var target;
  var charIndex = 0;
  var cursorVisible = true;
  var cursorInterval;
  var typeTimeout;
  var currentText = '';

  function getLang() {
    return (window.getCurrentLang && window.getCurrentLang()) || 'en';
  }

  function getTheme() {
    return (document.body && document.body.dataset.theme) || 'rpg';
  }

  function getText() {
    var lang = getLang();
    var theme = getTheme();
    var themeTexts = TEXTS[theme] || TEXTS.rpg;
    return themeTexts[lang] || themeTexts.en;
  }

  function init() {
    target = document.getElementById(TARGET_ID);
    if (!target) return;

    currentText = getText();

    if (document.body.dataset.theme === 'pro') {
      showInstant();
      return;
    }

    target.textContent = '';
    target.setAttribute('aria-label', currentText);
    typeTimeout = setTimeout(type, 600);
  }

  function showInstant() {
    cleanup();
    currentText = getText();
    charIndex = currentText.length;
    target.textContent = currentText;

    var staticEl = document.querySelector('.hero__subtitle-static');
    if (staticEl) {
      staticEl.style.display = 'none';
    }
  }

  function type() {
    if (charIndex < currentText.length) {
      target.textContent = currentText.slice(0, charIndex + 1) + '\u25AE';
      charIndex++;
      typeTimeout = setTimeout(type, SPEED + Math.random() * 40);
    } else {
      target.textContent = currentText + '\u25AE';
      cursorInterval = setInterval(function () {
        cursorVisible = !cursorVisible;
        target.textContent = currentText + (cursorVisible ? '\u25AE' : '');
      }, CURSOR_BLINK);

      var staticEl = document.querySelector('.hero__subtitle-static');
      if (staticEl) {
        staticEl.style.display = 'none';
      }
    }
  }

  function cleanup() {
    if (cursorInterval) {
      clearInterval(cursorInterval);
      cursorInterval = null;
    }
    if (typeTimeout) {
      clearTimeout(typeTimeout);
      typeTimeout = null;
    }
    charIndex = 0;
    cursorVisible = true;
  }

  window.addEventListener('beforeunload', function () {
    cleanup();
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  window.typewriterControl = {
    reset: function () {
      cleanup();
      if (!target) target = document.getElementById(TARGET_ID);
      if (!target) return;

      currentText = getText();

      if (document.body.dataset.theme === 'pro') {
        showInstant();
      } else {
        target.textContent = '';
        target.setAttribute('aria-label', currentText);
        typeTimeout = setTimeout(type, 300);
      }
    }
  };
})();
