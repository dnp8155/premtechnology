import React from "react";

export default function BlueprintOverlay({ className }) {
  return (
    <svg
      viewBox="0 0 360 300"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <g stroke="#6b91ba" strokeWidth="1">
        <path d="M10 250H340M35 270V30M70 260V65M35 80H150M35 110H150M35 140H150M35 170H150" />
        <path d="M170 260L220 55L270 260M190 178H250M198 145H242M207 112H233M180 225H260M220 55L170 260M220 55L270 260M185 195L255 195M192 165L248 165M200 130L240 130" />
        <path d="M285 60H335M310 35V85M290 115H335M310 100V130" />
      </g>
      <g stroke="#0878f9" strokeWidth="1.5">
        <path d="M18 20H55M18 20V55M315 270H350M350 235V270" />
      </g>
    </svg>
  );
}