import { CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const tiers = [
  {
    name: "Starter Visibility",
    price: "$5,000",
    description: "Best for testing the channel and building initial presence.",
    features: [
      "50,000 guaranteed impressions",
      "Weekly newsletter placements",
      "Host-read podcast ads",
      "Short-form video edits for your channels",
      "Campaign reporting on verified human engagement",
    ],
  },
  {
    name: "Growth Visibility",
    price: "$12,000",
    description: "Best for brands ready to build consistent awareness and momentum.",
    featured: true,
    features: [
      "160,000 guaranteed impressions",
      "Priority newsletter placement across campaign period",
      "Multiple host-read podcast integrations",
      "Expanded short-form video asset package",
      "Performance reporting and optimization insights",
    ],
  },
  {
    name: "Dominant Visibility",
    price: "$19,000",
    description: "Best for brands that want to own the conversation and maximize reach.",
    features: [
      "380,000 guaranteed impressions",
      "Premium newsletter positioning",
      "Ongoing host-read podcast integrations",
      "Full short-form video content suite for repurposing",
      "Strategic campaign reporting and audience insights",
    ],
  },
];

const PricingTiers = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-2">Pricing</h2>
      <p className="text-center text-muted-foreground mb-12">Choose your level of visibility</p>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {tiers.map((tier) => (
          <Card
            key={tier.name}
            className={`relative flex flex-col ${
              tier.featured
                ? "border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                : "border-border"
            }`}
          >
            {tier.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                Most Popular
              </div>
            )}
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-lg font-semibold">{tier.name}</CardTitle>
              <p className="text-4xl font-bold text-primary mt-2">{tier.price}</p>
              <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <p className="text-center text-muted-foreground text-sm mt-8">
        Not sure which tier fits? Tell us your goal and we'll recommend the right plan.
      </p>
    </section>
  );
};

export default PricingTiers;
