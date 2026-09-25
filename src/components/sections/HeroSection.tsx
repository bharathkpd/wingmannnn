"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  onOpenWaitlist: () => void;
  onOpenDownload?: () => void;
}

export function HeroSection({ onOpenWaitlist, onOpenDownload }: HeroSectionProps) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [activeMobileCard, setActiveMobileCard] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const heroCards = [
    {
      img: "/images/hero-indian-moment.jpg",
      caption: "Quiet Conversations",
      tag: "Bengaluru",
      rotation: -4,
      zIndex: 1,
    },
    {
      img: "/images/hero-indian-portrait.jpg",
      caption: "Shared Intentions",
      tag: "Hyderabad",
      rotation: 3,
      zIndex: 2,
    },
    {
      img: "/images/indian-man-portrait.jpg",
      caption: "Real Encounters",
      tag: "Bengaluru",
      rotation: -1,
      zIndex: 3,
    },
  ];

  // Gentle auto-cycle for mobile showcase
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(() => {
      setActiveMobileCard((prev) => (prev + 1) % heroCards.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isMobile, heroCards.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 20;
    const y = (clientY / innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  const scrollToNext = () => {
    const el = document.querySelector("#the-problem");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] flex flex-col justify-between pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-8 sm:pb-12 md:pb-16 px-6 sm:px-8 md:px-10 overflow-hidden bg-[#F7F2ED]"
    >
      {/* Subtle Ambient Lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[700px] h-[320px] sm:h-[450px] md:h-[500px] bg-[#552C61]/8 rounded-full blur-[90px] sm:blur-[140px] max-w-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center my-auto">
        {/* Left Column: Brand Statement & Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 text-left w-full">
          {/* Masthead Eyebrow: Pure editorial luxury */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2 mb-5 sm:mb-6"
          >
            <div className="flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs tracking-[0.25em] font-sans font-bold uppercase text-[#7B4F87]">
              <span className="font-serif text-[#552C61] tracking-wider text-xs sm:text-sm font-semibold">WINGMANN</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000]" />
              <span>DATE WITH INTENT</span>
            </div>
            <div className="flex items-center gap-2 text-[10.5px] sm:text-[11.5px] tracking-[0.16em] uppercase text-[#2B2B2B]/65 font-medium">
              <span>For people who know what they&apos;re here for</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="max-w-xl mb-4 sm:mb-6"
          >
            <h1 className="font-serif text-[2.1rem] sm:text-4xl md:text-5xl lg:text-[4.5rem] font-light leading-[1.14] sm:leading-[1.08] tracking-[-0.02em] text-[#552C61]">
              Find someone who is looking for the{" "}
              <span className="italic font-serif font-normal text-[#CC0000] block sm:inline">
                same thing.
              </span>
            </h1>
          </motion.div>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-sm sm:text-base md:text-lg text-[#2B2B2B]/80 font-sans max-w-md sm:max-w-lg font-normal leading-relaxed mb-6 sm:mb-8 break-words"
          >
            Wingmann helps people looking for meaningful relationships meet through intentional, human-led introductions.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 w-full sm:w-auto mb-5 sm:mb-6"
          >
            <button
              onClick={onOpenWaitlist}
              data-cursor="begin"
              className="btn-primary group w-full sm:w-auto justify-center py-4 px-8 text-xs sm:text-sm font-semibold tracking-widest shadow-[0_12px_28px_-6px_rgba(85,44,97,0.3)] hover:shadow-xl hover:shadow-[#552C61]/35 cursor-pointer rounded-full transition-all duration-300 active:scale-[0.98]"
            >
              <span>BEGIN YOUR STORY</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToNext}
              data-cursor="open"
              className="btn-secondary w-full sm:w-auto justify-center py-3.5 px-6 text-xs font-medium tracking-wider cursor-pointer rounded-full border-[#552C61]/20 hover:border-[#552C61]/40 transition-colors"
            >
              EXPLORE WINGMANN
            </button>
          </motion.div>

          {/* Trust Footnote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs text-[#2B2B2B]/65 font-sans"
          >
            <div className="flex items-center gap-1.5 font-medium text-[#2B2B2B]/85">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>Bengaluru & Hyderabad</span>
            </div>
            <span className="text-[#552C61]/30">•</span>
            <span>Zero public swipe catalog</span>
            <span className="text-[#552C61]/30">•</span>
            <span>Verified member community</span>
          </motion.div>

          {/* Mobile Visual Showcase — Generously Spaced Editorial Card Deck */}
          <div className="lg:hidden w-full mt-10 sm:mt-14 pb-2">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
              {/* Background Depth Card for subtle Framer luxury tilt */}
              <div className="absolute inset-0 bg-[#552C61]/8 rounded-3xl transform rotate-2 scale-[0.97] pointer-events-none" />

              {/* Active Editorial Card */}
              <div
                onClick={() => setActiveMobileCard((prev) => (prev + 1) % heroCards.length)}
                className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_22px_45px_-12px_rgba(85,44,97,0.22)] border border-[#552C61]/15 cursor-pointer select-none active:scale-[0.99] transition-transform bg-[#F7F2ED]"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMobileCard}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroCards[activeMobileCard].img}
                      alt={heroCards[activeMobileCard].caption}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 480px"
                    />
                    {/* Editorial Vignette & Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

                    {/* Top Tag: City & Status */}
                    <div className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-[#FFF8FB] text-[10px] font-semibold tracking-wider uppercase font-sans flex items-center gap-1.5 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{heroCards[activeMobileCard].tag}</span>
                    </div>

                    {/* Bottom Overlay: Caption + Progress Indicators */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.22em] text-[#FFF8FB]/80 font-sans block mb-0.5">
                          Curated Moment 0{activeMobileCard + 1}
                        </span>
                        <span className="font-serif italic text-lg sm:text-xl text-white font-medium drop-shadow-sm">
                          {heroCards[activeMobileCard].caption}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 pb-0.5">
                        {heroCards.map((_, i) => (
                          <button
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveMobileCard(i);
                            }}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                              activeMobileCard === i
                                ? "w-6 bg-white shadow-sm"
                                : "w-1.5 bg-white/40 hover:bg-white/70"
                            }`}
                            aria-label={`View moment ${i + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Subtle Tap Hint */}
              <div className="flex items-center justify-center gap-2 mt-3 text-[10px] tracking-[0.18em] uppercase text-[#552C61]/55 font-medium">
                <span>Tap card to cycle moments</span>
                <span>•</span>
                <span>0{activeMobileCard + 1} of 0{heroCards.length}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Stacked Card Visual with Parallax (Desktop Only) */}
        <div className="hidden lg:flex lg:col-span-5 relative justify-center items-center py-4 min-h-[440px]">
          <div className="relative w-full max-w-[320px] sm:max-w-[360px] aspect-[4/5]">
            {heroCards.map((card, idx) => (
              <motion.div
                key={card.caption}
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  rotate: card.rotation,
                  x: mousePos.x * (idx === 2 ? 1 : idx === 1 ? -0.4 : 0.3),
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.12 * idx,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute inset-0 rounded-2xl md:rounded-3xl p-3 bg-white shadow-[0_20px_50px_-12px_rgba(85,44,97,0.18)] border border-[#552C61]/10 overflow-hidden cursor-pointer"
                style={{
                  zIndex: card.zIndex,
                  transformOrigin: "center bottom",
                }}
                whileHover={{
                  scale: 1.02,
                  rotate: 0,
                  zIndex: 10,
                  transition: { duration: 0.25 },
                }}
                data-cursor="explore"
              >
                <div className="relative w-full h-[82%] rounded-xl md:rounded-2xl overflow-hidden">
                  <Image
                    src={card.img}
                    alt={card.caption}
                    fill
                    priority={idx === 2}
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 320px, 380px"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-[#FFF8FB] text-[10px] font-semibold tracking-wider uppercase font-sans">
                    {card.tag}
                  </div>
                </div>

                <div className="h-[18%] flex items-center justify-between px-2 pt-2">
                  <span className="font-serif italic text-base sm:text-lg text-[#552C61]">
                    {card.caption}
                  </span>
                  <span className="text-[10px] font-mono font-medium tracking-widest text-[#7B4F87]">
                    0{idx + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex justify-center pt-4 sm:pt-6 text-[#552C61]/50"
      >
        <button
          onClick={scrollToNext}
          className="flex flex-col items-center gap-1 hover:text-[#552C61] transition-colors cursor-pointer"
          aria-label="Scroll to next section"
        >
          <span className="text-[9px] tracking-[0.24em] uppercase font-semibold">
            Scroll To Explore
          </span>
          <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
