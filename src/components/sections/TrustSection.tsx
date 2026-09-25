"use client";

import { motion } from "framer-motion";

export function TrustSection() {
  const trustPillars = [
    {
      num: "01",
      title: "Human Onboarding & Verification",
      desc: "Every applicant completes a conversational onboarding process with a real Wingmate to verify identity and genuine relationship readiness before acceptance.",
    },
    {
      num: "02",
      title: "Zero Public Swipe Catalogs",
      desc: "Your photos and personal details are never placed in an open browsing pool or exposed to passive swipers. Introductions are shared strictly one-to-one.",
    },
    {
      num: "03",
      title: "Intentional Community Standards",
      desc: "Members share a verified mutual commitment to honest communication and respectful interaction. Harassment or deceit results in immediate removal.",
    },
    {
      num: "04",
      title: "Dedicated Wingmate Oversight",
      desc: "If at any point a conversation or date feels misaligned, your Wingmate is available to mediate, provide feedback, or pause introductions immediately.",
    },
  ];

  return (
    <section className="relative py-24 md:py-32 lg:py-36 px-6 md:px-10 bg-[#F7F2ED] text-[#2B2B2B] overflow-hidden">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#7B4F87] font-medium">
            Chapter 08 • Integrity & Safety
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-tight text-[#552C61] [text-wrap:balance]">
            Real people. <br />
            <span className="italic font-normal text-[#552C61]">Real attention.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#2B2B2B]/75 font-sans leading-relaxed">
            Dating should never feel like navigating a minefield. We built Wingmann with personal accountability at every touchpoint.
          </p>
        </div>

        {/* Numbered Editorial Manifesto Grid — No AI Icon Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {trustPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx, duration: 0.5 }}
              className="p-8 rounded-3xl bg-white border border-[#552C61]/15 space-y-3 shadow-[0_10px_30px_-10px_rgba(85,44,97,0.06)] text-left"
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#552C61]/10">
                <span className="font-mono text-sm font-semibold text-[#CC0000]">
                  {pillar.num}
                </span>
                <span className="text-[9px] font-mono font-medium tracking-widest uppercase text-[#7B4F87]">
                  Verified Policy
                </span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#552C61] font-normal">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#2B2B2B]/75 leading-relaxed font-sans">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Commitment Statement */}
        <div className="max-w-xl mx-auto text-center pt-2">
          <span className="text-[11px] font-sans tracking-[0.16em] uppercase text-[#552C61]/80 font-medium">
            Personal Matchmaking • No Algorithmic Bots • No Public Profiles
          </span>
        </div>
      </div>
    </section>
  );
}
