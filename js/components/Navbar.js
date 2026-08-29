// Navbar Component: Sticky luxury navigation with language switcher, cart badge, and search
export function renderNavbar(t, currentLang, cartCount) {
  const isRtl = t.dir === 'rtl';

  return `
    <header id="main-navbar" class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/70 backdrop-blur-md border-b border-slate-200/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-20">
          
          <!-- BRAND LOGO -->
          <a href="#hero" class="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-cyan-500 rounded-lg p-1">
            <div class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-cyan-400 font-extrabold text-xl group-hover:scale-105 transition-transform duration-300 shadow-md">
              <span class="text-white">O</span><span class="text-cyan-400">L</span>
            </div>
            <div class="flex flex-col">
              <span class="font-extrabold tracking-tight text-xl text-slate-900 font-editorial uppercase">Opti-Look</span>
              <span class="text-[9px] uppercase tracking-widest text-cyan-600 font-semibold -mt-1">Haute Lunetterie</span>
            </div>
          </a>

          <!-- DESKTOP NAVIGATION LINKS -->
          <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700" aria-label="Main Navigation">
            <a href="#hero" class="hover:text-cyan-600 transition-colors py-1 relative group focus:outline-none focus:ring-1 focus:ring-cyan-500">
              ${t.nav.home}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#collection" class="hover:text-cyan-600 transition-colors py-1 relative group focus:outline-none focus:ring-1 focus:ring-cyan-500">
              ${t.nav.collection}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#digital-care" class="hover:text-cyan-600 transition-colors py-1 relative group focus:outline-none focus:ring-1 focus:ring-cyan-500">
              ${t.nav.digitalEyeCare}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#story" class="hover:text-cyan-600 transition-colors py-1 relative group focus:outline-none focus:ring-1 focus:ring-cyan-500">
              ${t.nav.about}
              <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <!-- RIGHT ACTIONS & CTAS -->
          <div class="flex items-center gap-3 lg:gap-4">
            
            <!-- Language Switcher Dropdown -->
            <div class="relative">
              <button id="lang-menu-btn" class="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-semibold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500" aria-label="Change Language">
                <i data-lucide="globe" class="w-3.5 h-3.5 text-cyan-600"></i>
                <span class="uppercase">${currentLang}</span>
                <i data-lucide="chevron-down" class="w-3 h-3 text-slate-400"></i>
              </button>
              
              <div id="lang-dropdown" class="hidden absolute ${isRtl ? 'left-0' : 'right-0'} mt-2 w-32 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50 text-xs">
                <button data-lang="fr" class="w-full text-left px-3 py-2 hover:bg-cyan-50 flex items-center justify-between text-slate-700 ${currentLang === 'fr' ? 'font-bold text-cyan-600' : ''}">
                  <span>Français</span>
                  <span class="text-[10px] text-slate-400">FR</span>
                </button>
                <button data-lang="ar" class="w-full text-left px-3 py-2 hover:bg-cyan-50 flex items-center justify-between text-slate-700 ${currentLang === 'ar' ? 'font-bold text-cyan-600' : ''}">
                  <span>العربية</span>
                  <span class="text-[10px] text-slate-400">AR</span>
                </button>
                <button data-lang="en" class="w-full text-left px-3 py-2 hover:bg-cyan-50 flex items-center justify-between text-slate-700 ${currentLang === 'en' ? 'font-bold text-cyan-600' : ''}">
                  <span>English</span>
                  <span class="text-[10px] text-slate-400">EN</span>
                </button>
              </div>
            </div>

            <!-- Search Button -->
            <button id="search-toggle-btn" class="p-2 text-slate-600 hover:text-cyan-600 rounded-full hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500" aria-label="Search">
              <i data-lucide="search" class="w-5 h-5"></i>
            </button>

            <!-- Shopping Bag with Badge -->
            <button id="cart-toggle-btn" class="relative p-2 text-slate-600 hover:text-cyan-600 rounded-full hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500" aria-label="Shopping Bag">
              <i data-lucide="shopping-bag" class="w-5 h-5"></i>
              <span id="cart-badge-count" class="absolute top-1 right-1 w-4 h-4 bg-cyan-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm ${cartCount > 0 ? 'scale-100' : 'scale-0'} transition-transform duration-200">
                ${cartCount}
              </span>
            </button>

            <!-- Admin Portal Link -->
            <a href="./admin.html" class="p-2 text-slate-600 hover:text-cyan-600 rounded-full hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500" title="Accéder à l'Administration">
              <i data-lucide="shield" class="w-5 h-5"></i>
            </a>

            <!-- Primary Action CTA -->
            <button id="nav-book-btn" class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold bg-slate-900 hover:bg-cyan-600 text-white shadow-sm hover:shadow-cyan-500/25 btn-turquoise-sweep transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500">
              <i data-lucide="calendar" class="w-3.5 h-3.5 text-cyan-400"></i>
              <span>${t.nav.bookExam}</span>
            </button>

            <!-- Mobile Hamburger Toggle -->
            <button id="mobile-menu-toggle" class="md:hidden p-2 text-slate-700 hover:text-cyan-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500" aria-label="Open Mobile Menu">
              <i data-lucide="menu" class="w-6 h-6"></i>
            </button>

          </div>

        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div id="mobile-menu-drawer" class="hidden md:hidden bg-white/95 backdrop-blur-lg border-b border-slate-200 px-6 py-6 transition-all">
        <div class="flex flex-col gap-4 text-base font-semibold text-slate-800">
          <a href="#hero" class="mobile-nav-link py-2 hover:text-cyan-600 border-b border-slate-100">${t.nav.home}</a>
          <a href="#collection" class="mobile-nav-link py-2 hover:text-cyan-600 border-b border-slate-100">${t.nav.collection}</a>
          <a href="#digital-care" class="mobile-nav-link py-2 hover:text-cyan-600 border-b border-slate-100">${t.nav.digitalEyeCare}</a>
          <a href="#story" class="mobile-nav-link py-2 hover:text-cyan-600 border-b border-slate-100">${t.nav.about}</a>
          
          <button id="mobile-book-btn" class="w-full mt-2 py-3 bg-slate-900 hover:bg-cyan-600 text-white rounded-xl text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-md">
            <i data-lucide="calendar" class="w-4 h-4 text-cyan-400"></i>
            <span>${t.nav.bookExam}</span>
          </button>
        </div>
      </div>
    </header>
  `;
}
