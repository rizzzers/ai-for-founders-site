import type { Metadata } from "next";
import GlossaryClient from "./GlossaryClient";

export const metadata: Metadata = {
  title: "AI Glossary for Founders | Key Terms from Every Episode",
  description:
    "A comprehensive glossary of AI, startup, and technology terms discussed across every episode of the AI for Founders podcast. Searchable by letter, guest, or keyword.",
  keywords:
    "AI glossary, startup terms, founder vocabulary, artificial intelligence definitions, AI for founders glossary",
  alternates: { canonical: "https://aiforfounders.co/glossary" },
  openGraph: {
    title: "AI Founder Glossary - AI for Founders",
    description: "Every important AI and startup term from the podcast, organized and searchable.",
    url: "https://aiforfounders.co/glossary",
  },
};

export default function GlossaryPage() {
  return <GlossaryClient />;
}
