import fs from 'fs';
import path from 'path';

async function verifyWebsite() {
  console.log('--- Verifying Wingmann Editorial Website Rebuild ---');

  // 1. Fetch homepage
  const res = await fetch('http://localhost:3000');
  if (!res.ok) {
    throw new Error(`Failed to load homepage: HTTP ${res.status}`);
  }
  const html = await res.text();

  // 2. Check 7-chapter editorial storytelling requirements
  const keyRequirements = [
    { label: 'Brand Name', text: 'WINGMANN' },
    { label: 'Brand Tagline', text: 'Date With Intent' },
    { label: 'Hero Headline', text: 'Find someone who is looking for the' },
    { label: 'Hero Accent', text: 'same thing.' },
    { label: 'Hero Supporting Copy', text: 'Meeting someone is easy. But finding someone who wants the same thing isn’t.' },
    { label: 'Hero CTA', text: 'Find here' },
    { label: 'Chapter 02 The Unspoken', text: 'We spend weeks getting to know someone. Before asking the one question that changes everything.' },
    { label: 'Chapter 02 Typographic Monument', text: 'WHAT ARE YOU ACTUALLY LOOKING FOR?' },
    { label: 'Chapter 02 Risk', text: 'It’s a risk.' },
    { label: 'Chapter 03 Prelude', text: 'Because nobody falls for someone all at once.' },
    { label: 'Chapter 03 Quietly', text: 'It happens quietly.' },
    { label: 'Chapter 03 Moment 1', text: 'One conversation.' },
    { label: 'Chapter 03 Moment 2', text: 'One coffee.' },
    { label: 'Chapter 03 Moment 3', text: 'One phone call.' },
    { label: 'Chapter 03 Moment 4', text: 'One good morning text.' },
    { label: 'Chapter 03 Moment 5', text: 'One plan for next weekend.' },
    { label: 'Chapter 03 Moment 6', text: 'One moment where they start feeling familiar.' },
    { label: 'Chapter 03 Imagining Future', text: 'you&#x27;ve been imagining a future...' },
    { label: 'Chapter 03 Without Knowing', text: 'without knowing if they were imagining one too.' },
    { label: 'Chapter 04 The Problem', text: 'The problem was never' },
    { label: 'Chapter 04 Different Intentions', text: 'different intentions.' },
    { label: 'Chapter 04 People Allowed', text: 'People are allowed to want different things.' },
    { label: 'Chapter 04 Nobody Asks', text: 'It happens because nobody asks.' },
    { label: 'Chapter 04 After Started', text: 'Only after something has already started.' },
    { label: 'Chapter 05 So We Built', text: 'So we built' },
    { label: 'Chapter 05 Wingmann Reveal', text: 'Wingmann.' },
    { label: 'Chapter 05 Understand & Verify', text: 'we take the time to understand and verify what you&#x27;re genuinely looking for.' },
    { label: 'Chapter 05 Not More Options', text: 'Not more options. Just the right ones.' },
    { label: 'Chapter 05 Real Life Meeting', text: 'meet in real life, not just match online.' },
    { label: 'Chapter 06 Relationship Starts', text: 'Every relationship starts somewhere.' },
    { label: 'Chapter 06 Step 01', text: 'Tell us about yourself' },
    { label: 'Chapter 06 Step 02', text: 'Speak to a wingmate' },
    { label: 'Chapter 06 Step 03', text: 'Get accepted' },
    { label: 'Chapter 06 Step 04', text: 'Connect with each other' },
    { label: 'Chapter 06 Step 05', text: 'Meet in real life' },
    { label: 'Chapter 07 Headline', text: 'The world moves faster.' },
    { label: 'Chapter 07 Rest is Your Story', text: 'The rest is your story.' },
    { label: 'Chapter 07 Final CTA', text: 'Find someone' },
    { label: 'Footer Brand', text: 'WINGMANN' },
    { label: 'Footer Tagline', text: 'Date with Intent' },
    { label: 'Cookie Settings', text: 'Cookie Settings' },
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

  // 3. Verify user authentic image assets delivery
  const imageNames = [
    'user-hero-terrace.jpg',
    'user-candlelight-date.jpg',
    'user-hands-coffee.jpg',
    'user-phone-morning.jpg',
    'user-empty-table.jpg',
    'user-journal-cafe.jpg',
    'user-verified-screen.jpg',
    'user-reminder-lockscreen.jpg',
    'user-sofa-cozy.jpg',
    'user-twilight-walk.jpg',
    'user-sunset-ridge.jpg',
    'user-videocall.jpg',
  ];

  console.log('\n--- Verifying Editorial Image Assets Delivery ---');
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
    console.log('\n>>> ALL 7-CHAPTER EDITORIAL PRODUCTION VERIFICATIONS PASSED 100%! <<<');
  } else {
    console.log('\n>>> Verification finished with notes. <<<');
  }
}

verifyWebsite();
