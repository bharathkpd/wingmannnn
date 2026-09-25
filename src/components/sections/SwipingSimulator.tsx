"use client";

import { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { X, Heart, RotateCcw, ArrowRight } from "lucide-react";
import Image from "next/image";

interface CardData {
  id: number;
  name: string;
  age: number;
  city: string;
  img: string;
  bio: string;
}

const DEMO_CARDS: CardData[] = [
  {
    id: 1,
    name: "Aarav",
    age: 28,
    city: "Bengaluru",
    img: "/images/marquee-1.jpg",
    bio: "Product architect. Loves filter coffee and quiet bookstore evenings.",
  },
  {
    id: 2,
    name: "Rhea",
    age: 27,
    city: "Hyderabad",
    img: "/images/marquee-2.jpg",
    bio: "Urban planner. Sunday farmer markets and acoustic playlists.",
  },
  {
    id: 3,
    name: "Dev",
    age: 29,
    city: "Bengaluru",
    img: "/images/marquee-3.jpg",
    bio: "Writer & cyclist. Looking for someone grounded who values slow mornings.",
  },
  {
    id: 4,
    name: "Simran",
    age: 26,
    city: "Hyderabad",
    img: "/images/marquee-4.jpg",
    bio: "Visual designer. Long weekend road trips and honest conversations.",
  },
  {
    id: 5,
    name: "Karan",
    age: 30,
    city: "Bengaluru",
    img: "/images/marquee-5.jpg",
    bio: "Culinary explorer. Ready for a real partnership without the games.",
  },
];

export function SwipingSimulator({ onOpenWaitlist }: { onOpenWaitlist?: () => void }) {
  const [cards, setCards] = useState<CardData[]>(DEMO_CARDS);
  const [swipeCount, setSwipeCount] = useState(0);
  const [isOverwhelmed, setIsOverwhelmed] = useState(false);
  const [hasStopped, setHasStopped] = useState(false);

  const handleSwipe = (_direction: "left" | "right") => {
    const nextCount = swipeCount + 1;
    setSwipeCount(nextCount);

    if (cards.length > 1) {
      setCards((prev) => prev.slice(1));
    } else {
      setCards(DEMO_CARDS);
    }

    if (nextCount >= 4 && !hasStopped) {
      setIsOverwhelmed(true);
      setTimeout(() => {
        setIsOverwhelmed(false);
        setHasStopped(true);
      }, 1000);
    }
  };

  const handleReset = () => {
    setCards(DEMO_CARDS);
    setSwipeCount(0);
    setIsOverwhelmed(false);
    setHasStopped(false);
  };

  return (
    <section className="relative py-24 md:py-32 lg:py-36 px-6 md:px-10 bg-[#552C61] text-[#FFF8FB] overflow-hidden">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(123,79,135,0.3)_0%,_transparent_70%)]"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto relative z-10 text-center space-y-12">
        <div className="space-y-3 max-w-lg mx-auto">
          <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#FFF8FB]/70 font-medium">
            Interactive Experience
          </span>
          <h2 className="font-serif text-[clamp(2rem,4.5vw,3.8rem)] font-light leading-tight">
            The Swiping Simulation
          </h2>
          <p className="text-xs sm:text-sm text-[#FFF8FB]/80 font-sans leading-relaxed">
            Drag, tap, or swipe. Notice what happens when human connection is turned into a game of reflex.
          </p>
        </div>

        {/* The Card Stage */}
        <div className="relative min-h-[440px] sm:min-h-[480px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!hasStopped ? (
              <motion.div
                key="interactive-deck"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full max-w-[300px] sm:max-w-[340px] aspect-[3/4]"
              >
                {/* Subtle Overload Shake Effect */}
                {isOverwhelmed && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, x: [-2, 2, -2, 2, 0] }}
                    transition={{ repeat: Infinity, duration: 0.12 }}
                    className="absolute inset-0 z-40 bg-black/60 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center p-6 border border-[#CC0000]/60 space-y-2"
                  >
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#CC0000] uppercase font-bold">
                      Swipe Saturation Reached
                    </span>
                    <p className="font-serif text-2xl text-white font-light">
                      48 unread chats • 0 real dates
                    </p>
                    <span className="text-xs text-white/60">
                      Stopping the noise...
                    </span>
                  </motion.div>
                )}

                {/* Cards Deck */}
                {cards.map((card, index) => {
                  const isTop = index === 0;
                  return (
                    <SwipeCardItem
                      key={card.id + "-" + swipeCount}
                      card={card}
                      isTop={isTop}
                      onSwipe={handleSwipe}
                    />
                  );
                })}

                {/* Bottom Swipe Controls */}
                <div className="absolute -bottom-16 left-0 right-0 flex items-center justify-center gap-6">
                  <button
                    onClick={() => handleSwipe("left")}
                    data-cursor="open"
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FFF8FB] flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                    aria-label="Swipe left (pass)"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="px-3 py-1 rounded-full bg-black/40 border border-white/15 text-[11px] font-mono text-[#FFF8FB]/80">
                    Swiped: {swipeCount}
                  </div>

                  <button
                    onClick={() => handleSwipe("right")}
                    data-cursor="open"
                    className="w-12 h-12 rounded-full bg-[#CC0000] hover:bg-[#A60000] text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-md"
                    aria-label="Swipe right (like)"
                  >
                    <Heart className="w-5 h-5 fill-white" />
                  </button>
                </div>
              </motion.div>
            ) : (
              /* THE CALM REVEAL */
              <motion.div
                key="calm-reveal"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full max-w-lg mx-auto p-8 sm:p-12 rounded-3xl bg-[#171318] border border-white/15 shadow-2xl backdrop-blur-md space-y-6 text-center"
              >
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#CC0000] font-bold block">
                    STOP
                  </span>
                  <h3 className="font-serif text-3xl sm:text-5xl font-light text-[#FFF8FB] leading-tight">
                    Less noise. <br />
                    <span className="italic font-normal text-[#FFF8FB]">More intention.</span>
                  </h3>
                  <p className="font-serif text-2xl sm:text-3xl text-[#7B4F87] font-normal pt-1">
                    That&apos;s Wingmann.
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#FFF8FB]/75 max-w-sm mx-auto leading-relaxed font-sans">
                  Instead of gamifying connection through endless card decks, we introduce you to one vetted person at a time through a dedicated Wingmate.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  {onOpenWaitlist && (
                    <button
                      onClick={onOpenWaitlist}
                      className="btn-primary"
                    >
                      <span>BEGIN YOUR STORY</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                  <button
                    onClick={handleReset}
                    className="text-xs text-white/60 hover:text-white transition-colors cursor-pointer py-2 px-4 flex items-center gap-1.5 font-sans"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Try again</span>
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function SwipeCardItem({
  card,
  isTop,
  onSwipe,
}: {
  card: CardData;
  isTop: boolean;
  onSwipe: (dir: "left" | "right") => void;
}) {
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0, 1, 1, 1, 0]);

  const handleDragEnd = (_: any, info: any) => {
    if (info.offset.x > 80) {
      onSwipe("right");
    } else if (info.offset.x < -80) {
      onSwipe("left");
    }
  };

  return (
    <motion.div
      style={{
        x: isTop ? x : 0,
        rotate: isTop ? rotate : 0,
        opacity: isTop ? opacity : 0.85,
        scale: isTop ? 1 : 0.96,
        y: isTop ? 0 : 10,
      }}
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
      data-cursor={isTop ? "drag" : "open"}
      className="absolute inset-0 rounded-3xl bg-white p-3 shadow-2xl border border-white/20 text-left cursor-grab active:cursor-grabbing overflow-hidden"
    >
      <div className="relative w-full h-[76%] rounded-2xl overflow-hidden">
        <Image
          src={card.img}
          alt={card.name}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 768px) 300px, 340px"
        />
        <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-sans font-medium">
          {card.city}
        </div>
      </div>

      <div className="h-[24%] p-2 flex flex-col justify-center text-[#2B2B2B]">
        <div className="flex items-baseline gap-2">
          <span className="font-serif text-xl font-bold text-[#552C61]">{card.name}</span>
          <span className="text-xs text-[#2B2B2B]/60 font-medium font-mono">{card.age}</span>
        </div>
        <p className="text-[11px] text-[#2B2B2B]/75 line-clamp-2 mt-0.5 font-sans leading-tight">
          {card.bio}
        </p>
      </div>
    </motion.div>
  );
}
