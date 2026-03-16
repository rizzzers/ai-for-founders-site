import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Mic, Wrench } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Ryan Estes - Founder of AI for Founders | Kitcaster Co-Founder",
  description:
    "Meet Ryan Estes, co-founder of eight-figure bootstrapped agency Kitcaster (acquired by Moburst 2025) and creator of AI for Founders podcast and newsletter.",
  keywords: "Ryan Estes, entrepreneur, Kitcaster founder, AI for Founders creator, Denver startup founder",
  alternates: { canonical: "https://aiforfounders.co/about" },
  openGraph: {
    title: "About Ryan Estes - Founder of AI for Founders",
    description:
      "Co-founder of eight-figure bootstrapped agency Kitcaster and creator of AI for Founders podcast and newsletter.",
    url: "https://aiforfounders.co/about",
  },
};

const achievements = [
  "Top UI/UX Behance",
  "Inc Magazine Best Places to Work",
  "Colorado Companies to Watch",
  "ColoradoBiz Magazine Top 200 Private Owned Companies",
  "Denver Business Journal Best Places to Work",
];

const organizations = [
  "Project Angelheart", "Commún", "Project Worthmore",
  "Presque Isle Partnership", "Wild Willow Farm",
  "Triad Ladder of Hope", "Same Cafe", "Rocky Mountain Microfinance Institute",
];

const funFacts = [
  "As a recording artist, recorded, published, and distributed three albums, earning a top 20 spot on college radio and featuring in a SoBe mixtape alongside Sublime.",
  "Served as the founding Music Director for Dazzle Jazz, a renowned Denver institution recognized as one of the top 100 jazz clubs in the world.",
  "Began entrepreneurial journey in middle school by delivering papers for the Rocky Mountain News in South Denver.",
  "Organized \"Loud On Larimer,\" a Christmas choir supporting local businesses in Denver's RiNo community.",
  "Proud husband of a DU and Regis alum who works for Denver County Court, and father to two teenagers attending Denver South High School.",
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ryan Estes",
  jobTitle: "Co-founder & CEO",
  worksFor: { "@type": "Organization", name: "Kitcaster" },
  description:
    "Co-founder of eight-figure bootstrapped agency Kitcaster and creator of AI for Founders podcast and newsletter.",
  url: "https://aiforfounders.co/about",
  sameAs: ["https://ryanestes.info", "https://www.linkedin.com/in/ryanestesco/"],
  address: { "@type": "PostalAddress", addressLocality: "Denver", addressRegion: "CO" },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 max-w-3xl">
          <div className="text-center mb-12">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden">
              <img
                src="/lovable-uploads/7aaedb35-1754-4b1e-be4c-a00cb1313e38.png"
                alt="Ryan Estes"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">Ryan Estes</h1>
            <p className="text-primary font-medium">Co-founder at Kitcaster and Wildcast</p>
            <p className="text-sm text-muted-foreground mt-1">Denver, CO</p>
          </div>

          <div className="space-y-3 mb-12">
            <p className="text-foreground leading-relaxed">
              Ryan Estes is the co-founder of the eight-figure, bootstrapped agency{" "}
              <strong className="text-primary">Kitcaster</strong> and{" "}
              <strong className="text-primary">Wildcast</strong> ($1M raised). He validates and scales
              Kitcaster and Wildcast products. Kitcaster was acquired by Moburst in April 2025.
            </p>
            <p className="text-foreground leading-relaxed">
              Ryan is passionate about exploring entrepreneurship and the integration of kindness into
              business practices. He delves into topics like focus, awareness, and has a keen interest in
              startup culture and podcasting profitably.
            </p>
            <p className="text-foreground leading-relaxed">
              Ryan is the creator of the podcast, newsletter, and workshop series{" "}
              <strong className="text-primary">AI for Founders</strong>.
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4">Recent Team Accomplishments</h2>
            <ul className="space-y-2 text-foreground">
              {achievements.map((a, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4">Personal &amp; Community</h2>
            <p className="text-foreground leading-relaxed mb-4">
              An avid sportsman, Ryan trains in{" "}
              <strong className="text-primary">Brazilian Jiu-Jitsu (purple belt)</strong> and{" "}
              <strong className="text-primary">capoeira (yellow cord)</strong> and volunteers as a finance
              mentor. He and his team contribute over{" "}
              <strong className="text-primary">300 volunteer hours annually</strong> to local non-profits:
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {organizations.map((org, i) => (
                <span key={i} className="text-sm text-muted-foreground">
                  {org}
                  {i < organizations.length - 1 ? " ·" : ""}
                </span>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              Ryan writes about Product, Revops, and Founder-led marketing at{" "}
              <a
                href="https://ryanestes.info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ryanestes.info
              </a>
              .
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-4">Fun Facts</h2>
            <ul className="space-y-3">
              {funFacts.map((fact, i) => (
                <li key={i} className="text-foreground leading-relaxed flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-8 border-t border-border">
            <h2 className="text-xl font-bold text-foreground mb-4">Explore AI for Founders</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <Link
                href="/newsletter"
                className="group flex items-center gap-3 p-4 rounded-lg border border-border/40 hover:border-primary/30 transition-colors"
              >
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Newsletter</p>
                  <p className="text-sm text-muted-foreground">Weekly AI insights</p>
                </div>
              </Link>
              <Link
                href="/podcast-grid"
                className="group flex items-center gap-3 p-4 rounded-lg border border-border/40 hover:border-primary/30 transition-colors"
              >
                <Mic className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Podcast</p>
                  <p className="text-sm text-muted-foreground">Founder conversations</p>
                </div>
              </Link>
              <Link
                href="/resources"
                className="group flex items-center gap-3 p-4 rounded-lg border border-border/40 hover:border-primary/30 transition-colors"
              >
                <Wrench className="h-5 w-5 text-primary shrink-0" />
                <div>
                  <p className="font-medium group-hover:text-primary transition-colors">Resources</p>
                  <p className="text-sm text-muted-foreground">AI tools &amp; guides</p>
                </div>
              </Link>
            </div>
            <p className="text-muted-foreground text-sm mt-6 text-center">
              Read Ryan&apos;s writing on his blog{" "}
              <a
                href="https://ryanestes.info/ryan-estes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline font-medium"
              >
                here
              </a>
              .
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
