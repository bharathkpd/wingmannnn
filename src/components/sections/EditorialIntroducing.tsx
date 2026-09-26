"use client";

import { motion } from "framer-motion";
import { ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";
import Image from "next/image";

interface EditorialIntroducingProps {
  onOpenWaitlist: () => void;
}

export function EditorialIntroducing({ onOpenWaitlist }: EditorialIntroducingProps) {
  return (
    <section
      id="introducing-wingmann"
      className="relative py-14 sm:py-20 md:py-24 px-5 sm:px-8 md:px-12 bg-[#FBF8F4] text-[#191517] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-10 sm:space-y-14">
        {/* The Transition: Bold Emergence */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-left space-y-2"
        >
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#8E2432] font-semibold block">
            Chapter 05 • The Solution
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5.5vw,4.5rem)] font-light text-[#191517] leading-[1.06]">
            So we built <span className="italic font-normal text-[#8E2432]">Wingmann.</span>
          </h2>
        </motion.div>

        {/* Narrative & Visual Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Solution Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-5 text-left"
          >
            <p className="font-serif text-lg sm:text-2xl text-[#191517] font-light leading-snug">
              Before we introduce you to someone, we take the time to understand and verify what you&apos;re genuinely looking for.
            </p>

            <div className="border-l-2 border-[#8E2432] pl-4 sm:pl-5 py-1 space-y-1">
              <span className="font-serif italic text-lg sm:text-2xl text-[#8E2432] block">
                Not more options. Just the right ones.
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#544E51] leading-relaxed">
                No public catalog. No gamified swipe algorithms. Just intentional human guidance.
              </p>
            </div>

            <p className="font-sans text-xs sm:text-base text-[#544E51] leading-relaxed">
              Wingmann is a relationship platform designed to help people meet in real life, not just match online.
            </p>

            {/* Pillar badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 rounded-xl bg-white/80 border border-[#191517]/8 flex items-start gap-2.5 shadow-sm">
                <ShieldCheck className="w-4.5 h-4.5 text-[#8E2432] shrink-0 mt-0.5" />
                <div className="text-left">
                  <span className="font-sans font-semibold text-xs text-[#191517] block">Verified Intent</span>
                  <span className="text-[11px] text-[#544E51]">Every member shares the same goal.</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/80 border border-[#191517]/8 flex items-start gap-2.5 shadow-sm">
                <HeartHandshake className="w-4.5 h-4.5 text-[#8E2432] shrink-0 mt-0.5" />
                <div className="text-left">
                  <span className="font-sans font-semibold text-xs text-[#191517] block">Curated Introductions</span>
                  <span className="text-[11px] text-[#544E51]">Single, deliberate matches.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenWaitlist}
                className="btn-editorial-primary group py-2.5 sm:py-3 px-6 sm:px-7 text-xs tracking-wider"
              >
                <span>Find someone</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Verified Mobile Product Mockup & Introduction Pairing */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex items-center justify-center gap-4 sm:gap-6"
          >
            {/* Verified Mobile Phone Screen */}
            <div className="relative w-[180px] sm:w-[220px] aspect-[9/16] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-[4px] sm:border-[5px] border-[#191517] bg-[#FBF8F4] shrink-0">
              <Image
                src="/images/user-verified-screen.jpg"
                alt="Wingmann verified profile screen: You're all set! Profile verified and active"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 180px, 220px"
              />
            </div>

            {/* Curated Introduction Card Pairing */}
            <div className="flex flex-col gap-3 max-w-[200px] sm:max-w-[240px]">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-[#191517]/8 group">
                <Image
                  src="/images/user-videocall.jpg"
                  alt="Personal Wingmate Introduction Connection"
                  fill
                  className="object-cover"
                  sizes="240px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/90">
                    Human Wingmate
                  </span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-white/90 border border-[#191517]/8 shadow-sm text-left">
                <span className="text-[10px] font-mono text-[#8E2432] uppercase tracking-wider block font-semibold">
                  Personal Verification
                </span>
                <p className="font-serif italic text-xs text-[#544E51] mt-0.5">
                  &ldquo;A human wingmate ensures you only meet people ready for real commitment.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
