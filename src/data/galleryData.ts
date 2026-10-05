import { GalleryItem } from "@/types/gallery";

export const INITIAL_GALLERY_ITEMS: GalleryItem[] = [
  // 1. Google Drive Curated Highlight 1: Acharya Narendra Dev College Cinema
  {
    id: "andc-institutional-documentary",
    title: "Acharya Narendra Dev College (ANDC) - Institutional Film",
    category: "Cinema & Film",
    client: "University of Delhi / ANDC",
    year: "2024",
    image: "/medien/galerie/_MG_0109.jpg",
    aspect: "landscape",
    summary: "Comprehensive academic and campus documentary capturing scientific labs, student innovations, and institutional milestones.",
    description: "Produced for Acharya Narendra Dev College (ANDC), University of Delhi. Our team directed on-location cinema shoots covering research centers, botanical gardens, administrative excellence, and high-achieving alumni testimonials.",
    tools: ["Sony Cinema Line", "DJI Ronin Gimbal Rigs", "Sennheiser Audio Systems", "DaVinci Resolve Studio"],
    deliverables: [
      "Official Institutional Master (4K Full HD)",
      "Admissions & Orientation Highlight Video",
      "Keynote Archival Reel",
      "High-Resolution Event Stills"
    ],
    featured: true,
    stills: [
      "/medien/galerie/_MG_0109.jpg",
      "/medien/galerie/_MG_8046.jpg",
      "/medien/galerie/36-cinematic.jpg"
    ],
    directorNotes: "Capturing authentic student research and laboratory optics required meticulous lighting and respectful documentary camera movement.",
    btsNotes: "Filmed over 4 days on the ANDC campus with multi-camera setups and aerial drone sequences.",
    createdAt: "2024-05-12"
  },

  // 2. Google Drive Curated Highlight 2: Election Mobile LED Vans
  {
    id: "election-campaign-led-vans",
    title: "Election Campaign Management - High-Impact Mobile LED Vans",
    category: "Commercials",
    client: "Election Steering Committees",
    year: "2024",
    image: "/medien/galerie/311-campaign-led.jpg",
    aspect: "landscape",
    summary: "Constituency-wide campaign operations featuring mobile high-brightness LED display vans, rally coverage, and grassroots voter outreach.",
    description: "RFP Digital Productions deployed custom-engineered mobile LED display vehicles across key voting districts. Broadcast-quality video rallies, candidate speeches, and constituency development showcases were delivered directly to public squares and rural communities.",
    tools: ["Outdoor High-Nits P4 LED Displays", "Hydraulic Mast Vans", "Live Switcher Studio", "Wireless PA Audio"],
    deliverables: [
      "Daily Constituency Broadcast Loops",
      "Rally Live Feeds & Speeches",
      "Mobile Van Route Operations",
      "Public Sentiment Highlights"
    ],
    featured: true,
    stills: [
      "/medien/galerie/311-campaign-led.jpg",
      "/medien/galerie/310-election-rally.jpg",
      "/medien/galerie/298-mobile-broadcast.jpg"
    ],
    directorNotes: "Field conditions across rural assembly segments require extreme equipment durability, independent power generator backups, and rapid mobile redeployment.",
    btsNotes: "Coordinated synchronized mobile van fleet reaching hundreds of villages daily.",
    createdAt: "2024-04-18"
  },

  // 3. Google Drive Curated Highlight 3: On-Location Rigging & Cinematographer
  {
    id: "on-location-cinematographer-rig",
    title: "On-Location Cinematography & Large-Format Rigging",
    category: "Behind The Scenes",
    client: "RFP Digital Productions",
    year: "2024",
    image: "/medien/galerie/_MG_8046.jpg",
    aspect: "landscape",
    summary: "Cinematographer on field set operating an advanced cinema rig with wireless monitor and precision follow-focus.",
    description: "Capturing behind-the-scenes discipline during a feature documentary. Our camera operators configure modular cinema cages to withstand grueling heat, dust, and continuous motion without sacrificing frame stability.",
    tools: ["Sony FX9 Cinema Rig", "Teradek Wireless Video", "Matte Box & Polarizers", "Tilta Follow Focus"],
    deliverables: [
      "BTS Master Footage",
      "Camera Operator Production Stills",
      "Technical Setup Documentation"
    ],
    featured: true,
    stills: [
      "/medien/galerie/_MG_8046.jpg",
      "/medien/galerie/77-camera-rig.jpg",
      "/medien/galerie/194-cinematography.jpg"
    ],
    directorNotes: "Rig balance is everything. If the rig strains the operator, dynamic tracking loses its musical rhythm.",
    btsNotes: "Filmed on location with naturalistic backlighting and lightweight handheld stabilizer supports.",
    createdAt: "2024-06-15"
  },

  // 4. Google Drive Curated Highlight 4: Grassroots Rally Broadcasting
  {
    id: "grassroots-voter-rally-broadcasting",
    title: "Grassroots Voter Rally & Multi-Camera Broadcast",
    category: "Commercials",
    client: "Assembly Election Steering Committees",
    year: "2024",
    image: "/medien/galerie/310-election-rally.jpg",
    aspect: "landscape",
    summary: "Live multi-camera transmission of mass voter rallies, candidate addresses, and crowd mobilization.",
    description: "Covering massive voter gatherings requires coordinated high-angle cameras, jib cranes, and on-ground roving units. RFP Digital transmitted live feeds directly to giant LED towers and social streaming channels.",
    tools: ["Multi-Camera Broadcast Unit", "Heavy Duty Jib Crane", "Wireless Microwave Uplink", "Live Telecast Suite"],
    deliverables: [
      "Rally Master Live Feed",
      "Same-Evening Highlight Reels",
      "Social Media Micro-Cuts for WhatsApp Outreach"
    ],
    featured: true,
    stills: [
      "/medien/galerie/310-election-rally.jpg",
      "/medien/galerie/314-live-feed.jpg",
      "/medien/galerie/04-1.jpg"
    ],
    directorNotes: "Capturing the energy of a 50,000-person gathering requires cutting seamlessly between wide arena master shots and intimate voter faces.",
    btsNotes: "Operated under tight security parameters with redundant cellular and satellite transmitters.",
    createdAt: "2024-04-25"
  },

  // 5. Google Drive Curated Highlight 5: Anamorphic Commercial Cinema
  {
    id: "anamorphic-brand-film-production",
    title: "Anamorphic Commercial Cinema & Brand Aesthetics",
    category: "Cinema & Film",
    client: "Enterprise Industrial Client",
    year: "2024",
    image: "/medien/galerie/36-cinematic.jpg",
    aspect: "landscape",
    summary: "Precision cinematic lighting and anamorphic camera movement for commercial storytelling.",
    description: "Crafted for a leading industrial manufacturing consortium. We paired vintage anamorphic lenses with state-of-the-art digital sensors to produce horizontal flares and painterly bokeh.",
    tools: ["ARRI Alexa Mini", "Cooke Anamorphic Lenses", "Dana Dolly Tracks", "High-CRI LED Diffusers"],
    deliverables: [
      "Brand Anthem Master Film (4K)",
      "Social Video Cutdowns (1:1 & 9:16)",
      "High-Resolution Print Stills"
    ],
    featured: true,
    stills: [
      "/medien/galerie/36-cinematic.jpg",
      "/medien/galerie/38-set-light.jpg",
      "/medien/galerie/370-studio-lighting.jpg"
    ],
    directorNotes: "Commercial cinema succeeds when technical precision never overwhelms the emotional core of the message.",
    btsNotes: "Two days of continuous studio and factory floor setups with complex crane moves.",
    createdAt: "2024-07-10"
  },

  // 6. Google Drive Curated Highlight 6: Multi-Crew Field Production
  {
    id: "field-production-crew-coordination",
    title: "Multi-Crew Field Production & Directing",
    category: "Behind The Scenes",
    client: "Documentary Film Foundation",
    year: "2024",
    image: "/medien/galerie/37-production.jpg",
    aspect: "landscape",
    summary: "On-set collaboration between director, cinematographers, and production managers in remote locations.",
    description: "Behind-the-scenes view of our documentary field unit planning shots on location. Every technician aligns on sunlight angles, sound reflection, and talent readiness before rolling.",
    tools: ["Field Production Vans", "Director Monitors", "Two-Way Clear-Com Radio", "Digital Clapperboards"],
    deliverables: [
      "Field Production Stills Archive",
      "Behind the Scenes Featurette",
      "Call Sheets & Production Logs"
    ],
    featured: false,
    stills: [
      "/medien/galerie/37-production.jpg",
      "/medien/galerie/62-direction.jpg",
      "/medien/galerie/3ef60e56.jpg"
    ],
    directorNotes: "Preparation on the call sheet gives the crew the psychological freedom to seize spontaneous moments.",
    btsNotes: "Shot during a 10-day documentary expedition across Delhi, Haryana, and Rajasthan.",
    createdAt: "2024-03-22"
  },

  // 7. Google Drive Curated Highlight 7: Precision High-Output Set Lighting
  {
    id: "precision-high-output-set-lighting",
    title: "Precision High-Output Studio & Set Lighting",
    category: "Behind The Scenes",
    client: "Corporate Film Production",
    year: "2024",
    image: "/medien/galerie/38-set-light.jpg",
    aspect: "landscape",
    summary: "Soft diffused illumination sculpting cinematic contrast and textured environments.",
    description: "Lighting setup for an executive boardroom interview series. We balanced daylight HMIs through grid cloths with rim backlights to create dimensionality against dark corporate backdrops.",
    tools: ["Aputure 1200d Pro", "Chimera Lantern Softboxes", "C-Stands & Sandbags", "Color Temperature Meters"],
    deliverables: [
      "Lighting Plot Diagrams",
      "Grip & Gaffer Tech Specs",
      "Executive Interview Video Cuts"
    ],
    featured: false,
    stills: [
      "/medien/galerie/38-set-light.jpg",
      "/medien/galerie/370-studio-lighting.jpg"
    ],
    directorNotes: "If an audience notices the lighting fixture, the magic is broken. Light must feel born from the architecture.",
    btsNotes: "Rigged in 45 minutes using compact LED fixtures designed for rapid corporate turnarounds.",
    createdAt: "2024-06-02"
  },

  // 8. Google Drive Curated Highlight 8: Mobile Live Broadcast Switcher
  {
    id: "mobile-broadcast-switcher-station",
    title: "Mobile Live Broadcast & Switcher Engineering",
    category: "Commercials",
    client: "Public Media & Rally Broadcast",
    year: "2024",
    image: "/medien/galerie/39-broadcast.jpg",
    aspect: "landscape",
    summary: "Low-latency multi-camera switching, graphics overlays, and live output to LED screens and social networks.",
    description: "Our mobile broadcast station manages up to 8 live SDI cameras, dynamic graphic titles, audio compression, and satellite uplinks for instantaneous event streaming.",
    tools: ["Blackmagic ATEM Television Studio Pro 4K", "Multi-View Field Monitors", "Behringer X32 Producer", "SDI Distribution Amps"],
    deliverables: [
      "Full Rally Live Telecast",
      "Multi-Track Master Audio Recording",
      "Same-Hour Social Media Cuts"
    ],
    featured: false,
    stills: [
      "/medien/galerie/39-broadcast.jpg",
      "/medien/galerie/314-live-feed.jpg"
    ],
    directorNotes: "Live switching is a sport of pure intuition. Anticipating when a speaker reaches a crescendo demands complete focus.",
    btsNotes: "Housed inside a sound-dampened mobile broadcast van with independent battery UPS backup.",
    createdAt: "2024-05-28"
  },

  // 9. Google Drive Curated Highlight 9: Director Monitoring Real-Time Take
  {
    id: "director-monitoring-take",
    title: "Real-Time Director Monitoring & Performance Guidance",
    category: "Behind The Scenes",
    client: "Institutional Media Campaign",
    year: "2024",
    image: "/medien/galerie/62-direction.jpg",
    aspect: "landscape",
    summary: "Directing actors and real stakeholders on location with wireless video assists for meticulous frame composition.",
    description: "Our founding filmmakers work shoulder-to-shoulder with interviewees, creating an empathetic, distraction-free environment that allows non-professional subjects to deliver unscripted authenticity.",
    tools: ["SmallHD Wireless Director Cage", "Teradek Bolt 4K Receiver", "Wireless Headsets"],
    deliverables: [
      "Performance Master Cuts",
      "Authentic Testimonial Interviews",
      "Director Review Logs"
    ],
    featured: false,
    stills: [
      "/medien/galerie/62-direction.jpg",
      "/medien/galerie/3ef60e56.jpg"
    ],
    directorNotes: "When interviewing doctors or teachers, put down the script. Ask what keeps them awake at night.",
    btsNotes: "Captured on location during the Acharya Narendra Dev College documentary shoot.",
    createdAt: "2024-05-14"
  },

  // 10. Google Drive Curated Highlight 10: Heavy-Duty Cinema Gimbal
  {
    id: "heavy-duty-cinema-gimbal-rig",
    title: "Heavy-Duty Cinema Gimbal & Camera Stabilization",
    category: "Behind The Scenes",
    client: "Automotive & Action Commercial",
    year: "2024",
    image: "/medien/galerie/77-camera-rig.jpg",
    aspect: "landscape",
    summary: "3-axis electronic stabilizer balancing heavy cinema camera rigs for fluid motion tracking.",
    description: "Built for high-velocity tracking shots, this gimbal setup supports heavy cinema prime lenses while eliminating footsteps and engine vibration across uneven terrains.",
    tools: ["DJI Ronin 2 Professional Combo", "Sony Cinema Body", "Nucleus-M Wireless Motors", "EasyRig Vario 5 Support"],
    deliverables: [
      "Dynamic 4K Tracking Sequences",
      "Smooth Vehicle Run-By Shots",
      "BTS Technical Stills"
    ],
    featured: false,
    stills: [
      "/medien/galerie/77-camera-rig.jpg",
      "/medien/galerie/389-gimbal-motion.jpg"
    ],
    directorNotes: "Mechanical stabilization gives scenes the visual authority of big-budget feature cinema.",
    btsNotes: "Calibrated for rapid lens changes without requiring full re-balancing.",
    createdAt: "2024-06-20"
  },

  // 11. Google Drive Curated Highlight 11: Acoustic Soundstage Studio
  {
    id: "acoustic-soundstage-interviews",
    title: "Acoustic Soundstage & Executive Keynote Set",
    category: "Cinema & Film",
    client: "Tech & Corporate Summit",
    year: "2024",
    image: "/medien/galerie/83-soundstage.jpg",
    aspect: "landscape",
    summary: "Isolated studio environment capturing crisp dialog and corporate thought leadership interviews.",
    description: "Designed for high-profile executive interviews and corporate films. Acoustic wall absorption and whisper-quiet HVAC ensure studio-quality dialogue capture with zero outdoor street bleed.",
    tools: ["Sound Dampening Drapes", "Sennheiser MKH 416 Boom", "Bicolor Panel Keys", "4K Teleprompters"],
    deliverables: [
      "Executive Thought Leadership Series",
      "Keynote Video Presentations",
      "Clean Dialogue Audio Masters"
    ],
    featured: false,
    stills: [
      "/medien/galerie/83-soundstage.jpg",
      "/medien/galerie/321-editing-suite.jpg"
    ],
    directorNotes: "Pristine audio fidelity is what separates professional broadcast from amateur video.",
    btsNotes: "Recorded at RFP Digital's New Delhi studio facilities.",
    createdAt: "2024-07-04"
  },

  // 12. Google Drive Curated Highlight 12: Smooth Dolly Track Movement
  {
    id: "precision-dolly-track-movement",
    title: "Smooth Dolly Track & Curved Rail Movement",
    category: "Behind The Scenes",
    client: "Architectural & Heritage Film",
    year: "2024",
    image: "/medien/galerie/128-dolly-track.jpg",
    aspect: "landscape",
    summary: "Precision mechanical camera tracks providing cinematic glide through museum corridors and college campuses.",
    description: "When documenting historic corridors and scientific laboratories, mechanical track dollys deliver an organic weight and deliberate cadence that motorized gimbals cannot match.",
    tools: ["Dana Dolly Heavy Track", "Mitchell Mount Base", "Precision Speed Rails", "Fluid Head Tripod"],
    deliverables: [
      "Sweeping Architectural Reveals",
      "Slow-Paced Heritage Corridor Tracking",
      "Master Documentary Shots"
    ],
    featured: false,
    stills: [
      "/medien/galerie/128-dolly-track.jpg",
      "/medien/galerie/194-cinematography.jpg"
    ],
    directorNotes: "The slow push-in is cinema's greatest punctuation mark. It draws the audience deeper into the subject's world.",
    btsNotes: "Levelled with optical bubble levels across heritage tile flooring to prevent any micro-jitter.",
    createdAt: "2024-02-18"
  },

  // 13. Google Drive Curated Highlight 13: Large Format Sensor & Focus Pulling
  {
    id: "large-format-focus-pulling",
    title: "Large-Format Sensor Framing & Focus Pulling",
    category: "Cinema & Film",
    client: "Cultural Heritage Chronicle",
    year: "2024",
    image: "/medien/galerie/194-cinematography.jpg",
    aspect: "landscape",
    summary: "Shallow depth of field focus pulling highlighting authentic expressions and archival treasures.",
    description: "Filming micro-details on ancient manuscripts and artisan tool handling with razor-thin depth of field. Every focus rack guides the viewer's attention to delicate gold filigree and artisan gestures.",
    tools: ["Full Frame Cinema Camera", "Zeiss Macro Lenses", "Wireless Lens Controller", "Focus Peaking Monitors"],
    deliverables: [
      "Cinematic Heritage Master Cut",
      "Fine-Art Still Archive",
      "Macro Visual Sequences"
    ],
    featured: false,
    stills: [
      "/medien/galerie/194-cinematography.jpg",
      "/medien/galerie/281-optics-lens.jpg"
    ],
    directorNotes: "Focus pulling is an emotional art form. The speed of the rack must breathe in rhythm with the speaker.",
    btsNotes: "Filmed under museum conservator supervision inside temperature-regulated archives.",
    createdAt: "2024-03-12"
  },

  // 14. Google Drive Curated Highlight 14: Outdoor Campaign Field Unit
  {
    id: "field-operations-outdoor-production",
    title: "Outdoor Production & Field Unit Deployment",
    category: "Behind The Scenes",
    client: "Rural Outreach & Election Management",
    year: "2024",
    image: "/medien/galerie/241-field-unit.jpg",
    aspect: "landscape",
    summary: "High-mobility field teams executing documentary and campaign shoots across rural villages.",
    description: "Operating off-grid requires robust power stations, dust-sealed camera cases, and agile crews capable of setting up in five minutes when unexpected news or rally movements occur.",
    tools: ["Weather-Sealed Pelican Cases", "EcoFlow Portable Power Stations", "Compact LED Spotlights", "Carbon Fiber Tripods"],
    deliverables: [
      "Field Production Footage",
      "Daily Ground Dispatch Packages",
      "Regional Voter Voices"
    ],
    featured: false,
    stills: [
      "/medien/galerie/241-field-unit.jpg",
      "/medien/galerie/298-mobile-broadcast.jpg"
    ],
    directorNotes: "The best stories happen when you leave the city and listen to people who rarely see a movie camera.",
    btsNotes: "Covered 18 districts across northern and eastern India during peak election cycles.",
    createdAt: "2024-04-10"
  },

  // 15. Google Drive Curated Highlight 15: Drone Aerial Cinematography
  {
    id: "drone-aerial-cinematography",
    title: "Drone Aerial Cinematography & Landscape Mapping",
    category: "Cinema & Film",
    client: "National Infrastructure Project",
    year: "2024",
    image: "/medien/galerie/252-aerial-setup.jpg",
    aspect: "landscape",
    summary: "Certified drone pilots capturing bird's-eye sweeps of university campuses and solar power installations.",
    description: "Our certified DGCA drone pilots operate dual-operator setups: one pilot navigating flight paths while the second operator controls the 3-axis cinema camera gimbal with calibrated cinema glass.",
    tools: ["DJI Inspire 2 Drone", "Zenmuse X7 Super 35 Camera", "Dual Remote Controllers", "High-Definition CrystalSky Monitors"],
    deliverables: [
      "4K 60fps Aerial Master Footage",
      "Topographic Architectural Sweeps",
      "Campus Aerial Portfolio"
    ],
    featured: false,
    stills: [
      "/medien/galerie/252-aerial-setup.jpg",
      "/medien/galerie/36-cinematic.jpg"
    ],
    directorNotes: "Aerial footage should never be gratuitous. It must establish scale, geographical context, and human ambition.",
    btsNotes: "Flown under strict DGCA digital sky airspace clearances with GPS fail-safes.",
    createdAt: "2024-05-19"
  },

  // 16. Google Drive Curated Highlight 16: Cinema Lens Calibration
  {
    id: "cinema-lens-calibration",
    title: "Prime Cinema Lens Calibration & Optical Testing",
    category: "Behind The Scenes",
    client: "RFP Digital Camera Department",
    year: "2024",
    image: "/medien/galerie/281-optics-lens.jpg",
    aspect: "landscape",
    summary: "Pre-shoot lens calibration ensuring crisp edge-to-edge optical clarity and chromatic aberration control.",
    description: "Before every major institutional documentary, our camera team tests each prime lens on optical collimators and resolution test charts to ensure matched color rendition and focus accuracy.",
    tools: ["Siemens Star Resolution Targets", "Lens Collimators", "Flange Depth Gauges", "Optical Cleaning Cleanroom"],
    deliverables: [
      "Camera & Lens Test Charts",
      "Focal Match Calibration Cards",
      "Technical Pre-Flight Checklists"
    ],
    featured: false,
    stills: [
      "/medien/galerie/281-optics-lens.jpg",
      "/medien/galerie/194-cinematography.jpg"
    ],
    directorNotes: "Flawless optical preparation eliminates surprises on set. When shooting high-contrast scenes, lens coatings matter.",
    btsNotes: "Standard protocol before deploying multi-camera teams across nationwide assignments.",
    createdAt: "2024-03-01"
  },

  // 17. Google Drive Curated Highlight 17: Fleet Mobile LED Displays
  {
    id: "fleet-mobile-led-displays",
    title: "Fleet Management for Mobile LED Display Vehicles",
    category: "Commercials",
    client: "Electoral Steering Committee",
    year: "2024",
    image: "/medien/galerie/298-mobile-broadcast.jpg",
    aspect: "landscape",
    summary: "Synchronized mobile LED van fleets driving voter education and policy achievements across multi-district routes.",
    description: "Managing a synchronized fleet of 15+ mobile LED display vehicles. Every van is equipped with high-nits outdoor LED walls, GPS route monitoring, and evening public square broadcasting setups.",
    tools: ["Outdoor P4 High-Nits LED Displays", "Hydraulic Mast Lifts", "Heavy-Duty On-Board Generators", "GPS Vehicle Trackers"],
    deliverables: [
      "Route Coverage Verification Reports",
      "Public Interaction Footage",
      "Daily Fleet Video Broadcast Loops"
    ],
    featured: false,
    stills: [
      "/medien/galerie/298-mobile-broadcast.jpg",
      "/medien/galerie/311-campaign-led.jpg"
    ],
    directorNotes: "The LED van turns every village chowk into an impromptu cinema hall. Screen clarity in direct sunlight is non-negotiable.",
    btsNotes: "Equipped with vibration-damped suspension mounts to protect electronic LED modules over unpaved rural roads.",
    createdAt: "2024-04-05"
  },

  // 18. Google Drive Curated Highlight 18: Grand Auditorium Stage Rigging
  {
    id: "grand-event-stage-rigging",
    title: "Grand Event & Auditorium Stage Rigging",
    category: "Commercials",
    client: "National Convocation Summit",
    year: "2024",
    image: "/medien/galerie/308-stage-rigging.jpg",
    aspect: "landscape",
    summary: "Structural aluminum trussing, overhead robotic lighting, and giant LED wall integration for university convocations.",
    description: "Designing the stage architecture for prestigious university convocations. We engineered overhead aluminum trusses supporting 40 moving-head lights and backdrop LED walls visible from every seat.",
    tools: ["Aluminum Box Trusses", "DMX Lighting Consoles", "Ultra-Wide LED Processors", "Electric Chain Hoists"],
    deliverables: [
      "Stage Architecture CAD Plots",
      "Live Arena Lighting Master",
      "VIP Convocation Webcast Cut"
    ],
    featured: false,
    stills: [
      "/medien/galerie/308-stage-rigging.jpg",
      "/medien/galerie/21.jpg"
    ],
    directorNotes: "Auditorium rigging must be structurally immaculate and completely silent during Chancellor addresses.",
    btsNotes: "Engineered and safety-tested 24 hours prior to dignitary arrival.",
    createdAt: "2024-08-25"
  },

  // 19. Google Drive Curated Highlight 19: Multi-Angle Live Feed Transmission
  {
    id: "multi-angle-live-feed-transmission",
    title: "Multi-Angle Live Feed & Real-Time Broadcast Control",
    category: "Commercials",
    client: "Statewide Election Outreach",
    year: "2024",
    image: "/medien/galerie/314-live-feed.jpg",
    aspect: "landscape",
    summary: "Directing multi-camera feeds with instantaneous replay, speaker lower-thirds, and broadcast-grade color fidelity.",
    description: "Live broadcast engineers mixing multi-camera feeds in real time during a crucial campaign debate. Our team ensures seamless transitions between stage keynotes, sign-language interpreters, and crowd reactions.",
    tools: ["ATEM 2 M/E Production Studio 4K", "HyperDeck Studio Recorders", "NDI IP Video Network", "Character Generator Rigs"],
    deliverables: [
      "Low-Latency Broadcast Feed (1080p60)",
      "Multi-Track Isolated Camera Recordings",
      "Press Release News Snippets"
    ],
    featured: false,
    stills: [
      "/medien/galerie/314-live-feed.jpg",
      "/medien/galerie/39-broadcast.jpg"
    ],
    directorNotes: "The technical crew's heartbeat must sync with the live event. There is no second take in live broadcasting.",
    btsNotes: "Deployed redundant fiber lines to eliminate single points of failure.",
    createdAt: "2024-05-02"
  },

  // 20. Google Drive Curated Highlight 20: DaVinci Resolve Editing Suite
  {
    id: "davinci-resolve-color-suite",
    title: "4K HDR DaVinci Resolve Editing & Mastering Suite",
    category: "Behind The Scenes",
    client: "RFP Digital Post-Production Facility",
    year: "2024",
    image: "/medien/galerie/321-editing-suite.jpg",
    aspect: "landscape",
    summary: "Dedicated post-production bay equipped with calibrated reference displays and high-speed NVMe storage arrays.",
    description: "Inside our New Delhi editing and grading facility. Colorists and offline editors craft narrative cuts with precision audio mixing and calibrated color spaces matching international festival standards.",
    tools: ["DaVinci Resolve Studio 19", "Apple Mac Studio M2 Ultra", "Sony BVM Reference Monitor", "Acoustic Treatment Panels"],
    deliverables: [
      "Final Theatrical Color Master (ProRes 4444 XQ)",
      "High-Dynamic-Range (HDR10 / Dolby Vision) Deliverables",
      "Stereo & Surround 5.1 Mixes"
    ],
    featured: false,
    stills: [
      "/medien/galerie/321-editing-suite.jpg",
      "/medien/galerie/426-color-grading.jpg"
    ],
    directorNotes: "The editing room is where the third film is made. Pacing, silence, and micro-cuts create truth.",
    btsNotes: "Calibrated quarterly with spectrophotometers for strict broadcast broadcast delta-E standards.",
    createdAt: "2024-07-28"
  },

  // 21. Google Drive Curated Highlight 21: High-Key Commercial Studio
  {
    id: "high-key-commercial-studio",
    title: "High-Key Commercial Studio Lighting & Product Sets",
    category: "Cinema & Film",
    client: "Consumer Product Brand",
    year: "2024",
    image: "/medien/galerie/370-studio-lighting.jpg",
    aspect: "landscape",
    summary: "Studio tabletop and product cinematography with motorized turntables and clean shadow falloff.",
    description: "Precision product lighting creates crisp specular highlights and pristine reflections on glossy consumer tech and medical diagnostic equipment.",
    tools: ["Continuous Bi-Color Softboxes", "Polarizing Light Sheets", "Motorized Heavy Turntable", "Probe Macro Lenses"],
    deliverables: [
      "Commercial Product Anthems",
      "E-Commerce 360 Video Assets",
      "High-Resolution Print Advertising Stills"
    ],
    featured: false,
    stills: [
      "/medien/galerie/370-studio-lighting.jpg",
      "/medien/galerie/38-set-light.jpg"
    ],
    directorNotes: "Light reflections tell the story of tactile quality. Every gradient on the product surface is sculpted.",
    btsNotes: "Shot at our specialized tabletop cinematography bay in Lajpat Nagar 4.",
    createdAt: "2024-06-18"
  },

  // 22. Google Drive Curated Highlight 22: Dynamic Gimbal Tracking
  {
    id: "motion-tracking-steady-cam",
    title: "High-Speed Dynamic Gimbal Tracking",
    category: "Behind The Scenes",
    client: "Sports & University Athletics",
    year: "2024",
    image: "/medien/galerie/389-gimbal-motion.jpg",
    aspect: "landscape",
    summary: "Tracking sprinting athletes and fast-paced campus action with silky-smooth electronic gimbal stabilization.",
    description: "Covering athletic events and outdoor campus sports. Our camera operator runs alongside sprinting competitors while maintaining perfect horizon level and continuous focus.",
    tools: ["3-Axis Electronic Gimbal", "Nucleus Wireless Motors", "Lollipop Antennas", "Carbon Fiber Support Rig"],
    deliverables: [
      "Dynamic Sports Tracking Reels",
      "High-Speed 120fps Slow-Motion Clips",
      "Campus Spirit Highlight Video"
    ],
    featured: false,
    stills: [
      "/medien/galerie/389-gimbal-motion.jpg",
      "/medien/galerie/77-camera-rig.jpg"
    ],
    directorNotes: "Kinetic camera motion injects adrenaline into documentary sports footage.",
    btsNotes: "Tested at 120fps recording to capture high-speed particle dust and water droplets.",
    createdAt: "2024-05-18"
  },

  // 23. Google Drive Curated Highlight 23: Precision Color Timing & Grading
  {
    id: "precision-color-timing-grading",
    title: "Precision Film Emulation & Color Timing",
    category: "Cinema & Film",
    client: "Independent Documentary Feature",
    year: "2024",
    image: "/medien/galerie/426-color-grading.jpg",
    aspect: "landscape",
    summary: "Balancing documentary archival footage with newly captured 4K interviews for seamless tonal cohesion.",
    description: "Our senior colorists use custom ACES LUTs and analog film print emulation profiles to unify diverse historical archives with crisp modern cinema sensors.",
    tools: ["DaVinci Resolve Mini Panel", "Calibrated Reference Monitor", "False Color Exposure Scopes"],
    deliverables: [
      "Unified Theatrical Color Grade",
      "Festival Screening Master Cut",
      "High-Definition Web Streaming Files"
    ],
    featured: false,
    stills: [
      "/medien/galerie/426-color-grading.jpg",
      "/medien/galerie/321-editing-suite.jpg"
    ],
    directorNotes: "Colors evoke memory. A warm, restrained shadow tone makes historical stories feel immediate and alive.",
    btsNotes: "Conducted in collaboration with film directors and museum archivists.",
    createdAt: "2024-07-22"
  },

  // 24. Google Drive Curated Highlight 24: Rally Stage Sound Architecture
  {
    id: "rally-stage-public-address",
    title: "Rally Stage Sound Architecture & Visual Backdrops",
    category: "Commercials",
    client: "Public Governance Rally",
    year: "2024",
    image: "/medien/galerie/04-1.jpg",
    aspect: "landscape",
    summary: "Large-scale public rally staging, acoustic line array deployment, and coordinated LED stage visuals.",
    description: "Comprehensive public address and visual production for high-stakes public rallies. We synchronize dynamic backdrop animations with speech cadences to command audience attention.",
    tools: ["JBL VTX Line Array System", "Outdoor P3.9 LED Screens", "Wireless Microphone Diversity Systems"],
    deliverables: [
      "Acoustic Audio Coverage Across 300 Meters",
      "Synchronized Stage LED Motion Graphics",
      "Rally Speech Video Highlights"
    ],
    featured: false,
    stills: [
      "/medien/galerie/04-1.jpg",
      "/medien/galerie/308-stage-rigging.jpg"
    ],
    directorNotes: "Every word spoken by the leader must reach the farthest listener with crystal clarity and no echo distortion.",
    btsNotes: "Audio acoustic simulation performed prior to rigging to prevent sound slapback from surrounding buildings.",
    createdAt: "2024-04-12"
  },

  // 25. Google Drive Curated Highlight 25: Stage Lighting & Event Production
  {
    id: "stage-lighting-event-management",
    title: "Statewide Cultural Festival Stage Lighting",
    category: "Behind The Scenes",
    client: "Cultural Directorate",
    year: "2024",
    image: "/medien/galerie/21.jpg",
    aspect: "landscape",
    summary: "Dynamic robotic lighting choreography illuminating live dance performances and state musical celebrations.",
    description: "Designing the complete atmospheric lighting for outdoor state cultural celebrations. Moving beams, warm tungsten washes, and low-lying fog created an enchanting theatrical stage.",
    tools: ["Clay Paky Moving Heads", "Warm Tungsten Blinders", "Haze Fog Generators", "GrandMA3 Console"],
    deliverables: [
      "Live Cultural Festival Broadcast",
      "Theatrical Stage Lighting Show",
      "Press & Media Still Archive"
    ],
    featured: false,
    stills: [
      "/medien/galerie/21.jpg",
      "/medien/galerie/308-stage-rigging.jpg"
    ],
    directorNotes: "Lighting traditional Indian classical dance requires honoring the hand mudras and eye expressions above all else.",
    btsNotes: "Pre-programmed with timecode synchronization to the festival's musical track.",
    createdAt: "2024-08-10"
  },

  // 26. Google Drive Curated Highlight 26: Director Storyboarding & Shot Breakdown
  {
    id: "director-script-storyboard-session",
    title: "Director Storyboarding & Shot Breakdown Session",
    category: "Behind The Scenes",
    client: "RFP Digital Creative Lab",
    year: "2024",
    image: "/medien/galerie/3ef60e56.jpg",
    aspect: "landscape",
    summary: "Pre-production conceptualization with frame-by-frame animatics, lighting maps, and creative dialogue.",
    description: "Before cameras roll on any major film, our directors and cinematographers map every angle, character motivation, and transition on visual storyboard decks.",
    tools: ["Digital Storyboard Software", "Floor Plan Light Maps", "Shot List Breakdown Spreadsheets"],
    deliverables: [
      "Comprehensive Pre-Visualization Deck",
      "Director's Treatment Document",
      "On-Location Production Schedule"
    ],
    featured: false,
    stills: [
      "/medien/galerie/3ef60e56.jpg",
      "/medien/galerie/62-direction.jpg"
    ],
    directorNotes: "Storyboarding isn't about rigid rules; it is the common visual language that aligns 40 crew members to a single dream.",
    btsNotes: "Developed at our creative development studio in New Delhi.",
    createdAt: "2024-01-15"
  }
];
