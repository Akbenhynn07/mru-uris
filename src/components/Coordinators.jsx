import FadeInSection from './FadeInSection';

const coordinators = [
  {
    name: 'Akshay Benhynn Yendloori',
    phone: '6303850467',
    initial: 'A',
  },
  {
    name: 'Patel Aaliya Mubashira',
    phone: '99855 77866',
    initial: 'P',
  },
];

export default function Coordinators() {
  return (
    <section id="coordinators" className="relative z-10 py-28 px-6">
      <div className="section-divider mb-28" />
      <div className="max-w-4xl mx-auto">

        <FadeInSection>
          <div className="text-center mb-14">
            <p className="eyebrow text-[#2dd4bf] mb-4 tracking-[4px]">Point of Contact</p>
            <h2 className="font-extrabold text-[clamp(26px,3.5vw,44px)] text-metallic leading-tight">
              Student Coordinators
            </h2>
            <p className="text-[#8a8a92] text-sm mt-4 max-w-md mx-auto">
              Reach out to our coordinators for any queries about the recruitment process.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {coordinators.map((c, i) => (
            <FadeInSection key={c.name} delay={i * 120}>
              <div className="card-hover border border-[#2b2b32] rounded-2xl p-8 bg-[#14141c]/40 flex flex-col items-center text-center gap-4">
                {/* Avatar circle */}
                <div
                  className="w-16 h-16 rounded-full border border-[#2dd4bf]/30 flex items-center justify-center text-xl font-black text-metallic bg-[#0a0a0d]"
                  style={{ boxShadow: '0 0 20px rgba(45,212,191,0.08)' }}
                >
                  {c.initial}
                </div>

                <div>
                  <p className="text-white font-semibold text-lg mb-1">{c.name}</p>
                  <p className="text-[#8a8a92] text-[11px] uppercase tracking-[2px] font-bold mb-4">
                    Student Coordinator
                  </p>
                  <a
                    href={`tel:${c.phone.replace(/\s/g, '')}`}
                    className="inline-flex items-center gap-2 border border-[#2b2b32] rounded-full px-5 py-2 text-sm text-[#a3a3ab] font-medium hover:border-[#2dd4bf] hover:text-[#2dd4bf] transition-all duration-200"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.84a16 16 0 006.07 6.07l1.21-1.21a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    {c.phone}
                  </a>
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
