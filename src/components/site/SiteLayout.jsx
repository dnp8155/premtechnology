import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import GlobalHeader from "./GlobalHeader";
import Footer from "./Footer";

import RouteMeta from "./RouteMeta";

const EASE = [0.22, 1, 0.36, 1];

export default function SiteLayout() {
  const location = useLocation();

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
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.32, ease: EASE }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}