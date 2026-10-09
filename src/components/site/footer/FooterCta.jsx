import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { IMG } from "@/lib/images";

const HERO_IMAGE = IMG.appBridge;

function CtaButton({ to, label, primary }) {
  return (
    <Link
      to={to}
      className="group flex min-h-[64px] items-center justify-between gap-3.5 rounded-[12px] border px-[22px] pl-[26px] font-extrabold tracking-[1.2px] transition-transform duration-200 hover:-translate-y-0.5"
      style={{
        borderColor: primary ? "#0878f9" : "#aabbd0",
        background: primary ? "#0878f9" : "rgba(255,255,255,0.84)",
        color: primary ? "#fff" : "#142b43",
        boxShadow: primary ? "0 8px 18px rgba(8,120,249,0.18)" : "none",
      }}
    >
      <span className="text-[13px]">{label}</span>
      <span
        className="grid h-[34px] w-[34px] shrink-0 place-items-center rounded-full border"
        style={{ borderColor: "currentColor" }}
      >
        <ArrowUpRight size={18} strokeWidth={2.5} aria-hidden="true" />
      </span>
    </Link>
  );
}

export default function FooterCta() {
  return (
    <section
      className="relative grid items-center gap-7 overflow-hidden border-b-8 border-[#102638] px-[5.2%] py-[34px] min-h-[255px] max-[950px]:gap-6 max-[600px]:flex max-[600px]:flex-col max-[600px]:items-stretch max-[600px]:gap-[22px] max-[600px]:px-[22px] max-[600px]:py-7"
      style={{
        gridTemplateColumns: "1.18fr 0.72fr 1.25fr",
        background: `linear-gradient(90deg,#f8fbff 0%,#f8fbff 46%,rgba(248,251,255,0.84) 57%,rgba(248,251,255,0.02) 76%), url(${HERO_IMAGE})`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
      }}
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(74,119,165,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(74,119,165,0.1) 1px,transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(90deg,#000 0%,#000 47%,transparent 74%)",
          WebkitMaskImage: "linear-gradient(90deg,#000 0%,#000 47%,transparent 74%)",
        }}
        aria-hidden="true"
      />

      {/* Copy */}
      <div className="relative z-[1] max-[600px]:pr-0">
        <div className="mb-[18px] flex items-center gap-3.5">
          <span className="h-[3px] w-[52px] bg-[#0878f9]" aria-hidden="true" />
          <span className="text-[12px] font-extrabold tracking-[2px] text-[#142b43]">
            LET'S ENGINEER TOGETHER
          </span>
        </div>
        <h2
          className="mb-4 font-display font-black leading-[1.03] tracking-[-1.8px] text-[#142b43] max-[600px]:text-[34px] max-[600px]:tracking-[-1px]"
          style={{ fontSize: "clamp(32px,3vw,52px)" }}
        >
          HAVE A COMPLEX <span className="block text-[#0878f9]">ENGINEERING PROJECT?</span>
        </h2>
        <p className="max-w-[590px] text-[16px] leading-[1.48] text-[#40536a] max-[600px]:text-sm">
          Tell us about your project or engineering requirement. Our team will review the
          opportunity and discuss how we can support your goals.
        </p>
      </div>

      {/* Actions */}
      <div className="relative z-[1] grid gap-3.5">
        <CtaButton to="/contact" label="DISCUSS YOUR PROJECT" primary />
        <CtaButton to="/services" label="EXPLORE OUR SERVICES" />
      </div>

      {/* Meta */}
      <div className="relative z-[1] justify-self-end self-start text-[10px] font-extrabold leading-[1.9] tracking-[1.6px] text-[#2b435b] max-[1350px]:hidden">
        <span className="absolute left-0 top-[-14px] h-[2px] w-[34px] bg-[#0878f9]" aria-hidden="true" />
        STRUCTURES<br />
        INFRASTRUCTURE<br />
        CONSTRUCTION<br />
        ENGINEERING<br />
        <br />
        BUILT FOR A<br />
        STRONGER<br />
        TOMORROW
      </div>
    </section>
  );
}