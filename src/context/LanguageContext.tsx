"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Language } from "@/data/imagineContent";

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "de",
  toggleLang: () => {},
  setLang: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>("de");

  const toggleLang = () => {
    setLangState((prev) => (prev === "de" ? "en" : "de"));
  };

  const setLang = (newLang: Language) => {
    setLangState(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
