export type CategoryType = 
  | "All"
  | "Corporate Films"
  | "Documentary Films"
  | "Digital Campaigns"
  | "Social Media Content"
  | "Brand Communication";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  image: string;
  aspect?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: CategoryType;
  client: string;
  year: string;
  duration: string;
  shortDesc: string;
  synopsis: string;
  directorNotes?: string;
  deliverables: string[];
  heroImage: string;
  aspectRatio?: "video" | "square" | "tall" | "wide";
  videoUrl?: string; // sample direct stream or embed
  youtubeUrl?: string;
  featured?: boolean;
}

export interface BTSItem {
  id: string;
  title: string;
  caption: string;
  department: "Camera" | "Lighting" | "Direction" | "Audio" | "Post-Production";
  location: string;
  image: string;
  aspect: "portrait" | "landscape" | "square";
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  role: string;
  organization: string;
  verified: boolean;
  projectCategory?: string;
  year?: string;
  rating?: number;
  clientAvatar?: string;
  fullReview?: string;
  videoUrl?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
  videoThumbnail?: string;
  challengesSolved?: string[];
  keyDeliverables?: string[];
  stats?: { label: string; value: string }[];
}

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  department: "Direction" | "Production" | "Post-production" | "Digital" | "Leadership";
  bio: string;
  image: string;
  credentials?: string;
  experience?: string;
  specialties?: string[];
  keyWorks?: string[];
  gearExpertise?: string[];
  philosophy?: string;
  email?: string;
}

export interface CampaignServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyPoints: string[];
}
