import React from "react";
import HeroNav from "./HeroNav";
import HeroStage from "./HeroStage";
import HomeScrollHeader from "./HomeScrollHeader";

export default function Hero() {
  return (
    <section className="bg-[#eaf1fb]">
      <HomeScrollHeader />
      <div className="overflow-hidden border-8 border-[#101c2a] bg-[#f7faff] max-[760px]:border-4">
        <HeroNav />
        <HeroStage />
      </div>
    </section>
  );
}