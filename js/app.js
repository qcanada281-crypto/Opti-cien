import { translations } from './data/i18n.js';
import { featuredProducts } from './data/products.js';
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderTrustStrip } from './components/TrustStrip.js';
import { renderFeaturedCollection } from './components/FeaturedCollection.js';
import { renderDigitalEyeCare } from './components/DigitalEyeCare.js';
import { renderBrandStory } from './components/BrandStory.js';
import { renderFinalCTA } from './components/FinalCTA.js';
import { renderFooter } from './components/Footer.js';
import { renderModals } from './components/Modals.js';
import { initOfflineManager, queueOfflineAction } from './offline-manager.js';

// Application State
const state = {
  currentLang: localStorage.getItem('optilook_lang') || 'fr',
  cart: JSON.parse(localStorage.getItem('optilook_cart') || '[]'),
  activeSwatches: {}
};

// Initial Render
function initApp() {
  const t = translations[state.currentLang] || translations.fr;
  
  // Set document direction for Arabic RTL support
  document.documentElement.dir = t.dir;
  document.documentElement.lang = state.currentLang;

  const appRoot = document.getElementById('app');
  if (!appRoot) return;

  const totalCartCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);

  // Render Full Page Layout
  appRoot.innerHTML = `
    ${renderNavbar(t, state.currentLang, totalCartCount)}
    <main>
      ${renderHero(t)}
      ${renderTrustStrip(t)}
      ${renderFeaturedCollection(t, state.currentLang)}
      ${renderDigitalEyeCare(t)}
      ${renderBrandStory(t)}
      ${renderFinalCTA(t)}
    </main>
    ${renderFooter(t, state.currentLang)}
    ${renderModals(t)}
  `;

  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Bind all interactive events
  bindEvents();
  initScrollAndParallaxAnimations();
  updateCartUI();
  initOfflineManager();
}

// Event Bindings
function bindEvents() {
  // 1. Language Dropdown Toggle
  const langBtn = document.getElementById('lang-menu-btn');
  const langDropdown = document.getElementById('lang-dropdown');
  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('hidden');
    });

    document.addEventListener('click', () => {
      langDropdown.classList.add('hidden');
    });

    langDropdown.querySelectorAll('[data-lang]').forEach(button => {
      button.addEventListener('click', (e) => {
        const lang = e.currentTarget.getAttribute('data-lang');
        if (lang && translations[lang]) {
          state.currentLang = lang;
          localStorage.setItem('optilook_lang', lang);
          initApp();
        }
      });
    });
  }

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-menu-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      mobileDrawer.classList.toggle('hidden');
    });
  }

  // 3. Cart Drawer Toggle
  const cartBtn = document.getElementById('cart-toggle-btn');
  const closeCartBtn = document.getElementById('close-cart-btn');
  const cartOverlay = document.getElementById('cart-drawer-overlay');
  const cartDrawer = document.getElementById('cart-drawer');

  const openCart = () => {
    if (cartOverlay && cartDrawer) {
      cartOverlay.classList.remove('hidden');
      setTimeout(() => {
        cartDrawer.classList.remove('translate-x-full');
      }, 10);
    }
  };

  const closeCart = () => {
    if (cartOverlay && cartDrawer) {
      cartDrawer.classList.add('translate-x-full');
      setTimeout(() => {
        cartOverlay.classList.add('hidden');
      }, 300);
    }
  };

  if (cartBtn) cartBtn.addEventListener('click', openCart);
  if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
  if (cartOverlay) {
    cartOverlay.addEventListener('click', (e) => {
      if (e.target === cartOverlay) closeCart();
    });
  }

  // 4. Add to Cart Actions
  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const pId = e.currentTarget.getAttribute('data-add-to-cart');
      const product = featuredProducts.find(p => p.id === pId);
      if (product) {
        addToCart(product);
        openCart();
      }
    });
  });

  // 5. Booking Modal
  // 5. Booking Modal Triggers
  const bookingModal = document.getElementById('booking-modal');
  const openBookingBtns = [
    document.getElementById('nav-book-btn'),
    document.getElementById('mobile-book-btn'),
    document.getElementById('open-booking-btn'),
    document.getElementById('final-cta-booking-btn'),
    document.getElementById('card-booking-trigger'),
    document.getElementById('final-booking-trigger')
  ];
  const closeBookingBtn = document.getElementById('close-booking-modal');

  openBookingBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', () => {
      if (bookingModal) bookingModal.classList.replace('hidden', 'flex');
    });
  });

  if (closeBookingBtn && bookingModal) {
    closeBookingBtn.addEventListener('click', () => {
      bookingModal.classList.replace('flex', 'hidden');
    });
  }

  // 6. Prescription Modal Triggers
  const rxModal = document.getElementById('rx-modal');
  const openRxBtns = [
    document.getElementById('open-rx-btn'),
    document.getElementById('cta-prescription-open'),
    document.getElementById('card-rx-trigger')
  ];
  const closeRxBtn = document.getElementById('close-rx-modal');

  openRxBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', () => {
      if (rxModal) rxModal.classList.replace('hidden', 'flex');
    });
  });

  if (closeRxBtn && rxModal) {
    closeRxBtn.addEventListener('click', () => {
      rxModal.classList.replace('flex', 'hidden');
    });
  }

  // 7. Virtual Try-On & Quiz Modal Triggers
  const tryonModal = document.getElementById('tryon-modal');
  const openTryonBtns = [
    document.getElementById('open-tryon-btn'),
    document.getElementById('card-tryon-trigger'),
    document.getElementById('hero-quiz-trigger'),
    document.getElementById('final-quiz-trigger')
  ];
  const closeTryonBtn = document.getElementById('close-tryon-modal');

  openTryonBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', () => {
      if (tryonModal) tryonModal.classList.replace('hidden', 'flex');
    });
  });

  if (closeTryonBtn && tryonModal) {
    closeTryonBtn.addEventListener('click', () => {
      tryonModal.classList.replace('flex', 'hidden');
    });
  }

  // Form Submissions (With Offline Support)
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(bookingForm);
      const bookingData = Object.fromEntries(formData.entries());
      
      if (!navigator.onLine) {
        queueOfflineAction('booking', bookingData);
        alert('📴 [Mode Hors-ligne] Votre rendez-vous a été enregistré localement sur votre appareil. Il sera automatiquement synchronisé dès le retour de la connexion WiFi.');
      } else {
        alert('✓ Rendez-vous confirmé avec succès ! Un SMS de confirmation vous a été envoyé.');
      }
      if (bookingModal) bookingModal.classList.replace('flex', 'hidden');
      bookingForm.reset();
    });
  }

  const rxForm = document.getElementById('rx-form');
  if (rxForm) {
    rxForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(rxForm);
      const rxData = Object.fromEntries(formData.entries());

      if (!navigator.onLine) {
        queueOfflineAction('prescription', rxData);
        alert('📴 [Mode Hors-ligne] Votre ordonnance a été sauvegardée localement. Elle sera traitée dès la reconnexion.');
      } else {
        alert('✓ Ordonnance enregistrée avec succès pour votre prochaine commande !');
      }
      if (rxModal) rxModal.classList.replace('flex', 'hidden');
      rxForm.reset();
    });
  }

  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterForm.querySelector('input[type="email"]')?.value;
      if (!navigator.onLine && email) {
        queueOfflineAction('newsletter', { email });
      }
      document.getElementById('newsletter-success')?.classList.remove('hidden');
      newsletterForm.reset();
    });
  }
}

// Cart Logic
function addToCart(product) {
  const existing = state.cart.find(item => item.id === product.id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }
  localStorage.setItem('optilook_cart', JSON.stringify(state.cart));
  updateCartUI();
}

function removeFromCart(productId) {
  state.cart = state.cart.filter(item => item.id !== productId);
  localStorage.setItem('optilook_cart', JSON.stringify(state.cart));
  updateCartUI();
}

function updateCartUI() {
  const badge = document.getElementById('cart-badge-count');
  const count = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) {
    badge.textContent = count;
    badge.className = `absolute top-1 right-1 w-4 h-4 bg-cyan-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm transition-transform duration-200 ${count > 0 ? 'scale-100' : 'scale-0'}`;
  }

  const container = document.getElementById('cart-items-container');
  const subtotalEl = document.getElementById('cart-subtotal-price');

  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-16 text-slate-400">
        <i data-lucide="shopping-bag" class="w-12 h-12 mx-auto mb-3 opacity-30"></i>
        <p class="text-xs font-semibold">Votre panier est vide</p>
      </div>
    `;
  } else {
    container.innerHTML = state.cart.map(item => `
      <div class="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-xl bg-white flex items-center justify-center p-1 border">
            <span class="text-[10px] font-extrabold text-cyan-600">OL</span>
          </div>
          <div>
            <h4 class="text-xs font-bold text-slate-900">${item.name}</h4>
            <span class="text-[11px] text-slate-500">${item.price} DH × ${item.quantity}</span>
          </div>
        </div>
        <button class="remove-cart-item text-slate-400 hover:text-rose-500 p-1" data-id="${item.id}">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    `).join('');

    container.querySelectorAll('.remove-cart-item').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.getAttribute('data-id');
        removeFromCart(id);
      });
    });
  }

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  if (subtotalEl) subtotalEl.textContent = `${subtotal.toLocaleString()} DH`;

  if (window.lucide) window.lucide.createIcons();
}

// 60fps Scroll Interaction with requestAnimationFrame & Pointer Parallax
function initScrollAndParallaxAnimations() {
  const stage = document.getElementById('optical-stage');
  const headline = document.getElementById('hero-headline');
  const navbar = document.getElementById('main-navbar');

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        // Navbar transition
        if (navbar) {
          if (scrollY > 40) {
            navbar.classList.add('bg-white/95', 'shadow-sm');
            navbar.classList.remove('bg-white/70');
          } else {
            navbar.classList.remove('bg-white/95', 'shadow-sm');
            navbar.classList.add('bg-white/70');
          }
        }

        // Eyeglasses Stage scale on scroll (from 1 to 1.06)
        if (stage && scrollY < 800) {
          const progress = Math.min(1, scrollY / 600);
          const scale = 1 + (progress * 0.06);
          const translateY = -(progress * 24);
          stage.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
        }

        if (headline && scrollY < 800) {
          headline.style.transform = `translate3d(0, ${scrollY * 0.05}px, 0)`;
        }

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // 3D Pointer Parallax (Only on desktop and if motion not reduced)
  if (window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const hero = document.getElementById('hero');
    if (hero && stage) {
      hero.addEventListener('mousemove', (e) => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        stage.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg)`;
      });

      hero.addEventListener('mouseleave', () => {
        stage.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
      });
    }
  }
}

// Start application when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
