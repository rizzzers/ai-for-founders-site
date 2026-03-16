"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, BookOpen, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getSortedTerms, getAlphabetLetters, getGlossaryGuests } from "@/data/glossary";

export default function GlossaryClient() {
  const [search, setSearch] = useState("");
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const [activeGuest, setActiveGuest] = useState<string | null>(null);

  const allTerms = useMemo(() => getSortedTerms(), []);
  const letters = useMemo(() => getAlphabetLetters(), []);
  const guests = useMemo(() => getGlossaryGuests(), []);

  const filtered = useMemo(
    () =>
      allTerms.filter((t) => {
        const matchesSearch =
          !search ||
          t.term.toLowerCase().includes(search.toLowerCase()) ||
          t.definition.toLowerCase().includes(search.toLowerCase());
        const matchesLetter = !activeLetter || t.term[0].toUpperCase() === activeLetter;
        const matchesGuest = !activeGuest || t.episode.guest === activeGuest;
        return matchesSearch && matchesLetter && matchesGuest;
      }),
    [allTerms, search, activeLetter, activeGuest]
  );

  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>();
    for (const term of filtered) {
      const letter = term.term[0].toUpperCase();
      if (!map.has(letter)) map.set(letter, []);
      map.get(letter)!.push(term);
    }
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const clearFilters = () => {
    setSearch("");
    setActiveLetter(null);
    setActiveGuest(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="h-4 w-4" />
            {allTerms.length} terms across {guests.length} episodes
          </div>
          <h1 className="text-4xl md:text-6xl font-bold gradient-text mb-4">AI Founder Glossary</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every important term from the podcast, organized and searchable. From agentic systems to
            workflow optimization.
          </p>
        </header>

        <div className="max-w-xl mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search terms or definitions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 h-12 text-base"
            />
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-1 mb-6">
          {letters.map((letter) => (
            <button
              key={letter}
              onClick={() => setActiveLetter(activeLetter === letter ? null : letter)}
              className={`w-9 h-9 rounded-lg text-sm font-bold transition-all duration-200 ${
                activeLetter === letter
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {letter}
            </button>
          ))}
        </nav>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {guests.map((guest) => (
            <Badge
              key={guest}
              variant={activeGuest === guest ? "default" : "outline"}
              className={`cursor-pointer transition-all duration-200 ${
                activeGuest === guest ? "" : "hover:bg-primary/10 hover:text-primary hover:border-primary/30"
              }`}
              onClick={() => setActiveGuest(activeGuest === guest ? null : guest)}
            >
              {guest}
            </Badge>
          ))}
          {(activeLetter || activeGuest || search) && (
            <button
              onClick={clearFilters}
              className="text-xs text-muted-foreground hover:text-primary underline underline-offset-2 ml-2"
            >
              Clear all
            </button>
          )}
        </div>

        {(search || activeLetter || activeGuest) && (
          <p className="text-center text-sm text-muted-foreground mb-8">
            Showing {filtered.length} of {allTerms.length} terms
          </p>
        )}

        <div className="max-w-4xl mx-auto space-y-12">
          {grouped.map(([letter, terms]) => (
            <section key={letter} id={`letter-${letter}`}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-5xl font-black text-primary/20 select-none leading-none">{letter}</span>
                <div className="h-px flex-1 bg-border" />
                <span className="text-xs text-muted-foreground font-medium">
                  {terms.length} {terms.length === 1 ? "term" : "terms"}
                </span>
              </div>
              <div className="grid gap-4">
                {terms.map((t, idx) => (
                  <div
                    key={`${t.term}-${idx}`}
                    className="group bg-card border border-border rounded-xl p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                          {t.term}
                        </h3>
                        <p className="text-muted-foreground mt-1 leading-relaxed">{t.definition}</p>
                      </div>
                      <Link
                        href={`/podcast-grid/${t.episode.slug}`}
                        className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium text-primary/70 hover:text-primary transition-colors bg-primary/5 hover:bg-primary/10 rounded-full px-3 py-1.5"
                      >
                        <span className="truncate max-w-[180px]">{t.episode.guest}</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16">
            <p className="text-2xl font-bold text-muted-foreground mb-2">No terms found</p>
            <p className="text-muted-foreground">
              Try a different search or{" "}
              <button onClick={clearFilters} className="text-primary hover:underline">
                clear filters
              </button>
            </p>
          </div>
        )}

        <div className="text-center mt-16 p-8 bg-muted rounded-lg max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Hear the full context</h3>
          <p className="text-muted-foreground mb-6">
            Every term comes from a real conversation with a founder or expert. Listen to the episodes
            for the stories behind the words.
          </p>
          <Link
            href="/podcast-grid"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            Browse All Episodes
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
