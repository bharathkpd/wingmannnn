"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function EditorialProblem() {
  return (
    <section
      id="the-problem"
      className="relative py-14 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 bg-[#FBF8F4] text-[#191517] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-2">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#8E2432] font-semibold block">
            Chapter 04 • The Real Problem
          </span>
          <h2 className="font-serif text-[clamp(1.9rem,4.5vw,3.8rem)] font-light leading-[1.1] text-[#191517]">
            The problem was never <br className="hidden sm:inline" />
            <span className="italic text-[#8E2432]">different intentions.</span>
          </h2>
        </div>

        {/* Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Big Empathetic Statements */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-5 text-left"
          >
            <div className="space-y-2">
              <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#191517] leading-snug">
                People are allowed to want different things.
              </h3>
              <p className="font-sans text-xs sm:text-base text-[#544E51] leading-relaxed">
                Some are looking for a relationship. Some are figuring life out. Some simply don&apos;t know yet. None of that is wrong.
              </p>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white/80 border border-[#191517]/8 shadow-sm space-y-1.5">
              <span className="font-serif italic text-base sm:text-lg text-[#8E2432] block">
                It happens because nobody asks.
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#544E51] leading-relaxed">
                Not at the beginning. Only after something has already started.
              </p>
            </div>

            <p className="font-serif italic text-sm sm:text-base text-[#544E51] leading-relaxed pl-1 pt-1">
              &ldquo;By then, you&apos;re no longer asking to understand. You&apos;re asking to hold onto what you&apos;ve already built.&rdquo;
            </p>
          </motion.div>

          {/* Right Column: Visual Photographic Story (Curated Pair) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5"
          >
            {/* Photo 1: Quiet Morning Cafe Table */}
            <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-[#191517]/8 group">
              <Image
                src="/images/user-empty-table.jpg"
                alt="Quiet empty cafe table in morning light"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 260px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3.5">
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/80">
                  The Honest Table • Morning
                </span>
              </div>
            </div>

            {/* Photo 2: Quiet Reflection / Unasked Question */}
            <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-md border border-[#191517]/8 group">
              <Image
                src="/images/user-phone-morning.jpg"
                alt="Person in thoughtful morning light"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-103"
                sizes="(max-width: 1024px) 100vw, 260px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-3.5">
                <span className="text-[10px] font-mono tracking-widest uppercase text-white/80">
                  Unspoken Intent • 8:30 AM
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
