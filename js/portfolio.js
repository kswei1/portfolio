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
  const scenes = document.querySelectorAll('.hero__scene');
  if (phrases.length > 1) {
    const HOLD = 3000;   // time each phrase stays fully visible
    let current = 0;

    const advance = () => {
      const next = (current + 1) % phrases.length;

      // current flips out, next flips in
      phrases[current].classList.remove('is-active');
      phrases[current].classList.add('is-exiting');
      phrases[next].classList.add('is-active');

      // swap the matching visual scene in sync
      if (scenes.length) {
        scenes[current]?.classList.remove('is-active');
        scenes[next]?.classList.add('is-active');
      }

      // clear the exiting state once it has flipped away
      const prev = current;
      setTimeout(() => phrases[prev].classList.remove('is-exiting'), 600);

      current = next;
    };

    setInterval(advance, HOLD);
  }

  // Autoplay videos when in viewport
  const videos = document.querySelectorAll('.card__media video');
  if (videos.length) {
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
  }

  // Coming Soon cursor pill
  const comingSoonCard = document.querySelector('.card--coming-soon');
  if (comingSoonCard) {
    const pill = comingSoonCard.querySelector('.card__coming-soon-cursor');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const OFFSET = 12;

    const positionPill = (clientX, clientY) => {
      if (!pill) return;
      if (reducedMotion) {
        const rect = comingSoonCard.getBoundingClientRect();
        pill.style.left = `${rect.left + rect.width / 2}px`;
        pill.style.top = `${rect.top + rect.height / 2}px`;
        pill.style.transform = 'translate(-50%, -50%)';
        return;
      }
      pill.style.transform = '';
      pill.style.left = `${clientX + OFFSET}px`;
      pill.style.top = `${clientY + OFFSET}px`;
    };

    comingSoonCard.addEventListener('mouseenter', (e) => {
      comingSoonCard.classList.add('is-hovering');
      positionPill(e.clientX, e.clientY);
    });

    comingSoonCard.addEventListener('mousemove', (e) => {
      positionPill(e.clientX, e.clientY);
    });

    comingSoonCard.addEventListener('mouseleave', () => {
      comingSoonCard.classList.remove('is-hovering');
    });

    comingSoonCard.addEventListener('click', (e) => {
      e.preventDefault();
    });
  }

  // Work grid filter tabs
  const workTabs = document.querySelectorAll('.work-tabs__tab');
  const workGrid = document.getElementById('work-grid');

  if (workTabs.length && workGrid) {
    const cards = workGrid.querySelectorAll('[data-categories]');

    const filterCards = (filter) => {
      cards.forEach((card) => {
        const cats = card.dataset.categories ? card.dataset.categories.split(' ') : [];
        const show = filter === 'all' || cats.includes(filter);
        card.hidden = !show;
      });
    };

    const selectTab = (tab) => {
      workTabs.forEach((t) => {
        const selected = t === tab;
        t.setAttribute('aria-selected', String(selected));
        t.tabIndex = selected ? 0 : -1;
      });
      workGrid.setAttribute('aria-labelledby', tab.id);
      filterCards(tab.dataset.filter || 'all');
    };

    workTabs.forEach((tab) => {
      tab.addEventListener('click', () => selectTab(tab));

      tab.addEventListener('keydown', (e) => {
        const tabs = [...workTabs];
        const index = tabs.indexOf(tab);
        let next = null;

        if (e.key === 'ArrowRight') next = tabs[(index + 1) % tabs.length];
        if (e.key === 'ArrowLeft') next = tabs[(index - 1 + tabs.length) % tabs.length];
        if (e.key === 'Home') next = tabs[0];
        if (e.key === 'End') next = tabs[tabs.length - 1];

        if (next) {
          e.preventDefault();
          selectTab(next);
          next.focus();
        }
      });
    });
  }
});
