"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function CuratedIntroduction() {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section className="relative py-24 md:py-32 lg:py-36 px-6 md:px-10 bg-[#F7F2ED] text-[#2B2B2B] overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Editorial Eyebrow & Headline */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#7B4F87] font-medium">
            Chapter 03 • The Introduction
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-tight text-[#552C61] [text-wrap:balance]">
            Not another match. <br />
            <span className="italic font-normal text-[#CC0000]">An introduction.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2B2B]/75 font-sans leading-relaxed">
            Every introduction comes with a deliberate reason. Your Wingmate doesn&apos;t just send a photo—they explain the human alignment behind it.
          </p>
        </div>

        {/* The Curated Profile Interaction Card */}
        <div className="max-w-lg mx-auto">
          <motion.div
            layout
            className="rounded-3xl bg-white border border-[#552C61]/15 shadow-[0_20px_50px_-15px_rgba(85,44,97,0.14)] p-6 sm:p-8 overflow-hidden relative"
          >
            {/* Header Badge */}
            <div className="flex items-center justify-between pb-5 border-b border-[#552C61]/10">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
                <span className="font-serif italic text-sm text-[#552C61]">
                  Wingmate Introduction #BGL-842
                </span>
              </div>
              <span className="text-[9px] font-mono font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-[#552C61]/10 text-[#552C61]">
                Demo Profile
              </span>
            </div>

            {/* Unrevealed Teaser State */}
            {!isRevealed ? (
              <div className="py-10 text-center space-y-6">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border border-[#552C61]/25 flex items-center justify-center bg-[#F7F2ED]">
                  <Image
                    src="/images/indian-curated-intro.jpg"
                    alt="Introduction Preview"
                    fill
                    className="object-cover blur-sm scale-110 opacity-60"
                  />
                  <div className="absolute inset-0 bg-[#552C61]/40 flex items-center justify-center">
                    <span className="font-serif text-2xl font-light text-white italic">W</span>
                  </div>
                </div>

                <div className="space-y-1.5 max-w-sm mx-auto">
                  <h3 className="font-serif text-xl sm:text-2xl text-[#552C61] font-normal">
                    Your Wingmate has chosen an introduction
                  </h3>
                  <p className="text-xs text-[#2B2B2B]/65 font-sans leading-relaxed">
                    Someone who shares your rhythm of life, values honest communication, and is looking for a long-term partner.
                  </p>
                </div>

                <button
                  onClick={() => setIsRevealed(true)}
                  data-cursor="open"
                  className="btn-primary"
                >
                  <span>REVEAL INTRODUCTION</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              /* Expanded Revealed State */
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="pt-6 space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                  {/* Portrait Photo */}
                  <div className="relative w-32 h-40 rounded-2xl overflow-hidden shrink-0 shadow-md">
                    <Image
                      src="/images/indian-curated-intro.jpg"
                      alt="Meera - Curated Profile"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 text-white text-[9px] font-mono tracking-wider uppercase font-medium">
                      Verified
                    </div>
                  </div>

                  {/* Profile Header */}
                  <div className="space-y-2 text-center sm:text-left flex-1">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#552C61]">
                        Meera, 28
                      </h3>
                      <p className="text-xs text-[#2B2B2B]/65 mt-0.5 font-sans">
                        Indiranagar, Bengaluru • Architect & Writer
                      </p>
                    </div>

                    {/* Personality Tags */}
                    <div className="flex flex-wrap gap-1.5 justify-center sm:justify-start pt-1">
                      {["Early Riser", "Filter Coffee", "Indie Cinema", "Quiet Weekends"].map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 rounded-full bg-[#552C61]/5 border border-[#552C61]/15 text-[#552C61] text-[10px] font-sans font-medium"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Wingmate Curation Note (Why this introduction makes sense) */}
                <div className="p-4 rounded-2xl bg-[#F7F2ED] border border-[#552C61]/15 space-y-2 text-left">
                  <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-[#CC0000] block">
                    Why this introduction makes sense
                  </span>
                  <p className="font-serif italic text-xs sm:text-sm text-[#552C61] leading-relaxed">
                    &ldquo;Meera specifically expressed wanting someone grounded and creative who values unhurried conversations. Your shared background in design and mutual appreciation for calm Sunday mornings makes this an effortless first dialogue.&rdquo;
                  </p>
                  <span className="text-[10px] text-[#7B4F87] font-semibold block text-right font-sans">
                    — Priya, Senior Wingmate
                  </span>
                </div>

                {/* Actions */}
                <div className="pt-2 flex items-center justify-between text-xs">
                  <button
                    onClick={() => setIsRevealed(false)}
                    className="text-[#552C61]/60 hover:text-[#552C61] transition-colors cursor-pointer font-sans"
                  >
                    Close profile
                  </button>
                  <div className="flex items-center gap-1.5 text-[#552C61] font-semibold font-sans">
                    <span>Next: 15-Minute Audio Call</span>
                    <span>→</span>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
