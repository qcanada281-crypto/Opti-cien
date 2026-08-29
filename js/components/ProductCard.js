// ProductCard Component: High-End Luxury Product Card with Real Studio Photography
export function renderProductCard(product, t, isRtl) {
  const categoryLabel = isRtl ? (product.categoryAr || product.category) : product.category;

  return `
    <div class="product-card group relative flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1.5" data-product-id="${product.id}">
      
      <!-- Card Image Visual Frame with Real Studio Photography -->
      <div class="relative w-full aspect-[4/3] bg-gradient-to-b from-[#F8FAFC] to-[#EEF2F6] flex items-center justify-center p-6 overflow-hidden">
        
        <!-- Badges (Top Left & Top Right) -->
        <div class="absolute top-4 left-4 z-10 flex flex-col gap-1.5 pointer-events-none">
          ${product.isNew ? `
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-cyan-500 text-slate-950 shadow-sm">
              NEW
            </span>
          ` : ''}
          ${product.discount ? `
            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-extrabold tracking-wider bg-rose-500 text-white shadow-sm">
              ${product.discount}
            </span>
          ` : ''}
        </div>

        <!-- Wishlist Button -->
        <button class="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-rose-500 flex items-center justify-center shadow-sm backdrop-blur-sm transition-colors" aria-label="Favoris">
          <i data-lucide="heart" class="w-4 h-4"></i>
        </button>

        <!-- Product Studio Photo with Smooth Hover Scale -->
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="w-full h-full object-contain filter contrast-105 brightness-100 group-hover:scale-108 transition-transform duration-700 ease-out pointer-events-none"
          loading="lazy"
        />

        <!-- Quick Add Drawer on Hover -->
        <div class="absolute inset-x-4 bottom-4 z-10 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-auto">
          <button class="btn-add-cart w-full py-3 px-4 bg-slate-900/95 hover:bg-cyan-500 hover:text-slate-950 text-white text-xs font-bold uppercase tracking-wider rounded-2xl shadow-lg backdrop-blur-md transition-all flex items-center justify-center gap-2" data-product-id="${product.id}">
            <i data-lucide="shopping-bag" class="w-4 h-4"></i>
            <span>${t.collection.addToBag}</span>
          </button>
        </div>

      </div>

      <!-- Card Details & Pricing -->
      <div class="p-6 flex flex-col justify-between flex-1">
        
        <div>
          <!-- Category & Rating -->
          <div class="flex items-center justify-between gap-2 text-xs text-slate-400 mb-1.5">
            <span class="font-medium uppercase tracking-wider text-[11px] text-cyan-600">${categoryLabel}</span>
            <div class="flex items-center gap-1 text-slate-700 font-bold text-[11px]">
              <i data-lucide="star" class="w-3.5 h-3.5 fill-amber-400 text-amber-400"></i>
              <span>${product.rating}</span>
              <span class="text-slate-400 font-normal">(${product.reviewsCount})</span>
            </div>
          </div>

          <!-- Product Name -->
          <h3 class="text-base font-bold text-slate-900 group-hover:text-cyan-600 transition-colors font-sans mb-1.5">
            ${product.name}
          </h3>

          <!-- Materials & Shape -->
          <p class="text-xs text-slate-500 line-clamp-1 mb-4">
            ${product.material} · ${product.shape}
          </p>
        </div>

        <!-- Bottom Row: Colors & Price (Moroccan Dirham DH / MAD) -->
        <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
          
          <!-- Color Swatches -->
          <div class="flex items-center gap-1.5">
            ${product.colors.map((c, idx) => `
              <button 
                class="swatch-btn w-4 h-4 rounded-full border-2 transition-all ${idx === 0 ? 'border-slate-900 scale-110' : 'border-transparent hover:scale-105'}" 
                style="background-color: ${c.hex};" 
                title="${c.name}">
              </button>
            `).join('')}
          </div>

          <!-- Price Tag -->
          <div class="flex items-baseline gap-2">
            <span class="text-xs text-slate-400 line-through">${product.originalPrice} ${t.collection.currency}</span>
            <span class="text-base font-extrabold text-slate-900 font-sans">${product.price} <span class="text-xs font-bold text-cyan-600">${t.collection.currency}</span></span>
          </div>

        </div>

      </div>

    </div>
  `;
}
