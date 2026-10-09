import React from "react";
import HeroNav from "./HeroNav";
import HeroStage from "./HeroStage";

export default function Hero() {
  return (
    <section className="relative mt-3 sm:mt-4 lg:mt-6">
      <div className="mx-3 overflow-visible rounded-2xl border-2 border-ink sm:mx-4 lg:mx-6">
        <HeroNav />
        <div className="overflow-hidden rounded-b-2xl">
          <HeroStage />
        </div>
      </div>
    </section>
  );
}