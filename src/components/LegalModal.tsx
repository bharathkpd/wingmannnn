"use client";

import { motion } from "framer-motion";
import { X, ShieldCheck, FileText, Cookie } from "lucide-react";

export type LegalDocType = "privacy" | "terms" | "cookies";

interface LegalModalProps {
  type: LegalDocType | null;
  onClose: () => void;
}

export function LegalModal({ type, onClose }: LegalModalProps) {
  if (!type) return null;

  const contentMap = {
    privacy: {
      title: "Privacy Policy",
      subtitle: "Our commitment to confidentiality and human-first privacy",
      icon: ShieldCheck,
      sections: [
        {
          heading: "1. Respect for Member Privacy",
          body: "Wingmann operates on an intentional, non-public matchmaking model. Unlike traditional swipe-based platforms, your profile is never exposed to an open public directory or searchable database. Information you share is reviewed exclusively by vetted Wingmates to facilitate curated introductions.",
        },
        {
          heading: "2. Information We Collect",
          body: "We collect only the details you explicitly submit through our conversational onboarding form and Wingmate introductory conversations: your name, contact email, city of residence, relationship intentions, and personal interests. We do not track your real-time GPS location in the background.",
        },
        {
          heading: "3. How Your Data Is Used",
          body: "Your information is used strictly to curate thoughtful introductions, coordinate communication between mutual introductions, and maintain community safety standards. We never sell, monetize, or license your personal information to third-party advertisers.",
        },
        {
          heading: "4. Your Rights & Data Deletion",
          body: "You maintain total ownership over your data. At any time, you may request complete deletion of your application, notes, and profile history by contacting privacy@wingmann.co.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      subtitle: "Community standards for intentional dating",
      icon: FileText,
      sections: [
        {
          heading: "1. Intentional Community Standards",
          body: "Wingmann is designed exclusively for adults (18+) who seek genuine human connection, mutual respect, and intentional dating. Harassment, deceit, impersonation, unsolicited commercial promotion, or predatory conduct results in immediate and permanent expulsion from the community.",
        },
        {
          heading: "2. Curation & Discretion",
          body: "Wingmann reserves the discretion to curate membership based on community capacity, city cohort availability, and alignment with intentional relationship values. Submission of an application does not automatically guarantee admission.",
        },
        {
          heading: "3. Mutual Respect on Calls & Dates",
          body: "Members agree to communicate with courtesy, respect scheduled call appointments, and honor safe meeting protocols. Wingmann provides introductions; real-world interactions remain the personal responsibility of participating adults.",
        },
        {
          heading: "4. Intellectual Property",
          body: "All trademarks, visual assets, editorial text, and interaction designs on this site are protected property of Wingmann. Unauthorized reproduction is strictly prohibited.",
        },
      ],
    },
    cookies: {
      title: "Cookie Policy",
      subtitle: "Transparent disclosure on local storage and site cookies",
      icon: Cookie,
      sections: [
        {
          heading: "1. Essential Cookies",
          body: "These cookies are strictly required to ensure core functionality, security, and persistence of your consent preferences. They do not store personally identifiable marketing information.",
        },
        {
          heading: "2. Analytical Cookies (Optional)",
          body: "When enabled, aggregate metrics help our design team understand navigation flows and optimize page performance. No invasive cross-site behavioral tracking is performed.",
        },
        {
          heading: "3. Managing Your Preferences",
          body: "You can adjust your cookie settings at any time using the 'Cookie Settings' link in the footer or by selecting 'Manage Preferences' in the cookie banner.",
        },
      ],
    },
  };

  const current = contentMap[type];
  const Icon = current.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-[#171318]/70 backdrop-blur-sm"
      />

      {/* Modal Dialog */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#FFF8FB] rounded-2xl md:rounded-3xl shadow-[0_24px_60px_-12px_rgba(85,44,97,0.35)] border border-[#552C61]/15 p-6 sm:p-10 z-10 flex flex-col"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-[#552C61]/60 hover:text-[#552C61] hover:bg-[#552C61]/5 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#552C61]/10 pr-8">
          <div className="p-3 rounded-2xl bg-[#552C61]/10 text-[#552C61]">
            <Icon className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#552C61] font-normal">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#7B4F87] mt-1 font-medium">
              {current.subtitle}
            </p>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto pr-2 space-y-6 text-sm text-[#2B2B2B]/85 leading-relaxed font-sans">
          {current.sections.map((sec, idx) => (
            <div key={idx} className="space-y-1.5">
              <h4 className="font-serif text-lg text-[#552C61] font-medium">
                {sec.heading}
              </h4>
              <p className="text-xs sm:text-sm text-[#2B2B2B]/75 leading-relaxed">
                {sec.body}
              </p>
            </div>
          ))}
          <p className="text-[11px] text-[#2B2B2B]/50 italic pt-4">
            Last updated: September 2026. For inquiries, email concierge@wingmann.co.
          </p>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-[#552C61]/10 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#552C61] text-[#FFF8FB] text-xs font-semibold tracking-wider uppercase hover:bg-[#7B4F87] transition-colors cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </motion.div>
    </div>
  );
}
