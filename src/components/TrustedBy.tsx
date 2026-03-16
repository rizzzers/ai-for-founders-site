
import { Badge } from "@/components/ui/badge";
import ambientLogo from "@/assets/ambient-logo.svg";
import codeStoryLogo from "@/assets/code-story-logo.png";
import kitcasterLogo from "@/assets/kitcaster-logo.png";

const TrustedBy = () => {
  const stats = [
    {
      number: "Top 5%",
      description: "Of all active podcasts"
    },
    {
      number: "Top 100",
      description: "Entrepreneurship charts"
    },
    {
      number: "21,000+",
      description: "Engaged subscribers"
    },
    {
      number: "90%",
      description: "Funded founders & CEOs"
    }
  ];

  const sponsors = [
    {
      name: "Ambient",
      logo: ambientLogo,
      url: "https://www.ambient.us/"
    },
    {
      name: "Code Story",
      logo: codeStoryLogo,
      url: "https://open.spotify.com/show/0f5HGQ2EPd63H83gqAifXp"
    },
    {
      name: "Kitcaster",
      logo: kitcasterLogo,
      url: "https://kitcaster.com/"
    }
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-card/30 to-muted/20">
      <div className="container mx-auto max-w-6xl text-center">
        <Badge variant="outline" className="mb-6 text-primary border-primary/30 bg-primary/5">
          Trusted by Industry Leaders
        </Badge>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-foreground">
          Trusted by Top Founders and Entrepreneurs
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Sponsored By Section */}
        <div className="mt-24">
          <h3 className="text-xl font-semibold mb-8 text-muted-foreground">
            Sponsored By
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center justify-items-center max-w-3xl mx-auto">
            {sponsors.map((sponsor, index) => (
              <a
                key={index}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center p-4 hover:bg-white/5 rounded-lg transition-all duration-300 hover:scale-105 group"
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="max-h-12 w-auto filter brightness-75 group-hover:brightness-100 transition-all duration-300"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
