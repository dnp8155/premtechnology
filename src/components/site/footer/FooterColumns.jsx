import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Youtube, Mail } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMG } from "@/lib/images";
import { CONTACT_INFO } from "@/lib/content";

const BLUEPRINT = IMG.footerBlueprint;

const FOOTER_NAV = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Expertise", path: "/expertise" },
  { label: "Projects", path: "/projects" },
  { label: "Insights", path: "/insights" },
  { label: "Careers", path: "/careers" },
  { label: "Contact", path: "/contact" },
];

const FOOTER_SERVICES = [
  { label: "Transmission & Power Structures", path: "/services#transmission" },
  { label: "Temporary & Construction Structures", path: "/services#temporary" },
  { label: "Heavy Civil & Infrastructure", path: "/services#civil" },
  { label: "Water & Wastewater", path: "/services#civil" },
  { label: "Technical Review", path: "/services#supporting" },
  { label: "Construction Engineering", path: "/services#supporting" },
];

const FOOTER_SUPPORT = [
  "General Contractors",
  "EPC Companies",
  "Utilities",
  "Engineering Firms",
  "Infrastructure Owners",
  "Municipal / Public Sector",
  "Fabricators",
  "Developers",
];

const headingClass =
  "mb-5 text-[13px] font-black tracking-[0.3px] text-black max-[600px]:mb-3.5";
const linkClass =
  "text-[13px] leading-[1.3] text-black transition-colors hover:text-[#0878f9]";

function Heading({ children }) {
  return (
    <h3 className={headingClass}>
      {children}
      <span className="mt-3 block h-[3px] w-[27px] bg-[#0878f9]" aria-hidden="true" />
    </h3>
  );
}

export default function FooterColumns() {
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus("Newsletter signup needs to be connected to a subscription service.");
  };

  return (
    <footer
      className="relative grid min-h-[325px] gap-0 overflow-hidden grid-cols-[1.65fr_0.7fr_1.22fr_1.05fr_1.12fr_0.72fr] px-[5.2%] pb-[34px] pt-[38px] max-[1350px]:grid-cols-[1.45fr_0.68fr_1.1fr_1fr_1.1fr] max-[950px]:grid-cols-[1.3fr_1fr_1fr] max-[950px]:gap-x-0 max-[950px]:gap-y-8 max-[600px]:grid-cols-[1fr_1fr] max-[600px]:px-[22px] max-[600px]:py-7 max-[600px]:gap-y-7"
      style={{
        backgroundColor: "#f9fafb",
        backgroundImage: `linear-gradient(rgba(249,250,251,0.6),rgba(249,250,251,0.6)),url(${BLUEPRINT})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center bottom",
        backgroundSize: "cover",
      }}
    >

      {/* Col 1: Company */}
      <div className="min-w-0 pr-5 max-[600px]:col-span-2 max-[600px]:pr-0">
        <Link to="/" className="inline-flex flex-col leading-none" aria-label="Prem Technology Inc. home">
          <strong className="flex items-center font-display text-black font-black tracking-[-1.5px]" style={{ fontSize: "clamp(26px,2.3vw,42px)" }}>
            PREM
            <i className="ml-[7px] mt-[5px] inline-block h-[13px] w-[13px] bg-[#0878f9]" aria-hidden="true" />
          </strong>
          <small className="mt-[7px] text-[10px] font-semibold tracking-[6px] text-black">
            TECHNOLOGY INC.
          </small>
        </Link>
        <div className="my-2.5 h-[3px] w-[31px] bg-[#0878f9]" aria-hidden="true" />
        <p className="mb-4 max-w-[330px] text-sm leading-[1.5] text-black">
          Specialized structural engineering for complex infrastructure and construction
          projects across Canada and the USA.
        </p>
        <div className="text-[9px] font-extrabold leading-[1.9] tracking-[0.7px] text-black">
          TRANSMISSION&nbsp; | &nbsp;TEMPORARY WORKS&nbsp; | &nbsp;HEAVY CIVIL&nbsp; | &nbsp;INFRASTRUCTURE
        </div>
      </div>

      {/* Col 2: Navigation */}
      <div className="min-w-0 border-l border-[#d5e0eb] px-5 max-[950px]:border-l-0 max-[950px]:pl-0 max-[600px]:pr-0">
        <Heading>NAVIGATION</Heading>
        <nav className="grid gap-2.5" aria-label="Footer navigation">
          {FOOTER_NAV.map((item) => (
            <Link key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Col 3: Services */}
      <div className="min-w-0 border-l border-[#d5e0eb] px-5 max-[600px]:col-span-2 max-[600px]:border-l-0 max-[600px]:pl-0">
        <Heading>OUR SERVICES</Heading>
        <nav className="grid gap-2.5" aria-label="Footer services">
          {FOOTER_SERVICES.map((item) => (
            <Link key={item.label} to={item.path} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Col 4: Who We Support */}
      <div className="min-w-0 border-l border-[#d5e0eb] px-5 max-[950px]:border-l-0 max-[950px]:pl-0 max-[600px]:col-span-2">
        <Heading>WHO WE SUPPORT</Heading>
        <nav className="grid gap-2.5" aria-label="Clients and sectors">
          {FOOTER_SUPPORT.map((item) => (
            <Link key={item} to="/about" className={linkClass}>
              {item}
            </Link>
          ))}
        </nav>
      </div>

      {/* Col 5: Stay Connected */}
      <div className="min-w-0 border-l border-[#d5e0eb] px-5 max-[600px]:col-span-2 max-[600px]:border-l-0 max-[600px]:pl-0">
        <Heading>STAY CONNECTED</Heading>
        <p className="mb-4 text-[13px] leading-[1.5] text-black">
          Get engineering insights, project updates and industry news.
        </p>
        <form onSubmit={onSubmit} className="flex h-[47px] items-center rounded-[10px] border border-[#b9c8d8] bg-white p-1 shadow-[0_5px_12px_rgba(21,49,77,0.06)]">
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            aria-label="Your email address"
            required
            className="min-w-0 flex-1 border-0 bg-transparent px-2 text-[12px] text-black outline-none placeholder:text-black/55"
          />
          <button
            type="submit"
            aria-label="Submit email"
            className="grid h-[37px] w-[37px] shrink-0 place-items-center rounded-full bg-[#0878f9] text-white transition-colors hover:bg-[#0065dd]"
          >
            <ArrowRight size={18} strokeWidth={2.5} aria-hidden="true" />
          </button>
        </form>
        {status && (
          <p className="mt-2.5 text-[11px] leading-[1.5] text-[#40536a]" aria-live="polite">
            {status}
          </p>
        )}
        <div className="mt-4 flex gap-2.5">
          <a
            href="#"
            aria-label="LinkedIn"
            title="Add your LinkedIn URL"
            className="grid h-[43px] w-[43px] place-items-center rounded-[9px] border border-[#c4d1df] bg-white/85 text-[#142b43] shadow-[0_5px_12px_rgba(21,49,77,0.05)] transition-colors hover:border-[#0878f9] hover:text-[#0878f9]"
          >
            <Linkedin size={16} strokeWidth={2.5} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            title="Add your YouTube URL"
            className="grid h-[43px] w-[43px] place-items-center rounded-[9px] border border-[#c4d1df] bg-white/85 text-[#142b43] shadow-[0_5px_12px_rgba(21,49,77,0.05)] transition-colors hover:border-[#0878f9] hover:text-[#0878f9]"
          >
            <Youtube size={16} strokeWidth={2.5} />
          </a>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            aria-label="Email Prem Technology"
            className="grid h-[43px] w-[43px] place-items-center rounded-[9px] border border-[#c4d1df] bg-white/85 text-[#142b43] shadow-[0_5px_12px_rgba(21,49,77,0.05)] transition-colors hover:border-[#0878f9] hover:text-[#0878f9]"
          >
            <Mail size={16} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* Col 6: Image panel */}
      <div
        className="relative hidden max-[1350px]:hidden max-[600px]:col-span-2 max-[600px]:block max-[600px]:min-h-[200px]"
        style={{
          alignSelf: "stretch",
          minHeight: 280,
          overflow: "hidden",
          borderRadius: "12px 12px 12px 48px",
          background: "#0d2236",
          clipPath: "polygon(0 0,100% 0,100% 100%,20% 100%,0 78%)",
        }}
      >
        <Image
          src={IMG.footerSteelDetail}
          alt="Steel structural connection with bolts and welds"
          fittingType="fill"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: "linear-gradient(180deg,rgba(11,28,43,0.15),rgba(11,28,43,0.44))" }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-5 z-[2] border border-[#83b7e875]"
          style={{ clipPath: "polygon(0 0,100% 0,100% 100%,15% 100%,0 80%)" }}
          aria-hidden="true"
        />
        <div className="absolute left-3.5 right-2.5 top-[22px] z-[3] text-[9px] font-extrabold leading-[1.65] tracking-[1.2px] text-white [text-shadow:0_2px_8px_#000]">
          PEOPLE<br />
          ENGINEERING<br />
          INFRASTRUCTURE<br />
          COMMUNITIES<br />
          FOR A STRONGER<br />
          TOMORROW
        </div>
        <div className="absolute right-2.5 bottom-6 z-[3] text-right text-[9px] font-extrabold leading-[1.7] tracking-[1px] text-white">
          STRUCTURAL<br />
          ENGINEERING
        </div>
        <div className="absolute left-1/2 top-[52%] z-[3] h-7 w-7 -translate-x-1/2 -translate-y-1/2 opacity-70" aria-hidden="true">
          <span className="absolute left-0 top-[14px] h-px w-7 bg-[#9ac9f7]" />
          <span className="absolute left-[14px] top-0 h-7 w-px bg-[#9ac9f7]" />
        </div>
      </div>
    </footer>
  );
}