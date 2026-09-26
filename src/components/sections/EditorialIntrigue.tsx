"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function EditorialIntrigue() {
  return (
    <section
      id="the-intrigue"
      className="relative py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-12 bg-[#141113] text-[#FFFDFB] overflow-hidden"
    >
      {/* Ambient Wine/Burgundy Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[350px] md:w-[650px] h-[350px] md:h-[650px] bg-[#8E2432]/16 rounded-full blur-[160px]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto space-y-14 sm:space-y-18 relative z-10">
        {/* Step 1: The Introductory Insight */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-left"
        >
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#8E2432] font-semibold block mb-3">
            Chapter 02 • The Unspoken
          </span>
          <p className="font-serif text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#FFFDFB]/90">
            We spend weeks getting to know someone. Before asking the one question that changes everything.
          </p>
        </motion.div>

        {/* Step 2: The Dramatic Typographic Monument */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="py-10 sm:py-14 border-y border-white/10 text-center relative"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 block mb-2">
            The Pivot
          </span>
          <h2 className="font-serif text-[clamp(1.85rem,5.8vw,4.8rem)] font-light leading-[1.08] tracking-tight text-[#FFFDFB] [text-wrap:balance]">
            &ldquo;WHAT ARE YOU ACTUALLY LOOKING FOR?&rdquo;
          </h2>
        </motion.div>

        {/* Step 3: The Reality & Asymmetric Detail */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 space-y-3 sm:space-y-4 text-left"
          >
            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#8E2432] font-normal leading-snug">
              By then, it’s no longer a question.
            </p>
            <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light text-[#FFFDFB] leading-tight">
              It’s a risk.
            </p>
            <p className="font-sans text-xs sm:text-sm text-white/60 leading-relaxed pt-1 max-w-md">
              Because by the time you ask, you already have something to lose.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 relative aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
          >
            <Image
              src="/images/user-phone-morning.jpg"
              alt="Person holding phone in morning light"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 380px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4 sm:p-5">
              <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
                Holding back • 7:15 AM
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gentle transition bleed at bottom into daylight linen */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[#FBF8F4]/20 pointer-events-none" />
    </section>
  );
}
