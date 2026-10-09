import React from "react";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";

export default function FooterLegal() {
  return (
    <div
      className="flex min-h-[60px] items-center justify-between gap-5 px-[2.7%] py-3.5 text-[11px] tracking-[0.2px] text-[#f5f8fc] max-[950px]:flex-col max-[950px]:items-start max-[600px]:px-5 max-[600px]:py-[17px]"
      style={{ background: "linear-gradient(100deg,#102638,#0b1c2b)" }}
    >
      <div className="flex flex-wrap items-center gap-5 max-[600px]:gap-2.5">
        <span>
          © {new Date().getFullYear()} Prem Technology Inc.
        </span>
        <span className="h-[18px] w-px bg-white/35 max-[600px]:hidden" />
        <span>All rights reserved.</span>
      </div>
      <div className="flex flex-wrap items-center gap-5 max-[600px]:gap-2.5 max-[600px]:text-[10px]">
        <Link to="/privacy" className="transition-colors hover:text-[#8dc4ff]">
          Privacy Policy
        </Link>
        <span className="h-[18px] w-px bg-white/35 max-[600px]:hidden" />
        <Link to="/terms" className="transition-colors hover:text-[#8dc4ff]">
          Terms of Use
        </Link>
        <span className="h-[18px] w-px bg-white/35 max-[600px]:hidden" />
        <a href="/sitemap.xml" className="transition-colors hover:text-[#8dc4ff]">
          Sitemap
        </a>
        <span className="h-[18px] w-px bg-white/35 max-[600px]:hidden" />
        <span className="flex items-center gap-2.5 whitespace-nowrap">
          <span className="grid h-[21px] w-[21px] place-items-center rounded-full border border-[#dbe9f7]">
            <Globe size={13} aria-hidden="true" />
          </span>
          Canada &nbsp;/&nbsp; USA
        </span>
      </div>
    </div>
  );
}