import React, { useState, useEffect } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { navLinks } from "../../data/navLinks";
import { siteConfig } from "../../data/siteConfig";

/**
 * Premium glassmorphic sticky Navigation Header.
 * @param {object} props
 * @param {function} props.onAdminClick - Callback to open admin login modal.
 */
function Navbar({ onAdminClick }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Active section highlight tracking
      const scrollPosition = window.scrollY + 120;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const section = document.getElementById(link.id);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(link.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-4 bg-slate-950/70 border-b border-white/5 backdrop-blur-xl shadow-lg shadow-black/20"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#home"
          className="text-white font-extrabold text-xl tracking-tight group flex items-center gap-2 select-none"
        >
          <span className="bg-gradient-to-r from-brand-indigo to-brand-violet bg-clip-text text-transparent group-hover:from-indigo-400 group-hover:to-violet-400 transition duration-300">
            {siteConfig.shortName}
          </span>
          <span className="text-slate-500 font-light text-sm hidden sm:inline">| Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-xs font-semibold uppercase tracking-wider">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`relative py-2 transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-brand-indigo font-bold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-brand-indigo to-brand-violet rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          <div className="h-4 w-[1px] bg-slate-800" />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-850 transition cursor-pointer"
        >
          {isMobileMenuOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-72 bg-slate-950/95 border-l border-white/5 backdrop-blur-2xl z-40 transform transition-transform duration-355 ease-out shadow-2xl flex flex-col justify-between p-8 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 mt-16 text-left">
          <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest border-b border-slate-900 pb-2">Navigation</p>
          <ul className="flex flex-col gap-5 text-base font-semibold">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block transition duration-200 ${
                    activeSection === link.id
                      ? "text-brand-indigo translate-x-2 font-bold"
                      : "text-slate-300 hover:text-white hover:translate-x-1"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onAdminClick();
            }}
            className="w-full text-center text-xs font-bold uppercase tracking-wider text-white py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 active:scale-95 transition-all duration-200 cursor-pointer"
          >
            Admin Dashboard
          </button>
          
          <div className="text-center text-[10px] text-slate-600 font-bold uppercase tracking-wider">
            © 2026 {siteConfig.shortName}
          </div>
        </div>
      </div>

      {/* Mobile Overlay Background */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-30 md:hidden"
        />
      )}
    </nav>
  );
}

export default Navbar;
