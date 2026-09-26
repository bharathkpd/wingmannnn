"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

interface HeroSectionProps {
  onOpenWaitlist: () => void;
  onOpenDownload?: () => void;
}

export function HeroSection({ onOpenWaitlist, onOpenDownload }: HeroSectionProps) {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const heroScenes = [
    {
      id: "terrace",
      img: "/images/user-hero-terrace.jpg",
      caption: "Golden Hour Terrace",
      city: "Bengaluru",
      location: "Indiranagar • 5:40 PM",
      note: "Shared laughter over filter coffee",
      tag: "First Encounter",
    },
    {
      id: "candlelight",
      img: "/images/user-candlelight-date.jpg",
      caption: "Candlelit Dialogue",
      city: "Hyderabad",
      location: "Banjara Hills • 8:15 PM",
      note: "Quiet corner table, no screens",
      tag: "Real Date",
    },
    {
      id: "hands",
      img: "/images/user-hands-coffee.jpg",
      caption: "Hands & Quiet Moments",
      city: "Bengaluru",
      location: "Church Street • 4:20 PM",
      note: "A conversation that moved off screens",
      tag: "Connection",
    },
  ];

  // Auto-advance scenes smoothly every 6 seconds if not hovered
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setActiveSceneIndex((prev) => (prev + 1) % heroScenes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, heroScenes.length]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 16;
    const y = (clientY / innerHeight - 0.5) * 16;
    setMousePos({ x, y });
  };

  const scrollToNext = () => {
    const el = document.querySelector("#the-problem");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const currentScene = heroScenes[activeSceneIndex];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-[100svh] flex flex-col justify-between pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-6 sm:pb-10 md:pb-14 px-5 sm:px-8 md:px-10 overflow-hidden bg-[#F7F2ED]"
    >
      {/* Subtle Ambient Atmosphere */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[320px] sm:w-[500px] md:w-[700px] h-[320px] sm:h-[450px] md:h-[500px] bg-[#552C61]/8 rounded-full blur-[90px] sm:blur-[140px] max-w-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-32 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-[#CC0000]/6 rounded-full blur-[100px] sm:blur-[130px] max-w-full"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto">
        {/* Left Column: Brand Statement & Luxury Editorial Typography */}
        <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-start z-10 text-left w-full">
          {/* Masthead Eyebrow: Editorial luxury */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-2 mb-4 sm:mb-6"
          >
            <div className="flex items-center gap-2 sm:gap-2.5 text-[11px] sm:text-xs tracking-[0.25em] font-sans font-bold uppercase text-[#7B4F87]">
              <span className="font-serif text-[#552C61] tracking-wider text-xs sm:text-sm font-semibold">WINGMANN</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#CC0000] animate-pulse" />
              <span>DATE WITH INTENT</span>
            </div>
            <div className="flex items-center gap-2 text-[10.5px] sm:text-[11.5px] tracking-[0.16em] uppercase text-[#2B2B2B]/70 font-medium">
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
            <h1 className="font-serif text-[2.2rem] sm:text-4xl md:text-5xl lg:text-[4.2rem] font-light leading-[1.12] sm:leading-[1.08] tracking-[-0.02em] text-[#552C61]">
              Find someone who is looking for the{" "}
              <span className="italic font-serif font-normal text-[#CC0000] block sm:inline relative">
                same thing.
              </span>
            </h1>
          </motion.div>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="text-sm sm:text-base md:text-lg text-[#2B2B2B]/80 font-sans max-w-md sm:max-w-lg font-normal leading-relaxed mb-6 sm:mb-8"
          >
            Wingmann helps people looking for meaningful relationships meet through intentional, human-led introductions.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-5 sm:mb-6"
          >
            <button
              onClick={onOpenWaitlist}
              data-cursor="begin"
              className="btn-primary group w-full sm:w-auto justify-center py-3.5 sm:py-4 px-7 sm:px-8 text-xs sm:text-sm font-semibold tracking-widest shadow-[0_12px_28px_-6px_rgba(85,44,97,0.3)] hover:shadow-xl hover:shadow-[#552C61]/35 cursor-pointer rounded-full transition-all duration-300 active:scale-[0.98]"
            >
              <span>BEGIN YOUR STORY</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={scrollToNext}
              data-cursor="open"
              className="btn-secondary w-full sm:w-auto justify-center py-3 sm:py-3.5 px-6 text-xs font-medium tracking-wider cursor-pointer rounded-full border-[#552C61]/20 hover:border-[#552C61]/40 transition-colors"
            >
              EXPLORE WINGMANN
            </button>
          </motion.div>

          {/* Trust Footnote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] sm:text-xs text-[#2B2B2B]/70 font-sans"
          >
            <div className="flex items-center gap-1.5 font-medium text-[#2B2B2B]/90">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
              <span>Bengaluru & Hyderabad</span>
            </div>
            <span className="text-[#552C61]/30">•</span>
            <span>Zero public swipe catalog</span>
            <span className="text-[#552C61]/30">•</span>
            <span>Verified member community</span>
          </motion.div>
        </div>

        {/* Right Column: Framer-Level Interactive Editorial Showcase */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center pt-2 lg:pt-0"
        >
          {/* Main Editorial Card Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              x: mousePos.x * 0.4,
              rotateY: mousePos.x * 0.2,
              rotateX: -mousePos.y * 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative w-full max-w-[460px] aspect-[4/3] sm:aspect-[14/11] lg:aspect-[4/5] rounded-3xl p-2.5 sm:p-3 bg-white/90 backdrop-blur-md shadow-[0_24px_60px_-15px_rgba(85,44,97,0.22)] border border-[#552C61]/15 overflow-hidden group"
          >
            {/* Image Stage with Crossfade Animation */}
            <div className="relative w-full h-[82%] sm:h-[84%] rounded-2xl overflow-hidden bg-[#171318]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScene.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={currentScene.img}
                    alt={currentScene.caption}
                    fill
                    priority
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                  {/* Subtle Cinematic Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Top Tag Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none z-10">
                <span className="px-3 py-1 rounded-full bg-black/55 backdrop-blur-md text-[#FFF8FB] text-[10px] font-mono tracking-wider uppercase font-semibold">
                  {currentScene.tag}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md text-[#FFF8FB] text-[10px] font-sans font-medium flex items-center gap-1">
                  <MapPin className="w-2.5 h-2.5 text-[#CC0000]" />
                  <span>{currentScene.city}</span>
                </span>
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-3 left-3 right-3 z-10 text-left pointer-events-none">
                <span className="text-[10px] font-mono tracking-widest text-[#FFF8FB]/80 uppercase block">
                  {currentScene.location}
                </span>
                <p className="font-serif italic text-base sm:text-lg text-white font-normal drop-shadow-sm">
                  &ldquo;{currentScene.note}&rdquo;
                </p>
              </div>
            </div>

            {/* Bottom Card Controls: Interactive Scene Switcher */}
            <div className="h-[18%] sm:h-[16%] flex items-center justify-between px-2 pt-2">
              <div className="flex items-center gap-1.5 sm:gap-2">
                {heroScenes.map((scene, idx) => (
                  <button
                    key={scene.id}
                    onClick={() => setActiveSceneIndex(idx)}
                    className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-medium transition-all duration-300 cursor-pointer ${
                      activeSceneIndex === idx
                        ? "bg-[#552C61] text-white shadow-sm"
                        : "bg-[#552C61]/8 text-[#552C61]/70 hover:bg-[#552C61]/15 hover:text-[#552C61]"
                    }`}
                    aria-label={`View ${scene.caption}`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-1 text-[11px] font-serif italic text-[#552C61]">
                <span>{currentScene.caption}</span>
              </div>
            </div>

            {/* Floating Tactile Glass Accent (Desktop Only) */}
            <motion.div
              animate={{
                y: [0, -4, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="hidden sm:flex absolute -bottom-3 -left-3 items-center gap-2 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-[#552C61]/15 z-20 pointer-events-none"
            >
              <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-[#552C61]/20">
                <Image
                  src="/images/user-hands-coffee.jpg"
                  alt="Hands meeting over coffee"
                  fill
                  className="object-cover"
                  sizes="24px"
                />
              </div>
              <span className="text-[10px] font-sans font-medium text-[#552C61] tracking-wide">
                Real conversation • Real table
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="flex justify-center pt-3 sm:pt-6 text-[#552C61]/60"
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
