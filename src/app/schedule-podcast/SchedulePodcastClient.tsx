"use client";

import { useEffect, useState } from "react";
import { Calendar, Clock, Video, ExternalLink, Mic, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function SchedulePodcastClient() {
  const recordingLink = "https://web.descript.com/room/430cf8ce-9ae5-44fb-8520-8f17f534fd54";
  const podcastLink = "https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va";
  const { toast } = useToast();
  const [guestForm, setGuestForm] = useState({
    name: "", email: "", company: "", title: "", website: "", linkedin: "", topic: "", bio: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleGuestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/forms/podcast-guest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(guestForm),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      toast({ title: "Request Sent!", description: "We'll be in touch within 48 hours." });
    } catch {
      toast({ title: "Error", description: "Failed to submit. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existing) existing.remove();
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mic className="h-8 w-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">Schedule a Podcast Interview</h1>
          </div>
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl text-primary font-semibold mb-2">AI for Founders Podcast</h2>
            <p className="text-lg text-muted-foreground">Top 100 Entrepreneurship Podcast — Reach 20,000+ Engaged Founders</p>
          </div>
        </header>

        <div className="text-center mb-12 max-w-4xl mx-auto">
          <p className="text-lg text-muted-foreground leading-relaxed">
            The podcast ranks in the top 5% of all active podcasts and top 100 in Entrepreneurship.
            Across the podcast, social, and newsletter, we have 21,000+ highly engaged subscribers,
            90% of whom are funded founders, entrepreneurs with successful exits, and CEOs.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-primary" />
                Interview Details
              </CardTitle>
              <CardDescription>Audio and video will be recorded for the interview.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-semibold">Duration</h3>
                  <p className="text-muted-foreground">Plan on an hour</p>
                </div>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Recording Link</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  This is the recording link that will be emailed to you after scheduling.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <a href={recordingLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Video className="h-4 w-4" />
                    Recording Room
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Show Reference</h3>
                <p className="text-sm text-muted-foreground mb-3">Here is a link to the show for reference.</p>
                <Button asChild variant="outline" className="w-full">
                  <a href={podcastLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Mic className="h-4 w-4" />
                    Listen to AI for Founders
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Book Your Interview
                <Badge variant="secondary" className="ml-2">Free</Badge>
              </CardTitle>
              <CardDescription>Choose a time that works best for you — no cost, just great conversation</CardDescription>
            </CardHeader>
            <CardContent>
              <div
                className="calendly-inline-widget"
                data-url="https://calendly.com/ryanestes/aiff?hide_event_type_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=f0dc82"
                style={{ minWidth: "320px", height: "700px" }}
              />
            </CardContent>
          </Card>

          <div className="text-center mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
            <p className="text-lg mb-2">I&apos;m looking forward to it!</p>
            <p className="text-muted-foreground">– Ryan</p>
          </div>

          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mic className="h-5 w-5 text-primary" />
                Guest Intake Form
              </CardTitle>
              <CardDescription>Tell us about yourself and your proposed topic before scheduling.</CardDescription>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <div className="flex items-center justify-center gap-2 text-primary p-6 bg-primary/10 rounded-lg">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-medium">Request received! We&apos;ll be in touch within 48 hours.</span>
                </div>
              ) : (
                <form onSubmit={handleGuestSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="guest-name">Name *</Label>
                      <Input id="guest-name" value={guestForm.name} onChange={(e) => setGuestForm((p) => ({ ...p, name: e.target.value }))} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guest-email">Email *</Label>
                      <Input id="guest-email" type="email" value={guestForm.email} onChange={(e) => setGuestForm((p) => ({ ...p, email: e.target.value }))} required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guest-company">Company</Label>
                      <Input id="guest-company" value={guestForm.company} onChange={(e) => setGuestForm((p) => ({ ...p, company: e.target.value }))} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guest-title">Title / Role</Label>
                      <Input id="guest-title" value={guestForm.title} onChange={(e) => setGuestForm((p) => ({ ...p, title: e.target.value }))} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guest-website">Website</Label>
                      <Input id="guest-website" type="url" placeholder="https://" value={guestForm.website} onChange={(e) => setGuestForm((p) => ({ ...p, website: e.target.value }))} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="guest-linkedin">LinkedIn</Label>
                      <Input id="guest-linkedin" placeholder="https://linkedin.com/in/..." value={guestForm.linkedin} onChange={(e) => setGuestForm((p) => ({ ...p, linkedin: e.target.value }))} />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guest-topic">Proposed Topic</Label>
                    <Textarea id="guest-topic" placeholder="What would you like to discuss on the show?" value={guestForm.topic} onChange={(e) => setGuestForm((p) => ({ ...p, topic: e.target.value }))} className="min-h-[80px]" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="guest-bio">Short Bio</Label>
                    <Textarea id="guest-bio" placeholder="A brief bio about yourself..." value={guestForm.bio} onChange={(e) => setGuestForm((p) => ({ ...p, bio: e.target.value }))} className="min-h-[80px]" />
                  </div>
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit Guest Request"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
