export type Language = "de" | "en";

export interface StageScene {
  id: string;
  title: string;
  artDe: string;
  artEn: string;
  poster: string;
  loopVideo: string;
  fullVideoUrl: string;
  targetId: string;
}

export interface ProjectCard {
  id: string;
  slot: "slot-g" | "slot-a" | "slot-b" | "slot-c" | "slot-d" | "slot-e" | "slot-f";
  title: string;
  client: string;
  categoryDe: string;
  categoryEn: string;
  filterCat: "film" | "animation" | "ki" | "b2b";
  descDe: string;
  descEn: string;
  poster: string;
  videoUrl?: string;
  hasComparison?: boolean;
  comparisonBefore?: string;
  comparisonAfters?: { label: string; src: string }[];
  tags: string[];
}

export const STAGE_SCENES: StageScene[] = [
  {
    id: "dtm-red-bull",
    title: "DTM / Red Bull",
    artDe: "Realdreh + 3D",
    artEn: "Live Action + 3D",
    poster: "/medien/projekte/dtm-red-bull-16x9.jpg",
    loopVideo: "/medien/hero/loop-dtm.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    targetId: "projekt-dtm-red-bull"
  },
  {
    id: "1und1",
    title: "1&1",
    artDe: "Realdreh + 3D",
    artEn: "Live Action + 3D",
    poster: "/medien/projekte/1und1-imagefilm-16x9.jpg",
    loopVideo: "/medien/hero/loop-1und1.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    targetId: "projekt-1und1"
  },
  {
    id: "generali",
    title: "Generali",
    artDe: "Vollständig KI-generiert",
    artEn: "Fully AI-generated",
    poster: "/medien/projekte/generali-bkv-16x9.jpg",
    loopVideo: "/medien/hero/loop-generali.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    targetId: "projekt-generali"
  },
  {
    id: "rolls-royce",
    title: "Rolls-Royce Power Systems",
    artDe: "Cineastischer Realdreh",
    artEn: "Cinematic Live Action",
    poster: "/medien/projekte/rolls-royce-motorenbau-16x9.jpg",
    loopVideo: "/medien/hero/loop-rolls-royce.mp4",
    fullVideoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    targetId: "projekt-rolls-royce"
  }
];

export const FAKTEN_DATA = [
  {
    num: "2.000+",
    labelDe: "realisierte Projekte",
    labelEn: "realized projects",
    descDe: "250+ KI-Projekte, 800+ 3D-Animationen und 700+ Erklärfilme.",
    descEn: "250+ AI projects, 800+ 3D animations and 700+ explainer films."
  },
  {
    num: "110–130",
    labelDe: "Produktionen pro Jahr",
    labelEn: "productions per year",
    descDe: "Verlässliche Kapazitäten für Einzelprojekte und Content-Serien.",
    descEn: "Reliable production capacity for single hero films and content series."
  },
  {
    num: "15+",
    labelDe: "Jahre Erfahrung",
    labelEn: "years of experience",
    descDe: "Erfahrung mit Großunternehmen und komplexen Produktionen.",
    descEn: "Deep expertise with Fortune 500 enterprises and complex logistics."
  },
  {
    num: "34",
    labelDe: "Länder weltweit",
    labelEn: "countries worldwide",
    descDe: "Produktionen auf sechs Kontinenten mit flexiblen Teams.",
    descEn: "Filming and productions across six continents with agile squads."
  }
];

export const CLIENT_LOGOS = [
  { name: "BMW", src: "/medien/logos/bmw.png" },
  { name: "Sixt", src: "/medien/logos/sixt.png" },
  { name: "Rolls-Royce", src: "/medien/logos/rolls-royce.png" },
  { name: "Samsung", src: "/medien/logos/samsung.png" },
  { name: "Generali", src: "/medien/logos/generali.png" },
  { name: "1&1", src: "/medien/logos/1und1.png" },
  { name: "KUKA", src: "/medien/logos/kuka.png" },
  { name: "Golin Ketchum", src: "/medien/logos/golin-ketchum.png" },
  { name: "ADAC", src: "/medien/logos/adac.png" },
  { name: "EGYM", src: "/medien/logos/egym.jpg" },
  { name: "IKEA", src: "/medien/logos/ikea.png" },
  { name: "Payback", src: "/medien/logos/payback.webp" },
  { name: "Roland Berger", src: "/medien/logos/roland-berger.png" },
  { name: "Evonik", src: "/medien/logos/evonik.png" }
];

export const PROJECTS_DATA: ProjectCard[] = [
  {
    id: "projekt-dtm-red-bull",
    slot: "slot-g",
    title: "DTM / Red Bull",
    client: "Red Bull Motorsports",
    categoryDe: "Imagefilm · Realdreh + 3D",
    categoryEn: "Brand Film · Live Action + 3D",
    filterCat: "film",
    descDe:
      "Echte Motorsportszenen treffen auf eine Kamerafahrt durch einen präzise aufgebauten 3D-Motor – von der Beauftragung bis zum fertigen Film in dreieinhalb Wochen.",
    descEn:
      "High-speed motorsport meets a microscopic camera journey through a high-precision 3D engine – from greenlight to theatrical master in just 3.5 weeks.",
    poster: "/medien/projekte/dtm-red-bull-16x9.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    tags: ["Realdreh", "3D-Animation", "Motorsport", "VFX"]
  },
  {
    id: "projekt-1und1",
    slot: "slot-a",
    title: "1&1",
    client: "1&1 Telecom / Jung von Matt",
    categoryDe: "Imagefilm · Realdreh + 3D",
    categoryEn: "Image Film · Live Action + 3D",
    filterCat: "film",
    descDe:
      "Jung von Matt lieferte das Storyboard. Imagine Yes übernahm Location, Casting, Rechenzentrumsdreh, 3D-Integration und Postproduktion.",
    descEn:
      "Jung von Matt delivered the creative storyboard. Imagine Yes handled location scouting, casting, high-security server datacenter shoots, 3D integration, and post.",
    poster: "/medien/projekte/1und1-imagefilm-16x9.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    tags: ["Jung von Matt", "Rechenzentrum", "3D-VFX"]
  },
  {
    id: "projekt-generali",
    slot: "slot-b",
    title: "Generali",
    client: "Generali Deutschland",
    categoryDe: "Vollständig KI-generiert",
    categoryEn: "Fully AI-generated",
    filterCat: "ki",
    descDe:
      "Ein fotorealistischer Brandfilm ohne Realdreh. Komplette Bildwelten, Charaktere und dynamische Lichtstimmungen wurden mit generativer KI realisiert.",
    descEn:
      "A photorealistic brand narrative created without physical cameras. Entire worlds, characters, and dramatic lighting states crafted via generative AI pipelines.",
    poster: "/medien/projekte/generali-bkv-16x9.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    tags: ["Generative KI", "Synthetischer Film", "Brand Film"]
  },
  {
    id: "projekt-uniklinik-freiburg",
    slot: "slot-c",
    title: "Uniklinik Freiburg",
    client: "Universitätsklinikum Freiburg",
    categoryDe: "Patientenfilm · Cineastischer Realdreh",
    categoryEn: "Patient Documentary · Cinematic",
    filterCat: "film",
    descDe:
      "Einfühlsame Patientengeschichten und hochmoderne Medizintechnik in kinoreifer Ästhetik – respektvoll und transparent eingefangen.",
    descEn:
      "Empathetic patient chronicles paired with state-of-the-art medical technology in cinematic depth – recorded with intimacy and scientific integrity.",
    poster: "/medien/projekte/uniklinik-freiburg-still-16x9.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    tags: ["Healthcare", "Dokumentation", "Arthouse"]
  },
  {
    id: "projekt-rolls-royce",
    slot: "slot-d",
    title: "Rolls-Royce Power Systems",
    client: "Rolls-Royce Solutions",
    categoryDe: "Cineastischer Realdreh · Motorenbau",
    categoryEn: "Cinematic Live Action · Engineering",
    filterCat: "film",
    descDe:
      "Monumentale Motorenbau-Präzision in Friedrichshafen. Hochkontrastige Lichtsetzung, Macro-Optiken und cineastische Soundlandschaften.",
    descEn:
      "Monumental industrial engineering in Friedrichshafen. High-contrast chiaroscuro lighting, macro optics, and immersive soundscapes.",
    poster: "/medien/projekte/rolls-royce-motorenbau-16x9.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    tags: ["Industrie", "Engineering", "High-End"]
  },
  {
    id: "projekt-egym",
    slot: "slot-e",
    title: "EGYM Fitness Tech",
    client: "EGYM Global",
    categoryDe: "3D-CAD + KI-Hintergrund Generierung",
    categoryEn: "3D CAD + Generative AI Environment",
    filterCat: "ki",
    descDe:
      "Interaktiver Vorher-Nachher-Vergleich: Original 3D-CAD Modell gegen KI-generierte Premium-Fitnessstudio-Umgebungen.",
    descEn:
      "Interactive Before/After slider: Raw CAD asset placed dynamically into synthetic photorealistic fitness environments.",
    poster: "/medien/projekte/egym-ausgangsbild-4x3.jpg",
    hasComparison: true,
    comparisonBefore: "/medien/projekte/egym-ausgangsbild-4x3.jpg",
    comparisonAfters: [
      { label: "Studio Loft", src: "/medien/projekte/egym-ki-hintergrund-1-4x3.jpg" },
      { label: "High-Tech Gym", src: "/medien/projekte/egym-ki-hintergrund-2-4x3.jpg" }
    ],
    tags: ["Interactive Slider", "Vorher/Nachher", "Generative KI"]
  },
  {
    id: "projekt-bmw-babyracer",
    slot: "slot-f",
    title: "BMW Babyracer",
    client: "BMW Group Lifestyle",
    categoryDe: "3D-Animation & Charakterdesign",
    categoryEn: "3D Animation & Product Motion",
    filterCat: "animation",
    descDe:
      "Dynamische 3D-Produktinszenierung des ikonischen BMW Babyracers mit feinsten Materialreflektionen und studiofertigem Lighting.",
    descEn:
      "Dynamic 3D product motion showcasing the iconic BMW Babyracer with exquisite material shaders and studio illumination.",
    poster: "/medien/projekte/bmw-babyracer-16x9.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    tags: ["BMW", "3D-Produktfilm", "Animation"]
  }
];

export const SERVICES_DATA = [
  {
    num: "01",
    id: "filmproduktion",
    titleDe: "Filmproduktion",
    titleEn: "Film Production",
    descDe:
      "Marken inszenieren, Menschen zeigen und Unternehmen erlebbar machen. Wir übernehmen Konzeption, weltweite Dreharbeiten, Cinema-Kamera-Crews und Regie für Imagefilme, Werbespots und Employer-Branding.",
    descEn:
      "Showcasing brands, illuminating human stories, and bringing corporate vision to life. We manage creative concepting, global cinema crews, and visionary direction for brand films, commercials, and employer branding.",
    deliverablesDe: ["Imagefilme & Brand Anthems", "TV & Web Werbespots", "Executive Interviews & Keynotes", "Recruiting & Kulturfilme"],
    deliverablesEn: ["Brand Anthems & Image Films", "Broadcast & Digital Commercials", "Executive Keynotes & Interviews", "Recruiting & Culture Chronicles"]
  },
  {
    num: "02",
    id: "b2b-contentproduktion",
    titleDe: "B2B-Contentproduktion",
    titleEn: "B2B Content Production",
    descDe:
      "Verlässliche, modulare Content-Serien für die laufende Unternehmenskommunikation. Wir produzieren wiederverwendbare Footage-Pools für Social Media, Messen, Investor Relations und Sales Funnels.",
    descEn:
      "Reliable, modular content systems for continuous enterprise communication. We create versatile footage pools engineered for LinkedIn, industry expos, investor relations, and high-conversion sales funnels.",
    deliverablesDe: ["Modularer Content-Baukasten", "LinkedIn Videoformate (9:16 & 1:1)", "Messe-Loops in 4K/8K", "Produkt-Erklärstrecken"],
    deliverablesEn: ["Modular Content System", "LinkedIn Optimized Videos (9:16 & 1:1)", "4K/8K Expo Video Walls", "Product Feature Breakdowns"]
  },
  {
    num: "03",
    id: "ki-filmproduktion",
    titleDe: "KI-Filmproduktion",
    titleEn: "AI Film Production",
    descDe:
      "Pioniere im Einsatz generativer KI für kommerzielle Filmprojekte. Wir verbinden Realdreh mit State-of-the-Art Diffusion Models, Sora/Runway-Pipelines und ComfyUI für Bildwelten, die sonst unbezahlbar wären.",
    descEn:
      "Pioneering generative AI in commercial filmmaking. We fuse physical footage with cutting-edge diffusion models, Sora/Runway pipelines, and custom ComfyUI workflows for visuals that would otherwise be cost-prohibitive.",
    deliverablesDe: ["Vollständig KI-generierte Spots", "Hybride KI-VFX & Hintergründe", "Virtuelle Protagonisten & Statisten", "Schnelle Mood- & Pitchfilme"],
    deliverablesEn: ["100% Synthetic AI Commercials", "Hybrid AI-VFX & Environments", "Virtual Protagonists & Crowds", "Rapid AI Concept & Moodfilms"]
  },
  {
    num: "04",
    id: "3d-animation",
    titleDe: "3D-Animation & Visualisierung",
    titleEn: "3D Animation & Product Viz",
    descDe:
      "Komplexe Produkte, Maschinen und Prozesse verständlich und ästhetisch visualisiert. Wir importieren Ihre CAD-Konstruktionsdaten direkt in fotorealistische Rendering-Pipelines.",
    descEn:
      "Transforming complex machinery, industrial components, and software architectures into striking visual clarity. We import native CAD data into photorealistic cinematic rendering pipelines.",
    deliverablesDe: ["CAD-Import & Modelloptimierung", "Explosionsansichten & Röntgenblicke", "Fotorealistisches Shading & Lighting", "Virtuelle Produktlaunches"],
    deliverablesEn: ["CAD Import & Mesh Optimization", "Exploded Views & X-Ray Cutaways", "Photorealistic Materials & Lighting", "Virtual Product Launches"]
  },
  {
    num: "05",
    id: "erklaerfilm-produktion",
    titleDe: "Erklärfilm-Produktion",
    titleEn: "Explainer Films",
    descDe:
      "Schluss mit trockenen PowerPoints. Wir übersetzen anspruchsvolle Technologien, Software-Lösungen und regulatorische Themen in mitreißende 2D/3D-Erklärfilme mit glasklarer Dramaturgie.",
    descEn:
      "No more dry presentations. We translate intricate technologies, SaaS architectures, and regulatory frameworks into engaging 2D/3D explainers with razor-sharp dramaturgy.",
    deliverablesDe: ["Didaktische Drehbuchentwicklung", "2D Motion Design & Isometric 3D", "Professionelle Sprecher (30+ Sprachen)", "Sounddesign & Audio-Mastering"],
    deliverablesEn: ["Pedagogical Scriptwriting", "2D Motion Graphics & Isometric 3D", "Native Voiceovers (30+ Languages)", "Sound Design & Audio Master"]
  },
  {
    num: "06",
    id: "ki-workflows-automatisierung",
    titleDe: "KI-Workflows & Automatisierung",
    titleEn: "AI Workflows & Automation",
    descDe:
      "Befähigen Sie Ihr eigenes Inhouse-Marketing- und Kreativteam. Wir entwickeln maßgeschneiderte KI-Workflows, Schnittstellen und führen intensive Praxis-Workshops in Ihrem Unternehmen durch.",
    descEn:
      "Empower your in-house marketing and creative teams. We design custom generative AI workflows, proprietary asset pipelines, and conduct hands-on training directly inside your organization.",
    deliverablesDe: ["Inhouse KI-Schulungen & Prompting", "Automatisierte Lokalisierung & Lip-Sync", "Custom Model-Training & Brand-Tuning", "Governance & Urheberrechts-Leitfäden"],
    deliverablesEn: ["In-House AI Training & Prompt Engineering", "Automated Localization & Lip-Sync", "Custom Model Training & Brand Tuning", "AI Governance & IP Compliance"]
  }
];

export const PROCESS_STEPS = [
  {
    nr: "01",
    titleDe: "Ziel klären",
    titleEn: "Clarify the goal",
    descDe: "Wir verstehen Zielgruppe, Kernbotschaft, Einsatzkanäle und Rahmenbedingungen.",
    descEn: "We align on target audiences, core messaging, distribution channels, and technical requirements."
  },
  {
    nr: "02",
    titleDe: "Idee entwickeln",
    titleEn: "Develop the idea",
    descDe: "Wir entwickeln Story, Dramaturgie, Bildsprache und die passende Produktionsmethode.",
    descEn: "We engineer narrative dramaturgy, visual language, and select the optimal production methodology."
  },
  {
    nr: "03",
    titleDe: "Sichtbar machen",
    titleEn: "Make it visible",
    descDe: "Drehbuch, Storyboard und Look-Development schaffen eine verlässliche Entscheidungsgrundlage.",
    descEn: "Scriptwriting, storyboards, and look development create a rock-solid foundation before cameras roll."
  },
  {
    nr: "04",
    titleDe: "Sicher produzieren",
    titleEn: "Produce with confidence",
    descDe: "Wir stellen das beste Team zusammen und führen verlässlich durch Dreh, 3D oder KI-Generierung.",
    descEn: "We assemble seasoned specialists and direct seamlessly through shoot, 3D render, or AI generation."
  },
  {
    nr: "05",
    titleDe: "Finalisieren & Skalieren",
    titleEn: "Finalize & Scale",
    descDe: "Schnitt, Sound, Colorgrading, Sprachfassungen und Formate werden für alle Kanäle meisterhaft fertiggestellt.",
    descEn: "Editing, sound, color grading, multi-language localization, and aspect ratios mastered for all channels."
  }
];

export const FAQ_DATA = [
  {
    qDe: "Brauchen wir bereits ein fertiges Konzept?",
    qEn: "Do we already need a finished concept?",
    aDe: "Eine Aufgabe, ein Briefing oder eine erste Idee reichen völlig aus. Wir entwickeln daraus Konzept, Dramaturgie und die passende Bildwelt. Liegt bereits ein Agentur-Storyboard vor, realisieren wir dieses mit höchster Präzision.",
    aEn: "A brief, a business objective, or an initial idea is all that is needed. We craft concept, dramaturgy, and visual style from the ground up. If an agency storyboard already exists, we execute it with absolute fidelity."
  },
  {
    qDe: "Können wir mit einem einzelnen Projekt starten?",
    qEn: "Can we start with a single project?",
    aDe: "Ja, absolut. Viele Partnerschaften beginnen mit einem einzelnen Leuchtturm-Projekt. Wenn Sie später fortlaufenden Content benötigen, bauen wir nahtlos auf den etablierten Markenwerten und Abläufen auf.",
    aEn: "Yes, absolutely. Many of our collaborations begin with a single flagship project. If you subsequently require ongoing content, we seamlessly build upon established brand assets and established processes."
  },
  {
    qDe: "Können unsere Agenturen und internen Teams eingebunden bleiben?",
    qEn: "Can our agencies and internal teams stay involved?",
    aDe: "Ja, sehr gerne. Wir arbeiten partnerschaftlich sowohl direkt mit Unternehmen als auch mit Lead-Agenturen zusammen (wie z.B. Jung von Matt). Wir stimmen Schnittstellen und Freigaben flexibel ab.",
    aEn: "Yes, gladly. We frequently partner both directly with enterprise clients and collaboratively with lead creative agencies (such as Jung von Matt), aligning interfaces and milestones flexibly."
  },
  {
    qDe: "Wie binden Sie generative KI in bestehende Produktionen ein?",
    qEn: "How do you integrate generative AI into existing productions?",
    aDe: "Pragmatisch und qualitätsgetrieben: Wo KI schneller, flexibler oder kostengünstiger ist (z.B. Hintergrund-Generierung, Storyboarding, synthetische Szenen), setzen wir sie ein. Wo echter Realdreh oder physikalische 3D-Präzision unübertroffen sind, bleibt das Handwerk führend.",
    aEn: "Pragmatically and quality-first: wherever AI delivers speed, flexibility, or impossible vistas (e.g. background extension, rapid storyboards, synthetic sets), we harness it. Where live cinematography or physical CAD precision remains superior, traditional craft leads."
  },
  {
    qDe: "Wie schnell können wir ein Projekt starten?",
    qEn: "How fast can we kick off a project?",
    aDe: "Nach unserem ersten Gespräch erhalten Sie in der Regel innerhalb von 24–48 Stunden einen klaren Fahrplan und eine transparente Budgetschätzung. Bei dringenden Vorhaben können wir auch innerhalb weniger Tage dreh- und produktionsbereit sein.",
    aEn: "Following our initial discussion, you typically receive a clear production roadmap and transparent budget outline within 24–48 hours. For time-critical launches, we can mobilize within days."
  }
];

export const MAKING_OF_IMAGES = [
  "/medien/making-of/making-of-01.jpg",
  "/medien/making-of/making-of-02.jpg",
  "/medien/making-of/making-of-03.jpg",
  "/medien/making-of/making-of-04.jpg",
  "/medien/making-of/making-of-05.jpg",
  "/medien/making-of/making-of-06.jpg",
  "/medien/making-of/making-of-07.jpg",
  "/medien/making-of/making-of-08.jpg",
  "/medien/making-of/making-of-10.jpg"
];
