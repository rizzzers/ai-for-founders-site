import type { Metadata } from "next";
import PodcastClient from "./PodcastClient";

export const metadata: Metadata = {
  title: "AI for Founders Podcast - Top 100 Entrepreneurship Podcast | Weekly AI Insights",
  description:
    "Listen to AI for Founders podcast — Top 5% of all podcasts, Top 100 in Entrepreneurship. Weekly interviews with successful founders, expert AI strategies, and actionable insights for entrepreneurs building AI-powered businesses.",
  keywords:
    "AI podcast, founders podcast, artificial intelligence business, startup AI strategies, entrepreneur podcast, top entrepreneurship podcast, AI business insights, founder interviews",
  alternates: { canonical: "https://aifor-founders.com/podcast" },
  openGraph: {
    title: "AI for Founders Podcast - Top 100 Entrepreneurship Podcast",
    description: "Top 5% of all podcasts. Weekly AI insights for founders navigating the AI revolution.",
    url: "https://aifor-founders.com/podcast",
    type: "website",
  },
};

export default function PodcastPage() {
  return <PodcastClient />;
}
