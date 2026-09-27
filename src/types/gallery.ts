export type GalleryCategory =
  | "All"
  | "Cinema & Film"
  | "AI & Generative"
  | "3D & VFX"
  | "Commercials"
  | "Behind The Scenes";

export interface GalleryItem {
  id: string;
  title: string;
  category: "Cinema & Film" | "AI & Generative" | "3D & VFX" | "Commercials" | "Behind The Scenes";
  client?: string;
  year: string;
  image: string; // URL, path, or base64 data URL
  aspect?: "landscape" | "portrait" | "square" | "panoramic";
  summary: string;
  description: string;
  tools?: string[];
  deliverables?: string[];
  videoUrl?: string;
  featured?: boolean;
  stills?: string[];
  directorNotes?: string;
  btsNotes?: string;
  createdAt?: string;
}

export interface SiteSettings {
  brandName: string;
  brandTagline: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  aboutText: string;
}

export type InquiryStatus = "new" | "contacted" | "in_progress" | "archived";

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  discipline: string;
  message: string;
  status: InquiryStatus;
  createdAt: string;
  notes?: string;
}

