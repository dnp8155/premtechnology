import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services", chevron: true },
  { label: "Expertise", path: "/expertise", chevron: true },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

function Brand() {
  return (
    <Link to="/" className="flex w-max flex-col leading-none" aria-label="Prem Technology Inc. — home">
      <span className="text-[29px] font-extrabold tracking-[-1.4px] text-white max-[760px]:text-[25px]">
        PREM
        <span className="ml-[5px] mt-[3px] inline-block h-3 w-3 bg-[#0878f9] align-top" />
      </span>
      <span className="mt-[7px] text-[10px] font-semibold tracking-[6px] text-[#d5deea] max-[760px]:text-[8px] max-[760px]:tracking-[4.5px]">
        TECHNOLOGY INC.
      </span>
    </Link>
  );
}

export default function HeroNav() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="relative z-[5] grid h-[86px] grid-cols-[300px_1fr_300px] items-center bg-[linear-gradient(105deg,#111c28,#101923_72%,#14283d)] pl-[54px] text-white max-[1100px]:grid-cols-[230px_1fr_235px] max-[1100px]:pl-[30px] max-[760px]:flex max-[760px]:justify-between max-[760px]:px-[22px] max-[760px]:pl-0 max-[760px]:h-[76px]">
      <Brand />

      <nav className="flex h-full items-center justify-center gap-[clamp(18px,3vw,48px)] text-sm text-[#e9eef6] max-[760px]:hidden">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="relative flex h-full items-center whitespace-nowrap transition-colors hover:text-white"
          >
            {({ isActive }) => (
              <>
                <span>{item.label}</span>
                {item.chevron && <ChevronDown size={12} className="ml-2" strokeWidth={2.5} />}
                {isActive && (
                  <span className="absolute bottom-[17px] left-0 right-0 h-[3px] rounded-[3px] bg-[#0878f9]" />
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <Link
        to="/contact"
        className="flex h-full items-center justify-between whitespace-nowrap bg-[#0878f9] pl-[42px] pr-[28px] text-sm font-[650] text-white rounded-bl-[42px] max-[1100px]:pl-[25px] max-[1100px]:pr-[18px] max-[1100px]:text-xs max-[760px]:hidden"
      >
        <span>Discuss Your Project</span>
        <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full border border-white/80">
          <ArrowUpRight size={20} strokeWidth={2} />
        </span>
      </Link>

      <button
        onClick={() => setOpen((v) => !v)}
        className="hidden h-10 w-10 items-center justify-center text-white max-[760px]:flex"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {open && (
        <nav className="absolute left-0 right-0 top-[71px] z-10 flex flex-col items-start gap-0 bg-[#111c28] px-[22px] py-[18px] shadow-[0_12px_24px_#0003] max-[760px]:flex lg:hidden">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex w-full items-center py-3 text-white"
            >
              {item.label}
              {item.chevron && <ChevronDown size={12} className="ml-2" />}
            </NavLink>
          ))}
          <Link to="/contact" className="mt-3 w-full bg-[#0878f9] py-3 text-center text-sm font-semibold text-white rounded-bl-[30px]">
            Discuss Your Project
          </Link>
        </nav>
      )}
    </header>
  );
}