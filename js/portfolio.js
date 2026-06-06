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

// ── Rotating hero statements ──
document.addEventListener('DOMContentLoaded', () => {
  const phrases = document.querySelectorAll('.hero__phrase');
  if (phrases.length > 1) {
    const HOLD = 3000;   // time each phrase stays fully visible
    let current = 0;

    const advance = () => {
      const next = (current + 1) % phrases.length;

      // current flips out, next flips in
      phrases[current].classList.remove('is-active');
      phrases[current].classList.add('is-exiting');
      phrases[next].classList.add('is-active');

      // clear the exiting state once it has flipped away
      const prev = current;
      setTimeout(() => phrases[prev].classList.remove('is-exiting'), 600);

      current = next;
    };

    setInterval(advance, HOLD);
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
