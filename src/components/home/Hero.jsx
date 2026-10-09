import React from "react";
import HeroStage from "./HeroStage";

export default function Hero() {
  return (
    <section className="bg-[#eaf1fb] p-3 sm:p-4 max-[760px]:p-2">
      <div className="overflow-hidden rounded-[30px] border-8 border-[#101c2a] bg-[#f7faff] shadow-[0_22px_60px_#0e223a2e] max-[760px]:rounded-[20px] max-[760px]:border-4">
        <HeroStage />
      </div>
    </section>
  );
}