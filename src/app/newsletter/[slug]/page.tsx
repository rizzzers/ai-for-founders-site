import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { Badge } from "@/components/ui/badge";
import { blogPosts, formatDate, type BlogPost } from "@/data/blogPosts";

/** Resolve StaticImageData or string image to a plain URL string */
const getImageSrc = (image: BlogPost["image"]): string | undefined => {
  if (!image) return undefined;
  if (typeof image === "string") return image;
  return image.src;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };

  const imageSrc = getImageSrc(post.image);

  return {
    title: post.title,
    description: post.excerpt,
    keywords:
      "AI newsletter, founder insights, startup AI, entrepreneurship, AI strategies",
    alternates: {
      canonical: `https://aifor-founders.com/newsletter/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://aifor-founders.com/newsletter/${post.slug}`,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: ["Ryan Estes"],
      ...(imageSrc
        ? { images: [{ url: imageSrc, alt: post.title }] }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(imageSrc ? { images: [imageSrc] } : {}),
    },
  };
}

export default function NewsletterPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const imageSrc = getImageSrc(post.image);

  // Related: same category first, then recent, excluding current
  const related = [...blogPosts]
    .filter((p) => p.id !== post.id)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (b.category === post.category && a.category !== post.category) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: new Date(post.date).toISOString(),
    url: `https://aifor-founders.com/newsletter/${post.slug}`,
    image: imageSrc,
    author: {
      "@type": "Person",
      name: "Ryan Estes",
      url: "https://aifor-founders.com/about",
      sameAs: [
        "https://ryanestes.info",
        "https://www.linkedin.com/in/ryanestesco/",
      ],
    },
    publisher: {
      "@type": "Organization",
      name: "AI for Founders",
      url: "https://aifor-founders.com",
      logo: {
        "@type": "ImageObject",
        url: "https://aifor-founders.com/lovable-uploads/AIFF_Art.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://aifor-founders.com/newsletter/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-16 md:py-24">
          <Link
            href="/newsletter"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Newsletter
          </Link>

          <article className="max-w-3xl mx-auto">
            <header className="mb-12">
              <Badge
                variant="secondary"
                className="mb-4 bg-primary/10 text-primary border-0"
              >
                {post.category}
              </Badge>

              <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight gradient-text">
                {post.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {formatDate(post.date)}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>

              {imageSrc && (
                <div className="mt-8 rounded-xl overflow-hidden">
                  <img
                    src={imageSrc}
                    alt={post.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </header>

            <MarkdownRenderer content={post.content} />
          </article>

          {/* Related posts */}
          {related.length > 0 && (
            <section className="max-w-3xl mx-auto mt-16 pt-12 border-t border-border/30">
              <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
                More Issues
              </h2>
              <div className="space-y-4">
                {related.map((rel) => {
                  const relImg = getImageSrc(rel.image);
                  return (
                    <Link
                      key={rel.id}
                      href={`/newsletter/${rel.slug}`}
                      className="group flex items-start gap-4 py-3"
                    >
                      {relImg && (
                        <div className="shrink-0 w-16 h-12 rounded-md overflow-hidden">
                          <img
                            src={relImg}
                            alt={rel.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold group-hover:text-primary transition-colors leading-snug line-clamp-2">
                          {rel.title}
                        </h3>
                        <span className="text-xs text-muted-foreground mt-1">
                          {formatDate(rel.date)}
                        </span>
                      </div>
                      <ArrowRight className="hidden sm:block h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0 mt-1" />
                    </Link>
                  );
                })}
              </div>
            </section>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
