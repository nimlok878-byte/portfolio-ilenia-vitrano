/* ILENIA VITRANO — animations.js */
document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.split-text').forEach(el => {
    const text = el.textContent;
    el.textContent = ''; el.setAttribute('aria-label', text);
    [...text].forEach((ch, i) => {
      const s = document.createElement('span');
      s.className = 'char'; s.textContent = ch === ' ' ? '\u00A0' : ch;
      s.style.transitionDelay = i * 0.026 + 's'; el.appendChild(s);
    });
    new IntersectionObserver(([e], obs) => {
      if (e.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); }
    }, { threshold: 0.25 }).observe(el);
  });

  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect();
      el.style.transform = `translate(${(e.clientX-r.left-r.width/2)*0.28}px,${(e.clientY-r.top-r.height/2)*0.28}px)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = ''; });
  });

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width - 0.5, y = (e.clientY-r.top)/r.height - 0.5;
      card.style.transform = `translateY(-5px) rotateX(${-y*2.5}deg) rotateY(${x*2.5}deg)`;
      card.style.transition = 'transform 0.06s ease';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = ''; card.style.transition = 'transform 0.45s cubic-bezier(0.16,1,0.3,1)';
    });
  });

  const overlay = document.createElement('div');
  overlay.id = 'page-transition'; document.body.appendChild(overlay);
  document.querySelectorAll('a[href]:not([href^="#"]):not([target="_blank"])').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (!href || href.startsWith('mailto:') || href.startsWith('tel:')) return;
      e.preventDefault(); overlay.style.opacity = '1';
      setTimeout(() => { window.location.href = href; }, 400);
    });
  });
  window.addEventListener('load', () => { overlay.style.opacity = '0'; });

});
