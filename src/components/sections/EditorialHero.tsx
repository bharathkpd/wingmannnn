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
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-28 md:pt-36 pb-6 sm:pb-8 px-5 sm:px-8 md:px-12 overflow-hidden bg-[#141113] text-[#FFFDFB]">
      {/* Full-Bleed Cinematic Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/user-hero-terrace.jpg"
          alt="Two people having a genuine conversation over coffee at golden hour"
          fill
          priority
          className="object-cover object-[center_35%] opacity-40 sm:opacity-50 transition-opacity duration-1000"
          sizes="100vw"
        />
        {/* Layered Editorial Gradient Scrim for Flawless Text Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141113] via-[#141113]/75 to-[#141113]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141113]/90 via-[#141113]/60 to-transparent" />
      </div>

      {/* Atmospheric Ambient Burgundy Glow */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/4 w-[350px] md:w-[650px] h-[350px] md:h-[650px] bg-[#8E2432]/22 rounded-full blur-[150px]"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto w-full my-auto relative z-10 flex flex-col items-start text-left pt-6 sm:pt-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 mb-3 sm:mb-4 lg:mb-5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8E2432] shadow-[0_0_8px_#8E2432]" />
          <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.22em] uppercase text-[#D4CBCF]">
            Wingmann • Date With Intent
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-[clamp(2.1rem,5.6vw,4.8rem)] font-light leading-[1.08] tracking-[-0.02em] text-[#FFFDFB] mb-3 sm:mb-4 lg:mb-6 [text-wrap:balance]"
        >
          Find someone who is looking for the{" "}
          <span className="italic font-normal text-[#E28390]">same thing.</span>
        </motion.h1>

        {/* Supporting Copy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="font-sans text-xs sm:text-base lg:text-lg text-white/75 font-normal leading-relaxed max-w-xl mb-5 sm:mb-7 lg:mb-8"
        >
          Meeting someone is easy. But finding someone who wants the same thing isn’t.
        </motion.p>

        {/* Action Buttons: Scaled down gracefully on mobile so it's not oversized */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2.5 sm:gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenWaitlist}
            className="py-2.5 px-5 sm:py-3.5 sm:px-8 text-[11px] sm:text-xs font-sans font-semibold tracking-widest uppercase rounded-full bg-[#8E2432] text-white hover:bg-[#751D29] transition-all duration-300 shadow-lg shadow-[#8E2432]/35 flex items-center gap-2 cursor-pointer active:scale-95 group"
          >
            <span>Find here</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={scrollToNext}
            className="py-2.5 px-4 sm:py-3.5 sm:px-7 text-[11px] sm:text-xs font-sans font-medium tracking-wider uppercase rounded-full border border-white/20 text-white/90 hover:bg-white/10 hover:border-white/40 transition-all duration-300 cursor-pointer"
          >
            <span>Learn why</span>
          </button>
        </motion.div>

        {/* Subtle Editorial Atmosphere Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="pt-6 sm:pt-10 flex flex-wrap items-center gap-2 text-white/50 text-[10px] sm:text-[11px] font-mono tracking-widest uppercase"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#8E2432]" />
          <span>Real Conversation • Indiranagar Golden Hour</span>
          <span className="hidden sm:inline text-white/30">•</span>
          <span className="hidden sm:inline font-serif italic text-white/60 lowercase tracking-normal">
            &ldquo;where laughter comes naturally, without guessing intentions&rdquo;
          </span>
        </motion.div>
      </div>

      {/* Explore Wingmann Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="relative z-10 flex justify-center pt-3 pb-1"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-1 text-white/50 hover:text-white transition-colors cursor-pointer group"
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
