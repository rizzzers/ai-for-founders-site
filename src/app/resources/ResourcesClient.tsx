"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CallToAction from "@/components/CallToAction";
import TrustedBy from "@/components/TrustedBy";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ExternalLink, Youtube, Search, Star, Filter, X } from "lucide-react";
import { themes, generateToolSlug, type Tool } from "@/data/tools";

export default function ResourcesClient() {
  const [searchQuery, setSearchQuery] = useState("");

  const allTools = useMemo(() => {
    const tools: (Tool & { theme: string; category: string })[] = [];
    themes.forEach((theme) => {
      theme.categories.forEach((category) => {
        category.tools.forEach((tool) => {
          tools.push({ ...tool, theme: theme.title, category: category.title });
        });
      });
    });
    return tools;
  }, []);

  const filteredThemes = useMemo(() => {
    if (!searchQuery) return themes;
    return themes
      .map((theme) => ({
        ...theme,
        categories: theme.categories
          .map((category) => ({
            ...category,
            tools: category.tools.filter(
              (tool) =>
                tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                tool.description.toLowerCase().includes(searchQuery.toLowerCase())
            ),
          }))
          .filter((category) => category.tools.length > 0),
      }))
      .filter((theme) => theme.categories.length > 0);
  }, [searchQuery]);

  const totalTools = allTools.length;
  const filteredToolsCount = filteredThemes.reduce(
    (acc, theme) => acc + theme.categories.reduce((catAcc, cat) => catAcc + cat.tools.length, 0),
    0
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 gradient-text">
              Top AI Tools for Founders 2026
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A curated collection of {totalTools}+ powerful AI tools to help startup founders build
              faster, scale smarter, and succeed in 2026.
            </p>
          </header>

          <div className="mb-12 space-y-6">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search tools by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-full border-2 focus:border-primary"
              />
            </div>
            {searchQuery && (
              <p className="text-center text-muted-foreground">
                Showing {filteredToolsCount} of {totalTools} tools
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSearchQuery("")}
                  className="ml-2 text-muted-foreground"
                >
                  <X className="h-3 w-3 mr-1" /> Clear
                </Button>
              </p>
            )}
          </div>

          <div className="space-y-20">
            {filteredThemes.map((theme) => (
              <div key={theme.title} className="space-y-12">
                <div className="text-center space-y-3">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${theme.color} text-white font-semibold`}
                  >
                    {theme.title}
                  </div>
                  <p className="text-lg text-muted-foreground">{theme.description}</p>
                </div>
                {theme.categories.map((category) => (
                  <div key={category.title} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-muted">
                        <category.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-primary">{category.title}</h2>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.tools.map((tool, toolIndex) => (
                        <Card key={toolIndex} className="hover:shadow-lg transition-shadow relative p-2 group">
                          {tool.recommended && (
                            <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground">
                              <Star className="h-3 w-3 mr-1" />
                              Recommended
                            </Badge>
                          )}
                          <CardHeader className="pb-4">
                            <CardTitle className="flex items-center justify-between mb-3">
                              <span className="flex items-center gap-2 truncate pr-2">
                                <img
                                  src={`https://www.google.com/s2/favicons?domain=${new URL(tool.url).hostname}&sz=32`}
                                  alt=""
                                  className="w-5 h-5 rounded-sm shrink-0"
                                  loading="lazy"
                                />
                                {tool.name}
                              </span>
                              {tool.hasYoutube && (
                                <a
                                  href={tool.youtubeUrl || "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="hover:scale-110 transition-transform shrink-0"
                                >
                                  <Youtube className="h-4 w-4 text-red-500" />
                                </a>
                              )}
                            </CardTitle>
                            {(tool.whatItIs || tool.description) && (
                              <CardDescription className="leading-relaxed line-clamp-3">
                                {tool.whatItIs || tool.description}
                              </CardDescription>
                            )}
                          </CardHeader>
                          <CardContent className="pt-0">
                            <Button variant="outline" className="w-full" asChild>
                              <Link
                                href={`/tools/${generateToolSlug(tool.name)}`}
                                className="flex items-center gap-2"
                              >
                                Learn More
                                <ExternalLink className="h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          {filteredThemes.length === 0 && (
            <div className="text-center py-16">
              <Filter className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold mb-2">No tools found</h3>
              <p className="text-muted-foreground mb-4">Try adjusting your search</p>
              <Button onClick={() => setSearchQuery("")} variant="outline">
                Clear search
              </Button>
            </div>
          )}

          <TrustedBy />

          <div className="mt-20 text-center">
            <Card className="max-w-2xl mx-auto p-2">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl mb-3">Want More AI Tools?</CardTitle>
                <CardDescription className="text-lg leading-relaxed">
                  Stay updated with the latest AI tools and insights for founders
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-6 justify-center pt-2">
                <Button size="lg" asChild>
                  <Link href="/newsletter">Subscribe to Newsletter</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a
                    href="https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Listen to Podcast
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <CallToAction />
      <Footer />
    </div>
  );
}
