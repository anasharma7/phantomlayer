import type { ContentCategory } from "@/types/content";

const categoryLabels: Record<ContentCategory, string> = {
  "offensive-security": "Offensive Security",
  "ai-security": "AI Security",
  "trust-safety": "Trust & Safety",
  "digital-culture": "Digital Culture",
  "geospatial": "Geospatial",
  "emerging-tech": "Emerging Tech",
};

export function getCategoryLabel(category: ContentCategory): string {
  return categoryLabels[category];
}
