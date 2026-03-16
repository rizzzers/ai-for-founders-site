"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ExternalLink, Loader2, AlertCircle, Rocket, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePodcastFeed } from "@/hooks/usePodcastFeed";
import { useYouTubeThumbnails } from "@/hooks/useYouTubeThumbnails";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { generateSlug } from "@/utils/slugify";
import { findMatchingTools } from "@/utils/matchTools";

const ARTWORK_OVERRIDES: Record<string, string> = {
  "stop-building-do-this-first": "/lovable-uploads/Ohad_thumb.png",
  "ai-is-quietly-stealing-your-life-s-work": "/lovable-uploads/John_Thumb.png",
  "she-exited-in-18-months-then-walked-away-to-find-stillness": "/lovable-uploads/Alyssa_Thumb.png",
  "the-uncanny-valley-is-real": "/lovable-uploads/Marcin_Thumb.png",
  "speed-is-killing-ai-startups": "/lovable-uploads/James_Thumb.png",
};

const RSS_FEED_URL = "https://anchor.fm/s/1004a68d8/podcast/rss";

const platformLinks = [
  { name: "Spotify", url: "https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va", color: "bg-green-500 hover:bg-green-600" },
  { name: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/ai-for-founders/id1798265052", color: "bg-gray-900 hover:bg-gray-800" },
  { name: "YouTube", url: "https://www.youtube.com/@AIforfounders1", color: "bg-red-500 hover:bg-red-600" },
];

const INITIAL_DISPLAY_COUNT = 15;

const formatDate = (dateString: string) => {
  try {
    return new Date(dateString).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  } catch {
    return dateString;
  }
};

export default function PodcastGridClient() {
  const { episodes, loading, error } = usePodcastFeed(RSS_FEED_URL);
  const [showAll, setShowAll] = useState(false);

  const episodeTitles = useMemo(() => episodes.map((ep) => ep.title), [episodes]);
  const displayedEpisodes = showAll ? episodes : episodes.slice(0, INITIAL_DISPLAY_COUNT);
  const { thumbnails } = useYouTubeThumbnails(episodeTitles);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">AI for Founders Podcast</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Top 100 podcast in Entrepreneurship with 21,000+ subscribers. Weekly insights and strategies
            for founders navigating the AI revolution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <span className="text-sm text-muted-foreground">Listen on:</span>
            <div className="flex gap-3">
              {platformLinks.map((platform) => (
                <Button key={platform.name} asChild className={`${platform.color} text-white`}>
                  <a href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    {platform.name}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </header>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Episodes</h2>

          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2 text-muted-foreground">Loading episodes...</span>
            </div>
          )}

          {error && (
            <Alert className="mb-8 max-w-2xl mx-auto">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}. Please try refreshing the page.</AlertDescription>
            </Alert>
          )}

          {!loading && !error && episodes.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">No episodes found. Please check back later.</div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedEpisodes.map((episode, index) => (
              <Link key={episode.id} href={`/podcast-grid/${generateSlug(episode.title)}`} className="group">
                <Card className="h-full overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 cursor-pointer">
                  {(() => {
                    const slug = generateSlug(episode.title);
                    const imgSrc = ARTWORK_OVERRIDES[slug] || thumbnails[index]?.url || episode.imageUrl;
                    if (!imgSrc) return null;
                    return (
                      <div className="relative overflow-hidden aspect-video">
                        <img
                          src={imgSrc}
                          alt={`${episode.title} cover art`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-white text-sm font-medium">Click to listen</span>
                        </div>
                      </div>
                    );
                  })()}
                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                      {episode.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{formatDate(episode.publishDate)}</span>
                      {episode.duration && (
                        <>
                          <span className="text-muted-foreground/50">•</span>
                          <span>{episode.duration}</span>
                        </>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {episode.description}
                    </p>
                    <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border">
                      {(() => {
                        const linkUrls = (episode.links || []).map((l) => l.url);
                        const matched = findMatchingTools(linkUrls, generateSlug(episode.title), episode.title);
                        if (matched.length === 0) return null;
                        return matched.slice(0, 2).map(({ tool, slug }) => (
                          <Link
                            key={slug}
                            href={`/tools/${slug}`}
                            onClick={(e) => e.stopPropagation()}
                            className="text-xs font-medium text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                          >
                            <Rocket className="h-3 w-3" />
                            {tool.name}
                          </Link>
                        ));
                      })()}
                      <a
                        href="https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1 ml-auto"
                      >
                        Spotify <ExternalLink className="h-3 w-3" />
                      </a>
                      <a
                        href="https://podcasts.apple.com/us/podcast/ai-for-founders/id1798265052"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        Apple <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {!loading && episodes.length > 0 && (
            <div className="text-center mt-12 p-8 bg-muted rounded-lg">
              {!showAll && episodes.length > INITIAL_DISPLAY_COUNT ? (
                <>
                  <h3 className="text-2xl font-bold mb-4">Want to hear more?</h3>
                  <p className="text-muted-foreground mb-6">
                    You&apos;re viewing the latest {INITIAL_DISPLAY_COUNT} episodes. There are{" "}
                    {episodes.length - INITIAL_DISPLAY_COUNT} more to explore.
                  </p>
                  <Button size="lg" onClick={() => setShowAll(true)}>Show All Episodes</Button>
                </>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-4">Never Miss an Episode</h3>
                  <p className="text-muted-foreground mb-6">
                    Subscribe to AI for Founders on your favorite podcast platform.
                  </p>
                  <Button asChild size="lg">
                    <a href="https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Subscribe Now <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
