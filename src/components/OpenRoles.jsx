import FadeInSection from './FadeInSection';

const roles = [
  {
    title: 'Research Lead',
    tag: 'Academic',
    icon: '🔬',
    desc: 'Drive the society\'s core research agenda. Identify research topics, connect students with faculty mentors, and guide teams toward publishable outcomes.',
    skills: ['Literature Review', 'Project Management', 'Academic Writing'],
  },
  {
    title: 'Events Coordinator',
    tag: 'Operations',
    icon: '🎯',
    desc: 'Plan and execute workshops, hackathons, speaker sessions, and innovation challenges that define the MRU-URIS experience.',
    skills: ['Event Planning', 'Logistics', 'Team Coordination'],
  },
  {
    title: 'Content Head',
    tag: 'Creative',
    icon: '✍️',
    desc: 'Own the voice of MRU-URIS. Create compelling content — social posts, newsletters, reports — that communicates our vision to the world.',
    skills: ['Copywriting', 'Graphic Design', 'Strategy'],
  },
  {
    title: 'Outreach Lead',
    tag: 'Growth',
    icon: '🌐',
    desc: 'Build bridges with external organizations, companies, and academic institutions. Grow our network, secure sponsorships, and forge partnerships.',
    skills: ['Communication', 'Networking', 'Proposal Writing'],
  },
  {
    title: 'Technology Lead',
    tag: 'Engineering',
    icon: '⚙️',
    desc: 'Build and maintain the digital infrastructure of MRU-URIS — websites, tools, dashboards, and any tech needed to run our initiatives.',
    skills: ['Web Development', 'Automation', 'System Design'],
  },
  {
    title: 'Finance & Operations',
    tag: 'Management',
    icon: '📊',
    desc: 'Manage the society\'s budget, track expenditures, and ensure all operations run smoothly with proper documentation and planning.',
    skills: ['Budgeting', 'Reporting', 'Administration'],
  },
];

const tagColors = {
  Academic: 'text-sky-400 border-sky-400/30 bg-sky-400/5',
  Operations: 'text-violet-400 border-violet-400/30 bg-violet-400/5',
  Creative: 'text-rose-400 border-rose-400/30 bg-rose-400/5',
  Growth: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
  Engineering: 'text-amber-400 border-amber-400/30 bg-amber-400/5',
  Management: 'text-indigo-400 border-indigo-400/30 bg-indigo-400/5',
};

export default function OpenRoles() {
  return (
    <section id="roles" className="relative z-10 py-28 px-6">
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto">

        <FadeInSection>
          <div className="text-center mb-16">
            <p className="eyebrow text-[#2dd4bf] mb-4 tracking-[4px]">Open Positions</p>
            <h2 className="font-extrabold text-[clamp(26px,3.5vw,44px)] text-metallic leading-tight max-w-xl mx-auto">
              Find your role on the Board
            </h2>
            <p className="text-[#a3a3ab] text-sm sm:text-base mt-4 max-w-xl mx-auto leading-relaxed">
              We're looking for passionate, self-driven individuals to fill six board positions for Class 26'.
              Each role owns a critical domain of our society.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, i) => (
            <FadeInSection key={role.title} delay={i * 80}>
              <div className="card-hover border border-[#2b2b32] rounded-2xl p-7 bg-[#14141c]/40 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="text-2xl">{role.icon}</div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-[2px] border rounded-full px-3 py-1 ${tagColors[role.tag]}`}
                  >
                    {role.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-bold text-white text-lg mb-3">{role.title}</h3>

                {/* Description */}
                <p className="text-[#8a8a92] text-sm leading-relaxed mb-5 flex-1">{role.desc}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] text-[#a3a3ab] border border-[#2b2b32] rounded-full px-3 py-1 font-medium tracking-wide"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>

        {/* Apply nudge */}
        <FadeInSection delay={300}>
          <div className="mt-14 text-center">
            <p className="text-[#8a8a92] text-sm mb-5">
              Don't see a perfect fit? We encourage you to apply with your unique skillset.
            </p>
            <a
              href="#contact"
              className="btn-gradient px-8 py-3.5 rounded-full text-sm font-bold inline-block transition-all duration-200 hover:scale-105 hover:shadow-[0_0_25px_rgba(45,212,191,0.35)]"
            >
              Apply for a Position →
            </a>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
