"use client";

import { useState, useMemo } from "react";
import { Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FrameworkSidebar from "@/components/frameworks/FrameworkSidebar";
import FrameworkCard from "@/components/frameworks/FrameworkCard";
import MobileFilterDrawer from "@/components/frameworks/MobileFilterDrawer";
import { frameworks, allTags } from "@/data/frameworks";

export default function FrameworksClient() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return frameworks.filter((f) => {
      const matchesSearch =
        !q ||
        f.name.toLowerCase().includes(q) ||
        f.summary.toLowerCase().includes(q) ||
        f.tags.some((t) => t.toLowerCase().includes(q)) ||
        f.episode.guest.toLowerCase().includes(q);
      const matchesTags = selectedTags.length === 0 || selectedTags.some((t) => f.tags.includes(t));
      return matchesSearch && matchesTags;
    });
  }, [search, selectedTags]);

  const toggleTag = (tag: string) =>
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]));

  const clearFilters = () => {
    setSearch("");
    setSelectedTags([]);
  };

  const hasFilters = !!(search || selectedTags.length > 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="container mx-auto px-4 pt-16 pb-20">
        <section className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <Lightbulb className="h-4 w-4 text-primary" />
            <span className="text-sm text-primary font-medium">{frameworks.length} Frameworks</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Frameworks from the Show</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Strategic thinking tools discussed by founders on AI for Founders. Search, filter, and dive
            deep into every framework.
          </p>
        </section>

        <div className="mb-6 flex items-center justify-between lg:hidden">
          <MobileFilterDrawer
            search={search}
            onSearchChange={setSearch}
            selectedTags={selectedTags}
            onToggleTag={toggleTag}
            allTags={allTags}
            totalCount={frameworks.length}
            filteredCount={filtered.length}
            onClearFilters={clearFilters}
            hasFilters={hasFilters}
          />
          <span className="text-xs text-muted-foreground">
            {filtered.length} of {frameworks.length}
          </span>
        </div>

        <div className="flex gap-10">
          <div className="hidden lg:block">
            <FrameworkSidebar
              search={search}
              onSearchChange={setSearch}
              selectedTags={selectedTags}
              onToggleTag={toggleTag}
              allTags={allTags}
              totalCount={frameworks.length}
              filteredCount={filtered.length}
              onClearFilters={clearFilters}
            />
          </div>
          <div className="flex-1 min-w-0">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {filtered.map((fw, i) => (
                  <FrameworkCard key={fw.name} framework={fw} index={i} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">No frameworks match your filters.</p>
                <button
                  onClick={clearFilters}
                  className="mt-3 text-sm text-primary hover:underline underline-offset-4"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
