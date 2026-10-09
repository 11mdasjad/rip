"use client";

import React, { useState, useMemo, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SERVICES_DATA } from "@/data/services";
import { ServiceItem } from "@/types";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  ShieldCheck,
  Film,
  Video,
  Share2,
  TrendingUp,
  Megaphone,
  Camera,
  Globe,
  MessageSquare,
  Phone,
  ExternalLink,
  ChevronRight
} from "lucide-react";

// Helper for service icon
function getServiceIcon(id: string) {
  switch (id) {
    case "corporate-films":
      return <Film className="w-6 h-6 text-[#a89bfa]" />;
    case "documentary-films":
      return <Video className="w-6 h-6 text-[#a89bfa]" />;
    case "social-media-digital-marketing":
    case "social-media-management":
    case "digital-marketing":
      return <Share2 className="w-6 h-6 text-[#a89bfa]" />;
    case "election-campaign-services":
      return <Megaphone className="w-6 h-6 text-[#a89bfa]" />;
    case "photography-events":
      return <Camera className="w-6 h-6 text-[#a89bfa]" />;
    case "website-development":
      return <Globe className="w-6 h-6 text-[#a89bfa]" />;
    default:
      return <Layers className="w-6 h-6 text-[#a89bfa]" />;
  }
}

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);

  // Find service (with alias support for merged services)
  const service = useMemo(() => {
    const targetId =
      resolvedParams.id === "social-media-management" || resolvedParams.id === "digital-marketing"
        ? "social-media-digital-marketing"
        : resolvedParams.id;
    return SERVICES_DATA.find((s) => s.id === targetId);
  }, [resolvedParams.id]);

  if (!service) {
    notFound();
  }

  // Related services (next / previous / others)
  const otherServices = useMemo(() => {
    return SERVICES_DATA.filter((s) => s.id !== service.id);
  }, [service.id]);

  return (
    <div className="min-h-screen bg-[#0e0d12] text-[#f4f2f7] font-sans antialiased selection:bg-[#6b54ee] selection:text-white">
      {/* Global Header */}
      <Header />

      <main className="pt-28 pb-20">
        {/* Breadcrumbs & Hero Header */}
        <section className="relative py-12 sm:py-20 border-b border-white/[0.08] overflow-hidden">
          <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#6b54ee]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-96 h-96 bg-[#D4AF37]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-white/50 mb-8">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">
                <span>Services</span>
              </Link>
              <span>/</span>
              <span className="text-[#a89bfa]">{service.title}</span>
            </div>

            {/* Badge & Title */}
            <div className="max-w-4xl space-y-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.12] text-xs font-mono text-[#a89bfa]">
                <span className="px-2 py-0.5 rounded-md bg-[#6b54ee]/30 text-white font-bold">
                  {service.number}
                </span>
                <span className="text-[#E6C665]">✦</span>
                <span className="uppercase tracking-widest font-semibold">
                  {service.id === "website-development" ? "Digital Engineering" : "Media Discipline"}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.12]">
                {service.title}
              </h1>

              <p className="text-lg sm:text-2xl font-serif italic text-[#E6C665] leading-relaxed">
                &ldquo;{service.tagline}&rdquo;
              </p>

              <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed max-w-3xl pt-2">
                {service.description}
              </p>
            </div>

            {/* Top Quick Stats */}
            {service.stats && service.stats.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mt-10 pt-8 border-t border-white/[0.08]">
                {service.stats.map((stat, idx) => (
                  <div key={idx} className="space-y-1">
                    <span className="text-2xl sm:text-3xl font-serif font-bold text-white">
                      {stat.value}
                    </span>
                    <p className="text-xs font-mono text-[#a89bfa] uppercase tracking-wider">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Production Showcase & Visual Craft Spotlight */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-mono text-[#a89bfa] uppercase tracking-widest mb-1.5 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#E6C665]" />
                <span>RFP Production Showcase</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                Visual Craft &amp; Field Execution
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-white/70 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#E6C665] animate-pulse" />
                <span>Active Discipline • #{service.number}</span>
              </div>
            </div>
          </div>

          {/* Production Showcase Frame */}
          <div className="relative w-full rounded-3xl overflow-hidden bg-[#17161d] border border-white/[0.12] shadow-2xl">
            <div
              className={`relative ${
                service.id === "website-development"
                  ? "aspect-[16/10]"
                  : "aspect-video sm:aspect-[21/9]"
              } w-full bg-black/90 overflow-hidden group`}
            >
              <img
                src={service.image}
                alt={service.title}
                className={`w-full h-full ${
                  service.id === "website-development"
                    ? "object-contain bg-[#06080e]"
                    : "object-cover"
                } filter contrast-[1.03] brightness-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E6C665] block mb-1">
                    Field Execution • {service.title}
                  </span>
                  <p className="text-sm sm:text-base text-white/90 font-serif italic">
                    &ldquo;{service.tagline}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-xs font-mono text-white/80 border border-white/10">
                    Verified Production
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deep-Dive Overview & Deliverables Section */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 cols: Philosophy & Capabilities */}
            <div className="lg:col-span-7 space-y-10">
              <div className="space-y-4">
                <div className="text-xs font-mono text-[#a89bfa] uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#a89bfa]" />
                  <span>Strategic Approach &amp; Capabilities</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                  How We Engineer Success for {service.title}
                </h3>
                <p className="text-base text-white/80 leading-relaxed font-sans pt-2">
                  {service.fullOverview || service.description}
                </p>
              </div>

              {/* Key Features / Highlight points */}
              {service.features && (
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-white font-semibold">
                    Core Technical &amp; Operational Highlights:
                  </h4>
                  <div className="grid grid-cols-1 gap-3">
                    {service.features.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-[#17161d] border border-white/[0.08] flex items-start gap-3.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#E6C665] shrink-0 mt-0.5" />
                        <span className="text-sm text-white/85 leading-relaxed font-sans">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technology & Gear Stack */}
              {service.techStack && (
                <div className="space-y-4 pt-2">
                  <h4 className="text-sm font-mono uppercase tracking-wider text-[#a89bfa] font-semibold">
                    Production Gear, Rigs &amp; Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {service.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3.5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right 5 cols: Deliverables Checklist Card */}
            <div className="lg:col-span-5 space-y-8 sticky top-28">
              <div className="p-7 rounded-3xl bg-[#17161d] border border-white/[0.12] shadow-2xl space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2.5">
                    {getServiceIcon(service.id)}
                    <span className="text-xs font-mono uppercase tracking-widest text-white/60">
                      Deliverables Checklist
                    </span>
                  </div>
                  <span className="text-xs font-mono text-[#E6C665] font-bold">
                    {service.deliverables.length} Items Included
                  </span>
                </div>

                <ul className="space-y-3.5">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-white/90">
                      <div className="w-5 h-5 rounded-full bg-[#6b54ee]/20 text-[#a89bfa] flex items-center justify-center shrink-0 mt-0.5 border border-[#6b54ee]/30">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#a89bfa]" />
                      </div>
                      <span className="font-sans leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Direct Action Card */}
                <div className="pt-6 border-t border-white/[0.08] space-y-3">
                  <Link
                    href="/#kontakt"
                    className="w-full text-center px-6 py-3.5 rounded-xl bg-[#6b54ee] hover:bg-[#5842db] text-white text-xs font-mono uppercase tracking-wider font-semibold transition-all shadow-lg shadow-[#6b54ee]/25 flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Discuss This Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <a
                    href={`https://wa.me/919711791403?text=Hello%20RFP%20Digital%20Productions,%20I%20would%20like%20to%20discuss%20${encodeURIComponent(
                      service.title
                    )}%20services.%20Please%20share%20details.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center px-6 py-3 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/40 text-xs font-mono uppercase tracking-wider font-semibold transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>WhatsApp Inquiry</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Stage Execution Workflow */}
        {service.workflow && (
          <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
            <div className="max-w-2xl mb-12">
              <div className="text-xs font-mono text-[#a89bfa] uppercase tracking-widest mb-2">
                Turnkey Process
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                4-Stage Execution Blueprint
              </h3>
              <p className="text-xs sm:text-sm text-white/60 font-sans mt-2">
                Our disciplined roadmap from strategic ideation to flawless delivery and campaign deployment.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.workflow.map((w, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/40 transition-all duration-300 space-y-3 relative group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#E6C665]">
                      Stage {w.step}
                    </span>
                    <span className="text-xs font-mono text-white/20 group-hover:text-[#a89bfa] transition-colors">
                      0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-lg font-serif text-white font-medium">{w.title}</h4>
                  <p className="text-xs text-white/65 leading-relaxed font-sans">{w.desc}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Explore Other Services Grid */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-mono text-[#a89bfa] uppercase tracking-widest mb-1.5">
                Explore More
              </div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                Other Capabilities &amp; Disciplines
              </h3>
            </div>
            <Link
              href="/services"
              className="text-xs font-mono text-[#E6C665] hover:underline flex items-center gap-1 font-semibold"
            >
              <span>View All 7 Services</span>
              <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.slice(0, 3).map((item) => (
              <Link
                key={item.id}
                href={`/services/${item.id}`}
                className="group block rounded-2xl bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/50 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#6b54ee]/10"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#E6C665]">
                    {item.number}
                  </span>
                  <div className="p-1 rounded-lg bg-black/40 border border-white/10">
                    {getServiceIcon(item.id)}
                  </div>
                </div>
                <h4 className="text-xl font-serif text-white group-hover:text-[#a89bfa] transition-colors font-medium">
                  {item.title}
                </h4>
                <p className="text-xs font-mono text-white/50 mt-1 line-clamp-1">
                  {item.tagline}
                </p>
                <p className="text-xs text-white/70 line-clamp-2 mt-2 font-sans">
                  {item.description}
                </p>
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-[#a89bfa] group-hover:text-white transition-colors">
                  <span>Explore Service Page</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
