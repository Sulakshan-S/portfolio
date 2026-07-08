import React from "react";
import { socialLinks } from "../../data/socialLinks";
import { siteConfig } from "../../data/siteConfig";
import { getIcon } from "../../utils/iconLoader";

/**
 * Premium footer with social navigation details and signature styling.
 */
function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-white/5 relative overflow-hidden py-12">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] h-24 bg-brand-indigo/5 blur-[80px] rounded-full" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          
          {/* Left Block */}
          <div className="text-center md:text-left select-none">
            <h3 className="text-lg font-bold">
              <span className="bg-gradient-to-r from-brand-indigo to-brand-violet bg-clip-text text-transparent">
                {siteConfig.name}
              </span>
            </h3>
            <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider font-bold">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Social Channels */}
          <div className="flex gap-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target={link.platform !== "email" ? "_blank" : undefined}
                rel="noreferrer"
                title={link.label}
                className="w-10 h-10 rounded-xl bg-slate-900 border border-white/5 flex items-center justify-center text-slate-450 hover:text-brand-indigo hover:border-brand-indigo/35 transition-all duration-300 shadow-md"
              >
                {getIcon(link.icon, { size: 16 })}
              </a>
            ))}
          </div>

          {/* Copyright block */}
          <div className="text-slate-500 text-xs font-semibold">
            © 2026 {siteConfig.shortName}. All rights reserved.
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 text-center text-[10px] text-slate-650 font-bold uppercase tracking-[0.2em] select-none">
          Refactored in Clean Architecture • React & Tailwind v4
        </div>
      </div>
    </footer>
  );
}

export default Footer;
