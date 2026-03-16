import type { Metadata } from "next";
import PartnerClient from "./PartnerClient";

export const metadata: Metadata = {
  title: "Partner With AI for Founders",
  description:
    "Explore partnership opportunities with AI for Founders. Sponsor the podcast, apply for an interview, or feature your product to our audience of 20,000+ founders.",
  keywords: "AI podcast partnership, podcast interview, sponsor podcast, founder audience",
  alternates: { canonical: "https://aiforfounders.co/partner" },
  openGraph: {
    title: "Partner With AI for Founders",
    description: "Reach 20,000+ founders. Sponsor the podcast, apply for interview, or feature your product.",
    url: "https://aiforfounders.co/partner",
  },
};

export default function PartnerPage() {
  return <PartnerClient />;
}
