const SESSION_KEY = 'ks_auth';

// ── Auth guard ──
if (sessionStorage.getItem(SESSION_KEY) !== 'true') {
  window.location.replace('./index.html');
}

// ── Nav scroll state ──
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 16);
}, { passive: true });

// ── Eyebrow animation on load ──
document.addEventListener('DOMContentLoaded', () => {
  const eyebrow = document.querySelector('.hero__eyebrow');
  if (eyebrow) {
    requestAnimationFrame(() => eyebrow.classList.add('animate-in'));
  }

  // Autoplay videos when in viewport
  const videos = document.querySelectorAll('.card__media video');
  if (!videos.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        target.play().catch(() => {});
      } else {
        target.pause();
      }
    });
  }, { threshold: 0.25 });

  videos.forEach(v => {
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    observer.observe(v);
  });
});
