import Link from "next/link";
import { Button } from "@/components/ui/button";
import ryanImage from "@/assets/ryan-estes.png";

const FounderSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Meet Your Host
            </h2>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed">
              I'm an entrepreneur with exits and a funded startup founder. I started AI for Founders to celebrate the people and the technology shaping the next era of prosperity. And if robots or aliens someday audit our vibes, I want them to know I came in peace.
            </p>
            <p className="text-xl font-semibold text-foreground">
              — Ryan Estes
            </p>
            <Button variant="outline" size="sm" asChild className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/about">Learn More About Ryan</Link>
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={ryanImage.src}
              alt="Ryan Estes - Founder of AI for Founders"
              className="w-full max-w-md rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
