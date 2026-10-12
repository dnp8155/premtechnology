import React from "react";
import { CanadaFlag, UsaFlag } from "@/components/site/Flags";

const REGISTRATIONS = [
  { flag: CanadaFlag, label: "P.Eng.", region: "Licensed to practice in Canada" },
  { flag: UsaFlag, label: "P.E.", region: "Licensed to practice in the U.S.A." },
];

export default function RegistrationStrip() {
  return (
    <section className="border-b border-border bg-graphite text-white">
      <div className="shell flex flex-col items-center justify-center gap-6 py-5 sm:flex-row sm:gap-10 lg:gap-16">
        {REGISTRATIONS.map(({ flag: Flag, label, region }) => (
          <div key={label} className="flex items-center gap-3.5">
            <Flag className="h-7 w-10 shrink-0 rounded-[2px] shadow-sm ring-1 ring-white/15" />
            <div className="leading-none">
              <div className="font-display text-lg font-semibold tracking-[-0.01em] text-white">
                {label}
              </div>
              <div className="mt-1 label-mono text-white/55">{region}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}