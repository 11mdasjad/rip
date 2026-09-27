"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useData } from "@/context/DataContext";
import { GalleryCategory } from "@/types/gallery";
import { 
  Sparkles, 
  Search, 
  ArrowUpRight, 
  Filter, 
  Film, 
  Layers, 
  Tv, 
  Camera, 
  SlidersHorizontal,
  ImageIcon,
  Maximize2
} from "lucide-react";

const CATEGORIES: GalleryCategory[] = [
  "All",
  "Cinema & Film",
  "AI & Generative",
  "3D & VFX",
  "Commercials",
  "Behind The Scenes",
];

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  "All": <Layers className="w-3.5 h-3.5" />,
  "Cinema & Film": <Film className="w-3.5 h-3.5" />,
  "AI & Generative": <Sparkles className="w-3.5 h-3.5" />,
  "3D & VFX": <SlidersHorizontal className="w-3.5 h-3.5" />,
  "Commercials": <Tv className="w-3.5 h-3.5" />,
  "Behind The Scenes": <Camera className="w-3.5 h-3.5" />,
};

export default function GalleryPage() {
  const { galleryItems } = useData();
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter items based on category and search query
  const filteredItems = useMemo(() => {
    return galleryItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.client?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tools?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [galleryItems, selectedCategory, searchQuery]);

  // Counts by category
  const counts = useMemo(() => {
    const map: Record<string, number> = { All: galleryItems.length };
    CATEGORIES.slice(1).forEach((cat) => {
      map[cat] = galleryItems.filter((i) => i.category === cat).length;
    });
    return map;
  }, [galleryItems]);

  return (
    <main className="relative min-h-screen bg-[#0e0d12] text-[#f4f2f7] font-sans antialiased selection:bg-[#6b54ee] selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Hero Header Section */}
      <section className="relative pt-32 pb-14 sm:pt-40 sm:pb-20 overflow-hidden border-b border-white/[0.08]">
        {/* Ambient Gradient Background Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#7c6af2]/20 via-[#a89bfa]/10 to-transparent blur-[140px] pointer-events-none rounded-full" />
        <div className="absolute -top-10 right-10 w-96 h-96 bg-[#D4AF37]/10 blur-[130px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] mb-4">
                <ImageIcon className="w-3.5 h-3.5 text-[#E6C665]" />
                <span>Visual Arts & Image Archive</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
                Stills, Renders & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-[#a89bfa]">
                  Cinematic Photography
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-white/70 font-light leading-relaxed max-w-2xl">
                Explore high-resolution production stills, photorealistic 3D renders, AI synthesized imagery, and behind-the-scenes captures. Click any work to explore full resolution details.
              </p>
            </div>

            {/* Quick Stats Counter */}
            <div className="flex items-center gap-6 sm:gap-8 pt-4 md:pt-0 border-t md:border-t-0 border-white/[0.08]">
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                  {galleryItems.length}
                </div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider mt-1">
                  Works Published
                </div>
              </div>
              <div className="h-10 w-px bg-white/[0.1]" />
              <div>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#a89bfa] font-mono">
                  4K / 8K
                </div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider mt-1">
                  Master Fidelity
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="pt-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const count = counts[cat] || 0;
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                      isSelected
                        ? "bg-white text-[#0e0d12] shadow-lg shadow-white/10 font-bold scale-[1.02]"
                        : "bg-white/[0.04] text-white/70 hover:bg-white/[0.08] hover:text-white border border-white/[0.06]"
                    }`}
                  >
                    <span>{CATEGORY_ICONS[cat]}</span>
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                        isSelected
                          ? "bg-black/20 text-[#0e0d12]"
                          : "bg-white/[0.08] text-white/50"
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Instant Search Bar */}
            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search images, tools, clients..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#a89bfa] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Cards Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredItems.length === 0 ? (
          <div className="py-24 text-center border border-dashed border-white/[0.1] rounded-3xl bg-white/[0.01]">
            <Filter className="w-12 h-12 text-white/30 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">No matching gallery items found</h3>
            <p className="text-sm text-white/60 max-w-md mx-auto mb-6">
              Try adjusting your category filter or search keywords.
            </p>
            <div className="flex items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-xs font-semibold text-white transition-all"
              >
                Reset Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="group relative flex flex-col rounded-2xl bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#7c6af2]/10 overflow-hidden"
              >
                {/* Media Container with Click to Navigate */}
                <Link
                  href={`/gallery/${item.id}`}
                  className="relative aspect-[16/10] w-full overflow-hidden bg-black/40 block"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17161d] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

                  {/* Category Pill Top Left */}
                  <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/60 backdrop-blur-md text-[#a89bfa] border border-white/[0.15] shadow-sm">
                      {item.category}
                    </span>
                    {item.featured && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-[#D4AF37]/20 text-[#E6C665] border border-[#D4AF37]/40">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Stills Count / Year Top Right */}
                  <div className="absolute top-3.5 right-3.5 flex items-center gap-1.5">
                    {item.stills && item.stills.length > 1 && (
                      <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-black/70 backdrop-blur-md text-[#a89bfa] border border-[#a89bfa]/30 flex items-center gap-1">
                        <ImageIcon className="w-3 h-3" />
                        <span>{item.stills.length}</span>
                      </span>
                    )}
                    <span className="px-2 py-1 rounded-md text-[10px] font-mono bg-black/60 backdrop-blur-md text-white/70 border border-white/[0.1]">
                      {item.year}
                    </span>
                  </div>

                  {/* Hover Quick Zoom Cue */}
                  <div className="absolute bottom-3.5 right-3.5 w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all">
                    <Maximize2 className="w-4 h-4 text-[#a89bfa]" />
                  </div>
                </Link>

                {/* Content Section */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {item.client && (
                      <div className="text-[11px] font-mono tracking-widest text-white/40 uppercase mb-1">
                        {item.client}
                      </div>
                    )}

                    <h2 className="text-lg font-bold text-white group-hover:text-[#a89bfa] transition-colors leading-snug mb-2 line-clamp-1">
                      <Link href={`/gallery/${item.id}`}>{item.title}</Link>
                    </h2>

                    <p className="text-xs text-white/70 leading-relaxed line-clamp-2 mb-4 font-light">
                      {item.summary}
                    </p>
                  </div>

                  {/* Tags and Action Bar */}
                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                      {(item.tools || []).slice(0, 2).map((tool, idx) => (
                        <span
                          key={idx}
                          className="text-[9.5px] font-mono text-white/50 bg-white/[0.04] px-2 py-0.5 rounded border border-white/[0.06]"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/gallery/${item.id}`}
                      className="inline-flex items-center space-x-1 text-xs font-semibold text-[#a89bfa] group-hover:text-white group-hover:translate-x-0.5 transition-all"
                    >
                      <span>View Stills</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}
