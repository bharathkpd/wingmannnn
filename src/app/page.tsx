"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WaitlistModal } from "@/components/WaitlistModal";
import { DownloadModal } from "@/components/DownloadModal";
import { StoryModal, StoryItem } from "@/components/StoryModal";
import { LegalModal, LegalDocType } from "@/components/LegalModal";
import { CookieBanner } from "@/components/CookieBanner";

import { HeroSection } from "@/components/sections/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { SwipingSimulator } from "@/components/sections/SwipingSimulator";
import { WingmateSection } from "@/components/sections/WingmateSection";
import { CuratedIntroduction } from "@/components/sections/CuratedIntroduction";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { IntentionalVsEndless } from "@/components/sections/IntentionalVsEndless";
import { RealConversationCall } from "@/components/sections/RealConversationCall";
import { RealDateSection } from "@/components/sections/RealDateSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ThePromiseSection } from "@/components/sections/ThePromiseSection";
import { StoriesSection } from "@/components/sections/StoriesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ClosingSection } from "@/components/sections/ClosingSection";

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);
  const [legalModalType, setLegalModalType] = useState<LegalDocType | null>(null);
  const [cookiePrefsOpen, setCookiePrefsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F7F2ED] text-[#2B2B2B] relative selection:bg-[#552C61] selection:text-[#FFF8FB]">
      {/* Navigation */}
      <Navbar
        onOpenWaitlist={() => setWaitlistOpen(true)}
        onOpenDownload={() => setDownloadOpen(true)}
      />

      {/* 1. Hero Section */}
      <HeroSection
        onOpenWaitlist={() => setWaitlistOpen(true)}
        onOpenDownload={() => setDownloadOpen(true)}
      />

      {/* 2. The Problem Narrative */}
      <ProblemSection />

      {/* 3. Interactive Swiping Simulation */}
      <SwipingSimulator onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* 4. The Wingmate Concept */}
      <WingmateSection />

      {/* 5. Curated Connections (Single Introduction Reveal) */}
      <CuratedIntroduction />

      {/* 6. How It Works (5-Step Sticky Scroll / Timeline) */}
      <HowItWorksSection />

      {/* 7. Intentional vs. Endless (Comparison) */}
      <IntentionalVsEndless />

      {/* 8. Real Conversation (Phone Call Simulator) */}
      <RealConversationCall />

      {/* 9. Real Date (Cinematic Date Atmosphere) */}
      <RealDateSection />

      {/* 10. Integrity & Trust */}
      <TrustSection />

      {/* 11. The Promise */}
      <ThePromiseSection />

      {/* 12. Editorial Stories */}
      <StoriesSection onSelectStory={(story) => setSelectedStory(story)} />

      {/* 13. Frequently Asked Questions */}
      <FaqSection />

      {/* 14. Final Closing Section & CTA */}
      <ClosingSection
        onOpenWaitlist={() => setWaitlistOpen(true)}
        onOpenDownload={() => setDownloadOpen(true)}
      />

      {/* Footer (with fixed Instagram & Twitter & LinkedIn icons + App Download Badges & Callout) */}
      <Footer
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenCookieSettings={() => setCookiePrefsOpen(true)}
        onOpenWaitlist={() => setWaitlistOpen(true)}
        onOpenDownload={() => setDownloadOpen(true)}
      />

      {/* Modals & Overlays */}
      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />

      <DownloadModal
        isOpen={downloadOpen}
        onClose={() => setDownloadOpen(false)}
        onOpenWaitlist={() => setWaitlistOpen(true)}
      />

      <StoryModal
        story={selectedStory}
        onClose={() => setSelectedStory(null)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

      <CookieBanner
        forceOpenPreferences={cookiePrefsOpen}
        onClosePreferences={() => setCookiePrefsOpen(false)}
      />
    </main>
  );
}
