// FinalCTA Component: High-Impact Luxury Closing Banner with Photography Backdrop
export function renderFinalCTA(t) {
  const isRtl = t.dir === 'rtl';
  const cta = t.finalCTA || t.finalCta || {};

  const title = cta.title || (isRtl ? 'رؤيتك الأكثر وضوحاً تبدأ من هنا.' : 'Votre regard le plus net commence ici.');
  const subtitle = cta.subtitle || (isRtl ? 'انضم إلى آلاف العملاء الذين اختاروا التميز البصري مع أوبتي لوك.' : 'Rejoignez des milliers de porteurs exigeants qui ont choisi l\'excellence visuelle Opti-Look.');
  const primaryText = cta.primary || cta.primaryCTA || (isRtl ? 'حجز موعد فحص نظر' : 'Prendre Rendez-vous');
  const secondaryText = cta.secondary || cta.secondaryCTA || (isRtl ? 'اختبار النظارة المناسبة' : 'Trouver ma Monture');

  return `
    <section class="py-20 bg-[#FAFAF8] relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="relative rounded-[40px] overflow-hidden bg-slate-950 text-white shadow-2xl border border-slate-800">
          
          <!-- Background Image Backdrop with Dark Gradient Overlay -->
          <div class="absolute inset-0 z-0">
            <img 
              src="./images/ultra-realistic-product-photography-of-a_plYHg6psRNq3z9kDH9sfCQ_HLF_68MgQQiepoIfrlKEow.png" 
              alt="Opti-Look Luxury Experience" 
              class="w-full h-full object-cover object-center filter brightness-40 contrast-110"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-950/40"></div>
          </div>

          <!-- Content Grid -->
          <div class="relative z-10 p-8 sm:p-16 lg:p-20 max-w-2xl">
            
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-6 border border-cyan-500/30">
              <span class="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
              <span>${isRtl ? 'استشارة مجانية' : 'Consultation Privée'}</span>
            </div>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-editorial uppercase tracking-tight leading-tight mb-4">
              ${title}
            </h2>

            <p class="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              ${subtitle}
            </p>

            <!-- Buttons -->
            <div class="flex flex-wrap items-center gap-4">
              <button id="final-booking-trigger" class="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase text-xs rounded-full transition-all shadow-xl flex items-center gap-2">
                <i data-lucide="calendar" class="w-4 h-4"></i>
                <span>${primaryText}</span>
              </button>

              <button id="final-quiz-trigger" class="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold uppercase text-xs rounded-full backdrop-blur-md transition-all border border-white/20 flex items-center gap-2">
                <i data-lucide="sparkles" class="w-4 h-4 text-cyan-400"></i>
                <span>${secondaryText}</span>
              </button>
            </div>

            <!-- Trust notes -->
            <div class="flex items-center gap-6 mt-10 pt-8 border-t border-slate-800/80 text-xs text-slate-400">
              <span class="flex items-center gap-1.5"><i data-lucide="truck" class="w-4 h-4 text-cyan-400"></i> ${isRtl ? 'توصيل مجاني لجميع مدن المغرب' : 'Livraison gratuite partout au Maroc'}</span>
              <span class="flex items-center gap-1.5"><i data-lucide="shield-check" class="w-4 h-4 text-cyan-400"></i> ${isRtl ? 'ضمان شامل 24 شهراً' : 'Garantie 24 mois'}</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
