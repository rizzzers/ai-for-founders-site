import { themes, type Tool } from "@/data/tools";
import { generateSlug } from "@/utils/slugify";

/** Flatten all tools from the themes structure */
const getAllTools = (): Tool[] => {
  const tools: Tool[] = [];
  for (const theme of themes) {
    for (const category of theme.categories) {
      tools.push(...category.tools);
    }
  }
  return tools;
};

const allTools = getAllTools();

/** Normalize a URL for comparison (strip protocol, www, trailing slash) */
const normalize = (url: string): string =>
  url.toLowerCase().replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/+$/, "");

/**
 * Manual overrides: map episode slugs to tool names for curated matches.
 * Use when the connection is thematic rather than a direct URL match.
 */
const TOOL_OVERRIDES: Record<string, string[]> = {
  "most-founders-pick-the-wrong-tools": ["Software Finder"],
  "human-machines-the-ai-collaboration-coach-that-protects-judgment": ["Warmstart"],
  "knapsack-scaling-teams-without-chaos": ["Knapsack"],
  "wednesday-sprint-zero-avoiding-the-mvp-trap": ["Wednesday"],
  "stone-systems-software-that-meets-contractors-where-they-are": ["Stone Systems"],
  "stop-building-do-this-first": ["ThinkUp"],
  "ai-is-quietly-stealing-your-life-s-work": ["Kind App"],
  "she-exited-in-18-months-then-walked-away-to-find-stillness": ["Inkfish"],
  "congrats-on-the-revenue-sorry-about-your-money": ["Pentane"],
  "searchable-personal-memory-now": ["Historic"],
  "will-vc-destroy-your-startup": ["Denver Ventures"],
  "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means": ["Sheets Resume Builder", "ReadyNDA"],
};

/** Tools to exclude from auto-matching for specific episodes */
const TOOL_EXCLUDES: Record<string, string[]> = {
  "congrats-on-the-revenue-sorry-about-your-money": ["Nue"],
};

/** Find a tool by name */
const findToolByName = (name: string): { tool: Tool; slug: string } | null => {
  const tool = allTools.find(t => t.name.toLowerCase() === name.toLowerCase());
  if (!tool) return null;
  return { tool, slug: generateSlug(tool.name) };
};

/**
 * Given a list of link URLs from a podcast episode, an optional episode slug,
 * and an optional episode title, return matching tools with their slug.
 */
export const findMatchingTools = (
  linkUrls: string[],
  episodeSlug?: string,
  episodeTitle?: string
): { tool: Tool; slug: string }[] => {
  const matches: { tool: Tool; slug: string }[] = [];
  const seen = new Set<string>();

  const excludes = episodeSlug ? (TOOL_EXCLUDES[episodeSlug] || []).map(n => n.toLowerCase()) : [];

  // 1. Check manual overrides first
  if (episodeSlug && TOOL_OVERRIDES[episodeSlug]) {
    for (const toolName of TOOL_OVERRIDES[episodeSlug]) {
      const match = findToolByName(toolName);
      if (match && !seen.has(match.tool.name)) {
        seen.add(match.tool.name);
        matches.push(match);
      }
    }
  }

  // 2. Match by tool name appearing in episode title
  if (episodeTitle) {
    const titleLower = episodeTitle.toLowerCase();
    for (const tool of allTools) {
      if (
        !seen.has(tool.name) &&
        tool.name.length > 2 &&
        titleLower.includes(tool.name.toLowerCase()) &&
        !excludes.includes(tool.name.toLowerCase())
      ) {
        seen.add(tool.name);
        matches.push({ tool, slug: generateSlug(tool.name) });
      }
    }
  }

  // 3. Auto-match from URLs
  for (const link of linkUrls) {
    const normalizedLink = normalize(link);
    for (const tool of allTools) {
      const normalizedTool = normalize(tool.url);
      if (
        !seen.has(tool.name) &&
        !excludes.includes(tool.name.toLowerCase()) &&
        (normalizedLink.includes(normalizedTool) || normalizedTool.includes(normalizedLink))
      ) {
        seen.add(tool.name);
        matches.push({ tool, slug: generateSlug(tool.name) });
      }
    }
  }

  return matches;
};
