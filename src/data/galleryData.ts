import { GalleryItem } from "@/types/gallery";

export const INITIAL_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "dtm-red-bull",
    title: "DTM / Red Bull Racing - High-Speed Track Cinema",
    category: "Cinema & Film",
    client: "Red Bull Motorsports",
    year: "2024",
    image: "/medien/projekte/dtm-red-bull-16x9.jpg",
    aspect: "landscape",
    summary: "Real on-track motorsport cinema seamlessly integrated with a microscopic 3D engine flythrough.",
    description: "A high-octane blend of real on-track racing footage captured with high-speed Phantom cameras and custom anamorphic optics, seamlessly combined with photorealistic 3D engine simulations. Produced under rapid turn-around for Red Bull's global premiere, this project established new benchmarks in synchronized practical-and-CGI racing capture.",
    tools: ["ARRI Alexa Mini LF", "Phantom Flex4K", "Cooke Anamorphic /i", "Unreal Engine 5", "DaVinci Resolve Studio"],
    deliverables: [
      "4K DCI Theatrical Master",
      "Broadcast TV Commercial (60s / 30s)",
      "High-Impact Vertical Social Cuts (9:16)",
      "HDR10 Color Graded Showcase"
    ],
    featured: true,
    stills: [
      "/medien/making-of/making-of-01.jpg",
      "/medien/making-of/making-of-02.jpg",
      "/medien/projekte/dtm-red-bull-16x9.jpg"
    ],
    directorNotes: "Operating alongside active high-speed pit crews required precision wireless camera rigs and extreme telephoto glass to maintain cinematic depth under unforgiving track constraints.",
    btsNotes: "Filmed over 3 days at Hockenheimring with two parallel camera crews and synchronized telemetry data logging.",
    createdAt: "2024-06-15"
  },
  {
    id: "generali-synthetic-horizon",
    title: "Generali - The Synthetic Horizon",
    category: "AI & Generative",
    client: "Generali Global",
    year: "2024",
    image: "/medien/projekte/generali-bkv-16x9.jpg",
    aspect: "landscape",
    summary: "A photorealistic enterprise brand vision generated entirely with generative AI video pipelines.",
    description: "Produced with zero on-location cameras, this film pioneers high-fidelity generative AI synthesis. Custom fine-tuned LoRA models, multi-stage upscale workflows, and proprietary motion steering produced emotive human actors and architectural marvels that reflect the global assurance brand.",
    tools: ["Custom ComfyUI Workflows", "Runway Gen-3 Alpha", "Midjourney v6.1", "Topaz Video AI 4", "Adobe After Effects"],
    deliverables: [
      "4K Master Brand Commercial",
      "Interactive Web Hero Sequences",
      "Synthesized Voiceover Multi-language Master",
      "Keyframe Stills Gallery"
    ],
    featured: true,
    stills: [
      "/medien/projekte/generali-bkv-16x9.jpg",
      "/medien/making-of/making-of-03.jpg"
    ],
    directorNotes: "The true creative challenge was achieving emotional nuance in facial performance without the uncanny valley effect. Combining latent interpolation with temporal face locks solved this.",
    btsNotes: "Over 4,200 generation seeds were analyzed and curated to assemble the 90-second hero narrative.",
    createdAt: "2024-08-20"
  },
  {
    id: "rolls-royce-engineering",
    title: "Rolls-Royce Power Systems - Engineering Giants",
    category: "Cinema & Film",
    client: "Rolls-Royce Solutions",
    year: "2024",
    image: "/medien/projekte/rolls-royce-motorenbau-16x9.jpg",
    aspect: "landscape",
    summary: "Monumental industrial engineering in Friedrichshafen captured with chiaroscuro lighting and macro optics.",
    description: "Showcasing the precision craftsmanship of massive marine and industrial powerplants. High-contrast lighting setups inside heavy manufacturing bays turned industrial assembly into pure cinematic art, emphasizing titanium tolerances and human mastery.",
    tools: ["Sony FX9 Full Frame", "Atlas Orion Anamorphic Primes", "DJI Ronin 2", "Laowa 24mm Macro Probe Lens"],
    deliverables: [
      "Global Brand Anthem (4K HDR)",
      "Trade Fair Giant LED Loop (8K Superwide)",
      "Web Case Study & Executive Vignettes"
    ],
    featured: true,
    stills: [
      "/medien/projekte/rolls-royce-motorenbau-16x9.jpg",
      "/medien/making-of/making-of-05.jpg"
    ],
    directorNotes: "The acoustic rumble of the assembly halls inspired the sound design, which merges industrial foley with low-frequency orchestral pads.",
    btsNotes: "Produced over 5 production days under stringent ISO manufacturing safety protocols.",
    createdAt: "2024-05-10"
  },
  {
    id: "bmw-babyracer-motion",
    title: "BMW Babyracer - Dynamic 3D Motion Craft",
    category: "3D & VFX",
    client: "BMW Group Lifestyle",
    year: "2024",
    image: "/medien/projekte/bmw-babyracer-16x9.jpg",
    aspect: "landscape",
    summary: "High-end 3D product motion showcasing iconic styling, intricate reflections, and studio lighting.",
    description: "Transforming CAD engineering data into an emotional product showcase. Every stitch, paint flake reflection, and wheel hub detail was textured and rendered with ray-traced accuracy to celebrate BMW design heritage.",
    tools: ["Cinema 4D", "Redshift Renderer", "Houdini FX", "Substance 3D Painter", "DaVinci Resolve"],
    deliverables: [
      "Product Launch Commercial (4K)",
      "Interactive 3D Web Asset",
      "High-Resolution Print Key Visuals"
    ],
    featured: false,
    stills: [
      "/medien/projekte/bmw-babyracer-16x9.jpg",
      "/medien/making-of/making-of-06.jpg"
    ],
    directorNotes: "We treated a compact collectible racer with the visual reverence and dynamic motion lighting of an M8 Competition coupe.",
    btsNotes: "Rendered on a 16-node GPU farm in full 32-bit floating point EXR sequences.",
    createdAt: "2024-07-04"
  },
  {
    id: "datacenter-1und1-cloud",
    title: "1&1 Cloud - The Nervous System of Data",
    category: "Commercials",
    client: "1&1 Telecom / Jung von Matt",
    year: "2024",
    image: "/medien/projekte/1und1-imagefilm-16x9.jpg",
    aspect: "landscape",
    summary: "High-security hyper-scale server datacenter filming blended with glowing 3D data streams.",
    description: "Filmed under strict security clearance inside Tier IV European server facilities. We integrated optical fiber light simulations with real technician workflows to demystify complex sovereign cloud infrastructure for enterprise decision makers.",
    tools: ["ARRI Alexa 35", "Cooke Anamorphic /i Full Frame Plus", "Houdini", "Nuke Studio"],
    deliverables: [
      "National TV Commercial (45s)",
      "Cinema Pre-roll Cuts (30s)",
      "Social Media Campaign Assets"
    ],
    featured: false,
    stills: [
      "/medien/projekte/1und1-imagefilm-16x9.jpg",
      "/medien/making-of/making-of-04.jpg"
    ],
    directorNotes: "The contrast between cold server rack aisles and warm human engineering formed the visual backbone.",
    btsNotes: "Filmed during live operating hours with non-disruptive silent LED lighting batteries.",
    createdAt: "2024-04-12"
  },
  {
    id: "egym-synthetic-environments",
    title: "EGYM - Synthetic Fitness Architecture",
    category: "AI & Generative",
    client: "EGYM Global",
    year: "2024",
    image: "/medien/projekte/egym-ki-hintergrund-1-4x3.jpg",
    aspect: "landscape",
    summary: "3D CAD product models dynamically composited into photorealistic generative architectural lofts.",
    description: "Revolutionizing commercial catalog photography: raw industrial fitness machinery models were isolated and placed into hyper-realistic synthetic luxury gym environments with realistic light bounces and contact shadows.",
    tools: ["Blender 4.0", "Stable Diffusion SDXL", "ControlNet Depth & Normal", "Adobe Photoshop CC"],
    deliverables: [
      "Omnichannel Product Catalog",
      "Interactive Before/After Experience",
      "High-Resolution Print Ads"
    ],
    featured: false,
    stills: [
      "/medien/projekte/egym-ausgangsbild-4x3.jpg",
      "/medien/projekte/egym-ki-hintergrund-1-4x3.jpg",
      "/medien/projekte/egym-ki-hintergrund-2-4x3.jpg"
    ],
    directorNotes: "Eliminating physical location logistics reduced production expenditure by over 60% while elevating aesthetic control.",
    btsNotes: "Over 30 distinct architectural styles generated and matched to exact studio lighting angles.",
    createdAt: "2024-03-18"
  },
  {
    id: "himalayan-wildlife-bts",
    title: "Sanctuary of the Silent - High Altitude Production",
    category: "Behind The Scenes",
    client: "Himalayan Forest Conservancy",
    year: "2023",
    image: "/medien/making-of/making-of-07.jpg",
    aspect: "landscape",
    summary: "Tracking forest rangers in sub-zero alpine conditions with ruggedized anamorphic cinema kits.",
    description: "A behind-the-lens look into high-altitude documentary cinematography. Operating at 12,000 feet required specialized heated battery wraps, lightweight carbon fiber rigs, and endurance audio kits to withstand sudden blizzards.",
    tools: ["RED V-Raptor 8K VV", "Angenieux Optimo Primes", "Sound Devices MixPre-10", "DJI Inspire 3 Cine"],
    deliverables: [
      "Feature Documentary (4K DCI)",
      "Educational Mini-Docs (10 episodes)",
      "Collector's Photo Journal Stills"
    ],
    featured: false,
    stills: [
      "/medien/making-of/making-of-07.jpg",
      "/medien/making-of/making-of-08.jpg",
      "/medien/making-of/making-of-10.jpg"
    ],
    directorNotes: "Extreme cold demanded utmost discipline: every lens change was planned down to the second to avoid sensor condensation.",
    btsNotes: "Crews hiked over 40 km across mountain ridges with pack mules carrying solar recharging stations.",
    createdAt: "2023-11-28"
  },
  {
    id: "color-grading-master-suite",
    title: "DaVinci ACES Color Grading Suite",
    category: "Behind The Scenes",
    client: "RFP Postproduction Suites",
    year: "2024",
    image: "/medien/making-of/making-of-11.jpg",
    aspect: "landscape",
    summary: "Inside the RFP grading theater calibrating 12-bit ACES color pipelines for DCI theatrical distribution.",
    description: "Every frame we produce undergoes meticulous color science grading in calibrated reference lighting environments. Using DaVinci Resolve Advanced Panels and Sony BVM-HX310 HDR master monitors, we craft rich cinematic contrast and pristine skin tones.",
    tools: ["DaVinci Resolve Studio", "Sony BVM-HX310 4K HDR Monitor", "Tangent Panels", "ACES 1.3 Color Science"],
    deliverables: [
      "DCI-P3 Theatrical Master",
      "Rec.709 Broadcast Deliverables",
      "HDR10 / Dolby Vision Masters"
    ],
    featured: false,
    stills: [
      "/medien/making-of/making-of-11.jpg",
      "/medien/making-of/making-of-05.jpg"
    ],
    directorNotes: "Color is emotional punctuation. We never apply quick generic LUTs; each sequence receives bespoke color geometry.",
    btsNotes: "Calibrated quarterly with Klein K10-A colorimeters to guarantee delta-E under 0.5.",
    createdAt: "2024-02-14"
  },
  {
    id: "uniklinik-freiburg-documentary",
    title: "Uniklinik Freiburg - Empathy & Precision",
    category: "Cinema & Film",
    client: "University Medical Center Freiburg",
    year: "2024",
    image: "/medien/projekte/uniklinik-freiburg-still-16x9.jpg",
    aspect: "landscape",
    summary: "Intimate patient chronicles and cutting-edge surgery in respectful, cinematic depth.",
    description: "Balancing the sterile technicality of cutting-edge robotic surgical wards with the deep warmth of patient recovery. Shot over two weeks inside active operating theaters with sterile-compliant camera setups.",
    tools: ["Canon C500 Mark II", "Sumire Prime Lenses", "Wireless Follow Focus", "Ambient Sound Mics"],
    deliverables: [
      "Cinema Healthcare Brand Film",
      "Departmental Recruiting Vignettes",
      "Hospital Lobby 4K Display Master"
    ],
    featured: false,
    stills: [
      "/medien/projekte/uniklinik-freiburg-still-16x9.jpg",
      "/medien/making-of/making-of-02.jpg"
    ],
    directorNotes: "Respect for patients and medical staff always took priority over shooting schedules. Intimacy requires humility.",
    btsNotes: "Filmed in full surgical scrub gear with specialized sterile lens wraps and silent camera dampers.",
    createdAt: "2024-01-22"
  }
];
