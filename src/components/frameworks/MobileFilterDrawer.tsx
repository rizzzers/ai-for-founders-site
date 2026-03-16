"use client"
import { Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import FrameworkSidebar from "./FrameworkSidebar";

interface MobileFilterDrawerProps {
  search: string;
  onSearchChange: (value: string) => void;
  selectedTags: string[];
  onToggleTag: (tag: string) => void;
  allTags: string[];
  totalCount: number;
  filteredCount: number;
  onClearFilters: () => void;
  hasFilters: boolean;
}

const MobileFilterDrawer = (props: MobileFilterDrawerProps) => {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="border-border/40 text-muted-foreground hover:text-foreground"
          >
            <Filter className="h-4 w-4 mr-2" />
            Filters
            {props.hasFilters && (
              <span className="ml-1.5 bg-primary/20 text-primary text-[10px] px-1.5 py-0.5 rounded-full font-medium">
                Active
              </span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80 bg-background border-border/30 overflow-y-auto">
          <SheetTitle className="sr-only">Framework Filters</SheetTitle>
          <div className="pt-6">
            <FrameworkSidebar
              search={props.search}
              onSearchChange={props.onSearchChange}
              selectedTags={props.selectedTags}
              onToggleTag={props.onToggleTag}
              allTags={props.allTags}
              totalCount={props.totalCount}
              filteredCount={props.filteredCount}
              onClearFilters={props.onClearFilters}
            />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileFilterDrawer;
