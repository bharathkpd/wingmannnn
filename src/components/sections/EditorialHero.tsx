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
    <section className="relative min-h-[100svh] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-32 pb-6 sm:pb-8 px-5 sm:px-8 md:px-12 overflow-hidden bg-[#FBF8F4]">
      {/* Background Subtle Gradient & Light */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[450px] md:w-[650px] h-[450px] md:h-[650px] bg-[#8E2432]/6 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full my-auto flex flex-col lg:grid lg:grid-cols-12 gap-5 lg:gap-12 items-center">
        {/* Editorial Typography Column */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10 w-full">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-2 sm:mb-3 lg:mb-5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#8E2432]" />
            <span className="text-[10px] sm:text-xs font-sans font-medium tracking-[0.22em] uppercase text-[#8C8488]">
              Wingmann • Date With Intent
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-[clamp(1.9rem,4.8vw,4.8rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#191517] mb-2.5 sm:mb-4 lg:mb-5 [text-wrap:balance]"
          >
            Find someone who is looking for the{" "}
            <span className="italic font-normal text-[#8E2432]">same thing.</span>
          </motion.h1>

          {/* Supporting Copy */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-xs sm:text-base lg:text-lg text-[#544E51] font-normal leading-relaxed max-w-lg mb-4 sm:mb-6 lg:mb-8"
          >
            Meeting someone is easy. But finding someone who wants the same thing isn’t.
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3 w-full sm:w-auto"
          >
            <button
              onClick={onOpenWaitlist}
              className="btn-editorial-primary group py-3 px-6 sm:py-3.5 sm:px-8 text-xs sm:text-sm tracking-widest shadow-md shadow-[#8E2432]/25"
            >
              <span>Find here</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToNext}
              className="btn-editorial-ghost py-3 px-5 sm:py-3.5 sm:px-7 text-xs tracking-wider"
            >
              <span>Learn why</span>
            </button>
          </motion.div>
        </div>

        {/* Mobile Visual Frame: Compact, perfectly proportioned to never cut off halfway */}
        <div className="lg:hidden w-full max-w-md mx-auto my-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-[155px] sm:h-[190px] rounded-2xl overflow-hidden shadow-md border border-[#191517]/8 group"
          >
            <Image
              src="/images/user-hero-terrace.jpg"
              alt="Two people having a genuine conversation over coffee at golden hour"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 440px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-4 right-4 text-left text-white pointer-events-none flex items-center justify-between">
              <span className="text-[10px] font-mono tracking-widest uppercase text-white/80">
                Real Conversation • Indiranagar
              </span>
              <span className="font-serif italic text-xs text-white/90 hidden sm:inline">
                &ldquo;Without guessing intentions&rdquo;
              </span>
            </div>
          </motion.div>
        </div>

        {/* Desktop Large Framed Editorial Portrait Card */}
        <div className="hidden lg:flex lg:col-span-5 relative w-full justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_24px_60px_-15px_rgba(25,21,23,0.18)] border border-[#191517]/8 group"
          >
            <Image
              src="/images/user-hero-terrace.jpg"
              alt="Two people having a genuine conversation over coffee at golden hour"
              fill
              priority
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              sizes="440px"
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

      {/* Explore Wingmann Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="flex justify-center pt-2 pb-1"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-1 text-[#8C8488] hover:text-[#8E2432] transition-colors cursor-pointer group"
          aria-label="Scroll to explore wingmann"
        >
          <span className="text-[10px] font-mono tracking-[0.2em] uppercase transition-colors">
            Explore Wingmann
          </span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce transition-colors" />
        </button>
      </motion.div>
    </section>
  );
}
