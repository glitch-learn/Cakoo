// ===== WHATSAPP =====
const WA_NUMBER = '923299927777';
function waLink(msg) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ===== FULL MENU DATA =====
const menuData = [
  {
    id: 'cakes-world',
    name: 'Cakes World',
    items: [
      { name: 'Lotus', price: 2590 },
      { name: 'Belgium Malt', price: 2480 },
      { name: 'Ferrero Rocher', price: 2480 },
      { name: 'Nutella', price: 2750 },
      { name: 'Red Velvet', price: 2150 },
      { name: 'Kit Kat', price: 2350 },
      { name: 'Fudge', price: 2350 },
      { name: 'Chocolate Mousse', price: 2350 },
      { name: 'NY Cheese Cake', price: 3800 },
      { name: 'Pine Apple', price: 2350 },
      { name: 'Black Forest', price: 2350 },
      { name: 'Cadbury', price: 2350 }
    ]
  },
  {
    id: 'dream-cakes',
    name: 'Dream Cakes',
    note: 'Available in Small (S), Medium (M), Large (L)',
    items: [
      { name: 'Dream Cake S', price: 690 },
      { name: 'Dream Cake M', price: 1250 },
      { name: 'Dream Cake L', price: 2480 }
    ]
  },
  {
    id: 'special-cakes',
    name: 'Cakoo Special Cakes',
    items: [
      { name: 'Pistachio', price: 2850 },
      { name: 'Mud Cake', price: 2350 },
      { name: 'Lava Cake', price: 2350, featured: 'Signature' },
      { name: 'Tiramisu', price: 2750 },
      { name: 'Salted Caramel', price: 2480 }
    ]
  },
  {
    id: 'donuts',
    name: 'Donuts',
    note: 'Rs 190 each',
    items: [
      { name: 'Chocolate', price: 190 },
      { name: 'Cotton Candy', price: 190 },
      { name: 'Ferrero Rocher', price: 190 },
      { name: 'Kit Kat', price: 190 },
      { name: 'Lotus', price: 190 },
      { name: 'Matt Chocolate', price: 190 },
      { name: 'Nutella', price: 190 },
      { name: 'Oreo', price: 190 },
      { name: 'Glazzy', price: 190 },
      { name: 'Strawberry', price: 190 }
    ]
  },
  {
    id: 'brownies',
    name: 'Brownies',
    note: 'Rs 230 each',
    items: [
      { name: 'Chocolate', price: 230 },
      { name: 'Nutella', price: 230 },
      { name: 'Fudge', price: 230 },
      { name: 'Belgian Malt', price: 230 },
      { name: 'Walnut', price: 230 },
      { name: 'Special', price: 230 },
      { name: 'Cadbury', price: 230 }
    ]
  },
  {
    id: 'other-bakes',
    name: 'Other Bakes',
    items: [
      { name: 'Macarons (pack of 6)', price: 350 },
      { name: 'Cookies', price: 250 },
      { name: 'Muffins', price: 290 },
      { name: 'Cup Cakes', price: 230 },
      { name: 'Banana Bread', price: 150 },
      { name: 'Carrot Bread', price: 150 }
    ]
  },
  {
    id: 'sundaes',
    name: 'Sundaes',
    note: 'Rs 370 each',
    items: [
      { name: 'Red Velvet Sundae', price: 370 },
      { name: 'Three Milk Sundae', price: 370 },
      { name: 'Nutella Sundae', price: 370 },
      { name: 'Lotus Sundae', price: 370 },
      { name: 'Pistachio Sundae', price: 370 }
    ]
  }
];

// ===== GALLERY IMAGES =====
const galleryImages = [
  'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&q=80',
  'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
  'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&q=80',
  'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80',
  'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400&q=80',
  'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
  'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
  'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80',
  'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80'
];

// ===== HERO PRODUCTS =====
const heroProducts = [
  { name: 'Lava Cake', price: 2350, badge: 'Signature', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=300&q=80' },
  { name: 'NY Cheese Cake', price: 3800, badge: 'Best Seller', image: 'https://images.unsplash.com/photo-1534352956036-cd81e27dd615?w=300&q=80' },
  { name: 'Blueberry Dream', price: 2480, badge: 'Sold Out in 1hr', image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&q=80' },
  { name: 'Pistachio', price: 2850, badge: 'Special', image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&q=80' }
];

// ===== LENIS =====
let lenis = null;

// ===== CUSTOM CURSOR =====
function initCursor() {
  const hasTouch = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (hasTouch || prefersReduced) return;

  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;

  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = mouseX + 'px';
    dot.style.top = mouseY + 'px';
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    ring.style.left = ringX + 'px';
    ring.style.top = ringY + 'px';
    requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverTargets = document.querySelectorAll('a, button, .product-card, .g-item, .choose-card, .filter-chip, .menu-item');
  hoverTargets.forEach(el => {
    el.addEventListener('mouseenter', () => ring.classList.add('hover'));
    el.addEventListener('mouseleave', () => ring.classList.remove('hover'));
  });
}

// ===== NAV =====
function initNav() {
  const nav = document.getElementById('stickyNav');
  if (!nav) return;
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 80), { passive: true });

  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
      });
    });
  }

  const page = document.body.dataset.page;
  if (page) {
    navLinks.querySelectorAll('a').forEach(a => {
      if (a.dataset.page === page) a.classList.add('active');
    });
  }
}

// ===== GLASS REVEAL OBSERVER =====
function initGlassReveals() {
  const els = document.querySelectorAll('.glass-reveal');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
  els.forEach(el => obs.observe(el));
}

// ===== MENU RENDER =====
function renderMenu(containerId, filter) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const cats = filter && filter !== 'all'
    ? menuData.filter(c => c.id === filter)
    : menuData;

  container.innerHTML = cats.map(cat => `
    <div class="menu-category glass-reveal stagger">
      <h3>${cat.name}</h3>
      ${cat.note ? `<p class="cat-sub">${cat.note}</p>` : ''}
      <div class="menu-items-grid">
        ${cat.items.map(item => `
          <div class="menu-item" data-name="${item.name}" data-price="Rs ${item.price.toLocaleString()}" data-cat="${cat.name}">
            <span class="item-name">${item.featured ? '★ ' : ''}${item.name}</span>
            <span class="item-price">Rs ${item.price.toLocaleString()}</span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  // tap menu items -> modal
  container.querySelectorAll('.menu-item').forEach(el => {
    el.addEventListener('click', () => {
      openModal({
        name: el.dataset.name,
        price: el.dataset.price,
        cat: el.dataset.cat,
        desc: `From our ${el.dataset.cat} selection. Order via WhatsApp for fastest service.`
      });
    });
  });

  initGlassReveals();
}

// ===== FILTERS =====
function initMenuFilters(containerId) {
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderMenu(containerId, chip.dataset.filter);
      // re-init lenis after DOM update
      if (lenis) setTimeout(() => lenis.destroy(), 50);
      setTimeout(() => initLenis(), 100);
    });
  });
}

// ===== CHOOSE ONE =====
function initChooseOne() {
  const pairs = document.querySelectorAll('.choose-one-pair');
  pairs.forEach(pair => {
    const cards = pair.querySelectorAll('.choose-card');
    let chosen = false;

    cards.forEach(card => {
      card.addEventListener('click', () => {
        if (chosen) return;
        chosen = true;
        card.classList.add('winner');
        const other = [...cards].find(c => c !== card);
        if (other) other.classList.add('loser');

        const cta = pair.parentElement.querySelector('.choose-cta');
        if (cta) {
          const name = card.dataset.name || 'this item';
          cta.querySelector('.choose-cta-text').textContent = `You picked ${name}!`;
          cta.querySelector('.choose-cta-link').href = waLink(`Hi Cakoo! I'd like to order: ${name}`);
          cta.classList.add('show');
        }
      });
    });
  });
}

// ===== MAGNETIC HOVER =====
function initMagnetic() {
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll('.hero-cta, .nav-cta, .magnetic').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const dist = Math.sqrt(x * x + y * y);
      const maxDist = 100;
      const strength = Math.min(dist, maxDist) / maxDist;
      const pullX = x * 0.15 * strength;
      const pullY = y * 0.15 * strength;
      btn.style.transform = `translate(${pullX}px, ${pullY}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
}

// ===== PAGE TRANSITIONS =====
function initPageTransitions() {
  document.querySelectorAll('a[data-transition]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#')) return;
      const wrap = document.querySelector('.page-transition');
      if (wrap) {
        wrap.classList.add('fade-out');
        setTimeout(() => { window.location.href = href; }, 350);
      } else {
        window.location.href = href;
      }
    });
  });
}

// ===== GALLERY =====
function renderGallery(gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  galleryImages.forEach((url, i) => {
    const div = document.createElement('div');
    div.className = 'g-item glass-reveal stagger';
    div.innerHTML = `<img src="${url}" alt="Cakoo creation" loading="lazy" />`;
    div.addEventListener('click', () => openLightbox(url));
    grid.appendChild(div);
  });
  initGlassReveals();
}

// ===== IG STRIP =====
function renderIGStrip(stripId) {
  const strip = document.getElementById(stripId);
  if (!strip) return;
  galleryImages.slice(0, 6).forEach(url => {
    const div = document.createElement('div');
    div.className = 'ig-post glass-reveal stagger';
    div.innerHTML = `<img src="${url}" alt="IG post" loading="lazy" />`;
    div.addEventListener('click', () => openLightbox(url));
    strip.appendChild(div);
  });
  initGlassReveals();
}

// ===== HERO PRODUCTS STRIP =====
function renderHeroProducts(gridId) {
  const grid = document.getElementById(gridId);
  if (!grid) return;
  grid.innerHTML = heroProducts.map(p => `
    <div class="hero-product-card glass-reveal stagger">
      ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
      <img src="${p.image}" alt="${p.name}" loading="lazy" />
      <h3>${p.name}</h3>
      <span class="price">Rs ${p.price.toLocaleString()}</span>
    </div>
  `).join('');
  initGlassReveals();
}

// ===== HERO PARALLAX =====
function initParallax() {
  const heroBg = document.getElementById('heroBg');
  if (!heroBg) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) heroBg.style.transform = `scale(1.08) translateY(${(y / window.innerHeight) * 20}px)`;
  }, { passive: true });
}

// ===== LENIS =====
function initLenis() {
  if (typeof Lenis === 'undefined') return;
  if (lenis) lenis.destroy();
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: 'vertical',
    smoothWheel: true,
  });
  lenis.on('scroll', () => {});
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}

// ===== MODAL =====
const modalOverlay = document.getElementById('productModal');
function openModal(product) {
  if (!modalOverlay) return;
  modalOverlay.querySelector('#modalImg').src = `https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400&q=80`;
  const tag = modalOverlay.querySelector('.modal-tag');
  tag.textContent = product.cat || 'Menu Item';
  tag.style.display = 'inline-block';
  modalOverlay.querySelector('h3').textContent = product.name;
  modalOverlay.querySelector('.modal-desc').textContent = product.desc || '';
  modalOverlay.querySelector('.modal-price').textContent = product.price;
  modalOverlay.querySelector('.modal-wa').href = waLink(`Hi Cakoo! I'd like to order: ${product.name}`);
  modalOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (lenis) lenis.stop();
}

function closeModal() {
  if (!modalOverlay) return;
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  if (lenis) lenis.start();
}

const modalClose = document.getElementById('modalClose');
if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ===== LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
function openLightbox(url) {
  if (!lightbox) return;
  lightboxImg.src = url;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  if (lenis) lenis.stop();
}
function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
  if (lenis) lenis.start();
}
const lightboxClose = document.getElementById('lightboxClose');
if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

// ===== RIPPLE =====
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.hero-cta, .filter-chip, .form-submit');
  if (!btn) return;
  const ripple = document.createElement('span');
  ripple.style.cssText = 'position:absolute;border-radius:50%;background:rgba(255,255,255,0.3);transform:scale(0);animation:ripple 0.6s ease-out;pointer-events:none;';
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
  ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
  btn.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);
});

// ===== ORDER FORM =====
function initOrderForm() {
  const form = document.getElementById('orderForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('formName').value.trim();
    const branch = document.getElementById('formBranch').value;
    const order = document.getElementById('formOrder').value.trim();
    if (!name || !order) return;
    const msg = `Hi Cakoo! My name is ${name}. I'd like to order from ${branch}: ${order}`;
    window.open(waLink(msg), '_blank');
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initParallax();
  initCursor();
  initGlassReveals();
  initMagnetic();
  initPageTransitions();

  renderIGStrip('igStrip');
  renderGallery('galleryGrid');
  renderHeroProducts('heroProductsGrid');

  const menuContainer = document.getElementById('menuContainer');
  if (menuContainer) {
    renderMenu('menuContainer', 'all');
    initMenuFilters('menuContainer');
    initChooseOne();
  }

  initOrderForm();
  initLenis();
});
