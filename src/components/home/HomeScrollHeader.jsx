import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV } from "@/lib/nav";

const NAV_ITEMS = [{ label: "Home", path: "/" }, ...NAV];

export default function HomeScrollHeader() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#101c2a]/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1540px] items-center justify-between px-[54px] max-[1100px]:px-[30px] max-[760px]:px-[22px]">
        <Link to="/" className="flex flex-col leading-none" aria-label="Prem Technology Inc. — home">
          <span className="text-[24px] font-extrabold tracking-[-1.4px] text-white">
            PREM
            <span className="ml-[5px] mt-[3px] inline-block h-2.5 w-2.5 bg-[#0878f9] align-top" />
          </span>
          <span className="mt-1 text-[9px] font-semibold tracking-[6px] text-[#d5deea]">
            TECHNOLOGY INC.
          </span>
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-[#e9eef6] lg:flex">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                cn("transition-colors hover:text-white", isActive && "text-white")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden items-center gap-2 rounded-full bg-[#0878f9] px-5 py-2.5 text-xs font-semibold text-white md:inline-flex"
        >
          Discuss Your Project <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
    </header>
  );
}