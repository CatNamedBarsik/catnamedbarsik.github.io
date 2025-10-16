(function () {
  const yearEl = document.getElementById('year');
  const btn = document.getElementById('magicBtn');
  const out = document.getElementById('output');

  // Year stamp
  yearEl.textContent = new Date().getFullYear();

  // Small interactive demo
  const phrases = [
    'JS жив — артефакт активирован.',
    'DNS-духи кивнули. Всё работает.',
    'ГитХаб дарует страницу. Продолжай.',
    'Мини-тест пройден. Добавь контент.',
  ];

  btn.addEventListener('click', () => {
    const i = Math.floor(Math.random() * phrases.length);
    out.textContent = '→ ' + phrases[i];
  });
})();
