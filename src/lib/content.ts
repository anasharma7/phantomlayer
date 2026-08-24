import type { ContentMeta } from "@/types/content";

export function getPublished<T extends ContentMeta>(items: T[]): T[] {
  return items.filter((item) => item.published);
}

export function sortByDateDesc<T extends ContentMeta>(items: T[]): T[] {
  return [...items].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getFeatured<T extends ContentMeta>(items: T[], limit?: number): T[] {
  const featured = items.filter((item) => item.featured);
  return limit ? featured.slice(0, limit) : featured;
}
