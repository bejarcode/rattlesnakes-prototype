/* ============================================
   size-selector.js — Rattlesnakes & Rainbows Prototype
   Product page size toggle + price update
   Reads pricing from data-prices attribute on .size-selector
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const selector = document.querySelector('.size-selector');
  const sizeButtons = document.querySelectorAll('.size-option');
  const priceEl = document.querySelector('.detail-price');

  // Read prices from data attribute, fallback to defaults
  let prices = { '8x10': '$34.00', '11x14': '$58.00', '18x24': '$95.00' };
  if (selector && selector.dataset.prices) {
    try {
      prices = JSON.parse(selector.dataset.prices);
    } catch (e) {
      // Use defaults
    }
  }

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
        priceEl.textContent = prices[size] || Object.values(prices)[0] || '$34.00';
      }
    });
  });
});
