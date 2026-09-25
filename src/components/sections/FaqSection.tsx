"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#F7F2ED] text-[#2B2B2B] overflow-hidden"
    >
      <div className="max-w-4xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#7B4F87]">
            Chapter 10 • Clarifications
          </span>
          <h2 className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-tight text-[#552C61]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#2B2B2B]/75 font-sans leading-relaxed">
            Everything you need to know about our human matchmaking philosophy, the Wingmate onboarding process, and member standards.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {SITE_CONFIG.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-white border border-[#552C61]/15 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl text-[#552C61] font-medium leading-snug">
                    {faq.q}
                  </span>
                  <div className="p-2 rounded-full bg-[#552C61]/5 text-[#552C61] shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-[#2B2B2B]/75 font-sans leading-relaxed border-t border-[#552C61]/10">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Contact Help Link */}
        <div className="text-center pt-4">
          <p className="text-xs text-[#2B2B2B]/60 font-sans">
            Have a question that isn&apos;t covered here? Reach out directly to our concierge team at{" "}
            <a
              href="mailto:concierge@wingmann.co"
              className="text-[#552C61] font-semibold underline underline-offset-4 hover:text-[#CC0000] transition-colors"
            >
              concierge@wingmann.co
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
