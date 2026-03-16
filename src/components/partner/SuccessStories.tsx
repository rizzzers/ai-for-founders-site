import { ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stories = [
  {
    name: "Code Story Podcast",
    description:
      "Multi-channel campaign across newsletter, podcast, and video positioned Code Story as a top resource for developer founders.",
    outcome: "200+ new subscribers",
    highlight: "500K impressions",
    url: "https://codestory.co",
  },
  {
    name: "Kitcaster",
    description:
      "Strategic content integration positioned Kitcaster as the go-to podcast booking agency for founders and executives.",
    outcome: "300+ clicks to website",
    highlight: "$70K in new revenue",
    url: "https://kitcaster.com",
  },
  {
    name: "Sema4.ai",
    description:
      "Targeted newsletter placements and host-read podcast ads drove enterprise awareness for Sema4's AI agent platform.",
    outcome: "150+ qualified leads",
    highlight: "Enterprise pipeline growth",
    url: "https://sema4.ai",
  },
];

const SuccessStories = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Success Stories</h2>
        <p className="text-center text-muted-foreground mb-12">
          Real brands. Real campaigns. Real results from our multi-channel partnership platform.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story) => (
            <Card key={story.name} className="border-border">
              <CardContent className="pt-6 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold">{story.name}</h3>
                  <a
                    href={story.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{story.description}</p>
                <div className="border-t border-border pt-3 space-y-1">
                  <p className="text-sm">
                    <span className="text-muted-foreground">Outcome:</span>{" "}
                    <span className="font-medium text-foreground">{story.outcome}</span>
                  </p>
                  <p className="text-sm">
                    <span className="text-muted-foreground">Highlight:</span>{" "}
                    <span className="font-medium text-primary">{story.highlight}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
