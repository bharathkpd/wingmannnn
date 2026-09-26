"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, HeartHandshake, ArrowRight } from "lucide-react";
import Image from "next/image";

interface EditorialIntroducingProps {
  onOpenWaitlist: () => void;
}

export function EditorialIntroducing({ onOpenWaitlist }: EditorialIntroducingProps) {
  return (
    <section
      id="introducing-wingmann"
      className="relative py-28 sm:py-36 md:py-44 px-6 sm:px-10 md:px-16 bg-[#FBF8F4] text-[#191517] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto space-y-20">
        {/* The Transition: Bold Emergence */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-left space-y-3"
        >
          <span className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#8E2432] font-semibold block">
            Chapter 05 • The Solution
          </span>
          <h2 className="font-serif text-[clamp(2.8rem,7vw,6rem)] font-light text-[#191517] leading-[1.04]">
            So we built <span className="italic font-normal text-[#8E2432]">Wingmann.</span>
          </h2>
        </motion.div>

        {/* Narrative & Visual Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Solution Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8 text-left"
          >
            <p className="font-serif text-2xl sm:text-3xl text-[#191517] font-light leading-snug">
              Before we introduce you to someone, we take the time to understand and verify what you&apos;re genuinely looking for.
            </p>

            <div className="border-l-2 border-[#8E2432] pl-6 py-2 space-y-2">
              <span className="font-serif italic text-2xl sm:text-3xl text-[#8E2432] block">
                Not more options. Just the right ones.
              </span>
              <p className="font-sans text-sm text-[#544E51] leading-relaxed">
                No public catalog. No gamified swipe algorithms. Just intentional human guidance.
              </p>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#544E51] leading-relaxed">
              Wingmann is a relationship platform designed to help people meet in real life, not just match online.
            </p>

            {/* Pillar badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#EFEAE2]/60 border border-[#191517]/8 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#8E2432] shrink-0 mt-0.5" />
                <div className="text-left">
                  <span className="font-sans font-semibold text-xs text-[#191517] block">Verified Intent</span>
                  <span className="text-[11px] text-[#544E51]">Every member shares the same goal.</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#EFEAE2]/60 border border-[#191517]/8 flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#8E2432] shrink-0 mt-0.5" />
                <div className="text-left">
                  <span className="font-sans font-semibold text-xs text-[#191517] block">Curated Introductions</span>
                  <span className="text-[11px] text-[#544E51]">Single, deliberate matches.</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenWaitlist}
                className="btn-editorial-primary group"
              >
                <span>Find someone</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>

          {/* Right Column: Verified Mobile Product Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-[0_25px_60px_-15px_rgba(25,21,23,0.25)] border-[6px] border-[#191517] bg-[#FBF8F4]">
              <Image
                src="/images/user-verified-screen.jpg"
                alt="Wingmann verified profile screen: You're all set! Profile verified and active"
                fill
                className="object-cover"
                sizes="360px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
