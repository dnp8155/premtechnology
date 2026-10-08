import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/nav";
import Wordmark from "./Wordmark";
import { cn } from "@/lib/utils";

function NavItem({ item, light, onClick }) {
  return (
    <NavLink
      to={item.path}
      onClick={onClick}
      className={({ isActive }) =>
        cn(
          "label-mono group inline-flex flex-col gap-2 transition-colors duration-300",
          light ? "text-white/70 hover:text-white" : "text-steel hover:text-ink",
          isActive && (light ? "text-white" : "text-ink")
        )
      }
    >
      {({ isActive }) => (
        <>
          <span>{item.label}</span>
          <span
            aria-hidden="true"
            className={cn(
              "h-px w-full origin-left bg-current transition-transform duration-500",
              isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
            )}
          />
        </>
      )}
    </NavLink>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = open || !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
          open
            ? "border-b border-white/15 bg-graphite"
            : scrolled
              ? "border-b border-border bg-background/90 backdrop-blur-md"
              : "border-b border-white/20 bg-transparent"
        )}
      >
        <div
          className={cn(
            "shell flex items-center justify-between transition-all duration-500",
            scrolled ? "h-[68px]" : "h-[78px] lg:h-[92px]"
          )}
        >
          <Link to="/" aria-label="Prem Technology Inc. — home" className="py-2">
            <Wordmark tone={light ? "light" : "dark"} />
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-9 lg:flex">
            {NAV.map((item) => (
              <NavItem key={item.path} item={item} light={light} />
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className={cn("hidden md:inline-flex", light ? "btn-outline-light" : "btn-solid-dark")}>
              Discuss Your Project
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="site-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center border transition-colors lg:hidden",
                light ? "border-white/30 text-white hover:bg-white/10" : "border-ink/20 text-ink hover:bg-ink/5"
              )}
            >
              {open ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div id="site-menu" className="fixed inset-0 z-40 overflow-y-auto bg-graphite pt-[78px] lg:hidden">
          <div className="tech-grid-dark absolute inset-0 opacity-50" aria-hidden="true" />
          <div className="shell relative flex min-h-[calc(100svh-78px)] flex-col pb-10 pt-8">
            <nav aria-label="Mobile" className="border-t border-white/15">
              {NAV.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className="group flex items-baseline justify-between border-b border-white/15 py-5 text-white"
                >
                  <span className="display t-h2">{item.label}</span>
                  <span className="label-mono text-white/55">{item.index}</span>
                </NavLink>
              ))}
            </nav>
            <Link to="/contact" className="btn-solid-light mt-8 w-full">
              Discuss Your Project
            </Link>
            <p className="label-text mt-auto pt-10 text-white/55">Prem Technology Inc. — Canada / USA</p>
          </div>
        </div>
      ) : null}
    </>
  );
}