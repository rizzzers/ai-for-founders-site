"use client";

import { Play, ExternalLink, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EpisodeCard from "@/components/EpisodeCard";
import TrustedBy from "@/components/TrustedBy";
import { usePodcastFeed } from "@/hooks/usePodcastFeed";
import { Alert, AlertDescription } from "@/components/ui/alert";

const RSS_FEED_URL = "https://anchor.fm/s/1004a68d8/podcast/rss";

const platformLinks = [
  { name: "Spotify", url: "https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va", color: "bg-green-500 hover:bg-green-600" },
  { name: "Apple Podcasts", url: "https://podcasts.apple.com/us/podcast/ai-for-founders/id1798265052", color: "bg-gray-900 hover:bg-gray-800" },
  { name: "YouTube", url: "https://www.youtube.com/@AIforfounders1", color: "bg-red-500 hover:bg-red-600" },
];

export default function PodcastClient() {
  const { episodes, loading, error } = usePodcastFeed(RSS_FEED_URL);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Play className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-6xl font-bold gradient-text">AI for Founders Podcast</h1>
          </div>
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

        <div className="text-center mb-16 max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The podcast ranks in the top 5% of all active podcasts and top 100 in Entrepreneurship.
            Across the podcast, social, and newsletter, we have 21,000+ highly engaged subscribers,
            90% of whom are funded founders, entrepreneurs with successful exits, and CEOs.
          </p>
        </div>

        <TrustedBy />

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Latest Episodes</h2>

          {loading && (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2 text-muted-foreground">Loading episodes...</span>
            </div>
          )}

          {error && (
            <Alert className="mb-8">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}. Please try refreshing the page.</AlertDescription>
            </Alert>
          )}

          {!loading && !error && episodes.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">No episodes found. Please check back later.</div>
          )}

          <div className="space-y-8">
            {episodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>

          {!loading && episodes.length > 0 && (
            <div className="text-center mt-12 p-8 bg-muted rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Never Miss an Episode</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to AI for Founders on your favorite podcast platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                {platformLinks.map((platform) => (
                  <Button key={platform.name} asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    <a href={platform.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Subscribe on {platform.name}
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
