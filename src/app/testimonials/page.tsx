"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VideoModal } from "@/components/modals/VideoModal";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { TestimonialItem } from "@/types";
import {
  Quote,
  Sparkles,
  ArrowLeft,
  X,
  Play,
  Star,
  CheckCircle2,
  ShieldCheck,
  Building,
  Calendar,
  Layers,
  BarChart3,
  Search,
  ArrowUpRight
} from "lucide-react";

function InstagramIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedTestimonial, setSelectedTestimonial] = useState<TestimonialItem | null>(null);
  const [activeVideo, setActiveVideo] = useState<{
    isOpen: boolean;
    url?: string;
    title?: string;
    subtitle?: string;
  }>({
    isOpen: false,
    url: "",
    title: "",
    subtitle: "",
  });

  const categories = [
    "All",
    "Election Campaign & Outreach",
    "Institutional Cinema",
    "Academic Documentary",
    "Documentary Film",
    "Corporate Brand Film",
    "Integrated Digital Campaign"
  ];

  const filteredTestimonials = useMemo(() => {
    return TESTIMONIALS_DATA.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.projectCategory === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.quote.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.projectCategory && item.projectCategory.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured Video Testimonials (Including Ajeet Sharma, MDPS, and Neha Sharma Reel)
  const featuredVideoTestimonials = useMemo(() => {
    return TESTIMONIALS_DATA.filter((t) =>
      t.id === "testimonial-mla-ajeet-sharma" ||
      t.id === "testimonial-mdps" ||
      t.id === "testimonial-neha-sharma" ||
      t.id === "testimonial-grassroots"
    );
  }, []);
  return (
    <div className="min-h-screen bg-[#0e0d12] text-[#f4f2f7] font-sans antialiased selection:bg-[#6b54ee] selection:text-white">
      {/* Global Header */}
      <Header />

      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 sm:py-24 overflow-hidden border-b border-white/[0.08]">
          <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#6b54ee]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumbs */}
            <div className="flex items-center space-x-2 text-xs font-mono text-white/50 mb-6">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span className="text-[#a89bfa]">Client Endorsements</span>
            </div>

            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-[#a89bfa]">
                <Quote className="w-3.5 h-3.5 text-[#a89bfa]" />
                <span className="tracking-wider uppercase">Verified Stakeholder &amp; Client Testimonials</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white font-medium tracking-tight leading-[1.12]">
                Proven Impact in the Words of Leaders Who Trusted Us
              </h1>

              <p className="text-base sm:text-lg text-white/70 leading-relaxed font-sans font-light">
                From Vidhan Sabha election campaign managers and University of Delhi leadership to national cultural archives and enterprise founders—read how our cinematic storytelling and on-ground execution deliver measurable prestige.
              </p>
            </div>

            {/* Credibility Counters */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">100%</div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Client Retention</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#E6C665] tracking-tight">5.0 / 5.0</div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Stakeholder Rating</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-[#a89bfa] tracking-tight">350K+</div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Voters Mobilized</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">17+ Years</div>
                <div className="text-xs font-mono text-white/50 uppercase tracking-wider">Delhi NCR Legacy</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Video Testimonials Section (Drive Videos with Official Thumbnails) */}
        {featuredVideoTestimonials.length > 0 && (
          <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
              <div>
                <div className="text-xs font-mono text-[#a89bfa] uppercase tracking-widest mb-1.5 flex items-center gap-1.5">
                  <Play className="w-3.5 h-3.5 fill-current text-[#a89bfa]" />
                  <span>On-Camera Endorsements</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                  Watch Leaders &amp; Stakeholders Speak on Video
                </h2>
              </div>
              <p className="text-xs text-white/50 font-sans max-w-md">
                Direct video testimonials recorded on location — featuring elected representatives, educational leadership, and on-ground citizen voices.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredVideoTestimonials.map((item) => (
                <div
                  key={item.id}
                  className="group relative rounded-2xl bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#6b54ee]/15 flex flex-col justify-between"
                >
                  {/* 16:9 Thumbnail Stage */}
                  <div className="relative aspect-video w-full bg-black/90 overflow-hidden">
                    <img
                      src={item.videoThumbnail || item.clientAvatar}
                      alt={item.clientName}
                      className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />

                    {/* Play Button Trigger */}
                    <button
                      onClick={() =>
                        setActiveVideo({
                          isOpen: true,
                          url: item.videoUrl,
                          title: item.clientName,
                          subtitle: `${item.role} · ${item.organization}`,
                        })
                      }
                      className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-[#6b54ee] hover:bg-[#5842db] text-white flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 active:scale-95"
                      aria-label={`Play video testimonial for ${item.clientName}`}
                    >
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </button>

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#a89bfa] border border-white/20">
                        Video Testimonial
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-1 text-[#E6C665]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <h3 className="text-xl font-serif text-white font-medium group-hover:text-[#a89bfa] transition-colors">
                      {item.clientName}
                    </h3>
                    <p className="text-xs font-mono text-[#E6C665]">
                      {item.role} · {item.organization}
                    </p>
                    <p className="text-xs text-white/70 line-clamp-2 italic font-serif">
                      &ldquo;{item.quote}&rdquo;
                    </p>

                    <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
                      <button
                        onClick={() => setSelectedTestimonial(item)}
                        className="text-xs font-mono text-[#a89bfa] hover:text-white flex items-center gap-1 group-hover:underline"
                      >
                        <span>Full Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                      <div className="flex items-center gap-2.5">
                        <button
                          onClick={() =>
                            setActiveVideo({
                              isOpen: true,
                              url: item.videoUrl,
                              title: item.clientName,
                              subtitle: `${item.role} · ${item.organization}`,
                            })
                          }
                          className="text-xs font-mono text-white/80 hover:text-white flex items-center gap-1.5 bg-white/[0.06] hover:bg-white/[0.12] px-3 py-1.5 rounded-lg transition-colors font-semibold"
                        >
                          <Play className="w-3 h-3 fill-current text-[#a89bfa]" />
                          <span>Play</span>
                        </button>
                        {item.youtubeUrl && (
                          <a
                            href={item.youtubeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-red-400 hover:text-red-300 flex items-center gap-1 bg-red-500/10 hover:bg-red-500/20 px-2.5 py-1.5 rounded-lg transition-colors font-semibold"
                            title="Open directly on YouTube"
                          >
                            <span>YouTube ↗</span>
                          </a>
                        )}
                        {(item.instagramUrl || (item.videoUrl && item.videoUrl.includes("instagram.com"))) && (
                          <a
                            href={item.instagramUrl || item.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono text-pink-400 hover:text-pink-300 flex items-center gap-1 bg-pink-500/10 hover:bg-pink-500/20 px-2.5 py-1.5 rounded-lg transition-colors font-semibold"
                            title="Open directly on Instagram"
                          >
                            <InstagramIcon className="w-3 h-3" />
                            <span>Instagram ↗</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
        {/* Filter and Search Bar */}
        <section className="py-8 bg-[#111016] border-b border-white/[0.06] sticky top-16 z-30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              {/* Category Pills */}
              <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-xl transition-all whitespace-nowrap ${
                        isActive
                          ? "bg-[#6b54ee] text-white font-semibold shadow-lg shadow-[#6b54ee]/25 border border-[#a89bfa]/40"
                          : "text-white/60 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06]"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>

              {/* Search */}
              <div className="relative min-w-[260px]">
                <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search reviews by client or organization..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/[0.04] border border-white/[0.1] rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#a89bfa] transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Masonry / Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredTestimonials.length === 0 ? (
            <div className="py-20 text-center border border-dashed border-white/[0.1] rounded-3xl bg-white/[0.02]">
              <Quote className="w-12 h-12 text-white/30 mx-auto mb-4" />
              <h3 className="text-xl font-serif text-white mb-2">No matching client stories</h3>
              <p className="text-xs text-white/50 max-w-sm mx-auto mb-6">
                Try selecting &ldquo;All&rdquo; or clearing your search keywords.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-4 py-2 rounded-xl bg-white/[0.1] hover:bg-white/[0.15] text-xs font-mono text-white transition-all"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedTestimonial(item)}
                  className="group relative bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/50 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:shadow-[#6b54ee]/15 flex flex-col justify-between cursor-pointer"
                >
                  <div className="space-y-4">
                    {/* Header meta */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-1 text-[#E6C665]">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>

                      {item.verified && (
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-[#D4AF37]/15 text-[#E6C665] border border-[#D4AF37]/30 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-[#E6C665]" />
                          <span>Verified</span>
                        </span>
                      )}
                    </div>

                    {/* Project Category Tag */}
                    {item.projectCategory && (
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.05] text-[#a89bfa] border border-white/[0.08]">
                          {item.projectCategory}
                        </span>
                      </div>
                    )}

                    {/* Quote */}
                    <blockquote className="text-sm sm:text-base font-serif italic text-white/90 leading-relaxed pt-1">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>

                    {/* Stats pills if any */}
                    {item.stats && item.stats.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06]">
                        {item.stats.slice(0, 2).map((st, idx) => (
                          <div key={idx} className="bg-black/30 p-2 rounded-lg border border-white/[0.04]">
                            <div className="text-[10px] font-mono text-white/40">{st.label}</div>
                            <div className="text-xs font-mono font-bold text-white">{st.value}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Client Signature */}
                  <div className="pt-6 mt-6 border-t border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {item.clientAvatar && (
                        <img
                          src={item.clientAvatar}
                          alt={item.clientName}
                          className="w-10 h-10 rounded-full object-cover border border-white/[0.15]"
                        />
                      )}
                      <div>
                        <div className="text-sm font-serif font-medium text-white group-hover:text-[#a89bfa] transition-colors">
                          {item.clientName}
                        </div>
                        <div className="text-[11px] font-sans text-white/50 line-clamp-1">
                          {item.role} · {item.organization}
                        </div>
                      </div>
                    </div>

                    <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#a89bfa] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* Interactive Detail Modal */}
      {selectedTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-3xl bg-[#17161d] border border-white/[0.15] rounded-3xl p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/[0.06] hover:bg-white/[0.15] text-white/70 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-8">
              {/* Header */}
              <div className="flex items-start gap-4">
                {selectedTestimonial.clientAvatar && (
                  <img
                    src={selectedTestimonial.clientAvatar}
                    alt={selectedTestimonial.clientName}
                    className="w-16 h-16 rounded-2xl object-cover border border-white/[0.15]"
                  />
                )}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                      {selectedTestimonial.clientName}
                    </h2>
                    {selectedTestimonial.verified && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-mono uppercase bg-[#D4AF37]/15 text-[#E6C665] border border-[#D4AF37]/30">
                        Verified Client
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-[#E6C665]">
                    {selectedTestimonial.role} · {selectedTestimonial.organization}
                  </p>
                  <div className="flex items-center gap-3 text-xs font-mono text-white/40 pt-1">
                    {selectedTestimonial.projectCategory && (
                      <span>Discipline: {selectedTestimonial.projectCategory}</span>
                    )}
                    {selectedTestimonial.year && <span>· Year: {selectedTestimonial.year}</span>}
                  </div>
                </div>
              </div>

              {/* Quote Highlight */}
              <div className="p-6 rounded-2xl bg-[#6b54ee]/10 border border-[#6b54ee]/20 relative">
                <Quote className="w-8 h-8 text-[#a89bfa]/30 absolute top-4 right-4" />
                <blockquote className="text-base sm:text-lg font-serif italic text-white leading-relaxed">
                  &ldquo;{selectedTestimonial.quote}&rdquo;
                </blockquote>
              </div>

              {/* Full Case Narrative */}
              {selectedTestimonial.fullReview && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">
                    Comprehensive Case Review
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                    {selectedTestimonial.fullReview}
                  </p>
                </div>
              )}

              {/* Metrics / Stats */}
              {selectedTestimonial.stats && selectedTestimonial.stats.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">
                    Verified Campaign Outcomes
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedTestimonial.stats.map((st, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-black/40 border border-white/[0.08]">
                        <div className="text-[11px] font-mono text-white/50">{st.label}</div>
                        <div className="text-lg font-serif font-bold text-[#E6C665] mt-0.5">{st.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Challenges Solved */}
              {selectedTestimonial.challengesSolved && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">
                    Key Production Challenges Solved by RFP Digital
                  </h4>
                  <ul className="space-y-2">
                    {selectedTestimonial.challengesSolved.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-white/80">
                        <CheckCircle2 className="w-4 h-4 text-[#a89bfa] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Deliverables */}
              {selectedTestimonial.keyDeliverables && (
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-white/40">
                    Delivered Assets
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTestimonial.keyDeliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Footer Actions */}
              <div className="pt-6 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-4">
                {selectedTestimonial.videoUrl ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => {
                        const v = selectedTestimonial;
                        setSelectedTestimonial(null);
                        setActiveVideo({
                          isOpen: true,
                          url: v.videoUrl,
                          title: v.clientName,
                          subtitle: `${v.role} · ${v.organization}`,
                        });
                      }}
                      className="px-5 py-2.5 rounded-xl bg-white/[0.08] hover:bg-white/[0.15] text-white text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all font-semibold"
                    >
                      <Play className="w-3.5 h-3.5 fill-current text-[#a89bfa]" />
                      <span>Watch Video</span>
                    </button>
                    {selectedTestimonial.youtubeUrl && (
                      <a
                        href={selectedTestimonial.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-red-600/90 hover:bg-red-600 text-white text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all font-semibold shadow-md"
                        title="Open directly on YouTube"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>YouTube ↗</span>
                      </a>
                    )}
                    {(selectedTestimonial.instagramUrl || (selectedTestimonial.videoUrl && selectedTestimonial.videoUrl.includes("instagram.com"))) && (
                      <a
                        href={selectedTestimonial.instagramUrl || selectedTestimonial.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] hover:opacity-90 text-white text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all font-semibold shadow-md shadow-pink-600/20"
                        title="Open directly on Instagram"
                      >
                        <InstagramIcon className="w-3.5 h-3.5" />
                        <span>Instagram ↗</span>
                      </a>
                    )}
                  </div>
                ) : (
                  <div />
                )}

                <div className="flex items-center gap-3">
                  <Link
                    href="/#kontakt"
                    onClick={() => setSelectedTestimonial(null)}
                    className="px-5 py-2.5 rounded-xl bg-[#6b54ee] hover:bg-[#5842db] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5"
                  >
                    <span>Discuss Similar Project</span>
                    <span>→</span>
                  </Link>
                  <button
                    onClick={() => setSelectedTestimonial(null)}
                    className="text-xs font-mono text-white/40 hover:text-white"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal Player */}
      <VideoModal
        isOpen={activeVideo.isOpen}
        onClose={() => setActiveVideo((prev) => ({ ...prev, isOpen: false }))}
        videoUrl={activeVideo.url}
        title={activeVideo.title}
        subtitle={activeVideo.subtitle}
      />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
