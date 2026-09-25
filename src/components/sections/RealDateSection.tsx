"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function RealDateSection() {
  const [confirmed, setConfirmed] = useState(false);

  const stages = [
    { title: "Connection", desc: "Intent verified" },
    { title: "Introduction", desc: "Wingmate note" },
    { title: "Call", desc: "15-min voice check" },
    { title: "Date", desc: "Real table", current: true },
  ];

  return (
    <section className="relative py-24 md:py-32 lg:py-36 px-6 md:px-10 bg-[#120914] text-[#FFF8FB] overflow-hidden">
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#552C61]/20 rounded-full blur-[160px]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#7B4F87] font-medium">
            Chapter 07 • The Real Table
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-tight [text-wrap:balance]">
            This Is Actually Going To Happen.
          </h2>
          <p className="text-xs sm:text-sm text-[#FFF8FB]/75 font-sans leading-relaxed">
            The entire Wingmann journey is engineered for one tangible outcome: two people sitting across a real table, unhurried and present.
          </p>
        </div>

        {/* Narrative Progression Chain */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 max-w-2xl mx-auto py-1">
          {stages.map((st, i) => (
            <div key={st.title} className="flex items-center gap-3 sm:gap-5">
              <div
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-[11px] font-sans font-medium uppercase tracking-wider transition-all ${
                  st.current
                    ? "bg-[#CC0000] border-[#CC0000] text-white shadow-[0_0_20px_rgba(204,0,0,0.35)]"
                    : "bg-white/5 border-white/10 text-white/70"
                }`}
              >
                <span className="font-mono text-[10px]">0{i + 1}</span>
                <span>{st.title}</span>
              </div>
              {i < stages.length - 1 && (
                <span className="text-white/30 text-xs font-sans">→</span>
              )}
            </div>
          ))}
        </div>

        {/* Cinematic Date Card & Atmosphere Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
          {/* Left: Atmospheric Photography */}
          <div className="lg:col-span-6 relative h-[340px] sm:h-[400px] rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
            <Image
              src="/images/indian-real-date.jpg"
              alt="Warm candlelit date environment at café"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent flex flex-col justify-end p-6">
              <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-medium">
                Curated Atmosphere • Church Street
              </span>
              <h3 className="font-serif italic text-xl text-white mt-1">
                Quiet corner table. Soft amber light. No screens.
              </h3>
            </div>
          </div>

          {/* Right: Bespoke Stationery Date Card */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-[#1D1020] border border-white/15 p-6 sm:p-8 space-y-6 shadow-2xl relative text-left"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-[#FFF8FB]/70">
                  Bespoke Invitation
                </span>
                <span className="text-[9px] font-mono font-semibold tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 uppercase">
                  Coordinated
                </span>
              </div>

              {/* Time & Venue */}
              <div className="space-y-3">
                <div className="flex items-baseline justify-between">
                  <span className="font-serif text-3xl sm:text-4xl text-white font-light">
                    Friday Evening
                  </span>
                  <span className="font-serif italic text-xl text-[#CC0000]">
                    7:30 PM
                  </span>
                </div>

                <div className="space-y-1 text-xs text-white/75 font-sans">
                  <div>The Roastery Botanical Café • Indiranagar, Bengaluru</div>
                  <div className="text-white/50">Table reserved under &apos;Wingmann Private&apos;</div>
                </div>
              </div>

              {/* Wingmate Hand-off Note */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#7B4F87] font-semibold">
                  Wingmate Note
                </span>
                <p className="text-xs text-white/85 italic font-serif leading-relaxed">
                  &ldquo;Both of you mentioned wanting a relaxed space with great pour-overs. Take your time, leave work behind, and enjoy the conversation.&rdquo;
                </p>
              </div>

              {/* Confirm / RSVP Interactive Button */}
              <div className="pt-1">
                <button
                  onClick={() => setConfirmed(!confirmed)}
                  data-cursor="begin"
                  className={`w-full py-3.5 rounded-full text-xs font-sans font-semibold tracking-widest uppercase transition-all cursor-pointer ${
                    confirmed
                      ? "bg-emerald-700 text-white shadow-md shadow-emerald-950/40"
                      : "bg-[#552C61] hover:bg-[#7B4F87] text-white shadow-md"
                  }`}
                >
                  {confirmed
                    ? "TABLE CONFIRMED • SEE YOU FRIDAY"
                    : "CONFIRM ATTENDANCE"}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
