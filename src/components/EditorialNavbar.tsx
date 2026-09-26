"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EditorialNavbarProps {
  onOpenWaitlist: () => void;
}

export function EditorialNavbar({ onOpenWaitlist }: EditorialNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "How it works", href: "#the-experience" },
    { label: "Why Wingmann", href: "#the-problem" },
    { label: "About", href: "#introducing-wingmann" },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2.5 sm:py-3 bg-[#FBF8F4]/95 backdrop-blur-md border-b border-[#191517]/8 shadow-[0_4px_24px_-10px_rgba(25,21,23,0.08)]"
            : "py-4 sm:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-left focus:outline-none group shrink-0"
          >
            <span
              className={`font-serif text-lg sm:text-2xl font-light tracking-wide transition-colors ${
                isScrolled
                  ? "text-[#191517] group-hover:text-[#8E2432]"
                  : "text-[#FFFDFB] group-hover:text-[#E28390]"
              }`}
            >
              WINGMANN
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            className={`hidden md:flex items-center gap-8 text-[13px] font-sans font-medium tracking-wide transition-colors ${
              isScrolled ? "text-[#544E51]" : "text-white/80"
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className={`transition-colors cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8E2432] hover:after:w-full after:transition-all after:duration-300 ${
                  isScrolled ? "hover:text-[#191517]" : "hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenWaitlist}
              className={`px-3 sm:px-4.5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-sans font-medium tracking-wider uppercase transition-all duration-300 flex items-center gap-1.5 cursor-pointer active:scale-95 shadow-sm ${
                isScrolled
                  ? "bg-[#191517] text-[#FFFDFB] hover:bg-[#8E2432] hover:shadow-md"
                  : "bg-white/15 backdrop-blur-md border border-white/25 text-[#FFFDFB] hover:bg-[#8E2432] hover:border-[#8E2432]"
              }`}
            >
              <span>Find someone</span>
              <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-1.5 transition-colors cursor-pointer rounded-full ${
                isScrolled
                  ? "text-[#191517] hover:text-[#8E2432]"
                  : "text-white hover:text-[#E28390]"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Refined Mobile Slide/Fade Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-[#141113] text-[#FFFDFB] flex flex-col justify-between p-6 pt-24 md:hidden border-b border-white/10 shadow-2xl"
          >
            <div className="flex flex-col gap-6 pt-4">
              <span className="text-[10px] font-mono tracking-[0.2em] text-white/50 uppercase">
                Menu
              </span>
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.3 }}
                  onClick={() => handleLinkClick(link.href)}
                  className="font-serif text-2xl font-light text-left text-white/90 hover:text-[#E28390] transition-colors py-1 cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="btn-editorial-primary w-full justify-center py-3 text-xs"
              >
                <span>Find someone</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <div className="text-[11px] text-white/50 font-sans text-center">
                Date with intent • Curated introductions
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
