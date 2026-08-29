// EyewearVisual Component: Ultra-refined optical glasses with photorealistic 3D render & optical lens flare
export function renderEyewearVisual() {
  return `
    <div id="eyewear-container" class="relative w-full max-w-3xl mx-auto flex items-center justify-center pointer-events-none transition-transform duration-300 ease-out">
      
      <!-- Ambient Cyan & Ice Glow Behind Glasses -->
      <div class="absolute w-3/4 h-56 bg-cyan-400/20 blur-3xl rounded-full -z-10 animate-pulse pointer-events-none"></div>

      <!-- Photorealistic Front-Facing Eyewear Image Render -->
      <div class="relative w-full max-w-xl px-2 filter drop-shadow-2xl">
        <img 
          src="./images/hero_glasses_front.jpg" 
          alt="Opti-Look Precision Turquoise Eyewear" 
          class="w-full h-auto object-contain mix-blend-multiply filter contrast-105 brightness-100 transform transition-transform duration-500 hover:scale-105"
        />

        <!-- Subtle Animated Lens Glare Highlights Overlay -->
        <div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
          <div class="w-full h-full bg-gradient-to-tr from-transparent via-cyan-300/10 to-transparent rounded-full animate-float"></div>
        </div>
      </div>

    </div>
  `;
}
