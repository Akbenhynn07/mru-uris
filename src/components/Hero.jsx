import FadeInSection from './FadeInSection';

export default function Hero() {
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

      {/* Undergraduate Research and Innovation Society */}
      <FadeInSection delay={120}>
        <h1 className="font-black text-[clamp(32px,6vw,72px)] leading-tight text-metallic max-w-3xl mx-auto">
          Undergraduate Research and Innovation Society
        </h1>
      </FadeInSection>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[2px] uppercase text-[#8a8a92]">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#2b2b32] to-transparent" />
      </div>
    </section>
  );
}
