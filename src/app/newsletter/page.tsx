import type { Metadata } from "next";
import NewsletterClient from "./NewsletterClient";

export const metadata: Metadata = {
  title: "Newsletter | AI for Founders",
  description:
    "Weekly AI insights for founders. No fluff, just the plays that make you dangerous. Subscribe to the AI for Founders newsletter.",
  keywords: "AI newsletter, founder insights, startup AI, entrepreneurship, AI strategies",
  alternates: { canonical: "https://aiforfounders.co/newsletter" },
  openGraph: {
    title: "The AI for Founders Newsletter",
    description: "Weekly signal for the creators of the new era. No fluff, just plays that make you dangerous.",
    url: "https://aiforfounders.co/newsletter",
  },
};

export default function NewsletterPage() {
  return <NewsletterClient />;
}
