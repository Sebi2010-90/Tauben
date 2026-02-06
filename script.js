// Einfaches Lightbox-Verhalten für die Galerie
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('galleryGrid');
  const lightbox = document.getElementById('lightbox');
  const lbImg = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  const lbClose = document.getElementById('lbClose');

  if (gallery) {
    gallery.addEventListener('click', (e) => {
      const img = e.target.closest('img');
      if (!img) return;
      const src = img.dataset.full || img.src;
      lbImg.src = src;
      lbImg.alt = img.alt || '';
      lbCaption.textContent = img.nextElementSibling ? img.nextElementSibling.textContent : img.alt || '';
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden', 'false');
    });
  }

  lbClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
  });

  // Schließen mit Escape-Taste
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      lightbox.style.display = 'none';
      lightbox.setAttribute('aria-hidden', 'true');
      lbImg.src = '';
    }
  });
});
