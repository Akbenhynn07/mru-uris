import FadeInSection from './FadeInSection';

const row1 = [
  { role: 'Chairman', name: 'Ch. Malla Reddy' },
  { role: 'Secretary', name: 'Ch. Mahender Reddy' },
  { role: 'Vice Chancellor', name: 'Dr. V.S.K Reddy' },
];

const row2 = [
  { role: 'Dean — AIML', name: 'Dr. G. Gifta Jerith' },
  { role: 'Dean — CSE', name: 'A.V.L.N Sujith' },
];

function LeaderRow({ people, delay = 0 }) {
  return (
    <FadeInSection delay={delay}>
      <div className="flex flex-wrap justify-center gap-0">
        {people.map((person, i) => (
          <div key={person.name} className="flex items-stretch">
            <div className="px-8 sm:px-12 py-6 text-center flex flex-col justify-center">
              <p className="text-[#8a8a92] text-[11px] font-bold uppercase tracking-[2.5px] mb-2">{person.role}</p>
              <p className="text-white font-semibold text-base sm:text-lg whitespace-nowrap">{person.name}</p>
            </div>
            {i < people.length - 1 && (
              <div className="v-divider my-3" />
            )}
          </div>
        ))}
      </div>
    </FadeInSection>
  );
}

export default function Leadership() {
  return (
    <section id="leadership" className="relative z-10 py-28 px-6">
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto">

        <FadeInSection>
          <div className="text-center mb-16">
            <p className="eyebrow text-[#2dd4bf] mb-4 tracking-[4px]">Guidance & Support</p>
            <h2 className="font-extrabold text-[clamp(26px,3.5vw,44px)] text-metallic leading-tight">
              Under the Guidance of
            </h2>
          </div>
        </FadeInSection>

        {/* Leadership container */}
        <FadeInSection delay={80}>
          <div className="border border-[#2b2b32] rounded-2xl overflow-hidden bg-[#14141c]/30">
            {/* Row 1 */}
            <div className="border-b border-[#2b2b32]">
              <LeaderRow people={row1} delay={120} />
            </div>

            {/* Row 2 */}
            <div className="flex justify-center">
              <LeaderRow people={row2} delay={200} />
            </div>
          </div>
        </FadeInSection>

        {/* Decorative accent */}
        <FadeInSection delay={260}>
          <div className="mt-10 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#2b2b32]" />
            <span className="glow-dot scale-75" />
            <span className="text-[#8a8a92] text-xs font-medium tracking-widest uppercase">Malla Reddy University</span>
            <span className="glow-dot scale-75" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#2b2b32]" />
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
