"use client";

import React, { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SERVICES_DATA } from "@/data/services";
import { ServiceItem } from "@/types";
import {
  Film,
  Video,
  Share2,
  TrendingUp,
  Megaphone,
  Camera,
  Globe,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Search,
  X,
  Sparkles,
  Layers,
  ShieldCheck,
  ChevronRight,
  MessageSquare,
  Phone,
  ExternalLink
} from "lucide-react";

// Service icon helper
function getServiceIcon(id: string) {
  switch (id) {
    case "corporate-films":
      return <Film className="w-5 h-5 text-[#a89bfa]" />;
    case "documentary-films":
      return <Video className="w-5 h-5 text-[#a89bfa]" />;
    case "social-media-digital-marketing":
    case "social-media-management":
    case "digital-marketing":
      return <Share2 className="w-5 h-5 text-[#a89bfa]" />;
    case "election-campaign-services":
      return <Megaphone className="w-5 h-5 text-[#a89bfa]" />;
    case "photography-events":
      return <Camera className="w-5 h-5 text-[#a89bfa]" />;
    case "website-development":
      return <Globe className="w-5 h-5 text-[#a89bfa]" />;
    default:
      return <Layers className="w-5 h-5 text-[#a89bfa]" />;
  }
}

export default function ServicesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Filter services by search query
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return SERVICES_DATA;
    const q = searchQuery.toLowerCase();
    return SERVICES_DATA.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.tagline.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.deliverables.some((d) => d.toLowerCase().includes(q)) ||
        (s.techStack && s.techStack.some((t) => t.toLowerCase().includes(q)))
    );
  }, [searchQuery]);

  // Handle URL hash navigation on mount
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const hashId = window.location.hash.replace("#", "").replace("service-", "");
      const found = SERVICES_DATA.find((s) => s.id === hashId);
      if (found) {
        setSelectedService(found);
      }
    }
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
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-xs font-mono text-white/50 mb-6">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span className="text-[#a89bfa]">Core Services</span>
            </div>

            <div className="max-w-3xl space-y-5">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-[#a89bfa]">
                <Sparkles className="w-3.5 h-3.5 text-[#a89bfa]" />
                <span className="tracking-wider uppercase">End-to-End Media &amp; Digital Platform Capabilities</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.15]">
                Turn-key Media Production, Election Campaigns &amp;{" "}
                <span className="italic bg-gradient-to-r from-[#a89bfa] via-[#e5c665] to-white bg-clip-text text-transparent">
                  Web Development
                </span>
              </h1>

              <p className="text-base sm:text-lg text-white/70 font-sans leading-relaxed">
                From high-stakes assembly election broadcasts and cinema-grade corporate documentaries to ultra-fast Next.js web applications — click any capability below to explore its full workflow, technical gear, and dedicated deliverables.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/[0.08]">
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-white">17+</span>
                <p className="text-xs font-mono text-white/50 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#E6C665]">1,000+</span>
                <p className="text-xs font-mono text-white/50 uppercase tracking-wider">Films &amp; Projects</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#a89bfa]">45+</span>
                <p className="text-xs font-mono text-white/50 uppercase tracking-wider">Assembly Campaigns</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-white">90+</span>
                <p className="text-xs font-mono text-white/50 uppercase tracking-wider">Web Platforms Built</p>
              </div>
            </div>
          </div>
        </section>

        {/* Search & Sticky Bar */}
        <section className="py-6 bg-[#111016] border-b border-white/[0.06] sticky top-16 z-30 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs font-mono uppercase tracking-widest text-white/60">
              Showing <span className="text-[#a89bfa] font-bold">{filteredServices.length}</span> Capabilities
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services, deliverables, tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2 bg-white/[0.04] border border-white/[0.1] rounded-xl text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#a89bfa] transition-colors"
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
        </section>

        {/* Services Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Link
                key={service.id}
                id={`service-${service.id}`}
                href={`/services/${service.id}`}
                className="group relative bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#6b54ee]/15 flex flex-col justify-between"
              >
                <div>
                  {/* Thumbnail Banner with Play Overlay */}
                  <div className="relative aspect-video w-full bg-black/80 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover filter contrast-[1.05] brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#17161d] via-black/30 to-transparent" />

                    {/* Service Number Tag */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/80 backdrop-blur-md text-[#E6C665] border border-white/15">
                        {service.number}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white/90">
                      <div className="p-1.5 rounded-lg bg-black/70 backdrop-blur-md border border-white/10">
                        {getServiceIcon(service.id)}
                      </div>
                      <span className="text-xs font-mono tracking-wider text-white/80 uppercase">
                        {service.id === "website-development" ? "Digital Engineering" : "Media Production"}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-2xl font-serif text-white group-hover:text-[#a89bfa] transition-colors font-medium">
                        {service.title}
                      </h3>
                      <p className="text-xs font-mono text-[#E6C665] mt-1 line-clamp-1">
                        {service.tagline}
                      </p>
                    </div>

                    <p className="text-xs text-white/70 leading-relaxed font-sans line-clamp-3">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="space-y-1.5 pt-2">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-white/40">
                        Core Deliverables:
                      </div>
                      <ul className="space-y-1">
                        {service.deliverables.slice(0, 3).map((item, idx) => (
                          <li key={idx} className="flex items-start text-xs text-white/80 gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#a89bfa] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Pills */}
                    {service.techStack && (
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {service.techStack.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-white/60"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.techStack.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md bg-white/[0.04] text-[10px] font-mono text-[#a89bfa]">
                            +{service.techStack.length - 3} more
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="px-6 py-4 bg-white/[0.02] border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#a89bfa] group-hover:text-white flex items-center gap-1 transition-colors font-semibold">
                    <span>Explore Service &amp; Scope</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="text-center py-20 bg-[#17161d] rounded-2xl border border-white/[0.08] max-w-md mx-auto">
              <Search className="w-10 h-10 text-white/20 mx-auto mb-4" />
              <h3 className="text-lg font-serif text-white">No services found</h3>
              <p className="text-xs text-white/50 mt-1 mb-4">
                No services match your search query &quot;{searchQuery}&quot;.
              </p>
              <button
                onClick={() => setSearchQuery("")}
                className="px-4 py-2 rounded-xl bg-white/[0.1] hover:bg-white/[0.15] text-xs font-mono text-white"
              >
                Clear Search
              </button>
            </div>
          )}
        </section>

        {/* Global CTA Banner */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="relative rounded-3xl p-8 sm:p-12 overflow-hidden bg-gradient-to-br from-[#1b1928] via-[#121118] to-[#1e1733] border border-[#a89bfa]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-xl text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#6b54ee]/20 text-[#a89bfa] text-xs font-mono border border-[#6b54ee]/40">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Turnkey Execution with Zero Outsourcing</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif text-white font-medium">
                Need a Custom Package for Your Campaign or Brand?
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-sans leading-relaxed">
                Connect directly with our creative directors and technical leads in New Delhi. We deliver same-day custom proposals, location recces, and cost estimates.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full sm:w-auto">
              <Link
                href="/#kontakt"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-[#6b54ee] hover:bg-[#5842db] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-lg shadow-[#6b54ee]/25 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Project Proposal</span>
              </Link>
              <a
                href="https://wa.me/919711791403?text=Hello%20RFP%20Digital%20Productions%2C%20I%20am%20interested%20in%20discussing%20your%20services.%20Please%20connect%20with%20me."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-6 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Interactive Service Detail Drawer / Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-xl p-3 sm:p-6 overflow-y-auto"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#17161d] border border-white/[0.15] rounded-3xl overflow-hidden shadow-2xl my-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#121118]">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-black/60 text-[#E6C665] border border-white/10">
                  {selectedService.number}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-serif text-white font-medium">
                    {selectedService.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#a89bfa]">
                    {selectedService.tagline}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close modal"
                className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/[0.08] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 space-y-8 max-h-[75vh] overflow-y-auto">
              {/* Showcase Visual Spotlight */}
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider bg-black/80 backdrop-blur-md text-[#E6C665] border border-white/20">
                    Production Portfolio
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-xs font-serif italic text-white/90">
                    &ldquo;{selectedService.tagline}&rdquo;
                  </span>
                  <span className="text-[11px] font-mono text-white/80 bg-black/70 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10">
                    Verified Craft
                  </span>
                </div>
              </div>

              {/* Comprehensive Overview */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-widest text-[#a89bfa]">
                  Discipline Overview &amp; Philosophy
                </h4>
                <p className="text-sm sm:text-base text-white/80 leading-relaxed font-sans">
                  {selectedService.fullOverview || selectedService.description}
                </p>
              </div>

              {/* Stats Highlights */}
              {selectedService.stats && selectedService.stats.length > 0 && (
                <div className="grid grid-cols-3 gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  {selectedService.stats.map((stat, idx) => (
                    <div key={idx} className="text-center space-y-1">
                      <span className="text-xl sm:text-2xl font-serif font-bold text-[#E6C665]">
                        {stat.value}
                      </span>
                      <p className="text-[10px] sm:text-xs font-mono text-white/50 uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* Deliverables & Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Core Deliverables */}
                <div className="space-y-3 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#a89bfa]" />
                    <span>Deliverables Checklist</span>
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.deliverables.map((item, idx) => (
                      <li key={idx} className="text-xs text-white/80 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E6C665] mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Features */}
                {selectedService.features && (
                  <div className="space-y-3 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#E6C665]" />
                      <span>Production Capabilities</span>
                    </h4>
                    <ul className="space-y-2">
                      {selectedService.features.map((item, idx) => (
                        <li key={idx} className="text-xs text-white/80 flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#a89bfa] mt-1.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Technical Gear & Stack */}
              {selectedService.techStack && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#a89bfa]">
                    Technology, Rigs &amp; Gear Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 4-Step Production Workflow */}
              {selectedService.workflow && (
                <div className="space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-widest text-[#a89bfa]">
                    4-Stage Execution Blueprint
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {selectedService.workflow.map((w, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1.5"
                      >
                        <span className="text-xs font-mono font-bold text-[#E6C665]">
                          Stage {w.step}
                        </span>
                        <h5 className="text-sm font-serif text-white font-medium">{w.title}</h5>
                        <p className="text-[11px] text-white/60 leading-relaxed font-sans">{w.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="p-6 border-t border-white/[0.08] bg-[#121118] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Link
                  href="/#kontakt"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#6b54ee] hover:bg-[#5842db] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Discuss This Service</span>
                  <span>→</span>
                </Link>

                <a
                  href={`https://wa.me/919711791403?text=Hello%20RFP%20Digital%20Productions,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(
                    selectedService.title
                  )}%20services.%20Please%20share%20details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => setSelectedService(null)}
                className="text-xs font-mono text-white/40 hover:text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
