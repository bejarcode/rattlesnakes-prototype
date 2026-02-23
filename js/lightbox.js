/* ============================================
   lightbox.js — Rattlesnakes & Rainbows Prototype
   Full-screen image gallery lightbox
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  const imgEl = lightbox.querySelector('.lightbox-img');
  const counter = lightbox.querySelector('.lightbox-counter');
  const title = lightbox.querySelector('.lightbox-title');
  const prevBtn = lightbox.querySelector('.lightbox-prev');
  const nextBtn = lightbox.querySelector('.lightbox-next');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  let images = [];
  let current = 0;
  let triggerEl = null;

  function show(index) {
    current = index;
    imgEl.src = images[current];
    counter.textContent = (current + 1) + ' / ' + images.length;
    prevBtn.style.display = images.length > 1 ? '' : 'none';
    nextBtn.style.display = images.length > 1 ? '' : 'none';
  }

  function open(galleryImages, startIndex, galleryTitle, trigger) {
    images = galleryImages;
    triggerEl = trigger || null;
    title.textContent = galleryTitle || '';
    show(startIndex || 0);
    lightbox.classList.add('open');
    lightbox.removeAttribute('aria-hidden');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function close() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    imgEl.src = '';
    if (triggerEl) {
      triggerEl.focus();
      triggerEl = null;
    }
  }

  function next() {
    if (images.length > 1) show((current + 1) % images.length);
  }

  function prev() {
    if (images.length > 1) show((current - 1 + images.length) % images.length);
  }

  closeBtn.addEventListener('click', close);
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);

  // Close on backdrop click
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
      close();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') next();
    if (e.key === 'ArrowLeft') prev();
  });

  // Touch swipe support
  let touchStartX = 0;
  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });
  lightbox.addEventListener('touchend', (e) => {
    const diff = e.changedTouches[0].screenX - touchStartX;
    if (Math.abs(diff) > 50) {
      if (diff < 0) next();
      else prev();
    }
  }, { passive: true });

  // Wire up mural project cards
  document.querySelectorAll('.mural-project[data-images]').forEach(card => {
    card.style.cursor = 'pointer';
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');

    const galleryImages = JSON.parse(card.dataset.images);
    const galleryTitle = card.querySelector('.mural-project-info h2')?.textContent || '';

    card.addEventListener('click', () => {
      open(galleryImages, 0, galleryTitle, card);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open(galleryImages, 0, galleryTitle, card);
      }
    });
  });
});
