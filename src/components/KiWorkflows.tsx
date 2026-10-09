"use client";

import React from "react";
import { ArrowUpRight, Tv, Music, Users, MessageSquare } from "lucide-react";

export const KiWorkflows: React.FC = () => {
  const workflows = [
    {
      icon: Tv,
      titleEn: "1. Mobile LED Display Screen Vans",
      descEn:
        "High-brightness, weather-resistant daylight LED display vans deployed across constituencies with hydraulic masts, sound systems, and daily broadcast schedules.",
      bgImage: "/medien/landing/mobile-led-van.jpg"
    },
    {
      icon: Music,
      titleEn: "2. Custom Prachar Songs & Anthems",
      descEn:
        "Original lyric writing, professional studio recording, catchy rhythms, and high-energy music videos tailored to candidate manifestos and regional cultural appeal.",
      bgImage: "/medien/landing/chunav-prachar-song.png"
    },
    {
      icon: Users,
      titleEn: "3. Nukkad Natak & Street Theatre",
      descEn:
        "Engaging on-ground street play performances by seasoned theatrical artists connecting directly with voters in weekly haats, town plazas, and residential sectors.",
      bgImage: "/medien/landing/nukkad-natak-street-theatre.jpg"
    },
    {
      icon: MessageSquare,
      titleEn: "4. WhatsApp Outreach & Digital Campaigns",
      descEn:
        "Targeted constituency-level digital messaging, graphic manifesto banners, short video clips, and high-frequency voter engagement across social platforms.",
      bgImage: "/medien/landing/whatsapp-marketing-campaigns.png"
    }
  ];

  return (
    <section id="ki-workflows" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Heading & Mission */}
        <div className="lg:col-span-5">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-3">
            Election Management &amp; Outreach
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[44px] font-extrabold tracking-tight text-[#f4f2f7] mb-6 leading-tight">
            <span className="block">Turn key Election</span>
            <span className="block text-white">Campaign Execution.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#f4f2f7b8] leading-relaxed mb-8">
            RFP Digital Productions runs end-to-end election campaign media operations. From mobile LED vans and catchy prachar songs to street theatre and constituency-wide digital voter outreach, we bring candidates directly to the people.
          </p>

          <div className="p-6 rounded-2xl bg-[#17161d] border border-white/[0.1] shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a89bfa] block mb-2">
              Constituency Strategy
            </span>
            <p className="text-sm text-[#f4f2f7] font-medium mb-4">
              Integrated political campaign solutions deployed across Vidhan Sabha and Lok Sabha elections nationwide.
            </p>
            <a
              href="#kontakt"
              className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-[#a89bfa] hover:text-white transition-colors"
            >
              <span>Inquire Campaign Services</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: 4 Workflows Grid */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {workflows.map((wf, idx) => {
            const Icon = wf.icon;
            return (
              <div
                key={idx}
                className={`relative p-6 rounded-2xl border transition-all flex flex-col justify-between group shadow-lg overflow-hidden min-h-[220px] ${
                  wf.bgImage
                    ? "border-white/[0.18] hover:border-[#D4AF37]/80 shadow-2xl shadow-black/80"
                    : "bg-[#17161d] border border-white/[0.08] hover:border-[#a89bfa]/50"
                }`}
              >
                {wf.bgImage && (
                  <>
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
                      style={{ backgroundImage: `url(${wf.bgImage})` }}
                    />
                    {/* Dark gradient scrim ensuring crisp readability of white text while highlighting the van */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09080e]/95 via-[#09080e]/75 to-[#09080e]/45 group-hover:via-[#09080e]/65 transition-all duration-300" />
                    <div className="absolute inset-0 bg-black/25" />
                  </>
                )}
                <div className="relative z-10">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-all ${
                      wf.bgImage
                        ? "bg-black/50 backdrop-blur-md text-[#F3E5AB] border border-[#D4AF37]/40 group-hover:bg-[#D4AF37] group-hover:text-black group-hover:border-[#D4AF37]"
                        : "bg-white/[0.04] text-[#a89bfa] group-hover:bg-[#6b54ee] group-hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#f4f2f7] mb-2 tracking-tight drop-shadow-md">
                    {wf.titleEn}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      wf.bgImage ? "text-[#f4f2f7e0] font-medium drop-shadow-sm" : "text-[#f4f2f780]"
                    }`}
                  >
                    {wf.descEn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

