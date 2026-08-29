// Opti-Look Admin Suite v2.6 Logic
import { featuredProducts } from '../data/products.js';
import { initOfflineManager } from '../offline-manager.js';

// Local storage state for live editing
let adminProducts = JSON.parse(localStorage.getItem('optilook_admin_products')) || [...featuredProducts];

let adminAppointments = JSON.parse(localStorage.getItem('optilook_admin_appointments')) || [
  {
    id: 1,
    clinic_location: 'Casablanca — Boulevard d\'Anfa',
    appointment_date: '2026-08-28',
    time_slot: '10:30',
    patient_name: 'Amine El Idrissi',
    patient_phone: '+212661223344',
    patient_email: 'amine.elidrissi@gmail.com',
    status: 'confirmed'
  },
  {
    id: 2,
    clinic_location: 'Rabat — Agdal Avenue des Nations',
    appointment_date: '2026-08-29',
    time_slot: '15:00',
    patient_name: 'Sara Benjelloun',
    patient_phone: '+212662445566',
    patient_email: 'sara.benj@outlook.com',
    status: 'pending'
  },
  {
    id: 3,
    clinic_location: 'Marrakech — Guéliz Plaza',
    appointment_date: '2026-08-30',
    time_slot: '11:45',
    patient_name: 'Youssef Mansouri',
    patient_phone: '+212663778899',
    patient_email: 'youssef.m@gmail.com',
    status: 'confirmed'
  }
];

let adminPrescriptions = [
  {
    id: 101,
    patient_name: 'Fatima-Zahra Bennani',
    patient_phone: '+212661998877',
    date: '2026-08-26',
    od_sphere: '-1.75',
    od_cylinder: '-0.50',
    od_axis: '85°',
    og_sphere: '-2.00',
    og_cylinder: '-0.75',
    og_axis: '90°',
    pd: '63mm',
    file: 'ordonnance_bennani_2026.pdf',
    status: 'pending'
  },
  {
    id: 102,
    patient_name: 'Mehdi Chraibi',
    patient_phone: '+212665112233',
    date: '2026-08-25',
    od_sphere: '+0.75',
    od_cylinder: '0.00',
    od_axis: '0°',
    og_sphere: '+1.00',
    og_cylinder: '-0.25',
    og_axis: '175°',
    pd: '65mm',
    file: 'ordonnance_chraibi_scan.jpg',
    status: 'validated'
  }
];

let adminOrders = [
  {
    order_number: 'OL-2026-894',
    customer_name: 'Driss Tazi',
    city: 'Casablanca',
    phone: '212661882244',
    items: 'Forma One Titane + Traitement HD',
    total: 2150,
    payment: 'Paiement à la Livraison',
    status: 'En Livraison'
  },
  {
    order_number: 'OL-2026-893',
    customer_name: 'Nadia Laraki',
    city: 'Rabat',
    phone: '212662991133',
    items: 'Aster Optical Turquoise',
    total: 1450,
    payment: 'Carte Bancaire CMI',
    status: 'Expédiée'
  },
  {
    order_number: 'OL-2026-892',
    customer_name: 'Omar Kettani',
    city: 'Tanger',
    phone: '212663554422',
    items: 'Aura Magnetic Clip Duo',
    total: 1950,
    payment: 'Paiement à la Livraison',
    status: 'Préparation'
  }
];

// Initialize Admin Dashboard
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  renderProductsTable();
  renderAppointmentsGrid('all');
  renderPrescriptionsGrid();
  renderOrdersTable();
  renderOverviewStream();
  initModals();
  initSearch();
  if (window.lucide) window.lucide.createIcons();
});

// Tab Navigation
function initTabs() {
  const tabBtns = document.querySelectorAll('.nav-tab-btn, .nav-quick-link');
  const tabContents = document.querySelectorAll('.admin-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.dataset.tab;
      
      tabBtns.forEach(b => {
        if (b.classList.contains('nav-tab-btn')) {
          b.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/30');
          b.classList.add('text-slate-300');
        }
      });

      const activeBtn = document.querySelector(`.nav-tab-btn[data-tab="${targetTab}"]`);
      if (activeBtn) {
        activeBtn.classList.add('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/30');
        activeBtn.classList.remove('text-slate-300');
      }

      tabContents.forEach(content => {
        content.classList.add('hidden');
        if (content.id === `tab-${targetTab}`) {
          content.classList.remove('hidden');
        }
      });

      if (window.lucide) window.lucide.createIcons();
    });
  });
}

// 1. Render Products Table
function renderProductsTable() {
  const tbody = document.getElementById('products-table-body');
  const countBadge = document.getElementById('badge-products-count');
  if (countBadge) countBadge.textContent = adminProducts.length;

  if (!tbody) return;

  tbody.innerHTML = adminProducts.map((p, index) => `
    <tr class="hover:bg-slate-800/40 transition-colors">
      <td class="px-6 py-4 flex items-center gap-3">
        <div class="w-12 h-10 rounded-xl bg-slate-900 border border-slate-700/80 p-1 flex items-center justify-center shrink-0">
          <img src="${p.image || './images/hero_glasses_black-transparent.png.png'}" class="w-full h-full object-contain" alt="${p.name}">
        </div>
        <div>
          <span class="block font-bold text-white">${p.name}</span>
          <span class="text-[10px] text-slate-400">ID: #${p.id || index + 1}</span>
        </div>
      </td>
      <td class="px-6 py-4">
        <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
          ${p.category}
        </span>
      </td>
      <td class="px-6 py-4 text-slate-300">
        <span class="block font-medium">${p.material || 'Titane & Bio-Acétate'}</span>
        <span class="text-[10px] text-slate-400">${p.shape || 'Pantoscope'}</span>
      </td>
      <td class="px-6 py-4 font-bold text-white">
        ${p.price} <span class="text-xs text-cyan-400 font-bold">DH</span>
      </td>
      <td class="px-6 py-4">
        <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          En Stock
        </span>
      </td>
      <td class="px-6 py-4 text-right">
        <button class="btn-delete-product p-2 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-slate-400 hover:text-rose-400 transition-colors" data-id="${p.id || index}">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </td>
    </tr>
  `).join('');

  // Bind Delete Buttons
  document.querySelectorAll('.btn-delete-product').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      if (confirm('Voulez-vous vraiment retirer cette monture du catalogue ?')) {
        adminProducts = adminProducts.filter((p, idx) => p.id != id && idx != id);
        localStorage.setItem('optilook_admin_products', JSON.stringify(adminProducts));
        renderProductsTable();
        if (window.lucide) window.lucide.createIcons();
      }
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

// 2. Render Appointments Grid
function renderAppointmentsGrid(filter = 'all') {
  const container = document.getElementById('appointments-grid-container');
  if (!container) return;

  const filtered = filter === 'all' 
    ? adminAppointments 
    : adminAppointments.filter(a => a.clinic_location.toLowerCase().includes(filter.toLowerCase()));

  container.innerHTML = filtered.map(a => `
    <div class="bg-[#131D31] p-6 rounded-3xl border border-slate-800 shadow-sm flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="text-[11px] font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5">
            <i data-lucide="map-pin" class="w-3.5 h-3.5"></i>
            ${a.clinic_location.split('—')[0]}
          </span>
          <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${a.status === 'confirmed' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}">
            ${a.status === 'confirmed' ? '✓ Confirmé' : 'En Attente'}
          </span>
        </div>

        <h3 class="text-base font-bold text-white mb-1">${a.patient_name}</h3>
        <p class="text-xs text-slate-400 mb-4">${a.patient_phone}</p>

        <div class="p-3 bg-slate-900/60 rounded-2xl border border-slate-800 text-xs space-y-1 text-slate-300">
          <div class="flex justify-between">
            <span class="text-slate-400">Date:</span>
            <span class="font-bold text-white">${a.appointment_date}</span>
          </div>
          <div class="flex justify-between">
            <span class="text-slate-400">Heure:</span>
            <span class="font-bold text-cyan-400">${a.time_slot}</span>
          </div>
        </div>
      </div>

      <div class="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <a href="tel:${a.patient_phone}" class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold flex items-center gap-1.5">
          <i data-lucide="phone" class="w-3.5 h-3.5 text-cyan-400"></i>
          <span>Appeler</span>
        </a>
        <button class="btn-toggle-appointment px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 rounded-xl text-xs font-bold" data-id="${a.id}">
          ${a.status === 'confirmed' ? 'Marquer Terminé' : 'Confirmer RDV'}
        </button>
      </div>
    </div>
  `).join('');

  // Location filter buttons
  document.querySelectorAll('.appointment-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.appointment-filter-btn').forEach(b => {
        b.classList.remove('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/30');
        b.classList.add('bg-slate-800', 'text-slate-300');
      });
      btn.classList.add('active', 'bg-cyan-500/20', 'text-cyan-400', 'border-cyan-500/30');
      btn.classList.remove('bg-slate-800', 'text-slate-300');
      renderAppointmentsGrid(btn.dataset.filter);
    });
  });

  if (window.lucide) window.lucide.createIcons();
}

// 3. Render Prescriptions Grid
function renderPrescriptionsGrid() {
  const container = document.getElementById('prescriptions-grid-container');
  if (!container) return;

  container.innerHTML = adminPrescriptions.map(rx => `
    <div class="bg-[#131D31] p-6 rounded-3xl border border-slate-800 shadow-sm flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-3">
          <span class="text-xs font-bold text-white font-sans">${rx.patient_name}</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold ${rx.status === 'validated' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'}">
            ${rx.status === 'validated' ? '✓ Validée' : 'À Calibrer'}
          </span>
        </div>
        <p class="text-xs text-slate-400 mb-4">${rx.patient_phone} · Reçue le ${rx.date}</p>

        <!-- Prescription Matrix (OD / OG) -->
        <div class="p-3 bg-slate-900/80 rounded-2xl border border-slate-800 text-[11px] space-y-2 mb-4 font-mono">
          <div class="flex justify-between border-b border-slate-800 pb-1 text-slate-400 font-sans font-bold">
            <span>Œil</span>
            <span>Sphère</span>
            <span>Cylindre</span>
            <span>Axe</span>
          </div>
          <div class="flex justify-between text-cyan-300">
            <span class="font-bold text-white font-sans">OD (Droit)</span>
            <span>${rx.od_sphere}</span>
            <span>${rx.od_cylinder}</span>
            <span>${rx.od_axis}</span>
          </div>
          <div class="flex justify-between text-cyan-300">
            <span class="font-bold text-white font-sans">OG (Gauche)</span>
            <span>${rx.og_sphere}</span>
            <span>${rx.og_cylinder}</span>
            <span>${rx.og_axis}</span>
          </div>
          <div class="pt-1 flex justify-between text-slate-400 border-t border-slate-800 font-sans">
            <span>Écart Pupillaire (PD):</span>
            <span class="font-bold text-white font-mono">${rx.pd}</span>
          </div>
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between">
        <span class="text-[10px] text-slate-400 flex items-center gap-1">
          <i data-lucide="file" class="w-3.5 h-3.5 text-cyan-400"></i>
          <span>${rx.file}</span>
        </span>
        <button class="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-400 rounded-xl text-xs font-bold">
          Valider RX
        </button>
      </div>
    </div>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// 4. Render Orders Table with Direct WhatsApp Links
function renderOrdersTable() {
  const tbody = document.getElementById('orders-table-body');
  if (!tbody) return;

  tbody.innerHTML = adminOrders.map(o => `
    <tr class="hover:bg-slate-800/40 transition-colors">
      <td class="px-6 py-4 font-mono font-bold text-white">${o.order_number}</td>
      <td class="px-6 py-4">
        <span class="block font-bold text-white">${o.customer_name}</span>
        <span class="text-[10px] text-slate-400">${o.city}, Maroc</span>
      </td>
      <td class="px-6 py-4 text-slate-300">${o.items}</td>
      <td class="px-6 py-4 font-bold text-white">${o.total} <span class="text-xs text-cyan-400">DH</span></td>
      <td class="px-6 py-4 text-slate-400 text-[11px]">${o.payment}</td>
      <td class="px-6 py-4">
        <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/20 text-cyan-300">
          ${o.status}
        </span>
      </td>
      <td class="px-6 py-4 text-right">
        <a 
          href="https://wa.me/${o.phone}?text=Bonjour%20${encodeURIComponent(o.customer_name)},%20votre%20commande%20Opti-Look%20${o.order_number}%20est%20en%20cours%20de%20livraison%20à%20${encodeURIComponent(o.city)}." 
          target="_blank" 
          class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs rounded-xl shadow-md transition-all"
        >
          <i data-lucide="message-circle" class="w-3.5 h-3.5"></i>
          <span>WhatsApp</span>
        </a>
      </td>
    </tr>
  `).join('');

  if (window.lucide) window.lucide.createIcons();
}

// 5. Overview Dashboard Live Activity Stream
function renderOverviewStream() {
  const apptList = document.getElementById('overview-appointments-list');
  const ordersList = document.getElementById('overview-orders-list');

  if (apptList) {
    apptList.innerHTML = adminAppointments.slice(0, 3).map(a => `
      <div class="p-3 bg-slate-900/60 rounded-2xl border border-slate-800 flex items-center justify-between text-xs">
        <div class="flex items-center gap-3">
          <div class="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
            ${a.time_slot}
          </div>
          <div>
            <span class="block font-bold text-white">${a.patient_name}</span>
            <span class="text-[10px] text-slate-400">${a.clinic_location.split('—')[0]}</span>
          </div>
        </div>
        <span class="text-[10px] font-bold text-emerald-400">✓ Confirmé</span>
      </div>
    `).join('');
  }

  if (ordersList) {
    ordersList.innerHTML = adminOrders.slice(0, 3).map(o => `
      <div class="p-3 bg-slate-900/60 rounded-2xl border border-slate-800 flex items-center justify-between text-xs">
        <div>
          <span class="block font-bold text-white">${o.customer_name}</span>
          <span class="text-[10px] text-slate-400">${o.order_number} · ${o.city}</span>
        </div>
        <span class="font-bold text-cyan-400">${o.total} DH</span>
      </div>
    `).join('');
  }
}

// 6. Product Creation Modal & Form Handling
function initModals() {
  const modal = document.getElementById('product-modal');
  const openBtns = [
    document.getElementById('open-add-product-modal'),
    document.getElementById('open-add-product-modal-top')
  ];
  const closeBtn = document.getElementById('close-product-modal');
  const cancelBtn = document.getElementById('cancel-product-btn');
  const form = document.getElementById('product-form');

  openBtns.forEach(btn => {
    if (btn) btn.addEventListener('click', () => {
      if (modal) modal.classList.replace('hidden', 'flex');
    });
  });

  [closeBtn, cancelBtn].forEach(btn => {
    if (btn) btn.addEventListener('click', () => {
      if (modal) modal.classList.replace('flex', 'hidden');
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const newProduct = {
        id: Date.now(),
        name: document.getElementById('p-name').value,
        category: document.getElementById('p-category').value,
        price: parseFloat(document.getElementById('p-price').value),
        originalPrice: parseFloat(document.getElementById('p-original-price').value) || parseFloat(document.getElementById('p-price').value) * 1.3,
        shape: document.getElementById('p-shape').value,
        material: document.getElementById('p-material').value || 'Titane & Bio-Acétate',
        image: document.getElementById('p-image').value,
        isNew: true,
        rating: 5.0,
        reviewsCount: 1,
        colors: [
          { name: 'Noir Mat', hex: '#0F172A', active: true },
          { name: 'Turquoise', hex: '#36C6C9', active: false }
        ]
      };

      adminProducts.unshift(newProduct);
      localStorage.setItem('optilook_admin_products', JSON.stringify(adminProducts));
      renderProductsTable();

      alert(`✓ La monture "${newProduct.name}" a été ajoutée avec succès au catalogue !`);
      form.reset();
      if (modal) modal.classList.replace('flex', 'hidden');
    });
  }
}

// 7. Global Search Filter
function initSearch() {
  const searchInput = document.getElementById('global-admin-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.toLowerCase().trim();
      if (!q) {
        renderProductsTable();
        return;
      }
      const tbody = document.getElementById('products-table-body');
      const filtered = adminProducts.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q) ||
        (p.material && p.material.toLowerCase().includes(q))
      );

      if (tbody) {
        tbody.innerHTML = filtered.map((p, index) => `
          <tr class="hover:bg-slate-800/40 transition-colors">
            <td class="px-6 py-4 flex items-center gap-3">
              <div class="w-12 h-10 rounded-xl bg-slate-900 border border-slate-700/80 p-1 flex items-center justify-center shrink-0">
                <img src="${p.image || './images/hero_glasses_black-transparent.png.png'}" class="w-full h-full object-contain" alt="${p.name}">
              </div>
              <div>
                <span class="block font-bold text-white">${p.name}</span>
                <span class="text-[10px] text-slate-400">ID: #${p.id || index + 1}</span>
              </div>
            </td>
            <td class="px-6 py-4">
              <span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                ${p.category}
              </span>
            </td>
            <td class="px-6 py-4 text-slate-300">${p.material || 'Titane'}</td>
            <td class="px-6 py-4 font-bold text-white">${p.price} DH</td>
            <td class="px-6 py-4">
              <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300">
                En Stock
              </span>
            </td>
            <td class="px-6 py-4 text-right">
              <button class="btn-delete-product p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-rose-400" data-id="${p.id || index}">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </td>
          </tr>
        `).join('');
        if (window.lucide) window.lucide.createIcons();
      }
    });
  }
}

// Initialize Offline Manager for Admin Dashboard
initOfflineManager();
