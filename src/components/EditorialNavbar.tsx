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
            ? "py-3 bg-[#FBF8F4]/92 backdrop-blur-md border-b border-[#191517]/8 shadow-[0_4px_24px_-10px_rgba(25,21,23,0.06)]"
            : "py-5 sm:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2 text-left focus:outline-none group shrink-0"
          >
            <span className="font-serif text-xl sm:text-2xl font-light tracking-wide text-[#191517] transition-colors group-hover:text-[#8E2432]">
              WINGMANN
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-[13px] font-sans font-medium tracking-wide text-[#544E51]">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="hover:text-[#191517] transition-colors cursor-pointer py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#8E2432] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenWaitlist}
              className="px-4 sm:px-5 py-2 rounded-full bg-[#191517] text-[#FFFDFB] text-xs font-sans font-medium tracking-wider uppercase transition-all duration-300 hover:bg-[#8E2432] hover:shadow-lg flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Find someone</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#191517] hover:text-[#8E2432] transition-colors cursor-pointer rounded-full"
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
            className="fixed inset-0 z-40 bg-[#FBF8F4] flex flex-col justify-between p-7 pt-24 md:hidden border-b border-[#191517]/10 shadow-2xl"
          >
            <div className="flex flex-col gap-6 pt-4">
              <span className="text-[11px] font-mono tracking-[0.2em] text-[#8C8488] uppercase">
                Menu
              </span>
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 * idx, duration: 0.3 }}
                  onClick={() => handleLinkClick(link.href)}
                  className="font-serif text-2xl font-light text-left text-[#191517] hover:text-[#8E2432] transition-colors py-1 cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className="pt-6 border-t border-[#191517]/10 flex flex-col gap-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="btn-editorial-primary w-full justify-center"
              >
                <span>Find someone</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] text-[#8C8488] font-sans text-center">
                Date with intent • Curated introductions
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
