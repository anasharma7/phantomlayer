export const mainNav = [
  { title: "Research", href: "/research", description: "Long-form analysis & essays" },
  { title: "Cyber Lab", href: "/lab", description: "Projects & experiments" },
  { title: "Podcast", href: "/podcast", description: "Episodes & conversations" },
  { title: "About", href: "/about", description: "Story & philosophy" },
  { title: "Contact", href: "/contact", description: "Links & reach" },
] as const;

export type NavItem = (typeof mainNav)[number];
