"use client";

import { useState } from "react";
import { EditorialNavbar } from "@/components/EditorialNavbar";
import { EditorialFooter } from "@/components/EditorialFooter";
import { WaitlistModal } from "@/components/WaitlistModal";
import { LegalModal, LegalDocType } from "@/components/LegalModal";
import { CookieBanner } from "@/components/CookieBanner";

import { EditorialHero } from "@/components/sections/EditorialHero";
import { EditorialIntrigue } from "@/components/sections/EditorialIntrigue";
import { EditorialFeelSeen } from "@/components/sections/EditorialFeelSeen";
import { EditorialProblem } from "@/components/sections/EditorialProblem";
import { EditorialIntroducing } from "@/components/sections/EditorialIntroducing";
import { EditorialExperience } from "@/components/sections/EditorialExperience";
import { EditorialClosing } from "@/components/sections/EditorialClosing";

export default function Home() {
  const [waitlistOpen, setWaitlistOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState<LegalDocType | null>(null);
  const [cookiePrefsOpen, setCookiePrefsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#FBF8F4] text-[#191517] relative selection:bg-[#8E2432] selection:text-[#FFFDFB]">
      {/* 1. Minimal Navigation */}
      <EditorialNavbar onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* Chapter 01: Hero */}
      <EditorialHero onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* Chapter 02: Intrigue */}
      <EditorialIntrigue />

      {/* Chapter 03: Feel Seen */}
      <EditorialFeelSeen />

      {/* Chapter 04: Reflection of the Problem */}
      <EditorialProblem />

      {/* Chapter 05: Introducing Wingmann */}
      <EditorialIntroducing onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* Chapter 06: The Experience */}
      <EditorialExperience onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* Chapter 07: Closing Statement & Final CTA */}
      <EditorialClosing onOpenWaitlist={() => setWaitlistOpen(true)} />

      {/* Refined Minimal Footer */}
      <EditorialFooter
        onOpenLegal={(type) => setLegalModalType(type)}
        onOpenCookieSettings={() => setCookiePrefsOpen(true)}
        onOpenWaitlist={() => setWaitlistOpen(true)}
      />

      {/* Interactive Overlays */}
      <WaitlistModal
        isOpen={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
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
