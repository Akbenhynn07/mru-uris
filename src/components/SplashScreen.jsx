import { useEffect, useState } from 'react';

/**
 * Netflix-style Intro Animation:
 * 1. Logo fades and gently scales in.
 * 2. Pause/hold.
 * 3. Logo zooms in dramatically (scale to 20x) and dissolves as it passes the screen,
 *    while the black background overlay dissolves to reveal the website content beneath.
 */
export default function SplashScreen({ onDone }) {
  // 'entering' | 'visible' | 'zooming' | 'done'
  const [phase, setPhase] = useState('entering');

  useEffect(() => {
    // 100ms: trigger fade-in of logo
    const t1 = setTimeout(() => setPhase('visible'), 100);
    
    // 1800ms: start the dramatic Netflix-style zoom & dissolve
    const t2 = setTimeout(() => setPhase('zooming'), 1800);
    
    // 2900ms: animation complete, unmount splash overlay
    const t3 = setTimeout(() => {
      setPhase('done');
      onDone?.();
    }, 2900);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

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
    logoTransition = 'transform 1.1s cubic-bezier(0.7, 0, 0.3, 1), opacity 0.7s cubic-bezier(0.7, 0, 0.3, 1)';
    overlayTransition = 'opacity 1.0s cubic-bezier(0.7, 0, 0.3, 1)';
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

      {/* Logo container */}
      <div
        style={{
          opacity: logoOpacity,
          transform: `scale(${logoScale})`,
          transition: logoTransition,
          position: 'relative',
          zIndex: 1,
          transformOrigin: 'center center',
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
    </div>
  );
}
