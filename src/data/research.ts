import type { ResearchPost } from "@/types/content";

export const researchPosts: ResearchPost[] = [
  {
    type: "research",
    title: "Agentic AI and the Expanding Attack Surface",
    description:
      "Why autonomous tool-use in LLM agents creates new classes of indirect injection and privilege escalation risks.",
    slug: "agentic-ai-expanding-attack-surface",
    date: "2026-08-20",
    category: "ai-security",
    tags: ["agentic AI", "tool use", "supply chain"],
    published: true,
    featured: true,
    readingTime: "10 min",
  },
  {
    type: "research",
    title: "Trust & Safety in the Age of Synthetic Media",
    description:
      "How platform abuse teams should rethink detection pipelines when generative AI collapses the cost of deception.",
    slug: "trust-safety-synthetic-media",
    date: "2026-06-18",
    category: "trust-safety",
    tags: ["deepfakes", "content moderation", "AI safety"],
    published: true,
    featured: true,
    readingTime: "12 min",
  },
  {
    type: "research",
    title: "Offensive Security as Systems Thinking",
    description:
      "A framework for reading attack surfaces the way architects read blueprints — from identity layers to supply chains.",
    slug: "offensive-security-systems-thinking",
    date: "2026-05-02",
    category: "offensive-security",
    tags: ["red teaming", "architecture", "threat modeling"],
    published: true,
    featured: true,
    readingTime: "9 min",
  },
  {
    type: "research",
    title: "Digital Identity Beyond the Login",
    description:
      "Exploring reputation graphs, device signals, and behavioral biometrics as the next frontier of online trust.",
    slug: "digital-identity-beyond-login",
    date: "2026-04-11",
    category: "digital-culture",
    tags: ["identity", "fraud", "platform design"],
    published: true,
    readingTime: "8 min",
  },
  {
    type: "research",
    title: "Geospatial Intelligence for Cyber Operators",
    description:
      "When physical-world context changes how you prioritize vulnerabilities and map adversary infrastructure.",
    slug: "geospatial-intelligence-cyber",
    date: "2026-03-22",
    category: "geospatial",
    tags: ["GIS", "OSINT", "infrastructure"],
    published: true,
    readingTime: "11 min",
  },
];
