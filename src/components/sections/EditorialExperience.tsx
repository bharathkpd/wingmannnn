"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

interface EditorialExperienceProps {
  onOpenWaitlist: () => void;
}

export function EditorialExperience({ onOpenWaitlist }: EditorialExperienceProps) {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Tell us about yourself",
      quote: "Not to impress. To be understood.",
      desc: "Share your values, what relationship you are building, and what matters to you in a partner. No superficial bios.",
      img: "/images/user-journal-cafe.jpg",
      meta: "Step 01 • Self-Reflection",
    },
    {
      num: "02",
      title: "Speak to a wingmate",
      quote: "Before introductions, we get to know you.",
      desc: "A brief, thoughtful conversation with an empathetic human matchmaker who takes time to truly understand your intent.",
      img: "/images/user-reminder-lockscreen.jpg",
      meta: "Step 02 • Human Guidance",
    },
    {
      num: "03",
      title: "Get accepted",
      quote: "We are super selective. Intentionally.",
      desc: "Every accepted member has verified relationship readiness, emotional maturity, and genuine mutual respect.",
      img: "/images/user-verified-screen.jpg",
      meta: "Step 03 • Selective Community",
    },
    {
      num: "04",
      title: "Connect with each other",
      quote: "See if the conversation feels as good as the introduction.",
      desc: "A relaxed 15-minute voice or video introduction to see if the chemistry matches what your Wingmate saw.",
      img: "/images/user-videocall.jpg",
      meta: "Step 04 • The First Connection",
    },
    {
      num: "05",
      title: "Meet in real life",
      quote: "That was always the point.",
      desc: "A reserved table at a curated quiet café or bistro. Unhurried, present, and without screens.",
      img: "/images/user-candlelight-date.jpg",
      meta: "Step 05 • The Real Table",
    },
  ];

  const current = steps[activeStep];

  return (
    <section
      id="the-experience"
      className="relative py-14 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 bg-[#FBF8F4] overflow-hidden"
    >
      <div className="max-w-5xl mx-auto rounded-3xl md:rounded-[2.5rem] bg-[#141113] text-[#FFFDFB] p-6 sm:p-12 md:p-16 shadow-[0_25px_60px_-15px_rgba(25,21,23,0.35)] relative overflow-hidden border border-white/10">
        {/* Ambient Burgundy Glow */}
        <div
          className="pointer-events-none absolute -top-24 right-1/4 w-[320px] md:w-[600px] h-[320px] md:h-[600px] bg-[#8E2432]/18 rounded-full blur-[150px]"
          aria-hidden="true"
        />

        <div className="space-y-10 sm:space-y-14 relative z-10">
          {/* Section Header */}
          <div className="max-w-2xl text-left space-y-2.5">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#8E2432] font-semibold block">
              Chapter 06 • The Experience
            </span>
            <h2 className="font-serif text-[clamp(1.9rem,4.5vw,3.8rem)] font-light leading-[1.1] text-[#FFFDFB]">
              Every relationship starts somewhere. <br className="hidden sm:inline" />
              <span className="italic text-[#8E2432]">Ours starts here.</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm text-white/60 max-w-md leading-relaxed">
              A 5-step journey built intentionally from first reflection to meeting across a real table.
            </p>
          </div>

          {/* Interactive Timeline Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual Stage */}
            <div className="lg:col-span-6 relative aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] w-full max-w-[420px] mx-auto rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-xl bg-[#0E0C0D]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.num}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={current.img}
                    alt={current.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 420px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 text-left text-white">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-white/70 block mb-1">
                      {current.meta}
                    </span>
                    <h4 className="font-serif text-lg sm:text-xl font-light">
                      {current.title}
                    </h4>
                    <p className="font-serif italic text-xs sm:text-sm text-[#8E2432] mt-0.5">
                      &ldquo;{current.quote}&rdquo;
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Stepper Detail */}
            <div className="lg:col-span-6 space-y-5 text-left">
              {/* Stepper Pills */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 border-b border-white/10 pb-3">
                {steps.map((st, i) => (
                  <button
                    key={st.num}
                    onClick={() => setActiveStep(i)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono font-medium transition-all cursor-pointer flex items-center gap-1.5 ${
                      activeStep === i
                        ? "bg-[#8E2432] text-white shadow-md shadow-[#8E2432]/40 scale-[1.02]"
                        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                    }`}
                    aria-label={`View step ${st.num}: ${st.title}`}
                  >
                    <span className="font-semibold">{st.num}</span>
                    <span className="hidden sm:inline font-sans text-[11px] font-normal opacity-90">{st.title}</span>
                  </button>
                ))}
              </div>

              {/* Active Step Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.num}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-3 py-1"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono tracking-widest text-white/50 uppercase">
                      Step {current.num} of 05
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white font-light">
                      {current.title}
                    </h3>
                  </div>

                  <div className="py-1">
                    <p className="font-serif italic text-lg sm:text-xl text-[#8E2432] font-normal leading-snug">
                      &ldquo;{current.quote}&rdquo;
                    </p>
                  </div>

                  <p className="font-sans text-xs sm:text-sm text-white/70 leading-relaxed max-w-md">
                    {current.desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="pt-3 flex items-center justify-between border-t border-white/10">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                    disabled={activeStep === 0}
                    className={`p-2 rounded-full border border-white/15 transition-colors ${
                      activeStep === 0
                        ? "opacity-30 cursor-not-allowed"
                        : "hover:bg-white/10 cursor-pointer"
                    }`}
                    aria-label="Previous step"
                  >
                    <ChevronLeft className="w-4 h-4 text-white" />
                  </button>

                  <button
                    onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                    disabled={activeStep === steps.length - 1}
                    className={`p-2 rounded-full border border-white/15 transition-colors ${
                      activeStep === steps.length - 1
                        ? "opacity-30 cursor-not-allowed"
                        : "hover:bg-white/10 cursor-pointer"
                    }`}
                    aria-label="Next step"
                  >
                    <ChevronRight className="w-4 h-4 text-white" />
                  </button>
                </div>

                <button
                  onClick={onOpenWaitlist}
                  className="btn-editorial-primary text-xs py-2.5 px-5"
                >
                  <span>Find someone</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
