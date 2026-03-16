"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Building2, Mail, Phone, Globe, Target, Palette, MessageSquare } from "lucide-react";

const EMPTY_FORM = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  website: "",
  companyDescription: "",
  productDescription: "",
  targetAudience: "",
  logoUrl: "",
  brandGuidelinesUrl: "",
  taglines: "",
  avoidPhrases: "",
  promotionOffer: "",
  preferredLandingPage: "",
  highlightedFeatures: "",
  desiredAction: "",
  teamCoordination: "",
  disclaimers: "",
  additionalNotes: "",
};

export default function BrandOnboardingClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState(EMPTY_FORM);
  const { toast } = useToast();

  const set = (field: string, value: string) =>
    setFormData((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactName || !formData.email) {
      toast({ title: "Error", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/forms/brand-onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");
      setIsSubmitted(true);
      toast({ title: "Submission Successful!", description: "We'll review and respond within 48 hours." });
      setFormData(EMPTY_FORM);
    } catch {
      toast({ title: "Error", description: "Failed to submit your application. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Brand Onboarding</h1>
          <p className="text-xl text-muted-foreground mb-2">Partner with AI for Founders</p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Submit your brand information and marketing assets to begin your sponsorship journey.
            We'll review your submission and get back to you within 48 hours.
          </p>
        </div>

        {isSubmitted ? (
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20 text-center">
            <CardContent className="pt-8 pb-8">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Building2 className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold">Submission Successful!</h2>
                <p className="text-muted-foreground max-w-md">
                  Thank you for your interest in partnering with AI for Founders. We've received your
                  brand onboarding application and will review it shortly.
                </p>
                <p className="text-sm text-muted-foreground">We'll respond within 48 hours with next steps.</p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                  Submit Another Application
                </Button>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building2 className="h-5 w-5 text-primary" />
                Brand Information &amp; Assets
              </CardTitle>
              <CardDescription>
                Please provide comprehensive information about your brand and sponsorship goals
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Company Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <Building2 className="h-4 w-4" /> Company Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name *</Label>
                      <Input id="companyName" value={formData.companyName} onChange={(e) => set("companyName", e.target.value)} placeholder="Your company name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contactName">Contact Person *</Label>
                      <Input id="contactName" value={formData.contactName} onChange={(e) => set("contactName", e.target.value)} placeholder="Your full name" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-1"><Mail className="h-3 w-3" /> Email Address *</Label>
                      <Input id="email" type="email" value={formData.email} onChange={(e) => set("email", e.target.value)} placeholder="contact@company.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-1"><Phone className="h-3 w-3" /> Phone Number</Label>
                      <Input id="phone" type="tel" value={formData.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="website" className="flex items-center gap-1"><Globe className="h-3 w-3" /> Company Website</Label>
                    <Input id="website" value={formData.website} onChange={(e) => set("website", e.target.value)} placeholder="https://www.yourcompany.com" />
                  </div>
                </div>

                {/* About Your Company */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold">About Your Company</h3>
                  <div className="space-y-2">
                    <Label htmlFor="companyDescription">Company Description &amp; Links</Label>
                    <Textarea id="companyDescription" value={formData.companyDescription} onChange={(e) => set("companyDescription", e.target.value)} placeholder="Brief description of your company, mission, values..." rows={4} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="productDescription">Product/Service Description &amp; Demo Links</Label>
                    <Textarea id="productDescription" value={formData.productDescription} onChange={(e) => set("productDescription", e.target.value)} placeholder="Describe the specific product or service you want to promote..." rows={4} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="targetAudience" className="flex items-center gap-1"><Target className="h-3 w-3" /> Ideal Customer Profile (ICP)</Label>
                    <Textarea id="targetAudience" value={formData.targetAudience} onChange={(e) => set("targetAudience", e.target.value)} placeholder="Describe your ideal customer demographics, interests, and characteristics..." rows={3} />
                  </div>
                </div>

                {/* Marketing Assets */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2"><Palette className="h-4 w-4" /> Marketing Assets &amp; Links</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="logoUrl">Logo &amp; Brand Assets URL</Label>
                      <Input id="logoUrl" value={formData.logoUrl} onChange={(e) => set("logoUrl", e.target.value)} placeholder="https://drive.google.com/..." />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="brandGuidelinesUrl">Additional Creative Assets URL</Label>
                      <Input id="brandGuidelinesUrl" value={formData.brandGuidelinesUrl} onChange={(e) => set("brandGuidelinesUrl", e.target.value)} placeholder="https://drive.google.com/..." />
                    </div>
                  </div>
                </div>

                {/* Advertising & Messaging */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2"><MessageSquare className="h-4 w-4" /> Advertising &amp; Messaging Guidelines</h3>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="taglines">Taglines, Slogans &amp; Brand Language</Label>
                      <Textarea id="taglines" value={formData.taglines} onChange={(e) => set("taglines", e.target.value)} placeholder="Taglines or specific brand language you'd like us to use?" rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="avoidPhrases">Language to Avoid</Label>
                      <Textarea id="avoidPhrases" value={formData.avoidPhrases} onChange={(e) => set("avoidPhrases", e.target.value)} placeholder="Phrases, words, or themes we should avoid?" rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="promotionOffer">Promotion Code or Special Offer</Label>
                      <Textarea id="promotionOffer" value={formData.promotionOffer} onChange={(e) => set("promotionOffer", e.target.value)} placeholder="Would you like to offer a promo code or special offer for our audience?" rows={2} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredLandingPage">Preferred Landing Page</Label>
                      <Input id="preferredLandingPage" value={formData.preferredLandingPage} onChange={(e) => set("preferredLandingPage", e.target.value)} placeholder="URL you'd like traffic directed to?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="highlightedFeatures">Features to Highlight</Label>
                      <Textarea id="highlightedFeatures" value={formData.highlightedFeatures} onChange={(e) => set("highlightedFeatures", e.target.value)} placeholder="Specific products, services, or features to highlight first?" rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="desiredAction">Desired Listener Action</Label>
                      <Textarea id="desiredAction" value={formData.desiredAction} onChange={(e) => set("desiredAction", e.target.value)} placeholder="Main action you'd like listeners to take? (visit site, sign up, purchase, etc.)" rows={2} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="teamCoordination">Team Coordination</Label>
                      <Input id="teamCoordination" value={formData.teamCoordination} onChange={(e) => set("teamCoordination", e.target.value)} placeholder="Who on your team should we coordinate with for approvals?" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="disclaimers">Disclaimers &amp; Compliance</Label>
                      <Textarea id="disclaimers" value={formData.disclaimers} onChange={(e) => set("disclaimers", e.target.value)} placeholder="Any disclaimers, required language, or compliance guidelines?" rows={3} />
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold flex items-center gap-2"><MessageSquare className="h-4 w-4" /> Additional Information</h3>
                  <div className="space-y-2">
                    <Label htmlFor="additionalNotes">Additional Notes, Questions &amp; Links</Label>
                    <Textarea id="additionalNotes" value={formData.additionalNotes} onChange={(e) => set("additionalNotes", e.target.value)} placeholder="Any additional information, requirements, questions, or relevant links..." rows={4} />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Brand Onboarding Application"}
                </Button>
                <p className="text-sm text-muted-foreground text-center">
                  We'll review your submission and respond within 48 hours.
                </p>
              </form>
            </CardContent>
          </Card>
        )}
      </main>
      <Footer />
    </div>
  );
}
