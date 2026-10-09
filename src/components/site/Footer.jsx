import React from "react";
import { Link } from "react-router-dom";
import { Globe } from "lucide-react";
import { COMPANY } from "@/lib/nav";
import FooterCta from "./footer/FooterCta";
import FooterColumns from "./footer/FooterColumns";

export default function Footer() {
  return (
    <footer className="bg-background">
      <FooterCta />
      <FooterColumns />

      {/* Legal bar */}
      <div className="border-t border-border bg-background">
        <div className="shell flex flex-col gap-4 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-text text-steel">
            © 2024 {COMPANY.legal}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link to="/privacy" className="label-mono text-steel transition-colors hover:text-ink">
              Privacy Policy
            </Link>
            <Link to="/terms" className="label-mono text-steel transition-colors hover:text-ink">
              Terms of Use
            </Link>
            <a
              href="/sitemap.xml"
              className="label-mono text-steel transition-colors hover:text-ink"
            >
              Sitemap
            </a>
            <span className="label-mono flex items-center gap-1.5 text-steel">
              <Globe size={13} aria-hidden="true" />
              {COMPANY.markets}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}