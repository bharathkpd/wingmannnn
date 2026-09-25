"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, Calendar, Quote } from "lucide-react";
import Image from "next/image";
import { SITE_CONFIG } from "@/config/site";
import { StoryItem } from "@/components/StoryModal";

interface StoriesSectionProps {
  onSelectStory: (story: StoryItem) => void;
}

export function StoriesSection({ onSelectStory }: StoriesSectionProps) {
  return (
    <section
      id="stories"
      className="relative py-28 md:py-36 px-6 md:px-10 bg-[#FFF8FB] text-[#2B2B2B] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#552C61]/15">
          <div className="space-y-3">
            <span className="text-xs font-bold tracking-[0.25em] uppercase text-[#7B4F87]">
              Chapter 09 • Editorial Stories
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,4.2rem)] font-light leading-tight text-[#552C61]">
              Stories That Began With Intent.
            </h2>
          </div>
          <div className="text-xs text-[#2B2B2B]/60 max-w-xs font-sans">
            Click any story card to read the full introduction narrative and member reflections.
          </div>
        </div>

        {/* Stories Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SITE_CONFIG.stories.map((story, idx) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.12 * idx, duration: 0.6 }}
              onClick={() => onSelectStory(story)}
              data-cursor="read"
              className="group cursor-pointer rounded-3xl bg-white border border-[#552C61]/15 overflow-hidden shadow-[0_12px_36px_-10px_rgba(85,44,97,0.08)] hover:shadow-[0_20px_50px_-10px_rgba(85,44,97,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Preview with Hover Zoom */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.names}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[9px] font-mono tracking-wider uppercase font-semibold">
                    DEMO STORY
                  </span>
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#552C61] text-[10px] font-bold uppercase tracking-wider">
                    {story.tag}
                  </span>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md text-[#552C61] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Story Teaser Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-[#7B4F87] font-semibold">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" /> {story.city}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {story.date}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-[#552C61] font-normal group-hover:text-[#CC0000] transition-colors">
                    {story.names}
                  </h3>

                  <p className="font-serif italic text-sm text-[#2B2B2B]/85 leading-relaxed line-clamp-3">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#552C61]/10 flex items-center justify-between text-xs text-[#7B4F87] font-semibold">
                  <span>Read Full Story</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Demo Disclaimer Badge */}
        <div className="text-center pt-2">
          <span className="text-[11px] text-[#2B2B2B]/50 font-sans italic">
            *Demo representation of member stories. Real names and identifying details are protected for privacy.
          </span>
        </div>
      </div>
    </section>
  );
}
