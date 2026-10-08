import React from "react";
import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

export default function Reveal({ children, className, delay = 0, y = 20, as = "div" }) {
  const Component = motion[as] || motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.75, delay, ease: EASE }}
    >
      {children}
    </Component>
  );
}