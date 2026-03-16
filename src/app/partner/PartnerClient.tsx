"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interests: { sponsor: false, interview: false, feature: false },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (key: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      interests: { ...prev.interests, [key]: checked },
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "Error", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/forms/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Request failed");

      toast({ title: "Inquiry Submitted!", description: "We'll get back to you within 48 hours." });
      setFormData({ name: "", email: "", phone: "", message: "", interests: { sponsor: false, interview: false, feature: false } });
    } catch {
      toast({ title: "Error", description: "There was a problem submitting your inquiry. Please try again.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4">Partner With Us</h1>
          <p className="text-center text-muted-foreground mb-10">
            Interested in sponsoring, being interviewed, or featuring your product? Tell us what you have in mind.
          </p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone (optional)</Label>
              <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} />
            </div>
            <div className="space-y-3">
              <Label>I&apos;m interested in:</Label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox checked={formData.interests.sponsor} onCheckedChange={(c) => handleCheckboxChange("sponsor", !!c)} />
                  Sponsoring the podcast / newsletter
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox checked={formData.interests.interview} onCheckedChange={(c) => handleCheckboxChange("interview", !!c)} />
                  Applying for a podcast interview
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <Checkbox checked={formData.interests.feature} onCheckedChange={(c) => handleCheckboxChange("feature", !!c)} />
                  Featuring a product
                </label>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea id="message" name="message" value={formData.message} onChange={handleInputChange} className="min-h-[120px]" required />
            </div>
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
