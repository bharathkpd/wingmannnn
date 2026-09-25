"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE_CONFIG } from "@/config/site";

interface NavbarProps {
  onOpenWaitlist: () => void;
  onOpenDownload?: () => void;
}

export function Navbar({ onOpenWaitlist, onOpenDownload }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "The Idea", href: "#the-problem" },
    { label: "The Wingmate", href: "#the-wingmate" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Real Connection", href: "#real-conversation" },
    { label: "Stories", href: "#stories" },
    { label: "FAQ", href: "#faq" },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    if (onOpenDownload) {
      onOpenDownload();
    } else {
      onOpenWaitlist();
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "py-2.5 sm:py-3 bg-[#F7F2ED]/95 backdrop-blur-md border-b border-[#552C61]/10 shadow-[0_4px_24px_-8px_rgba(85,44,97,0.08)]"
            : "py-3.5 sm:py-6 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="group flex flex-col items-start focus:outline-none shrink-0"
            data-cursor="open"
          >
            <span className="font-serif text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-[#552C61] transition-transform duration-300 group-hover:scale-[1.02]">
              WINGMANN
            </span>
            <span className="font-sans text-[8px] sm:text-[9px] md:text-[10px] tracking-[0.24em] uppercase text-[#7B4F87] font-semibold">
              Date with Intent
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#2B2B2B]/80">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="hover:text-[#552C61] transition-colors relative py-1 text-sm tracking-wide cursor-pointer focus:outline-none"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Join / Begin CTA */}
            <button
              onClick={onOpenWaitlist}
              data-cursor="begin"
              className="magnetic-btn relative overflow-hidden px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-full bg-[#552C61] text-[#FFF8FB] text-xs md:text-sm font-semibold tracking-wider uppercase transition-all duration-300 hover:bg-[#7B4F87] hover:shadow-[0_8px_20px_-4px_rgba(85,44,97,0.4)] flex items-center gap-1.5 sm:gap-2 cursor-pointer"
            >
              <span className="hidden sm:inline">JOIN WINGMANN</span>
              <span className="sm:hidden">JOIN</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-[#552C61] hover:text-[#7B4F87] transition-colors cursor-pointer rounded-full hover:bg-black/5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#F7F2ED] flex flex-col justify-between p-8 pt-28 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#7B4F87] uppercase">
                Menu
              </span>
              {navLinks.map((link, idx) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * idx, duration: 0.3 }}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left font-serif text-3xl sm:text-4xl text-[#552C61] hover:text-[#CC0000] transition-colors cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
            </div>

            <div className="pt-6 border-t border-[#552C61]/10 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenWaitlist();
                }}
                className="w-full py-4 rounded-full bg-[#552C61] text-[#FFF8FB] text-center font-semibold text-sm tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-md hover:bg-[#7B4F87] transition-colors"
              >
                <span>BEGIN YOUR STORY</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              {/* Mobile Drawer Social Links */}
              <div className="pt-3 flex items-center justify-between border-t border-[#552C61]/10">
                <span className="text-xs text-[#2B2B2B]/60 font-sans">
                  © 2026 Wingmann
                </span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={SITE_CONFIG.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#552C61]/10 flex items-center justify-center text-[#552C61] hover:text-[#CC0000] transition-colors"
                    aria-label="Instagram"
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>

                  <a
                    href={SITE_CONFIG.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#552C61]/10 flex items-center justify-center text-[#552C61] hover:text-[#CC0000] transition-colors"
                    aria-label="Twitter / X"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  <a
                    href={SITE_CONFIG.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-[#552C61]/10 flex items-center justify-center text-[#552C61] hover:text-[#CC0000] transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18m1.39 9.74v-8.37H5.07v8.37z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
