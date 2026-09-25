"use client";

import React from "react";
import { ArrowUpRight, Film, RefreshCw, Cpu } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export const Zusammenarbeit: React.FC = () => {
  const { lang } = useLanguage();

  const cards = [
    {
      icon: Film,
      titleDe: "Ein konkretes Projekt",
      titleEn: "A Specific Project",
      subDe: "Leuchtturm, Produktlaunch oder Messeauftritt",
      subEn: "Flagship film, product launch or expo debut",
      descDe:
        "Ein Markenfilm, ein Produktlaunch oder ein Messeauftritt: Wir entwickeln und produzieren zielgerichtet von der ersten Idee bis zur finalen Master-Version. Höchste gestalterische Qualität mit transparenter Budget- und Terminkontrolle.",
      descEn:
        "A brand anthem, product launch, or major trade fair premiere: we develop and produce targeted from first spark to the master theatrical delivery. Peak creative quality with transparent budgets and timelines.",
      tagDe: "Einzelproduktion",
      tagEn: "Standalone Project"
    },
    {
      icon: RefreshCw,
      titleDe: "Laufende B2B-Contentproduktion",
      titleEn: "Ongoing B2B Content",
      subDe: "Verlässlicher Jahrespartner für Social & Vertrieb",
      subEn: "Reliable annual partner for social & sales",
      descDe:
        "Regelmäßiger Bedarf an Bewegtbild, Social-Content oder 3D-Produktvisualisierungen. Feste Kapazitäten, kurze Abstimmungswege und maximale Kosteneffizienz durch den gezielten Aufbau wiederverwendbarer Asset- und Footage-Pools.",
      descEn:
        "Continuous demand for video, social assets, or 3D product visualizers. Dedicated capacity, agile approvals, and maximum efficiency by engineering reusable footage pools and digital brand assets.",
      tagDe: "Jahrespartnerschaft",
      tagEn: "Annual Retainer"
    },
    {
      icon: Cpu,
      titleDe: "KI-Workflows & Befähigung",
      titleEn: "AI Workflows & Enablement",
      subDe: "Inhouse-Kreativteams produktiv machen",
      subEn: "Empowering in-house creative teams",
      descDe:
        "Sie möchten KI im eigenen Marketing und Design produktiv einsetzen? Wir entwickeln maßgeschneiderte Workflows, schulen Ihre Mitarbeitenden in Prompting und ComfyUI und etablieren rechtssichere Produktionsleitfäden.",
      descEn:
        "Looking to harness generative AI inside your own teams? We construct tailored workflows, train staff in prompt architecture and ComfyUI, and establish copyright-compliant production frameworks.",
      tagDe: "Transformation & Training",
      tagEn: "Transformation & Training"
    }
  ];

  return (
    <section id="zusammenarbeit" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
      {/* Header */}
      <div className="max-w-3xl mb-14 lg:mb-20">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-3">
          {lang === "de" ? "Zusammenarbeit" : "Collaboration"}
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f4f2f7] mb-6">
          {lang === "de"
            ? "Ein konkretes Projekt. Oder ein Partner für das ganze Jahr."
            : "A specific project. Or a partner for the entire year."}
        </h2>
        <p className="text-base sm:text-lg text-[#f4f2f7b8] leading-relaxed">
          {lang === "de"
            ? "Wir steigen dort ein, wo Sie Unterstützung brauchen – mit einer ersten Aufgabe, einem fertigen Konzept oder regelmäßigem Produktionsbedarf."
            : "We integrate right where you need support – with an initial brief, an established agency concept, or recurring corporate media needs."}
        </p>
      </div>

      {/* 3 Collaboration Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="relative rounded-[24px] p-8 bg-[#17161d] border border-white/[0.1] hover:border-[#a89bfa]/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-[#a89bfa] group-hover:bg-[#6b54ee] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#f4f2f780] px-3 py-1 rounded-full bg-white/[0.04]">
                    {lang === "de" ? card.tagDe : card.tagEn}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#f4f2f7] mb-2 tracking-tight group-hover:text-white">
                  {lang === "de" ? card.titleDe : card.titleEn}
                </h3>
                <div className="text-xs font-medium text-[#a89bfa] mb-4">
                  {lang === "de" ? card.subDe : card.subEn}
                </div>

                <p className="text-sm text-[#f4f2f7b8] leading-relaxed mb-6 font-normal">
                  {lang === "de" ? card.descDe : card.descEn}
                </p>
              </div>

              <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between">
                <a
                  href="#kontakt"
                  className="inline-flex items-center space-x-1.5 text-xs font-semibold text-[#f4f2f7] group-hover:text-[#a89bfa] transition-colors"
                >
                  <span>{lang === "de" ? "Anfrage starten" : "Start Inquiry"}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
