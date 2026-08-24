import { Badge } from "@/components/ui/badge";

interface TagListProps {
  tags: string[];
  className?: string;
}

export function TagList({ tags, className }: TagListProps) {
  if (tags.length === 0) return null;

  return (
    <ul
      className={className ?? "flex flex-wrap gap-2"}
      aria-label="Tags"
    >
      {tags.map((tag) => (
        <li key={tag}>
          <Badge variant="outline" className="text-[9px]">
            {tag}
          </Badge>
        </li>
      ))}
    </ul>
  );
}
