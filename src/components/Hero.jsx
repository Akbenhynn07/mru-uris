import FadeInSection from './FadeInSection';
import HeroSphere from './HeroSphere';

export default function Hero({ startAnimation }) {
  const line1Words = ['Undergraduate', 'Research'];
  const line2Word = '&';
  const line3Words = ['Innovation', 'Society'];

  // Global index tracking to stagger continuous glowing animation across all letters
  let charCounter = 0;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 bg-radial-glow overflow-hidden"
    >
      <style>{`
        @keyframes continuousLetterGlow {
          0%, 100% {
            color: #d1d5db;
            text-shadow: 0 0 2px rgba(255, 255, 255, 0.05);
            transform: translateY(0px) scale(1);
          }
          10%, 25% {
            color: #2dd4bf;
            text-shadow:
              0 0 12px rgba(45, 212, 191, 0.95),
              0 0 24px rgba(45, 212, 191, 0.75),
              0 0 45px rgba(45, 212, 191, 0.5),
              0 0 70px rgba(45, 212, 191, 0.3);
            transform: translateY(-2px) scale(1.05);
          }
          38%, 95% {
            color: #d1d5db;
            text-shadow: 0 0 2px rgba(255, 255, 255, 0.05);
            transform: translateY(0px) scale(1);
          }
        }

        .glow-letter {
          display: inline-block;
          animation: continuousLetterGlow 3.8s ease-in-out infinite;
          will-change: transform, text-shadow, color;
        }
      `}</style>

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

        {/* Heading in front with continuous letter-by-letter glow */}
        <FadeInSection delay={120} className="relative z-10 pointer-events-none">
          <h1 className="font-black text-[clamp(32px,6vw,72px)] leading-tight flex flex-col items-center select-none">
            {/* Line 1: Undergraduate Research */}
            <span className="block flex flex-wrap justify-center gap-x-4 sm:gap-x-5">
              {line1Words.map((word, wIdx) => (
                <span key={`l1-w-${wIdx}`} className="inline-block whitespace-nowrap">
                  {word.split('').map((char) => {
                    const idx = charCounter++;
                    return (
                      <span
                        key={`char-${idx}`}
                        className="glow-letter"
                        style={{
                          animationDelay: `${idx * 0.08}s`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              ))}
            </span>

            {/* Line 2: & */}
            <span className="block my-1 font-semibold">
              {(() => {
                const idx = charCounter++;
                return (
                  <span
                    className="glow-letter text-[#2dd4bf]"
                    style={{
                      animationDelay: `${idx * 0.08}s`,
                    }}
                  >
                    {line2Word}
                  </span>
                );
              })()}
            </span>

            {/* Line 3: Innovation Society */}
            <span className="block flex flex-wrap justify-center gap-x-4 sm:gap-x-5">
              {line3Words.map((word, wIdx) => (
                <span key={`l3-w-${wIdx}`} className="inline-block whitespace-nowrap">
                  {word.split('').map((char) => {
                    const idx = charCounter++;
                    return (
                      <span
                        key={`char-${idx}`}
                        className="glow-letter"
                        style={{
                          animationDelay: `${idx * 0.08}s`,
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                </span>
              ))}
            </span>
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
