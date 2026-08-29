// TrustStrip Component: 4 pillars with icons and generous luxury spacing
export function renderTrustStrip(t) {
  const icons = ['crosshair', 'gem', 'award', 'calendar-check'];
  
  return `
    <section id="trust-strip" class="py-12 bg-white border-y border-slate-100 relative z-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          ${t.trustStrip.map((item, index) => `
            <div class="flex items-start gap-4 p-4 rounded-2xl hover:bg-slate-50/80 transition-all duration-300 group">
              <div class="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                <i data-lucide="${icons[index]}" class="w-5 h-5"></i>
              </div>
              <div>
                <h2 class="text-sm font-bold text-slate-900 mb-1 group-hover:text-cyan-700 transition-colors">${item.title}</h2>
                <p class="text-xs text-slate-500 leading-relaxed">${item.desc}</p>
              </div>
            </div>
          `).join('')}

        </div>
      </div>
    </section>
  `;
}
