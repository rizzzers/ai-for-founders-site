import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blogPosts";
import { getAllTools, generateToolSlug } from "@/data/tools";
import { fetchRssFeed } from "@/lib/fetchRssFeed";
import { generateSlug } from "@/utils/slugify";

const BASE = "https://aiforfounders.com";

const staticRoutes: MetadataRoute.Sitemap = [
  { url: BASE, lastModified: new Date(), changeFrequency: "daily", priority: 1.0 },
  { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/newsletter`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
  { url: `${BASE}/podcast-grid`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
  { url: `${BASE}/podcast`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  { url: `${BASE}/resources`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  { url: `${BASE}/frameworks`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  { url: `${BASE}/glossary`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  { url: `${BASE}/workshops`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  { url: `${BASE}/sponsorships`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/partner`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  { url: `${BASE}/recos`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  { url: `${BASE}/schedule-podcast`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  { url: `${BASE}/brand-onboarding`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Newsletter posts — use post.date for lastModified
  const newsletterRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE}/newsletter/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Tool pages — no publish date, use a stable fallback
  const toolRoutes: MetadataRoute.Sitemap = getAllTools().map((tool) => ({
    url: `${BASE}/tools/${generateToolSlug(tool.name)}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Podcast episodes from RSS — use publishDate for lastModified
  let episodeRoutes: MetadataRoute.Sitemap = [];
  try {
    const episodes = await fetchRssFeed();
    episodeRoutes = episodes.map((ep) => ({
      url: `${BASE}/podcast-grid/${generateSlug(ep.title)}`,
      lastModified: ep.publishDate ? new Date(ep.publishDate) : undefined,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }));
  } catch (err) {
    console.error("Sitemap: RSS fetch failed, skipping episode routes", err);
  }

  return [...staticRoutes, ...newsletterRoutes, ...toolRoutes, ...episodeRoutes];
}
