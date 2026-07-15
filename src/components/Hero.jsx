import FadeInSection from './FadeInSection';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 bg-radial-glow overflow-hidden"
    >
      {/* Top eyebrow */}
      <FadeInSection>
        <div className="flex items-center gap-3 mb-4">
          <span className="glow-dot" />
          <span className="eyebrow text-[#a3a3ab] tracking-[3px]">Malla Reddy University</span>
          <span className="glow-dot" />
        </div>
      </FadeInSection>

      {/* "presents" */}
      <FadeInSection delay={80}>
        <p className="text-[#8a8a92] text-sm italic font-semibold mb-6 tracking-wide">presents</p>
      </FadeInSection>

      {/* Society name — large hero heading */}
      <FadeInSection delay={160}>
        <h1 className="font-extrabold text-[clamp(22px,3.8vw,44px)] leading-tight text-metallic max-w-3xl mx-auto mb-6 px-2">
          Malla Reddy University's Undergraduate Research and Innovation Society
        </h1>
      </FadeInSection>



      {/* Recruitment headline */}
      <FadeInSection delay={300}>
        <h2 className="font-extrabold text-[clamp(28px,5vw,52px)] leading-tight mb-3 max-w-3xl mx-auto">
          Recruitment of{' '}
          <span style={{ color: '#2dd4bf' }}>Board Members</span>
        </h2>
      </FadeInSection>

      {/* Class label */}
      <FadeInSection delay={360}>
        <div className="inline-flex items-center border border-[#2b2b32] rounded-full px-4 py-1 text-xs font-bold tracking-[2px] text-[#8a8a92] uppercase mb-8">
          Class 26'
        </div>
      </FadeInSection>

      {/* Tagline */}
      <FadeInSection delay={420}>
        <p className="font-semibold italic text-base sm:text-lg text-[#a3a3ab] max-w-xl mx-auto mb-10 leading-relaxed">
          Your curiosity. Our platform.{' '}
          <span style={{ color: '#2dd4bf' }}>One year to make it count.</span>
        </p>
      </FadeInSection>

      {/* CTA button */}
      <FadeInSection delay={480}>
        <a
          href="#contact"
          className="btn-gradient px-8 py-3.5 rounded-full text-base font-bold transition-all duration-200 hover:scale-105 hover:shadow-[0_0_30px_rgba(45,212,191,0.4)] inline-block"
        >
          Apply Now →
        </a>
      </FadeInSection>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[2px] uppercase text-[#8a8a92]">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#2b2b32] to-transparent" />
      </div>
    </section>
  );
}
