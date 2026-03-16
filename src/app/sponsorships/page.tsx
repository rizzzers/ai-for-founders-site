import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PartnerHero from "@/components/partner/PartnerHero";
import PricingTiers from "@/components/partner/PricingTiers";
import WhyItMatters from "@/components/partner/WhyItMatters";
import AudienceSection from "@/components/partner/AudienceSection";
import SuccessStories from "@/components/partner/SuccessStories";
import PartnerForm from "@/components/partner/PartnerForm";

export const metadata: Metadata = {
  title: "Sponsorship Opportunities - AI for Founders | Turn Attention Into Assets",
  description:
    "Turn attention into assets. Reach 20,000+ engaged startup founders across email, audio, and video in one coordinated campaign. Guaranteed distribution, native host integration, and reusable content.",
  keywords:
    "AI podcast sponsorship, newsletter sponsorship, founder audience, startup advertising, podcast ads, AI for founders partnership",
  alternates: { canonical: "https://aiforfounders.co/sponsorships" },
  openGraph: {
    title: "Sponsorship Opportunities - AI for Founders",
    description: "Reach 20,000+ engaged startup founders across email, audio, and video.",
    url: "https://aiforfounders.co/sponsorships",
  },
};

export default function SponsorshipsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <PartnerHero />
        <PricingTiers />
        <WhyItMatters />
        <AudienceSection />
        <SuccessStories />
        <PartnerForm />
      </main>
      <Footer />
    </div>
  );
}
