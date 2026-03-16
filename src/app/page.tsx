import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FounderSection from "@/components/FounderSection";
import HorizontalScroll from "@/components/HorizontalScroll";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import BuildingFunSection from "@/components/BuildingFunSection";
import NewsletterFeed from "@/components/NewsletterFeed";
import FeaturedVideos from "@/components/FeaturedVideos";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI for Founders - Weekly Newsletter, Podcast & Workshops for AI Entrepreneurs",
  description:
    "AI for Founders is your ultimate resource for building with AI. Join 20,000+ startup founders, CEOs, and entrepreneurs with our Top 100 Entrepreneurship podcast, weekly newsletter, and hands-on workshops.",
  keywords:
    "AI for founders, artificial intelligence for startups, AI tools, AI newsletter, AI podcast for entrepreneurs, startup AI strategies, business automation, AI workshops, founder education, entrepreneurship AI",
  alternates: { canonical: "https://aifor-founders.com" },
  openGraph: {
    title: "AI for Founders - Weekly Newsletter, Podcast & Workshops",
    description:
      "Join 20,000+ startup founders building with AI. Top 100 Entrepreneurship podcast, weekly newsletter, and hands-on workshops.",
    url: "https://aifor-founders.com",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <NewsletterFeed />
        <FeaturedVideos />
        <FounderSection />
        <HorizontalScroll />
        <TrustedBy />
        <Features />
        <BuildingFunSection />
        <Testimonials />
        <CallToAction />
      </main>
      <ExitIntentPopup />
      <Footer />
    </div>
  );
}
