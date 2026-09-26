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
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-28 sm:pt-32 md:pt-36 pb-8 sm:pb-12 px-5 sm:px-8 md:px-12 overflow-hidden bg-[#FBF8F4]">
      {/* Background Subtle Gradient & Light */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[450px] md:w-[650px] h-[450px] md:h-[650px] bg-[#8E2432]/5 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Pure Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-4 sm:mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8E2432]" />
            <span className="text-[11px] sm:text-xs font-sans font-medium tracking-[0.22em] uppercase text-[#8C8488]">
              Wingmann • Date With Intent
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(2.4rem,5.8vw,5rem)] font-light leading-[1.08] tracking-[-0.02em] text-[#191517] mb-5 sm:mb-6 [text-wrap:balance]"
          >
            Find someone who is looking for the{" "}
            <span className="italic font-normal text-[#8E2432]">same thing.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-base sm:text-lg text-[#544E51] font-normal leading-relaxed max-w-lg mb-8 sm:mb-10"
          >
            Meeting someone is easy. But finding someone who wants the same thing isn’t.
          </motion.p>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onOpenWaitlist}
              className="btn-editorial-primary group py-4 px-8 text-xs sm:text-sm tracking-widest shadow-lg shadow-[#8E2432]/25"
            >
              <span>Find here</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToNext}
              className="btn-editorial-ghost py-3.5 px-7 text-xs tracking-wider"
            >
              <span>Learn why</span>
            </button>
          </motion.div>
        </div>

        {/* Right Column: Large Cinematic Relationship Photography */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[440px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_24px_60px_-15px_rgba(25,21,23,0.18)] border border-[#191517]/8 group"
          >
            <Image
              src="/images/user-hero-terrace.jpg"
              alt="Two people having a genuine conversation over coffee at golden hour"
              fill
              priority
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 440px"
            />
            {/* Soft Ambient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10 pointer-events-none" />

            {/* Editorial Caption Tag */}
            <div className="absolute bottom-5 left-5 right-5 text-left text-white pointer-events-none">
              <span className="text-[10px] font-mono tracking-widest uppercase text-white/70 block mb-1">
                Real Conversation • Indiranagar
              </span>
              <p className="font-serif italic text-base sm:text-lg font-light drop-shadow">
                &ldquo;Where laughter comes naturally, without guessing intentions.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex justify-center pt-4"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-1.5 text-[#8C8488] hover:text-[#191517] transition-colors cursor-pointer"
          aria-label="Scroll to intrigue section"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase">
            Scroll To Read
          </span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
