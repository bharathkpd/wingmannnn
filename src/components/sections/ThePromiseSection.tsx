"use client";

import { motion } from "framer-motion";

export function ThePromiseSection() {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-10 bg-[#552C61] text-[#FFF8FB] overflow-hidden text-center">
      {/* Subtle ambient gradient */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(123,79,135,0.4)_0%,_transparent_70%)]"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10 sm:space-y-12">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold tracking-[0.3em] uppercase text-[#FFF8FB]/60 block"
        >
          The Wingmann Promise
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-serif text-[clamp(2.4rem,6vw,5.5rem)] font-light leading-[1.08] tracking-[-0.02em] text-[#FFF8FB]"
        >
          Our goal is to help you meet the right person. <br />
          <span className="italic font-normal text-[#FFF8FB]/90">
            And then never need Wingmann again.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif italic text-lg sm:text-2xl text-[#FFF8FB]/80 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          &ldquo;Traditional apps measure success by daily active time and monthly renewals. We measure success by how quickly you can delete us with a smile.&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="pt-6"
        >
          <div className="w-12 h-[1px] bg-white/30 mx-auto" />
        </motion.div>
      </div>
    </section>
  );
}
