"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";

export function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  const stepVisuals = [
    {
      img: "/images/user-journal-cafe.jpg",
      tag: "Self-Reflection",
      notification: "Journaling intent • Values & rhythm",
    },
    {
      img: "/images/user-reminder-lockscreen.jpg",
      tag: "Human Dialogue",
      notification: "Gentle reminder • Dedicated Wingmate assigned",
    },
    {
      img: "/images/user-verified-screen.jpg",
      tag: "Selective Community",
      notification: "Profile Verified • Welcome to Wingmann",
    },
    {
      img: "/images/user-videocall.jpg",
      tag: "Curated Introduction",
      notification: "Your wingmate wants to introduce you to someone.",
    },
    {
      img: "/images/user-candlelight-date.jpg",
      tag: "The Real Table",
      notification: "Reservation confirmed: Friday 7:30 PM",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 lg:py-36 px-6 md:px-10 bg-[#FFF8FB] text-[#2B2B2B] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#7B4F87] font-medium">
            Chapter 04 • The Journey
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-tight text-[#552C61] [text-wrap:balance]">
            Every relationship starts somewhere. <br />
            <span className="italic font-normal text-[#552C61]">Ours starts here.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2B2B]/75 font-sans leading-relaxed">
            A 5-step journey built intentionally from first reflection to meeting across a real table.
          </p>
        </div>

        {/* Desktop Sticky / Interactive Stepper */}
        <div className="hidden lg:grid grid-cols-12 gap-8 items-center bg-white rounded-3xl p-10 shadow-[0_20px_60px_-15px_rgba(85,44,97,0.1)] border border-[#552C61]/15">
          {/* Left: Giant Step Number & Quick Nav */}
          <div className="col-span-3 flex flex-col justify-between h-[420px] pr-6 border-r border-[#552C61]/10">
            <div>
              <span className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#7B4F87]">
                Sequence
              </span>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="font-serif text-8xl font-light text-[#552C61] mt-3"
                >
                  {SITE_CONFIG.steps[activeStep].num}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Step Selection Buttons */}
            <div className="flex flex-col gap-1.5">
              {SITE_CONFIG.steps.map((st, idx) => (
                <button
                  key={st.num}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left text-xs py-2 px-3 rounded-lg transition-all cursor-pointer flex items-center justify-between font-sans ${
                    activeStep === idx
                      ? "bg-[#552C61] text-white font-medium"
                      : "text-[#2B2B2B]/65 hover:text-[#552C61] hover:bg-[#552C61]/5"
                  }`}
                >
                  <span>{st.num} {st.title}</span>
                  {activeStep === idx && <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Center: Synchronized Visual */}
          <div className="col-span-5 relative h-[420px] rounded-2xl overflow-hidden shadow-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.01 }}
                transition={{ duration: 0.35 }}
                className="relative w-full h-full"
              >
                <Image
                  src={stepVisuals[activeStep].img}
                  alt={SITE_CONFIG.steps[activeStep].title}
                  fill
                  className="object-cover"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-between p-6">
                  <span className="self-start px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-[#FFF8FB] text-[9px] font-mono tracking-wider uppercase font-medium">
                    {stepVisuals[activeStep].tag}
                  </span>

                  {stepVisuals[activeStep].notification && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-3 rounded-xl bg-white/95 backdrop-blur-md text-[#552C61] shadow-lg flex items-center gap-2.5 text-xs font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000] shrink-0" />
                      <span>{stepVisuals[activeStep].notification}</span>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Step Title & Deep Description */}
          <div className="col-span-4 pl-4 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-3 text-left"
              >
                <span className="text-[10px] font-mono font-bold tracking-widest text-[#CC0000] uppercase block">
                  {SITE_CONFIG.steps[activeStep].sub}
                </span>

                <h3 className="font-serif text-2xl sm:text-3xl text-[#552C61] font-normal leading-tight">
                  {SITE_CONFIG.steps[activeStep].title}
                </h3>

                <p className="text-xs sm:text-sm text-[#2B2B2B]/75 leading-relaxed font-sans">
                  {SITE_CONFIG.steps[activeStep].desc}
                </p>

                <div className="pt-3 flex items-center gap-3">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 4))}
                    className="p-2 px-3 rounded-full border border-[#552C61]/20 hover:bg-[#552C61]/10 text-[#552C61] text-xs transition-colors cursor-pointer font-sans"
                  >
                    ← Previous
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => (prev < 4 ? prev + 1 : 0))}
                    className="p-2 px-4 rounded-full bg-[#552C61] text-white text-xs font-semibold hover:bg-[#7B4F87] transition-colors cursor-pointer font-sans"
                  >
                    Next Step →
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Vertical Timeline — Clean Editorial Track */}
        <div className="lg:hidden space-y-6">
          {SITE_CONFIG.steps.map((st, idx) => (
            <div
              key={st.num}
              className="bg-white rounded-2xl p-5 border border-[#552C61]/15 space-y-3"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#552C61]/10">
                <span className="font-serif text-2xl font-light text-[#552C61]">
                  {st.num}
                </span>
                <span className="text-[10px] font-mono font-bold text-[#CC0000] uppercase tracking-wider">
                  {st.sub}
                </span>
              </div>

              <div className="relative h-40 rounded-xl overflow-hidden">
                <Image
                  src={stepVisuals[idx].img}
                  alt={st.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>

              <div className="space-y-1">
                <h3 className="font-serif text-xl text-[#552C61] font-normal">
                  {st.title}
                </h3>
                <p className="text-xs text-[#2B2B2B]/75 leading-relaxed font-sans">
                  {st.desc}
                </p>
              </div>

              {stepVisuals[idx].notification && (
                <div className="p-2.5 rounded-lg bg-[#552C61]/5 border border-[#552C61]/10 flex items-center gap-2 text-[11px] text-[#552C61] font-medium font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000] shrink-0" />
                  <span>{stepVisuals[idx].notification}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
