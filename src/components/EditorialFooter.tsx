"use client";

import { ArrowUpRight } from "lucide-react";
import { LegalDocType } from "./LegalModal";

interface EditorialFooterProps {
  onOpenLegal: (type: LegalDocType) => void;
  onOpenCookieSettings: () => void;
  onOpenWaitlist: () => void;
}

export function EditorialFooter({
  onOpenLegal,
  onOpenCookieSettings,
  onOpenWaitlist,
}: EditorialFooterProps) {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0E0C0D] text-[#FFFDFB] pt-20 pb-12 px-6 sm:px-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4 text-left">
            <span className="font-serif text-2xl sm:text-3xl font-light tracking-wide text-white block">
              WINGMANN
            </span>
            <p className="font-sans text-sm text-white/60 max-w-sm leading-relaxed">
              A relationship platform designed for people who know what they are looking for. Curated human introductions in Bengaluru & Hyderabad.
            </p>
            <div className="pt-2">
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#8E2432] font-semibold">
                Date with Intent
              </span>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-3 space-y-3 text-left">
            <span className="text-xs font-mono tracking-widest uppercase text-white/40 block">
              Explore
            </span>
            <ul className="space-y-2 text-sm text-white/70 font-sans">
              <li>
                <button
                  onClick={() => handleScrollTo("#the-intrigue")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Unspoken
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("#the-problem")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Why Wingmann
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("#introducing-wingmann")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Platform
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScrollTo("#the-experience")}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How It Works
                </button>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-3 space-y-3 text-left">
            <span className="text-xs font-mono tracking-widest uppercase text-white/40 block">
              Connect
            </span>
            <div className="space-y-2 text-sm text-white/70 font-sans">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
                aria-label="Follow Wingmann on Instagram"
              >
                <svg
                  className="w-4 h-4 text-[#8E2432]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>Instagram</span>
                <ArrowUpRight className="w-3 h-3 text-white/40" />
              </a>
              <div>
                <a
                  href="mailto:contact@wingmann.co"
                  className="hover:text-white transition-colors block text-xs font-mono text-white/60 pt-1"
                >
                  contact@wingmann.co
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-white/50">
          <div>
            © {currentYear} Wingmann Platforms Private Limited. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button
              onClick={() => onOpenLegal("privacy")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy
            </button>
            <button
              onClick={() => onOpenLegal("terms")}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms
            </button>
            <button
              onClick={onOpenCookieSettings}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
