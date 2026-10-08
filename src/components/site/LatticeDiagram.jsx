import React from "react";

/**
 * Hand-drawn elevation: lattice girder panel geometry.
 */
export default function LatticeDiagram({ className }) {
  const x0 = 60;
  const x1 = 620;
  const top = 80;
  const bottom = 200;
  const width = (x1 - x0) / 7;
  const xs = Array.from({ length: 8 }, (_, i) => x0 + i * width);

  return (
    <svg viewBox="0 0 680 300" className={className} role="img" aria-label="Elevation drawing of a lattice girder">
      <g stroke="currentColor" fill="none" strokeLinecap="square">
        {/* chords */}
        <line x1={x0 - 14} y1={top} x2={x1 + 14} y2={top} strokeWidth="1.8" />
        <line x1={x0 - 14} y1={bottom} x2={x1 + 14} y2={bottom} strokeWidth="1.8" />

        {/* verticals */}
        {xs.map((x) => (
          <line key={`v${x}`} x1={x} y1={top} x2={x} y2={bottom} strokeWidth="1" />
        ))}

        {/* diagonals */}
        {xs.slice(0, -1).map((x, i) =>
          i % 2 === 0 ? (
            <line key={`d${x}`} x1={x} y1={bottom} x2={x + width} y2={top} strokeWidth="1" />
          ) : (
            <line key={`d${x}`} x1={x} y1={top} x2={x + width} y2={bottom} strokeWidth="1" />
          )
        )}

        {/* end plates */}
        <line x1={x0 - 14} y1={top - 6} x2={x0 - 14} y2={bottom + 6} strokeWidth="1.2" />
        <line x1={x1 + 14} y1={top - 6} x2={x1 + 14} y2={bottom + 6} strokeWidth="1.2" />

        {/* chainage / panel dimension */}
        <line x1={x0} y1="246" x2={x1} y2="246" strokeWidth="0.9" strokeDasharray="5 4" />
        <line x1={x0} y1="240" x2={x0} y2="252" strokeWidth="0.9" />
        <line x1={x1} y1="240" x2={x1} y2="252" strokeWidth="0.9" />

        {/* leader */}
        <line x1="392" y1="152" x2="430" y2="140" strokeWidth="0.7" opacity="0.7" />
      </g>

      <g fill="currentColor">
        {xs.map((x) => (
          <circle key={`nt${x}`} cx={x} cy={top} r="3" />
        ))}
        {xs.map((x) => (
          <circle key={`nb${x}`} cx={x} cy={bottom} r="3" />
        ))}
      </g>

      <g
        fill="currentColor"
        fontSize="10"
        fontFamily="IBM Plex Mono, ui-monospace, monospace"
        letterSpacing="1.4"
      >
        <text x={x0 - 16} y="58">TOP CHORD</text>
        <text x="436" y="136">DIAGONAL</text>
        <text x="300" y="224">BOTTOM CHORD</text>
        <text x="340" y="268" textAnchor="middle" opacity="0.7">
          7 PANELS
        </text>
        <text x="40" y="292" opacity="0.7">LATTICE GIRDER — ELEVATION</text>
        <text x="650" y="292" textAnchor="end" opacity="0.7">
          NTS
        </text>
      </g>
    </svg>
  );
}