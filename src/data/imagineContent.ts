export type Language = "en";

export interface StageScene {
  id: string;
  title: string;
  artEn: string;
  poster: string;
  fullVideoUrl: string;
  targetId: string;
}

export interface VideoItem {
  id: string;
  title: string;
  subtitle?: string;
  poster: string;
  videoUrl: string;
  youtubeUrl: string;
}

export interface ProjectCard {
  id: string;
  slot: "slot-g" | "slot-a" | "slot-b" | "slot-c" | "slot-d" | "slot-e" | "slot-f" | "slot-h" | string;
  title: string;
  client: string;
  categoryEn: string;
  filterCat: "film" | "campaign" | "documentary" | "marketing";
  descEn: string;
  poster: string;
  videoUrl?: string;
  youtubeUrl?: string;
  videos?: VideoItem[];
  hasComparison?: boolean;
  comparisonBefore?: string;
  comparisonAfters?: { label: string; src: string }[];
  tags: string[];
}

export const STAGE_SCENES: StageScene[] = [
  {
    id: "andc-college",
    title: "Acharya Narendra Dev College (ANDC)",
    artEn: "Institutional & Campus Documentary",
    poster: "/medien/galerie/_MG_0109.jpg",
    fullVideoUrl: "https://www.youtube-nocookie.com/embed/Cgvx6w13ZNg?autoplay=1",
    targetId: "projekt-andc"
  },
  {
    id: "election-campaigns",
    title: "Election Campaign Management",
    artEn: "Dr. Antul Teotia & Mobile LED Vans",
    poster: "/medien/galerie/311-campaign-led.jpg",
    fullVideoUrl: "https://www.youtube-nocookie.com/embed/jirysVZwPIE?autoplay=1",
    targetId: "projekt-election"
  },
  {
    id: "corporate-storytelling",
    title: "Corporate Storytelling & Brand Cinema",
    artEn: "Samsung, AIIMS & Leading Industrial Brands",
    poster: "/medien/landing/jindal-group-shoot.jpg",
    fullVideoUrl: "https://www.youtube-nocookie.com/embed/1PeIeMgjyQc?autoplay=1",
    targetId: "projekt-corporate"
  },
  {
    id: "documentary-heritage",
    title: "Documentaries & Social Impact",
    artEn: "Modern Delhi International School & National Heritage",
    poster: "/medien/landing/landing-directing-1669.jpg",
    fullVideoUrl: "https://www.youtube-nocookie.com/embed/91kFY2xs7cE?autoplay=1",
    targetId: "projekt-documentary"
  }
];

export const FAKTEN_DATA = [
  {
    num: "17+",
    labelEn: "Years of Media Excellence",
    descEn: "Headed by alumni of AJK MCRC, Jamia Millia Islamia, New Delhi."
  },
  {
    num: "1,000+",
    labelEn: "TV ads, Corporate Films & Documentaries",
    descEn: "High-definition corporate films, documentaries, and ad campaigns."
  },
  {
    num: "1,200+",
    labelEn: "Events Covered Nationwide",
    descEn: "From political conventions and expos to university convocations."
  },
  {
    num: "100%",
    labelEn: "Client Satisfaction",
    descEn: "Trusted by government bodies, leading colleges, and enterprise brands."
  }
];

export const CLIENT_LOGOS = [
  { name: "IIT Roorkee", src: "/medien/logos/iit-roorkee.png" },
  { name: "Jamia Hamdard University", src: "/medien/logos/jamia-hamdard.png" },
  { name: "National Archives of India", src: "/medien/logos/national-archives.jpg" },
  { name: "Haryana Police", src: "/medien/logos/haryana-police.png" },
  { name: "DD Kisan", src: "/medien/logos/dd-kisan.png" },
  { name: "Modern Delhi International School", src: "/medien/logos/modern-delhi-school.png" },
  { name: "Sports Authority of India", src: "/medien/logos/sports-authority-india.jpg" },
  { name: "Atal Bihari Vajpayee Hindi Vishwavidyalaya", src: "/medien/logos/atal-bihari-univ.png" },
  { name: "Bharat Construction", src: "/medien/logos/bharat-construction.jpg" },
  { name: "Jamia Co-operative Bank", src: "/medien/logos/jamia-coop-bank.jpg" },
  { name: "Smile India Foundation", src: "/medien/logos/smile-india.png" },
  { name: "Brave Soul Foundation", src: "/medien/logos/brave-soul-foundation.jpg" },
  { name: "Samsung", src: "/medien/logos/samsung.png" }
];

export const PROJECTS_DATA: ProjectCard[] = [
  {
    id: "projekt-andc",
    slot: "slot-g",
    title: "Acharya Narendra Dev College (ANDC) Institutional Corporate Film",
    client: "University of Delhi / ANDC",
    categoryEn: "Institutional & Campus Documentary",
    filterCat: "documentary",
    descEn:
      "A cinematic campus documentary capturing academic breakthroughs, world-class research laboratories, and student innovations at Acharya Narendra Dev College, Delhi University.",
    poster: "/medien/youtube-thumbs/Cgvx6w13ZNg.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/Cgvx6w13ZNg?autoplay=1",
    youtubeUrl: "https://youtu.be/Cgvx6w13ZNg",
    tags: ["Institutional Master", "University of Delhi", "Scientific Labs", "4K Cinema"]
  },
  {
    id: "projekt-election",
    slot: "slot-a",
    title: "Election Campaign Documentaries & Mobile LED Vans",
    client: "Dr. Antul Teotia & Umesh Agarwal MLA",
    categoryEn: "Election Campaign Strategy & Media Operations",
    filterCat: "campaign",
    descEn:
      "Constituency-wide campaign operations featuring mobile high-brightness LED display vans, documentary storytelling, rally multi-camera live switching, and grassroots outreach.",
    poster: "/medien/youtube-thumbs/jirysVZwPIE.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/jirysVZwPIE?autoplay=1",
    youtubeUrl: "https://youtu.be/jirysVZwPIE",
    videos: [
      {
        id: "antul-teotia",
        title: "Dr. Antul Teotia Zila Pramukh Bulandshahr",
        subtitle: "The People's Voice | Zila Panchayat Adhyaksh Campaign",
        poster: "/medien/youtube-thumbs/jirysVZwPIE.jpg",
        videoUrl: "https://www.youtube-nocookie.com/embed/jirysVZwPIE?autoplay=1",
        youtubeUrl: "https://youtu.be/jirysVZwPIE"
      },
      {
        id: "umesh-agarwal",
        title: "Umesh Agarwal MLA (#BJP Gurugram)",
        subtitle: "Gurugram's Transformation | Vikas Yatra Documentary",
        poster: "/medien/youtube-thumbs/3JWmjrRbYDM.jpg",
        videoUrl: "https://www.youtube-nocookie.com/embed/3JWmjrRbYDM?autoplay=1",
        youtubeUrl: "https://www.youtube.com/watch?v=3JWmjrRbYDM"
      },
      {
        id: "meera-brass",
        title: "Corporate Film for Meera Brass Products",
        subtitle: "Industrial Manufacturing & Brand Production",
        poster: "/medien/youtube-thumbs/7BHyfYAxREc.jpg",
        videoUrl: "https://www.youtube-nocookie.com/embed/7BHyfYAxREc?autoplay=1",
        youtubeUrl: "https://youtu.be/7BHyfYAxREc"
      }
    ],
    tags: ["Election Campaign", "Dr. Antul Teotia", "Umesh Agarwal MLA", "Meera Brass", "Mobile LED Vans"]
  },
  {
    id: "projekt-samsung",
    slot: "slot-b",
    title: "Samsung Corporate Film & Technology Anthem",
    client: "Samsung Electronics",
    categoryEn: "Corporate Brand Film",
    filterCat: "film",
    descEn:
      "High-production corporate brand film crafted for global technology leaders, highlighting research, human engineering, and future-forward innovation.",
    poster: "/medien/youtube-thumbs/1PeIeMgjyQc.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/1PeIeMgjyQc?autoplay=1",
    youtubeUrl: "https://youtu.be/1PeIeMgjyQc",
    tags: ["Corporate Film", "Samsung", "Commercial Cinema", "Technology Anthem"]
  },
  {
    id: "projekt-aiims",
    slot: "slot-c",
    title: "AIIMS Corporate Movie - Medical Leadership & Clinical Care",
    client: "All India Institute of Medical Sciences (AIIMS)",
    categoryEn: "Healthcare & Research Documentary",
    filterCat: "documentary",
    descEn:
      "Empathetic, authoritative medical documentary illustrating cutting-edge clinical research, compassionate healthcare teams, and patient care advancements.",
    poster: "/medien/youtube-thumbs/B8-5NEnLjQ8.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/B8-5NEnLjQ8?autoplay=1",
    youtubeUrl: "https://youtu.be/B8-5NEnLjQ8",
    tags: ["AIIMS", "Healthcare Film", "Clinical Excellence", "Doctor Interviews"]
  },
  {
    id: "projekt-school",
    slot: "slot-d",
    title: "Modern Delhi International School Showcase",
    client: "Modern Delhi International School, Greater Faridabad",
    categoryEn: "Campus & Academic Film",
    filterCat: "film",
    descEn:
      "Dynamic campus film showcasing sports arenas, robotics laboratories, performing arts, and student leadership across premier educational infrastructure.",
    poster: "/medien/youtube-thumbs/91kFY2xs7cE.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/91kFY2xs7cE?autoplay=1",
    youtubeUrl: "https://youtu.be/91kFY2xs7cE",
    tags: ["Campus Film", "Education", "Faridabad", "Student Life"]
  },
  {
    id: "projekt-iit",
    slot: "slot-e",
    title: "IIT Roorkee & IIT Delhi Corporate Films",
    client: "Indian Institute of Technology (IIT)",
    categoryEn: "Premier Institutional Cinema",
    filterCat: "documentary",
    descEn:
      "Comprehensive institutional films highlighting academic legacy, world-class engineering research facilities, and national technological contributions.",
    poster: "/medien/youtube-thumbs/TAv-50-CHjc.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/TAv-50-CHjc?autoplay=1",
    youtubeUrl: "https://youtu.be/TAv-50-CHjc",
    tags: ["IIT Roorkee", "IIT Delhi", "Engineering Research", "Institutional Master"]
  },
  {
    id: "projekt-faridabad",
    slot: "slot-f",
    title: "Faridabad Smart City Limited - Urban Transformation",
    client: "Faridabad Smart City Limited (Govt of Haryana)",
    categoryEn: "Urban Governance & Civic Infrastructure",
    filterCat: "documentary",
    descEn:
      "Documenting transformative smart urban infrastructure, automated traffic command centers, clean mobility networks, and civic modernization.",
    poster: "/medien/youtube-thumbs/bSNcL7srjqA.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/bSNcL7srjqA?autoplay=1",
    youtubeUrl: "https://youtu.be/bSNcL7srjqA",
    tags: ["Smart City", "Urban Governance", "Infrastructure", "Public Impact"]
  },
  {
    id: "projekt-pathfinder",
    slot: "slot-h",
    title: "Pathfinder Academy Corporate Film",
    client: "Pathfinder Academy, Greater Noida",
    categoryEn: "Corporate & Campus Film",
    filterCat: "film",
    descEn:
      "High-production corporate film showcasing premier academic infrastructure, faculty excellence, and student leadership at Pathfinder Academy, Greater Noida.",
    poster: "/medien/youtube-thumbs/7o09OEkupfA.jpg",
    videoUrl: "https://www.youtube-nocookie.com/embed/7o09OEkupfA?autoplay=1",
    youtubeUrl: "https://youtu.be/7o09OEkupfA",
    tags: ["Pathfinder Academy", "Corporate Film", "Greater Noida", "Campus Cinema"]
  }
];

export const SERVICES_DATA = [
  {
    num: "01",
    id: "corporate-films",
    titleEn: "Corporate Films",
    descEn:
      "Professional corporate storytelling, brand films, product launches and company profile videos. We create impactful videos that showcase your brand’s vision and story.",
    deliverablesEn: [
      "Company Profile Videos",
      "Brand Anthems & Commercials",
      "Executive Interviews & Keynotes",
      "Facility Walkthroughs & Industrial Films"
    ]
  },
  {
    num: "02",
    id: "documentary-films",
    titleEn: "Documentary Films",
    descEn:
      "Compelling documentaries that capture real stories with cinematic visuals and emotional impact. From cultural heritage to institutional history, we bring authenticity to the screen.",
    deliverablesEn: [
      "Institutional & Historical Documentaries",
      "Social Impact & NGO Field Stories",
      "Biographical Chronicles & Retrospectives",
      "Archival Research & Narration"
    ]
  },
  {
    num: "03",
    id: "social-media-management",
    titleEn: "Social Media Management",
    descEn:
      "Enhance your online presence with tailored strategies and creative content. Creative content planning, posting, branding and audience engagement across every platform.",
    deliverablesEn: [
      "Content Calendar & Strategy",
      "High-Engagement Reels, Shorts & Videos",
      "Brand Identity & Visual Guidelines",
      "Community Engagement & Response Management"
    ]
  },
  {
    num: "04",
    id: "digital-marketing",
    titleEn: "Digital Marketing",
    descEn:
      "Performance marketing, paid advertising, SEO and lead generation focused on measurable growth. Reach your exact target audience with data-driven creative campaigns.",
    deliverablesEn: [
      "Meta Ads & Google Ads Management",
      "Targeted Lead Generation Campaigns",
      "Search Engine Optimization (SEO)",
      "Analytics Reporting & Conversion Funnels"
    ]
  },
  {
    num: "05",
    id: "election-campaigns",
    titleEn: "Election Campaign Services",
    descEn:
      "Complete political campaign strategy, media management, digital outreach and election branding. Run successful campaigns with innovative strategies and media coverage.",
    deliverablesEn: [
      "Mobile LED Display Screen Vans",
      "Original Prachar Songs & Anthems",
      "Nukkad Nataks (Street Play Performances)",
      "WhatsApp Outreach & Constituency Social Marketing"
    ]
  },
  {
    num: "06",
    id: "photography-events",
    titleEn: "Photography & Event Coverage",
    descEn:
      "Preserve your precious moments with artistic and high-quality photographs. Multi-camera setup, candid photography, and live streaming for summits, expos, and ceremonies.",
    deliverablesEn: [
      "High-Resolution Event Photography",
      "Corporate Headshots & Portfolios",
      "Multi-Camera Live Event Streaming",
      "Same-Day Edit Highlights & Retouching"
    ]
  },
  {
    num: "07",
    id: "website-development",
    titleEn: "Website Development",
    descEn:
      "High-performance, cinematic, mobile-first web applications, election campaign portals, and corporate platforms built with Next.js, modern UI/UX, and maximum conversion.",
    deliverablesEn: [
      "Custom Web Applications (Next.js & React)",
      "Political Campaign & Candidate Portals",
      "Corporate Showcases & Headless CMS",
      "100/100 Core Web Vitals & SEO Architecture"
    ]
  }
];

export const PROCESS_STEPS = [
  {
    nr: "01",
    titleEn: "Consultation & Briefing",
    descEn: "We understand your objectives, target audience, core campaign messaging, budget, and timelines."
  },
  {
    nr: "02",
    titleEn: "Concept & Scriptwriting",
    descEn: "Our team develops the creative concept, storyboards, screenplay, and visual moodboards."
  },
  {
    nr: "03",
    titleEn: "Filming & Production",
    descEn: "We deploy experienced cinematographers, directors, cinema lighting, and 4K camera gear on location."
  },
  {
    nr: "04",
    titleEn: "Post-Production & Sound Design",
    descEn: "Masterful editing, color grading, voiceover narration, sound effects, and motion graphics integration."
  },
  {
    nr: "05",
    titleEn: "Final Delivery & Campaign Launch",
    descEn: "Delivery in high-definition formats optimized for broadcast, YouTube, social media, or live LED walls."
  }
];

export const FAQ_DATA = [
  {
    qEn: "What services does RFP Digital Productions offer?",
    aEn: "RFP Digital Productions is a full-service media production and election management company based in New Delhi. We specialize in corporate films, documentary films, social media management, digital marketing, election campaign management (LED vans, prachar songs, nukkad nataks), and professional photography."
  },
  {
    qEn: "Who leads the team at RFP Digital Productions?",
    aEn: "Our production house is managed by seasoned media professionals and alumni from the prestigious AJK Mass Communication & Research Center (AJK MCRC), Jamia Millia Islamia, New Delhi, bringing over 17 years of industry experience."
  },
  {
    qEn: "Can RFP Digital handle nationwide shoots across India?",
    aEn: "Yes, absolutely. We have covered over 1,200+ events and productions across India, including Delhi NCR, Uttar Pradesh, Bihar, Haryana, Rajasthan, and nationwide locations with agile mobile camera crews."
  },
  {
    qEn: "How does your Election Campaign Management service work?",
    aEn: "We provide an integrated, turnkey election campaign engine: mobile LED screen vans, original prachar songs, street plays (Nukkad Nataks), manifesto designs, digital banners, WhatsApp outreach, and on-ground rally video coverage."
  },
  {
    qEn: "How do we get a quote or discuss a project?",
    aEn: "You can reach out directly via WhatsApp, call us at +91-11-49963157 or +91 99999 63157, email rfpdigitalmedia@gmail.com, or submit the inquiry form on this site. Our team typically responds within the same day."
  }
];

export const REAL_YOUTUBE_VIDEOS = [
  {
    id: "7MGQPvm2zl8",
    title: "ANDC | Acharya Narendra Dev College",
    desc: "An immersive institutional experience captured in high definition.",
    embedUrl: "https://www.youtube.com/embed/7MGQPvm2zl8"
  },
  {
    id: "jirysVZwPIE",
    title: "ANDC Campus Tour & Research Labs",
    desc: "Official academic documentary and campus facilities walkthrough.",
    embedUrl: "https://www.youtube.com/embed/jirysVZwPIE"
  },
  {
    id: "91kFY2xs7cE",
    title: "University & Corporate Documentary",
    desc: "A moment that speaks a thousand words – real human storytelling.",
    embedUrl: "https://www.youtube.com/embed/91kFY2xs7cE"
  },
  {
    id: "hpacHvIGPNI",
    title: "Social & Community Initiative Film",
    desc: "A cinematic view of healthcare, public health, and social welfare programs.",
    embedUrl: "https://www.youtube.com/embed/hpacHvIGPNI"
  },
  {
    id: "KLfO_N4a6V8",
    title: "Election Campaign Rally & Anthem",
    desc: "Vibrant ground-level campaign coverage and public rally visuals.",
    embedUrl: "https://www.youtube.com/embed/KLfO_N4a6V8"
  },
  {
    id: "B8-5NEnLjQ8",
    title: "Modern Delhi Public School Showcase",
    desc: "Educational excellence, student achievements, and campus life.",
    embedUrl: "https://www.youtube.com/embed/B8-5NEnLjQ8"
  },
  {
    id: "1PeIeMgjyQc",
    title: "Brand Promotional Commercial",
    desc: "High-impact storytelling driving business and customer reach.",
    embedUrl: "https://www.youtube.com/embed/1PeIeMgjyQc"
  },
  {
    id: "TAv-50-CHjc",
    title: "Creative Production & Music Reel",
    desc: "Cinematic visual craftsmanship, custom song compositions, and post-production.",
    embedUrl: "https://www.youtube.com/embed/TAv-50-CHjc"
  },
  {
    id: "OgZJC0msHm8",
    title: "Studio & On-Location Production",
    desc: "Dynamic commercial cinematography and creative visual arts.",
    embedUrl: "https://www.youtube.com/embed/OgZJC0msHm8"
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    author: "Shri Ajeet Sharma",
    designation: "MLA, Bhagalpur · Bihar Legislative Assembly",
    quote: "RFP Digital Productions managed our complete constituency video broadcast network and mobile LED campaign. Their operational punctuality, message resonance, and technical reliability in field conditions were exemplary.",
    videoUrl: "/medien/testimonials/ajeet-sharma-mla-testimonial.mp4",
    youtubeUrl: "https://youtu.be/3n58zR1Reqs",
    thumbnail: "/medien/youtube-thumbs/3n58zR1Reqs.jpg"
  },
  {
    author: "Dr. U.S. Verma",
    designation: "Director Principal, Modern Delhi Public School (MDPS)",
    quote: "RFP Digital Productions captured the essence of our educational institution with supreme cinematic quality. Their team is thorough, creative, and remarkably professional.",
    videoUrl: "/medien/testimonials/mdps-testimonial.mp4",
    youtubeUrl: "https://youtu.be/91kFY2xs7cE",
    thumbnail: "/medien/youtube-thumbs/91kFY2xs7cE.jpg"
  },
  {
    author: "Constituency Ground Testimonial",
    designation: "Grassroots Voter & Citizen Feedback · Outreach Campaign",
    quote: "The on-ground reach, mobile broadcast screens, and authentic constituency representation created by RFP Digital brought our community's development voice directly to the leaders.",
    videoUrl: "/medien/testimonials/testimonials-video.mp4",
    youtubeUrl: "https://youtu.be/3n58zR1Reqs",
    thumbnail: "/medien/testimonials/testimonials-video-16x9.jpg"
  }
];

export const MAKING_OF_IMAGES = [
  "/medien/landing/landing-set-1211.jpg",
  "/medien/landing/landing-camera-1256.jpg",
  "/medien/landing/landing-film-1375.jpg",
  "/medien/landing/landing-directing-1669.jpg",
  "/medien/landing/landing-equipment-1335.jpg",
  "/medien/landing/landing-drone-1634.jpg",
  "/medien/landing/jindal-group-shoot.jpg",
  "/medien/landing/landing-anchor-1698.jpg",
  "/medien/galerie/_MG_0109.jpg",
  "/medien/galerie/308-indoor-set.jpg"
];
