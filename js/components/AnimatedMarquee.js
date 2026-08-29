// AnimatedMarquee Component: High-performance dual-layer moving typography behind glasses
export function renderAnimatedMarquee(t) {
  const marqueeText = t.hero.marqueeText;
  const repeatedText = `${marqueeText} ${marqueeText} ${marqueeText} ${marqueeText}`;
  
  return `
    <div class="absolute inset-0 flex flex-col justify-center items-center overflow-hidden pointer-events-none select-none -z-10 opacity-70">
      
      <!-- Primary Marquee Layer (Faster, Higher Contrast) -->
      <div class="w-full overflow-hidden whitespace-nowrap mb-6 transform -rotate-1">
        <div class="animate-marquee-primary text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-slate-200/80 uppercase font-editorial">
          <span>${repeatedText}</span>
          <span aria-hidden="true">${repeatedText}</span>
        </div>
      </div>

      <!-- Secondary Marquee Layer (Slower, Subtle Depth, Opposite Angle) -->
      <div class="w-full overflow-hidden whitespace-nowrap mt-4 transform rotate-1">
        <div class="animate-marquee-secondary text-4xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-100/90 uppercase">
          <span>${repeatedText}</span>
          <span aria-hidden="true">${repeatedText}</span>
        </div>
      </div>

    </div>
  `;
}
