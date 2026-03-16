import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Mic, Wrench } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Mail,
    title: "Weekly Newsletter",
    description: "Get the latest AI insights, tools, and strategies delivered straight to your inbox every week.",
    link: "/newsletter",
  },
  {
    icon: Mic,
    title: "Founder Podcast",
    description: "Listen to real conversations with founders who are successfully scaling their businesses with AI.",
    link: "/podcast-grid",
  },
  {
    icon: Wrench,
    title: "Hands-on Workshops",
    description: "Join interactive workshops where you'll learn to implement AI solutions in your own business.",
    link: "/workshops",
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-32 px-4 bg-muted/10">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-16">
          Everything You Need to <span className="text-primary">Succeed with AI</span>
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
          {features.map((feature, index) => (
            <Link key={index} href={feature.link} className="group">
              <Card className="border-border/20 hover:border-primary/20 transition-colors h-full group-hover:shadow-lg">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
