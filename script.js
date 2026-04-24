/* ============================================================
   OUROBOROS OFFICE — Main Script
   ============================================================ */

// ── NAVBAR SCROLL ────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// ── HAMBURGER ────────────────────────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// ── REVEAL ON SCROLL ─────────────────────────────────────────
const revealEls = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
revealEls.forEach(el => revealObserver.observe(el));

// ── COUNTER ANIMATION ────────────────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const start = performance.now();
  const update = (now) => {
    const elapsed = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - elapsed, 3);
    el.textContent = Math.round(ease * target);
    if (elapsed < 1) requestAnimationFrame(update);
    else el.textContent = target;
  };
  requestAnimationFrame(update);
}
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num').forEach(animateCounter);
      statObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
const heroStats = document.querySelector('.hero-stats');
if (heroStats) statObserver.observe(heroStats);

// ── PRICING TOGGLE ───────────────────────────────────────────
const pricingToggle      = document.getElementById('pricingToggle');
const constructionPlans  = document.getElementById('constructionPlans');
const maintenancePlans   = document.getElementById('maintenancePlans');
const labelOne           = document.getElementById('labelOne');
const labelTwo           = document.getElementById('labelTwo');

let showingMaintenance = false;
pricingToggle.addEventListener('click', () => {
  showingMaintenance = !showingMaintenance;
  pricingToggle.classList.toggle('on', showingMaintenance);
  pricingToggle.setAttribute('aria-checked', showingMaintenance);
  labelOne.classList.toggle('active', !showingMaintenance);
  labelTwo.classList.toggle('active', showingMaintenance);

  if (showingMaintenance) {
    constructionPlans.classList.add('hidden');
    maintenancePlans.classList.remove('hidden');
    maintenancePlans.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('visible');
      setTimeout(() => el.classList.add('visible'), 50);
    });
  } else {
    maintenancePlans.classList.add('hidden');
    constructionPlans.classList.remove('hidden');
    constructionPlans.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('visible');
      setTimeout(() => el.classList.add('visible'), 50);
    });
  }
});

// ── CONTACT FORM ─────────────────────────────────────────────
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector('button[type="submit"]');
  const original = btn.innerHTML;
  btn.innerHTML = '✓ Εστάλη! Θα επικοινωνήσουμε σύντομα.';
  btn.style.background = 'linear-gradient(135deg, #059669, #10B981)';
  btn.disabled = true;
  setTimeout(() => {
    btn.innerHTML = original;
    btn.style.background = '';
    btn.disabled = false;
    contactForm.reset();
  }, 4000);
});

// ── PARTICLE CANVAS ──────────────────────────────────────────
const canvas = document.getElementById('particles');
const ctx    = canvas.getContext('2d');
let W, H, particles = [];

function resize() {
  W = canvas.width  = canvas.offsetWidth;
  H = canvas.height = canvas.offsetHeight;
}

function Particle() {
  this.reset = function() {
    this.x  = Math.random() * W;
    this.y  = Math.random() * H;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.r  = Math.random() * 1.5 + 0.5;
    this.a  = Math.random() * 0.5 + 0.1;
  };
  this.reset();
}

function initParticles(n) {
  particles = [];
  for (let i = 0; i < n; i++) particles.push(new Particle());
}

function drawParticles() {
  ctx.clearRect(0, 0, W, H);
  particles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) p.reset();

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(124, 58, 237, ${p.a})`;
    ctx.fill();
  });

  // draw connecting lines for nearby particles
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(124, 58, 237, ${0.06 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawParticles);
}

resize();
initParticles(60);
drawParticles();
window.addEventListener('resize', () => {
  resize();
  initParticles(60);
}, { passive: true });

// ── SMOOTH ACTIVE NAV ────────────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-links a[href^="#"]');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAs.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObserver.observe(s));
