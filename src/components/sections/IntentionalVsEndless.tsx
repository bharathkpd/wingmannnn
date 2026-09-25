"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function IntentionalVsEndless() {
  const [activeTab, setActiveTab] = useState<"both" | "endless" | "intentional">("both");

  return (
    <section className="relative py-24 md:py-32 lg:py-36 px-6 md:px-10 bg-[#171318] text-[#FFF8FB] overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(85,44,97,0.3)_0%,_transparent_75%)]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#7B4F87] font-medium">
            Chapter 05 • The Contrast
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-tight [text-wrap:balance]">
            Endless Swiping vs. <br />
            <span className="italic font-normal text-[#FFF8FB]">Intentional Dating</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#FFF8FB]/75 font-sans leading-relaxed">
            Compare what happens when an experience is built for algorithmic screen-time versus when it is built for human connection.
          </p>
        </div>

        {/* View Switcher for Mobile */}
        <div className="flex justify-center md:hidden">
          <div className="inline-flex p-1 bg-white/10 rounded-full border border-white/15">
            <button
              onClick={() => setActiveTab("endless")}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-sans font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === "endless" ? "bg-[#CC0000] text-white" : "text-white/70"
              }`}
            >
              The Endless
            </button>
            <button
              onClick={() => setActiveTab("both")}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-sans font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === "both" ? "bg-[#552C61] text-white" : "text-white/70"
              }`}
            >
              Both
            </button>
            <button
              onClick={() => setActiveTab("intentional")}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-sans font-medium uppercase tracking-wider transition-colors cursor-pointer ${
                activeTab === "intentional" ? "bg-white text-[#171318]" : "text-white/70"
              }`}
            >
              Intentional
            </button>
          </div>
        </div>

        {/* Side-by-Side Comparison Grid — Pure Editorial Typography */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Left: The Endless Model */}
          {(activeTab === "both" || activeTab === "endless") && (
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-white/5 border border-white/10 space-y-6 relative text-left"
            >
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/50 block font-medium">
                    The Algorithmic Model
                  </span>
                  <h3 className="font-serif text-2xl text-white font-light">The Endless</h3>
                </div>
                <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-[#CC0000]/15 text-[#CC0000] font-semibold">
                  Exhausting
                </span>
              </div>

              <ul className="space-y-5">
                {[
                  { title: "Hundreds of profiles", sub: "Designed like a casino slot machine to maximize screen addiction." },
                  { title: "Random matches", sub: "Based on superficial photo glances, not relationship readiness." },
                  { title: "Endless texting cycles", sub: "Weeks of small talk that inevitably fizzle out into silence." },
                  { title: "Dead conversations & ghosting", sub: "Zero accountability or human care for either person's time." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#CC0000] text-sm leading-none mt-1 font-mono font-bold">—</span>
                    <div>
                      <h4 className="text-sm font-medium text-white/90 font-sans">{item.title}</h4>
                      <p className="text-xs text-white/60 mt-0.5 leading-relaxed font-sans">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-2 text-center border-t border-white/5">
                <span className="text-[11px] text-white/40 italic font-serif">
                  *Engineered to keep you single and swiping
                </span>
              </div>
            </motion.div>
          )}

          {/* Right: The Intentional Model (Wingmann) */}
          {(activeTab === "both" || activeTab === "intentional") && (
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 sm:p-10 rounded-3xl bg-[#552C61]/90 border border-[#7B4F87]/50 shadow-[0_20px_50px_-10px_rgba(85,44,97,0.4)] space-y-6 relative text-left"
            >
              <div className="flex items-center justify-between pb-5 border-b border-white/15">
                <div>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#FFF8FB]/70 block font-medium">
                    The Human-First Model
                  </span>
                  <h3 className="font-serif text-2xl text-white font-light">Intentional</h3>
                </div>
                <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-white/20 text-white font-semibold">
                  Wingmann
                </span>
              </div>

              <ul className="space-y-5">
                {[
                  { title: "Curated introductions", sub: "One deliberate introduction at a time based on mutual intent." },
                  { title: "Human guidance", sub: "A real Wingmate who speaks to you and verifies member alignment." },
                  { title: "Real phone conversations", sub: "A 15-minute voice call before dates to establish vocal chemistry." },
                  { title: "Real dates at real tables", sub: "Coordinated meetings in vetted cafés and quiet evening spots." },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-emerald-400 text-sm leading-none mt-1 font-mono font-bold">+</span>
                    <div>
                      <h4 className="text-sm font-medium text-white font-sans">{item.title}</h4>
                      <p className="text-xs text-[#FFF8FB]/80 mt-0.5 leading-relaxed font-sans">{item.sub}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="pt-2 text-center border-t border-white/10">
                <span className="text-[11px] text-[#FFF8FB]/70 italic font-serif">
                  *Engineered to help you meet the right person and leave
                </span>
              </div>
            </motion.div>
          )}
        </div>

        {/* Closing Truth */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-lg mx-auto pt-4 space-y-2"
        >
          <div className="font-serif text-2xl sm:text-4xl text-[#FFF8FB]">
            Less noise. <span className="italic text-[#CC0000]">More possibility.</span>
          </div>
          <p className="text-xs text-white/60 font-sans">
            When you stop talking to everyone, you finally have the space to hear the right person.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
