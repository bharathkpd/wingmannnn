"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function ProblemSection() {
  const [profileStep, setProfileStep] = useState(0);

  const stages = [
    {
      count: "100 profiles",
      desc: "An endless stream of smiling faces, carefully chosen angles, and punchy bios. The illusion that connection is just one tap away.",
      state: "Optimistic curiosity",
    },
    {
      count: "200 profiles",
      desc: "Swiping turns into muscle memory. Matches accumulate, but conversations stall at 'Hey, how was your week?'",
      state: "Decision fatigue sets in",
    },
    {
      count: "500 profiles",
      desc: "Days spent messaging people who vanish mid-sentence. You wonder why something fundamentally human feels so mechanical.",
      state: "Quiet exhaustion",
    },
    {
      count: "Endless noise",
      desc: "Hundreds of superficial connections, yet not a single dialogue that moves toward a real table.",
      state: "The illusion of abundance",
    },
  ];

  return (
    <section
      id="the-problem"
      className="relative py-24 md:py-32 lg:py-36 px-6 md:px-10 bg-[#7B4F87] text-[#FFF8FB] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.08)_0%,_transparent_70%)]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10 space-y-20">
        {/* Editorial Eyebrow & Headline */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#FFF8FB]/70 font-medium">
            Chapter 01 • The Problem
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-[1.08] text-[#FFF8FB] [text-wrap:balance]">
            Maybe the problem was never{" "}
            <span className="italic font-normal">finding people.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#FFF8FB]/80 font-sans leading-relaxed pt-1 max-w-lg mx-auto">
            Modern dating apps promised you an endless supply of choices. But more options haven&apos;t led to more love.
          </p>
        </div>

        {/* The Fatigue Cycle — Pure Editorial Typography instead of SaaS Cards */}
        <div className="py-6 border-y border-white/15">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-center">
            {[
              "Swiping",
              "Matching",
              "Texting",
              "Waiting",
              "Ghosting",
              "Repeating",
            ].map((word, idx, arr) => (
              <div key={word} className="flex items-center gap-3 sm:gap-6">
                <span className="font-serif italic text-lg sm:text-2xl text-[#FFF8FB]/90 hover:text-white transition-colors">
                  {word}
                </span>
                {idx < arr.length - 1 && (
                  <span className="text-white/30 text-xs sm:text-sm font-sans">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* The Intrigue Climax from Master Brief */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto space-y-5 py-4"
        >
          <p className="font-serif text-lg sm:text-xl text-[#FFF8FB]/85 leading-relaxed font-light">
            We spend weeks getting to know someone. Before asking the one question that changes everything:
          </p>
          <div className="py-2">
            <span className="font-serif italic text-2xl sm:text-4xl md:text-5xl font-normal text-[#CC0000] tracking-wide block drop-shadow-sm">
              &ldquo;WHAT ARE YOU ACTUALLY LOOKING FOR?&rdquo;
            </span>
          </div>
          <p className="font-serif italic text-base sm:text-lg text-[#FFF8FB]/75">
            By then, it&apos;s no longer a question. It&apos;s a risk.
          </p>
        </motion.div>

        {/* Interactive Sequence: 100 -> 200 -> 500 -> Endless */}
        <div className="bg-[#552C61] rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-white/15">
            <div className="space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FFF8FB]/60 font-medium">
                Dating App Reality Check
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-[#FFF8FB] font-normal">
                The Anatomy of Choice Fatigue
              </h3>
            </div>

            {/* Stepper Buttons */}
            <div className="flex items-center gap-2">
              {stages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setProfileStep(i)}
                  className={`w-9 h-9 rounded-full text-xs font-mono font-semibold transition-all cursor-pointer ${
                    profileStep === i
                      ? "bg-[#CC0000] text-white scale-105 shadow-md"
                      : "bg-white/10 text-white/70 hover:bg-white/20"
                  }`}
                  aria-label={`View stage ${i + 1}`}
                >
                  0{i + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7 space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={profileStep}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-3"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-[#CC0000]/25 text-[#FFF8FB] text-[11px] font-semibold tracking-wider uppercase border border-[#CC0000]/40 font-sans">
                    {stages[profileStep].state}
                  </span>
                  <div className="font-serif text-3xl sm:text-5xl font-light text-[#FFF8FB]">
                    {stages[profileStep].count}
                  </div>
                  <p className="text-xs sm:text-sm text-[#FFF8FB]/80 leading-relaxed font-sans max-w-md">
                    {stages[profileStep].desc}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="md:col-span-5 relative h-48 sm:h-52 rounded-2xl overflow-hidden border border-white/20">
              <Image
                src="/images/intrigue-phone.jpg"
                alt="Phone facedown on table in dim cafe"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 360px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#552C61]/90 via-transparent to-transparent flex items-end p-4">
                <span className="text-[10px] font-mono tracking-widest text-[#FFF8FB]/80 uppercase">
                  Facedown Phone • 11:42 PM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* The Memorable Turning Point */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto space-y-4 pt-4"
        >
          <p className="font-serif italic text-xl sm:text-2xl text-[#FFF8FB]/85">
            &ldquo;Maybe you don&apos;t need more people.&rdquo;
          </p>

          <div className="py-1">
            <span className="font-serif text-3xl sm:text-4xl font-normal text-[#FFF8FB] tracking-wide block">
              Maybe you need the <span className="italic text-[#CC0000]">right introduction.</span>
            </span>
          </div>

          <p className="text-[11px] text-[#FFF8FB]/65 font-sans tracking-[0.2em] uppercase font-semibold">
            Less noise. More intention.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
