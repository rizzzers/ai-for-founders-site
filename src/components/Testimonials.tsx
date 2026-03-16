
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Chen",
    quote: "AI for Founders has been instrumental in helping us scale our business. The insights are actionable and the community is incredible."
  },
  {
    name: "Marcus Rodriguez",
    quote: "The weekly newsletter keeps me ahead of the curve. Every episode of the podcast delivers value that I can immediately implement."
  },
  {
    name: "David Thompson",
    quote: "The workshops are game-changers. I've learned more about AI implementation in 2 hours than months of research on my own."
  },
  {
    name: "Jennifer Walsh",
    quote: "Finally, AI content that's practical and not just hype. Ryan breaks down complex topics in ways that make sense for real businesses."
  },
  {
    name: "Alex Kumar",
    quote: "I've tried dozens of AI newsletters. This is the only one I actually read every single week. The signal-to-noise ratio is unmatched."
  },
  {
    name: "Michelle Torres",
    quote: "The community aspect is what sets this apart. Being surrounded by other founders tackling similar AI challenges is invaluable."
  },
  {
    name: "James Patterson",
    quote: "Went from AI-curious to AI-first in my business within 3 months of following the content. Absolute must for any founder."
  },
  {
    name: "Lisa Nakamura",
    quote: "The podcast guests are always top-tier. Real founders sharing real experiences, not just theory."
  },
  {
    name: "Robert Kim",
    quote: "I've saved countless hours by learning from others' AI implementation mistakes. This community is a shortcut to success."
  },
  {
    name: "Amanda Foster",
    quote: "Every week I discover a new tool or strategy that moves the needle for my startup. Best investment of my time."
  },
  {
    name: "Chris Mendez",
    quote: "The hands-on workshops gave me the confidence to actually build with AI instead of just talking about it."
  }
];

const Testimonials = () => {
  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-16 md:py-32 px-4 bg-muted/5 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            What Founders Are Saying
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Join thousands of successful entrepreneurs who trust AI for Founders
          </p>
        </div>
        
        <div className="relative group">
          <div 
            className="flex gap-6 animate-scroll hover:[animation-play-state:paused]"
            style={{
              width: 'max-content',
            }}
          >
            {duplicatedTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[350px] border-border/20 hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <blockquote className="text-muted-foreground italic mb-4">
                    "{testimonial.quote}"
                  </blockquote>
                  <p className="font-semibold text-sm">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
