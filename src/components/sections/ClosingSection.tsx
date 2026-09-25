"use client";

import { motion } from "framer-motion";
import { ArrowRight, Smartphone } from "lucide-react";
import Image from "next/image";

interface ClosingSectionProps {
  onOpenWaitlist: () => void;
  onOpenDownload?: () => void;
}

export function ClosingSection({
  onOpenWaitlist,
  onOpenDownload,
}: ClosingSectionProps) {
  const handleDownload = () => {
    if (onOpenDownload) {
      onOpenDownload();
    } else {
      onOpenWaitlist();
    }
  };

  return (
    <section className="relative py-28 md:py-36 lg:py-44 px-6 md:px-10 bg-[#552C61] text-[#FFF8FB] overflow-hidden text-center">
      {/* Background Atmosphere Image with Duotone Blend */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <Image
          src="/images/indian-closing-walk.jpg"
          alt="Two people walking together along Bangalore boulevard"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#552C61] via-[#552C61]/85 to-[#552C61]" />
      </div>

      {/* Ambient Lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#CC0000]/12 rounded-full blur-[140px]"
        aria-hidden="true"
      />

      <div className="max-w-3xl mx-auto relative z-10 space-y-8 sm:space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#FFF8FB]/70 font-medium"
        >
          <span>The Next Chapter</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <h2 className="font-serif text-[clamp(2.4rem,6vw,5.2rem)] font-light leading-[1.04] tracking-[-0.025em] text-[#FFF8FB] [text-wrap:balance]">
            Maybe your person is <br />
            <span className="italic font-normal text-[#FFF8FB]">closer than you think.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-lg mx-auto space-y-2.5"
        >
          <p className="font-serif italic text-base sm:text-lg text-[#FFF8FB]/90 leading-relaxed font-normal">
            &ldquo;The world moves faster. Relationships don&apos;t have to.&rdquo;
          </p>
          <p className="text-xs sm:text-sm text-[#FFF8FB]/75 font-sans leading-relaxed">
            We&apos;re bringing back thoughtful introductions for today&apos;s world. The rest is your story. We&apos;re just here to make sure it begins the right way.
          </p>
        </motion.div>

        {/* Big Confident CTAs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="pt-2 flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center gap-3.5">
            <button
              onClick={onOpenWaitlist}
              data-cursor="begin"
              className="px-9 py-4 rounded-full bg-[#FFF8FB] text-[#552C61] hover:bg-white text-xs font-sans font-semibold tracking-widest uppercase flex items-center justify-center gap-3 shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>BEGIN YOUR STORY</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#CC0000]" />
            </button>

            <button
              onClick={handleDownload}
              data-cursor="open"
              className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#FFF8FB] text-xs font-sans font-semibold tracking-widest uppercase flex items-center justify-center gap-2.5 transition-all cursor-pointer hover:scale-105 active:scale-95"
            >
              <Smartphone className="w-4 h-4 text-white" />
              <span>DOWNLOAD APP</span>
            </button>
          </div>

          <div className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-[#FFF8FB]/80 font-medium">
              Not for everyone. Just for the serious ones.
            </span>
            <span className="text-[9px] font-sans tracking-[0.16em] uppercase text-[#FFF8FB]/50 font-normal">
              Available on iOS & Android • Private invite cohorts
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

