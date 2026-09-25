"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Smartphone } from "lucide-react";
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
      img: "/images/hero-1.jpg",
      caption: "Quiet Conversations",
      tag: "Bengaluru",
      rotation: -4,
      zIndex: 1,
    },
    {
      img: "/images/hero-2.jpg",
      caption: "Shared Intentions",
      tag: "Hyderabad",
      rotation: 3,
      zIndex: 2,
    },
    {
      img: "/images/hero-3.jpg",
      caption: "Real Encounters",
      tag: "Evening Café",
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
      className="relative min-h-[100svh] flex flex-col justify-between pt-20 sm:pt-28 md:pt-36 pb-8 sm:pb-12 px-4 sm:px-8 md:px-10 overflow-hidden bg-[#F7F2ED]"
    >
      {/* Subtle Ambient Lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#552C61]/8 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center my-auto">
        {/* Left Column: Brand Statement & Editorial Typography */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-6 md:space-y-8 z-10 text-left">
          {/* Masthead Lockup */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-1"
          >
            <div className="flex items-center gap-2 sm:gap-2.5 text-[10.5px] sm:text-[11px] tracking-[0.24em] font-sans font-bold uppercase text-[#7B4F87]">
              <span className="font-serif text-[#552C61] tracking-wider text-xs sm:text-sm font-semibold">WINGMANN</span>
              <span className="w-1 h-1 rounded-full bg-[#CC0000]" />
              <span>DATE WITH INTENT</span>
            </div>
            <div className="inline-flex items-center gap-2 text-[9.5px] sm:text-[10px] md:text-[11px] tracking-[0.16em] uppercase text-[#2B2B2B]/70 font-medium">
              <span>For people who know what they&apos;re here for</span>
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2 max-w-xl"
          >
            <h1 className="font-serif text-[clamp(2.15rem,6.2vw,4.8rem)] font-light leading-[1.05] tracking-[-0.025em] text-[#552C61] [text-wrap:balance]">
              Find someone who is looking for the{" "}
              <span className="italic font-serif font-normal text-[#CC0000] relative inline-block">
                same thing.
              </span>
            </h1>
          </motion.div>

          {/* Mobile Visual Showcase (High-Impact Hero Visual right above the fold) */}
          <div className="lg:hidden w-full pt-1 pb-1">
            <div
              onClick={() => setActiveMobileCard((prev) => (prev + 1) % heroCards.length)}
              className="relative w-full aspect-[16/10] max-h-[250px] rounded-2xl p-2 bg-white shadow-[0_16px_36px_-10px_rgba(85,44,97,0.18)] border border-[#552C61]/12 overflow-hidden cursor-pointer select-none active:scale-[0.99] transition-transform"
            >
              <div className="relative w-full h-[78%] rounded-xl overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeMobileCard}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={heroCards[activeMobileCard].img}
                      alt={heroCards[activeMobileCard].caption}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 420px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
                    <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/55 backdrop-blur-md text-[#FFF8FB] text-[10px] font-semibold tracking-wider uppercase font-sans">
                      {heroCards[activeMobileCard].tag}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom Caption & Pagination Dots */}
              <div className="h-[22%] flex items-center justify-between px-2 pt-1">
                <span className="font-serif italic text-sm text-[#552C61] font-medium truncate">
                  {heroCards[activeMobileCard].caption}
                </span>

                <div className="flex items-center gap-1.5 shrink-0">
                  {heroCards.map((_, i) => (
                    <button
                      key={i}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMobileCard(i);
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        activeMobileCard === i
                          ? "w-4 bg-[#552C61]"
                          : "w-1.5 bg-[#552C61]/25 hover:bg-[#552C61]/50"
                      }`}
                      aria-label={`View moment ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between px-1 pt-1.5 text-[9.5px] text-[#2B2B2B]/55 font-sans">
              <span>Tap photo to explore moments</span>
              <span>0{activeMobileCard + 1} / 03</span>
            </div>
          </div>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-[#2B2B2B]/80 font-sans max-w-lg font-normal leading-relaxed"
          >
            Meeting someone is easy. But finding someone who wants the same thing isn&apos;t.
            Wingmann introduces thoughtful human matchmaking for those ready to{" "}
            <strong className="text-[#552C61] font-semibold">date with intent</strong>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto pt-1"
          >
            <button
              onClick={onOpenWaitlist}
              data-cursor="begin"
              className="btn-primary group w-full sm:w-auto"
            >
              <span>BEGIN YOUR STORY</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToNext}
              data-cursor="open"
              className="btn-secondary w-full sm:w-auto"
            >
              EXPLORE WINGMANN
            </button>
          </motion.div>

          {/* Trust Footnote & Mobile App Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1 text-[10.5px] sm:text-[11px] text-[#2B2B2B]/60 font-sans"
          >
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
              <span>Bengaluru & Hyderabad</span>
            </div>
            <span>•</span>
            <span>Zero public swipe catalog</span>
            <span>•</span>
            <button
              onClick={onOpenDownload || onOpenWaitlist}
              className="inline-flex items-center gap-1 text-[#552C61] hover:text-[#CC0000] font-semibold underline decoration-[#7B4F87]/40 hover:decoration-[#CC0000] transition-colors cursor-pointer"
            >
              <Smartphone className="w-3 h-3 text-[#CC0000]" />
              <span>Download App</span>
            </button>
          </motion.div>
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
