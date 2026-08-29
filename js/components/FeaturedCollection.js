// FeaturedCollection Component: Luxury Eyewear Showcase with Lookbook Banner
import { featuredProducts } from '../data/products.js';
import { renderProductCard } from './ProductCard.js';

export function renderFeaturedCollection(t) {
  const isRtl = t.dir === 'rtl';

  return `
    <section id="collection" class="py-24 bg-white relative border-t border-slate-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header Row: Title & Filter Category Chips -->
        <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div class="max-w-xl">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-3">
              <span>${t.collection.tag}</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-editorial uppercase tracking-tight">
              ${t.collection.title}
            </h2>
            <p class="text-sm text-slate-600 mt-3 leading-relaxed">
              ${t.collection.subtitle}
            </p>
          </div>

          <!-- Filter Pills -->
          <div class="flex flex-wrap items-center gap-2">
            <button class="px-5 py-2.5 rounded-full text-xs font-bold bg-slate-950 text-white shadow-sm transition-all hover:bg-cyan-600">
              ${isRtl ? 'الكل' : 'Tous les Modèles'}
            </button>
            <button class="px-5 py-2.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all">
              ${isRtl ? 'نظارات طبية' : 'Vue & Antireflet'}
            </button>
            <button class="px-5 py-2.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all">
              ${isRtl ? 'شمسية مستقطبة' : 'Solaire'}
            </button>
            <button class="px-5 py-2.5 rounded-full text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 transition-all">
              ${isRtl ? 'تيتانيوم ياباني' : 'Titane Brossé'}
            </button>
          </div>
        </div>

        <!-- 6-Product Luxury Grid with Real Studio Photography -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          ${featuredProducts.map(p => renderProductCard(p, t, isRtl)).join('')}
        </div>

        <!-- Editorial Lookbook Spotlight Banner -->
        <div class="mt-20 relative rounded-3xl overflow-hidden bg-slate-950 text-white shadow-2xl border border-slate-800">
          <div class="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] items-center">
            
            <div class="lg:col-span-6 p-8 sm:p-14 z-10">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4 border border-cyan-500/30">
                <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
                <span>Signature Craft 2026</span>
              </div>
              <h3 class="text-2xl sm:text-4xl font-extrabold text-white font-editorial uppercase leading-tight mb-4">
                ${isRtl ? 'هندسة بصرية متقدمة وتصميم خالد' : 'L\'Équilibre Parfait entre Verres Haute Définition & Titane'}
              </h3>
              <p class="text-sm text-slate-300 leading-relaxed mb-8 max-w-md">
                ${isRtl 
                  ? 'كل زوج من نظارات أوبتي لوك يخضع لأكثر من 48 مرحلة تصنيع يدوية بأحدث تقنيات الليزر في العالم.' 
                  : 'Chaque monture Opti-Look passe par plus de 48 étapes de finition minutieuse pour garantir une légèreté sans compromis et un confort d\'exception.'}
              </p>
              <div class="flex flex-wrap items-center gap-4">
                <a href="#digital-care" class="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase text-xs rounded-full transition-all shadow-md">
                  ${isRtl ? 'حجز فحص نظر مجاني' : 'Découvrir la Technologie'}
                </a>
                <span class="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                  <i data-lucide="check-circle" class="w-4 h-4 text-cyan-400"></i>
                  Garantie 2 ans intégrale
                </span>
              </div>
            </div>

            <!-- Spotlight Poster Image -->
            <div class="lg:col-span-6 h-full min-h-[320px] lg:min-h-[420px] relative overflow-hidden">
              <img 
                src="./images/a-bold-photorealistic-poster-featuring-a_y4zxDC4FT0G6eYHe3aINAQ_EbAVtaf8SJah62cbAFuK3A.png" 
                alt="Opti-Look Haute Lunetterie Craftsmanship" 
                class="absolute inset-0 w-full h-full object-cover object-center filter contrast-105 hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:bg-gradient-to-r lg:from-slate-950 lg:via-transparent lg:to-transparent"></div>
            </div>

          </div>
        </div>

      </div>
    </section>
  `;
}
