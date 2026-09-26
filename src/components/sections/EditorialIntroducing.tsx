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
      className="relative py-20 sm:py-28 md:py-36 px-5 sm:px-8 md:px-12 bg-[#FBF8F4] text-[#191517] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-14 sm:space-y-18">
        {/* The Transition: Bold Emergence */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-left space-y-2.5"
        >
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] uppercase text-[#8E2432] font-semibold block">
            Chapter 05 • The Solution
          </span>
          <h2 className="font-serif text-[clamp(2.4rem,6vw,5rem)] font-light text-[#191517] leading-[1.06]">
            So we built <span className="italic font-normal text-[#8E2432]">Wingmann.</span>
          </h2>
        </motion.div>

        {/* Narrative & Visual Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Solution Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6 text-left"
          >
            <p className="font-serif text-xl sm:text-2xl text-[#191517] font-light leading-snug">
              Before we introduce you to someone, we take the time to understand and verify what you&apos;re genuinely looking for.
            </p>

            <div className="border-l-2 border-[#8E2432] pl-5 py-1.5 space-y-1.5">
              <span className="font-serif italic text-xl sm:text-2xl text-[#8E2432] block">
                Not more options. Just the right ones.
              </span>
              <p className="font-sans text-xs sm:text-sm text-[#544E51] leading-relaxed">
                No public catalog. No gamified swipe algorithms. Just intentional human guidance.
              </p>
            </div>

            <p className="font-sans text-sm sm:text-base text-[#544E51] leading-relaxed">
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
                className="btn-editorial-primary group py-3 px-7 text-xs tracking-wider"
              >
                <span>Find someone</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Verified Mobile Product Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_-15px_rgba(25,21,23,0.2)] border-[5px] border-[#191517] bg-[#FBF8F4]">
              <Image
                src="/images/user-verified-screen.jpg"
                alt="Wingmann verified profile screen: You're all set! Profile verified and active"
                fill
                className="object-cover"
                sizes="320px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
