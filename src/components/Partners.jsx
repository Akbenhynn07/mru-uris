import FadeInSection from './FadeInSection';

const partners = [
  {
    name: 'IEEE',
    fullName: 'Institute of Electrical and Electronics Engineers',
    tagline: 'Advancing Technology for Humanity',
    href: 'https://www.ieee.org/',
    logo: (
      <svg viewBox="0 0 320 140" className="h-16 sm:h-20 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Diamond shape */}
        <g transform="translate(20, 5)">
          <path d="M45 0 L90 45 L45 90 L0 45 Z" fill="none" stroke="#0076A8" strokeWidth="4"/>
          <circle cx="45" cy="45" r="28" fill="none" stroke="#0076A8" strokeWidth="3"/>
          {/* Arrow/antenna inside circle */}
          <line x1="45" y1="22" x2="45" y2="68" stroke="#0076A8" strokeWidth="3"/>
          <polygon points="45,18 39,28 51,28" fill="#0076A8"/>
          <line x1="35" y1="40" x2="55" y2="40" stroke="#0076A8" strokeWidth="2"/>
          <line x1="37" y1="48" x2="53" y2="48" stroke="#0076A8" strokeWidth="2"/>
          <circle cx="45" cy="62" r="4" fill="#0076A8"/>
        </g>
        {/* IEEE Text */}
        <text x="125" y="55" fontFamily="'Poppins', sans-serif" fontWeight="900" fontSize="50" fill="#0076A8" letterSpacing="2">IEEE</text>
        {/* Tagline */}
        <text x="125" y="80" fontFamily="'Poppins', sans-serif" fontWeight="400" fontStyle="italic" fontSize="13" fill="#0076A8" letterSpacing="0.5">Advancing Technology</text>
        <text x="125" y="96" fontFamily="'Poppins', sans-serif" fontWeight="400" fontStyle="italic" fontSize="13" fill="#0076A8" letterSpacing="0.5">for Humanity</text>
      </svg>
    ),
  },
  {
    name: 'ACM',
    fullName: 'Association for Computing Machinery',
    tagline: 'Advancing Computing as a Science & Profession',
    href: 'https://www.acm.org/',
    logo: (
      <svg viewBox="0 0 380 110" className="h-16 sm:h-20 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Diamond shape */}
        <g transform="translate(5, 5)">
          <path d="M50 0 L100 50 L50 100 L0 50 Z" fill="url(#acm-gradient)" />
          <defs>
            <linearGradient id="acm-gradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#46BDE8"/>
              <stop offset="100%" stopColor="#0090C4"/>
            </linearGradient>
          </defs>
          {/* Circle inside diamond */}
          <circle cx="50" cy="50" r="32" fill="none" stroke="white" strokeWidth="3.5" opacity="0.9"/>
          {/* ACM text inside circle */}
          <text x="50" y="58" fontFamily="'Poppins', sans-serif" fontWeight="800" fontSize="26" fill="white" textAnchor="middle" letterSpacing="1">acm</text>
        </g>
        {/* Association text */}
        <text x="120" y="38" fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="24" fill="#4A4A4A" className="dark-text">Association for</text>
        <text x="120" y="65" fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="24" fill="#4A4A4A" className="dark-text">Computing</text>
        <text x="120" y="92" fontFamily="'Poppins', sans-serif" fontWeight="700" fontSize="24" fill="#4A4A4A" className="dark-text">Machinery</text>
      </svg>
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
