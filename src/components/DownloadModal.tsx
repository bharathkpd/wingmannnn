"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Check, QrCode, Smartphone, Copy } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenWaitlist: () => void;
}

export function DownloadModal({
  isOpen,
  onClose,
  onOpenWaitlist,
}: DownloadModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.origin);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleAppStoreClick = () => {
    // Open waitlist or download link
    window.open(SITE_CONFIG.links.iosApp, "_blank");
  };

  const handlePlayStoreClick = () => {
    // Open waitlist or download link
    window.open(SITE_CONFIG.links.androidApp, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#120914]/85 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
            className="relative w-full max-w-xl bg-[#FFF8FB] text-[#2B2B2B] rounded-3xl shadow-[0_25px_60px_-15px_rgba(85,44,97,0.4)] border border-[#552C61]/15 overflow-hidden z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-modal-title"
          >
            {/* Header pattern bar */}
            <div className="h-2 w-full bg-gradient-to-r from-[#552C61] via-[#7B4F87] to-[#CC0000]" />

            <div className="p-6 sm:p-10 space-y-7">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#552C61]/5 hover:bg-[#552C61]/10 flex items-center justify-center text-[#552C61] transition-colors cursor-pointer"
                aria-label="Close download modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Eyebrow & Headline */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-sans font-bold tracking-[0.22em] uppercase text-[#7B4F87]">
                  <Smartphone className="w-3.5 h-3.5" />
                  <span>WINGMANN MOBILE EXPERIENCE</span>
                </div>
                <h3
                  id="download-modal-title"
                  className="font-serif text-2xl sm:text-3xl font-light text-[#552C61] tracking-tight"
                >
                  Download Wingmann on{" "}
                  <span className="italic text-[#CC0000]">iOS & Android</span>
                </h3>
                <p className="text-xs sm:text-sm text-[#2B2B2B]/75 font-sans leading-relaxed">
                  Wingmann is a private, member-only platform. Download the app to access your curated introductions, audio call dates, and private Wingmate concierge.
                </p>
              </div>

              {/* Download Buttons Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Apple App Store */}
                <a
                  href={SITE_CONFIG.links.iosApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    onOpenWaitlist();
                  }}
                  className="group relative flex items-center gap-4 p-4 rounded-2xl bg-[#552C61] hover:bg-[#43204d] text-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 fill-current text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 1.04-2.85 0-.15-.01-.3-.04-.44-.99.04-2.19.66-2.9 1.48-.56.64-1.05 1.68-1.05 2.74 0 .15.02.3.04.38 1.06-.08 2.22-.65 2.91-1.31" />
                    </svg>
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-white/70 font-sans">
                      Download on the
                    </div>
                    <div className="text-sm font-semibold text-white font-sans truncate">
                      App Store
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>

                {/* Google Play */}
                <a
                  href={SITE_CONFIG.links.androidApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    onClose();
                    onOpenWaitlist();
                  }}
                  className="group relative flex items-center gap-4 p-4 rounded-2xl bg-[#552C61] hover:bg-[#43204d] text-white shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-6 h-6 fill-current text-white"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M3.609 1.814L13.792 12 3.61 22.186a2.29 2.29 0 0 1-.61-.715V2.53c.184-.282.392-.524.609-.716zm11.24 11.243l2.457 2.457-11.45 6.467 8.993-8.924zm0-2.114L5.857 1.872l11.45 6.467-2.457 2.604zm1.488 1.057l3.65 2.06a1.44 1.44 0 0 0 0-2.493l-3.65-2.06-1.523 1.523 1.523.97z" />
                    </svg>
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-[10px] uppercase tracking-wider text-white/70 font-sans">
                      GET IT ON
                    </div>
                    <div className="text-sm font-semibold text-white font-sans truncate">
                      Google Play
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/60 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </a>
              </div>

              {/* Private Cohort Notice & Direct Apply */}
              <div className="p-4 rounded-2xl bg-[#F7F2ED] border border-[#552C61]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#552C61]/10 flex items-center justify-center shrink-0 text-[#552C61]">
                    <QrCode className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-xs font-semibold text-[#552C61] font-sans">
                      Private Beta Cohorts
                    </p>
                    <p className="text-[11px] text-[#2B2B2B]/70 font-sans leading-tight">
                      Active membership required to log in. Apply to receive an invite.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => {
                    onClose();
                    onOpenWaitlist();
                  }}
                  className="shrink-0 px-4 py-2 rounded-full bg-[#CC0000] hover:bg-[#a80000] text-white text-[11px] font-sans font-semibold tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Join Waitlist
                </button>
              </div>

              {/* Footer Share / Copy Link */}
              <div className="pt-2 flex items-center justify-between text-xs text-[#2B2B2B]/60 font-sans border-t border-[#552C61]/10">
                <span>Bengaluru & Hyderabad cohorts live</span>
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-1.5 hover:text-[#552C61] transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-medium">Link Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Share Wingmann</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
