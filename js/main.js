/* ═══════════════════════════════════════════════════
   ILENIA VITRANO — main.js
   Cursor · Reveal · Skill Bars · Counter · Nav
   ═══════════════════════════════════════════════════ */

document.addEventListener('DOMContentLoaded', () => {

  const loader = document.createElement('div');
  loader.className = 'page-loader';
  document.body.prepend(loader);
  setTimeout(() => loader.remove(), 1500);

  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  let hovered = false;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    // dot segue istantaneamente
    cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px) scale(${hovered ? 2.2 : 1})`;
  });

  // anello più veloce: lerp 0.28 invece di 0.1
  (function animRing() {
    rx += (mx - rx) * 0.28;
    ry += (my - ry) * 0.28;
    ring.style.transform = `translate(${rx - 18}px, ${ry - 18}px)`;
    requestAnimationFrame(animRing);
  })();

  document.querySelectorAll('a, button, .tool-tag, .service-item, .experience-row, .cert-card').forEach(el => {
    el.addEventListener('mouseenter', () => {
      hovered = true;
      cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px) scale(2.2)`;
      ring.style.opacity = '0';
    });
    el.addEventListener('mouseleave', () => {
      hovered = false;
      cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px) scale(1)`;
      ring.style.opacity = '0.45';
    });
  });

  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting)
        setTimeout(() => entry.target.classList.add('visible'), i * 75);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -55px 0px' });
  document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

  const barObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting)
        entry.target.querySelectorAll('.skill-bar').forEach(bar => {
          bar.style.transform = `scaleX(${+bar.dataset.width / 100})`;
        });
    });
  }, { threshold: 0.25 });
  document.querySelectorAll('.skills-grid').forEach(el => barObs.observe(el));

  function animCount(el, target, duration = 1800) {
    let start = null;
    requestAnimationFrame(function step(ts) {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      el.textContent = Math.floor(p * target);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target;
    });
  }
  const counterObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const t = parseInt(entry.target.dataset.count);
        if (!isNaN(t)) { animCount(entry.target, t); counterObs.unobserve(entry.target); }
      }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));

  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });
  }

  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
    });
  });

  const heroRight = document.querySelector('.hero-right');
  if (heroRight) {
    window.addEventListener('scroll', () => {
      if (window.scrollY < window.innerHeight)
        heroRight.style.transform = `translateY(${window.scrollY * 0.11}px)`;
    }, { passive: true });
  }

});
