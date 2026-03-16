"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Mail, Loader2, CheckCircle } from "lucide-react";
import { blogPosts, formatDate } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function NewsletterClient() {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) return;
    setLoading(true);
    try {
      const res = await fetch("/api/forms/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      toast({ title: "You're in!", description: "Check your inbox for confirmation." });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const featuredPost = sortedPosts.find((p) => p.featured) || sortedPosts[0];
  const otherPosts = sortedPosts.filter((p) => p.id !== featuredPost.id);

  const getImageSrc = (image: typeof featuredPost.image) => {
    if (!image) return undefined;
    if (typeof image === "string") return image;
    return image.src;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
        <div className="text-center mb-12 md:mb-20">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary">
            Weekly Insights
          </Badge>
          <h1 className="text-3xl md:text-6xl font-bold mb-4 md:mb-6 tracking-tight gradient-text">
            The AI for Founders Newsletter
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Just the plays that make you dangerous. Weekly signal for the creators of the new era.
          </p>
          <div className="max-w-md mx-auto">
            {submitted ? (
              <div className="flex items-center justify-center gap-2 text-primary p-4 bg-primary/10 rounded-lg">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">You&apos;re subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  className="sm:w-36"
                />
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1"
                />
                <Button type="submit" disabled={loading} className="gap-2">
                  {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
                  Subscribe
                </Button>
              </form>
            )}
          </div>
        </div>

        {featuredPost && (
          <Link href={`/newsletter/${featuredPost.slug}`} className="group block mb-16">
            <article className="relative rounded-2xl border border-primary/20 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-12px_hsl(var(--primary)/0.15)]">
              {featuredPost.image && (
                <div className="w-full h-48 md:h-64 overflow-hidden">
                  <img
                    src={getImageSrc(featuredPost.image)}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>
              )}
              <div className="relative p-8 md:p-12 -mt-16 md:-mt-20">
                <Badge className="mb-5 bg-primary/15 text-primary border-0 text-xs tracking-wider uppercase">
                  Latest Issue
                </Badge>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-primary/60" />
                      {formatDate(featuredPost.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-primary/60" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                  <span className="flex items-center gap-1.5 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Read Issue
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </div>
            </article>
          </Link>
        )}

        {otherPosts.length > 0 && (
          <section>
            <h2 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6 pl-1">
              Past Issues
            </h2>
            <div className="divide-y divide-border/40">
              {otherPosts.map((post) => (
                <Link key={post.id} href={`/newsletter/${post.slug}`} className="group block py-6 first:pt-0 last:pb-0">
                  <article className="flex items-start gap-4 sm:gap-6">
                    {post.image && (
                      <div className="shrink-0 w-20 h-14 sm:w-28 sm:h-20 rounded-lg overflow-hidden">
                        <img
                          src={getImageSrc(post.image)}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs text-muted-foreground">{formatDate(post.date)}</span>
                        <span className="text-xs text-muted-foreground/50">·</span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-1.5 group-hover:text-primary transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2 hidden sm:block">
                        {post.excerpt}
                      </p>
                    </div>
                    <ArrowRight className="hidden sm:block h-4 w-4 text-muted-foreground/40 group-hover:text-primary transition-colors shrink-0 mt-3" />
                  </article>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
