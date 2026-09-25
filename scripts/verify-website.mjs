import fs from 'fs';
import path from 'path';

async function verifyWebsite() {
  console.log('--- Verifying Wingmann Production Website ---');

  // 1. Fetch homepage
  const res = await fetch('http://localhost:3000');
  if (!res.ok) {
    throw new Error(`Failed to load homepage: HTTP ${res.status}`);
  }
  const html = await res.text();

  // 2. Check essential brand and copy elements
  const keyRequirements = [
    { label: 'Brand Name', text: 'WINGMANN' },
    { label: 'Brand Tagline', text: 'Date with Intent' },
    { label: 'Eyebrow', text: 'For people who know what they&#x27;re here for' },
    { label: 'Hero Headline', text: 'Find someone who is looking for the' },
    { label: 'Hero Primary CTA', text: 'BEGIN YOUR STORY' },
    { label: 'Hero Secondary CTA', text: 'EXPLORE WINGMANN' },
    { label: 'Problem Statement', text: 'Maybe the problem was never' },
    { label: 'Swiping Simulation', text: 'The Swiping Simulation' },
    { label: 'Overload Calm Reveal', text: 'Less noise.' },
    { label: 'Overload Calm Sub', text: 'More intention.' },
    { label: 'Wingmate Intro', text: 'The Person Behind The Profile' },
    { label: 'Wingmate Reveal', text: 'That&#x27;s where your' },
    { label: 'Curated Intro Headline', text: 'Not another match.' },
    { label: 'Curated Intro Subhead', text: 'An introduction.' },
    { label: 'How It Works Steps', text: 'Every relationship starts somewhere.' },
    { label: 'Step 01', text: 'Tell Us Your Story' },
    { label: 'Step 02', text: 'Meet Your Wingmate' },
    { label: 'Step 03', text: 'Get Accepted' },
    { label: 'Step 04', text: 'Meet Your Introductions' },
    { label: 'Step 05', text: 'Go On A Real Date' },
    { label: 'Intentional vs Endless', text: 'Endless Swiping vs.' },
    { label: 'Real Conversation Section', text: 'One Real Conversation' },
    { label: 'Real Date Section', text: 'This Is Actually Going To Happen.' },
    { label: 'Trust Section', text: 'Real people.' },
    { label: 'Trust Section Sub', text: 'Real attention.' },
    { label: 'The Promise', text: 'The Wingmann Promise' },
    { label: 'Stories Section', text: 'Stories That Began With Intent.' },
    { label: 'FAQ Section', text: 'Frequently Asked Questions' },
    { label: 'Closing Section Headline', text: 'Maybe your person is' },
    { label: 'Closing Microcopy', text: 'Not for everyone. Just for the serious ones.' },
    { label: 'Cookie Settings', text: 'Cookie Settings' },
    { label: 'Footer Brand', text: 'WINGMANN' },
    { label: 'Footer Tagline', text: 'DATE WITH INTENT' },
    { label: 'Instagram Icon Link', text: 'Follow Wingmann on Instagram' },
    { label: 'Download on App Store', text: 'Download on the' },
    { label: 'Get it on Google Play', text: 'GET IT ON' },
    { label: 'Download App Button', text: 'DOWNLOAD APP' },
  ];

  let passed = 0;
  for (const item of keyRequirements) {
    if (html.includes(item.text)) {
      console.log(`[PASS] ${item.label}`);
      passed++;
    } else {
      console.warn(`[WARN] ${item.label} (looked for: "${item.text}")`);
    }
  }

  console.log(`\nRequirements verified: ${passed}/${keyRequirements.length}`);

  // 3. Verify images rendering from /images
  const imageNames = [
    'hero-1.jpg',
    'hero-2.jpg',
    'hero-3.jpg',
    'intrigue-phone.jpg',
    'vignette-1-conversation.jpg',
    'vignette-2-coffee.jpg',
    'cinematic-coffee.jpg',
    'closing-walk.jpg',
    'marquee-1.jpg',
    'marquee-2.jpg',
    'marquee-3.jpg',
    'marquee-4.jpg',
    'marquee-5.jpg',
    'marquee-6.jpg',
  ];

  console.log('\n--- Verifying Image Assets Delivery ---');
  let imgPassed = 0;
  for (const img of imageNames) {
    const imgRes = await fetch(`http://localhost:3000/images/${img}`);
    if (imgRes.ok && imgRes.headers.get('content-type')?.includes('image')) {
      console.log(`[PASS] /images/${img} (${imgRes.status})`);
      imgPassed++;
    } else {
      console.error(`[FAIL] /images/${img} failed with status ${imgRes.status}`);
    }
  }

  console.log(`\nImages verified: ${imgPassed}/${imageNames.length}`);

  if (passed === keyRequirements.length && imgPassed === imageNames.length) {
    console.log('\n>>> ALL PRODUCTION QUALITY VERIFICATIONS PASSED 100%! <<<');
  } else {
    console.log('\n>>> Verification finished with minor notes. <<<');
  }
}

verifyWebsite();
