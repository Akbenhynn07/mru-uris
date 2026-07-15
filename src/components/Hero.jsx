import FadeInSection from './FadeInSection';
import HeroSphere from './HeroSphere';

export default function Hero({ startAnimation }) {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 bg-radial-glow overflow-hidden"
    >
      {/* Malla Reddy University's */}
      <FadeInSection>
        <p className="text-[#a3a3ab] text-lg sm:text-xl font-semibold tracking-wide mb-3">
          Malla Reddy University's
        </p>
      </FadeInSection>

      {/* Title & Globe Wrapper */}
      <div className="relative w-full max-w-5xl mx-auto flex items-center justify-center min-h-[360px] my-4">
        {/* Globe behind the text */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none overflow-hidden">
          {startAnimation && <HeroSphere />}
        </div>

        {/* Heading in front */}
        <FadeInSection delay={120} className="relative z-10 pointer-events-none">
          <h1 className="font-black text-[clamp(32px,6vw,72px)] leading-tight text-metallic flex flex-col items-center">
            <span className="block">Undergraduate Research</span>
            <span className="block text-[#2dd4bf] my-1 font-semibold">&amp;</span>
            <span className="block">Innovative Society</span>
          </h1>
        </FadeInSection>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[2px] uppercase text-[#8a8a92]">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#2b2b32] to-transparent" />
      </div>
    </section>
  );
}
