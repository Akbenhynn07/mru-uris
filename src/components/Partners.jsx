import FadeInSection from './FadeInSection';

const partners = [
  {
    name: 'IEEE',
    fullName: 'Institute of Electrical and Electronics Engineers',
    tagline: 'Advancing Technology for Humanity',
    href: 'https://www.ieee.org/',
    logo: (
      <img 
        src="/ieee-partner.png" 
        alt="IEEE - Advancing Technology for Humanity" 
        className="h-14 sm:h-16 w-auto object-contain select-none"
      />
    ),
  },
  {
    name: 'ACM',
    fullName: 'Association for Computing Machinery',
    tagline: 'Advancing Computing as a Science & Profession',
    href: 'https://www.acm.org/',
    logo: (
      <img 
        src="/acm-partner.png" 
        alt="Association for Computing Machinery" 
        className="h-14 sm:h-16 w-auto object-contain select-none"
      />
    ),
  },
];

export default function Partners() {
  return (
    <section id="partners" className="relative z-10 py-28 px-6">
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto">

        <FadeInSection>
          <div className="text-center mb-16">
            <p className="eyebrow text-[#2dd4bf] mb-4 tracking-[4px]">Collaborations</p>
            <h2 className="font-extrabold text-[clamp(26px,3.5vw,44px)] text-metallic leading-tight max-w-xl mx-auto">
              Our Partners
            </h2>
            <p className="text-[#a3a3ab] text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              We're proud to collaborate with world-class organizations that share our vision for advancing research and innovation.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {partners.map((partner, i) => (
            <FadeInSection key={partner.name} delay={i * 120}>
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card-hover border border-[#2b2b32] rounded-2xl p-8 sm:p-10 bg-[#14141c]/40 flex flex-col items-center justify-center text-center gap-6 h-full group transition-all duration-300 hover:border-[#2dd4bf]/30"
              >
                {/* Logo container with white background for visibility */}
                <div className="bg-white/95 rounded-xl px-6 py-5 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  {partner.logo}
                </div>

                {/* Partner info */}
                <div>
                  <h3 className="font-bold text-white text-lg mb-1">{partner.name}</h3>
                  <p className="text-[#a3a3ab] text-xs sm:text-sm leading-relaxed">{partner.fullName}</p>
                  <p className="text-[#2dd4bf]/70 text-[10px] sm:text-xs mt-2 italic tracking-wide">{partner.tagline}</p>
                </div>

                {/* Visit link hint */}
                <span className="text-[10px] uppercase tracking-[2px] text-[#8a8a92] group-hover:text-[#2dd4bf] transition-colors duration-200">
                  Visit Website →
                </span>
              </a>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
