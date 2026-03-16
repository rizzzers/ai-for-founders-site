import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, ExternalLink, Headphones } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AudioPlayer from "@/components/AudioPlayer";
import { fetchRssFeed } from "@/lib/fetchRssFeed";
import { generateSlug, findEpisodeBySlug } from "@/utils/slugify";
import { Button } from "@/components/ui/button";

/** Artwork overrides for specific episodes (preserved from original site) */
const ARTWORK_OVERRIDES: Record<string, string> = {
  "stop-building-do-this-first": "/lovable-uploads/Ohad_thumb.png",
  "ai-is-quietly-stealing-your-life-s-work": "/lovable-uploads/John_Thumb.png",
  "she-exited-in-18-months-then-walked-away-to-find-stillness": "/lovable-uploads/Alyssa_Thumb.png",
  "congrats-on-the-revenue-sorry-about-your-money": "/lovable-uploads/Adam_Thumb.png",
  "the-uncanny-valley-is-real": "/lovable-uploads/Marcin_Thumb.png",
  "speed-is-killing-ai-startups": "/lovable-uploads/James_Thumb.png",
  "will-vc-destroy-your-startup": "/lovable-uploads/Carson_Thumb.png",
  "ai-didnt-take-your-job-it-froze-the-hiring-line-heres-what-that-means": "/lovable-uploads/Colin_Thumb.png",
};

export async function generateStaticParams() {
  const episodes = await fetchRssFeed();
  return episodes.map((ep) => ({ slug: generateSlug(ep.title) }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const episodes = await fetchRssFeed();
  const result = findEpisodeBySlug(episodes, params.slug);
  if (!result) return { title: "Episode Not Found" };

  const { episode } = result;
  const artwork = ARTWORK_OVERRIDES[params.slug] ?? episode.imageUrl;
  const pubDate = episode.publishDate
    ? new Date(episode.publishDate).toISOString()
    : undefined;

  return {
    title: episode.title,
    description: episode.description || `Listen to this episode of the AI for Founders podcast.`,
    alternates: {
      canonical: `https://aifor-founders.com/podcast-grid/${params.slug}`,
    },
    openGraph: {
      title: episode.title,
      description: episode.description,
      url: `https://aifor-founders.com/podcast-grid/${params.slug}`,
      type: "article",
      ...(artwork ? { images: [{ url: artwork, width: 1200, height: 630, alt: episode.title }] } : {}),
      ...(pubDate ? { publishedTime: pubDate } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: episode.title,
      description: episode.description,
      ...(artwork ? { images: [artwork] } : {}),
    },
  };
}

export default async function EpisodeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const episodes = await fetchRssFeed();
  const result = findEpisodeBySlug(episodes, params.slug);
  if (!result) notFound();

  const { episode, index } = result;
  const artwork = ARTWORK_OVERRIDES[params.slug] ?? episode.imageUrl;

  const pubDate = episode.publishDate
    ? new Date(episode.publishDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  // Related episodes: prev/next
  const prev = episodes[index + 1] ?? null;
  const next = episodes[index - 1] ?? null;

  const podcastEpisodeSchema = {
    "@context": "https://schema.org",
    "@type": "PodcastEpisode",
    name: episode.title,
    description: episode.description,
    url: `https://aifor-founders.com/podcast-grid/${params.slug}`,
    datePublished: episode.publishDate
      ? new Date(episode.publishDate).toISOString()
      : undefined,
    audio: episode.audioUrl
      ? {
          "@type": "AudioObject",
          contentUrl: episode.audioUrl,
          encodingFormat: "audio/mpeg",
        }
      : undefined,
    image: artwork,
    partOfSeries: {
      "@type": "PodcastSeries",
      name: "AI for Founders",
      url: "https://aifor-founders.com/podcast-grid",
    },
    author: {
      "@type": "Person",
      name: "Ryan Estes",
      url: "https://aifor-founders.com/about",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(podcastEpisodeSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 max-w-3xl">
          {/* Back link */}
          <Link
            href="/podcast-grid"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            All Episodes
          </Link>

          <article>
            {/* Hero artwork */}
            {artwork && (
              <div className="rounded-xl overflow-hidden mb-8 max-h-80">
                <img
                  src={artwork}
                  alt={episode.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Meta */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              {pubDate && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {pubDate}
                </span>
              )}
              {episode.duration && (
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {episode.duration}
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text leading-tight">
              {episode.title}
            </h1>

            {/* Audio player */}
            {episode.audioUrl && (
              <div className="mb-8">
                <AudioPlayer src={episode.audioUrl} title={episode.title} />
              </div>
            )}

            {/* Listen links */}
            <div className="flex flex-wrap gap-3 mb-10">
              {episode.spotifyUrl && (
                <Button variant="outline" size="sm" asChild>
                  <a href={episode.spotifyUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                    <Headphones className="h-4 w-4" />
                    Listen on Spotify
                  </a>
                </Button>
              )}
              <Button variant="outline" size="sm" asChild>
                <a
                  href="https://podcasts.apple.com/us/podcast/ai-for-founders/id1798265052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gap-2"
                >
                  <Headphones className="h-4 w-4" />
                  Apple Podcasts
                </a>
              </Button>
            </div>

            {/* Show notes */}
            {episode.fullShowNotes.length > 0 && (
              <section className="mb-10">
                <h2 className="text-xl font-bold mb-4">Show Notes</h2>
                <div className="space-y-3 text-muted-foreground leading-relaxed">
                  {episode.fullShowNotes.map((note, i) => (
                    <p key={i}>{note}</p>
                  ))}
                </div>
              </section>
            )}

            {/* Links from episode */}
            {episode.links.length > 0 && (
              <section className="mb-10">
                <h2 className="text-xl font-bold mb-4">Links &amp; Resources</h2>
                <ul className="space-y-2">
                  {episode.links.map((link, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <ExternalLink className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline underline-offset-4 text-sm break-all"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </article>

          {/* Prev / Next navigation */}
          {(prev || next) && (
            <nav className="pt-8 border-t border-border/30 grid sm:grid-cols-2 gap-4">
              {prev && (
                <Link
                  href={`/podcast-grid/${generateSlug(prev.title)}`}
                  className="group flex flex-col gap-1 p-4 rounded-lg border border-border/40 hover:border-primary/30 transition-colors"
                >
                  <span className="text-xs text-muted-foreground">← Previous</span>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                    {prev.title}
                  </span>
                </Link>
              )}
              {next && (
                <Link
                  href={`/podcast-grid/${generateSlug(next.title)}`}
                  className="group flex flex-col gap-1 p-4 rounded-lg border border-border/40 hover:border-primary/30 transition-colors sm:text-right"
                >
                  <span className="text-xs text-muted-foreground">Next →</span>
                  <span className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                    {next.title}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
