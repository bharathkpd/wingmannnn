"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck } from "lucide-react";

interface CookieBannerProps {
  forceOpenPreferences?: boolean;
  onClosePreferences?: () => void;
}

export function CookieBanner({
  forceOpenPreferences,
  onClosePreferences,
}: CookieBannerProps) {
  const [hasConsented, setHasConsented] = useState<boolean | null>(null);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("wingmann_cookie_consent");
      if (saved) {
        const parsed = JSON.parse(saved);
        setAnalyticsEnabled(!!parsed.analytics);
      }
      // Never show automatic intrusive popup banner on initial page load
      setHasConsented(true);
    } catch {
      setHasConsented(true);
    }
  }, []);

  useEffect(() => {
    if (forceOpenPreferences) {
      setShowPreferences(true);
    }
  }, [forceOpenPreferences]);

  const handleAcceptAll = () => {
    try {
      const consent = { essential: true, analytics: true };
      localStorage.setItem("wingmann_cookie_consent", JSON.stringify(consent));
      setAnalyticsEnabled(true);
      setHasConsented(true);
      setShowPreferences(false);
      onClosePreferences?.();
    } catch (e) {
      console.error(e);
    }
  };

  const handleRejectNonEssential = () => {
    try {
      const consent = { essential: true, analytics: false };
      localStorage.setItem("wingmann_cookie_consent", JSON.stringify(consent));
      setAnalyticsEnabled(false);
      setHasConsented(true);
      setShowPreferences(false);
      onClosePreferences?.();
    } catch (e) {
      console.error(e);
    }
  };

  const handleSavePreferences = () => {
    try {
      const consent = { essential: true, analytics: analyticsEnabled };
      localStorage.setItem("wingmann_cookie_consent", JSON.stringify(consent));
      setHasConsented(true);
      setShowPreferences(false);
      onClosePreferences?.();
    } catch (e) {
      console.error(e);
    }
  };

  const closePrefsModal = () => {
    setShowPreferences(false);
    onClosePreferences?.();
  };

  return (
    <>
      {/* Discreet Bottom-Right Pill Banner */}
      <AnimatePresence>
        {hasConsented === false && !showPreferences && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-50 bg-[#171318]/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] border border-white/15 text-left text-[#FFF8FB]"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
                  <span className="font-serif text-sm font-medium text-white">
                    Privacy & Cookies
                  </span>
                </div>
                <p className="text-[11.5px] text-white/75 leading-relaxed font-sans">
                  We use strictly necessary cookies to ensure privacy and basic site operation. Optional analytics help refine our matchmaking experience.
                </p>
              </div>
            </div>

            <div className="mt-3.5 pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
              <button
                onClick={handleAcceptAll}
                className="px-3.5 py-1.5 rounded-full bg-white text-[#171318] text-[11px] font-sans font-semibold uppercase tracking-wider hover:bg-[#FFF8FB] transition-colors cursor-pointer"
              >
                Accept All
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-white/90 text-[11px] font-sans font-semibold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="text-[11px] font-sans text-white/60 hover:text-white transition-colors cursor-pointer ml-auto"
              >
                Manage Preferences
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Modal Dialog */}
      <AnimatePresence>
        {showPreferences && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePrefsModal}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              className="relative w-full max-w-md bg-[#FFF8FB] text-[#2B2B2B] rounded-3xl shadow-2xl border border-[#552C61]/15 p-6 z-10 space-y-5 text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#552C61]/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#CC0000]" />
                  <h3 className="font-serif text-xl text-[#552C61] font-normal">
                    Cookie Preferences
                  </h3>
                </div>
                <button
                  onClick={closePrefsModal}
                  className="p-1 rounded-full text-[#552C61]/60 hover:text-[#552C61] cursor-pointer"
                  aria-label="Close preferences dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                {/* Essential Cookies */}
                <div className="p-3.5 rounded-2xl bg-[#552C61]/5 border border-[#552C61]/10 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-[#552C61] font-sans flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Essential Cookies</span>
                    </div>
                    <p className="text-[11px] text-[#2B2B2B]/70 mt-1 leading-relaxed font-sans">
                      Required for secure browsing, navigation flow, and saving privacy choices. Always active.
                    </p>
                  </div>
                  <span className="shrink-0 px-2 py-0.5 rounded bg-[#552C61]/15 text-[#552C61] text-[9px] font-mono font-bold uppercase tracking-wider">
                    Always On
                  </span>
                </div>

                {/* Analytics Cookies */}
                <div className="p-3.5 rounded-2xl bg-white border border-[#552C61]/15 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-[#552C61] font-sans">
                      Performance & Analytics
                    </div>
                    <p className="text-[11px] text-[#2B2B2B]/70 mt-1 leading-relaxed font-sans">
                      Anonymized interaction metrics that help our design team improve editorial flow and responsiveness.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="shrink-0 mt-1 w-4 h-4 accent-[#552C61] cursor-pointer"
                    aria-label="Toggle analytics cookies"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end gap-2">
                <button
                  onClick={handleSavePreferences}
                  className="w-full py-2.5 rounded-full bg-[#552C61] text-white text-xs font-sans font-semibold uppercase tracking-wider hover:bg-[#7B4F87] transition-colors cursor-pointer text-center"
                >
                  Save Preferences
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
