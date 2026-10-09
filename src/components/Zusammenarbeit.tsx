"use client";

import React from "react";
import Link from "next/link";
import {
  Film,
  Megaphone,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Target,
  Compass,
  Award,
  Globe,
  Clock,
  ShieldCheck,
  Video,
  Layers
} from "lucide-react";

export const Zusammenarbeit: React.FC = () => {
  const whyChooseUs = [
    {
      title: "17+ Years Industry Experience",
      desc: "Proven legacy in high-stakes media production and mass visual communication since 2007.",
      icon: Award
    },
    {
      title: "End-to-End Production Services",
      desc: "Comprehensive pipeline under one roof, from scriptwriting and concept to final color-graded delivery.",
      icon: Layers
    },
    {
      title: "CSR, NGO & Government Expertise",
      desc: "Extensive track record across institutional, educational, and public sector projects with authentic storytelling.",
      icon: ShieldCheck
    },
    {
      title: "Pan-India Execution Capability",
      desc: "Rapid deployment and logistical management across diverse states, rural constituencies, and metro hubs.",
      icon: Globe
    },
    {
      title: "Broadcast-Quality Craft",
      desc: "Professional cinema camera bodies, wireless audio, mobile lighting setups, and calibrated post-production.",
      icon: Video
    },
    {
      title: "Impact-Focused Storytelling",
      desc: "Emotionally compelling narratives engineered to influence stakeholders, donors, policymakers, and voters.",
      icon: Target
    },
    {
      title: "Commitment to Timely Delivery",
      desc: "Structured milestone management and quality assurance to meet tight campaign and broadcast deadlines.",
      icon: Clock
    }
  ];

  return (
    <section
      id="zusammenarbeit"
      className="w-full bg-white text-[#0e0d12] py-20 lg:py-28 relative overflow-hidden border-t border-[#0e0d12]/10"
    >
      {/* Background Subtle Accent Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#6b54ee]/[0.03] blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/[0.04] blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Header & Brand Identity - Centered & Expansive */}
        <div className="text-center max-w-5xl mx-auto mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#B8860B]/10 border border-[#B8860B]/30 text-[#855B04] text-xs font-mono uppercase tracking-widest mb-5 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#855B04]" />
            <span>About RFP Digital Productions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold tracking-tight text-[#0e0d12] mb-6 leading-[1.14]">
            Full-Service Video Production, Media &amp;{" "}
            <span className="bg-gradient-to-r from-[#855B04] via-[#B8860B] to-[#D4AF37] bg-clip-text text-transparent block sm:inline">
              Election Campaign Management
            </span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg lg:text-[19px] text-[#0e0d12]/85 leading-relaxed font-sans max-w-4xl mx-auto">
            <p>
              <strong className="text-[#0e0d12] font-semibold">RFP Digital Productions</strong> is a comprehensive Video Production, Media, and Election Management company providing creative, communication, and campaign solutions for political organizations, candidates, public representatives, businesses, institutions, and brands.
            </p>
            <p className="text-sm sm:text-base text-[#0e0d12]/70 max-w-3xl mx-auto">
              With a strong understanding of visual storytelling, mass communication, digital media, and on-ground campaign operations, RFP Digital Productions helps clients communicate their message effectively across traditional, digital, and field-level platforms.
            </p>
          </div>

          {/* Motto Pill Banner - Centered & Balanced */}
          <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-[#faf9fc] border border-[#B8860B]/30 max-w-4xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 text-center md:text-left shadow-md">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#855B04] font-bold block mb-1">
                Our Operating Philosophy
              </span>
              <p className="text-base sm:text-lg text-[#0e0d12] font-semibold italic font-serif">
                &ldquo;From ideas to execution — we create, communicate, and manage.&rdquo;
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 text-xs font-mono text-[#0e0d12]/80 font-medium">
              <span className="px-3 py-1.5 rounded-xl bg-white border border-[#0e0d12]/10 shadow-xs">Video Production</span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-[#0e0d12]/10 shadow-xs">Digital Media</span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-[#0e0d12]/10 shadow-xs">Election Management</span>
              <span className="px-3 py-1.5 rounded-xl bg-white border border-[#0e0d12]/10 shadow-xs">Campaign Communication</span>
            </div>
          </div>
        </div>

        {/* 2. Two Core Operational Pillars (Bento Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 lg:mb-20">
          {/* Card 1: Video Production & Media */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#faf9fd] border border-[#0e0d12]/10 hover:border-[#6b54ee]/60 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#0e0d12]/10 flex items-center justify-center text-[#6b54ee] group-hover:bg-[#6b54ee] group-hover:text-white transition-all shadow-sm">
                  <Film className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#6b54ee] px-3 py-1 rounded-full bg-white border border-[#6b54ee]/20 font-bold shadow-xs">
                  Core Discipline
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#0e0d12] font-bold mb-3 group-hover:text-[#6b54ee] transition-colors">
                Video Production &amp; Media
              </h3>

              <p className="text-sm sm:text-base text-[#0e0d12]/75 leading-relaxed mb-6 font-sans">
                RFP Digital Productions offers end-to-end video production services, from concept development and scripting to production, post-production, animation, graphics, and digital distribution.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#0e0d12]/10">
                <div className="flex items-center gap-2 text-xs text-[#0e0d12]/85 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#6b54ee] shrink-0" />
                  <span>Flagship Corporate Documentaries &amp; Institutional Profiles</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0e0d12]/85 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#6b54ee] shrink-0" />
                  <span>Educational, University &amp; Research Showcase Films</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0e0d12]/85 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#6b54ee] shrink-0" />
                  <span>Multi-Camera High-Definition Summit &amp; Expo Streaming</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0e0d12]/85 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#6b54ee] shrink-0" />
                  <span>Cinematic Motion Graphics, Sound Design &amp; Digital Cuts</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#0e0d12]/10">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#6b54ee] hover:text-[#503bcf] font-bold transition-colors group/link"
              >
                <span>Explore Media Services</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Election Management & Campaign Solutions */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#fdfbf7] border border-[#B8860B]/30 hover:border-[#B8860B]/80 transition-all duration-300 flex flex-col justify-between group shadow-md hover:shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white border border-[#B8860B]/30 flex items-center justify-center text-[#855B04] group-hover:bg-[#B8860B] group-hover:text-white transition-all shadow-sm">
                  <Megaphone className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#855B04] px-3 py-1 rounded-full bg-white border border-[#B8860B]/30 font-bold shadow-xs">
                  Field &amp; Digital Engine
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-[#0e0d12] font-bold mb-3 group-hover:text-[#855B04] transition-colors">
                Election Management &amp; Campaigns
              </h3>

              <p className="text-sm sm:text-base text-[#0e0d12]/75 leading-relaxed mb-6 font-sans">
                RFP Digital Productions also provides end-to-end election management and campaign communication services, supporting candidates and political organizations with structured campaign planning, media production, digital communication, and field-level execution.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-[#0e0d12]/10">
                <div className="flex items-center gap-2 text-xs text-[#0e0d12]/85 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#855B04] shrink-0" />
                  <span>GPS-Tracked Mobile LED Display Van Fleets across Constituencies</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0e0d12]/85 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#855B04] shrink-0" />
                  <span>Studio-Composed Original Prachar Songs &amp; Campaign Jingles</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0e0d12]/85 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#855B04] shrink-0" />
                  <span>Grassroots Nukkad Natak (Street Theatre) Troupe Deployment</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#0e0d12]/85 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#855B04] shrink-0" />
                  <span>24/7 Election Media War Room, Digital Broadcast &amp; WhatsApp Engines</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#0e0d12]/10">
              <Link
                href="/ec"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#855B04] hover:text-[#5d3f00] font-bold transition-colors group/link"
              >
                <span>View Election Campaign Hub</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3. Our Approach & Our Vision (2-Column Strategic Synergy) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-20">
          {/* Approach */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#faf9fd] border border-[#0e0d12]/10 relative overflow-hidden space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#6b54ee] font-bold">
              <Compass className="w-4 h-4" />
              <span>Our Approach</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#0e0d12] font-bold">
              Planning, Execution &amp; Measurable Communication Outcomes
            </h3>
            <p className="text-sm sm:text-base text-[#0e0d12]/75 leading-relaxed font-sans">
              We bring together creative production, strategic communication, digital media, and campaign execution to create integrated solutions for complex communication requirements.
            </p>
            <p className="text-sm sm:text-base text-[#0e0d12]/75 leading-relaxed font-sans">
              Whether it is producing a compelling film for a brand, documenting a major public event, developing campaign communication, or managing the media requirements of an election campaign, RFP Digital Productions focuses on planning, execution, consistency, and measurable communication outcomes.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#fdfbf7] border border-[#B8860B]/25 relative overflow-hidden space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#855B04] font-bold">
              <Target className="w-4 h-4" />
              <span>Our Vision</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#0e0d12] font-bold">
              Clarity &amp; Lasting Impact in Every Campaign
            </h3>
            <p className="text-sm sm:text-base text-[#0e0d12]/75 leading-relaxed font-sans">
              To build a professional media and campaign solutions organization that combines creative storytelling with strategic communication and efficient execution, helping organizations, brands, and public-facing campaigns communicate with clarity and impact.
            </p>
            <div className="p-4 rounded-2xl bg-white border border-[#B8860B]/25 mt-4 shadow-xs">
              <p className="text-xs sm:text-sm text-[#855B04] font-serif italic font-medium">
                &ldquo;More than just a production house — a full-service communication and election-management partner trusted across the nation.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* 4. Why Choose RFP Digital Productions? (7 Core Differentiators) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#855B04] font-bold block mb-2">
              Competitive Advantage
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#0e0d12] font-bold">
              Why Choose RFP Digital Productions?
            </h3>
            <p className="text-sm text-[#0e0d12]/70 mt-3 font-sans">
              Engineered with institutional rigor, cinematic artistry, and on-ground operational precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-[#faf9fc] border border-[#0e0d12]/10 hover:border-[#B8860B]/60 transition-all duration-300 group shadow-sm hover:shadow-md hover:-translate-y-1 ${
                    idx === whyChooseUs.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#0e0d12]/10 flex items-center justify-center text-[#855B04] group-hover:bg-[#B8860B] group-hover:text-white transition-colors mb-4 shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-[#0e0d12] mb-2 group-hover:text-[#855B04] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#0e0d12]/70 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
};
