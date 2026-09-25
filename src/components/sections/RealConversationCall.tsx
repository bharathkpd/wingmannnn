"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PhoneCall, PhoneOff, Mic, Volume2 } from "lucide-react";
import Image from "next/image";

export function RealConversationCall() {
  const [callStatus, setCallStatus] = useState<"incoming" | "active" | "ended">("incoming");
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: any = null;
    if (callStatus === "active") {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    } else {
      setSeconds(0);
    }
    return () => clearInterval(interval);
  }, [callStatus]);

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins < 10 ? "0" : ""}${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <section
      id="real-conversation"
      className="relative py-24 md:py-32 lg:py-36 px-6 md:px-10 bg-[#7B4F87] text-[#FFF8FB] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <span className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#FFF8FB]/70 font-medium">
            Chapter 06 • The Voice
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-tight [text-wrap:balance]">
            One Real Conversation
          </h2>
          <p className="text-xs sm:text-sm text-[#FFF8FB]/80 font-sans leading-relaxed">
            Before meeting in person, every introduction begins with a relaxed 15-minute voice call. No texting ambiguity—just genuine vocal cadence.
          </p>
        </div>

        {/* Interactive Call Mockup Stage */}
        <div className="max-w-xs sm:max-w-sm mx-auto">
          <div className="rounded-[36px] bg-[#171318] p-4 sm:p-5 border border-white/20 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl relative overflow-hidden">
            {/* Phone Notch */}
            <div className="w-20 h-3.5 bg-black rounded-full mx-auto mb-5" />

            <AnimatePresence mode="wait">
              {callStatus === "incoming" && (
                <motion.div
                  key="incoming-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-6 px-3 text-center space-y-7"
                >
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Incoming Audio Call
                    </span>
                    <h3 className="font-serif text-2xl text-white font-normal">
                      Ananya, 28
                    </h3>
                    <p className="text-[11px] text-white/60 font-sans">
                      Wingmann Introduction • Bengaluru
                    </p>
                  </div>

                  {/* Avatar */}
                  <div className="relative w-28 h-28 mx-auto">
                    <div className="relative w-full h-full rounded-full overflow-hidden border border-emerald-400/60 shadow-lg">
                      <Image
                        src="/images/indian-call-portrait.jpg"
                        alt="Ananya Profile"
                        fill
                        className="object-cover"
                        sizes="112px"
                      />
                    </div>
                  </div>

                  <p className="text-xs text-white/70 italic font-serif max-w-xs mx-auto">
                    &ldquo;Hey! Our Wingmate suggested we speak. Are you free for a quick chat?&rdquo;
                  </p>

                  {/* Accept Call Button */}
                  <div className="pt-2 flex flex-col items-center gap-2">
                    <button
                      onClick={() => setCallStatus("active")}
                      data-cursor="open"
                      className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-sans font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2.5 shadow-[0_10px_24px_rgba(16,185,129,0.35)] transition-all cursor-pointer"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>ACCEPT CALL</span>
                    </button>
                    <span className="text-[10px] text-white/40 font-sans">
                      Tap to experience interactive audio dialogue
                    </span>
                  </div>
                </motion.div>
              )}

              {callStatus === "active" && (
                <motion.div
                  key="active-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-5 px-3 text-center space-y-5"
                >
                  <div className="space-y-1">
                    <div className="flex items-center justify-center gap-1.5 text-xs font-mono text-emerald-400 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{formatTimer(seconds)}</span>
                    </div>
                    <h3 className="font-serif text-xl text-white font-normal">
                      Ananya
                    </h3>
                    <span className="text-[10px] font-sans text-white/60">
                      Connected • High Definition
                    </span>
                  </div>

                  {/* Mini Avatar */}
                  <div className="relative w-20 h-20 mx-auto rounded-full overflow-hidden border border-white/20 shadow-md">
                    <Image
                      src="/images/indian-call-portrait.jpg"
                      alt="Ananya Speaking"
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Smooth Audio Frequency Waveform */}
                  <div className="flex items-center justify-center gap-1 h-10 py-1">
                    {[14, 28, 42, 20, 36, 46, 24, 38, 18, 30, 42, 14].map((h, i) => (
                      <motion.div
                        key={i}
                        animate={{ height: [6, h, 10, h * 0.75, 6] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.1,
                          delay: i * 0.07,
                          ease: "easeInOut",
                        }}
                        className="w-1 rounded-full bg-emerald-400/90"
                      />
                    ))}
                  </div>

                  {/* Audio Controls */}
                  <div className="flex items-center justify-center gap-3 text-white/80 py-1">
                    <div className="p-2.5 rounded-full bg-white/10 flex items-center justify-center">
                      <Mic className="w-3.5 h-3.5 text-emerald-400" />
                    </div>
                    <div className="p-2.5 rounded-full bg-white/10 flex items-center justify-center">
                      <Volume2 className="w-3.5 h-3.5 text-white" />
                    </div>
                  </div>

                  {/* End Call Button */}
                  <div className="pt-1">
                    <button
                      onClick={() => setCallStatus("ended")}
                      className="w-full py-3 rounded-full bg-[#CC0000] hover:bg-[#A60000] text-white font-sans font-semibold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <PhoneOff className="w-3.5 h-3.5" />
                      <span>END CALL</span>
                    </button>
                  </div>
                </motion.div>
              )}

              {callStatus === "ended" && (
                <motion.div
                  key="ended-state"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-8 px-3 text-center space-y-5"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-widest uppercase text-emerald-400 font-medium">
                      Call Completed
                    </span>
                    <h3 className="font-serif text-xl text-white font-normal">
                      Conversation Verified
                    </h3>
                    <p className="text-xs text-white/75 leading-relaxed max-w-xs mx-auto font-sans">
                      Duration: {formatTimer(seconds || 18)}. Mutual chemistry established. Ready for Friday table date.
                    </p>
                  </div>

                  <button
                    onClick={() => setCallStatus("incoming")}
                    className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-sans font-medium tracking-wider uppercase transition-colors cursor-pointer"
                  >
                    Simulate Again
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Section Climax Statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto pt-4 space-y-2"
        >
          <blockquote className="font-serif italic text-2xl sm:text-3xl text-[#FFF8FB] leading-snug">
            &ldquo;Sometimes one real conversation tells you more than a hundred messages.&rdquo;
          </blockquote>
          <p className="text-xs text-[#FFF8FB]/70 font-sans mt-2">
            Hearing laughter, cadence, and pause cuts through weeks of superficial messaging.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
