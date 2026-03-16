
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CallToAction = () => {
  return (
    <section className="py-16 md:py-32 px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          Thousands of founders said yes and kept going.
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Our free newsletter explains what they're actually doing.
        </p>
        <Button size="lg" className="text-lg px-8" asChild>
          <Link href="/newsletter">
            Check the Newsletter
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
