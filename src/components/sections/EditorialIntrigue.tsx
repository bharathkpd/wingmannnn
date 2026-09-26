"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function EditorialIntrigue() {
  return (
    <section
      id="the-intrigue"
      className="relative py-28 sm:py-36 md:py-44 px-6 sm:px-10 md:px-16 bg-[#141113] text-[#FFFDFB] overflow-hidden"
    >
      {/* Ambient Lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/3 -translate-y-1/2 w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-[#8E2432]/12 rounded-full blur-[160px]"
        aria-hidden="true"
      />

      <div className="max-w-5xl mx-auto space-y-20 relative z-10">
        {/* Step 1: The Introductory Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl text-left"
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#8E2432] font-semibold block mb-4">
            Chapter 02 • The Unspoken
          </span>
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed text-[#FFFDFB]/90">
            We spend weeks getting to know someone. Before asking the one question that changes everything.
          </p>
        </motion.div>

        {/* Step 2: The Dramatic Typographic Monument */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="py-12 md:py-16 border-y border-white/10 text-center relative"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase text-white/40 block mb-3">
            The Pivot
          </span>
          <h2 className="font-serif text-[clamp(2.1rem,6.5vw,5.5rem)] font-light leading-[1.05] tracking-tight text-[#FFFDFB] [text-wrap:balance]">
            &ldquo;WHAT ARE YOU ACTUALLY LOOKING FOR?&rdquo;
          </h2>
        </motion.div>

        {/* Step 3: The Reality & Asymmetric Detail */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 space-y-4 text-left"
          >
            <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#8E2432] font-normal leading-snug">
              By then, it’s no longer a question.
            </p>
            <p className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#FFFDFB] leading-tight">
              It’s a risk.
            </p>
            <p className="font-sans text-sm sm:text-base text-white/60 leading-relaxed pt-2 max-w-md">
              Because by the time you ask, you already have something to lose.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15 shadow-2xl"
          >
            <Image
              src="/images/user-phone-morning.jpg"
              alt="Person holding phone in morning light"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
              <span className="text-[10px] font-mono tracking-widest text-white/70 uppercase">
                Holding back • 7:15 AM
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
