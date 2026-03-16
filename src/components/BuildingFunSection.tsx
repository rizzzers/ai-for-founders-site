import Link from "next/link";
import { Button } from "@/components/ui/button";
import chairImage from "@/assets/estes-chair.png";

const BuildingFunSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-muted/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Image */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={chairImage.src}
              alt="Ryan Estes laughing"
              className="w-full max-w-md rounded-2xl"
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Building Should Be Fun
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Great companies don't happen alone. They happen when founders swap ideas, challenge each other, and laugh through the chaos. AI for Founders is pure founder infotainment: curiosity-first, experiment-heavy, and allergic to boring questions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're at Day 1 or scaling past $10M ARR, we're here to make your AI journey smarter, brighter, and undeniably fun.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" size="sm" asChild className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/workshops">Explore Workshops</Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
                <Link href="/resources">Browse Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildingFunSection;
