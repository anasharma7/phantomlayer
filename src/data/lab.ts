import type { LabProject } from "@/types/content";

export const labProjects: LabProject[] = [
  {
    type: "lab",
    title: "MCP Server Security Auditor",
    description:
      "Static and dynamic analysis toolkit for Model Context Protocol servers — schema validation, auth bypass, and data exfil paths.",
    slug: "mcp-server-security-auditor",
    date: "2026-08-15",
    category: "ai-security",
    tags: ["MCP", "API security", "LLM tooling"],
    published: true,
    featured: true,
    status: "active",
    stack: ["TypeScript", "Node.js", "Zod"],
  },
  {
    type: "lab",
    title: "PortSwigger Academy Tracker",
    description:
      "Personal lab journal tracking OWASP Top 10 exploits, blind SQLi chains, and SSRF pivot techniques.",
    slug: "portswigger-academy-tracker",
    date: "2026-06-01",
    category: "offensive-security",
    tags: ["web security", "Burp Suite", "CTF"],
    published: true,
    featured: true,
    status: "active",
    stack: ["Burp Suite", "Python", "Docker"],
  },
  {
    type: "lab",
    title: "LLM Prompt Injection Sandbox",
    description:
      "Controlled environment for testing jailbreak patterns, tool-use abuse, and guardrail bypass scenarios.",
    slug: "llm-prompt-injection-sandbox",
    date: "2026-05-14",
    category: "ai-security",
    tags: ["LLM", "red teaming", "guardrails"],
    published: true,
    featured: true,
    status: "active",
    stack: ["Python", "OpenAI API", "LangChain"],
  },
  {
    type: "lab",
    title: "Urban Threat Surface Mapper",
    description:
      "GIS overlay combining public infrastructure data with open-source vulnerability feeds.",
    slug: "urban-threat-surface-mapper",
    date: "2026-04-03",
    category: "geospatial",
    tags: ["QGIS", "OSINT", "mapping"],
    published: true,
    status: "complete",
    stack: ["QGIS", "PostGIS", "Mapbox"],
  },
];
