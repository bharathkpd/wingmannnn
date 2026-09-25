"use client";

import { ArrowUpRight, Smartphone } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { LegalDocType } from "@/components/LegalModal";

interface FooterProps {
  onOpenLegal: (type: LegalDocType) => void;
  onOpenWaitlist: () => void;
  onOpenDownload?: () => void;
}

export function Footer({
  onOpenLegal,
  onOpenWaitlist,
  onOpenDownload,
}: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    if (onOpenDownload) {
      onOpenDownload();
    } else {
      onOpenWaitlist();
    }
  };

  return (
    <footer className="bg-[#171318] text-[#FFF8FB] pt-20 pb-12 border-t border-[#552C61]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-16 border-b border-white/10">
          {/* Brand Info & App Download Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex flex-col items-start">
              <span className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-[#FFF8FB]">
                WINGMANN
              </span>
              <span className="font-sans text-[11px] tracking-[0.26em] uppercase text-[#7B4F87] font-semibold mt-1">
                DATE WITH INTENT
              </span>
            </div>
            <p className="text-xs md:text-sm text-[#FFF8FB]/75 max-w-sm leading-relaxed font-sans">
              A relationship platform that verifies intentions before introducing people, replacing endless swiping with curated human matchmaking and real dates.
            </p>

            {/* Social Icons Row */}
            <div className="pt-1 flex items-center gap-3">
              {/* Instagram Icon */}
              <a
                href={SITE_CONFIG.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#CC0000] border border-white/20 flex items-center justify-center text-white transition-all duration-300 shadow-sm hover:scale-110"
                aria-label="Follow Wingmann on Instagram"
              >
                <svg
                  className="w-4 h-4 text-white"
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
              </a>

              {/* Twitter / X Icon */}
              <a
                href={SITE_CONFIG.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 shadow-sm hover:scale-110"
                aria-label="Follow Wingmann on Twitter / X"
              >
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* LinkedIn Icon */}
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-300 shadow-sm hover:scale-110"
                aria-label="Connect with Wingmann on LinkedIn"
              >
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18m1.39 9.74v-8.37H5.07v8.37z" />
                </svg>
              </a>
            </div>

            {/* Direct App Store & Google Play Download Badges */}
            <div className="pt-2 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#7B4F87] font-semibold block">
                Get the Wingmann App
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                <button
                  onClick={handleDownload}
                  className="group px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-[#FFF8FB] text-xs flex items-center gap-2.5 transition-all hover:scale-[1.02] cursor-pointer"
                  aria-label="Download Wingmann on App Store"
                >
                  <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.04-2.85 0-.15-.01-.3-.04-.44-.99.04-2.19.66-2.9 1.48-.56.64-1.05 1.68-1.05 2.74 0 .15.02.3.04.38 1.06-.08 2.22-.65 2.91-1.31" />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[8px] uppercase tracking-wider text-[#FFF8FB]/60">Download on the</div>
                    <div className="text-[11px] font-semibold text-white">App Store</div>
                  </div>
                </button>

                <button
                  onClick={handleDownload}
                  className="group px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-[#FFF8FB] text-xs flex items-center gap-2.5 transition-all hover:scale-[1.02] cursor-pointer"
                  aria-label="Download Wingmann on Google Play"
                >
                  <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.29 2.29 0 0 1-.61-.715V2.53c.184-.282.392-.524.609-.716zm11.24 11.243l2.457 2.457-11.45 6.467 8.993-8.924zm0-2.114L5.857 1.872l11.45 6.467-2.457 2.604zm1.488 1.057l3.65 2.06a1.44 1.44 0 0 0 0-2.493l-3.65-2.06-1.523 1.523 1.523.97z" />
                  </svg>
                  <div className="text-left leading-tight">
                    <div className="text-[8px] uppercase tracking-wider text-[#FFF8FB]/60">GET IT ON</div>
                    <div className="text-[11px] font-semibold text-white">Google Play</div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#7B4F87] uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FFF8FB]/75">
              <li>
                <button
                  onClick={() => scrollTo("#the-problem")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  The Problem
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#the-wingmate")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  The Wingmate
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#how-it-works")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#stories")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Stories
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo("#faq")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Cities Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#7B4F87] uppercase">
              Communities
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FFF8FB]/75">
              <li className="flex items-center gap-2">
                <span>Bengaluru</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#552C61] text-white">Active</span>
              </li>
              <li className="flex items-center gap-2">
                <span>Hyderabad</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#552C61] text-white">Active</span>
              </li>
              <li className="flex items-center gap-2 text-[#FFF8FB]/50">
                <span>Mumbai</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">Waitlist</span>
              </li>
              <li className="flex items-center gap-2 text-[#FFF8FB]/50">
                <span>Delhi NCR</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">Waitlist</span>
              </li>
              <li className="flex items-center gap-2 text-[#FFF8FB]/50">
                <span>Pune</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-white/70">Waitlist</span>
              </li>
            </ul>
          </div>

          {/* Legal & Preferences */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold tracking-widest text-[#7B4F87] uppercase">
              Standards & Legal
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#FFF8FB]/75">
              <li>
                <button
                  onClick={() => onOpenLegal("privacy")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegal("terms")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li className="pt-1">
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/90 hover:text-white transition-colors cursor-pointer"
                >
                  <Smartphone className="w-3.5 h-3.5 text-[#CC0000]" />
                  <span>Download App</span>
                </button>
              </li>
              <li className="pt-1">
                <button
                  onClick={onOpenWaitlist}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#CC0000] hover:text-white transition-colors cursor-pointer"
                >
                  <span>Apply for Membership</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* App Download Strip Callout */}
        <div className="my-10 p-6 md:p-8 rounded-3xl bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="text-[10px] font-mono tracking-[0.22em] uppercase text-[#7B4F87] font-semibold">
              WINGMANN MOBILE EXPERIENCE
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-white font-normal">
              Download the app to meet your introduction.
            </h3>
            <p className="text-xs text-[#FFF8FB]/70 max-w-md font-sans">
              Curated introductions, 10-minute audio conversation calls, and verified member safety — available on iOS & Android.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={handleDownload}
              className="px-6 py-3 rounded-full bg-white text-[#552C61] hover:bg-[#FFF8FB] text-xs font-sans font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 shadow-md flex items-center gap-2.5 cursor-pointer"
            >
              <Smartphone className="w-4 h-4 text-[#CC0000]" />
              <span>DOWNLOAD APP</span>
            </button>
            <button
              onClick={onOpenWaitlist}
              className="px-5 py-3 rounded-full bg-transparent hover:bg-white/10 border border-white/20 text-white text-xs font-sans font-semibold tracking-wider uppercase transition-all cursor-pointer"
            >
              <span>APPLY FOR ACCESS</span>
            </button>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFF8FB]/50 font-sans border-t border-white/5">
          <div>
            © 2026 Wingmann. All rights reserved. Built with intent.
          </div>
          <div className="flex items-center gap-6">
            <span>Bengaluru • Hyderabad</span>
            <a
              href="mailto:concierge@wingmann.co"
              className="hover:text-white transition-colors"
            >
              concierge@wingmann.co
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
