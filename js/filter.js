/* ============================================
   filter.js — Rattlesnakes & Rainbows Prototype
   Shop category filtering
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const filterBar = document.querySelector('.shop-filter-bar');
  if (!filterBar) return;

  // Category filter buttons
  const categoryButtons = filterBar.querySelectorAll('button[data-filter]');
  const cards = document.querySelectorAll('.shop-grid .tarot-card');

  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => b.classList.remove('active-filter'));
      btn.classList.add('active-filter');

      const category = btn.dataset.filter || 'all';
      cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
