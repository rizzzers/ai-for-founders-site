import Link from "next/link";
import { Button } from "@/components/ui/button";

const FeaturedVideos = () => {
  return (
    <section className="py-12 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <h3 className="text-2xl font-semibold text-foreground">Featured Episodes</h3>
          <Button variant="outline" size="sm" asChild className="hidden sm:flex border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground">
            <Link href="/podcast-grid">Browse All Episodes</Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {[
            { id: 'JMyyiQTUBEs', title: 'Future of Payments' },
            { id: 'mfhM3P5wWvA', title: '$1M MRR in 8 weeks' },
            { id: 'n2WarWguXds', title: 'Agentic Swarms' },
            { id: 'ljgkj9EnjN4', title: 'Gen AI' }
          ].map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative aspect-video">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                  {video.title}
                </h4>
              </div>
            </a>
          ))}
        </div>

        {/* YouTube Shorts - hidden on small mobile, scrollable on larger */}
        <div className="mt-6 md:mt-8 hidden sm:flex justify-center gap-4 overflow-x-auto pb-2">
          {[
            'pKxEgw9baEk',
            '-I2tdGz1iw4',
            '7FmzZWxdBM0',
            'qW8HjVmEvjE',
            'n6-NjNKTmAs'
          ].map((shortId) => (
            <div key={shortId} className="w-[140px] md:w-[160px] shrink-0">
              <iframe
                src={`https://www.youtube.com/embed/${shortId}`}
                title="YouTube Short"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full aspect-[9/16] rounded-lg shadow-md"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-8 text-center sm:hidden">
          <Button variant="outline" size="sm" asChild className="border-primary/40 text-primary">
            <Link href="/podcast-grid">Browse All Episodes</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVideos;
