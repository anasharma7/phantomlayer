export type SignalCategory =
  | "AI Security"
  | "Threat Intelligence"
  | "Offensive Security"
  | "Digital Trust"
  | "Cyber Psychology";

export interface FeaturedSignal {
  id: string;
  title: string;
  excerpt: string;
  category: SignalCategory;
  readTime: string;
  date: string;
}

export interface Discussion {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  replies: number;
  views: number;
  tag: string;
  lastActive: string;
}

export interface MediaEpisode {
  id: string;
  title: string;
  description: string;
  duration: string;
  episode: string;
  guests?: string;
}

export const featuredSignals: FeaturedSignal[] = [
  {
    id: "1",
    title: "Adversarial Prompt Injection in Production LLM Pipelines",
    excerpt:
      "How model-context boundaries fail under chained tool use, and what defense-in-depth looks like for agentic systems.",
    category: "AI Security",
    readTime: "12 min",
    date: "May 18, 2026",
  },
  {
    id: "2",
    title: "Mapping the Synthetic Identity Supply Chain",
    excerpt:
      "From deepfake onboarding to credential farming—tracing the economics of manufactured digital personas.",
    category: "Threat Intelligence",
    readTime: "18 min",
    date: "May 15, 2026",
  },
  {
    id: "3",
    title: "Red Team Playbooks for AI-Assisted Reconnaissance",
    excerpt:
      "Operational frameworks for testing autonomous recon tools without crossing ethical or legal boundaries.",
    category: "Offensive Security",
    readTime: "14 min",
    date: "May 12, 2026",
  },
  {
    id: "4",
    title: "Trust Collapse in Algorithmic Feeds",
    excerpt:
      "When recommendation systems optimize for engagement over epistemic quality—and the societal cost of that tradeoff.",
    category: "Digital Trust",
    readTime: "9 min",
    date: "May 10, 2026",
  },
];

export const trendingDiscussions: Discussion[] = [
  {
    id: "1",
    title: "Are AI red teams becoming compliance theater?",
    excerpt:
      "The gap between checklist assessments and adversarial realism in enterprise security programs.",
    author: "cipherwave",
    replies: 47,
    views: 2840,
    tag: "AI Security",
    lastActive: "2h ago",
  },
  {
    id: "2",
    title: "Psychological manipulation in synthetic social graphs",
    excerpt:
      "How bot networks exploit parasocial dynamics—and what platform design can do about it.",
    author: "neuralghost",
    replies: 31,
    views: 1920,
    tag: "Cyber Psychology",
    lastActive: "5h ago",
  },
  {
    id: "3",
    title: "Zero-trust for the post-authentication internet",
    excerpt:
      "Session hijacking, token theft, and why identity verification needs continuous signals.",
    author: "voidsignal",
    replies: 58,
    views: 4100,
    tag: "Digital Trust",
    lastActive: "8h ago",
  },
  {
    id: "4",
    title: "Offensive tooling ethics in the age of AI copilots",
    excerpt:
      "Where do we draw the line between education, research, and weaponized automation?",
    author: "layerzero",
    replies: 22,
    views: 1560,
    tag: "Offensive Security",
    lastActive: "12h ago",
  },
];

export const mediaEpisodes: MediaEpisode[] = [
  {
    id: "1",
    title: "The Phantom Signal: Synthetic Trust",
    description:
      "A deep dive into how AI-generated content erodes verification norms—and what new trust primitives might emerge.",
    duration: "48:22",
    episode: "E12",
    guests: "Dr. Mira Chen, Alex Koval",
  },
  {
    id: "2",
    title: "Offensive AI: Capability vs. Responsibility",
    description:
      "Researchers and practitioners debate the frontier of autonomous offensive tooling.",
    duration: "62:15",
    episode: "E11",
    guests: "The Red Cell Collective",
  },
  {
    id: "3",
    title: "Internet Culture Under Algorithmic Pressure",
    description:
      "How platform incentives reshape discourse, identity, and collective memory online.",
    duration: "41:08",
    episode: "E10",
  },
];

export const navLinks = [
  { label: "Signals", href: "#signals" },
  { label: "Discussions", href: "#discussions" },
  { label: "Media", href: "#media" },
  { label: "Research", href: "#" },
];

export const footerColumns = [
  {
    title: "Explore",
    links: [
      { label: "AI Security", href: "#" },
      { label: "Threat Intelligence", href: "#" },
      { label: "Offensive Security", href: "#" },
      { label: "Digital Trust", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discussions", href: "#discussions" },
      { label: "Contributors", href: "#" },
      { label: "Guidelines", href: "#" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "About", href: "#" },
      { label: "Media", href: "#media" },
      { label: "Newsletter", href: "#" },
    ],
  },
];
