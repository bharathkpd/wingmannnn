"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function EditorialFeelSeen() {
  const [activeMoment, setActiveMoment] = useState(0);

  const moments = [
    {
      id: "conversation",
      title: "One conversation.",
      subtitle: "Unplanned, unhurried, stretching past midnight.",
      img: "/images/user-candlelight-date.jpg",
      meta: "Indiranagar • 11:30 PM",
    },
    {
      id: "coffee",
      title: "One coffee.",
      subtitle: "Sitting across a wooden table where silence doesn't feel awkward.",
      img: "/images/user-hands-coffee.jpg",
      meta: "Church Street • 4:15 PM",
    },
    {
      id: "phone-call",
      title: "One phone call.",
      subtitle: "Hearing their voice when you didn't think you needed to.",
      img: "/images/user-phonecall-laugh.jpg",
      meta: "Bengaluru • 9:40 PM",
    },
    {
      id: "morning-text",
      title: "One good morning text.",
      subtitle: "A small vibration that sets the tone for your whole day.",
      img: "/images/user-reminder-lockscreen.jpg",
      meta: "Lock Screen • 8:12 AM",
    },
    {
      id: "plan-weekend",
      title: "One plan for next weekend.",
      subtitle: "Suddenly making space for someone in your calendar and in your mind.",
      img: "/images/user-twilight-walk.jpg",
      meta: "Promenade • Friday Dusk",
    },
    {
      id: "familiar",
      title: "One moment where they start feeling familiar.",
      subtitle: "Their laugh, their cadence, the way they hold their cup.",
      img: "/images/user-sofa-cozy.jpg",
      meta: "Living Room • Sunday",
    },
  ];

  return (
    <section className="relative py-28 sm:py-36 md:py-44 px-6 sm:px-10 md:px-16 bg-[#FBF8F4] text-[#191517] overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Section Prelude */}
        <div className="max-w-2xl text-left space-y-4">
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#8E2432] font-semibold block">
            Chapter 03 • Feel Seen
          </span>
          <h2 className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] font-light leading-[1.08] text-[#191517]">
            Because nobody falls for someone all at once.
          </h2>
          <p className="font-serif italic text-2xl sm:text-3xl text-[#544E51] font-light">
            It happens quietly.
          </p>
        </div>

        {/* The Continuous Emotional Scene: Typography Stack & Synchronized Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Progressive Moments */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            {moments.map((m, idx) => (
              <motion.div
                key={m.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * idx, duration: 0.5 }}
                onClick={() => setActiveMoment(idx)}
                onMouseEnter={() => setActiveMoment(idx)}
                className={`group cursor-pointer p-5 rounded-2xl transition-all duration-300 border text-left ${
                  activeMoment === idx
                    ? "bg-white border-[#8E2432]/30 shadow-[0_12px_32px_-8px_rgba(142,36,50,0.12)] scale-[1.02]"
                    : "bg-transparent border-transparent hover:border-[#191517]/10 hover:bg-white/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`font-mono text-xs tracking-wider transition-colors ${
                      activeMoment === idx ? "text-[#8E2432] font-semibold" : "text-[#8C8488]"
                    }`}
                  >
                    0{idx + 1}
                  </span>
                  <h3
                    className={`font-serif text-xl sm:text-2xl transition-colors ${
                      activeMoment === idx
                        ? "text-[#191517] font-normal"
                        : "text-[#544E51]/70 group-hover:text-[#191517]"
                    }`}
                  >
                    {m.title}
                  </h3>
                </div>
                <p
                  className={`text-xs sm:text-sm font-sans pt-1.5 pl-7 leading-relaxed transition-opacity ${
                    activeMoment === idx ? "text-[#544E51] opacity-100" : "text-[#8C8488] opacity-75"
                  }`}
                >
                  {m.subtitle}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column: Visual Stage with Crossfade Animation */}
          <div className="lg:col-span-6 relative w-full aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] max-w-[480px] mx-auto rounded-3xl overflow-hidden shadow-2xl border border-[#191517]/10 bg-[#141113]">
            <AnimatePresence mode="wait">
              <motion.div
                key={moments[activeMoment].id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={moments[activeMoment].img}
                  alt={moments[activeMoment].title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                <div className="absolute bottom-6 left-6 right-6 text-left text-white">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/70 block mb-1">
                    {moments[activeMoment].meta}
                  </span>
                  <p className="font-serif italic text-lg sm:text-xl font-light">
                    {moments[activeMoment].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* The Isolated Climax */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="py-16 sm:py-24 border-t border-[#191517]/12 text-center max-w-3xl mx-auto space-y-6"
        >
          <p className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#191517] font-light leading-snug">
            And then one day, you realise you&apos;ve been imagining a future...
          </p>
          <p className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#8E2432] font-normal leading-tight">
            without knowing if they were imagining one too.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
