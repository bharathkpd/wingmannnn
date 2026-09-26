"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    city: "Bengaluru",
    intent: "Intentional relationship",
    about: "",
    email: "",
  });
  const [error, setError] = useState("");

  const resetForm = () => {
    setStep(1);
    setLoading(false);
    setSubmitted(false);
    setFormData({
      name: "",
      city: "Bengaluru",
      intent: "Intentional relationship",
      about: "",
      email: "",
    });
    setError("");
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleNext = () => {
    setError("");
    if (step === 1 && !formData.name.trim()) {
      setError("Please tell us your name.");
      return;
    }
    if (step === 2 && !formData.city) {
      setError("Please select your city.");
      return;
    }
    if (step === 3 && !formData.intent) {
      setError("Please choose what you are seeking.");
      return;
    }
    if (step === 4 && formData.about.trim().length < 10) {
      setError("Please write at least a sentence about yourself (min 10 characters).");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-lg rounded-3xl bg-[#FBF8F4] border border-[#191517]/10 p-6 sm:p-10 shadow-2xl overflow-hidden text-left"
      >
        {/* Subtle Ambient Background Accent */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-60 h-60 bg-[#8E2432]/10 rounded-full blur-3xl"
          aria-hidden="true"
        />

        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#191517]/60 hover:text-[#191517] hover:bg-black/5 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            {/* Header & Step Tracker */}
            <div className="mb-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#8C8488]">
                <span className="tracking-widest uppercase">
                  Application • Step {step} of 5
                </span>
                <span className="font-semibold text-[#8E2432]">{step * 20}%</span>
              </div>
              {/* Progress Track */}
              <div className="w-full h-1 bg-[#191517]/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#8E2432]"
                  initial={false}
                  animate={{ width: `${step * 20}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Error Banner */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-4 p-3 rounded-xl bg-[#8E2432]/10 border border-[#8E2432]/30 text-xs text-[#8E2432] font-sans font-medium"
              >
                {error}
              </motion.div>
            )}

            {/* Multi-Step Animated Form */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  className="space-y-5 text-left"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-[#8E2432] uppercase font-bold">
                      01 • First things first
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#191517] font-normal leading-snug">
                      What should your Wingmate call you?
                    </h3>
                    <p className="text-xs text-[#544E51] font-sans">
                      Real names only. We build trust right from the start.
                    </p>
                  </div>
                  <div>
                    <label htmlFor="name-input" className="sr-only">Your Full Name</label>
                    <input
                      id="name-input"
                      type="text"
                      autoFocus
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      onKeyDown={(e) => e.key === "Enter" && handleNext()}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#191517]/20 bg-white text-[#191517] text-sm placeholder-[#191517]/35 focus:border-[#8E2432] focus:ring-1 focus:ring-[#8E2432] outline-none transition-all font-sans"
                    />
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  className="space-y-5 text-left"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-[#8E2432] uppercase font-bold">
                      02 • Location
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#191517] font-normal leading-snug">
                      Where are you based?
                    </h3>
                    <p className="text-xs text-[#544E51] font-sans">
                      We curate connections within verified urban communities.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2.5">
                    {SITE_CONFIG.cities.map((c) => (
                      <button
                        key={c}
                        type="button"
                        onClick={() => setFormData({ ...formData, city: c })}
                        className={`p-3 rounded-xl border text-xs font-sans font-medium transition-all text-left flex items-center justify-between cursor-pointer ${
                          formData.city === c
                            ? "bg-[#8E2432] text-white border-[#8E2432]"
                            : "bg-white text-[#191517] border-[#191517]/15 hover:border-[#8E2432]"
                        }`}
                      >
                        <span>{c}</span>
                        {formData.city === c && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  className="space-y-5 text-left"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-[#8E2432] uppercase font-bold">
                      03 • Relationship Intent
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#191517] font-normal leading-snug">
                      What are you genuinely looking for?
                    </h3>
                    <p className="text-xs text-[#544E51] font-sans">
                      Clarity ensures you never get introduced to someone with conflicting goals.
                    </p>
                  </div>
                  <div className="space-y-2">
                    {[
                      {
                        title: "Intentional relationship",
                        desc: "Ready for meaningful commitment and shared companionship.",
                      },
                      {
                        title: "Meeting someone with shared life goals",
                        desc: "Values-aligned dating focused on mutual long-term growth.",
                      },
                      {
                        title: "Figuring it out with honest intent",
                        desc: "Open to serious connection, taking thoughtful time to understand.",
                      },
                    ].map((opt) => (
                      <button
                        key={opt.title}
                        type="button"
                        onClick={() => setFormData({ ...formData, intent: opt.title })}
                        className={`w-full p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                          formData.intent === opt.title
                            ? "bg-[#8E2432] text-white border-[#8E2432]"
                            : "bg-white text-[#191517] border-[#191517]/15 hover:border-[#8E2432]"
                        }`}
                      >
                        <div className="font-medium text-xs font-sans">{opt.title}</div>
                        <div
                          className={`text-[11px] mt-0.5 font-sans ${
                            formData.intent === opt.title ? "text-white/80" : "text-[#544E51]"
                          }`}
                        >
                          {opt.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  className="space-y-5 text-left"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-[#8E2432] uppercase font-bold">
                      04 • Character
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#191517] font-normal leading-snug">
                      Tell us a little about yourself
                    </h3>
                    <p className="text-xs text-[#544E51] font-sans">
                      What fills your weekends? What does a great evening look like to you?
                    </p>
                  </div>
                  <div>
                    <label htmlFor="about-input" className="sr-only">About You</label>
                    <textarea
                      id="about-input"
                      rows={4}
                      placeholder="e.g. I work in product design, love filter coffee, quiet bookshops, and weekend road trips..."
                      value={formData.about}
                      onChange={(e) => setFormData({ ...formData, about: e.target.value })}
                      className="w-full p-3.5 rounded-xl border border-[#191517]/20 bg-white text-[#191517] text-xs placeholder-[#191517]/35 focus:border-[#8E2432] focus:ring-1 focus:ring-[#8E2432] outline-none resize-none transition-all font-sans"
                    />
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -8 }}
                  className="space-y-5 text-left"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-[#8E2432] uppercase font-bold">
                      05 • Final Step
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#191517] font-normal leading-snug">
                      Where should we send your invite?
                    </h3>
                    <p className="text-xs text-[#544E51] font-sans">
                      We notify you when your city cohort has an opening with your dedicated Wingmate.
                    </p>
                  </div>
                  <div>
                    <label htmlFor="email-input" className="sr-only">Your Email Address</label>
                    <input
                      id="email-input"
                      type="email"
                      autoFocus
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-[#191517]/20 bg-white text-[#191517] text-sm placeholder-[#191517]/35 focus:border-[#8E2432] focus:ring-1 focus:ring-[#8E2432] outline-none transition-all font-sans"
                    />
                  </div>
                  <div className="p-3 bg-[#8E2432]/5 rounded-xl text-[11px] text-[#8E2432] leading-relaxed font-sans">
                    <strong>Privacy pledge:</strong> Your profile is never in an open swipe directory. Only your dedicated Wingmate sees your application.
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Modal Bottom Actions */}
            <div className="mt-8 pt-4 flex items-center justify-between border-t border-[#191517]/10">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => setStep((prev) => prev - 1)}
                  className="text-xs text-[#544E51] hover:text-[#191517] transition-colors cursor-pointer font-sans"
                >
                  Back
                </button>
              ) : (
                <div />
              )}

              {step < 5 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="btn-editorial-primary text-xs py-3 px-6"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={loading}
                  className="btn-editorial-primary text-xs py-3 px-6 disabled:opacity-50"
                >
                  {loading ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Application</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Confirmation State */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 space-y-5"
          >
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#8E2432] uppercase font-bold">
                Application Received
              </span>
              <h3 className="font-serif text-3xl text-[#191517] font-normal leading-snug">
                You&apos;re on the list.
              </h3>
              <p className="font-serif italic text-base sm:text-lg text-[#8E2432] max-w-sm mx-auto leading-relaxed">
                &ldquo;We&apos;ll be in touch when it&apos;s your turn to meet someone worth meeting.&rdquo;
              </p>
            </div>

            <p className="text-xs text-[#544E51] max-w-xs mx-auto leading-relaxed font-sans">
              We review every application manually to ensure genuine intent. Keep an eye on{" "}
              <strong className="text-[#191517]">{formData.email}</strong>.
            </p>

            <button
              onClick={handleClose}
              className="px-7 py-3 rounded-full bg-[#191517] text-[#FFFDFB] text-xs font-sans font-medium tracking-wider uppercase hover:bg-[#8E2432] transition-colors cursor-pointer"
            >
              Done
            </button>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
