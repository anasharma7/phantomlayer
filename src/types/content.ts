export type ContentCategory =
  | "offensive-security"
  | "ai-security"
  | "trust-safety"
  | "digital-culture"
  | "geospatial"
  | "emerging-tech";

export interface ContentMeta {
  title: string;
  description: string;
  slug: string;
  date: string;
  category: ContentCategory;
  tags: string[];
  published: boolean;
  featured?: boolean;
}

export interface ResearchPost extends ContentMeta {
  type: "research";
  readingTime?: string;
}

export interface LabProject extends ContentMeta {
  type: "lab";
  status: "active" | "complete" | "archived";
  stack?: string[];
}

export interface PodcastEpisode extends ContentMeta {
  type: "podcast";
  episode: number;
  duration?: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
}
