// DigitalEyeCare Component: Interactive Digital Optical Services with Real Photography
export function renderDigitalEyeCare(t) {
  const isRtl = t.dir === 'rtl';

  return `
    <section id="digital-care" class="py-24 bg-[#FAFAF8] relative border-t border-slate-200/80">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 text-xs font-bold uppercase tracking-wider mb-3">
            <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
            <span>${t.digitalCare.tag}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-editorial uppercase tracking-tight">
            ${t.digitalCare.title}
          </h2>
          <p class="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed">
            ${t.digitalCare.subtitle}
          </p>
        </div>

        <!-- 4-Card Digital Innovation Grid with Real Studio Photography -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <!-- Card 1: Virtual Try-On Live -->
          <div class="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6">
                <img 
                  src="./images/heres-a-clean-and-professional-ai-image-_Q8rdzcapRvKB6OYHRNysJQ_FMOMY0wJRFSTfs5tbhGBgg.png" 
                  alt="Essayage Virtuel Live Opti-Look" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 text-white text-[10px] font-bold backdrop-blur-sm flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>Live 3D</span>
                </div>
              </div>
              <h3 class="text-base font-bold text-slate-900 mb-2 font-sans">${t.digitalCare.virtualTryOn.title}</h3>
              <p class="text-xs text-slate-600 leading-relaxed">${t.digitalCare.virtualTryOn.desc}</p>
            </div>
            <div class="pt-6 mt-4 border-t border-slate-50">
              <button id="card-tryon-trigger" class="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-white transition-all flex items-center justify-center gap-2">
                <i data-lucide="camera" class="w-4 h-4"></i>
                <span>${isRtl ? 'جرب الآن بالكاميرا' : 'Lancer l\'Essayage'}</span>
              </button>
            </div>
          </div>

          <!-- Card 2: Precision Blue-Light Lens Filter -->
          <div class="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6">
                <img 
                  src="./images/a-stunning-close-up-photograph-of-a-blue_tLF999gyWWyo2COTfZad3g_TCHAV1B9RCWjXbzzod0WMw_cover.png" 
                  alt="Verres Anti-Lumière Bleue Opti-Look" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-cyan-500 text-slate-950 text-[10px] font-extrabold shadow-sm">
                  <span>HD Anti-Reflet</span>
                </div>
              </div>
              <h3 class="text-base font-bold text-slate-900 mb-2 font-sans">${isRtl ? 'فلتر الحماية والأشعة الزرقاء' : 'Verres Haute Définition'}</h3>
              <p class="text-xs text-slate-600 leading-relaxed">${isRtl ? 'عدسات معالجة بـ 9 طبقات نانوية مضادة للانعكاس والخدوش مع حماية قصوى من الشاشات.' : 'Traitement optique à 9 couches antireflet et filtration sélective de la lumière bleue nocive.'}</p>
            </div>
            <div class="pt-6 mt-4 border-t border-slate-50">
              <a href="#collection" class="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all flex items-center justify-center gap-2">
                <i data-lucide="eye" class="w-4 h-4 text-cyan-600"></i>
                <span>${isRtl ? 'استكشف العدسات' : 'En Savoir Plus'}</span>
              </a>
            </div>
          </div>

          <!-- Card 3: Prescription Upload -->
          <div class="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6">
                <img 
                  src="./images/mache-das-bild-minimalistisch-aus-andere_kH_q2m9yV2qDVOgKe_Nv8g_9ku7m0AWTZWWK6K8DUxyOw_cover.png" 
                  alt="Upload Ordonnance Optique Opti-Look" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 text-white text-[10px] font-bold backdrop-blur-sm">
                  <span>Digital RX</span>
                </div>
              </div>
              <h3 class="text-base font-bold text-slate-900 mb-2 font-sans">${t.digitalCare.prescription.title}</h3>
              <p class="text-xs text-slate-600 leading-relaxed">${t.digitalCare.prescription.desc}</p>
            </div>
            <div class="pt-6 mt-4 border-t border-slate-50">
              <button id="card-rx-trigger" class="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-slate-900 hover:bg-cyan-500 hover:text-slate-950 text-white transition-all flex items-center justify-center gap-2">
                <i data-lucide="file-up" class="w-4 h-4"></i>
                <span>${isRtl ? 'رفع الوصفة الطبية' : 'Uploader mon Ordonnance'}</span>
              </button>
            </div>
          </div>

          <!-- Card 4: In-Clinic Exam Booking -->
          <div class="group bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between overflow-hidden">
            <div>
              <div class="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6">
                <img 
                  src="./images/ultra-realistic-product-photography-of-a_plYHg6psRNq3z9kDH9sfCQ_HLF_68MgQQiepoIfrlKEow.png" 
                  alt="Prise de Rendez-vous Examen de Vue Opti-Look" 
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div class="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-extrabold shadow-sm">
                  <span>${isRtl ? 'متاح الآن' : 'Disponible'}</span>
                </div>
              </div>
              <h3 class="text-base font-bold text-slate-900 mb-2 font-sans">${t.digitalCare.examBooking.title}</h3>
              <p class="text-xs text-slate-600 leading-relaxed">${t.digitalCare.examBooking.desc}</p>
            </div>
            <div class="pt-6 mt-4 border-t border-slate-50">
              <button id="card-booking-trigger" class="w-full py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all flex items-center justify-center gap-2 shadow-md">
                <i data-lucide="calendar" class="w-4 h-4"></i>
                <span>${isRtl ? 'حجز موعد فحص' : 'Prendre Rendez-vous'}</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
