"use client";

import React from "react";
import { Play, Sparkles, Film, Clock, Eye, Layers } from "lucide-react";

interface FeaturedFilmProps {
  onPlayFilm: (videoUrl: string, title: string) => void;
}

export const FeaturedFilm: React.FC<FeaturedFilmProps> = ({ onPlayFilm }) => {
  const featuredVideo = {
    title: "Sunset Ridge: The Architectural Symphony",
    year: "2024",
    subtitle: "Commissioned by Architectural Digest & Studio SÉVÉRA",
    description:
      "A cinematic exploration of light, timber, and spatial restraint. Filmed across twilight transitions using bespoke anamorphic primes to capture organic materials in true form.",
    videoUrl:
      "https://www.youtube.com/embed/Rz2ZrNClYNs",
    poster:
      "https://rfpdigital.com/images/gallery/1740382017_67bc1f41bf62c.jpg",
    specs: [
      { icon: Film, label: "4K DCI Anamorphic" },
      { icon: Clock, label: "18 Min Runtime" },
      { icon: Layers, label: "DaVinci Wide Gamut" },
    ],
  };

  const showcaseProperties = [
    {
      title: "Sunset Ridge",
      year: "2023",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      specs: ["4 Bedroom", "3 Bathroom", "1,400 sqft"],
      category: "Architectural Feature",
    },
    {
      title: "The Solitude Pavilion",
      year: "2024",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop",
      specs: ["3 Bedroom", "2 Bathroom", "1,850 sqft"],
      category: "Coastal Estate",
    },
  ];

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E2DDD2]">
      <div className="space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center space-x-2 text-[11px] font-mono tracking-[0.25em] text-[#5A7865] uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>THEATRICAL CINEMA & SPATIAL FILMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#161D1A] leading-tight tracking-tight">
              Where architecture <br />
              <span className="italic font-light text-[#6F7A74]">meets narrative poise.</span>
            </h2>
          </div>

          {/* Quick Mockup Spec Pill Cards (Matching Top Right of Screenshot) */}
          <div className="hidden lg:flex items-center space-x-4">
            {showcaseProperties.map((prop) => (
              <div
                key={prop.title}
                onClick={() => onPlayFilm(featuredVideo.videoUrl, prop.title)}
                className="group cursor-pointer p-3 rounded-2xl bg-[#FAF8F5] border border-[#E2DDD2] hover:border-[#161D1A] shadow-sm transition-all duration-300 w-56"
              >
                <div className="relative h-24 rounded-xl overflow-hidden mb-2.5 bg-[#182622]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={prop.image}
                    alt={prop.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-2 right-2 text-[9px] font-mono bg-black/60 backdrop-blur-sm text-white px-2 py-0.5 rounded-full">
                    {prop.year}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <h4 className="font-serif text-sm text-[#161D1A] font-medium group-hover:text-[#5A7865]">
                    {prop.title}
                  </h4>
                  <span className="text-[10px] font-mono text-[#5A7865]">Play ↗</span>
                </div>
                <div className="mt-1.5 flex items-center justify-between text-[10px] font-mono text-[#6F7A74] pt-1.5 border-t border-[#E2DDD2]/60">
                  {prop.specs.map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Large Master Cinematic Presentation Stage with Play Button */}
        <div className="relative aspect-[16/9] lg:aspect-[2.2/1] w-full rounded-[28px] sm:rounded-[36px] overflow-hidden bg-[#131F1C] border border-[#243631] shadow-2xl group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={featuredVideo.poster}
            alt={featuredVideo.title}
            className="w-full h-full object-cover filter contrast-[1.05] brightness-95 group-hover:scale-102 transition-transform duration-1000 ease-out"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" />

          {/* Centered Big Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={() => onPlayFilm(featuredVideo.videoUrl, featuredVideo.title)}
              aria-label={`Play featured film: ${featuredVideo.title}`}
              className="group/btn flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FAF8F5]/25 backdrop-blur-md border border-white/50 hover:bg-[#FAF8F5] hover:scale-110 transition-all duration-300 shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-[#5A7865]"
            >
              <Play className="w-7 h-7 sm:w-8 sm:h-8 text-[#FAF8F5] group-hover/btn:text-[#161D1A] fill-current ml-1 transition-colors" />
            </button>
          </div>

          {/* Bottom Metas & Description Overlay */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col md:flex-row md:items-end justify-between text-white gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#8CA394] uppercase block">
                Featured Theatrical Presentation
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">
                {featuredVideo.title}
              </h3>
              <p className="text-xs sm:text-sm text-white/80 font-sans max-w-xl line-clamp-2">
                {featuredVideo.description}
              </p>
            </div>

            {/* Spec Metrics from Mockup */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-white/90 shrink-0">
              {featuredVideo.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20"
                >
                  <spec.icon className="w-3.5 h-3.5 text-[#8CA394]" />
                  <span>{spec.label}</span>
                </div>
              ))}
              <button
                onClick={() => onPlayFilm(featuredVideo.videoUrl, featuredVideo.title)}
                className="px-4 py-1.5 rounded-full bg-[#5A7865] hover:bg-[#4E6E56] text-white font-semibold transition-colors"
              >
                Watch Master Reel
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

