export const siteConfig = {
  name: "Ana Sharma",
  title: "Ana Sharma — Cyber + AI Research",
  description:
    "A cyber research lab and intelligence archive exploring offensive security, AI safety, trust & safety, digital identity, and emerging technologies.",
  url: "https://anasharma.dev",
  ogImage: "/og.png",
  author: {
    name: "Ana Sharma",
    email: "hello@anasharma.dev",
  },
  identity: {
    headline: "Cyber + AI Research",
    statement:
      "Mapping the intersection of offensive security, AI-era trust systems, and internet-native culture — one experiment at a time.",
    status: "Intelligence archive — online",
  },
  links: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    substack: "https://substack.com/",
    twitter: "https://x.com/",
  },
} as const;

export type SiteConfig = typeof siteConfig;
