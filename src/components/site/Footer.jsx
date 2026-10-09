import React from "react";
import FooterCta from "./footer/FooterCta";
import FooterColumns from "./footer/FooterColumns";
import FooterLegal from "./footer/FooterLegal";

export default function Footer() {
  return (
    <footer className="bg-[#eaf1fb] p-3 sm:p-4 max-[600px]:p-[7px]">
      <div className="mx-auto max-w-[2048px] overflow-hidden rounded-[30px] border-8 border-[#102638] bg-[#f8fbff] shadow-[0_22px_60px_rgba(14,34,58,0.17)] max-[600px]:rounded-[20px] max-[600px]:border-[5px]">
        <FooterCta />
        <FooterColumns />
        <FooterLegal />
      </div>
    </footer>
  );
}