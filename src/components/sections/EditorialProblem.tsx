"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function EditorialProblem() {
  return (
    <section
      id="the-problem"
      className="relative py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-12 bg-[#FBF8F4] text-[#191517] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-14 sm:space-y-18">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-2.5 sm:space-y-3">
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#8E2432] font-semibold block">
            Chapter 04 • The Real Problem
          </span>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,4rem)] font-light leading-[1.1] text-[#191517]">
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
            className="lg:col-span-6 space-y-6 text-left"
          >
            <div className="space-y-2.5">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#191517] leading-snug">
                People are allowed to want different things.
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#544E51] leading-relaxed">
                Some are looking for a relationship. Some are figuring life out. Some simply don&apos;t know yet. None of that is wrong.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white/80 border border-[#191517]/8 shadow-sm space-y-2">
              <span className="font-serif italic text-lg sm:text-xl text-[#8E2432] block">
                It happens because nobody asks.
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#544E51] leading-relaxed">
                Not at the beginning. Only after something has already started.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual of Reflection & Reality */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-4"
          >
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden shadow-lg border border-[#191517]/8">
              <Image
                src="/images/user-empty-table.jpg"
                alt="Quiet empty cafe table in morning light"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-widest uppercase text-white/80">
                  The Honest Table • Morning Light
                </span>
              </div>
            </div>

            <p className="font-serif italic text-base sm:text-lg text-[#544E51] text-left leading-relaxed pl-1">
              &ldquo;By then, you&apos;re no longer asking to understand. You&apos;re asking to hold onto what you&apos;ve already built.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
