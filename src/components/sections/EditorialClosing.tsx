"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface EditorialClosingProps {
  onOpenWaitlist: () => void;
}

export function EditorialClosing({ onOpenWaitlist }: EditorialClosingProps) {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center items-center py-28 sm:py-36 md:py-40 px-6 sm:px-10 text-center bg-[#141113] text-[#FFFDFB] overflow-hidden">
      {/* Seamless Transition from Linen Canvas */}
      <div className="absolute top-0 left-0 right-0 h-20 sm:h-28 bg-gradient-to-b from-[#FBF8F4] via-[#FBF8F4]/40 to-transparent z-10 pointer-events-none" />

      {/* Background Cinematic Sunset Photography */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <Image
          src="/images/user-sunset-ridge.jpg"
          alt="Two people walking together toward the golden sunset"
          fill
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        {/* Soft Duotone Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141113] via-[#141113]/70 to-[#141113]/85" />
      </div>

      {/* Atmospheric Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[550px] h-[320px] sm:h-[550px] bg-[#8E2432]/22 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto relative z-10 space-y-8 sm:space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#8E2432] font-semibold">
            Chapter 07 • The Beginning
          </span>
        </motion.div>

        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.08 }}
          className="space-y-3 sm:space-y-4"
        >
          <h2 className="font-serif text-[clamp(2.2rem,5.5vw,4.5rem)] font-light leading-[1.08] text-[#FFFDFB] [text-wrap:balance]">
            The world moves faster. <br />
            <span className="italic font-normal text-[#8E2432]">Relationships don&apos;t have to.</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-white/75 leading-relaxed max-w-xl mx-auto pt-1">
            We&apos;re bringing back thoughtful introductions for today&apos;s world.
          </p>
        </motion.div>

        {/* Narrative Epilogue */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.16 }}
          className="py-2 space-y-1.5"
        >
          <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-white/90">
            The rest is your story.
          </p>
          <p className="font-sans text-xs sm:text-sm text-white/60">
            We&apos;re just here to make sure it begins the right way.
          </p>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.22 }}
          className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenWaitlist}
            className="btn-editorial-primary py-3.5 px-9 text-xs sm:text-sm tracking-widest shadow-xl shadow-[#8E2432]/40"
          >
            <span>Find someone</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
