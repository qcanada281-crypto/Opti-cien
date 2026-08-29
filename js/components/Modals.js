// Modals Component: Quick View, Cart Drawer, Appointment Scheduler, Prescription Uploader, Virtual Try-on, and Quiz
export function renderModals(t) {
  const m = t.modals;

  return `
    <!-- 1. CART DRAWER OVERLAY -->
    <div id="cart-drawer-overlay" class="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 hidden transition-opacity duration-300">
      <div id="cart-drawer" class="fixed top-0 right-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col justify-between transform translate-x-full transition-transform duration-300">
        
        <!-- Cart Header -->
        <div class="p-6 border-b border-slate-100 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <i data-lucide="shopping-bag" class="w-5 h-5 text-cyan-600"></i>
            <h3 class="text-lg font-bold text-slate-900 font-editorial">${m.cartTitle}</h3>
          </div>
          <button id="close-cart-btn" class="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700 transition-colors">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <!-- Cart Items List -->
        <div id="cart-items-container" class="flex-1 overflow-y-auto p-6 space-y-4">
          <!-- Dynamic Items Injected via JS -->
        </div>

        <!-- Cart Footer / Summary -->
        <div class="p-6 border-t border-slate-100 bg-slate-50/50 space-y-4">
          <div class="flex items-center justify-between text-sm">
            <span class="text-slate-600 font-medium">${m.subtotal}</span>
            <span id="cart-subtotal-price" class="text-xl font-extrabold text-slate-950 font-sans">0 DH</span>
          </div>

          <div class="flex items-center gap-2 text-[11px] text-emerald-700 bg-emerald-50 px-3 py-2 rounded-xl">
            <i data-lucide="truck" class="w-4 h-4"></i>
            <span>Livraison Gratuite partout au Maroc & Étui Luxe Offert</span>
          </div>

          <button id="checkout-btn" class="w-full py-4 bg-slate-900 hover:bg-cyan-600 text-white rounded-2xl text-xs uppercase tracking-wider font-bold shadow-xl hover:shadow-cyan-500/25 btn-turquoise-sweep transition-all flex items-center justify-center gap-2">
            <i data-lucide="credit-card" class="w-4 h-4 text-cyan-400"></i>
            <span>${m.checkout}</span>
          </button>
        </div>

      </div>
    </div>

    <!-- 2. APPOINTMENT BOOKING MODAL -->
    <div id="booking-modal" class="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 hidden items-center justify-center p-4">
      <div class="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto animate-float-once">
        
        <div class="flex items-center justify-between pb-4 border-b border-slate-100">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-cyan-100 text-cyan-700 flex items-center justify-center">
              <i data-lucide="calendar" class="w-4 h-4"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-900 font-editorial">${m.bookingTitle}</h3>
          </div>
          <button id="close-booking-modal" class="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <form id="booking-form" class="mt-6 space-y-4 text-xs">
          <div>
            <label class="block font-bold text-slate-700 uppercase mb-1">Clinique / Boutique Opti-Look</label>
            <select class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 bg-white">
              <option>Casablanca — Boulevard d'Anfa (Flagship)</option>
              <option>Casablanca — Maarif</option>
              <option>Rabat — Agdal</option>
              <option>Marrakech — Guéliz</option>
            </select>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 uppercase mb-1">${m.selectDate}</label>
              <input type="date" required class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500">
            </div>
            <div>
              <label class="block font-bold text-slate-700 uppercase mb-1">${m.selectTime}</label>
              <select class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500 bg-white">
                <option>10:00 - 10:45 (Matin)</option>
                <option>11:30 - 12:15 (Matin)</option>
                <option>15:00 - 15:45 (Après-midi)</option>
                <option>17:00 - 17:45 (Après-midi)</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 uppercase mb-1">${m.fullName}</label>
              <input type="text" required placeholder="Votre nom" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500">
            </div>
            <div>
              <label class="block font-bold text-slate-700 uppercase mb-1">${m.phone}</label>
              <input type="tel" required placeholder="06 XX XX XX XX" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-cyan-500">
            </div>
          </div>

          <button type="submit" class="w-full mt-4 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
            <i data-lucide="check" class="w-4 h-4"></i>
            <span>${m.confirmBooking}</span>
          </button>
        </form>

      </div>
    </div>

    <!-- 3. PRESCRIPTION UPLOADER MODAL -->
    <div id="rx-modal" class="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 hidden items-center justify-center p-4">
      <div class="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 max-h-[90vh] overflow-y-auto">
        
        <div class="flex items-center justify-between pb-4 border-b border-slate-100">
          <div class="flex items-center gap-2">
            <div class="w-8 h-8 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center">
              <i data-lucide="file-text" class="w-4 h-4"></i>
            </div>
            <h3 class="text-xl font-bold text-slate-900 font-editorial">${m.prescriptionTitle}</h3>
          </div>
          <button id="close-rx-modal" class="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-700">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <form id="rx-form" class="mt-6 space-y-5 text-xs">
          <!-- File Drop Area -->
          <div class="border-2 border-dashed border-slate-200 hover:border-cyan-500 rounded-2xl p-6 text-center cursor-pointer transition-colors bg-slate-50/50">
            <i data-lucide="upload-cloud" class="w-10 h-10 text-cyan-600 mx-auto mb-2"></i>
            <span class="font-bold text-slate-800 block">${m.uploadPhoto}</span>
            <span class="text-[11px] text-slate-400">Glissez votre ordonnance ou cliquez pour parcourir (JPG, PNG, PDF)</span>
            <input type="file" class="hidden" id="rx-file-input">
          </div>

          <div class="text-center font-bold text-slate-400 uppercase text-[10px]">— OU SAISIE MANUELLE —</div>

          <!-- Oeil Droit (OD) -->
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <span class="font-bold text-slate-900 text-xs block mb-2">Œil Droit (OD)</span>
            <div class="grid grid-cols-3 gap-2">
              <div>
                <label class="text-[10px] text-slate-500 font-bold">${m.sphere}</label>
                <input type="text" placeholder="-1.50" class="w-full p-2 border rounded-lg">
              </div>
              <div>
                <label class="text-[10px] text-slate-500 font-bold">${m.cylinder}</label>
                <input type="text" placeholder="-0.50" class="w-full p-2 border rounded-lg">
              </div>
              <div>
                <label class="text-[10px] text-slate-500 font-bold">${m.axis}</label>
                <input type="text" placeholder="90°" class="w-full p-2 border rounded-lg">
              </div>
            </div>
          </div>

          <!-- Oeil Gauche (OG) -->
          <div class="p-4 rounded-xl bg-slate-50 border border-slate-100">
            <span class="font-bold text-slate-900 text-xs block mb-2">Œil Gauche (OG)</span>
            <div class="grid grid-cols-3 gap-2">
              <div>
                <label class="text-[10px] text-slate-500 font-bold">${m.sphere}</label>
                <input type="text" placeholder="-1.75" class="w-full p-2 border rounded-lg">
              </div>
              <div>
                <label class="text-[10px] text-slate-500 font-bold">${m.cylinder}</label>
                <input type="text" placeholder="-0.75" class="w-full p-2 border rounded-lg">
              </div>
              <div>
                <label class="text-[10px] text-slate-500 font-bold">${m.axis}</label>
                <input type="text" placeholder="85°" class="w-full p-2 border rounded-lg">
              </div>
            </div>
          </div>

          <button type="submit" class="w-full py-4 bg-slate-900 hover:bg-cyan-600 text-white font-bold uppercase tracking-wider rounded-xl shadow-lg transition-all">
            ${m.savePrescription}
          </button>
        </form>

      </div>
    </div>

    <!-- 4. VIRTUAL TRY-ON WEBCAM SIMULATION MODAL -->
    <div id="tryon-modal" class="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 hidden items-center justify-center p-4">
      <div class="bg-slate-900 text-white rounded-3xl max-w-2xl w-full p-6 shadow-2xl border border-slate-800 relative">
        <button id="close-tryon-modal" class="absolute top-6 right-6 p-2 bg-slate-800 hover:bg-slate-700 rounded-full text-slate-400 hover:text-white">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>

        <div class="flex items-center gap-2 mb-4">
          <span class="w-2.5 h-2.5 rounded-full bg-rose-500 animate-ping"></span>
          <h3 class="text-lg font-bold font-editorial">Essayage Virtuel Live (AI Face Tracker)</h3>
        </div>

        <!-- Camera / Canvas Frame Preview -->
        <div class="relative w-full aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 flex items-center justify-center">
          <div class="text-center p-6">
            <div class="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center mb-3 animate-pulse">
              <i data-lucide="camera" class="w-8 h-8"></i>
            </div>
            <p class="text-sm font-semibold text-slate-200">Simulation d'ajustement en temps réel</p>
            <p class="text-xs text-slate-400 mt-1">Calibrage pupillaire automatique (PD: 63mm)</p>
          </div>
          
          <!-- Virtual Glass overlay sample -->
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-85 scale-125">
            <div class="w-72 h-auto">
              <svg viewBox="0 0 400 160" fill="none" class="w-full h-auto drop-shadow-2xl">
                <ellipse cx="115" cy="80" rx="72" ry="60" stroke="#36C6C9" stroke-width="8" fill="rgba(54, 198, 201, 0.2)" />
                <ellipse cx="285" cy="80" rx="72" ry="60" stroke="#36C6C9" stroke-width="8" fill="rgba(54, 198, 201, 0.2)" />
                <path d="M 187 70 C 193 55, 207 55, 213 70" stroke="#C5A880" stroke-width="7" />
              </svg>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between mt-4">
          <div class="flex items-center gap-2">
            <span class="text-xs text-slate-400">Modèle sélectionné :</span>
            <span class="text-xs font-bold text-cyan-400">Aster Optical (Turquoise)</span>
          </div>
          <button id="tryon-add-cart" class="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold uppercase tracking-wider rounded-xl">
            Ajouter au panier
          </button>
        </div>

      </div>
    </div>
  `;
}
