"use client"
import { Search, X, Tags, Lightbulb, Filter, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface FrameworkSidebarProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
  allTags: string[];
  totalCount: number;
  filteredCount: number;
  onClearFilters: () => void;
}

const FrameworkSidebar = ({
  search,
  onSearchChange,
  selectedTags,
  onToggleTag,
  allTags,
  totalCount,
  filteredCount,
  onClearFilters,
}: FrameworkSidebarProps) => {
  const [tagsOpen, setTagsOpen] = useState(true);
  const hasFilters = search || selectedTags.length > 0;

  return (
    <aside className="w-full lg:w-72 xl:w-80 shrink-0">
      <div className="lg:sticky lg:top-24 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-foreground tracking-wide uppercase">
              Filters
            </span>
          </div>
          {hasFilters && (
            <button
              onClick={onClearFilters}
              className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
            >
              <X className="h-3 w-3" />
              Clear all
            </button>
          )}
        </div>

        {/* Result count */}
        <div className="bg-card/60 border border-border/30 rounded-lg px-4 py-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Showing{" "}
              <span className="text-foreground font-semibold">{filteredCount}</span>
              {" "}of {totalCount} frameworks
            </span>
          </div>
        </div>

        {/* Search */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
            <Search className="h-3 w-3" />
            Search
          </label>
          <div className="relative">
            <Input
              placeholder="Name, tag, or guest..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="bg-card/60 border-border/40 text-sm placeholder:text-muted-foreground/50 focus:border-primary/50 transition-colors"
            />
            {search && (
              <button
                onClick={() => onSearchChange("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>


        {/* Tags */}
        <div className="space-y-2">
          <button
            onClick={() => setTagsOpen(!tagsOpen)}
            className="w-full flex items-center justify-between text-xs font-medium text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <Tags className="h-3 w-3" />
              Categories
              {selectedTags.length > 0 && (
                <Badge variant="outline" className="text-[9px] px-1.5 py-0 border-primary/40 text-primary ml-1">
                  {selectedTags.length}
                </Badge>
              )}
            </span>
            <ChevronDown
              className={`h-3 w-3 transition-transform duration-200 ${tagsOpen ? "rotate-180" : ""}`}
            />
          </button>
          {tagsOpen && (
            <div className="flex flex-wrap gap-1.5 pt-1">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => onToggleTag(tag)}
                  className={`text-xs px-2.5 py-1 rounded-md border transition-all duration-150 ${
                    selectedTags.includes(tag)
                      ? "bg-primary/15 text-primary border-primary/40 shadow-sm shadow-primary/10"
                      : "border-border/40 text-muted-foreground hover:border-primary/30 hover:text-foreground hover:bg-card/60"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default FrameworkSidebar;
