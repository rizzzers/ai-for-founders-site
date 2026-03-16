import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Top AI Tools for Founders 2026 - Curated Resource Directory",
  description:
    "Discover 100+ curated AI tools for startup founders. From automation to analytics, marketing to development — find the perfect AI solutions to scale your business faster.",
  keywords:
    "AI tools for startups, best AI software founders, artificial intelligence business tools, startup automation tools, AI productivity software, AI tools directory, founder resources",
  alternates: { canonical: "https://aifor-founders.com/resources" },
  openGraph: {
    title: "Top AI Tools for Founders 2026",
    description: "100+ curated AI tools to help startup founders build faster and scale smarter.",
    url: "https://aifor-founders.com/resources",
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}
