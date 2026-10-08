import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/images";

const META = [
  "Structural Engineering",
  "Temporary Works",
  "Transmission Structures",
  "Heavy Civil",
];

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image
        src={IMG.heroCover}
        alt="Steel lattice transmission tower rising against an overcast sky"
        fittingType="fill"
        loading="eager"
        fetchpriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/55 to-ink/95" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <div className="shell relative h-full">
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10" />
        </div>
      </div>

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-10 pt-32 lg:pb-14 lg:pt-40">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="label-mono flex flex-wrap items-center gap-3 text-white/60"
        >
          <span>Prem Technology Inc.</span>
          <span aria-hidden="true" className="h-px w-8 bg-white/25" />
          <span>Canada / USA</span>
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
          className="display mt-8 text-[clamp(2.6rem,8.2vw,7rem)] text-white"
        >
          Engineering
          <br />
          for complex
          <br />
          infrastructure.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.16, ease: EASE }}
          className="mt-9 max-w-2xl text-[16px] leading-relaxed text-white/70 lg:text-[18px]"
        >
          Specialized structural engineering for transmission structures, temporary works, heavy civil
          infrastructure and technically demanding construction projects across Canada and the USA.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.24, ease: EASE }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <Link to="/contact" className="btn-solid-light">
            Discuss Your Project
            <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <Link to="/expertise" className="btn-outline-light">
            Explore Our Expertise
          </Link>
        </motion.div>

        <div className="mt-16 grid grid-cols-2 border-t border-white/15 sm:grid-cols-4">
          {META.map((item) => (
            <p
              key={item}
              className="label-mono border-b border-white/10 py-5 pr-6 text-white/60 sm:border-b-0 sm:border-r sm:border-white/10 sm:last:border-r-0"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}