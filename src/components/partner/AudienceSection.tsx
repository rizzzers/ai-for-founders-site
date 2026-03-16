const audienceTags = [
  "Startup Founders", "CEOs", "AI Enthusiasts", "Product Managers",
  "Investors", "Operators", "Developers", "Tech Leaders",
  "Early Adopters", "Solo Founders", "Agency Owners", "Creators",
  "Growth Marketers", "CTOs", "VCs", "Entrepreneurs",
];

const AudienceSection = () => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-2">Who You'll Reach</h2>
        <p className="text-muted-foreground mb-8">
          Our audience spans the most engaged and influential demographics in AI and startups.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {audienceTags.map((tag) => (
            <span
              key={tag}
              className="border border-border rounded-full px-4 py-1.5 text-sm text-muted-foreground hover:border-primary/40 hover:text-foreground transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AudienceSection;
