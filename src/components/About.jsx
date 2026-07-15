import FadeInSection from './FadeInSection';

const pillars = [
  {
    icon: '🔬',
    title: 'Research',
    desc: 'Pursue real academic and applied research under faculty mentorship, tackle open problems, and publish findings.',
  },
  {
    icon: '💡',
    title: 'Innovation',
    desc: 'Build products and solutions that matter. From ideation to prototype, we give you the space to experiment.',
  },
  {
    icon: '🌐',
    title: 'Community',
    desc: 'Join a network of driven undergrads, industry mentors, and alumni who are shaping what comes next.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-28 px-6">
      <div className="max-w-6xl mx-auto">

        <FadeInSection>
          <div className="text-center mb-16">
            <p className="eyebrow text-[#2dd4bf] mb-4 tracking-[4px]">Who We Are</p>
            <h2 className="font-extrabold text-[clamp(28px,4vw,48px)] text-metallic leading-tight max-w-2xl mx-auto mb-5">
              Built by students, for students.
            </h2>
            <p className="text-[#a3a3ab] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              MRU-URIS is Malla Reddy University's official platform where curious undergraduates turn ideas into impact.
              We create structured opportunities for research, innovation, and leadership — giving every driven student a
              stage to grow beyond the classroom.
            </p>
          </div>
        </FadeInSection>

        {/* Mission stat strip */}
        <FadeInSection delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px border border-[#2b2b32] rounded-2xl overflow-hidden mb-16">
            {[
              { val: '01', label: 'Year to Make History' },
              { val: '∞', label: 'Ideas Worth Pursuing' },
              { val: '26\'', label: 'Founding Class Cohort' },
            ].map((item, i) => (
              <div key={i} className="bg-[#14141c]/60 px-8 py-10 text-center">
                <div className="font-black text-[44px] text-metallic leading-none mb-2">{item.val}</div>
                <div className="text-[#8a8a92] text-sm font-medium tracking-wide">{item.label}</div>
              </div>
            ))}
          </div>
        </FadeInSection>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <FadeInSection key={p.title} delay={i * 100}>
              <div className="card-hover border border-[#2b2b32] rounded-2xl p-8 bg-[#14141c]/40 h-full">
                <div className="text-3xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-lg text-white mb-3 teal-underline">{p.title}</h3>
                <p className="text-[#a3a3ab] text-sm leading-relaxed">{p.desc}</p>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* What board members do */}
        <FadeInSection delay={200}>
          <div className="mt-16 border border-[#2b2b32] rounded-2xl p-10 bg-[#14141c]/30">
            <p className="eyebrow text-[#8a8a92] mb-4 tracking-[3px]">Board Membership</p>
            <h3 className="font-bold text-2xl sm:text-3xl text-white mb-5">What do Board Members do?</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Lead and manage a dedicated domain (Research, Events, Content, Outreach, or Tech)',
                'Collaborate with faculty mentors, student coordinators, and external partners',
                'Organize workshops, hackathons, seminars, and innovation challenges',
                'Represent MRU-URIS at university events and external competitions',
                'Help shape the culture and direction of the society for Class 26\'',
                'Build a portfolio of real impact: initiatives you own from day one',
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-[#2dd4bf] flex-shrink-0 mt-2" />
                  <span className="text-[#a3a3ab] text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
