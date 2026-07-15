import FadeInSection from './FadeInSection';

const steps = [
  {
    num: '01',
    title: 'Applications Open',
    date: 'Now Live',
    desc: 'Read through all board positions carefully. Understand the responsibilities and identify the role that aligns with your skills and passion.',
  },
  {
    num: '02',
    title: 'Fill the Application Form',
    date: 'Week 1',
    desc: 'Complete the official application form with your personal details, the role you\'re applying for, and a short statement of intent (150–250 words).',
  },
  {
    num: '03',
    title: 'Shortlisting',
    date: 'Week 2',
    desc: 'Applications will be reviewed by our faculty mentors and current coordinators. Shortlisted candidates will be notified via email/phone.',
  },
  {
    num: '04',
    title: 'Interview Round',
    date: 'Week 3',
    desc: 'Shortlisted applicants will attend a brief interview (in-person or online) with the leadership panel to discuss their vision and approach.',
  },
  {
    num: '05',
    title: 'Results Announced',
    date: 'Week 4',
    desc: 'Selected board members will be officially announced. Onboarding and orientation will take place the following week.',
  },
];

export default function Timeline() {
  return (
    <section id="timeline" className="relative z-10 py-28 px-6">
      <div className="section-divider mb-28" />
      <div className="max-w-4xl mx-auto">

        <FadeInSection>
          <div className="text-center mb-16">
            <p className="eyebrow text-[#2dd4bf] mb-4 tracking-[4px]">Application Process</p>
            <h2 className="font-extrabold text-[clamp(26px,3.5vw,44px)] text-metallic leading-tight">
              How to Apply
            </h2>
            <p className="text-[#8a8a92] text-sm mt-4 max-w-md mx-auto">
              A clear, fair, and structured process — from first click to final selection.
            </p>
          </div>
        </FadeInSection>

        {/* Timeline steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[17px] top-5 bottom-5 w-px bg-gradient-to-b from-[#2dd4bf]/40 via-[#2b2b32] to-transparent hidden sm:block" />

          <div className="flex flex-col gap-8">
            {steps.map((step, i) => (
              <FadeInSection key={step.num} delay={i * 100}>
                <div className="flex gap-6 sm:gap-8 items-start relative">
                  {/* Step number */}
                  <div className="step-number flex-shrink-0 relative z-10 bg-[#0a0a0d]">
                    {step.num}
                  </div>

                  {/* Content */}
                  <div
                    className="card-hover border border-[#2b2b32] rounded-2xl p-6 bg-[#14141c]/40 flex-1"
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-bold text-white text-base">{step.title}</h3>
                      <span className="border border-[#2b2b32] rounded-full text-[10px] px-3 py-0.5 text-[#2dd4bf] font-bold tracking-[1.5px] uppercase">
                        {step.date}
                      </span>
                    </div>
                    <p className="text-[#8a8a92] text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>

        {/* Requirements note */}
        <FadeInSection delay={400}>
          <div className="mt-14 border border-[#2b2b32] rounded-2xl p-8 bg-[#14141c]/20">
            <p className="text-[#8a8a92] text-[11px] uppercase tracking-[2.5px] font-bold mb-4">Before You Apply</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Currently enrolled at Malla Reddy University',
                'Undergraduate student (any year)',
                'Committed to contributing for the full year',
                'Willing to collaborate across departments and disciplines',
              ].map((req) => (
                <div key={req} className="flex gap-3 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2dd4bf] flex-shrink-0 mt-1.5" />
                  <span className="text-[#a3a3ab] text-sm">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
