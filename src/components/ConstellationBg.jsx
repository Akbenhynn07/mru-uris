import { useEffect, useRef, useState } from 'react';

// Single tile dimensions (matches the SVG viewBox)
const TILE_W = 1080;
const TILE_H = 1550;

/**
 * Renders the exact constellation SVG pattern tiled vertically
 * enough times to cover the full document height.
 */
export default function ConstellationBg() {
  const [pageHeight, setPageHeight] = useState(3100); // default 2 tiles
  const rafRef = useRef(null);

  useEffect(() => {
    const update = () => {
      const h = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        window.innerHeight
      );
      setPageHeight(h);
    };

    update();

    // Re-measure on resize and when DOM changes
    window.addEventListener('resize', update);
    const ro = new ResizeObserver(update);
    ro.observe(document.body);

    return () => {
      window.removeEventListener('resize', update);
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // How many vertical tiles we need
  const tilesNeeded = Math.ceil(pageHeight / TILE_H) + 1;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: `${tilesNeeded * TILE_H}px`,
          opacity: 0.8,
        }}
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          {/* Define one tile as a reusable symbol */}
          <symbol id="constellation-tile" viewBox={`0 0 ${TILE_W} ${TILE_H}`}>
            <g stroke="#33333b" strokeWidth="1" fill="none">
              <path d="M60 120 L260 40 L470 130"/>
              <path d="M750 60 L890 90 L1030 220"/>
              <path d="M50 660 L175 630"/>
              <path d="M980 700 L1000 720 L1030 800"/>
              <path d="M80 900 L220 960 L180 1080"/>
              <path d="M900 980 L1000 1040 L950 1160"/>
              <path d="M120 1250 L300 1300 L260 1420"/>
              <path d="M780 1240 L920 1180 L1020 1300"/>
              <path d="M40 300 L140 380"/>
              <path d="M960 380 L1040 460"/>
            </g>

            {/* Dim dots */}
            <circle cx="60"   cy="120"  r="4" fill="#5a5a62"/>
            <circle cx="470"  cy="130"  r="4" fill="#5a5a62"/>
            <circle cx="750"  cy="60"   r="4" fill="#5a5a62"/>
            <circle cx="890"  cy="90"   r="4" fill="#5a5a62"/>
            <circle cx="50"   cy="660"  r="4" fill="#5a5a62"/>
            <circle cx="175"  cy="630"  r="4" fill="#5a5a62"/>
            <circle cx="980"  cy="700"  r="4" fill="#5a5a62"/>
            <circle cx="1030" cy="800"  r="4" fill="#5a5a62"/>
            <circle cx="80"   cy="900"  r="4" fill="#5a5a62"/>
            <circle cx="180"  cy="1080" r="4" fill="#5a5a62"/>
            <circle cx="900"  cy="980"  r="4" fill="#5a5a62"/>
            <circle cx="1000" cy="1040" r="4" fill="#5a5a62"/>
            <circle cx="950"  cy="1160" r="4" fill="#5a5a62"/>
            <circle cx="120"  cy="1250" r="4" fill="#5a5a62"/>
            <circle cx="300"  cy="1300" r="4" fill="#5a5a62"/>
            <circle cx="260"  cy="1420" r="4" fill="#5a5a62"/>
            <circle cx="780"  cy="1240" r="4" fill="#5a5a62"/>
            <circle cx="1020" cy="1300" r="4" fill="#5a5a62"/>
            <circle cx="40"   cy="300"  r="4" fill="#5a5a62"/>
            <circle cx="140"  cy="380"  r="4" fill="#5a5a62"/>
            <circle cx="960"  cy="380"  r="4" fill="#5a5a62"/>
            <circle cx="1040" cy="460"  r="4" fill="#5a5a62"/>

            {/* Teal glowing dots */}
            <circle cx="260"  cy="40"   r="4" fill="#2dd4bf">
              <animate attributeName="opacity" values="1;0.5;1" dur="3.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="1030" cy="220"  r="4" fill="#2dd4bf">
              <animate attributeName="opacity" values="1;0.4;1" dur="4.1s" repeatCount="indefinite"/>
            </circle>
            <circle cx="220"  cy="960"  r="4" fill="#2dd4bf">
              <animate attributeName="opacity" values="1;0.6;1" dur="2.8s" repeatCount="indefinite"/>
            </circle>
            <circle cx="920"  cy="1180" r="4" fill="#2dd4bf">
              <animate attributeName="opacity" values="1;0.5;1" dur="3.7s" repeatCount="indefinite"/>
            </circle>

            {/* Teal glow halos (radial filters simulated with larger semi-transparent circles) */}
            <circle cx="260"  cy="40"   r="10" fill="#2dd4bf" opacity="0.12"/>
            <circle cx="1030" cy="220"  r="10" fill="#2dd4bf" opacity="0.12"/>
            <circle cx="220"  cy="960"  r="10" fill="#2dd4bf" opacity="0.12"/>
            <circle cx="920"  cy="1180" r="10" fill="#2dd4bf" opacity="0.12"/>
          </symbol>
        </defs>

        {/* Render tiles stacked vertically */}
        {Array.from({ length: tilesNeeded }).map((_, i) => (
          <use
            key={i}
            href="#constellation-tile"
            x="0"
            y={i * TILE_H}
            width={TILE_W}
            height={TILE_H}
          />
        ))}
      </svg>
    </div>
  );
}
