const PartnerHero = () => {
  return (
    <section className="container mx-auto px-4 pt-20 pb-16 text-center max-w-3xl">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Turn Attention<br />
        <span className="text-primary">Into Assets.</span>
      </h1>
      <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto">
        Reach a trusted audience of startup founders across email, audio, and video in one coordinated campaign.
      </p>
      <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
        Our partnership packages don't just deliver impressions. They deliver credibility, repeat exposure, and reusable content your team can use long after the campaign ends.
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-sm text-primary font-medium">
        <span className="border border-primary/30 rounded-full px-4 py-1.5">Guaranteed distribution</span>
        <span className="border border-primary/30 rounded-full px-4 py-1.5">Native host integration</span>
        <span className="border border-primary/30 rounded-full px-4 py-1.5">Content you can repurpose</span>
      </div>
      <p className="mt-10 text-muted-foreground text-sm">See the plans below and choose your level of visibility.</p>
    </section>
  );
};

export default PartnerHero;
