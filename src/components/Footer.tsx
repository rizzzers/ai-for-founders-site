
import { Mail, Mic, Wrench, User, BookOpen } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-border/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 flex flex-col items-start gap-4">
            <img 
              src="/lovable-uploads/AIFF_Art.png" 
              alt="AI for Founders Logo" 
              className="h-36 w-36 object-contain"
            />
            <div>
              <h3 className="text-xl font-bold text-primary mb-4">AI for Founders</h3>
              <p className="text-muted-foreground mb-4">
                Empowering founders to build smarter, faster, and bolder with AI technology.
              </p>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <Link href="/newsletter" className="hover:text-primary transition-colors">
                  Newsletter
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mic className="h-4 w-4" />
                <a href="https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Podcast
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Wrench className="h-4 w-4" />
                <Link href="/workshops" className="hover:text-primary transition-colors">
                  Workshops
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <Link href="/about" className="hover:text-primary transition-colors">
                  About Ryan Estes
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                <Link href="/glossary" className="hover:text-primary transition-colors">
                  AI Glossary
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Listen</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="https://podcasts.apple.com/us/podcast/ai-for-founders/id1798265052" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Apple Podcast
                </a>
              </li>
              <li>
                <a href="https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va?utm_source=ryan-estes.beehiiv.com&utm_medium=newsletter&utm_campaign=ai-for-founders-openai-s-nuclear-ambitions-tesla-s-robotaxis-deepseek-s-billion-dollar-bluff" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Spotify
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@AIforfounders1" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="https://x.com/GoRyanEstes" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  X
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/estesryan/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@go.ryan.estes" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/20 mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 AI for Founders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
