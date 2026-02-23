/* ============================================
   size-selector.js — Rattlesnakes & Rainbows Prototype
   Product page size toggle + price update
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const sizeButtons = document.querySelectorAll('.size-option');
  const priceEl = document.querySelector('.detail-price');

  const prices = {
    '8x10': '$34.00',
    '11x14': '$58.00',
    '18x24': '$98.00'
  };

  sizeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      sizeButtons.forEach(b => {
        b.classList.remove('selected');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('selected');
      btn.setAttribute('aria-pressed', 'true');
      if (priceEl) {
        const size = btn.dataset.size || btn.textContent.trim();
        priceEl.textContent = prices[size] || 'from $34.00';
      }
    });
  });
});
