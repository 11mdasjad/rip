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
      className="w-full bg-[#0a090e] text-[#f4f2f7] py-20 lg:py-28 relative overflow-hidden border-t border-white/[0.08]"
    >
      {/* Background Ambient Lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#7c6af2]/10 blur-[150px] pointer-events-none rounded-full" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#D4AF37]/08 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Header & Brand Identity */}
        <div className="max-w-3xl mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#E6C665] text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#E6C665]" />
            <span>About RFP Digital Productions</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 leading-[1.15]">
            Full-Service Video Production, Media &amp;{" "}
            <span className="bg-gradient-to-r from-[#F3E5AB] via-[#D4AF37] to-[#E6C665] bg-clip-text text-transparent">
              Turnkey Election Management
            </span>
          </h2>

          <div className="space-y-4 text-base sm:text-lg text-white/80 leading-relaxed font-sans">
            <p>
              <strong className="text-white font-semibold">RFP Digital Productions</strong> is a comprehensive Video Production, Media, and Election Management company providing creative, communication, and campaign solutions for political organizations, candidates, public representatives, businesses, institutions, and brands.
            </p>
            <p className="text-sm sm:text-base text-white/70">
              With a strong understanding of visual storytelling, mass communication, digital media, and on-ground campaign operations, RFP Digital Productions helps clients communicate their message effectively across traditional, digital, and field-level platforms.
            </p>
          </div>

          {/* Motto Pill Banner */}
          <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-[#D4AF37]/25 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#E6C665] font-semibold block mb-0.5">
                Our Operating Philosophy
              </span>
              <p className="text-sm sm:text-base text-white font-medium italic font-serif">
                &ldquo;From ideas to execution — we create, communicate, and manage.&rdquo;
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-[11px] font-mono text-white/60">
              <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10">Video Production</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10">Digital Media</span>
              <span className="px-2.5 py-1 rounded-lg bg-white/[0.05] border border-white/10">Election Management</span>
            </div>
          </div>
        </div>

        {/* 2. Two Core Operational Pillars (Bento Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 lg:mb-20">
          {/* Card 1: Video Production & Media */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#14121b] border border-white/[0.1] hover:border-[#a89bfa]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#a89bfa] group-hover:bg-[#6b54ee] group-hover:text-white transition-all shadow-md">
                  <Film className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#a89bfa] px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 font-bold">
                  Core Discipline
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium mb-3 group-hover:text-[#F3E5AB] transition-colors">
                Video Production &amp; Media
              </h3>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-6 font-sans">
                RFP Digital Productions offers end-to-end video production services, from concept development and scripting to production, post-production, animation, graphics, and digital distribution.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-[#a89bfa] shrink-0" />
                  <span>Flagship Corporate Documentaries &amp; Institutional Profiles</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-[#a89bfa] shrink-0" />
                  <span>Educational, University &amp; Research Showcase Films</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-[#a89bfa] shrink-0" />
                  <span>Multi-Camera High-Definition Summit &amp; Expo Streaming</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-[#a89bfa] shrink-0" />
                  <span>Cinematic Motion Graphics, Sound Design &amp; Digital Cuts</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/[0.08]">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#a89bfa] hover:text-white font-bold transition-colors group/link"
              >
                <span>Explore Media Services</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: Election Management & Campaign Solutions */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#14121b] border border-[#D4AF37]/30 hover:border-[#D4AF37]/80 transition-all duration-300 flex flex-col justify-between group shadow-xl">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/15 border border-[#D4AF37]/35 flex items-center justify-center text-[#E6C665] group-hover:bg-[#D4AF37] group-hover:text-black transition-all shadow-md">
                  <Megaphone className="w-7 h-7" />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#E6C665] px-3 py-1 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 font-bold">
                  Field &amp; Digital Engine
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium mb-3 group-hover:text-[#F3E5AB] transition-colors">
                Election Management &amp; Campaigns
              </h3>

              <p className="text-sm sm:text-base text-white/75 leading-relaxed mb-6 font-sans">
                RFP Digital Productions also provides end-to-end election management and campaign communication services, supporting candidates and political organizations with structured campaign planning, media production, digital communication, and field-level execution.
              </p>

              <div className="space-y-2.5 pt-4 border-t border-white/[0.08]">
                <div className="flex items-center gap-2 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-[#E6C665] shrink-0" />
                  <span>GPS-Tracked Mobile LED Display Van Fleets across Constituencies</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-[#E6C665] shrink-0" />
                  <span>Studio-Composed Original Prachar Songs &amp; Campaign Jingles</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-[#E6C665] shrink-0" />
                  <span>Grassroots Nukkad Natak (Street Theatre) Troupe Deployment</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-white/85">
                  <CheckCircle2 className="w-4 h-4 text-[#E6C665] shrink-0" />
                  <span>24/7 Election Media War Room, Digital Broadcast &amp; WhatsApp Engines</span>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-white/[0.08]">
              <Link
                href="/ec"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#E6C665] hover:text-[#FFF8DC] font-bold transition-colors group/link"
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
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] relative overflow-hidden space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#a89bfa]">
              <Compass className="w-4 h-4" />
              <span>Our Approach</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
              Planning, Execution &amp; Measurable Communication Outcomes
            </h3>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed font-sans">
              We bring together creative production, strategic communication, digital media, and campaign execution to create integrated solutions for complex communication requirements.
            </p>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed font-sans">
              Whether it is producing a compelling film for a brand, documenting a major public event, developing campaign communication, or managing the media requirements of an election campaign, RFP Digital Productions focuses on planning, execution, consistency, and measurable communication outcomes.
            </p>
          </div>

          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] relative overflow-hidden space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#E6C665]">
              <Target className="w-4 h-4" />
              <span>Our Vision</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
              Clarity &amp; Lasting Impact in Every Campaign
            </h3>
            <p className="text-sm sm:text-base text-white/75 leading-relaxed font-sans">
              To build a professional media and campaign solutions organization that combines creative storytelling with strategic communication and efficient execution, helping organizations, brands, and public-facing campaigns communicate with clarity and impact.
            </p>
            <div className="p-4 rounded-2xl bg-black/40 border border-[#D4AF37]/20 mt-4">
              <p className="text-xs sm:text-sm text-[#F3E5AB] font-serif italic">
                &ldquo;More than just a production house — a full-service communication and election-management partner trusted across the nation.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* 4. Why Choose RFP Digital Productions? (7 Core Differentiators) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E6C665] font-semibold block mb-2">
              Competitive Advantage
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-white font-medium">
              Why Choose RFP Digital Productions?
            </h3>
            <p className="text-sm text-white/70 mt-3 font-sans">
              Engineered with institutional rigor, cinematic artistry, and on-ground operational precision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-[#14121b] border border-white/[0.08] hover:border-[#D4AF37]/60 transition-all duration-300 group shadow-md hover:-translate-y-1 ${
                    idx === whyChooseUs.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-[#E6C665] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2 group-hover:text-[#F3E5AB] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-white/70 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. Direct Action Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#171523] via-[#14121c] to-[#1a1728] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-xl sm:text-2xl font-serif text-white font-medium">
              Ready to elevate your communication or campaign?
            </h4>
            <p className="text-xs sm:text-sm text-white/70 font-sans">
              Connect directly with our creative directors and campaign operations leads.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="https://wa.me/919711791403?text=Hello%20RFP%20Digital%20Productions%2C%20I%20would%20like%20to%20discuss%20a%20project%20/%20campaign%20consultation.%20Please%20connect%20with%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#D4AF37] hover:bg-[#c49f27] text-black font-mono text-xs uppercase tracking-wider font-bold transition-all shadow-lg active:scale-95"
            >
              WhatsApp Consultation
            </a>

            <a
              href="#kontakt"
              className="px-6 py-3 rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white font-mono text-xs uppercase tracking-wider font-semibold transition-all border border-white/10 active:scale-95"
            >
              Start Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
