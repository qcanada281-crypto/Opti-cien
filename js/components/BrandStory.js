// BrandStory Component: Luxury Editorial Storytelling with Real Atelier Photography
export function renderBrandStory(t) {
  const isRtl = t.dir === 'rtl';
  const story = t.story || {};

  const eyebrow = story.eyebrow || (isRtl ? 'قصتنا وحرفيتنا' : 'NOTRE HISTOIRE & SAVOIR-FAIRE');
  const title = story.title || (isRtl ? 'رؤية أفضل. حضور أرقى.' : 'Meilleure vision. Meilleure présence.');
  const p1 = story.paragraph1 || story.p1 || (isRtl ? 'في أوبتي لوك، نؤمن بأن النظارة ليست مجرد تصحيح للبصر، بل هي تعبير خالص عن هويتك وأناقتك اليومية.' : 'Chez Opti-Look, nous croyons qu\'une paire de lunettes ne doit pas seulement corriger la vue : elle doit affirmer votre identité.');
  const p2 = story.paragraph2 || story.p2 || (isRtl ? 'مصنوعة يدوياً من أجود أنواع الأسيتات الإيطالي والتيتانيوم الياباني مع أحدث تقنيات الليزر البصرية.' : 'Façonnées à la main à partir des meilleurs acétates et titanes, nos créations allient le savoir-faire artisanal traditionnel aux innovations optiques de pointe.');

  return `
    <section id="story" class="py-24 bg-white relative border-t border-slate-100 overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Left Column: Story Content & Heritage -->
          <div class="lg:col-span-6">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-4">
              <span>${eyebrow}</span>
            </div>
            
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-editorial uppercase tracking-tight leading-tight mb-6">
              ${title}
            </h2>

            <p class="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              ${p1}
            </p>

            <p class="text-sm sm:text-base text-slate-600 leading-relaxed mb-8">
              ${p2}
            </p>

            <!-- 3 Luxury Pillars Stats -->
            <div class="grid grid-cols-3 gap-6 pt-6 border-t border-slate-100 mb-8">
              <div>
                <span class="block text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">0.01<span class="text-cyan-500 text-lg">mm</span></span>
                <span class="text-xs text-slate-500">${isRtl ? 'دقة التصنيع' : 'Tolérance Micrométrique'}</span>
              </div>
              <div>
                <span class="block text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">100<span class="text-cyan-500 text-lg">%</span></span>
                <span class="text-xs text-slate-500">${isRtl ? 'تيتانيوم أصلي' : 'Titane Bêta Pur'}</span>
              </div>
              <div>
                <span class="block text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">48<span class="text-cyan-500 text-lg">h</span></span>
                <span class="text-xs text-slate-500">${isRtl ? 'توصيل بالمغرب' : 'Livraison Express'}</span>
              </div>
            </div>

            <div class="flex items-center gap-4">
              <a href="#collection" class="px-8 py-3.5 bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-white font-bold uppercase text-xs rounded-full transition-all shadow-md">
                ${isRtl ? 'اكتشف الحرفية' : 'Notre Savoir-Faire'}
              </a>
            </div>

          </div>

          <!-- Right Column: Dual Atelier Photography Mosaic -->
          <div class="lg:col-span-6 relative">
            <div class="grid grid-cols-2 gap-4">
              
              <!-- Atelier Photo 1: Acetate Cutting & Shaping -->
              <div class="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] bg-slate-100 transform translate-y-6">
                <img 
                  src="./images/a-professional-product-photograph-of-cut_1M2leC5GRRi7A0fF9AJIgg_mbRDH2Q4RB-KK3mOXHlZaA_cover.png" 
                  alt="Découpe et Polissage Artisanal Opti-Look" 
                  class="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-6">
                  <span class="text-white text-xs font-bold uppercase tracking-wider">${isRtl ? 'أسيتات إيطالي أصلي' : 'Acétate Mazzucchelli'}</span>
                </div>
              </div>

              <!-- Atelier Photo 2: Titanium Assembly & Laser Calibrating -->
              <div class="relative rounded-3xl overflow-hidden shadow-xl aspect-[3/4] bg-slate-100 transform -translate-y-6">
                <img 
                  src="./images/a-professional-product-photograph-of-ele___DMXV_JSUqWn__VJYGvAw_FXrY7i_gSi-HZNP2t0H1IQ_cover.png" 
                  alt="Façonnage du Titane Aérospatial Opti-Look" 
                  class="w-full h-full object-cover filter contrast-105 hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-6">
                  <span class="text-white text-xs font-bold uppercase tracking-wider">${isRtl ? 'تيتانيوم ياباني مصقول' : 'Titane & Tolérances Laser'}</span>
                </div>
              </div>

            </div>

            <!-- Floating Stamp Seal Badge -->
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-cyan-500 text-slate-950 flex flex-col items-center justify-center font-black text-[10px] uppercase shadow-2xl border-4 border-white z-10 text-center leading-tight">
              <span>Haute</span>
              <span>Optique</span>
              <span class="text-[8px] font-normal">2026</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
