import type { Metadata } from "next";
import BrandOnboardingClient from "./BrandOnboardingClient";

export const metadata: Metadata = {
  title: "Brand Onboarding - Partner with AI for Founders",
  description:
    "Submit your brand information and marketing assets to begin your sponsorship journey with AI for Founders podcast and newsletter.",
  keywords: "brand onboarding, sponsorship application, AI podcast advertising, newsletter advertising",
  alternates: { canonical: "https://aiforfounders.co/brand-onboarding" },
};

export default function BrandOnboardingPage() {
  return <BrandOnboardingClient />;
}
