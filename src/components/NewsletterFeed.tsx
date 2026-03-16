import Link from "next/link";
import { blogPosts, formatDate, type BlogPost } from "@/data/blogPosts";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const getImageSrc = (image: BlogPost["image"]): string | undefined => {
  if (!image) return undefined;
  if (typeof image === "string") return image;
  return image.src;
};

const NewsletterFeed = () => {
  const recentPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4);

  const [latest, ...rest] = recentPosts;

  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-6 md:mb-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Latest from the Newsletter
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Weekly signal for the creators of the new era.
            </p>
          </div>
          <Button variant="outline" size="sm" asChild className="hidden sm:flex gap-2 border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/newsletter">
              <Mail className="h-4 w-4" />
              View All
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Latest issue — large card */}
          <Link href={`/newsletter/${latest.slug}`} className="group">
            <article className="rounded-xl border border-border/40 overflow-hidden h-full transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_-10px_hsl(var(--primary)/0.12)]">
              {latest.image && (
                <div className="w-full h-44 overflow-hidden">
                  <img
                    src={getImageSrc(latest.image)}
                    alt={latest.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-6">
                <span className="text-xs text-muted-foreground flex items-center gap-1.5 mb-3">
                  <Calendar className="h-3 w-3" />
                  {formatDate(latest.date)}
                  <span className="mx-1 text-muted-foreground/40">·</span>
                  {latest.readTime}
                </span>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors leading-snug">
                  {latest.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                  {latest.excerpt}
                </p>
              </div>
            </article>
          </Link>

          {/* Older issues — stacked list */}
          <div className="flex flex-col divide-y divide-border/30">
            {rest.map((post) => (
              <Link
                key={post.id}
                href={`/newsletter/${post.slug}`}
                className="group flex items-start gap-4 py-4 first:pt-0 last:pb-0"
              >
                {post.image && (
                  <div className="shrink-0 w-20 h-14 rounded-lg overflow-hidden">
                    <img
                      src={getImageSrc(post.image)}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <span className="text-xs text-muted-foreground mb-1 block">
                    {formatDate(post.date)}
                  </span>
                  <h3 className="text-sm font-semibold group-hover:text-primary transition-colors leading-snug line-clamp-2">
                    {post.title}
                  </h3>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary transition-colors shrink-0 mt-2" />
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" size="sm" asChild className="gap-2 border-primary/40 text-primary">
            <Link href="/newsletter">
              <Mail className="h-4 w-4" />
              View All Issues
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterFeed;
