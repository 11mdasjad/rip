"use client";

import React, { useState } from "react";
import { ArrowUpRight, ChevronDown, CheckCircle2 } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";

export const Services: React.FC = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES_DATA[0].id);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(SERVICES_DATA[0].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  const toggleMobile = (id: string) => {
    setExpandedMobileId(expandedMobileId === id ? null : id);
  };

  return (
    <section
      id="services"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto border-t border-[#E2DDD2]"
    >
      {/* Section Header */}
      <div className="flex items-center space-x-2.5 mb-10">
        <span className="text-sm text-[#5A7865]">☵</span>
        <span className="text-[11px] font-mono tracking-[0.25em] text-[#161D1A] uppercase font-semibold">
          WHAT WE DO
        </span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-[#161D1A] leading-tight tracking-tight">
            One team. <br />
            <span className="italic font-light text-[#6F7A74]">Every frame.</span>
          </h2>
        </div>
        <p className="text-sm md:text-base text-[#6F7A74] font-sans max-w-md">
          Strategy, production and digital delivery shaped around the message—not a template.
        </p>
      </div>

      {/* Desktop List Layout with Interactive Dynamic Preview Panel */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-12 items-start">
        {/* Left 7 cols: Service List */}
        <div className="col-span-7 border-t border-[#E2DDD2]">
          {SERVICES_DATA.map((service) => {
            const isActive = activeServiceId === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveServiceId(service.id)}
                onClick={() => setActiveServiceId(service.id)}
                className={`group py-8 px-6 border-b border-[#E2DDD2] transition-all duration-300 cursor-pointer rounded-2xl ${
                  isActive ? "bg-[#FAF8F5] shadow-sm" : "hover:bg-[#FAF8F5]/50"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-6">
                    <span
                      className={`text-xs font-mono tracking-widest transition-colors ${
                        isActive ? "text-[#5A7865] font-bold" : "text-[#6F7A74] group-hover:text-[#161D1A]"
                      }`}
                    >
                      {service.number}
                    </span>
                    <div>
                      <h3
                        className={`text-2xl font-serif transition-colors ${
                          isActive
                            ? "text-[#161D1A] font-medium"
                            : "text-[#161D1A]/80 group-hover:text-[#161D1A]"
                        }`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#6F7A74] font-sans mt-1">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div
                    className={`p-2.5 rounded-full border transition-all ${
                      isActive
                        ? "bg-[#161D1A] text-[#FAF8F5] border-[#161D1A]"
                        : "border-[#E2DDD2] text-[#6F7A74] group-hover:border-[#5A7865] group-hover:text-[#5A7865]"
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Additional details on active state */}
                {isActive && (
                  <div className="mt-4 pl-12 pr-4 space-y-4 animate-in fade-in duration-300">
                    <p className="text-sm text-[#161D1A] font-sans leading-relaxed">
                      {service.description}
                    </p>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      {service.deliverables.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-2 text-xs text-[#6F7A74]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#5A7865] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right 5 cols: Sticky Editorial Preview Card */}
        <div className="col-span-5 sticky top-28 space-y-4">
          <div className="relative aspect-[4/3] bg-[#182622] rounded-3xl overflow-hidden border border-[#E2DDD2] shadow-xl group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeService.image}
              alt={activeService.title}
              key={activeService.id}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#8CA394] block mb-1">
                Capability Preview • {activeService.number}
              </span>
              <h4 className="font-serif text-2xl">{activeService.title}</h4>
            </div>
          </div>

          <div className="p-6 rounded-3xl bg-[#FAF8F5] border border-[#E2DDD2]">
            <p className="text-xs font-mono uppercase tracking-widest text-[#5A7865] mb-2 font-medium">
              Deliverable Focus
            </p>
            <p className="text-xs text-[#161D1A] font-sans leading-relaxed">
              Customized execution for broadcast, theatrical presentation, digital ecosystems,
              and stakeholder communications with calibrated timelines.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Expandable Cards */}
      <div className="lg:hidden space-y-4">
        {SERVICES_DATA.map((service) => {
          const isExpanded = expandedMobileId === service.id;
          return (
            <div
              key={service.id}
              className="border border-[#E2DDD2] bg-[#FAF8F5] rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => toggleMobile(service.id)}
                aria-expanded={isExpanded}
                className="w-full py-5 px-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A7865]"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-xs font-mono text-[#5A7865] font-semibold">
                    {service.number}
                  </span>
                  <h3 className="font-serif text-xl text-[#161D1A] font-medium">
                    {service.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`w-4 h-4 text-[#6F7A74] transition-transform duration-300 ${
                    isExpanded ? "rotate-180 text-[#5A7865]" : ""
                  }`}
                />
              </button>

              {isExpanded && (
                <div className="px-5 pb-6 pt-2 border-t border-[#E2DDD2]/60 space-y-4 bg-white/50">
                  <div className="aspect-video w-full overflow-hidden bg-black rounded-xl border border-[#E2DDD2]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-xs text-[#161D1A] font-sans leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#5A7865] uppercase block">
                      Scope:
                    </span>
                    {service.deliverables.map((d, i) => (
                      <div key={i} className="flex items-center space-x-2 text-xs text-[#6F7A74]">
                        <CheckCircle2 className="w-3 h-3 text-[#5A7865] shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

