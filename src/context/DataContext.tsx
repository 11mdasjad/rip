"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { GalleryItem, SiteSettings, Inquiry, InquiryStatus } from "@/types/gallery";
import { ProjectCard, PROJECTS_DATA } from "@/data/imagineContent";
import { INITIAL_GALLERY_ITEMS } from "@/data/galleryData";

const STORAGE_KEYS = {
  GALLERY: "rfp_gallery_items_v3",
  PROJECTS: "rfp_projects_items_v4",
  SETTINGS: "rfp_site_settings_v2",
  INQUIRIES: "rfp_inquiries_items_v2",
};

const DEFAULT_SETTINGS: SiteSettings = {
  brandName: "RFP Digital Productions",
  brandTagline: "Video Production & Election Management Company",
  email: "rfpdigitalmedia@gmail.com",
  phone: "+91-11-49963157",
  address: "Lajpat Nagar 4",
  city: "New Delhi - 110024, Delhi NCR",
  country: "India",
  aboutText:
    "RFP Digital Productions is a premier video production & election management company with over 17+ years of media excellence, led by alumni of AJK MCRC, Jamia Millia Islamia. We produce corporate films, documentaries, election campaigns, LED van prachar, and digital outreach across India.",
};

const INITIAL_INQUIRIES: Inquiry[] = [
  {
    id: "inq-1",
    name: "Dr. R. K. Sharma",
    email: "rksharma@aiims-health.org",
    phone: "+91 98112 45890",
    discipline: "Corporate & Institutional Films",
    message: "We need a comprehensive institutional documentary highlighting our newly inaugurated clinical research center and patient outreach initiatives in New Delhi.",
    status: "new",
    createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "inq-2",
    name: "Vikramaditya Verma",
    email: "campaign@verma-vidhansabha.in",
    phone: "+91 99992 10844",
    discipline: "Election Campaign Management",
    message: "Looking for complete election campaign media management: 6 mobile LED display vans, custom prachar anthem song, daily rally multi-camera coverage, and WhatsApp outreach.",
    status: "new",
    createdAt: new Date(Date.now() - 14 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "inq-3",
    name: "Meenakshi Sundaram",
    email: "m.sundaram@heritage-foundation.in",
    phone: "+91 98200 44321",
    discipline: "Documentary Films",
    message: "Seeking a 30-minute archival documentary on cultural preservation and historical manuscripts for an upcoming national exhibition.",
    status: "contacted",
    createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    notes: "Initial consultation held. Sent portfolio reel of National Archives & University projects.",
  },
];

interface DataContextType {
  galleryItems: GalleryItem[];
  projects: ProjectCard[];
  siteSettings: SiteSettings;
  inquiries: Inquiry[];
  unreadInquiriesCount: number;
  isLoaded: boolean;
  addGalleryItem: (item: Omit<GalleryItem, "id"> & { id?: string }) => GalleryItem;
  updateGalleryItem: (id: string, updated: Partial<GalleryItem>) => void;
  deleteGalleryItem: (id: string) => void;
  getGalleryItemById: (id: string) => GalleryItem | undefined;
  addProject: (project: Omit<ProjectCard, "id"> & { id?: string }) => ProjectCard;
  updateProject: (id: string, updated: Partial<ProjectCard>) => void;
  deleteProject: (id: string) => void;
  updateSiteSettings: (settings: Partial<SiteSettings>) => void;
  addInquiry: (inquiry: Omit<Inquiry, "id" | "createdAt" | "status">) => Inquiry;
  updateInquiryStatus: (id: string, status: InquiryStatus) => void;
  updateInquiryNotes: (id: string, notes: string) => void;
  deleteInquiry: (id: string) => void;
  resetToDefaults: () => void;
  exportDataJSON: () => string;
  importDataJSON: (jsonStr: string) => { success: boolean; error?: string };
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>(INITIAL_GALLERY_ITEMS);
  const [projects, setProjects] = useState<ProjectCard[]>(PROJECTS_DATA);
  const [siteSettings, setSiteSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize from LocalStorage upon mount on client
  useEffect(() => {
    try {
      if (typeof window !== "undefined") {
        const storedGallery = localStorage.getItem(STORAGE_KEYS.GALLERY);
        if (storedGallery) {
          try {
            const parsed = JSON.parse(storedGallery);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setGalleryItems(parsed);
            }
          } catch (e) {
            console.error("Failed to parse stored gallery items", e);
          }
        }

        const storedProjects = localStorage.getItem(STORAGE_KEYS.PROJECTS);
        if (storedProjects) {
          try {
            const parsed = JSON.parse(storedProjects);
            if (Array.isArray(parsed) && parsed.length > 0) {
              setProjects(parsed);
            }
          } catch (e) {
            console.error("Failed to parse stored projects", e);
          }
        }

        const storedSettings = localStorage.getItem(STORAGE_KEYS.SETTINGS);
        if (storedSettings) {
          try {
            const parsed = JSON.parse(storedSettings);
            if (parsed && typeof parsed === "object") {
              setSiteSettings((prev) => ({ ...prev, ...parsed }));
            }
          } catch (e) {
            console.error("Failed to parse stored settings", e);
          }
        }

        const storedInquiries = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
        if (storedInquiries) {
          try {
            const parsed = JSON.parse(storedInquiries);
            if (Array.isArray(parsed)) {
              setInquiries(parsed);
            }
          } catch (e) {
            console.error("Failed to parse stored inquiries", e);
          }
        }
      }
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save to LocalStorage helpers
  const saveGallery = (newItems: GalleryItem[]) => {
    setGalleryItems(newItems);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(newItems));
      } catch (e) {
        console.error("Error saving gallery to localStorage", e);
      }
    }
  };

  const saveProjects = (newProjects: ProjectCard[]) => {
    setProjects(newProjects);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(newProjects));
      } catch (e) {
        console.error("Error saving projects to localStorage", e);
      }
    }
  };

  const saveSettings = (newSettings: SiteSettings) => {
    setSiteSettings(newSettings);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(newSettings));
      } catch (e) {
        console.error("Error saving settings to localStorage", e);
      }
    }
  };

  const saveInquiries = (newInquiries: Inquiry[]) => {
    setInquiries(newInquiries);
    if (typeof window !== "undefined") {
      try {
        localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(newInquiries));
      } catch (e) {
        console.error("Error saving inquiries to localStorage", e);
      }
    }
  };

  // Gallery actions
  const addGalleryItem = (itemData: Omit<GalleryItem, "id"> & { id?: string }): GalleryItem => {
    const slug = (itemData.title || "item")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const newId = itemData.id || `gallery-${slug}-${Date.now().toString(36)}`;
    const newItem: GalleryItem = {
      ...itemData,
      id: newId,
      createdAt: itemData.createdAt || new Date().toISOString().split("T")[0],
    };

    const updated = [newItem, ...galleryItems];
    saveGallery(updated);
    return newItem;
  };

  const updateGalleryItem = (id: string, updated: Partial<GalleryItem>) => {
    const newItems = galleryItems.map((item) =>
      item.id === id ? { ...item, ...updated } : item
    );
    saveGallery(newItems);
  };

  const deleteGalleryItem = (id: string) => {
    const newItems = galleryItems.filter((item) => item.id !== id);
    saveGallery(newItems);
  };

  const getGalleryItemById = (id: string) => {
    return galleryItems.find((item) => item.id === id);
  };

  // Project actions
  const addProject = (projectData: Omit<ProjectCard, "id"> & { id?: string }): ProjectCard => {
    const slug = (projectData.title || "project")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
    const newId = projectData.id || `projekt-${slug}-${Date.now().toString(36)}`;
    const newProj: ProjectCard = {
      ...projectData,
      id: newId,
      slot: projectData.slot || "slot-a",
    };

    const updated = [newProj, ...projects];
    saveProjects(updated);
    return newProj;
  };

  const updateProject = (id: string, updated: Partial<ProjectCard>) => {
    const newProjects = projects.map((p) =>
      p.id === id ? { ...p, ...updated } : p
    );
    saveProjects(newProjects);
  };

  const deleteProject = (id: string) => {
    const newProjects = projects.filter((p) => p.id !== id);
    saveProjects(newProjects);
  };

  const updateSiteSettings = (settings: Partial<SiteSettings>) => {
    const updated = { ...siteSettings, ...settings };
    saveSettings(updated);
  };

  // Inquiry actions
  const addInquiry = (inquiryData: Omit<Inquiry, "id" | "createdAt" | "status">): Inquiry => {
    const newInq: Inquiry = {
      ...inquiryData,
      id: `inq-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`,
      status: "new",
      createdAt: new Date().toISOString(),
    };
    const updated = [newInq, ...inquiries];
    saveInquiries(updated);
    return newInq;
  };

  const updateInquiryStatus = (id: string, status: InquiryStatus) => {
    const updated = inquiries.map((inq) =>
      inq.id === id ? { ...inq, status } : inq
    );
    saveInquiries(updated);
  };

  const updateInquiryNotes = (id: string, notes: string) => {
    const updated = inquiries.map((inq) =>
      inq.id === id ? { ...inq, notes } : inq
    );
    saveInquiries(updated);
  };

  const deleteInquiry = (id: string) => {
    const updated = inquiries.filter((inq) => inq.id !== id);
    saveInquiries(updated);
  };

  const unreadInquiriesCount = inquiries.filter((i) => i.status === "new").length;

  const resetToDefaults = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(STORAGE_KEYS.GALLERY);
      localStorage.removeItem(STORAGE_KEYS.PROJECTS);
      localStorage.removeItem(STORAGE_KEYS.SETTINGS);
      localStorage.removeItem(STORAGE_KEYS.INQUIRIES);
    }
    setGalleryItems(INITIAL_GALLERY_ITEMS);
    setProjects(PROJECTS_DATA);
    setSiteSettings(DEFAULT_SETTINGS);
    setInquiries(INITIAL_INQUIRIES);
  };

  const exportDataJSON = (): string => {
    return JSON.stringify(
      {
        version: "1.1",
        exportDate: new Date().toISOString(),
        galleryItems,
        projects,
        siteSettings,
        inquiries,
      },
      null,
      2
    );
  };

  const importDataJSON = (jsonStr: string): { success: boolean; error?: string } => {
    try {
      const data = JSON.parse(jsonStr);
      if (Array.isArray(data.galleryItems)) {
        saveGallery(data.galleryItems);
      }
      if (Array.isArray(data.projects)) {
        saveProjects(data.projects);
      }
      if (data.siteSettings && typeof data.siteSettings === "object") {
        saveSettings({ ...DEFAULT_SETTINGS, ...data.siteSettings });
      }
      if (Array.isArray(data.inquiries)) {
        saveInquiries(data.inquiries);
      }
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err?.message || "Invalid JSON format" };
    }
  };

  return (
    <DataContext.Provider
      value={{
        galleryItems,
        projects,
        siteSettings,
        inquiries,
        unreadInquiriesCount,
        isLoaded,
        addGalleryItem,
        updateGalleryItem,
        deleteGalleryItem,
        getGalleryItemById,
        addProject,
        updateProject,
        deleteProject,
        updateSiteSettings,
        addInquiry,
        updateInquiryStatus,
        updateInquiryNotes,
        deleteInquiry,
        resetToDefaults,
        exportDataJSON,
        importDataJSON,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
