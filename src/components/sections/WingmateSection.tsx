"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function WingmateSection() {
  const [activeBubble, setActiveBubble] = useState<number | null>(null);

  const prompts = [
    {
      id: 0,
      question: "What are you actually looking for?",
      note: "Not a superficial wishlist, but the depth of commitment you're ready for.",
      desktopPos: "top-4 left-0 -translate-x-12",
    },
    {
      id: 1,
      question: "What actually matters to you?",
      note: "Your rhythm of life, personal values, and what makes you feel respected.",
      desktopPos: "top-20 right-0 translate-x-12",
    },
    {
      id: 2,
      question: "Who would genuinely fit your life?",
      note: "Someone whose world complements yours, rather than creating friction.",
      desktopPos: "bottom-24 left-0 -translate-x-14",
    },
    {
      id: 3,
      question: "What kind of connection do you want?",
      note: "The feeling of emotional safety, shared curiosity, and quiet joy.",
      desktopPos: "bottom-6 right-0 translate-x-10",
    },
  ];

  return (
    <section
      id="the-wingmate"
      className="relative py-24 md:py-32 lg:py-36 px-6 md:px-10 bg-[#552C61] text-[#FFF8FB] overflow-hidden"
    >
      {/* Ambient background lighting */}
      <div
        className="pointer-events-none absolute -bottom-32 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] md:w-[800px] h-[320px] sm:h-[450px] md:h-[500px] bg-[#7B4F87]/25 rounded-full blur-[90px] sm:blur-[140px] max-w-full"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto relative z-10 space-y-16">
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#FFF8FB]/70 font-medium">
            Chapter 02 • Human Guidance
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-tight [text-wrap:balance]">
            The Person Behind The Profile
          </h2>
          <p className="text-xs sm:text-sm text-[#FFF8FB]/80 font-sans leading-relaxed">
            Algorithms optimize for app retention. A human Wingmate listens to understand who you truly are.
          </p>
        </div>

        {/* Stage: Orbital Composition on Desktop, Tight Responsive Visual on Mobile */}
        <div className="relative max-w-2xl mx-auto min-h-[220px] md:min-h-[500px] flex items-center justify-center my-4 md:my-6">
          {/* Central Portrait Visual of Wingmate Guide */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full p-2 bg-gradient-to-tr from-[#CC0000]/60 via-[#7B4F87] to-white/30 shadow-[0_0_80px_-10px_rgba(0,0,0,0.5)] z-10"
          >
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
              <Image
                src="/images/indian-wingmate-portrait.jpg"
                alt="Your Dedicated Wingmate Guide"
                fill
                className="object-cover"
                sizes="288px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#171318]/70 via-transparent to-transparent flex items-end justify-center pb-3">
                <span className="px-3 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono tracking-widest uppercase text-white font-medium">
                  Your Wingmate
                </span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Floating Question Prompts */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {prompts.map((p, idx) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * idx, duration: 0.5 }}
                className={`absolute ${p.desktopPos} z-20 max-w-[260px] pointer-events-auto`}
              >
                <button
                  onClick={() => setActiveBubble(activeBubble === p.id ? null : p.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 backdrop-blur-md cursor-pointer shadow-xl ${
                    activeBubble === p.id
                      ? "bg-[#CC0000] border-[#CC0000] scale-105"
                      : "bg-[#171318]/90 border-white/20 hover:bg-[#171318] hover:border-white/40"
                  }`}
                  aria-label={`Prompt: ${p.question}`}
                >
                  <p className="font-serif italic text-sm font-medium text-white leading-snug">
                    &ldquo;{p.question}&rdquo;
                  </p>
                  <p className="text-[11px] text-white/75 leading-relaxed font-sans mt-1">
                    {p.note}
                  </p>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Question Stack (Eliminates awkward overlap across small screens) */}
        <div className="md:hidden grid grid-cols-1 gap-3 pt-2">
          {prompts.map((p) => (
            <div
              key={p.id}
              className="p-4 rounded-2xl bg-[#171318]/90 border border-white/15 text-left"
            >
              <p className="font-serif italic text-sm font-medium text-white leading-snug">
                &ldquo;{p.question}&rdquo;
              </p>
              <p className="text-[11px] text-white/75 leading-relaxed font-sans mt-1">
                {p.note}
              </p>
            </div>
          ))}
        </div>

        {/* The Emotional Climax Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto space-y-3 pt-4"
        >
          <span className="font-serif italic text-xl sm:text-2xl text-[#FFF8FB]/80">
            Before we introduce you to someone, we get to know you.
          </span>
          <div className="py-1">
            <h3 className="font-serif text-3xl sm:text-5xl font-normal text-[#FFF8FB] [text-wrap:balance]">
              That&apos;s where your{" "}
              <span className="italic font-normal text-[#CC0000]">Wingmate</span> comes in.
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-[#FFF8FB]/75 leading-relaxed font-sans max-w-md mx-auto">
            Not a matchmaker from the 1800s. An emotionally intelligent human guide in your corner who filters out the posturing and introduces you to people who want the same future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
