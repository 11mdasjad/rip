import { ServiceItem } from "@/types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "corporate-films",
    number: "01",
    title: "Corporate Films",
    tagline: "Distilling enterprise vision into compelling cinematic narrative.",
    description:
      "Professional corporate storytelling, brand films, product launches, facility walkthroughs and executive leadership videos. We blend cinema-grade visuals with sharp corporate messaging.",
    fullOverview:
      "At RFP Digital Productions, corporate films are treated with the aesthetic gravity of high-end cinema. From global conglomerates to pioneering institutions, we craft visual stories that communicate scale, innovation, and trust. Our teams handle everything from scripting, storyboard development, multi-city filming, drone cinematography, and cleanroom shooting to precision color science and immersive audio design.",
    deliverables: [
      "Brand Anthems & Heritage Films",
      "Executive Keynotes & Leadership Stills",
      "Factory, Lab & Facility Walkthroughs",
      "Investor Pitch & Annual AGM Films"
    ],
    features: [
      "Cinematic 4K/6K Raw capture on Sony Cinema FX line & Arri optics",
      "Dedicated creative director & scriptwriter on every production",
      "Multi-city shoot coordination across industrial & cleanroom zones",
      "Licensed master soundtrack composition & voiceover narration in 12+ languages"
    ],
    techStack: [
      "Sony FX6 / FX3 Cinema Rigs",
      "Zeiss & Master Prime Glass",
      "DaVinci Resolve Studio Color Suite",
      "Sennheiser MKH & Wireless Mic Units",
      "DCI 4K HDR Mastering"
    ],
    stats: [
      { label: "Films Delivered", value: "350+" },
      { label: "Corporate Clients", value: "80+" },
      { label: "Resolution", value: "DCI 4K" }
    ],
    workflow: [
      { step: "01", title: "Strategic Brief", desc: "Understanding corporate values, investor milestones, and viewer psychology." },
      { step: "02", title: "Script & Treatment", desc: "Screenplay drafts, storyboard layouts, and visual mood direction." },
      { step: "03", title: "Principal Photography", desc: "Cinema lighting, multicam setups, and high-fidelity dialogue capture." },
      { step: "04", title: "Post & Delivery", desc: "Master color grading, sound design, and multi-format broadcast delivery." }
    ],
    image: "/medien/landing/corporate-film-production-banner.jpg",
    videoThumbnail: "/medien/landing/corporate-film-production-banner.jpg",
    videoUrl: "https://www.youtube.com/embed/1PeIeMgjyQc?autoplay=1",
    youtubeUrl: "https://youtu.be/1PeIeMgjyQc",
    aspect: "16/9"
  },
  {
    id: "documentary-films",
    number: "02",
    title: "Documentary Films",
    tagline: "Honoring authenticity through patient, resonant observational craft.",
    description:
      "Compelling documentaries capturing human stories, institutional milestones, socio-economic research, and cultural heritage with unflinching authenticity.",
    fullOverview:
      "Real stories have an organic power that cannot be staged. Our documentary division specializes in patient observation, empathetic interview techniques, and sensitive cultural archiving. Whether preserving academic institutions, documenting national research initiatives, or following grassroots change, we bring cinematic dignity to real-life journeys.",
    deliverables: [
      "Institutional Milestone & Golden Jubilee Documentaries",
      "Social Impact & NGO Field Stories",
      "National Archives & Cultural Heritage Preservation",
      "Biographical Chronicles & Retrospectives"
    ],
    features: [
      "Deep anthropological and historical archival research",
      "Unobtrusive, intimate field camera rigs for genuine human moments",
      "Bilingual and vernacular translation, subtitling, and dubbing",
      "Long-term archival storage with metadata tagging in broadcast master formats"
    ],
    techStack: [
      "Lightweight Run-and-Gun Cinema Rigs",
      "Ambisonic 3D Field Audio Recorders",
      "Low-Light High-Dynamic Range Sensors",
      "Archival Film Restoration Workflows"
    ],
    stats: [
      { label: "Documentaries Completed", value: "220+" },
      { label: "States Covered", value: "18+ States" },
      { label: "Format", value: "Master Broadcast 4K" }
    ],
    workflow: [
      { step: "01", title: "Archival Research", desc: "Primary source review, stakeholder interviews, and thematic mapping." },
      { step: "02", title: "Field Immersion", desc: "Observational on-ground filming across urban and rural ecosystems." },
      { step: "03", title: "Narrative Assembly", desc: "Weaving oral histories, emotional arcs, and authentic field soundscapes." },
      { step: "04", title: "Screening Master", desc: "Archival grade color mastering and festival/institution delivery." }
    ],
    image: "/medien/landing/documentary-film-production-banner.jpg",
    videoThumbnail: "/medien/landing/documentary-film-production-banner.jpg",
    videoUrl: "https://www.youtube.com/embed/91kFY2xs7cE?autoplay=1",
    youtubeUrl: "https://youtu.be/91kFY2xs7cE",
    aspect: "16/9"
  },
  {
    id: "social-media-management",
    number: "03",
    title: "Social Media Management",
    tagline: "Architecting cultural relevance and algorithmic momentum across digital spaces.",
    description:
      "Creative content planning, high-cadence viral reels, political campaign shorts, brand narratives, and audience nurturing across Instagram, YouTube, and Meta channels.",
    fullOverview:
      "In modern media, attention is won in the first 2 seconds. RFP Digital's social media arm merges high-production cinema assets with rapid-fire digital native formatting. We build episodic short-form content engines, handle community engagement, and monitor real-time sentiment to ensure your message dominates voter and consumer timelines.",
    deliverables: [
      "High-Cadence Reels & YouTube Shorts Production",
      "Platform Narrative Strategy & Content Calendars",
      "Motion Graphics, Typographic Hooks & Thumbnails",
      "Social Listening & Rapid Response Comment Management"
    ],
    features: [
      "Same-day edit and turnaround for breaking rallies and events",
      "Data-backed algorithmic hook testing and thumbnail optimization",
      "Celebrity and stakeholder influencer collaboration coverage",
      "Cross-channel syndication (Instagram, YouTube, Facebook, X, LinkedIn)"
    ],
    techStack: [
      "Apple Silicon Final Cut & Premiere Pro Suite",
      "After Effects Motion Graphic Templates",
      "Sprout Social & Meta Business Suite",
      "Real-Time Social Listening & Sentiment Tracking"
    ],
    stats: [
      { label: "Monthly Impressions", value: "15M+" },
      { label: "Shorts & Reels Made", value: "4,500+" },
      { label: "Engagement Rate", value: "4.8x Avg" }
    ],
    workflow: [
      { step: "01", title: "Audience Profiling", desc: "Identifying core demographic triggers and platform consumption patterns." },
      { step: "02", title: "Content Engine", desc: "Daily shooting, editing, and motion hook optimization." },
      { step: "03", title: "Strategic Scheduling", desc: "Peak-traffic deployment with metadata and algorithmic tagging." },
      { step: "04", title: "Momentum Analytics", desc: "Daily metrics review to refine subsequent content batches." }
    ],
    image: "/medien/landing/social-media-management-banner.jpg",
    videoThumbnail: "/medien/landing/social-media-management-banner.jpg",
    videoUrl: "https://www.instagram.com/reel/DaxoqAoR_1Z/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
    youtubeUrl: "https://www.instagram.com/reel/DaxoqAoR_1Z/",
    aspect: "16/9"
  },
  {
    id: "digital-marketing",
    number: "04",
    title: "Digital Marketing",
    tagline: "Deploying data-anchored media distribution to maximize reach and conversion.",
    description:
      "Performance marketing, Google & Meta Ads, targeted lead generation funnels, search engine optimization, and voter outreach designed for measurable ROI.",
    fullOverview:
      "Great media deserves great distribution. Our digital marketing team ensures your high-production films and campaigns don't just exist—they reach precisely who they need to influence. With granular demographic targeting, geo-fenced constituency outreach, and robust conversion funnels, we turn passive viewers into active supporters and loyal clients.",
    deliverables: [
      "Precision Meta & Google Paid Ad Campaigns",
      "Geo-Fenced Constituency & Voter Pin-Code Targeting",
      "Technical SEO & Content Discoverability",
      "Conversion Funnels & WhatsApp Broadcast Automation"
    ],
    features: [
      "Micro-targeted campaigns by assembly constituency, age, and interest",
      "Continuous A/B creative testing with multiple headlines and thumbnails",
      "Transparent live analytics dashboards with daily spending breakdowns",
      "Integration with CRM, lead forms, and instant call back systems"
    ],
    techStack: [
      "Google Ads & Meta Ads Manager",
      "Google Analytics 4 & Tag Manager",
      "SEMrush & Ahrefs SEO Engines",
      "WhatsApp Business API Gateways"
    ],
    stats: [
      { label: "Ad Spends Managed", value: "₹2Cr+" },
      { label: "Cost Per Lead", value: "-38% Avg" },
      { label: "Voter Reach", value: "5M+ Verified" }
    ],
    workflow: [
      { step: "01", title: "Funnel Blueprint", desc: "Mapping user journeys from discovery to conversion." },
      { step: "02", title: "Creative Deployment", desc: "Setting up multi-angle ad sets with tailored visual creatives." },
      { step: "03", title: "Algorithmic Bidding", desc: "Real-time bid adjustments for lowest CPA and highest quality traffic." },
      { step: "04", title: "Attribution & Scale", desc: "Doubling down on winning segments with weekly executive reports." }
    ],
    image: "/medien/landing/digital-marketing-growth-banner.jpg",
    videoThumbnail: "/medien/landing/digital-marketing-growth-banner.jpg",
    videoUrl: "https://www.youtube.com/embed/Cgvx6w13ZNg?autoplay=1",
    youtubeUrl: "https://youtu.be/Cgvx6w13ZNg",
    aspect: "16/9"
  },
  {
    id: "election-campaign-services",
    number: "05",
    title: "Election Campaign Services",
    tagline: "Turn key Election Campaign Execution & Ground-to-Cloud Political Architecture.",
    description:
      "Complete assembly & parliamentary election management: mobile high-brightness LED display vans, original prachar songs, street plays (Nukkad Natak), rally multi-cam live feeds, and rapid-response war rooms.",
    fullOverview:
      "RFP Digital Productions is a pioneer in turnkey election campaign execution. We bring deep grassroots ground capability combined with modern digital firepower. From mobilizing a fleet of GPS-tracked mobile LED display vans across hundreds of villages to staging captivating Nukkad Nataks, recording rousing prachar anthems, and running 24/7 social media command centers, we transform political campaigns into winning populist movements.",
    deliverables: [
      "Mobile High-Brightness LED Display Vans (Solar/Gen Hybrid)",
      "Original Prachar Songs, Jingles & Campaign Anthems",
      "Nukkad Natak (Street Theatre) Troupe Deployment",
      "Rally Multi-Cam Live Feeds & LED Wall Switching",
      "Manifesto Design, Pamphlets, Banners & Ground Collateral",
      "24/7 Election Media War Room & WhatsApp Broadcasting"
    ],
    features: [
      "Turnkey on-ground execution with complete driver, crew, and technical support",
      "GPS-monitored van fleet with daily route verification and geo-tagging",
      "Daily rally highlights delivered within 2 hours for same-evening screenings",
      "Compliant with Election Commission of India (ECI) guidelines and protocols"
    ],
    techStack: [
      "Outdoor P3.91 High-Brightness LED Walls",
      "Blackmagic Design ATEM Live Production Switchers",
      "Wireless Satellite & Dual-SIM Live Bonding Transmitters",
      "GPS Fleet Tracking & Real-Time Telemetry"
    ],
    stats: [
      { label: "Constituencies Served", value: "45+" },
      { label: "LED Vans Deployed", value: "80+ Fleet" },
      { label: "Voters Reached", value: "10M+" }
    ],
    workflow: [
      { step: "01", title: "Constituency Mapping", desc: "Analyzing voting booths, rural panchayats, and key demographic hotspots." },
      { step: "02", title: "Anthem & Narrative", desc: "Writing, composing, and recording custom prachar songs that resonate locally." },
      { step: "03", title: "Ground Fleet Rollout", desc: "Deploying LED vans and street theatre troupes with scheduled daily routes." },
      { step: "04", title: "Live War Room", desc: "Real-time counter-narrative creation and daily constituency broadcast loops." }
    ],
    image: "/medien/landing/neutral-election-campaign-banner.jpg",
    videoThumbnail: "/medien/landing/neutral-election-campaign-banner.jpg",
    videoUrl: "https://www.youtube.com/embed/jirysVZwPIE?autoplay=1",
    youtubeUrl: "https://youtu.be/jirysVZwPIE",
    aspect: "16/9"
  },
  {
    id: "photography-events",
    number: "06",
    title: "Photography & Event Coverage",
    tagline: "Preserving decisive moments with artistic high-resolution cinema craft.",
    description:
      "Comprehensive multi-camera live event coverage, corporate summits, high-profile political rallies, industrial expos, executive portraits, and candid photography.",
    fullOverview:
      "When landmark moments happen, second takes do not exist. Our photography and event coverage team brings broadcast-standard technical precision and artistic sensitivity to corporate convocations, political gatherings, academic inaugurations, and cultural expos. We provide multi-angle live switching, immediate same-day press photos, and archival photo books that stand the test of time.",
    deliverables: [
      "Ultra-High-Resolution Event & Summit Photography",
      "Multi-Camera Live Video Streaming to YouTube & Socials",
      "Executive Headshots & Leadership Portfolios",
      "Same-Day Edit Press Highlights & Retouched Stills"
    ],
    features: [
      "Fast on-site photo selection and delivery for instant press and social releases",
      "Multi-camera live broadcast setups with redundant internet bonding",
      "Silent shutter operation for intimate conferences and keynote speeches",
      "Full digital raw backup and cloud gallery delivery within 24 hours"
    ],
    techStack: [
      "Sony Alpha 1 & A7R V Full-Frame Bodies",
      "G Master 24-70mm & 70-200mm f/2.8 Lenses",
      "Profoto & Godox Mobile Studio Lighting Rigs",
      "Teradek Wireless Video Transmission Systems"
    ],
    stats: [
      { label: "Events Covered", value: "1,200+" },
      { label: "Press Turnaround", value: "< 60 Mins" },
      { label: "Stream Reliability", value: "99.9%" }
    ],
    workflow: [
      { step: "01", title: "Rundown & Recce", desc: "Site reconnaissance, lighting inspection, and itinerary synchronization." },
      { step: "02", title: "Multicam Rigging", desc: "Setting up primary, roaming, and stage camera positions with wireless feeds." },
      { step: "03", title: "Live Capture", desc: "Continuous live switching, pristine audio capture, and live stream feed." },
      { step: "04", title: "Instant PR Delivery", desc: "Curated, color-corrected photo sets transmitted to media teams on the spot." }
    ],
    image: "/medien/landing/photography-events-coverage-banner.jpg",
    videoThumbnail: "/medien/landing/photography-events-coverage-banner.jpg",
    videoUrl: "https://www.youtube.com/embed/3n58zR1Reqs?autoplay=1",
    youtubeUrl: "https://youtu.be/3n58zR1Reqs",
    aspect: "16/9"
  },
  {
    id: "website-development",
    number: "07",
    title: "Website Development & Digital Platforms",
    tagline: "High-speed, cinematic, mobile-first web platforms and campaign portals built for conversion and scale.",
    description:
      "Custom web applications, political campaign portals, corporate brand websites, headless CMS, and interactive digital experiences. Engineered with Next.js, modern UI/UX, ultra-fast load times, and rock-solid security.",
    fullOverview:
      "A modern media campaign is incomplete without an exceptional web headquarters. RFP Digital crafts custom digital platforms that match the visual prestige of our cinema productions. From interactive political campaign portals featuring live rally broadcasts, volunteer onboarding, and manifesto downloads, to high-conversion corporate web platforms—we deliver 100/100 Core Web Vitals, dynamic animations, and enterprise-grade reliability.",
    deliverables: [
      "Custom Web Applications & Responsive Portals (Next.js & React)",
      "Political Campaign & Candidate Websites (High-traffic & voter connect)",
      "Corporate Brand Showcases & Interactive Portfolio Engines",
      "Headless CMS, E-Commerce & Custom Admin Dashboards",
      "100/100 Core Web Vitals, Speed Optimization & Technical SEO",
      "Secure Cloud Hosting, SSL & DDoS Protection (Vercel & Cloudflare)"
    ],
    features: [
      "Ultra-fast page loads (< 1.2s) with server-side rendering and edge caching",
      "Mobile-first responsive architecture tailored for rural and urban smartphone users",
      "Integrated multimedia video players, live stream embeds, and instant WhatsApp chat",
      "Scalable infrastructure capable of absorbing massive traffic spikes during election rallies"
    ],
    techStack: [
      "Next.js 15 (App Router)",
      "React 19 & TypeScript",
      "Tailwind CSS & Framer Motion",
      "Vercel Edge Network & Cloudflare",
      "PostgreSQL, Supabase & Headless CMS",
      "Google Analytics 4 & SEO Architecture"
    ],
    stats: [
      { label: "Websites Built", value: "90+" },
      { label: "Page Load Speed", value: "< 1.2s" },
      { label: "Uptime SLA", value: "99.99%" }
    ],
    workflow: [
      { step: "01", title: "Information Architecture", desc: "User journeys, conversion wireframes, and tech stack specification." },
      { step: "02", title: "UI/UX & Interactive Design", desc: "Bespoke Figma designs with dark mode, typography, and motion prototypes." },
      { step: "03", title: "Full-Stack Engineering", desc: "Type-safe Next.js development, API integration, and database schema setup." },
      { step: "04", title: "Performance & Cloud Launch", desc: "Lighthouse 100/100 audit, SSL deployment, domain routing, and analytics." }
    ],
    image: "/medien/landing/rfp-website-development-platforms.jpg",
    videoThumbnail: "/medien/landing/rfp-website-development-platforms.jpg",
    videoUrl: "https://www.youtube.com/embed/Cgvx6w13ZNg?autoplay=1",
    youtubeUrl: "https://youtu.be/Cgvx6w13ZNg",
    aspect: "16/9"
  }
];
