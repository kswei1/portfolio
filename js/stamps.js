(() => {
  const playground = document.getElementById('stamp-playground');
  if (!playground) return;

  const items = Array.from(playground.querySelectorAll('.stamp-item'));
  if (!items.length) return;

  let zTop = 10;
  let active = null;
  let moved = false;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const buildTooltip = (item) => {
    let tip = item.querySelector('.stamp__tooltip');
    if (!tip) {
      tip = document.createElement('span');
      tip.className = 'stamp__tooltip';
      tip.setAttribute('role', 'tooltip');
      item.appendChild(tip);
    }

    const line = [item.dataset.place, item.dataset.name, item.dataset.note]
      .map((part) => (part || '').trim())
      .filter(Boolean)
      .join(' · ');

    tip.textContent = line;

    const button = item.querySelector('.stamp');
    if (button) button.setAttribute('aria-label', line || 'Photo stamp');
    return tip;
  };

  const placeItem = (item) => {
    const bounds = playground.getBoundingClientRect();
    let xPct = Number(item.dataset.x ?? 50);
    const yPct = Number(item.dataset.y ?? 50);
    const rot = Number(item.dataset.rot ?? 0);

    // On narrow screens, keep stamps in the right gutter so copy stays readable
    if (bounds.width < 560) {
      xPct = 78 + (xPct % 20) * 0.7;
    }

    const maxX = Math.max(0, bounds.width - item.offsetWidth);
    const maxY = Math.max(0, bounds.height - item.offsetHeight);
    const x = clamp((xPct / 100) * bounds.width - item.offsetWidth / 2, 0, maxX);
    const y = clamp((yPct / 100) * bounds.height - item.offsetHeight / 2, 0, maxY);

    item.style.setProperty('--rot', `${rot}deg`);
    item.style.setProperty('--tx', `${x}px`);
    item.style.setProperty('--ty', `${y}px`);
    item.dataset.tx = String(x);
    item.dataset.ty = String(y);
  };

  const flipTooltipIfNeeded = (item) => {
    const tip = item.querySelector('.stamp__tooltip');
    if (!tip) return;
    tip.classList.remove('is-below');
    const tipRect = tip.getBoundingClientRect();
    const playRect = playground.getBoundingClientRect();
    if (tipRect.top < playRect.top + 8) {
      tip.classList.add('is-below');
    }
  };

  const closeAllTips = (except = null) => {
    items.forEach((item) => {
      if (item !== except) item.classList.remove('is-tip-open');
    });
  };

  items.forEach((item) => {
    buildTooltip(item);
    placeItem(item);

    const button = item.querySelector('.stamp');

    const showTip = () => {
      if (item.classList.contains('is-dragging')) return;
      closeAllTips(item);
      item.classList.add('is-tip-open');
      zTop += 1;
      item.style.zIndex = String(zTop);
      flipTooltipIfNeeded(item);
    };

    const hideTip = () => {
      if (document.activeElement && item.contains(document.activeElement)) return;
      item.classList.remove('is-tip-open');
    };

    item.addEventListener('pointerenter', showTip);
    item.addEventListener('pointerleave', hideTip);

    if (button) {
      button.addEventListener('focus', showTip);
      button.addEventListener('blur', () => {
        // Delay so moving focus within the item doesn't flash the tip off
        window.setTimeout(hideTip, 0);
      });
    }

    item.addEventListener('pointerdown', (event) => {
      if (event.button !== undefined && event.button !== 0) return;

      const tx = Number(item.dataset.tx || 0);
      const ty = Number(item.dataset.ty || 0);
      zTop += 1;
      item.style.zIndex = String(zTop);
      item.classList.add('is-dragging');
      item.classList.remove('is-tip-open');
      item.setPointerCapture(event.pointerId);

      active = {
        item,
        pointerId: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        originX: tx,
        originY: ty,
      };
      moved = false;
      event.preventDefault();
    });
  });

  const onPointerMove = (event) => {
    if (!active || event.pointerId !== active.pointerId) return;

    const { item, startX, startY, originX, originY } = active;
    const dx = event.clientX - startX;
    const dy = event.clientY - startY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) moved = true;

    const bounds = playground.getBoundingClientRect();
    const maxX = Math.max(0, bounds.width - item.offsetWidth);
    const maxY = Math.max(0, bounds.height - item.offsetHeight);
    const nextX = clamp(originX + dx, 0, maxX);
    const nextY = clamp(originY + dy, 0, maxY);

    item.style.setProperty('--tx', `${nextX}px`);
    item.style.setProperty('--ty', `${nextY}px`);
    item.dataset.tx = String(nextX);
    item.dataset.ty = String(nextY);
  };

  const onPointerUp = (event) => {
    if (!active || event.pointerId !== active.pointerId) return;

    const { item } = active;
    item.classList.remove('is-dragging');
    try {
      item.releasePointerCapture(event.pointerId);
    } catch (_) {
      /* already released */
    }

    // Touch: tap without drag toggles tooltip
    if (!moved && event.pointerType === 'touch') {
      const open = item.classList.toggle('is-tip-open');
      if (open) {
        closeAllTips(item);
        flipTooltipIfNeeded(item);
      }
    }

    active = null;
  };

  window.addEventListener('pointermove', onPointerMove);
  window.addEventListener('pointerup', onPointerUp);
  window.addEventListener('pointercancel', onPointerUp);

  let resizeTimer = 0;
  let lastNarrow = playground.getBoundingClientRect().width < 560;
  window.addEventListener('resize', () => {
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(() => {
      const bounds = playground.getBoundingClientRect();
      const narrow = bounds.width < 560;
      if (narrow !== lastNarrow) {
        lastNarrow = narrow;
        items.forEach(placeItem);
        return;
      }
      items.forEach((item) => {
        const maxX = Math.max(0, bounds.width - item.offsetWidth);
        const maxY = Math.max(0, bounds.height - item.offsetHeight);
        const tx = clamp(Number(item.dataset.tx || 0), 0, maxX);
        const ty = clamp(Number(item.dataset.ty || 0), 0, maxY);
        item.style.setProperty('--tx', `${tx}px`);
        item.style.setProperty('--ty', `${ty}px`);
        item.dataset.tx = String(tx);
        item.dataset.ty = String(ty);
      });
    }, 100);
  });
})();
