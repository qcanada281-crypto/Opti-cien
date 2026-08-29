// Footer Component: Comprehensive luxury footer with newsletter, language switch, and sitemap
export function renderFooter(t, currentLang) {
  const isRtl = t.dir === 'rtl';

  return `
    <footer class="bg-slate-950 text-slate-400 text-xs border-t border-slate-900 pt-16 pb-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Top Row: Brand & Newsletter -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          <div class="lg:col-span-5">
            <div class="flex items-center gap-2 mb-4">
              <div class="w-8 h-8 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center font-extrabold text-sm">
                <span>OL</span>
              </div>
              <span class="font-extrabold tracking-tight text-xl text-white font-editorial uppercase">Opti-Look</span>
            </div>
            <p class="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              ${t.footer.tagline}
            </p>
            
            <!-- Social SVG Icons (Clean 0-warning implementation) -->
            <div class="flex items-center gap-3">
              <a href="#" class="w-9 h-9 rounded-full bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-400 flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" class="w-9 h-9 rounded-full bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-400 flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" class="w-9 h-9 rounded-full bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-slate-400 flex items-center justify-center transition-colors" aria-label="Twitter">
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
            </div>
          </div>

          <!-- Newsletter Column -->
          <div class="lg:col-span-7 flex flex-col justify-center">
            <div class="bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-800">
              <h3 class="text-base font-bold text-white mb-1">${t.footer.newsletterTitle}</h3>
              <p class="text-xs text-slate-400 mb-4">${t.footer.newsletterDesc}</p>
              
              <form id="newsletter-form" class="flex flex-col sm:flex-row gap-3">
                <input type="email" required placeholder="votre.email@domaine.com" class="flex-1 px-4 py-3 bg-slate-950 border border-slate-700 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400">
                <button type="submit" class="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider text-xs rounded-xl transition-all shadow-md">
                  ${t.footer.subscribe}
                </button>
              </form>
              <div id="newsletter-success" class="hidden text-xs text-cyan-400 font-semibold mt-2">✓ Merci pour votre inscription !</div>
            </div>
          </div>

        </div>

        <!-- Links Navigation Columns -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-slate-800 text-xs">
          
          <div>
            <h4 class="font-bold text-white uppercase tracking-wider text-[11px] mb-4">${t.footer.categories}</h4>
            <ul class="space-y-2.5">
              <li><a href="#collection" class="hover:text-cyan-400 transition-colors">Lunettes de Vue</a></li>
              <li><a href="#collection" class="hover:text-cyan-400 transition-colors">Lunettes de Soleil</a></li>
              <li><a href="#collection" class="hover:text-cyan-400 transition-colors">Clips Magnétiques</a></li>
              <li><a href="#collection" class="hover:text-cyan-400 transition-colors">Lentilles de Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-white uppercase tracking-wider text-[11px] mb-4">${t.footer.care}</h4>
            <ul class="space-y-2.5">
              <li><a href="#digital-care" class="hover:text-cyan-400 transition-colors">Examen de Vue</a></li>
              <li><a href="#digital-care" class="hover:text-cyan-400 transition-colors">Essayage Virtuel</a></li>
              <li><a href="#digital-care" class="hover:text-cyan-400 transition-colors">Upload Ordonnance</a></li>
              <li><a href="#digital-care" class="hover:text-cyan-400 transition-colors">Guide Morphologie</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-white uppercase tracking-wider text-[11px] mb-4">Opti-Look</h4>
            <ul class="space-y-2.5">
              <li><a href="#story" class="hover:text-cyan-400 transition-colors">Notre Maison</a></li>
              <li><a href="#story" class="hover:text-cyan-400 transition-colors">Boutiques & Ateliers</a></li>
              <li><a href="#story" class="hover:text-cyan-400 transition-colors">Engagements Qualité</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors">Carrières</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-bold text-white uppercase tracking-wider text-[11px] mb-4">Contact & Support</h4>
            <ul class="space-y-2.5">
              <li class="flex items-center gap-2"><i data-lucide="phone" class="w-3.5 h-3.5 text-cyan-400"></i> +212 5 22 00 00 00</li>
              <li class="flex items-center gap-2"><i data-lucide="mail" class="w-3.5 h-3.5 text-cyan-400"></i> contact@opti-look.ma</li>
              <li class="flex items-center gap-2"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-cyan-400"></i> Casablanca · Rabat · Marrakech</li>
            </ul>
          </div>

        </div>

        <!-- Bottom Copyright & Legal -->
        <div class="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[11px] text-slate-500">
          <div>
            © 2026 Opti-Look. ${t.footer.rights}
          </div>
          
          <div class="flex items-center gap-6">
            <a href="./admin.html" class="text-cyan-400 hover:text-cyan-300 font-bold transition-colors flex items-center gap-1"><i data-lucide="shield" class="w-3.5 h-3.5"></i> Admin Suite</a>
            <a href="#" class="hover:text-slate-300 transition-colors">${t.footer.privacy}</a>
            <a href="#" class="hover:text-slate-300 transition-colors">${t.footer.terms}</a>
            <span class="text-cyan-500 font-bold uppercase">Maroc / MAD</span>
          </div>
        </div>

      </div>
    </footer>
  `;
}
