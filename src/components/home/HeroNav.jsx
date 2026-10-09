import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Wordmark from "@/components/site/Wordmark";
import { NAV } from "@/lib/nav";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [{ label: "Home", path: "/" }, ...NAV];

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
    <>
      <div className="sticky top-0 z-50 rounded-t-2xl bg-ink">
        <div className="shell flex h-[72px] items-center justify-between">
          <Link to="/" className="py-2" aria-label="Prem Technology Inc. — home">
            <Wordmark tone="light" />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "label-mono text-white/65 transition-colors hover:text-white",
                    isActive && "text-white"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.05em] text-white transition-colors hover:bg-brand/90 md:inline-flex"
            >
              Discuss Your Project
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight size={12} aria-hidden="true" />
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="inline-flex h-10 w-10 items-center justify-center border border-white/25 text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-ink pt-[72px] lg:hidden">
          <nav aria-label="Mobile" className="shell border-t border-white/10">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="flex items-center justify-between border-b border-white/10 py-5 text-white"
              >
                <span className="display t-h3">{item.label}</span>
                <span className="label-mono text-white/40">→</span>
              </NavLink>
            ))}
          </nav>
          <Link to="/contact" className="btn-solid-light mx-5 mt-6 w-[calc(100%-2.5rem)]">
            Discuss Your Project
          </Link>
        </div>
      )}
    </>
  );
}