if (new URLSearchParams(window.location.search).get('admin') === 'true') {
  document.getElementById('adm-btn').style.display = 'flex';
}
/* ════════════════════════════════
   PERFORMANCE: wait for GSAP
════════════════════════════════ */
let gsapReady = false;
function withGsap(fn) {
  if (typeof gsap !== 'undefined') { gsapReady = true; fn(); }
  else { setTimeout(() => withGsap(fn), 80); }
}

/* ════════════════════════════════
   DATA STORE
════════════════════════════════ */
let D = {
  experience: [
    { year: '2025', role: 'Jr. Content Executive & Manager', company: 'GenSxty Tribe Pvt. Ltd.' },
    { year: '2024', role: 'Content Researcher & Developer', company: 'GenSxty Tribe Pvt. Ltd.' },
    { year: '2023', role: "Founder's Office & Copywriter", company: 'Ep.Log Media · Internship' },
  ],
  skills: [
    { cat: 'Core Craft', items: 'Content Strategy\nBrand Copywriting\nScriptwriting\nCampaign Concepting' },
    { cat: 'Platforms', items: 'YouTube\nInstagram\nLinkedIn\nShort-Form Video' },
    { cat: 'Analytics & SEO', items: 'YouTube Studio\nGoogle Analytics\nSEMrush · Ahrefs' },
    { cat: 'Tools & AI', items: 'Canva · Premiere Pro\nChatGPT · Gemini\nAdobe Suite' },
    { cat: 'Building Expertise', items: 'Brand Architecture · Paid Ad Strategy · Audience Segmentation · Performance Content', wide: true },
  ],
  cases: [
    {
      num: '01', title: 'YouTube Channel Growth System', stat: '300+', sl: 'Subscribers',
      p1l: '🔥 RESULT', p1: '<strong>Took a dead YouTube channel from zero to 300+ subscribers and 1,000+ watch hours in 2.5 months.</strong>',
      p2l: '🧠 CONTEXT', p2: 'The channel had no subscribers, no watch time, and no rhythm. The brief was simple: hit YouTube Partner thresholds fast, using organic growth only.',
      p3l: '⚙️ ACTION', p3: 'Audited every piece of existing content and killed what wasn\'t working. Built a 3-tier keyword system (discovery, mid-tail, long-tail), rewrote every hook for the first 30 seconds, and ran weekly thumbnail A/B tests until CTR consistently climbed.',
      p4l: '📈 IMPACT', p4: 'Hit both Partner thresholds in 10 weeks. More importantly, left behind a repeatable publishing system — not just a number.',
      link: '#'
    },
    {
      num: '02', title: 'Multi-Platform Brand Scale', stat: '4L+', sl: 'Views',
      p1l: '🔥 RESULT', p1: '<strong>400,000+ organic views across Instagram and YouTube by treating each platform as its own animal.</strong>',
      p2l: '🧠 CONTEXT', p2: 'Same brand, radically different algorithms. What goes viral on YouTube dies on Instagram. Needed a unified message that didn\'t feel copy-pasted.',
      p3l: '⚙️ ACTION', p3: 'Built platform-native strategies from scratch: Reels engineered for Explore (problem-first hooks), Carousels designed for saves (education-dense), and a publishing cadence that never missed a window.',
      p4l: '📈 IMPACT', p4: '4 Lakh+ views, zero paid promotion. Every view came from audience research and creative decisions — not luck.',
      link: '#'
    },
    {
      num: '03', title: 'Shaya: The Urban Rani Series', stat: '3-Arc', sl: 'Narrative',
      p1l: '🔥 RESULT', p1: '<strong>Turned Shaya\'s "inherited beauty" narrative into something modern women actually want to wear.</strong>',
      p2l: '🧠 CONTEXT', p2: 'Jewellery brands love the "queen" trope — passive, delicate, inherited. Shaya needed the opposite: urban grit, brutalist texture, women building their own legacy.',
      p3l: '⚙️ ACTION', p3: 'Created the "Urban Rani Series" — three real women (an architect, a drummer, a wrestler) as the campaign faces. Designed a "Glitch in Time" visual language and wrote the manifesto: <em>Legacy? It\'s not history. It\'s herstory. Now.</em>',
      p4l: '📈 IMPACT', p4: 'Broke the "delicate jewellery" mould. Built an emotional connection with younger, independent women who don\'t wait to be given things.',
      link: '#',
      images: ['assets/cases/shaya/image10.png', 'assets/cases/shaya/image5.png', 'assets/cases/shaya/image9.png', 'assets/cases/shaya/image12.jpg']
    },
    {
      num: '04', title: 'Eze Perfumes Social Growth Engine', stat: '100K+', sl: 'Tribe Goal',
      p1l: '🔥 RESULT', p1: '<strong>Designed the entire social playbook for a vegan fragrance brand entering a market that doesn\'t believe in \'affordable luxury.\'</strong>',
      p2l: '🧠 CONTEXT', p2: 'Eze makes cruelty-free EDPs built for Indian heat. The problem? Indians think body spray = ₹200 and perfume = ₹5,000. There\'s no middle ground. Eze needed to create one.',
      p3l: '⚙️ ACTION', p3: 'Built a 5-post-a-week content engine where every piece was designed to start a real conversation — not just get a like. Banned AI imagery entirely. Leaned into sarcastic, opinionated storytelling and an engagement-first distribution loop.',
      p4l: '📈 IMPACT', p4: 'Delivered a 90-day roadmap that ties every social metric directly to D2C sales. The goal: build an uncopyable community of 100K+ people who actually care.',
      link: '#',
      images: ['assets/cases/eze/01-2.png', 'assets/cases/eze/03-1.png', 'assets/cases/eze/01-6.png', 'assets/cases/eze/03-6.png']
    },
    {
      num: '05', title: 'Slicktek: Hardware-to-SaaS Ecosystem', stat: '20%+', sl: 'AOV Lift',
      p1l: '🔥 RESULT', p1: '<strong>Turned a cool D2C accessory brand into a sticky digital ecosystem — where every card owner becomes a software subscriber.</strong>',
      p2l: '🧠 CONTEXT', p2: 'Slicktek makes smart NFC business cards. The hardware is beautiful, but the real money is in the app subscription. Problem: nobody buys a card thinking about software.',
      p3l: '⚙️ ACTION', p3: 'Created three layers of content: beautiful desk-setup aesthetics to hook scrollers, LinkedIn plays to find B2B leads, and smart product bundles to close the deal. Established the brand tone as "Steve Jobs of the coffee shop" — sophisticated, minimal, never try-hard.',
      p4l: '📈 IMPACT', p4: 'Designed a roadmap projecting 20%+ AOV lifts through threshold freebies and cart optimizations. Every physical product becomes an on-ramp to recurring digital revenue.',
      link: '#',
      images: ['assets/cases/slicktek/image13.png', 'assets/cases/slicktek/image5.png', 'assets/cases/slicktek/image31.png', 'assets/cases/slicktek/image26.png']
    },
    {
      num: '06', title: 'SEO & AEO Automation Agent', stat: 'Backend', sl: 'Automation',
      p1l: '🔥 RESULT', p1: '<strong>Built and deployed a custom Node.js automation agent that optimizes raw copy for both traditional search (Google) and Answer Engines (ChatGPT, Perplexity).</strong>',
      p2l: '🧠 CONTEXT', p2: 'Search behavior is evolving. Ranking on Google isn’t enough anymore; brands need to be the definitive answer outputted by AI models. Doing this manually scales poorly.',
      p3l: '⚙️ ACTION', p3: 'Engineered an automated pipeline that structures, metadata-tags, and enriches content to satisfy both Google’s EEAT guidelines and LLM retrieval logic simultaneously, ensuring wide API compatibility without exposing sensitive environment variables.',
      p4l: '📈 IMPACT', p4: 'Created a scalable, deployable system that future-proofs content against the AI search transition—turning hours of manual structuring into seconds of automated execution.',
      link: 'https://github.com/krrishp447-hub/Automation'
    },
    {
      num: '07', title: 'Rekindle for Men Landing Page', stat: 'D2C', sl: 'Conversion',
      p1l: '🔥 RESULT', p1: '<strong>Built a high-converting, premium D2C landing page for a men\'s health brand, focusing on education and trust in a sensitive niche.</strong>',
      p2l: '🧠 CONTEXT', p2: 'Men\'s health supplements often suffer from "aggressive" or "shady" branding. Rekindle needed a science-first, approachable aesthetic that spoke to long-term wellness rather than quick fixes.',
      p3l: '⚙️ ACTION', p3: 'Designed a minimal, typography-focused UI using Tailwind CSS and Lucide icons. Engineered smooth scroll reveals and interactive components to break down complex hormonal science into digestible, trust-building sections.',
      p4l: '📈 IMPACT', p4: 'Created a professional, enterprise-grade digital storefront that differentiates the brand from competitors and establishes it as a science-backed authority in the male wellness space.',
      link: 'https://rekindle-for-men-landing.vercel.app'
    }
  ],
  writing: [
    {
      category: 'Finance & Investing',
      items: [
        { img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&q=70', cat: 'Finance', title: 'Confused About How to Start Investing? SIP Might Be the Easiest Entry Point', meta: 'GenSxty Tribe · 2025', snip: 'Most of us in our 20s want to grow our money, but the moment someone says "mutual funds," our brain shuts down. Here\'s why SIPs change that — completely.', link: 'Content/Brand Strategy/Blogs/Finance/Confused About How to Start Investing_.docx' },
        { img: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=600&q=70', cat: 'Finance', title: 'What Is SWP in Mutual Funds? Features, Benefits & The India Growth Story', meta: 'GenSxty Tribe · 2025', snip: 'India is a hungry society — 4–6% inflation is reality. An SWP is the smartest way to extract a regular salary from your investments while staying invested in India\'s growth.', link: 'Content/Brand Strategy/Blogs/Finance/What Is SWP in Mutual Funds_ Features, Benefits & The India Growth Story.docx' },
        { img: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=600&q=70', cat: 'Finance', title: '9 Best Retirement Planning Tools in India (2025)', meta: 'GenSxty Tribe · 2025', snip: 'The biggest risk retirees face today isn\'t market volatility — it\'s longevity risk. A breakdown of SCSS, NPS, SWP, FDs, and six more tools to build a fortress around your future.', link: 'Content/Brand Strategy/Blogs/Finance/9 Best Retirement Planning Tools in India (2025).docx' },
        { img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=70', cat: 'Finance', title: 'Union Budget 2026–27 Explained: What It Actually Means for the Aam Indian Citizen', meta: 'GenSxty Tribe · 2026', snip: 'No buzzwords, no memes. Plain language breakdown of what Budget 2026–27 means for your salary, your taxes, and your daily life.', link: 'Content/Brand Strategy/Blogs/Finance/Union Budget 2026-27 Explained_ What It Actually Means for the Aam Indian Citizen.docx' }
      ]
    },
    {
      category: 'Media & Tech',
      items: [
        { img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=600&q=70', cat: 'Tech', title: 'The AI Boom Explained: How Generative AI Is Transforming Everyday Life in 2025', meta: 'GenSxty Tribe · 2025', snip: 'From $71B to $890B — a data-backed guide to how AI is reshaping healthcare, work, and creativity. And what it actually means for you.', link: 'Content/Brand Strategy/Blogs/Media/The AI Boom Explained.docx' },
        { img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=70', cat: 'Media', title: 'Cracking the Creator Economy in 2025: Is It Too Late to Start?', meta: 'GenSxty Tribe · 2025', snip: 'The era of blowing up just by showing up is over. But the creator economy has never been worth more. The playbook has been completely rewritten — here\'s what it looks like now.', link: 'Content/Brand Strategy/Blogs/Media/Cracking the Creator Economy in 2025_ Is It Too Late to Start_ (Honest Answer).docx' },
        { img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=600&q=70', cat: 'Media', title: 'Doomscrolling, Digital Exhaustion & Gen Z Mental Health: The Social Media Trap', meta: 'GenSxty Tribe · 2026', snip: '94% of Gen Z report monthly mental health struggles. Social media is at the center. Here\'s the neuroscience behind doomscrolling — and how to actually break free.', link: 'Content/Brand Strategy/Blogs/Media/Doomscrolling, Digital Exhaustion & Gen Z Mental Health_ The Social Media Trap Explained (2026).docx' },
        { img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=600&q=70', cat: 'Tech', title: 'Apple iPhone Fold vs Samsung Galaxy Z Fold 7: The 2026 Foldable Phone War', meta: 'GenSxty Tribe · 2026', snip: 'Apple enters the foldable race in September 2026. A spec-by-spec breakdown of the device that could define what the mainstream smartphone looks like for the next decade.', link: 'Content/Brand Strategy/Blogs/Media/Apple vs. Samsung The War of Foldable Phones Intensifies.docx' }
      ]
    },
    {
      category: 'Health & Wellness',
      items: [
        { img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=70', cat: 'Health', title: 'Relieve Shoulder Tension Fast: 4 Gentle Yoga Stretches for Seniors (In Bed)', meta: 'GenSxty Tribe · Dr. Anjul Jain · 2025', snip: 'A 6-minute seated routine designed specifically for seniors — no yoga mat, no flexible joints required. Targets frozen shoulder and trapezius tightness that builds up with age.', link: 'Content/Brand Strategy/Blogs/Health/Relieve Shoulder Tension Fast_ 4 Gentle, Seated Yoga Stretches for Seniors (Do it in Bed!).docx' },
        { img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=70', cat: 'Strategy', title: 'AI in Advertising & Content: 2025 Strategy Guide', meta: 'GenSxty Tribe · 2025', snip: '83% higher engagement. 37% lower cost-per-acquisition. 45% productivity gains. The numbers behind AI-driven content strategy — and what it means for every brand\'s content roadmap.', link: 'Content/Brand Strategy/Blogs/Media/AI_s Impact on Advertising and Content.docx' }
      ]
    },
    {
      category: 'Topical & Social Coverage',
      items: [
        { img: 'https://images.unsplash.com/photo-1542152331-01f148417937?auto=format&fit=crop&w=600&q=70', cat: 'Social', title: 'India\'s Republic Day Parade: Brands That Stood Out', meta: 'GenSxty Tribe', snip: 'An analysis of how brands leveraged Republic Day narratives without falling into the sea of generic gratitude posts.', link: 'Content/Brand Strategy/Blogs/Topicals/India_s Republic Day Parade Blog.docx' },
        { img: 'https://images.unsplash.com/photo-1498677231914-50e50b86a0b1?auto=format&fit=crop&w=600&q=70', cat: 'Topical', title: 'Self-Injury Awareness Day: How Brands Should Speak', meta: 'GenSxty Tribe', snip: 'Walking the tightrope between authenticity and tokenism during sensitive awareness days.', link: 'Content/Brand Strategy/Blogs/Topicals/Self injury awareness day - ARTICLE.docx' }
      ]
    }
  ]
};
try { 
  const s = localStorage.getItem('kp_d_v6'); 
  if (s) { 
    const parsed = JSON.parse(s);
    D.experience = parsed.experience || D.experience;
    D.skills = parsed.skills || D.skills;
    D.cases = parsed.cases || D.cases;
    // writing is deliberately preserved from hard-coded D since the admin panel does not manage it!
  } 
} catch (e) { }

/* ════════════════════════════════
   RENDER
════════════════════════════════ */
function renderAll() { 
  renderTimeline(); renderSkills(); renderCases(); renderWriting(); 
  if (typeof rvObs !== 'undefined') {
    document.querySelectorAll('[data-rv]').forEach(el => rvObs.observe(el));
  }
}

function renderTimeline() {
  document.getElementById('story-timeline').innerHTML =
    '<div class="pb-tl-wrap">' + D.experience.map(e => `<div class="pb-tl"><div class="pb-tl-yr">${e.year}</div><div class="pb-tl-b"><div class="pb-tl-role">${e.role}</div><div class="pb-tl-co">${e.company}</div></div></div>`).join('') + '</div>';
}
function renderSkills() {
  document.getElementById('story-skills').innerHTML = D.skills.map(s => `
    <div class="pb-skill"${s.wide ? ' style="grid-column:1/-1"' : ''}>
      <div class="pb-skill-cat">${s.cat}</div>
      <div class="pb-skill-items"${s.wide ? ' style="font-size:.68rem"' : ''}>${s.items.split('\n').join('<br>')}</div>
    </div>`).join('');
}
function renderCases() {
  document.getElementById('work-cases').innerHTML = D.cases.map((c, i) => `
    <div class="pb-case" id="wc${i}">
      <div class="pb-case-h" onclick="toggleCase('wc${i}')">
        <span class="pb-case-num">${c.num}</span>
        <span class="pb-case-title">${c.title}</span>
        <div class="pb-case-stat"><div class="pb-case-sv">${c.stat}</div><div class="pb-case-sl">${c.sl}</div></div>
        <div class="pb-case-tog">+</div>
      </div>
      <div class="pb-case-body">
        <div class="pb-case-inner">
          <div>
            <div class="pb-cl">${c.p1l}</div><p class="pb-ct">${c.p1}</p>
            <div class="pb-cl" style="margin-top:1.5rem">${c.p2l}</div><p class="pb-ct">${c.p2}</p>
          </div>
          <div>
            <div class="pb-cl">${c.p3l}</div><p class="pb-ct">${c.p3}</p>
            <div class="pb-cl" style="margin-top:1.5rem">${c.p4l}</div><p class="pb-ct">${c.p4}</p>
            ${c.link && c.link !== '#' ? `<div class="case-cta-wrap"><a href="${c.link}" class="case-cta">View Full Case Study →</a></div>` : ''}
          </div>
        </div>
        ${c.images ? `
          <div class="pb-case-gallery">
            ${c.images.map(img => `<div class="pb-case-gal-item"><img src="${img}" alt="${c.title} insight" loading="lazy"></div>`).join('')}
          </div>
        ` : ''}
      </div>
    </div>`).join('');
}
function renderWriting() {
  document.getElementById('writing-content').innerHTML = D.writing.map((grp, i) => `
    <div data-rv style="${i === D.writing.length - 1 ? '' : 'margin-bottom:2rem'}">
      <div class="pb-tag" style="margin-bottom:1rem">${grp.category}</div>
      <div class="writing-grid">
        ${grp.items.map(item => `
          <div class="writing-card">
            <div class="writing-card-thumb">
              <img src="${item.img}" alt="${item.cat}" loading="lazy">
              <div class="writing-cat">${item.cat}</div>
            </div>
            <div class="writing-card-body">
              <div class="writing-card-title">${item.title}</div>
              <div class="writing-card-meta">${item.meta}</div>
              <div class="writing-card-snip">${item.snip}</div>
              ${item.link ? `<a href="${item.link}" target="_blank" rel="noopener" class="writing-card-cta">Read Article →</a>` : '<span class="writing-card-cta">Read more →</span>'}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
}

/* ════════════════════════════════
   SECTIONS (6 now: + Writing)
════════════════════════════════ */
const SECS = [
  { id: 'panel-story', n: 'STORY', lcd: 'STORY — ABOUT ME', img: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=280&q=65', tag: 'About', sub: 'Strategy-first. Story-obsessed.' },
  { id: 'panel-work', n: 'WORK', lcd: 'WORK — CASE STUDIES', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=280&q=65', tag: 'Work', sub: 'Work that had stakes.' },
  { id: 'panel-writing', n: 'WRITING', lcd: 'WRITING — ARTICLES', img: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=280&q=65', tag: 'Writing', sub: 'Words that work harder.' },
  { id: 'panel-projects', n: 'SAMPLES', lcd: 'SAMPLES — FRAMEWORKS', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=280&q=65', tag: 'Frameworks', sub: 'The work behind the work.' },
  { id: 'panel-video', n: 'VIDEO', lcd: 'VIDEO — SHOWREEL', img: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&w=280&q=65', tag: 'Directing', sub: 'Motion & Storytelling.' },
  { id: 'panel-approach', n: 'APPROACH', lcd: 'APPROACH — PHILOSOPHY', img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=280&q=65', tag: 'Philosophy', sub: 'Three principles I never break.' },
  { id: 'panel-contact', n: 'CONTACT', lcd: 'CONTACT — LETS TALK', img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=280&q=65', tag: "Let's Talk", sub: 'Mumbai-based. Open to remote.' },
];
let idx = 0, activePanel = null, polOut = false;
let enlargeTimeout = null;

/* ════════════════════════════════
   LOADER
════════════════════════════════ */
(function () {
  const bar = document.getElementById('ldr-bar');
  const txt = document.getElementById('ldr-txt');
  const msgs = ['Developing film…', 'Calibrating focus…', 'Loading frames…', 'Almost ready…'];
  let pct = 0, mi = 0;
  const iv = setInterval(() => {
    pct += Math.random() * 15 + 5; if (pct > 100) pct = 100;
    bar.style.width = pct + '%';
    txt.innerHTML = msgs[Math.min(mi, msgs.length - 1)] + ' <span>' + Math.round(pct) + '%</span>';
    const fi = Math.floor((pct / 100) * 8);
    for (let i = 0; i < fi; i++) document.getElementById('lf' + i)?.classList.add('done');
    if (mi < msgs.length - 1 && pct > mi * 25 + 25) mi++;
    if (pct >= 100) {
      clearInterval(iv);
      setTimeout(() => {
        withGsap(() => {
          const vig = document.getElementById('ldr-vig');
          gsap.to(vig, { clipPath: 'circle(0% at 50% 50%)', duration: .88, ease: 'expo.in' });
          gsap.to('#loader', {
            opacity: 0, duration: .48, delay: .52, onComplete: () => {
              document.getElementById('loader').style.display = 'none';
              vig.style.display = 'none';
              showInteractiveLoad();
            }
          });
        });
      }, 360);
    }
  }, 125);
})();

function showInteractiveLoad() {
  const il = document.getElementById('interactive-load');
  if(!il) { startCamera(); return; }
  il.classList.add('show');
  void il.offsetWidth; // force reflow
  il.classList.add('visible');
  
  const can = document.getElementById('il-canister');
  can.onclick = () => {
    try { AmbientSound.start(); } catch(e) {}
    can.classList.add('inserting');
    document.getElementById('il-text').style.opacity = '0';
    if(navigator.vibrate) navigator.vibrate(20);
    setTimeout(() => {
      il.classList.remove('visible');
      setTimeout(() => {
        il.classList.remove('show');
        startCamera();
      }, 400);
    }, 1200);
  };
}

function resizeCamera() {
  const wrap = document.getElementById('cam-scale-wrap');
  if(!wrap) return;
  const wRatio = window.innerWidth / 480;
  const hRatio = window.innerHeight / 440;
  const targetScale = Math.min(wRatio, hRatio) * 0.95; 
  wrap.style.transform = `scale(${Math.min(Math.max(targetScale, 0.6), 2.2)})`;
}
window.addEventListener('resize', resizeCamera, {passive: true});

function startCamera() {
  renderAll();
  buildFilmstrip();
  initAmbient();
  resizeCamera();
  withGsap(() => {
    gsap.registerPlugin(ScrollTrigger);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      gsap.set('#camera', { opacity: 1, scale: 1, y: 0 });
      gsap.set('.cam-filmstrip', { y: 0, opacity: 1 });
      gsap.set('.cam-byline', { opacity: 1 });
      showInstructionToast();
    } else {
      gsap.from('#camera', { z: -100, y: 80, opacity: 0, scale: .8, rotationX: -10, duration: 1.6, ease: 'back.out(1.2)', delay: .05 });
      gsap.from('.cam-filmstrip', { y: 40, opacity: 0, duration: 1.2, ease: 'power3.out', delay: .7 });
      gsap.from('.cam-byline', { opacity: 0, duration: 1, delay: .88, onComplete: showInstructionToast });
      gsap.to('#lens-ring', { rotation: 1.6, duration: 5.5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    }
  });
}

let _toastTo;
function showInstructionToast() {
  const toast = document.getElementById('instruction-toast');
  if(!toast) return;
  toast.classList.add('show');
  _toastTo = setTimeout(dismissToast, 4500);
}
function dismissToast() {
  const toast = document.getElementById('instruction-toast');
  if(toast && toast.classList.contains('show')) toast.classList.remove('show');
}

/* ════════════════════════════════
   FILMSTRIP
════════════════════════════════ */
function buildFilmstrip() {
  const holes = document.getElementById('strip-holes');
  holes.innerHTML = '';
  for (let i = 0; i < 16; i++) { const h = document.createElement('div'); h.className = 'fhole'; holes.appendChild(h) }
  const frames = document.getElementById('strip-frames');
  frames.innerHTML = '';
  SECS.forEach((s, i) => {
    const ft = document.createElement('div');
    ft.className = 'frame-thumb' + (i === 0 ? ' active' : '');
    ft.setAttribute('role', 'button');
    ft.setAttribute('aria-label', `Open ${s.n} section`);
    ft.innerHTML = `<div class="frame-img"><img src="${s.img}" alt="${s.n}" loading="lazy"></div><div class="frame-num">0${i + 1}</div><div class="fdot"></div>`;
    ft.onclick = () => selectSec(i);
    frames.appendChild(ft);
  });
}

/* ════════════════════════════════
   SELECT SECTION
════════════════════════════════ */
function selectSec(i) {
  dismissToast();
  idx = i;
  document.querySelectorAll('.frame-thumb').forEach((t, j) => t.classList.toggle('active', j === i));
  document.getElementById('cam-ctr').textContent = String(i + 1).padStart(2, '0') + '/0' + SECS.length;
  document.getElementById('cam-mode').textContent = SECS[i].n;
  document.getElementById('lcd-sec').textContent = SECS[i].lcd;
  withGsap(() => {
    gsap.to('#cam-dial', { rotation: i * 60, duration: .5, ease: 'back.out(1.4)' });
    gsap.fromTo('#lens-ring', { scale: 1.04 }, { scale: 1, duration: .38, ease: 'expo.out' });
  });
  if (polOut) retractPol();
}


/* ════════════════════════════════
   EVENTS & NAVIGATION
════════════════════════════════ */
let _navLock = 0;
function goPrev(e) {
  if (e) { e.preventDefault(); e.stopPropagation(); }
  if (activePanel) return;
  const now = Date.now();
  if (now - _navLock < 100) return;
  _navLock = now;
  selectSec((idx - 1 + SECS.length) % SECS.length);
}
function goNext(e) {
  if (e) { e.preventDefault(); e.stopPropagation(); }
  if (activePanel) return;
  const now = Date.now();
  if (now - _navLock < 100) return;
  _navLock = now;
  selectSec((idx + 1) % SECS.length);
}
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
btnPrev.addEventListener('click', goPrev);
btnNext.addEventListener('click', goNext);
// Also attach pointerup as a fallback for 3D-transformed elements
btnPrev.addEventListener('pointerup', e => { e.stopPropagation(); goPrev(e); });
btnNext.addEventListener('pointerup', e => { e.stopPropagation(); goNext(e); });
// Touch fallback for mobile
btnPrev.addEventListener('touchend', e => { e.preventDefault(); e.stopPropagation(); goPrev(e); });
btnNext.addEventListener('touchend', e => { e.preventDefault(); e.stopPropagation(); goNext(e); });

let _lCap = 0;
function handleCapture(e) {
  dismissToast();

  const now = Date.now();
  if (now - _lCap < 150) return;
  _lCap = now;
  if (e) {
    if (e.cancelable) e.preventDefault();
    e.stopPropagation();
  }
  if (polOut) { openPanel(e); return; }
  fireShutter();
}

const shutter = document.getElementById('shutter');
shutter.addEventListener('pointerup', handleCapture);
shutter.addEventListener('touchend', handleCapture, { passive: false });
shutter.addEventListener('click', handleCapture);
shutter.addEventListener('keydown', e => {
  if (e.key === ' ' || e.key === 'Enter') handleCapture(e);
});

shutter.addEventListener('mouseenter', () => document.body.classList.add('cur-s'));
shutter.addEventListener('mouseleave', () => document.body.classList.remove('cur-s'));




function fireShutter() {
  const s = SECS[idx];
  /* haptic on supported mobile */
  if (navigator.vibrate) navigator.vibrate(12);
  withGsap(() => {
    gsap.timeline()
      .to('#lens-ring', { scale: .83, duration: .07, ease: 'power4.in' })
      .to('#lens-ring', { scale: 1, duration: .36, ease: 'back.out(2)' });
    gsap.timeline()
      .to('#camera', { y: -3, duration: .04 })
      .to('#camera', { y: 0, duration: .26, ease: 'elastic.out(1,.38)' });
    gsap.fromTo('#flash', { opacity: .88 }, { opacity: 0, duration: .52, ease: 'expo.out' });
  });
  const slot = document.getElementById('print-slot');
  slot.classList.add('lit');
  setTimeout(() => slot.classList.remove('lit'), 950);
  const img = document.getElementById('pol-img');
  img.src = '';
  img.alt = 'Polaroid preview of ' + s.n + ' section';
  setTimeout(() => { img.src = s.img }, 25);
  document.getElementById('pol-tag').textContent = s.tag;
  document.getElementById('pol-name').textContent = s.sub;
  const pol = document.getElementById('polaroid');
  pol.classList.remove('out', 'developing', 'enlarged');
  void pol.offsetWidth;
  pol.classList.add('out');
  setTimeout(() => {
    pol.classList.add('developing');
    polOut = true;
    // After developing animation, enlarge the photo slightly
    clearTimeout(enlargeTimeout);
    enlargeTimeout = setTimeout(() => { pol.classList.add('enlarged'); }, 1600);
  }, 85);
  const hint = document.getElementById('tap-hint');
  hint.classList.add('show');
  setTimeout(() => hint.classList.remove('show'), 3400);
}

function retractPol() {
  clearTimeout(enlargeTimeout);
  withGsap(() => {
    const pol = document.getElementById('polaroid');
    pol.classList.remove('enlarged');
    gsap.to(pol, {
      y: '115%', duration: .36, ease: 'expo.in', onComplete: () => {
        pol.classList.remove('out', 'developing', 'enlarged'); pol.style.transform = ''; polOut = false;
      }
    });
  });
}

/* ════════════════════════════════
   OPEN / CLOSE PANEL (iris reveal)
════════════════════════════════ */
function openPanel(e) {
  if (!polOut) return;
  const s = SECS[idx];
  const ox = e?.clientX ? (e.clientX / innerWidth * 100) + '%' : '50%';
  const oy = e?.clientY ? (e.clientY / innerHeight * 100) + '%' : '50%';
  withGsap(() => gsap.fromTo('#flash', { opacity: .62 }, { opacity: 0, duration: .42, ease: 'expo.out' }));
  retractPol();
  document.getElementById('tap-hint').classList.remove('show');
  setTimeout(() => {
    const panel = document.getElementById(s.id);
    panel.scrollTop = 0;
    panel.style.setProperty('--ox', ox); panel.style.setProperty('--oy', oy);
    document.getElementById('cam-screen').classList.add('exit');
    document.getElementById('cam-screen').inert = true;
    document.getElementById('pol-tray').inert = true;
    document.body.style.overflow = 'hidden'; // prevent double scrollbar friction on desktop
    panel.classList.add('active');
    document.getElementById('panel-close').classList.add('on');
    activePanel = panel;
  }, 180);
}

function closePanel() {
  if (!activePanel) return;
  const p = activePanel;
  const inner = p.querySelector('.panel-inner');
  inner.style.transition = 'clip-path .56s cubic-bezier(.7,0,.84,0)';
  inner.style.clipPath = `circle(0% at ${p.style.getPropertyValue('--ox') || '50%'} ${p.style.getPropertyValue('--oy') || '50%'})`;
  setTimeout(() => {
    p.classList.remove('active');
    inner.style.transition = ''; inner.style.clipPath = ''; p.scrollTop = 0;
  }, 580);
  document.getElementById('cam-screen').inert = false;
  document.getElementById('pol-tray').inert = false;
  document.getElementById('cam-screen').classList.remove('exit');
  document.getElementById('panel-close').classList.remove('on');
  document.body.style.overflow = '';
  activePanel = null;
}

/* ════════════════════════════════
   KEYBOARD NAV (accessibility)
════════════════════════════════ */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { activePanel ? closePanel() : null; return }
  if (activePanel) return;
  if (e.key === 'ArrowLeft') selectSec((idx - 1 + SECS.length) % SECS.length);
  if (e.key === 'ArrowRight') selectSec((idx + 1) % SECS.length);
  if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); document.getElementById('shutter').click() }
});

/* ════════════════════════════════
   ACCORDIONS
════════════════════════════════ */
function toggleCase(id) {
  const el = document.getElementById(id), was = el.classList.contains('open');
  document.querySelectorAll('.pb-case.open').forEach(c => c.classList.remove('open'));
  if (!was) el.classList.add('open');
}
function toggleSample(id) { document.getElementById(id).classList.toggle('open') }

/* ════════════════════════════════
   SCROLL REVEAL (IntersectionObserver — no GSAP needed)
════════════════════════════════ */
const rvObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); rvObs.unobserve(e.target) } });
}, { threshold: .07, rootMargin: '0px 0px -3% 0px' });
document.querySelectorAll('[data-rv]').forEach(el => rvObs.observe(el));

/* ════════════════════════════════
   CURSOR (desktop only, pointer:fine)
════════════════════════════════ */
if (window.matchMedia('(pointer:fine)').matches) {
  const wrap = document.getElementById('cur-wrap');
  let cx = 0, cy = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => {
    cx = e.clientX; cy = e.clientY;
    window._mx = cx; window._my = cy;
    if (typeof gsap !== 'undefined' && !activePanel) {
      const tx = (cx / innerWidth - 0.5) * 28;
      const ty = (cy / innerHeight - 0.5) * -28;
      gsap.to('#camera', { rotationY: tx, rotationX: ty, transformPerspective: 1200, duration: 1.2, ease: 'power3.out' });
      gsap.to('.cam-filmstrip', { rotationY: tx * 0.5, rotationX: ty * 0.5, transformPerspective: 1200, duration: 1.5, ease: 'power3.out' });
    }
  }, { passive: true });
  (function loop() {
    rx += (cx - rx) * .12; ry += (cy - ry) * .12;
    wrap.style.left = cx + 'px'; wrap.style.top = cy + 'px';
    document.getElementById('cur-ring').style.cssText = `left:${rx - cx}px;top:${ry - cy}px`;
    requestAnimationFrame(loop);
  })();
  /* hover targets */
  document.querySelectorAll('button,a,.frame-thumb,.polaroid,.pb-case-h,.pb-sample-h,.writing-card').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cur-h'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cur-h'));
  });
}

/* ════════════════════════════════
   AMBIENT PARTICLES (canvas / WebGL)
════════════════════════════════ */
function initAmbient() {
  const container = document.getElementById('amb');
  if(!window.THREE) { setTimeout(initAmbient, 100); return; }
  
  const scene = new THREE.Scene();
  const camera = new THREE.Camera();
  camera.position.z = 1;

  const geometry = new THREE.PlaneBufferGeometry(2, 2);

  const uniforms = {
    time: { type: "f", value: 1.0 },
    resolution: { type: "v2", value: new THREE.Vector2() }
  };

  const vertexShader = `void main() { gl_Position = vec4( position, 1.0 ); }`;

  const fragmentShader = `
    precision highp float;
    uniform vec2 resolution;
    uniform float time;
    float random(in float x){ return fract(sin(x)*1e4); }
    float random(vec2 st){ return fract(sin(dot(st.xy,vec2(12.9898,78.233)))*43758.5453123); }
    void main(void) {
      vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
      vec2 vScreenSize = vec2(256.0, 256.0);
      vec2 fMosaicScal = vec2(4.0, 2.0);
      uv.x = floor(uv.x * vScreenSize.x / fMosaicScal.x) / (vScreenSize.x / fMosaicScal.x);
      uv.y = floor(uv.y * vScreenSize.y / fMosaicScal.y) / (vScreenSize.y / fMosaicScal.y);
      float t = time * 0.055 + random(uv.x) * 0.4;
      float lineWidth = 0.0014;
      vec3 color = vec3(0.0);
      for(int j = 0; j < 3; j++){
        for(int i = 0; i < 5; i++){
          color[j] += lineWidth * float(i*i) / abs(fract(t - 0.01*float(j) + float(i)*0.01)*1.0 - length(uv));
        }
      }
      vec3 warm = vec3(0.91, 0.79, 0.29);
      vec3 cool = vec3(0.72, 0.83, 0.29);
      float mixFactor = clamp(color[1] / (color[0] + 0.001), 0.0, 1.0);
      vec3 tint = mix(warm, cool, mixFactor);
      vec3 finalColor = color * tint * 1.15;
      float alpha = clamp(length(finalColor) * 1.4, 0.0, 1.0);
      gl_FragColor = vec4(finalColor, alpha * 0.82);
    }
  `;

  const material = new THREE.ShaderMaterial({
    uniforms, vertexShader, fragmentShader,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  const renderer = new THREE.WebGLRenderer({
    canvas: container, alpha: true, antialias: false, powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  function onWindowResize() {
    const w = window.innerWidth, h = window.innerHeight;
    renderer.setSize(w, h, false); // false = don't set canvas style (CSS inset:0 handles it)
    const pr = renderer.getPixelRatio();
    uniforms.resolution.value.set(w * pr, h * pr);
  }
  onWindowResize();

  let rt;
  window.addEventListener('resize', () => { clearTimeout(rt); rt = setTimeout(onWindowResize, 80); }, { passive: true });

  (function animate() {
    requestAnimationFrame(animate);
    uniforms.time.value += 0.04;
    renderer.render(scene, camera);
  })();
}

/* ════════════════════════════════
   TOUCH SWIPE on filmstrip
════════════════════════════════ */
let tx0 = 0;
const fsEl = document.getElementById('filmstrip');
fsEl.addEventListener('touchstart', e => { tx0 = e.touches[0].clientX }, { passive: true });
fsEl.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - tx0;
  if (Math.abs(dx) > 38) selectSec(dx < 0 ? (idx + 1) % SECS.length : (idx - 1 + SECS.length) % SECS.length);
}, { passive: true });

/* ════════════════════════════════
   ADMIN
════════════════════════════════ */
function toggleAdmin() {
  const ov = document.getElementById('adm-ov'), p = document.getElementById('adm-panel');
  const showing = p.classList.contains('show');
  if (!showing) renderAdmin();
  ov.classList.toggle('show', !showing); p.classList.toggle('show', !showing);
}
function toggleAdmSec(hdr) {
  const b = hdr.nextElementSibling;
  if (b?.classList.contains('adm-sec-body')) b.style.display = b.style.display === 'none' ? '' : 'none';
}
function renderAdmin() { renderAdmExp(); renderAdmWork(); renderAdmSkills() }
function renderAdmExp() {
  document.getElementById('adm-exp').innerHTML = D.experience.map((e, i) => `
    <div class="adm-entry"><div class="adm-entry-lbl">Entry ${i + 1}</div>
      <button class="adm-del" onclick="delExp(${i})">✕</button>
      <div class="adm-r2">
        <div class="adm-fld"><label>Year</label><input value="${e.year}" onchange="D.experience[${i}].year=this.value"></div>
        <div class="adm-fld"><label>Company</label><input value="${e.company}" onchange="D.experience[${i}].company=this.value"></div>
      </div>
      <div class="adm-fld"><label>Role</label><input value="${e.role}" onchange="D.experience[${i}].role=this.value"></div>
    </div>`).join('');
}
function renderAdmWork() {
  document.getElementById('adm-work').innerHTML = D.cases.map((c, i) => `
    <div class="adm-entry"><div class="adm-entry-lbl">Case ${c.num}</div>
      <button class="adm-del" onclick="delWork(${i})">✕</button>
      <div class="adm-r2">
        <div class="adm-fld"><label>Stat</label><input value="${c.stat}" onchange="D.cases[${i}].stat=this.value"></div>
        <div class="adm-fld"><label>Stat Label</label><input value="${c.sl}" onchange="D.cases[${i}].sl=this.value"></div>
      </div>
      <div class="adm-fld"><label>Title</label><input value="${c.title}" onchange="D.cases[${i}].title=this.value"></div>
      <div class="adm-r2">
        <div class="adm-fld"><label>${c.p1l}</label><textarea onchange="D.cases[${i}].p1=this.value">${c.p1.replace(/<[^>]*>/g, '')}</textarea></div>
        <div class="adm-fld"><label>${c.p3l}</label><textarea onchange="D.cases[${i}].p3=this.value">${c.p3.replace(/<[^>]*>/g, '')}</textarea></div>
      </div>
    </div>`).join('');
}
function renderAdmSkills() {
  document.getElementById('adm-skills').innerHTML = D.skills.map((s, i) => `
    <div class="adm-entry"><button class="adm-del" onclick="delSkill(${i})">✕</button>
      <div class="adm-r2">
        <div class="adm-fld"><label>Category</label><input value="${s.cat}" onchange="D.skills[${i}].cat=this.value"></div>
        <div class="adm-fld"><label>Wide span</label><input type="checkbox" ${s.wide ? 'checked' : ''} onchange="D.skills[${i}].wide=this.checked" style="width:auto;margin-top:.5rem"></div>
      </div>
      <div class="adm-fld"><label>Items (one per line)</label><textarea rows="4" onchange="D.skills[${i}].items=this.value">${s.items}</textarea></div>
    </div>`).join('');
}
function addExp() { D.experience.unshift({ year: new Date().getFullYear().toString(), role: 'New Role', company: 'Company' }); renderAdmExp() }
function delExp(i) { D.experience.splice(i, 1); renderAdmExp() }
function addWork() { D.cases.push({ num: String(D.cases.length + 1).padStart(2, '0'), title: 'New Case Study', stat: '—', sl: 'Metric', p1l: 'Challenge', p1: '', p2l: 'Strategy', p2: '', p3l: 'Result', p3: '', p4l: 'Learning', p4: '' }); renderAdmWork() }
function delWork(i) { D.cases.splice(i, 1); renderAdmWork() }
function addSkill() { D.skills.push({ cat: 'New Category', items: 'Skill 1\nSkill 2', wide: false }); renderAdmSkills() }
function delSkill(i) { D.skills.splice(i, 1); renderAdmSkills() }
function saveAll() {
  try { localStorage.setItem('kp_d_v6', JSON.stringify(D)) } catch (e) { }
  renderAll();
  const m = document.getElementById('adm-saved');
  m.classList.add('show'); setTimeout(() => m.classList.remove('show'), 2400);
}

/* ════════════════════════════════
   AMBIENT SOUND (Audio File)
════════════════════════════════ */
const AmbientSound = (() => {
  let audio = null;
  let isPlaying = false;
  let fadeInterval = null;
  const TARGET_VOL = 0.5; // Adjust this 0.0 to 1.0 for desired volume
  const FADE_TIME = 2000; // ms

  function init() {
    if (audio) return;
    audio = new Audio('assets/audio/ambient.mp3');
    audio.loop = true;
    audio.volume = 0;
  }

  function fadeVol(target, duration, callback) {
    if (fadeInterval) clearInterval(fadeInterval);
    const stepTime = 50;
    const steps = duration / stepTime;
    const volStep = (target - audio.volume) / steps;
    
    fadeInterval = setInterval(() => {
      let newVol = audio.volume + volStep;
      if ((volStep > 0 && newVol >= target) || (volStep < 0 && newVol <= target)) {
        audio.volume = Math.max(0, Math.min(1, target));
        clearInterval(fadeInterval);
        if (callback) callback();
      } else {
        audio.volume = Math.max(0, Math.min(1, newVol));
      }
    }, stepTime);
  }

  function start() {
    init();
    if (isPlaying) return;
    
    audio.play().then(() => {
      fadeVol(TARGET_VOL, FADE_TIME);
      isPlaying = true;
    }).catch(e => {
      console.log('Audio autoplay prevented:', e);
    });
  }

  function stop() {
    if (!audio || !isPlaying) return;
    
    fadeVol(0, FADE_TIME, () => {
      audio.pause();
      isPlaying = false;
    });
  }

  return { start, stop, get isPlaying() { return isPlaying; } };
})();
