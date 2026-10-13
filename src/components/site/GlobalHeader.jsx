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
  { label: "Insights", path: "/insights" },
  { label: "Careers", path: "/careers" },
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

export default function GlobalHeader() {
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
    <header className="sticky top-0 z-50 bg-[linear-gradient(105deg,#111c28,#101923_72%,#14283d)] text-white shadow-md">
      <div className="flex h-[86px] w-full items-center justify-between pl-6 sm:pl-8 lg:pl-10 pr-0 max-[1024px]:h-[76px] max-[1024px]:px-5">
        <div className="flex-shrink-0">
          <Brand />
        </div>

        <nav className="hidden lg:flex flex-1 items-center justify-center gap-2 xl:gap-4 2xl:gap-6 px-3 text-[13px] xl:text-[14px] text-[#e9eef6]">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="relative flex h-[86px] items-center px-1.5 whitespace-nowrap transition-colors hover:text-white"
            >
              {({ isActive }) => (
                <>
                  <span>{item.label}</span>
                  {item.chevron && <ChevronDown size={11} className="ml-1 opacity-75" strokeWidth={2.5} />}
                  {isActive && (
                    <span className="absolute bottom-[20px] left-1.5 right-1.5 h-[3px] rounded-[3px] bg-[#0878f9]" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center flex-shrink-0 h-full">
          <Link
            to="/contact"
            className="group hidden lg:flex h-full items-center gap-3 xl:gap-4 whitespace-nowrap bg-[#0878f9] hover:bg-[#076ee4] transition-colors pl-6 pr-5 xl:pl-9 xl:pr-7 text-xs xl:text-sm font-[650] text-white rounded-bl-[42px]"
          >
            <span>Discuss Your Project</span>
            <span className="flex h-8 w-8 xl:h-10 xl:w-10 flex-shrink-0 items-center justify-center rounded-full border border-white/80 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              <ArrowUpRight size={18} strokeWidth={2.2} />
            </span>
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="hidden max-[1024px]:flex h-10 w-10 items-center justify-center text-white"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="fixed inset-0 top-[76px] z-[55] flex flex-col overflow-y-auto bg-[#111c28] px-6 pb-8 pt-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex w-full items-center border-b border-white/10 py-4 text-[17px] text-white"
            >
              {item.label}
              {item.chevron && <ChevronDown size={14} className="ml-2" strokeWidth={2.5} />}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="mt-5 flex w-full items-center justify-center gap-2 bg-[#0878f9] py-4 text-sm font-semibold text-white rounded-bl-[30px]"
          >
            Discuss Your Project
            <ArrowUpRight size={18} strokeWidth={2} />
          </Link>
        </nav>
      )}
    </header>
  );
}