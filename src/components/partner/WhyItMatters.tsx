import { ShieldCheck, TrendingUp, Target } from "lucide-react";

const WhyItMatters = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Why It Matters</h2>
        <p className="text-center text-primary font-medium mb-4">Real impressions. Real people.</p>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Unlike social media impressions that count bots, scrolls, and phantom views, every impression we report is a verified unique email open from a real human inbox.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Verified Unique Opens</h3>
            <p className="text-sm text-muted-foreground">
              Every impression is tracked via unique email open. No inflated scroll counts, no bot traffic, no guesswork.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">47% Open Rate</h3>
            <p className="text-sm text-muted-foreground">
              More than double the industry average. Our audience actively reads. They don't just scroll past.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Guaranteed Minimums</h3>
            <p className="text-sm text-muted-foreground">
              Every tier comes with a guaranteed impression floor. If we don't hit it, we keep running your campaign until we do.
            </p>
          </div>
        </div>

        <div className="mt-12 border border-primary/20 rounded-lg p-6 bg-primary/5 text-center">
          <p className="text-muted-foreground italic">
            "50,000 impressions" from us means 50,000 real humans opened their email and saw your brand. That's not comparable to 50K impressions on social. It's far more valuable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyItMatters;
