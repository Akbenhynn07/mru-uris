import FadeInSection from './FadeInSection';

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/mru.uris/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/mru-undergraduate-research-and-innovation-society',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:uris@mallareddyuniversity.ac.in',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export default function Footer({ onApply }) {
  return (
    <footer id="contact" className="relative z-10 pt-28 pb-12 px-6">
      <div className="section-divider mb-20" />

      {/* Final CTA banner */}
      <FadeInSection>
        <div className="max-w-4xl mx-auto border border-[#2b2b32] rounded-2xl p-12 sm:p-16 bg-[#14141c]/40 text-center mb-20 relative overflow-hidden">
          {/* Subtle teal glow behind */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(45,212,191,0.04) 0%, transparent 70%)',
            }}
          />
          <p className="eyebrow text-[#2dd4bf] mb-4 tracking-[4px]">Class 26' Recruitment</p>
          <h2 className="font-black text-[clamp(28px,5vw,56px)] text-metallic leading-tight mb-4">
            Ready to Lead?
          </h2>
          <p className="text-[#a3a3ab] text-base max-w-lg mx-auto mb-10 leading-relaxed">
            Applications are open now. Join the founding board of MRU-URIS and help build something lasting at Malla Reddy University.
          </p>
          <button
            onClick={onApply}
            className="btn-gradient px-10 py-4 rounded-full text-base font-bold inline-block transition-all duration-200 hover:scale-105 hover:shadow-[0_0_35px_rgba(45,212,191,0.4)]"
          >
            Apply Now →
          </button>
        </div>
      </FadeInSection>

      {/* Footer bottom row */}
      <div className="max-w-6xl mx-auto">
        <FadeInSection delay={100}>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8">

            {/* Brand */}
            <div className="text-center sm:text-left">
              <img
                src="/uris-logo.jpg"
                alt="MRU-URIS"
                className="h-12 w-auto mb-2"
                style={{ mixBlendMode: 'lighten' }}
                draggable={false}
              />
              <div className="text-[#8a8a92] text-xs tracking-wide">
                Undergraduate Research &amp; Innovation Society<br />
                Malla Reddy University, Hyderabad
              </div>
            </div>

            {/* Contact */}
            <div className="text-center">
              <p className="text-[#8a8a92] text-[11px] uppercase tracking-[2px] font-bold mb-3">Contact</p>
              <div className="flex flex-col gap-1.5 text-sm text-[#a3a3ab]">
                <a href="tel:6303850467" className="hover:text-[#2dd4bf] transition-colors">
                  Akshay — 6303850467
                </a>
                <a href="tel:9985577866" className="hover:text-[#2dd4bf] transition-colors">
                  Aaliya — 99855 77866
                </a>
              </div>
            </div>

            {/* Socials */}
            <div className="text-center">
              <p className="text-[#8a8a92] text-[11px] uppercase tracking-[2px] font-bold mb-3">Follow Us</p>
              <div className="flex items-center gap-3 justify-center">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="w-9 h-9 border border-[#2b2b32] rounded-full flex items-center justify-center text-[#a3a3ab] hover:border-[#2dd4bf] hover:text-[#2dd4bf] transition-all duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Copyright */}
        <FadeInSection delay={200}>
          <div className="section-divider mt-10 mb-6" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[#8a8a92] text-xs">
            <span>© 2026 MRU-URIS. Malla Reddy University. All rights reserved.</span>
            <span className="flex items-center gap-1.5">
              Made with <span className="text-[#2dd4bf]">❤</span> for Class 26'
            </span>
          </div>
        </FadeInSection>
      </div>
    </footer>
  );
}
