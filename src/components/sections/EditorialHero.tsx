"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

interface EditorialHeroProps {
  onOpenWaitlist: () => void;
}

export function EditorialHero({ onOpenWaitlist }: EditorialHeroProps) {
  const scrollToNext = () => {
    const el = document.querySelector("#the-intrigue");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-16 sm:pt-20 pb-5 sm:pb-6 px-5 sm:px-8 md:px-12 overflow-hidden bg-[#141113] text-[#FFFDFB]">
      {/* Full-Bleed Cinematic Background Image: Natural orientation, properly lit */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/user-hero-terrace.jpg"
          alt="Two people having a genuine conversation over coffee at golden hour"
          fill
          priority
          className="object-cover object-[center_28%] opacity-60 sm:opacity-65 transition-opacity duration-1000"
          sizes="100vw"
        />
        {/* Balanced Vignette: Dark enough for text legibility, clear enough to see the authentic photo */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141113] via-[#141113]/55 to-[#141113]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141113]/85 via-[#141113]/40 to-transparent" />
      </div>

      {/* Atmospheric Ambient Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/4 w-[320px] md:w-[600px] h-[320px] md:h-[600px] bg-[#8E2432]/22 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      {/* Natural Optical Center Hero Content: Zero awkward top/bottom gaps */}
      <div className="max-w-4xl mx-auto w-full flex-1 flex flex-col justify-center items-start text-left relative z-10 py-3 sm:py-5">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-2 sm:mb-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8E2432] shadow-[0_0_8px_#8E2432]" />
          <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.22em] uppercase text-[#D4CBCF]">
            Wingmann • Date With Intent
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(1.95rem,5.2vw,4.5rem)] font-light leading-[1.08] tracking-[-0.02em] text-[#FFFDFB] mb-2.5 sm:mb-3.5 [text-wrap:balance]"
        >
          Find someone who is looking for the{" "}
          <span className="italic font-normal text-[#E28390]">same thing.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xs sm:text-base text-white/80 font-normal leading-relaxed max-w-xl mb-4 sm:mb-6"
        >
          Meeting someone is easy. But finding someone who wants the same thing isn’t.
        </motion.p>

        {/* Action Buttons: Compact, elegant, not oversized on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5 sm:gap-3.5 w-full sm:w-auto"
        >
          <button
            onClick={onOpenWaitlist}
            className="py-2.5 px-5 sm:py-3 sm:px-7 text-[11px] sm:text-xs font-sans font-semibold tracking-widest uppercase rounded-full bg-[#8E2432] text-white hover:bg-[#751D29] transition-all duration-300 shadow-md shadow-[#8E2432]/35 flex items-center gap-1.5 cursor-pointer active:scale-95 group"
          >
            <span>Find here</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={scrollToNext}
            className="py-2.5 px-4 sm:py-3 sm:px-6 text-[11px] sm:text-xs font-sans font-medium tracking-wider uppercase rounded-full border border-white/20 text-white/90 hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer"
          >
            <span>Learn why</span>
          </button>
        </motion.div>

        {/* Clean Brand Purpose Indicator (No fake location/times) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-4 sm:mt-6 flex items-center gap-2 text-white/55 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Curated Introductions • Verified Intent</span>
        </motion.div>
      </div>

      {/* Explore Wingmann Scroll Indicator: Anchored cleanly at bottom of viewport */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="relative z-10 flex justify-center pb-1"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-0.5 text-white/50 hover:text-white transition-colors cursor-pointer group"
          aria-label="Scroll to explore wingmann"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase transition-colors group-hover:text-[#E28390]">
            Explore Wingmann
          </span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce transition-colors group-hover:text-[#E28390]" />
        </button>
      </motion.div>
    </section>
  );
}
