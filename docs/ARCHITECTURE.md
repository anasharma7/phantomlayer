# Ana Sharma Platform — Architecture

## Stack

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | Next.js 16 App Router | RSC, SEO, Vercel-native |
| Language | TypeScript strict | Scale-safe solo maintenance |
| Styling | Tailwind CSS v4 | Design tokens + utility speed |
| Motion | Framer Motion | Cinematic UI, client islands only |
| UI | shadcn/ui (Radix) | Accessible primitives, own the code |
| Content (Phase 2) | MDX + `content/` | Git-based publishing, no CMS lock-in |

## Folder structure

```
src/
├── app/                    # Routes (App Router)
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Landing
│   ├── about/
│   ├── research/
│   ├── lab/
│   ├── podcast/
│   └── contact/
├── components/
│   ├── ui/                 # shadcn primitives
│   ├── layout/             # Header, footer, shell
│   ├── home/               # Landing sections
│   └── shared/             # Cross-page blocks
├── config/                 # site.ts, navigation.ts
├── lib/                    # utils, MDX helpers (Phase 2)
└── types/                  # Content contracts

content/                    # MDX source (Phase 2)
├── research/
├── lab/
└── podcast/
```

## Route groups (Phase 2+)

- `(marketing)` — public pages (optional group, no URL segment)
- `(content)/research/[slug]` — article detail
- `api/` — search, OG, newsletter (future)

## Content strategy

1. **Research** — 1–2 long essays/month (offensive sec, AI safety, culture)
2. **Cyber Lab** — lab writeups, tooling experiments, GIS demos
3. **Podcast** — episodic; embed-first, minimal custom audio infra
4. **Featured pipeline** — `featured: true` in frontmatter → homepage cards

## Growth path

1. Hero + nav (current)
2. Homepage sections (featured, podcast preview, lab cards)
3. MDX pipeline + article templates
4. Search (Pagefind or Algolia)
5. Newsletter / RSS
6. Analytics (Vercel Analytics, privacy-first)

## Deploy

- Vercel, `main` branch auto-deploy
- Set `NEXT_PUBLIC_SITE_URL` in production
- Add `public/og.png` (1200×630)
