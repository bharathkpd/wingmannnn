"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface EditorialClosingProps {
  onOpenWaitlist: () => void;
}

export function EditorialClosing({ onOpenWaitlist }: EditorialClosingProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center py-32 sm:py-40 px-6 sm:px-10 text-center bg-[#141113] text-[#FFFDFB] overflow-hidden">
      {/* Background Cinematic Sunset Photography */}
      <div className="absolute inset-0 z-0 opacity-35 pointer-events-none">
        <Image
          src="/images/user-sunset-ridge.jpg"
          alt="Two people walking together toward the golden sunset"
          fill
          className="object-cover object-[center_35%]"
          sizes="100vw"
        />
        {/* Soft Duotone Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141113] via-[#141113]/70 to-[#141113]" />
      </div>

      {/* Atmospheric Glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#8E2432]/18 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto relative z-10 space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#8E2432] font-semibold">
            Chapter 07 • The Beginning
          </span>
        </motion.div>

        {/* Headlines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-4"
        >
          <h2 className="font-serif text-[clamp(2.4rem,6vw,5rem)] font-light leading-[1.08] text-[#FFFDFB] [text-wrap:balance]">
            The world moves faster. <br />
            <span className="italic font-normal text-[#8E2432]">Relationships don&apos;t have to.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-white/75 leading-relaxed max-w-xl mx-auto pt-2">
            We&apos;re bringing back thoughtful introductions for today&apos;s world.
          </p>
        </motion.div>

        {/* Narrative Epilogue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-4 space-y-2"
        >
          <p className="font-serif italic text-2xl sm:text-3xl text-white/90">
            The rest is your story.
          </p>
          <p className="font-sans text-sm text-white/60">
            We&apos;re just here to make sure it begins the right way.
          </p>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={onOpenWaitlist}
            className="btn-editorial-primary py-4 px-10 text-sm tracking-widest shadow-xl shadow-[#8E2432]/40"
          >
            <span>Find someone</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
