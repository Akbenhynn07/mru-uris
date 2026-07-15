import { useEffect, useState } from 'react';

/**
 * Netflix-style Intro Animation:
 * 1. Logo fades and gently scales in.
 * 2. Pause/hold.
 * 3. Logo zooms in dramatically (scale to 20x) and dissolves as it passes the screen,
 *    while the black background overlay dissolves to reveal the website content beneath.
 */
export default function SplashScreen({ onZoomStart, onDone }) {
  // 'entering' | 'visible' | 'zooming' | 'done'
  const [phase, setPhase] = useState('entering');

  useEffect(() => {
    // 100ms: trigger fade-in of logo
    const t1 = setTimeout(() => setPhase('visible'), 100);
    
    // 2400ms: start the dramatic Netflix-style zoom & dissolve (extended from 1800ms)
    const t2 = setTimeout(() => {
      setPhase('zooming');
      onZoomStart?.(); // Start globe animation immediately as zoom begins
    }, 2400);
    
    // 4600ms: animation complete, unmount splash overlay (extended from 4000ms to allow 2.2s slower zoom after 2400ms start)
    const t3 = setTimeout(() => {
      setPhase('done');
      onDone?.(); // Unmount overlay only after zoom animation fully finishes
    }, 4600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (phase === 'done') return null;

  // Animation values calculated based on current phase
  let overlayOpacity = 1;
  let overlayPointerEvents = 'all';
  let logoScale = 0.85;
  let logoOpacity = 0;
  let logoTransition = 'none';
  let overlayTransition = 'none';

  if (phase === 'visible') {
    overlayOpacity = 1;
    logoScale = 1.0;
    logoOpacity = 1;
    logoTransition = 'opacity 0.8s cubic-bezier(0.25, 1, 0.5, 1), transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)';
  } else if (phase === 'zooming') {
    overlayOpacity = 0;
    overlayPointerEvents = 'none';
    logoScale = 22.0; // Dramatic zoom past viewport boundary
    logoOpacity = 0; // Dissolve to transparent as it gets close
    logoTransition = 'transform 2.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 1.8s cubic-bezier(0.4, 0, 0.2, 1)';
    overlayTransition = 'opacity 2.2s cubic-bezier(0.4, 0, 0.2, 1)';
  }

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
        opacity: overlayOpacity,
        transition: overlayTransition,
        pointerEvents: overlayPointerEvents,
        overflow: 'hidden', // Prevent zoom scale from causing horizontal/vertical scrolls
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(45,212,191,0.03) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Recreated Logo in HTML/CSS for letter-by-letter highlight animation */}
      <div 
        className="flex flex-col items-center select-none relative z-10 font-poppins text-center"
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          transition: logoTransition,
          position: 'relative',
          transformOrigin: 'center center',
        }}
      >
        {/* MRU text */}
        <div className="flex justify-center mb-1 pl-[6px]">
          {["M", "R", "U"].map((char, index) => (
            <span
              key={`mru-${index}`}
              className="text-white text-lg sm:text-xl md:text-2xl font-bold tracking-[10px]"
              style={{
                opacity: phase === 'entering' ? 0.12 : 1,
                filter: phase === 'entering' ? 'none' : 'drop-shadow(0 0 6px rgba(45,212,191,0.4))',
                transition: `all 0.3s cubic-bezier(0.25, 1, 0.5, 1) ${index * 0.15}s`,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* URIS text - massive */}
        <div className="flex justify-center -space-x-1 sm:-space-x-2">
          {["U", "R", "I", "S"].map((char, index) => (
            <span
              key={`uris-${index}`}
              className="font-black text-[clamp(90px,18vw,210px)] leading-none text-metallic"
              style={{
                opacity: phase === 'entering' ? 0.12 : 1,
                filter: phase === 'entering' ? 'brightness(0.3)' : 'brightness(1) drop-shadow(0 0 16px rgba(45,212,191,0.5))',
                transition: `all 0.4s cubic-bezier(0.25, 1, 0.5, 1) ${(index * 0.18 + 0.45)}s`,
                display: 'inline-block',
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <div 
          className="mt-8 text-[clamp(11px,2.2vw,16px)] font-bold tracking-[4.5px] uppercase text-[#8a8a92] px-4"
          style={{
            opacity: phase === 'entering' ? 0 : 0.85,
            transition: 'opacity 0.6s ease 1.3s',
          }}
        >
          Undergraduate Research &amp; Innovation Society
        </div>
      </div>
    </div>
  );
}
