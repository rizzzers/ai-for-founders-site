import type { Metadata } from "next";
import PodcastGridClient from "./PodcastGridClient";

export const metadata: Metadata = {
  title: "All Episodes - AI for Founders Podcast",
  description:
    "Browse all episodes of the AI for Founders podcast. Top 100 Entrepreneurship podcast featuring weekly interviews with successful founders and AI strategies.",
  keywords:
    "AI podcast episodes, founders podcast, all episodes, AI for founders, entrepreneurship podcast",
  alternates: { canonical: "https://aifor-founders.com/podcast-grid" },
  openGraph: {
    title: "All Episodes - AI for Founders Podcast",
    description: "Browse all episodes of the Top 100 Entrepreneurship podcast.",
    url: "https://aifor-founders.com/podcast-grid",
  },
};

export default function PodcastGridPage() {
  return <PodcastGridClient />;
}
