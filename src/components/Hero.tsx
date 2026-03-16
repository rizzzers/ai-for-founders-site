"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const HandDrawnHighlight = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <svg
      className="absolute -inset-3 sm:-inset-4 md:-inset-5 pointer-events-none z-0"
      viewBox="0 0 600 80"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Hand-drawn wobbly rectangle */}
      <path
        d="M8 12 C20 4, 180 2, 300 5 C420 2, 580 4, 592 12 C596 24, 598 48, 592 68 C580 76, 420 78, 300 75 C180 78, 20 76, 8 68 C4 48, 2 24, 8 12Z"
        stroke="hsl(44 44% 64%)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        style={{
          strokeDasharray: 1800,
          strokeDashoffset: visible ? 0 : 1800,
          transition: "stroke-dashoffset 1.5s cubic-bezier(0.65, 0, 0.35, 1)",
          filter: "drop-shadow(0 0 6px hsl(44 44% 64% / 0.4))",
        }}
      />
      {/* Smaller inner accent scribble */}
      <path
        d="M18 18 C40 10, 200 8, 300 10 C400 8, 560 10, 582 18"
        stroke="hsl(44 44% 64% / 0.3)"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        style={{
          strokeDasharray: 800,
          strokeDashoffset: visible ? 0 : 800,
          transition: "stroke-dashoffset 1.2s cubic-bezier(0.65, 0, 0.35, 1) 0.8s",
        }}
      />
      {/* Little decorative sparkle top-right */}
      <g
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.4s ease 2s",
          transform: "translate(565px, 4px)",
        }}
      >
        <line x1="0" y1="-6" x2="0" y2="6" stroke="hsl(44 44% 74%)" strokeWidth="2" strokeLinecap="round" />
        <line x1="-6" y1="0" x2="6" y2="0" stroke="hsl(44 44% 74%)" strokeWidth="2" strokeLinecap="round" />
        <line x1="-4" y1="-4" x2="4" y2="4" stroke="hsl(44 44% 74%)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="4" y1="-4" x2="-4" y2="4" stroke="hsl(44 44% 74%)" strokeWidth="1.5" strokeLinecap="round" />
      </g>
    </svg>
  );
};

const Hero = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/forms/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, firstName }),
      });
      if (!res.ok) throw new Error("Request failed");

      toast({
        title: "Success!",
        description: "Thank you for subscribing to our newsletter!",
      });
      setEmail("");
      setFirstName("");
    } catch (error) {
      console.error("Error submitting newsletter signup:", error);
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-20 md:py-32 px-4 text-center relative overflow-hidden">
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <p className="text-base md:text-xl text-muted-foreground mb-2 animate-fade-in-up">
          The #1 AI Founders podcast on Spotify
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 gradient-text animate-fade-in-up">
          Fastest Growing Founder Newsletter on the Planet
        </h1>
        <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Weekly newsletter, podcast, and workshops for founders building faster, bolder, and more intelligently with AI.
        </p>
        <div className="relative max-w-2xl mx-auto">
          <HandDrawnHighlight />
          <form onSubmit={handleSubmit} className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="text-lg h-12"
            />
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="text-lg h-12"
            />
            <Button 
              type="submit" 
              size="lg" 
              className="text-lg h-12"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
