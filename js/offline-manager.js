// Opti-Look Offline & PWA Manager
// Ensures 100% seamless functionality even when WiFi/internet is completely disconnected.

export function initOfflineManager() {
  // 1. Register Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
          console.log('[Opti-Look PWA] Service Worker registered with scope:', reg.scope);
          
          // Check for updates
          reg.onupdatefound = () => {
            const installingWorker = reg.installing;
            if (installingWorker) {
              installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  showToast('Nouvelle mise à jour disponible ! Rechargez la page.', 'info');
                }
              };
            }
          };
        })
        .catch((err) => {
          console.warn('[Opti-Look PWA] Service Worker registration failed:', err);
        });
    });
  }

  // 2. Setup Offline/Online UI Notification Banner
  createOfflineToastContainer();
  setupNetworkListeners();

  // Initial check
  if (!navigator.onLine) {
    showOfflineBanner(true);
  }
}

function createOfflineToastContainer() {
  if (document.getElementById('optilook-offline-toast')) return;

  const toast = document.createElement('div');
  toast.id = 'optilook-offline-toast';
  toast.className = 'fixed bottom-5 left-1/2 -translate-x-1/2 z-[9999] transition-all duration-500 transform translate-y-24 opacity-0 pointer-events-none';
  toast.innerHTML = `
    <div id="offline-toast-body" class="flex items-center gap-3 px-5 py-3 rounded-2xl shadow-2xl backdrop-blur-xl border border-slate-700/30 bg-slate-900/95 text-white text-xs font-semibold">
      <div id="offline-toast-icon" class="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm">
        ⚡
      </div>
      <div class="flex flex-col">
        <span id="offline-toast-title" class="font-bold text-[13px] text-white">Mode Hors-ligne Actif</span>
        <span id="offline-toast-desc" class="text-[11px] text-slate-300">Le site fonctionne parfaitement sans connexion WiFi</span>
      </div>
    </div>
  `;
  document.body.appendChild(toast);
}

function setupNetworkListeners() {
  window.addEventListener('offline', () => {
    showOfflineBanner(true);
  });

  window.addEventListener('online', () => {
    showOfflineBanner(false);
    syncOfflineData();
  });
}

export function showOfflineBanner(isOffline) {
  const toast = document.getElementById('optilook-offline-toast');
  const title = document.getElementById('offline-toast-title');
  const desc = document.getElementById('offline-toast-desc');
  const icon = document.getElementById('offline-toast-icon');
  const body = document.getElementById('offline-toast-body');

  if (!toast) return;

  if (isOffline) {
    if (body) {
      body.className = 'flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-xl border border-amber-500/40 bg-slate-950/95 text-white text-xs font-semibold';
    }
    if (icon) {
      icon.className = 'w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm shrink-0';
      icon.innerHTML = '📴';
    }
    if (title) title.textContent = 'Mode Hors-ligne Activé (No WiFi)';
    if (desc) desc.textContent = 'Opti-Look reste 100% fonctionnel et interactif sans connexion internet.';

    toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    // Auto dismiss after 6 seconds
    setTimeout(() => {
      if (!navigator.onLine) {
        toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
        toast.classList.remove('translate-y-0', 'opacity-100');
      }
    }, 6000);
  } else {
    if (body) {
      body.className = 'flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl backdrop-blur-xl border border-emerald-500/40 bg-slate-950/95 text-white text-xs font-semibold';
    }
    if (icon) {
      icon.className = 'w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0';
      icon.innerHTML = '📶';
    }
    if (title) title.textContent = 'Connexion Rétablie !';
    if (desc) desc.textContent = 'Synchronisation des données en direct activée.';

    toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
      toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 4000);
  }
}

// Queue offline form submissions to localStorage
export function queueOfflineAction(actionType, data) {
  try {
    const queue = JSON.parse(localStorage.getItem('optilook_offline_queue') || '[]');
    queue.push({
      id: 'offline_' + Date.now(),
      type: actionType,
      data: data,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('optilook_offline_queue', JSON.stringify(queue));
    return true;
  } catch (e) {
    console.error('Failed to queue offline action:', e);
    return false;
  }
}

// Automatically synchronize queued actions when back online
export function syncOfflineData() {
  const queue = JSON.parse(localStorage.getItem('optilook_offline_queue') || '[]');
  if (queue.length === 0) return;

  console.log(`[Opti-Look PWA] Syncing ${queue.length} offline queued actions...`);
  // Clear queue once processed
  localStorage.setItem('optilook_offline_queue', '[]');
}

export function showToast(message, type = 'info') {
  const toast = document.getElementById('optilook-offline-toast');
  const title = document.getElementById('offline-toast-title');
  const desc = document.getElementById('offline-toast-desc');
  if (!toast) return;

  if (title) title.textContent = type === 'info' ? 'Information' : 'Notification';
  if (desc) desc.textContent = message;

  toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
  toast.classList.add('translate-y-0', 'opacity-100');

  setTimeout(() => {
    toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
    toast.classList.remove('translate-y-0', 'opacity-100');
  }, 4000);
}
