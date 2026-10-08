import React from "react";

/**
 * Hand-drawn section drawing: shoring and excavation support.
 * Line work only — used as a technical figure inside the temporary works sections.
 */
export default function ShoringDiagram({ className }) {
  const lagging = [128, 156, 184, 212, 240, 268, 296, 318];

  return (
    <svg viewBox="0 0 680 400" className={className} role="img" aria-label="Section drawing of shoring and excavation support">
      <g stroke="currentColor" fill="none" strokeLinecap="square">
        {/* retained ground profile */}
        <line x1="40" y1="110" x2="240" y2="110" strokeWidth="1.4" />
        <line x1="240" y1="110" x2="240" y2="330" strokeWidth="1.4" />
        <line x1="240" y1="330" x2="650" y2="330" strokeWidth="1.4" />

        {/* soil hatch */}
        {Array.from({ length: 17 }).map((_, i) => (
          <line
            key={`h${i}`}
            x1={40 + i * 12}
            y1="110"
            x2={32 + i * 12}
            y2="96"
            strokeWidth="0.7"
            opacity="0.45"
          />
        ))}

        {/* lagging behind the pile */}
        {lagging.map((y) => (
          <line key={`l${y}`} x1="226" y1={y} x2="240" y2={y} strokeWidth="0.9" />
        ))}

        {/* tiebacks into retained soil */}
        <line x1="240" y1="150" x2="85" y2="212" strokeWidth="1.4" />
        <line x1="240" y1="258" x2="100" y2="306" strokeWidth="1.4" />
        <circle cx="85" cy="212" r="3" strokeWidth="0.9" />
        <circle cx="100" cy="306" r="3" strokeWidth="0.9" />

        {/* formation level reference */}
        <line x1="290" y1="110" x2="290" y2="330" strokeWidth="0.8" strokeDasharray="5 5" opacity="0.5" />
        <line x1="283" y1="110" x2="297" y2="110" strokeWidth="0.9" opacity="0.6" />
        <line x1="283" y1="330" x2="297" y2="330" strokeWidth="0.9" opacity="0.6" />

        {/* corner crosshairs */}
        <line x1="33" y1="110" x2="47" y2="110" strokeWidth="0.8" opacity="0.5" />
        <line x1="40" y1="103" x2="40" y2="117" strokeWidth="0.8" opacity="0.5" />
        <line x1="643" y1="330" x2="657" y2="330" strokeWidth="0.8" opacity="0.5" />
        <line x1="650" y1="323" x2="650" y2="337" strokeWidth="0.8" opacity="0.5" />

        {/* leaders */}
        <line x1="292" y1="72" x2="252" y2="76" strokeWidth="0.7" opacity="0.7" />
        <line x1="296" y1="124" x2="244" y2="128" strokeWidth="0.7" opacity="0.7" />
        <line x1="150" y1="240" x2="176" y2="228" strokeWidth="0.7" opacity="0.7" />
        <line x1="400" y1="308" x2="440" y2="328" strokeWidth="0.7" opacity="0.7" />
      </g>

      {/* soldier pile in section */}
      <rect x="240" y="68" width="12" height="302" fill="currentColor" />

      {/* anchor heads */}
      <circle cx="246" cy="150" r="4.5" fill="currentColor" />
      <circle cx="246" cy="258" r="4.5" fill="currentColor" />

      <g
        fill="currentColor"
        fontSize="10"
        fontFamily="IBM Plex Mono, ui-monospace, monospace"
        letterSpacing="1.4"
      >
        <text x="44" y="72">RETAINED SOIL</text>
        <text x="292" y="68">SOLDIER PILE</text>
        <text x="300" y="128">TIMBER LAGGING</text>
        <text x="44" y="244">TIEBACK ANCHOR</text>
        <text x="400" y="300">FORMATION LEVEL</text>
        <text x="40" y="382" opacity="0.7">SHORING &amp; EXCAVATION SUPPORT — SECTION</text>
        <text x="650" y="382" textAnchor="end" opacity="0.7">
          NTS
        </text>
      </g>
    </svg>
  );
}