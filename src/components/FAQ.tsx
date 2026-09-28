"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { FAQ_DATA } from "@/data/imagineContent";

export const FAQ: React.FC = () => {
  const { lang } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="py-20 lg:py-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/[0.08]">
      {/* Header */}
      <div className="mb-14">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#a89bfa] block mb-3">
          Frequently Asked Questions
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#f4f2f7]">
          Good to know before we talk.
        </h2>
      </div>

      {/* Accordion List */}
      <div className="border-t border-white/[0.1] divide-y divide-white/[0.1]">
        {FAQ_DATA.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="py-6 sm:py-7">
              <button
                type="button"
                onClick={() => toggleQuestion(idx)}
                className="w-full flex items-center justify-between text-left group focus:outline-none"
                aria-expanded={isOpen}
              >
                <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-[#f4f2f7] group-hover:text-[#a89bfa] transition-colors pr-6">
                  {item.qEn}
                </span>

                <div
                  className={`w-10 h-10 rounded-full border border-white/20 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    isOpen
                      ? "bg-[#6b54ee] border-[#6b54ee] text-white rotate-45"
                      : "bg-white/[0.03] text-white/70 group-hover:border-white/40"
                  }`}
                >
                  <Plus className="w-5 h-5 transition-transform" />
                </div>
              </button>

              {isOpen && (
                <div className="pt-4 pr-12 text-sm sm:text-base text-[#f4f2f7b8] leading-relaxed animate-in fade-in duration-200">
                  <p>{item.aEn}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
