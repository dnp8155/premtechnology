import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlueprintOverlay from "./BlueprintOverlay";

const LABELS = [
  ["TRANSMISSION", "STRUCTURES"],
  ["TEMPORARY", "WORKS"],
  ["HEAVY CIVIL", "INFRASTRUCTURE"],
];

const PHOTO_CLIP = "polygon(13% 0, 100% 0, 100% 100%, 0 100%, 9% 80%, 0 66%, 11% 47%, 2% 31%)";
const PHOTO_CLIP_MOBILE = "polygon(0 12%, 15% 0, 100% 0, 100% 100%, 0 100%)";

export default function HeroStage() {
  return (
    <section className="relative isolate min-h-[660px] overflow-hidden bg-[linear-gradient(90deg,#fbfdff_0%,#f8fbff_35%,#f8fbffef_45%,#f8fbff14_67%,transparent_100%)] max-[760px]:min-h-[850px] max-[760px]:bg-[linear-gradient(180deg,#fbfdff_0%,#fbfdff_48%,#fbfdff1a_76%)]">
      {/* Photo */}
      <div
        className="absolute z-0 bg-cover bg-center max-[760px]:top-[390px] max-[760px]:left-0 max-[760px]:right-0 max-[760px]:bottom-0 left-[43%] top-0 bottom-0 right-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=88')",
          clipPath: PHOTO_CLIP,
        }}
        role="img"
        aria-label="Infrastructure construction photography"
      />
      <div
        className="absolute z-0 left-[43%] top-0 bottom-0 right-0 max-[760px]:top-[390px] max-[760px]:left-0"
        style={{
          clipPath: PHOTO_CLIP,
          background:
            "linear-gradient(90deg, #f7faffeb 0%, #f7faff59 20%, #0816260d 50%, #0816262e 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute z-0 left-[43%] top-0 bottom-0 right-0 max-[760px]:top-[390px] max-[760px]:left-0 max-[760px]:hidden"
        style={{
          clipPath: PHOTO_CLIP_MOBILE,
          background: "linear-gradient(180deg, #f7faff2e, #0816260f)",
        }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-50"
        style={{
          backgroundImage:
            "linear-gradient(#4877ad1f 1px, transparent 1px), linear-gradient(90deg, #4877ad1f 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(90deg, #000 0%, #000 45%, transparent 75%)",
          WebkitMaskImage: "linear-gradient(90deg, #000 0%, #000 45%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      {/* Blueprint */}
      <BlueprintOverlay className="pointer-events-none absolute left-[36%] top-[25px] z-10 h-[300px] w-[360px] opacity-[0.48] max-[760px]:left-[25%] max-[760px]:top-[270px] max-[760px]:h-[180px] max-[760px]:w-[240px]" />

      {/* Coords */}
      <div className="absolute left-[49%] top-[27%] z-20 text-[11px] font-bold leading-[1.7] tracking-[1px] text-[#243b55] max-[760px]:hidden">
        45.4215° N
        <br />
        75.6972° W
      </div>

      {/* Side text */}
      <div
        className="absolute right-[22px] top-[48%] z-20 text-[10px] font-bold leading-[1.8] tracking-[1.3px] text-white max-[760px]:hidden"
        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", textShadow: "0 1px 6px #000" }}
      >
        BRIDGES · VIADUCTS · OVERPASSES · STRUCTURES
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[770px] pb-[142px] pl-[58px] pr-0 pt-[84px] max-[1100px]:max-w-[650px] max-[1100px]:pl-[36px] max-[760px]:px-[22px] max-[760px]:pb-0 max-[760px]:pt-[48px]">
        <div className="mb-7 flex items-center gap-[14px] text-[11px] font-bold tracking-[2.8px] text-[#354d68] max-[760px]:text-[9px] max-[760px]:tracking-[1.6px] max-[760px]:mb-[22px]">
          <span className="h-[2px] w-12 bg-[#0878f9]" />
          <span className="border border-[#c6d3e2] bg-white/70 px-[13px] py-[9px] max-[760px]:px-[9px] max-[760px]:py-[7px]">
            STRUCTURAL ENGINEERING
          </span>
        </div>
        <h1 className="m-0 max-w-[800px] text-[clamp(48px,5.6vw,88px)] font-black leading-[0.99] tracking-[-3.5px] text-[#0e2038] max-[1100px]:text-[clamp(46px,6.2vw,70px)] max-[760px]:text-[clamp(42px,12vw,66px)] max-[760px]:tracking-[-2px] max-[760px]:leading-[1.01]">
          ENGINEERING
          <br />
          <span className="text-[#0878f9]">FOR COMPLEX</span>
          <br />
          INFRASTRUCTURE.
        </h1>
        <p className="mt-6 max-w-[510px] text-[19px] leading-[1.48] text-[#34445a] max-[760px]:mt-[18px] max-[760px]:text-[16px]">
          Specialized structural engineering for transmission structures, temporary works and heavy
          civil infrastructure across Canada and the USA.
        </p>
        <div className="relative mt-7 h-[2px] w-[170px] bg-[#d4dfec] max-[760px]:mt-5">
          <span className="absolute h-[2px] w-[88px] bg-[#0878f9]" />
        </div>
      </div>

      {/* Labels */}
      <div className="absolute bottom-[118px] left-[41%] z-20 grid gap-[17px] text-[10px] font-bold leading-[1.35] tracking-[1.5px] text-[#263d57] max-[760px]:bottom-[100px] max-[760px]:left-[22px] max-[760px]:right-[22px] max-[760px]:flex max-[760px]:flex-wrap max-[760px]:gap-[7px]">
        {LABELS.map((lines) => (
          <div
            key={lines[0]}
            className="border-l border-[#7f9bb9] py-1 pl-3 max-[760px]:border-l-0 max-[760px]:border max-[760px]:border-[#d5e0ec] max-[760px]:bg-white/90 max-[760px]:px-2 max-[760px]:py-[7px] max-[760px]:text-[8px]"
          >
            {lines.map((l) => (
              <div key={l}>{l}</div>
            ))}
          </div>
        ))}
      </div>

      {/* CTA wrap */}
      <div className="absolute bottom-[-8px] left-[-8px] z-30 flex h-[104px] w-[42%] items-center rounded-tr-[48px] bg-[#101c2a] p-2 max-[1100px]:w-[48%] max-[760px]:h-[78px] max-[760px]:w-[88%] max-[760px]:bottom-[-4px] max-[760px]:rounded-tr-[30px] max-[760px]:p-[5px] max-[760px]:pr-0">
        <Link
          to="/contact"
          className="flex h-full w-full items-center justify-between rounded-tr-[42px] bg-[#0878f9] pl-[58px] pr-[48px] text-[15px] font-extrabold tracking-[3px] text-white max-[1100px]:pl-[36px] max-[1100px]:pr-[26px] max-[1100px]:text-xs max-[1100px]:tracking-[2px] max-[760px]:rounded-tr-[25px] max-[760px]:pl-[23px] max-[760px]:pr-[20px] max-[760px]:text-[10px] max-[760px]:tracking-[1.5px]"
        >
          <span>DISCUSS YOUR PROJECT</span>
          <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/80 max-[760px]:h-[38px] max-[760px]:w-[38px]">
            <ArrowRight size={24} strokeWidth={2} />
          </span>
        </Link>
      </div>

      {/* Index dots */}
      <div className="absolute bottom-6 right-11 z-30 flex gap-[7px] rounded-3xl border border-white/35 bg-[#0c1c2ac7] px-4 py-[11px] max-[760px]:bottom-[18px] max-[760px]:right-3 max-[760px]:px-3 max-[760px]:py-[9px]">
        <span className="h-[7px] w-[22px] rounded-lg bg-white" />
        <span className="h-[7px] w-[7px] rounded-full bg-white/50" />
        <span className="h-[7px] w-[7px] rounded-full bg-white/50" />
        <span className="h-[7px] w-[7px] rounded-full bg-white/50" />
      </div>
    </section>
  );
}