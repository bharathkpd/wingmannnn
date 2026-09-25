"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Quote, MapPin, Calendar, Heart } from "lucide-react";
import Image from "next/image";

export interface StoryItem {
  id: string;
  names: string;
  city: string;
  date: string;
  quote: string;
  story: string;
  image: string;
  tag: string;
}

interface StoryModalProps {
  story: StoryItem | null;
  onClose: () => void;
}

export function StoryModal({ story, onClose }: StoryModalProps) {
  if (!story) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#171318]/75 backdrop-blur-md"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 20 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl bg-[#FFF8FB] rounded-2xl md:rounded-3xl shadow-[0_32px_80px_-16px_rgba(85,44,97,0.4)] border border-[#552C61]/15 overflow-hidden z-10"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#171318]/50 text-white hover:bg-[#171318]/70 backdrop-blur-sm transition-colors cursor-pointer"
          aria-label="Close story"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <Image
            src={story.image}
            alt={story.names}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 700px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FFF8FB] via-transparent to-black/30" />
          <div className="absolute bottom-4 left-6 sm:left-8">
            <span className="inline-block px-3 py-1 rounded-full bg-[#552C61] text-[#FFF8FB] text-[11px] font-bold uppercase tracking-wider">
              {story.tag}
            </span>
          </div>
        </div>

        {/* Story Body */}
        <div className="p-6 sm:p-8 sm:pt-4 space-y-6">
          <div className="space-y-1">
            <div className="flex items-center gap-4 text-xs font-semibold text-[#7B4F87]">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {story.city}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> {story.date}
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#552C61] font-normal">
              {story.names}
            </h3>
          </div>

          <div className="relative pl-6 border-l-2 border-[#CC0000]/60 italic font-serif text-lg sm:text-xl text-[#552C61] leading-relaxed">
            <Quote className="w-5 h-5 text-[#CC0000]/30 absolute -left-2.5 -top-2 fill-[#CC0000]/10" />
            &ldquo;{story.quote}&rdquo;
          </div>

          <div className="text-sm sm:text-base text-[#2B2B2B]/85 leading-relaxed font-sans space-y-4">
            <p>{story.story}</p>
          </div>

          <div className="pt-4 border-t border-[#552C61]/10 flex items-center justify-between">
            <span className="text-xs text-[#2B2B2B]/50 font-medium italic">
              *Demo member story representation
            </span>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#552C61] text-[#FFF8FB] text-xs font-semibold tracking-wider uppercase hover:bg-[#7B4F87] transition-colors cursor-pointer"
            >
              Close Story
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
