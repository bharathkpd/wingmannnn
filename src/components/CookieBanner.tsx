"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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
  const [marketingEnabled, setMarketingEnabled] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("wingmann_cookie_consent");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setHasConsented(true);
        setAnalyticsEnabled(!!parsed.analytics);
        setMarketingEnabled(!!parsed.marketing);
      } catch {
        setHasConsented(false);
      }
    } else {
      setHasConsented(false);
    }
  }, []);

  useEffect(() => {
    if (forceOpenPreferences) {
      setShowPreferences(true);
    }
  }, [forceOpenPreferences]);

  const handleAcceptAll = () => {
    const consent = { essential: true, analytics: true, marketing: true };
    localStorage.setItem("wingmann_cookie_consent", JSON.stringify(consent));
    setAnalyticsEnabled(true);
    setMarketingEnabled(true);
    setHasConsented(true);
    setShowPreferences(false);
    onClosePreferences?.();
  };

  const handleRejectNonEssential = () => {
    const consent = { essential: true, analytics: false, marketing: false };
    localStorage.setItem("wingmann_cookie_consent", JSON.stringify(consent));
    setAnalyticsEnabled(false);
    setMarketingEnabled(false);
    setHasConsented(true);
    setShowPreferences(false);
    onClosePreferences?.();
  };

  const handleSaveCustom = () => {
    const consent = {
      essential: true,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    };
    localStorage.setItem("wingmann_cookie_consent", JSON.stringify(consent));
    setHasConsented(true);
    setShowPreferences(false);
    onClosePreferences?.();
  };

  const closePrefsModal = () => {
    setShowPreferences(false);
    onClosePreferences?.();
  };

  return (
    <>
      {/* Floating Bottom Banner */}
      <AnimatePresence>
        {hasConsented === false && !showPreferences && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm z-50 bg-[#FFF8FB] rounded-2xl p-5 shadow-[0_20px_50px_-10px_rgba(85,44,97,0.25)] border border-[#552C61]/15 text-left"
          >
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
                <h4 className="font-serif text-base text-[#552C61] font-medium">
                  Cookie Preferences
                </h4>
              </div>
              <p className="text-xs text-[#2B2B2B]/75 leading-relaxed font-sans">
                We use cookies to improve your experience and understand how the website is used.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2 pt-3 border-t border-[#552C61]/10">
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-3 py-2 rounded-full bg-[#552C61] text-[#FFF8FB] text-[11px] font-sans font-semibold uppercase tracking-wider hover:bg-[#7B4F87] transition-colors cursor-pointer text-center"
              >
                Accept All
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="flex-1 px-3 py-2 rounded-full bg-[#552C61]/10 text-[#552C61] text-[11px] font-sans font-semibold uppercase tracking-wider hover:bg-[#552C61]/15 transition-colors cursor-pointer text-center"
              >
                Reject Non-Essential
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="w-full text-center text-[11px] font-sans font-medium text-[#7B4F87] hover:text-[#552C61] transition-colors pt-1 cursor-pointer"
              >
                Manage Preferences
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Preferences Modal */}
      <AnimatePresence>
        {showPreferences && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closePrefsModal}
              className="fixed inset-0 bg-[#171318]/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              className="relative w-full max-w-md bg-[#FFF8FB] rounded-2xl sm:rounded-3xl shadow-[0_24px_60px_-12px_rgba(85,44,97,0.35)] border border-[#552C61]/15 p-6 z-10 space-y-5 text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#552C61]/10">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#CC0000]" />
                  <h3 className="font-serif text-xl text-[#552C61] font-normal">
                    Manage Cookies
                  </h3>
                </div>
                <button
                  onClick={closePrefsModal}
                  className="p-1 rounded-full text-[#552C61]/60 hover:text-[#552C61] cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3.5">
                {/* Essential Cookies */}
                <div className="p-3.5 rounded-xl bg-[#552C61]/5 border border-[#552C61]/10 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-[#552C61] font-sans">
                      Essential Cookies
                    </div>
                    <p className="text-[11px] text-[#2B2B2B]/70 mt-0.5 leading-relaxed font-sans">
                      Required for navigation, security, and consent management. Always active.
                    </p>
                  </div>
                  <div className="shrink-0 px-2 py-0.5 rounded bg-[#552C61]/15 text-[#552C61] text-[9px] font-mono font-bold uppercase tracking-wider">
                    Always On
                  </div>
                </div>

                {/* Analytics Cookies */}
                <div className="p-3.5 rounded-xl bg-white border border-[#552C61]/15 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-[#552C61] font-sans">
                      Analytics Cookies
                    </div>
                    <p className="text-[11px] text-[#2B2B2B]/70 mt-0.5 leading-relaxed font-sans">
                      Help us understand how visitors navigate the site to refine UX design.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={analyticsEnabled}
                    onChange={(e) => setAnalyticsEnabled(e.target.checked)}
                    className="shrink-0 mt-1 w-4 h-4 accent-[#552C61] cursor-pointer"
                  />
                </div>

                {/* Marketing Cookies */}
                <div className="p-3.5 rounded-xl bg-white border border-[#552C61]/15 flex items-start justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold text-[#552C61] font-sans">
                      Marketing Cookies
                    </div>
                    <p className="text-[11px] text-[#2B2B2B]/70 mt-0.5 leading-relaxed font-sans">
                      Used only if promotional announcements are active. Never shares individual data.
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={marketingEnabled}
                    onChange={(e) => setMarketingEnabled(e.target.checked)}
                    className="shrink-0 mt-1 w-4 h-4 accent-[#552C61] cursor-pointer"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end">
                <button
                  onClick={handleSaveCustom}
                  className="w-full py-2.5 rounded-full bg-[#552C61] text-[#FFF8FB] text-xs font-sans font-semibold uppercase tracking-wider hover:bg-[#7B4F87] transition-colors cursor-pointer text-center"
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
