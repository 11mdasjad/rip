"use client";

import React from "react";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  ArrowLeft,
  Megaphone,
  Tv,
  Music,
  Users,
  MessageSquare,
  Sparkles,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function ElectionCampaignPortalPage() {
  const pillars = [
    {
      step: "01",
      icon: Tv,
      title: "Mobile LED Display Fleet",
      desc: "High-brightness P3.91 outdoor daylight LED display vans mobilized across assembly constituencies with GPS route tracking and live rally feeds.",
      bgImage: "/medien/landing/mobile-led-van.jpg"
    },
    {
      step: "02",
      icon: Music,
      title: "Original Prachar Songs & Anthems",
      desc: "Studio-recorded political songs, catchy lyrical anthems, and campaign jingles written to electrify public rallies and dominate social media reels.",
      bgImage: "/medien/landing/chunav-prachar-song.png"
    },
    {
      step: "03",
      icon: Users,
      title: "Nukkad Natak & Street Theatre",
      desc: "Experienced theatrical troupes performing high-impact grassroots street plays in rural haats, village squares, and urban mohallas to connect with voters.",
      bgImage: "/medien/landing/nukkad-natak-street-theatre.jpg"
    },
    {
      step: "04",
      icon: MessageSquare,
      title: "Digital War Room & WhatsApp Outreach",
      desc: "24/7 political media command center, real-time counter-narrative creation, micro-targeted voter pin-code messaging, and rapid response networks.",
      bgImage: "/medien/landing/whatsapp-marketing-campaigns.png"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a090e] text-[#f4f2f7] font-sans antialiased selection:bg-[#D4AF37] selection:text-black">
      {/* Global Header */}
      <Header />

      <main className="pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 border-b border-white/[0.08] overflow-hidden">
          {/* Ambient Golden / Violet Glow */}
          <div className="absolute top-0 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 translate-y-1/2 w-96 h-96 bg-[#6b54ee]/15 rounded-full blur-[140px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center gap-2 text-xs font-mono text-white/50 mb-8">
              <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <span>/</span>
              <span className="text-[#E6C665] font-semibold">EC Hub</span>
            </div>

            {/* Badge & Title */}
            <div className="max-w-4xl space-y-5">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35 text-xs font-mono text-[#F3E5AB]">
                <span className="px-2 py-0.5 rounded-md bg-[#D4AF37]/25 text-[#E6C665] font-bold">
                  EC
                </span>
                <span className="text-[#E6C665]">✦</span>
                <span className="uppercase tracking-widest font-semibold text-[#E6C665]">
                  Election Campaign &amp; Management Portal
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-[1.14]">
                <span className="block">Turn key Election</span>
                <span className="block">Campaign Execution</span>
              </h1>

              <p className="text-lg sm:text-2xl font-serif italic text-[#E6C665] leading-relaxed">
                &ldquo;Ground-to-Cloud Political Architecture &amp; Strategic Constituency Mobilization.&rdquo;
              </p>

              <p className="text-base sm:text-lg text-white/75 font-sans leading-relaxed max-w-3xl pt-2">
                RFP Digital Productions runs end-to-end election campaign operations across Vidhan Sabha and Lok Sabha elections nationwide. This dedicated [EC] portal is primed to showcase your candidate manifestos, custom field collaterals, and high-stakes campaign media.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mt-12 pt-8 border-t border-white/[0.08]">
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-white">45+</span>
                <p className="text-xs font-mono text-[#E6C665] uppercase tracking-wider">Constituencies</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#E6C665]">80+ Fleet</span>
                <p className="text-xs font-mono text-[#E6C665] uppercase tracking-wider">Mobile LED Vans</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-white">10M+</span>
                <p className="text-xs font-mono text-[#E6C665] uppercase tracking-wider">Voters Reached</p>
              </div>
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-serif font-bold text-[#a89bfa]">24/7</span>
                <p className="text-xs font-mono text-white/60 uppercase tracking-wider">Live War Room</p>
              </div>
            </div>
          </div>
        </section>

        {/* Grand Visual Banner */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]">
          <div className="relative w-full rounded-3xl overflow-hidden bg-[#17161d] border border-[#D4AF37]/30 shadow-2xl group">
            <div className="relative aspect-video sm:aspect-[21/9] w-full bg-black/90 overflow-hidden">
              <img
                src="/medien/landing/neutral-election-campaign-banner.jpg"
                alt="[EC] Election Campaign Execution"
                className="w-full h-full object-cover filter contrast-[1.03] brightness-95 group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="max-w-xl">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E6C665] block mb-1">
                    On-Ground Political Execution • [EC] Hub
                  </span>
                  <p className="text-sm sm:text-base text-white/90 font-serif italic">
                    Mobile LED Screen Vans, Rally Multicam Live Feeds &amp; Public Outreach
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3.5 py-1.5 rounded-xl bg-black/70 backdrop-blur-md text-xs font-mono text-[#F3E5AB] border border-[#D4AF37]/40 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E6C665] animate-pulse" />
                    <span>[EC] Certified Operations</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 Pillars of [EC] Operations */}
        <section className="py-16 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="text-xs font-mono text-[#E6C665] uppercase tracking-widest mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E6C665]" />
              <span>Core Operational Pillars</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-white font-medium">
              Everything Needed to Win Constituencies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="relative rounded-2xl overflow-hidden border border-white/[0.12] hover:border-[#D4AF37]/80 transition-all duration-300 min-h-[260px] flex flex-col justify-between p-6 sm:p-8 group shadow-xl"
                >
                  {/* Background Image & Gradient Scrim */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${pillar.bgImage})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09080e]/95 via-[#09080e]/80 to-[#09080e]/50 group-hover:via-[#09080e]/70 transition-all duration-300" />
                  <div className="absolute inset-0 bg-black/30" />

                  {/* Card Header */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md text-[#F3E5AB] border border-[#D4AF37]/40 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-[#E6C665] px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10">
                      PILLAR {pillar.step}
                    </span>
                  </div>

                  {/* Card Content */}
                  <div className="relative z-10 space-y-2 pt-8">
                    <h3 className="text-xl sm:text-2xl font-serif text-white group-hover:text-[#F3E5AB] transition-colors font-medium drop-shadow-md">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-sans drop-shadow-sm">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
