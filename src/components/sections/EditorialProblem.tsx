"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function EditorialProblem() {
  return (
    <section
      id="the-problem"
      className="relative py-28 sm:py-36 md:py-44 px-6 sm:px-10 md:px-16 bg-[#EFEAE2] text-[#191517] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Section Header */}
        <div className="max-w-3xl text-left space-y-4">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#8E2432] font-semibold block">
            Chapter 04 • The Real Problem
          </span>
          <h2 className="font-serif text-[clamp(2.4rem,5.5vw,4.8rem)] font-light leading-[1.08] text-[#191517]">
            The problem was never <br className="hidden sm:inline" />
            <span className="italic text-[#8E2432]">different intentions.</span>
          </h2>
        </div>

        {/* Editorial Split Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Big Empathetic Statements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8 text-left"
          >
            <div className="space-y-3">
              <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#191517] leading-snug">
                People are allowed to want different things.
              </h3>
              <p className="font-sans text-base sm:text-lg text-[#544E51] leading-relaxed">
                Some are looking for a relationship. Some are figuring life out. Some simply don&apos;t know yet. None of that is wrong.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/70 border border-[#191517]/8 shadow-sm space-y-3">
              <span className="font-serif italic text-xl text-[#8E2432] block">
                It happens because nobody asks.
              </span>
              <p className="font-sans text-sm text-[#544E51] leading-relaxed">
                Not at the beginning. Only after something has already started.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual of Reflection & Reality */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="relative aspect-[16/11] rounded-3xl overflow-hidden shadow-xl border border-[#191517]/8">
              <Image
                src="/images/user-empty-table.jpg"
                alt="Quiet empty cafe table in morning light"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                <span className="text-[11px] font-mono tracking-widest uppercase text-white/80">
                  The Honest Table • Morning Light
                </span>
              </div>
            </div>

            <p className="font-serif italic text-lg sm:text-xl text-[#544E51] text-left leading-relaxed pl-2">
              &ldquo;By then, you&apos;re no longer asking to understand. You&apos;re asking to hold onto what you&apos;ve already built.&rdquo;
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
