"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink, Star, Youtube } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { Tool } from "@/data/tools";

/** Extract YouTube embed URL from various YouTube link formats */
const getYouTubeEmbedUrl = (url: string): string | null => {
  try {
    const parsed = new URL(url);
    let videoId: string | null = null;
    if (parsed.hostname.includes("youtu.be")) {
      videoId = parsed.pathname.slice(1);
    } else if (parsed.hostname.includes("youtube.com")) {
      videoId = parsed.searchParams.get("v") || parsed.pathname.split("/").pop() || null;
    }
    if (videoId) {
      videoId = videoId.split("&")[0].split("?")[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
  } catch {
    // ignore
  }
  return null;
};

interface ToolDetailClientProps {
  tool: Tool;
  theme: string;
  category: string;
}

export default function ToolDetailClient({ tool, theme, category }: ToolDetailClientProps) {
  const embedUrl = tool.youtubeUrl ? getYouTubeEmbedUrl(tool.youtubeUrl) : null;
  const faviconUrl = `https://www.google.com/s2/favicons?domain=${new URL(tool.url).hostname}&sz=64`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/resources"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Resources
          </Link>

          {/* Header */}
          <div className="flex items-start gap-4 mb-8">
            <img
              src={faviconUrl}
              alt=""
              className="w-12 h-12 rounded-lg shrink-0 mt-1"
            />
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="text-3xl md:text-4xl font-bold gradient-text">
                  {tool.name}
                </h1>
                {tool.recommended && (
                  <Badge className="bg-primary text-primary-foreground">
                    <Star className="h-3 w-3 mr-1" />
                    Recommended
                  </Badge>
                )}
              </div>
              <div className="flex gap-2 mb-4">
                <Badge variant="outline">{theme}</Badge>
                <Badge variant="secondary">{category}</Badge>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {tool.description}
              </p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-4 mb-12 flex-wrap">
            <Button size="lg" asChild>
              <a
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                Visit {tool.name}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
            {tool.hasYoutube && tool.youtubeUrl && (
              <Button size="lg" variant="outline" asChild>
                <a
                  href={tool.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Youtube className="h-4 w-4 text-red-500" />
                  Watch Interview
                </a>
              </Button>
            )}
          </div>

          {/* Extended copy */}
          {(tool.whatItIs || tool.whoItsFor || (tool.whyItsBetter && tool.whyItsBetter.length > 0)) && (
            <div className="space-y-8 mb-12">
              {tool.whatItIs && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-foreground">What it is</h2>
                  <p className="text-muted-foreground leading-relaxed">{tool.whatItIs}</p>
                </div>
              )}
              {tool.whoItsFor && (
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-foreground">Who it&apos;s for</h2>
                  <p className="text-muted-foreground leading-relaxed">{tool.whoItsFor}</p>
                </div>
              )}
              {tool.whyItsBetter && tool.whyItsBetter.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-3 text-foreground">Why it&apos;s better</h2>
                  <ul className="space-y-2">
                    {tool.whyItsBetter.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* YouTube embed */}
          {embedUrl && (
            <Card className="mb-12 overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video">
                  <iframe
                    src={embedUrl}
                    title={`${tool.name} - Interview on AI for Founders`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-4">Explore more AI tools for founders</p>
            <Button variant="outline" asChild>
              <Link href="/resources">Browse All Tools</Link>
            </Button>
          </div>
        </div>
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}
