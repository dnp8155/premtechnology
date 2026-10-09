import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import GlobalHeader from "./GlobalHeader";
import Footer from "./Footer";
import FloatingCta from "./FloatingCta";
import RouteMeta from "./RouteMeta";

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <a
        href="#main"
        className="label-mono sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-3 focus:text-white"
      >
        Skip to content
      </a>
      <RouteMeta />
      <GlobalHeader />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}