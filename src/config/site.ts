/**
 * Wingmann Authoritative Site Configuration
 * Brand: WINGMANN
 * Tagline: DATE WITH INTENT
 */

export const SITE_CONFIG = {
  name: "Wingmann",
  tagline: "Date with Intent",
  eyebrow: "For people who know what they're here for.",
  secondaryTagline:
    "The intent-first platform for people ready to find a relationship — not just explore one.",
  heroHeadline: "Find someone who is looking for the same thing.",
  heroSubhead:
    "Meeting someone is easy. But finding someone who wants the same thing isn't.",
  description:
    "Wingmann replaces endless swiping with curated human introductions, thoughtful conversations, and real dates.",

  /**
   * Action config: keeps CTA target flexible
   * Mode 'modal' opens conversational waitlist application
   */
  cta: {
    mode: "modal" as "modal" | "appStore" | "playStore" | "customUrl",
    primaryLabel: "BEGIN YOUR STORY",
    secondaryLabel: "EXPLORE WINGMANN",
    appStoreUrl: "https://apps.apple.com/app/wingmann",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.wingmann.app",
    customUrl: "",
  },

  /**
   * Authoritative Color Tokens
   */
  colors: {
    plumDeep: "#552C61", // Primary brand purple
    plumMid: "#7B4F87",  // Secondary purple
    accentRed: "#CC0000",// Accent red for pivotal moments
    cream: "#F7F2ED",    // Warm cream background
    creamSoft: "#FFF8FB",// Softest blush white
    charcoal: "#171318", // Deep charcoal dark neutral
    ink: "#2B2B2B",      // High contrast text on light bg
    nightDeep: "#120914",// Atmospheric dark sections
  },

  /**
   * Cities for initial launch
   */
  cities: ["Bengaluru", "Hyderabad", "Mumbai", "Delhi NCR", "Pune"],

  /**
   * Verified Steps in Experience
   */
  steps: [
    {
      num: "01",
      title: "Tell Us Your Story",
      sub: "Not to impress. To be understood.",
      desc: "Share what actually shapes your days, what matters to your future, and what kind of partner fits into your life.",
    },
    {
      num: "02",
      title: "Meet Your Wingmate",
      sub: "Before introductions, we get to know you.",
      desc: "A dedicated human conversation with someone who listens carefully to your intentions and values.",
    },
    {
      num: "03",
      title: "Get Accepted",
      sub: "We are super selective. Intentionally.",
      desc: "Every member is verified for genuine relationship intent, emotional maturity, and mutual respect.",
    },
    {
      num: "04",
      title: "Meet Your Introductions",
      sub: "See if the conversation feels as good as the introduction.",
      desc: "Receive single, deliberate introductions instead of hundreds of noisy algorithmic profiles.",
    },
    {
      num: "05",
      title: "Go On A Real Date",
      sub: "That was always the point.",
      desc: "Move from a curated introduction to a thoughtful first call, and then to a real table in a real café.",
    },
  ],

  /**
   * Demo Stories
   */
  stories: [
    {
      id: "arjun-priya",
      names: "Arjun & Priya",
      city: "Bengaluru",
      date: "Introduced Autumn 2025",
      quote:
        "Out of dozens of superficial conversations on regular apps, this was the first time someone had actually listened to what we were both seeking.",
      story:
        "We met at a quiet bookstore café on Church Street after our Wingmate suggested we shared the same rhythm of life. No games, no guessing games about commitment. Just two people sitting down with total clarity.",
      image: "/images/user-sofa-cozy.jpg",
      tag: "Shared Life Vision",
    },
    {
      id: "rohit-ananya",
      names: "Rohit & Ananya",
      city: "Hyderabad",
      date: "Introduced Winter 2025",
      quote:
        "The 15-minute phone call before the date felt completely natural because we already knew we were on the exact same page.",
      story:
        "We both wanted a serious relationship without the corporate posturing. Our Wingmate's note pointed out our shared love for early morning runs and long Sunday cookouts. It turned out to be completely true.",
      image: "/images/user-twilight-walk.jpg",
      tag: "Intentional Courtship",
    },
    {
      id: "kabir-meera",
      names: "Kabir & Meera",
      city: "Bengaluru",
      date: "Introduced Spring 2026",
      quote:
        "Knowing that every person on Wingmann had spoken to a real human eliminated all the anxiety and second-guessing.",
      story:
        "Within twenty minutes of our first coffee at Indiranagar, we realized we were speaking to someone who was genuinely ready for partnership, not just killing boredom on a Tuesday evening.",
      image: "/images/user-sunset-ridge.jpg",
      tag: "Emotional Maturity",
    },
  ],

  /**
   * FAQ entries
   */
  faqs: [
    {
      q: "How is Wingmann different from traditional dating apps?",
      a: "Traditional dating apps rely on dopamine loops, endless swiping, and retaining you on the screen. Wingmann relies on human Wingmates who take time to understand your values and personally curate single introductions designed to lead to real-life meetings.",
    },
    {
      q: "What exactly is a Wingmate?",
      a: "Your Wingmate is an emotionally intelligent human guide who speaks with you during onboarding. They understand who you are, what kind of relationship you're building, and carefully curate introductions with people seeking the same depth.",
    },
    {
      q: "Why do you require a conversational phone call before the date?",
      a: "Endless text messaging often builds false illusions or leads to ghosting. A brief, audio-first conversation allows both people to experience vocal warmth, energy, and comfort before committing to a real date.",
    },
    {
      q: "Which cities is Wingmann active in?",
      a: "We are currently active with curated communities in Bengaluru and Hyderabad, with private waitlist cohorts opening soon in Mumbai, Delhi NCR, and Pune.",
    },
    {
      q: "How does Wingmann protect member privacy and safety?",
      a: "All members undergo personal verification with a Wingmate before entering the community. Profiles are never made public in an open swipe pool. Introductions are shared exclusively one-to-one.",
    },
  ],

  links: {
    instagram: "https://instagram.com/wingmann.co",
    linkedin: "https://linkedin.com/company/wingmann",
    twitter: "https://twitter.com/wingmann_co",
    contactEmail: "concierge@wingmann.co",
    iosApp: "https://apps.apple.com/app/wingmann",
    androidApp: "https://play.google.com/store/apps/details?id=co.wingmann.app",
  },
};

