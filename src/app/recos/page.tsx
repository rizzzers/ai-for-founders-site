import type { Metadata } from "next";
import RecosClient from "./RecosClient";

export const metadata: Metadata = {
  title: "Recommended Tools | AI for Founders",
  description: "A curated list of AI tools recommended by AI for Founders, organized by theme and category.",
  alternates: { canonical: "https://aifor-founders.com/recos" },
};

export default function RecosPage() {
  return <RecosClient />;
}
