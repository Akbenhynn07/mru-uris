import { useState, useEffect } from 'react';
import FadeInSection from './FadeInSection';

// IEEE Flagship Roadmap Events (Engineering, Robotics, Hardware, Circuit focus)
const ieeeEvents = [
  {
    id: 'engineer-the-future',
    month: 'OCTOBER',
    day: '12',
    year: '2026',
    badge: 'Flagship Launch',
    badgeColor: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
    accentColor: '#06B6D4',
    secondaryColor: '#2563EB',
    glowGradient: 'from-cyan-600/20 via-blue-600/10 to-transparent',
    borderColor: 'hover:border-cyan-400/60',
    title: 'Engineer the Future 2026',
    theme: 'Designing Tomorrow\'s Intelligent World',
    description:
      'A university-wide engineering innovation festival where students design intelligent hardware solutions for real-world challenges. The event includes robotics demonstrations, embedded systems showcases, IoT innovation booths, PCB design exhibits, autonomous drone displays, and rapid engineering design challenges judged by faculty and industry professionals.',
    heroImage: '/events/ieee/robotics-hero.jpg',
    gallery: [
      { src: '/events/ieee/robotics-hero.jpg', caption: 'Intelligent Robotics & Autonomous Actuators Arena' },
      { src: '/events/ieee/drone-pcb.jpg', caption: 'High-Density PCB Fabrication & Avionics Micro-circuitry' },
      { src: '/events/ieee/hardware-lab.jpg', caption: 'Embedded Systems Prototyping & Hardware Testing Station' },
    ],
    tags: ['Robotics Demos', 'Embedded Systems', 'IoT Innovations', 'PCB & Hardware', 'Autonomous Drones'],
    highlights: [
      'Live humanoid & autonomous drone obstacle flight course demonstrations',
      'Hands-on multilayer PCB layout design & smd soldering arena',
      'Real-time industrial IoT sensor telemetry dashboard exhibits',
      'Rapid 6-hour hardware rapid prototyping sprint with faculty judges',
    ],
  },
  {
    id: 'ieee-research-month',
    isReserved: true,
    month: 'NOVEMBER',
    year: '2026',
    badge: 'MRU-URIS',
    title: 'MRU-URIS Research Month',
    description:
      'Reserved for university-wide undergraduate research, interdisciplinary innovation, faculty mentorship, paper writing initiatives, and research development programs under MRU-URIS.',
    tags: ['Hardware Research', 'Faculty Mentorship', 'Interdisciplinary Grants', 'Paper Writing'],
  },
  {
    id: 'smart-systems-expo',
    month: 'DECEMBER',
    day: '18',
    year: '2026',
    badge: 'Innovation Month',
    badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    accentColor: '#2563EB',
    secondaryColor: '#06B6D4',
    glowGradient: 'from-blue-600/20 via-cyan-600/10 to-transparent',
    borderColor: 'hover:border-blue-400/60',
    title: 'Smart Systems Expo 2026',
    theme: 'Engineering That Solves Real Problems',
    description:
      'The annual IEEE engineering showcase where students demonstrate intelligent hardware, robotics, embedded systems, IoT solutions, renewable energy projects, biomedical devices, and automation technologies. Every team presents a working prototype before faculty, researchers, and industry experts through live demonstrations and interactive engineering booths.',
    heroImage: '/events/ieee/smart-systems-hero.jpg',
    gallery: [
      { src: '/events/ieee/smart-systems-hero.jpg', caption: 'Smart Infrastructure & City Automation Command Center' },
      { src: '/events/ieee/autonomous-vehicles.jpg', caption: 'Autonomous Navigation & Embedded LiDAR Vision Systems' },
      { src: '/events/ieee/renewable-iot.jpg', caption: 'Micro-Grid Renewable Energy & Remote Sensor Nodes' },
    ],
    tags: ['Intelligent Hardware', 'Automation & Robotics', 'Smart Cities & IoT', 'Renewable Energy', 'Live Working Prototypes'],
    highlights: [
      'Interactive engineering booths with fully operational physical prototypes',
      'Clean energy & microgrid smart telemetry demonstrations',
      'Biomedical monitoring wearables and edge automation arrays',
      'Industry jury evaluation for commercialization seed grants',
    ],
  },
];

// ACM Flagship Roadmap Events (Software, AI, Open Source focus)
const acmEvents = [
  {
    id: 'computing-frontiers',
    month: 'SEPTEMBER',
    day: '06',
    year: '2026',
    badge: 'Flagship Launch',
    badgeColor: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
    accentColor: '#7C3AED',
    secondaryColor: '#2563EB',
    glowGradient: 'from-purple-600/20 via-blue-600/10 to-transparent',
    borderColor: 'hover:border-purple-500/50',
    title: 'Computing Frontiers 2026',
    theme: 'Reverse Engineering the Future',
    description:
      'An immersive flagship experience where students become engineering investigators and reconstruct the fictional autonomous computing system Project ORION. Teams analyze AI, cybersecurity, networking, systems, data, and HCI evidence before presenting their own architecture of ORION. The event concludes with the symbolic Black Box Reveal, reminding students that the greatest system they reverse engineered was their own way of thinking.',
    heroImage: '/events/event1-hero.jpg',
    gallery: [
      { src: '/events/event1-hero.jpg', caption: 'Project ORION Autonomous System Architecture' },
      { src: '/events/event1-img2.jpg', caption: 'Cybersecurity & AI Forensic Investigation Hub' },
      { src: '/events/event1-img3.jpg', caption: 'The Black Box Reveal Keynote' },
    ],
    tags: ['Project ORION', 'AI & Cybersecurity', 'Systems Architecture', 'Black Box Reveal'],
    highlights: [
      'Interactive investigative team challenges across 5 computing domains',
      'Forensic data packet analysis & neural weights reconstruction',
      'Symposium presentation before industry architectural panels',
      'Symbolic Black Box unveiling ceremony',
    ],
  },
  {
    id: 'open-source-odyssey',
    month: 'OCTOBER',
    day: '06',
    year: '2026',
    badge: 'Build Month',
    badgeColor: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
    accentColor: '#2563EB',
    secondaryColor: '#7C3AED',
    glowGradient: 'from-blue-600/20 via-cyan-600/10 to-transparent',
    borderColor: 'hover:border-blue-500/50',
    title: 'Open Source Odyssey 2026',
    theme: 'Build Something Bigger Than Yourself',
    description:
      'A hands-on software engineering experience where every participant contributes to a real open-source project. Students learn Git workflows, issue tracking, collaborative development, code reviews, and pull requests before making their first verified GitHub contribution. The event ends with a live Merge Ceremony, celebrating projects merged into production repositories.',
    heroImage: '/events/event2-hero.jpg',
    gallery: [
      { src: '/events/event2-hero.jpg', caption: 'Collaborative Sprint & Issue Triaging' },
      { src: '/events/event2-img2.jpg', caption: 'Live Code Reviews & Pull Request Mentorship' },
      { src: '/events/event2-img3.jpg', caption: 'Global Open Source Merge Ceremony' },
    ],
    tags: ['Git Workflows', 'Production PRs', 'Collaborative Dev', 'Live Merge Ceremony'],
    highlights: [
      'Guided triage of real-world GitHub issues across active repos',
      '1-on-1 code reviews with experienced open-source maintainers',
      'CI/CD pipeline testing and unit test writing mastery',
      'Main-stage live merge countdown for verified contributions',
    ],
  },
  {
    id: 'acm-research-month',
    isReserved: true,
    month: 'NOVEMBER',
    year: '2026',
    badge: 'MRU-URIS',
    title: 'Research & Innovation Month',
    description:
      'Reserved for university-wide undergraduate research initiatives, interdisciplinary projects, paper writing, faculty mentorship, and innovation programs under MRU-URIS.',
    tags: ['Undergraduate Research', 'Paper Writing', 'Faculty Mentorship', 'Interdisciplinary Grants'],
  },
  {
    id: 'code-to-impact',
    month: 'DECEMBER',
    day: '07',
    year: '2026',
    badge: 'Innovation Month',
    badgeColor: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
    accentColor: '#8B5CF6',
    secondaryColor: '#2563EB',
    glowGradient: 'from-violet-600/20 via-blue-600/10 to-transparent',
    borderColor: 'hover:border-violet-500/50',
    title: 'Code to Impact Showcase 2026',
    theme: 'From Idea to Real Product',
    description:
      'The ACM innovation expo where student teams present AI, software, cybersecurity, and data-driven products before faculty and industry judges. Instead of posters, every team demonstrates a working solution through interactive booths, live demos, and rapid investor-style pitches. The showcase celebrates products that solve genuine societal and campus problems.',
    heroImage: '/events/event3-hero.jpg',
    gallery: [
      { src: '/events/event3-hero.jpg', caption: 'Interactive Product Demo Arena' },
      { src: '/events/event3-img2.jpg', caption: 'Faculty & Venture Judges Evaluation' },
      { src: '/events/event3-img3.jpg', caption: 'Grand Award & Incubation Accelerator Grants' },
    ],
    tags: ['Interactive Booths', 'Live Product Demos', 'Investor Pitches', 'Impact Accelerator'],
    highlights: [
      'Live functional product booths with zero static slide decks',
      '3-minute rapid demo pitches to VC and faculty panelists',
      'Audience-voted Community Choice & Technical Excellence awards',
      'Direct pathway into university incubator grant backing',
    ],
  },
];

export default function Timeline() {
  // Active chapter state: 'ieee' (Hardware/Robotics) or 'acm' (Software/AI)
  const [activeChapter, setActiveChapter] = useState('ieee');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Sync with URL hash if visited directly
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('acm')) {
        setActiveChapter('acm');
      } else if (hash.includes('ieee')) {
        setActiveChapter('ieee');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedEvent]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedEvent(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openEventModal = (event) => {
    setSelectedEvent(event);
    setActiveImageIndex(0);
  };

  const isIEEE = activeChapter === 'ieee';
  const currentEvents = isIEEE ? ieeeEvents : acmEvents;

  return (
    <section id="roadmap" className="relative z-10 py-32 px-6 overflow-hidden">
      {/* Anchor targets for backward compatibility */}
      <span id="timeline" className="absolute -top-24 pointer-events-none" />
      <span id="about" className="absolute -top-24 pointer-events-none" />
      <span id="ieee" className="absolute -top-24 pointer-events-none" />
      <span id="acm" className="absolute -top-24 pointer-events-none" />

      {/* Futuristic Circuit & Grid Background Overlay for IEEE */}
      {isIEEE && (
        <div className="absolute inset-0 pointer-events-none select-none opacity-20 -z-10 transition-opacity duration-700">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="ieee-circuits" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 0 30 L 40 30 L 50 40 L 80 40 L 90 30 L 100 30" fill="none" stroke="#06B6D4" strokeWidth="1" opacity="0.4"/>
                <path d="M 30 100 L 30 70 L 40 60 L 40 40" fill="none" stroke="#2563EB" strokeWidth="1" opacity="0.4"/>
                <circle cx="50" cy="40" r="2.5" fill="#06B6D4"/>
                <circle cx="40" cy="60" r="2.5" fill="#2563EB"/>
                <circle cx="90" cy="30" r="2" fill="#06B6D4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#ieee-circuits)"/>
          </svg>
        </div>
      )}

      {/* Dynamic Ambient Glows */}
      <div 
        className={`absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full blur-[150px] pointer-events-none -z-10 transition-colors duration-700 ${
          isIEEE ? 'bg-cyan-500/10' : 'bg-purple-600/10'
        }`}
      />
      <div 
        className={`absolute bottom-1/3 left-1/3 w-[550px] h-[550px] rounded-full blur-[140px] pointer-events-none -z-10 transition-colors duration-700 ${
          isIEEE ? 'bg-blue-600/15' : 'bg-blue-600/10'
        }`}
      />

      <div className="section-divider mb-28" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <FadeInSection>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            {/* Apple-style Interactive Dual Chapter Switcher */}
            <div className="inline-flex p-1.5 rounded-full border border-white/10 bg-[#12121c]/90 backdrop-blur-2xl shadow-[0_8px_30px_rgba(0,0,0,0.4)] mb-8 transition-all">
              <button
                onClick={() => setActiveChapter('ieee')}
                className={`relative flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                  isIEEE
                    ? 'bg-gradient-to-r from-[#06B6D4] to-[#2563EB] text-white shadow-[0_0_20px_rgba(6,182,212,0.4)] scale-100'
                    : 'text-[#8a8a92] hover:text-white hover:bg-white/5 scale-95'
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
                <span>IEEE Student Branch</span>
                <span className="hidden md:inline text-[10px] font-medium opacity-80">(Hardware &amp; Robotics)</span>
              </button>

              <button
                onClick={() => setActiveChapter('acm')}
                className={`relative flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 ${
                  !isIEEE
                    ? 'bg-gradient-to-r from-[#7C3AED] to-[#2563EB] text-white shadow-[0_0_20px_rgba(124,58,237,0.4)] scale-100'
                    : 'text-[#8a8a92] hover:text-white hover:bg-white/5 scale-95'
                }`}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                  <line x1="8" y1="21" x2="16" y2="21"/>
                  <line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
                <span>ACM Student Chapter</span>
                <span className="hidden md:inline text-[10px] font-medium opacity-80">(Software &amp; AI)</span>
              </button>
            </div>

            {/* Top Branch Indicator Pill */}
            <div className="flex justify-center mb-4">
              <div 
                className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border backdrop-blur-md transition-all duration-500 ${
                  isIEEE 
                    ? 'border-cyan-500/30 bg-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.15)] text-cyan-200' 
                    : 'border-purple-500/30 bg-purple-500/10 shadow-[0_0_20px_rgba(124,58,237,0.15)] text-purple-200'
                }`}
              >
                <span 
                  className={`w-2 h-2 rounded-full animate-pulse ${
                    isIEEE ? 'bg-[#06B6D4]' : 'bg-[#7C3AED]'
                  }`} 
                />
                <span className="text-xs font-semibold tracking-[3px] uppercase">
                  {isIEEE ? 'IEEE Student Branch' : 'ACM Student Chapter'}
                </span>
                <span className="opacity-40">•</span>
                <span className="text-xs font-semibold tracking-[2px] uppercase text-[#2dd4bf]">
                  {isIEEE ? 'Engineering Roadmap' : 'Flagship Roadmap'}
                </span>
              </div>
            </div>

            {/* Main Title */}
            <h2 className="font-black text-[clamp(32px,5vw,56px)] text-metallic leading-tight tracking-tight mb-4">
              {isIEEE ? 'IEEE Student Branch Roadmap 2026' : 'ACM Student Chapter Roadmap 2026'}
            </h2>

            {/* Subtitle / Tagline */}
            <p 
              className={`font-bold text-base sm:text-lg tracking-[5px] uppercase mb-8 text-transparent bg-clip-text transition-all duration-500 ${
                isIEEE
                  ? 'bg-gradient-to-r from-cyan-400 via-blue-400 to-slate-200'
                  : 'bg-gradient-to-r from-blue-400 via-purple-300 to-teal-300'
              }`}
            >
              {isIEEE ? 'Design • Engineer • Transform' : 'Explore • Build • Showcase'}
            </p>

            {/* Supporting Text Callout */}
            <div className="relative p-6 sm:p-7 rounded-2xl border border-white/10 bg-[#14141c]/60 backdrop-blur-xl shadow-2xl text-left sm:text-center">
              <div 
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r pointer-events-none transition-all duration-500 ${
                  isIEEE 
                    ? 'from-cyan-500/5 via-blue-500/5 to-transparent' 
                    : 'from-purple-500/5 via-blue-500/5 to-transparent'
                }`} 
              />
              <p className="relative z-10 text-[#a3a3ab] text-sm sm:text-base leading-relaxed italic">
                {isIEEE
                  ? '“The flagship engineering roadmap of the IEEE Student Branch at Malla Reddy University, dedicated to innovation in electronics, robotics, embedded systems, intelligent hardware, and real-world engineering.”'
                  : '“The official flagship roadmap of the ACM Student Chapter at Malla Reddy University, designed to cultivate computational thinking, software engineering, open-source collaboration, and innovation.”'}
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Vertical Timeline Structure */}
        <div className="relative">
          {/* Vertical Glowing Connector Line (Desktop) */}
          <div 
            className={`absolute left-8 lg:left-[190px] top-8 bottom-12 w-0.5 hidden sm:block pointer-events-none transition-all duration-700 ${
              isIEEE 
                ? 'bg-gradient-to-b from-[#06B6D4] via-[#2563EB] to-cyan-500/20' 
                : 'bg-gradient-to-b from-[#7C3AED] via-[#2563EB] to-purple-600/20'
            }`}
            style={{
              boxShadow: isIEEE 
                ? '0 0 16px rgba(6, 182, 212, 0.5), 0 0 8px rgba(37, 99, 235, 0.4)'
                : '0 0 16px rgba(124, 58, 237, 0.4), 0 0 8px rgba(37, 99, 235, 0.3)',
            }}
          />

          <div className="space-y-16 sm:space-y-20">
            {currentEvents.map((item, index) => {
              if (item.isReserved) {
                // Minimal Elegant Grey Card for November (Reserved)
                return (
                  <FadeInSection key={item.id} delay={index * 120}>
                    <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-12 items-start group">
                      {/* Left: Month Badge */}
                      <div className="flex sm:flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start w-full lg:w-[150px] flex-shrink-0 pt-3 sm:pl-16 lg:pl-0">
                        <div className="text-left lg:text-right">
                          <span className="text-xs font-bold uppercase tracking-[3px] text-[#8a8a92] block">
                            {item.month}
                          </span>
                          <span className="text-xs font-semibold text-[#8a8a92]/60 tracking-wider">
                            {item.year}
                          </span>
                        </div>
                        <span className="border border-[#2b2b32] bg-[#14141c]/60 text-[#8a8a92] text-[10px] font-bold uppercase tracking-[2px] px-2.5 py-0.5 rounded-full mt-2">
                          {item.badge}
                        </span>
                      </div>

                      {/* Spine Node Marker (Desktop) */}
                      <div className="hidden sm:flex absolute left-8 lg:left-[190px] -translate-x-1/2 top-4 w-7 h-7 rounded-full bg-[#0a0a0d] border-2 border-[#33333d] items-center justify-center z-10">
                        <div className="w-2 h-2 rounded-full bg-[#8a8a92]/60" />
                      </div>

                      {/* Right: Reserved Minimal Elegant Grey Card */}
                      <div className="w-full lg:flex-1 sm:ml-16 lg:ml-8 border border-dashed border-[#2b2b32] hover:border-[#40404c] bg-[#121217]/60 rounded-2xl p-6 sm:p-8 backdrop-blur-md transition-all duration-300">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                          <div className="flex items-center gap-2.5">
                            <span className="w-2 h-2 rounded-full bg-[#8a8a92]/70" />
                            <h3 className="font-bold text-[#d7d9de] text-lg tracking-tight">
                              {item.title}
                            </h3>
                          </div>
                          <span className="text-[11px] font-semibold text-[#8a8a92] tracking-wider uppercase bg-[#1c1c24] px-3 py-1 rounded-md border border-[#2b2b32]">
                            University Initiative
                          </span>
                        </div>
                        <p className="text-[#8a8a92] text-sm leading-relaxed mb-4">
                          {item.description}
                        </p>
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#1c1c24]">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] text-[#71717a] font-medium tracking-wide bg-[#17171f] px-2.5 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </FadeInSection>
                );
              }

              // Flagship Event Cards
              return (
                <FadeInSection key={item.id} delay={index * 120}>
                  <div className="relative flex flex-col lg:flex-row gap-6 lg:gap-12 items-start group">
                    {/* Left: Month Badge */}
                    <div className="flex sm:flex-row lg:flex-col items-center lg:items-end justify-between lg:justify-start w-full lg:w-[150px] flex-shrink-0 pt-4 sm:pl-16 lg:pl-0">
                      <div className="text-left lg:text-right">
                        <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter block leading-none">
                          {item.day}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-[3px] text-[#a3a3ab] block mt-1">
                          {item.month}
                        </span>
                        <span className="text-[11px] font-semibold text-[#8a8a92] tracking-widest">
                          {item.year}
                        </span>
                      </div>
                      <span className={`border text-[10px] font-extrabold uppercase tracking-[2px] px-3 py-1 rounded-full mt-3 ${item.badgeColor} backdrop-blur-md`}>
                        {item.badge}
                      </span>
                    </div>

                    {/* Spine Node Marker with Circuit/Radar Pulse */}
                    <div 
                      className="hidden sm:flex absolute left-8 lg:left-[190px] -translate-x-1/2 top-6 w-8 h-8 rounded-full bg-[#0a0a0d] border-2 items-center justify-center z-10 transition-transform duration-300 group-hover:scale-125"
                      style={{
                        borderColor: item.accentColor,
                        boxShadow: `0 0 18px ${item.accentColor}`,
                      }}
                    >
                      <div 
                        className="w-2.5 h-2.5 rounded-full animate-ping"
                        style={{ backgroundColor: item.accentColor }}
                      />
                      <div 
                        className="w-2.5 h-2.5 rounded-full absolute"
                        style={{ backgroundColor: item.accentColor }}
                      />
                    </div>

                    {/* Right: Large Premium Event Card */}
                    <div 
                      className={`w-full lg:flex-1 sm:ml-16 lg:ml-8 border border-white/10 ${item.borderColor} bg-[#12121c]/80 hover:bg-[#151524]/95 rounded-3xl overflow-hidden backdrop-blur-2xl transition-all duration-500 shadow-[0_15px_40px_rgba(0,0,0,0.5)] hover:-translate-y-1 ${
                        isIEEE 
                          ? 'hover:shadow-[0_20px_50px_rgba(6,182,212,0.2)]' 
                          : 'hover:shadow-[0_20px_50px_rgba(124,58,237,0.2)]'
                      }`}
                    >
                      {/* Hero Image Frame with Cinematic Vignette */}
                      <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden group/img bg-[#0a0a0d]">
                        <img
                          src={item.heroImage}
                          alt={item.title}
                          className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/img:scale-105"
                          loading="lazy"
                        />
                        {/* Gradient Overlay Vignettes */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#12121c] via-[#12121c]/40 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#12121c]/60 via-transparent to-transparent hidden sm:block" />

                        {/* Floating Top Tag */}
                        <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-[2px] uppercase backdrop-blur-xl border border-white/20 bg-black/60 text-white shadow-lg">
                            {item.badge}
                          </span>
                          {isIEEE && (
                            <span className="px-3 py-1 rounded-full text-[10px] font-bold tracking-[1.5px] uppercase backdrop-blur-xl border border-cyan-500/30 bg-cyan-950/60 text-cyan-300">
                              Hardware &amp; Robotics
                            </span>
                          )}
                        </div>

                        {/* Floating Photo Count Button */}
                        <div className="absolute top-5 right-5 z-10">
                          <button 
                            onClick={() => openEventModal(item)}
                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-white/80 bg-black/50 backdrop-blur-md border border-white/15 hover:bg-black/80 hover:text-white transition-colors"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                              <circle cx="8.5" cy="8.5" r="1.5"/>
                              <polyline points="21 15 16 10 5 21"/>
                            </svg>
                            <span>3 Photos</span>
                          </button>
                        </div>

                        {/* Event Title on Image Gradient */}
                        <div className="absolute bottom-5 left-6 right-6 z-10">
                          <div className="inline-block mb-1.5">
                            <span 
                              className={`text-xs sm:text-sm font-semibold tracking-wider uppercase px-3 py-0.5 rounded-md backdrop-blur-md border ${
                                isIEEE
                                  ? 'bg-cyan-950/40 text-cyan-200 border-cyan-500/30'
                                  : 'bg-white/10 text-white border-white/15'
                              }`}
                            >
                              Theme: {item.theme}
                            </span>
                          </div>
                          <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight drop-shadow-md">
                            {item.title}
                          </h3>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 sm:p-8 pt-4">
                        {/* Event Description */}
                        <p className="text-[#a3a3ab] text-sm sm:text-base leading-relaxed mb-6">
                          {item.description}
                        </p>

                        {/* Tags Pill Row */}
                        <div className="flex flex-wrap gap-2 mb-8">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm border ${
                                isIEEE
                                  ? 'text-cyan-200/90 bg-cyan-950/20 border-cyan-500/20'
                                  : 'text-white/80 bg-white/5 border-white/10'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Action Footer */}
                        <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/10">
                          <div className="flex items-center gap-2 text-xs text-[#8a8a92]">
                            <span 
                              className={`w-2 h-2 rounded-full ${
                                isIEEE ? 'bg-[#06B6D4]' : 'bg-[#2dd4bf]'
                              }`} 
                            />
                            <span>{isIEEE ? 'IEEE Engineering Pavilion • MRU' : 'Malla Reddy University Campus'}</span>
                          </div>

                          {/* Learn More Button */}
                          <button
                            onClick={() => openEventModal(item)}
                            className={`relative inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 group/btn shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 border ${
                              isIEEE
                                ? 'bg-cyan-500/10 hover:bg-cyan-500/20 border-cyan-500/30 hover:border-cyan-400/50 text-cyan-200'
                                : 'bg-white/10 hover:bg-white/20 border-white/20 hover:border-white/40'
                            }`}
                          >
                            <span>Learn More</span>
                            <svg 
                              width="16" 
                              height="16" 
                              viewBox="0 0 24 24" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                              className="transition-transform duration-200 group-hover/btn:translate-x-1"
                            >
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </div>

      {/* Interactive Cinematic Learn More Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <div 
            className="fixed inset-0 bg-[#0a0a0d]/90 backdrop-blur-2xl transition-opacity duration-300"
            onClick={() => setSelectedEvent(null)}
          />

          {/* Modal Card */}
          <div 
            className="relative w-full max-w-3xl bg-[#12121a] border border-white/15 rounded-3xl overflow-hidden shadow-2xl z-10 my-auto text-left"
            style={{
              boxShadow: isIEEE 
                ? '0 25px 70px rgba(0,0,0,0.9), 0 0 40px rgba(6, 182, 212, 0.25)' 
                : '0 25px 70px rgba(0,0,0,0.9), 0 0 40px rgba(124, 58, 237, 0.25)',
            }}
          >
            {/* Modal Header Gallery Area */}
            <div className="relative h-64 sm:h-80 w-full bg-[#0a0a0d] overflow-hidden">
              <img
                src={selectedEvent.gallery[activeImageIndex]?.src || selectedEvent.heroImage}
                alt={selectedEvent.title}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12121a] via-[#12121a]/30 to-transparent" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Close modal"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>

              {/* Badges on Gallery */}
              <div className="absolute top-4 left-4 z-20 flex gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 border border-white/20 text-white backdrop-blur-md">
                  {selectedEvent.day} {selectedEvent.month} {selectedEvent.year}
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${selectedEvent.badgeColor} backdrop-blur-md`}>
                  {selectedEvent.badge}
                </span>
              </div>

              {/* Gallery Image Caption */}
              <div className="absolute bottom-3 left-5 right-5 z-20 text-xs text-white/80 italic drop-shadow-md">
                {selectedEvent.gallery[activeImageIndex]?.caption}
              </div>
            </div>

            {/* Thumbnail Switcher */}
            <div className="px-6 sm:px-8 pt-4 pb-2 flex gap-3 overflow-x-auto bg-[#161622] border-b border-white/10">
              {selectedEvent.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 flex-shrink-0 transition-all ${
                    activeImageIndex === idx 
                      ? (isIEEE ? 'border-[#06B6D4] scale-105' : 'border-[#2dd4bf] scale-105')
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img.src} alt={img.caption} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-8 max-h-[50vh] overflow-y-auto space-y-6">
              <div>
                <span 
                  className={`text-xs font-bold uppercase tracking-[2px] block mb-1 ${
                    isIEEE ? 'text-cyan-400' : 'text-purple-400'
                  }`}
                >
                  Theme: {selectedEvent.theme}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  {selectedEvent.title}
                </h3>
              </div>

              <div 
                className={`border-l-2 pl-4 py-1 ${
                  isIEEE ? 'border-cyan-500/50' : 'border-purple-500/50'
                }`}
              >
                <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                  {selectedEvent.description}
                </p>
              </div>

              {/* Key Event Highlights */}
              {selectedEvent.highlights && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[2px] text-[#a3a3ab] mb-3">
                    {isIEEE ? 'Engineering & Prototyping Highlights' : 'Experience Highlights'}
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedEvent.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80 bg-white/5 p-2.5 rounded-xl border border-white/5">
                        <span className={`font-bold mt-0.5 ${isIEEE ? 'text-[#06B6D4]' : 'text-[#2dd4bf]'}`}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Modal Footer / CTA */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-[#8a8a92]">
                  {isIEEE 
                    ? 'IEEE Student Branch • Malla Reddy University'
                    : 'ACM Student Chapter • Malla Reddy University'}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="px-5 py-2 rounded-full text-xs font-semibold text-white/70 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href="#contact"
                    onClick={() => setSelectedEvent(null)}
                    className="btn-gradient px-6 py-2 rounded-full text-xs font-bold transition-transform hover:scale-105"
                  >
                    {isIEEE ? 'Join Branch' : 'Join Chapter'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
