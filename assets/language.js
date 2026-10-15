(function () {
  const buttons = Array.from(document.querySelectorAll('[data-language]'));

  function setLanguage(language) {
    document.documentElement.lang = language;

    document.querySelectorAll('[data-tr][data-en]').forEach(function (element) {
      element.textContent = element.dataset[language];
    });

    document.querySelectorAll('[data-alt-tr][data-alt-en]').forEach(function (element) {
      element.alt = language === 'tr' ? element.dataset.altTr : element.dataset.altEn;
    });

    document.querySelectorAll('[data-aria-tr][data-aria-en]').forEach(function (element) {
      element.setAttribute('aria-label', language === 'tr' ? element.dataset.ariaTr : element.dataset.ariaEn);
    });

    document.querySelectorAll('[data-href-tr][data-href-en]').forEach(function (element) {
      element.href = language === 'tr' ? element.dataset.hrefTr : element.dataset.hrefEn;
    });

    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });

    const title = document.querySelector('title');
    if (title && title.dataset[language]) {
      title.textContent = title.dataset[language];
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      setLanguage(button.dataset.language);
    });
  });

  setLanguage('tr');
}());
