import { useEffect, useState } from 'react';

/**
 * Splash screen animation sequence:
 * 0.0s — overlay mounts (black, logo invisible)
 * 0.1s — logo fades IN  (0.8s ease)
 * 1.4s — logo holds
 * 2.2s — entire overlay fades OUT (0.9s ease)
 * 3.1s — component unmounts, site fully visible
 */
export default function SplashScreen({ onDone }) {
  // 'entering' | 'visible' | 'leaving' | 'done'
  const [phase, setPhase] = useState('entering');

  useEffect(() => {
    // Small tick so the initial opacity:0 is painted before we start the fade-in
    const t1 = setTimeout(() => setPhase('visible'),   100);
    // Hold, then start fade-out
    const t2 = setTimeout(() => setPhase('leaving'),  2200);
    // Unmount after fade-out completes
    const t3 = setTimeout(() => {
      setPhase('done');
      onDone?.();
    }, 3200);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  if (phase === 'done') return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#0a0a0d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        // Overlay fade-out
        opacity: phase === 'leaving' ? 0 : 1,
        transition: phase === 'leaving'
          ? 'opacity 0.9s cubic-bezier(0.4, 0, 0.2, 1)'
          : 'none',
        pointerEvents: phase === 'leaving' ? 'none' : 'all',
      }}
    >
      {/* Subtle radial glow behind the logo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(45,212,191,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Logo image */}
      <div
        style={{
          opacity: phase === 'visible' || phase === 'leaving' ? 1 : 0,
          transform: phase === 'visible' || phase === 'leaving'
            ? 'scale(1) translateY(0)'
            : 'scale(0.92) translateY(16px)',
          transition: phase === 'visible'
            ? 'opacity 0.8s cubic-bezier(0.4,0,0.2,1), transform 0.8s cubic-bezier(0.4,0,0.2,1)'
            : 'none',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <img
          src="/uris-logo.jpg"
          alt="MRU-URIS"
          style={{
            width: 'min(75vw, 560px)',
            height: 'auto',
            mixBlendMode: 'lighten',
            userSelect: 'none',
            pointerEvents: 'none',
          }}
          draggable={false}
        />
      </div>

      {/* Tagline beneath logo — fades in slightly later */}
      <div
        style={{
          opacity: phase === 'visible' || phase === 'leaving' ? 1 : 0,
          transition: phase === 'visible'
            ? 'opacity 0.8s 0.4s cubic-bezier(0.4,0,0.2,1)'
            : 'none',
          marginTop: '24px',
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '4px',
            textTransform: 'uppercase',
            color: '#8a8a92',
          }}
        >
          Undergraduate Research &amp; Innovation Society
        </p>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: '#2dd4bf',
            marginTop: '6px',
            opacity: 0.85,
          }}
        >
          Malla Reddy University
        </p>
      </div>

      {/* Thin teal bottom bar that grows like a loader */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: '2px',
          background: 'linear-gradient(90deg, transparent, #2dd4bf, transparent)',
          width: phase === 'visible' || phase === 'leaving' ? '100%' : '0%',
          transition: phase === 'visible'
            ? 'width 1.8s cubic-bezier(0.4,0,0.2,1)'
            : 'none',
        }}
      />
    </div>
  );
}
