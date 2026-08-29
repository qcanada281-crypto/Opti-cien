// Hero Component: Lifted Eyewear Composition for Immediate Above-the-Fold Visibility
export function renderHero(t) {
  const isRtl = t.dir === 'rtl';
  
  // Looping segment
  const phrase = isRtl 
    ? 'وضوح الرؤية — دقة فائقة — راحة مطلقة — حضور استثنائي — ' 
    : 'CLARTÉ VISUELLE — PRÉCISION OPTIQUE — CONFORT ABSOLU — DESIGN INTEMPOREL — ';

  // Dense continuous block (repeated 4 times per half)
  const denseBlock = `${phrase} ${phrase} ${phrase} ${phrase}`;

  return `
    <section id="hero" class="relative min-h-[90vh] lg:min-h-screen bg-[#FAFAF8] select-none pt-20 sm:pt-22 pb-8 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-between overflow-hidden">
      
      <!-- CONTINUOUS SYNCHRONIZED KEYFRAME -->
      <style>
        @keyframes streamMarqueeSync {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .marquee-sync-track {
          display: flex !important;
          flex-direction: row !important;
          width: max-content !important;
          animation: streamMarqueeSync 34s linear infinite !important;
          will-change: transform;
        }
      </style>

      <!-- TOP HEADLINE BLOCK (COMPACT & SLEEK) -->
      <div class="relative z-40 max-w-4xl mx-auto text-center">
        
        <!-- Eyebrow Tag -->
        <div class="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-slate-900/5 border border-slate-200/80 mb-2 backdrop-blur-sm shadow-sm">
          <span class="w-2 h-2 rounded-full bg-[#2DBFC3] animate-ping"></span>
          <span class="text-[10px] sm:text-[11px] font-bold tracking-widest text-slate-800 uppercase ${isRtl ? 'font-arabic' : 'font-sans'}">${t.hero.eyebrow}</span>
        </div>

        <!-- Main Headline -->
        <h1 id="hero-headline" class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#111111] tracking-editorial ${isRtl ? 'font-arabic leading-normal' : 'font-editorial uppercase leading-[1.05]'} transition-transform duration-500">
          <span class="block text-slate-900 mb-0.5">${t.hero.headlinePart1}</span>
          <span class="block bg-gradient-to-r from-slate-900 via-slate-700 to-[#2DBFC3] bg-clip-text text-transparent italic">
            ${t.hero.headlinePart2}
          </span>
        </h1>

      </div>

      <!-- =========================================================================
           CENTER HERO: LIFTED EYEWEAR STAGE (SLIGHTLY HIGHER UP)
           ========================================================================= -->
      <div id="optical-stage" class="relative w-full max-w-5xl h-[300px] sm:h-[360px] md:h-[420px] mx-auto my-auto -mt-3 sm:-mt-6 flex items-center justify-center">

        <!-- LAYER 1: BASE UNMAGNIFIED MARQUEE (EXACT VERTICAL CENTERLINE) -->
        <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden pointer-events-none z-10 opacity-25" dir="ltr">
          <div class="marquee-sync-track">
            <!-- Block 1 (50%) -->
            <div class="flex items-center flex-nowrap shrink-0 whitespace-nowrap">
              <span class="inline-block text-sm sm:text-base md:text-lg font-bold text-slate-700 tracking-wider px-6 ${isRtl ? 'font-arabic' : 'font-sans'}">
                ${denseBlock}
              </span>
            </div>
            <!-- Block 2 (50% Clone) -->
            <div class="flex items-center flex-nowrap shrink-0 whitespace-nowrap" aria-hidden="true">
              <span class="inline-block text-sm sm:text-base md:text-lg font-bold text-slate-700 tracking-wider px-6 ${isRtl ? 'font-arabic' : 'font-sans'}">
                ${denseBlock}
              </span>
            </div>
          </div>
        </div>

        <!-- RELATIVE EYEWEAR STAGE WRAPPER -->
        <div id="eyewear-container" class="relative w-full max-w-2xl px-4 flex items-center justify-center transition-transform duration-300 ease-out">
          
          <!-- LAYER 2: LEFT LENS MAGNIFICATION WINDOW (CENTERED ON EXACT SAME HORIZONTAL LINE) -->
          <div class="absolute left-[8.5%] top-1/2 -translate-y-1/2 w-[30%] h-[52%] rounded-[46%_46%_50%_50%] overflow-hidden pointer-events-none z-20 flex items-center justify-center">
            <div class="w-full" dir="ltr">
              <div class="marquee-sync-track">
                <div class="flex items-center flex-nowrap shrink-0 whitespace-nowrap">
                  <span class="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-slate-950 tracking-wider px-6 ${isRtl ? 'font-arabic leading-none' : 'font-sans leading-none'}">
                    ${denseBlock}
                  </span>
                </div>
                <div class="flex items-center flex-nowrap shrink-0 whitespace-nowrap" aria-hidden="true">
                  <span class="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-slate-950 tracking-wider px-6 ${isRtl ? 'font-arabic leading-none' : 'font-sans leading-none'}">
                    ${denseBlock}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- LAYER 2: RIGHT LENS MAGNIFICATION WINDOW (CENTERED ON EXACT SAME HORIZONTAL LINE) -->
          <div class="absolute left-[43.5%] top-1/2 -translate-y-1/2 w-[31%] h-[52%] rounded-[46%_46%_50%_50%] overflow-hidden pointer-events-none z-20 flex items-center justify-center">
            <div class="w-full" dir="ltr">
              <div class="marquee-sync-track">
                <div class="flex items-center flex-nowrap shrink-0 whitespace-nowrap">
                  <span class="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-slate-950 tracking-wider px-6 ${isRtl ? 'font-arabic leading-none' : 'font-sans leading-none'}">
                    ${denseBlock}
                  </span>
                </div>
                <div class="flex items-center flex-nowrap shrink-0 whitespace-nowrap" aria-hidden="true">
                  <span class="inline-block text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black text-slate-950 tracking-wider px-6 ${isRtl ? 'font-arabic leading-none' : 'font-sans leading-none'}">
                    ${denseBlock}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- LAYER 3: BLACK TITANIUM GLASSES PNG (ON TOP: COVERS ALL EDGES CLEANLY) -->
          <img 
            src="./images/hero_glasses_black-transparent.png.png" 
            alt="Opti-Look Matte Black Titanium Eyewear" 
            class="relative z-30 w-full h-auto object-contain mix-blend-multiply filter contrast-110 brightness-100 drop-shadow-2xl hover:scale-105 transition-transform duration-500 pointer-events-none"
          />

        </div>

      </div>

      <!-- BOTTOM SUPPORTING TEXT & ACTION CTAS -->
      <div class="relative z-40 max-w-4xl mx-auto text-center flex flex-col items-center gap-3 mt-0.5">
        
        <p class="max-w-xl mx-auto text-xs sm:text-sm text-slate-600 font-medium leading-relaxed ${isRtl ? 'font-arabic' : ''}">
          ${t.hero.supporting}
        </p>

        <!-- Action Buttons -->
        <div class="flex flex-wrap items-center justify-center gap-4">
          <a href="#collection" class="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#111111] hover:bg-[#2DBFC3] text-white shadow-xl btn-turquoise-sweep transition-all duration-300 transform hover:-translate-y-0.5 ${isRtl ? 'font-arabic' : ''}">
            ${t.hero.primaryCTA}
          </a>
          <button id="hero-quiz-trigger" class="px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 ${isRtl ? 'font-arabic' : ''}">
            <i data-lucide="sparkles" class="w-4 h-4 text-[#2DBFC3]"></i>
            <span>${t.hero.secondaryCTA}</span>
          </button>
        </div>

        <div class="flex items-center gap-2 text-xs font-medium text-slate-500 mt-0.5 ${isRtl ? 'font-arabic' : ''}">
          <i data-lucide="shield-check" class="w-4 h-4 text-[#2DBFC3]"></i>
          <span>${t.hero.trust}</span>
        </div>

      </div>

    </section>
  `;
}
