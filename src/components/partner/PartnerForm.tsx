"use client"
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const PartnerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    productLink: "",
    budgetRange: "",
    campaignGoals: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.productLink) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
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

      toast({
        title: "Application Submitted!",
        description: "Thanks for your interest. We'll follow up within 48 hours.",
      });

      setFormData({
        name: "",
        email: "",
        productLink: "",
        budgetRange: "",
        campaignGoals: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Apply for Partnership</h2>
        <p className="text-center text-muted-foreground mb-8">
          Tell us about your brand and goals. We'll follow up within 48 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="name">Company / Brand Name *</Label>
            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Contact Email *</Label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="productLink">Product / Service Website *</Label>
            <Input id="productLink" name="productLink" type="url" placeholder="https://" value={formData.productLink} onChange={handleInputChange} required />
          </div>

          <div className="space-y-2">
            <Label>Budget Range</Label>
            <Select value={formData.budgetRange} onValueChange={(v) => setFormData((p) => ({ ...p, budgetRange: v }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select a range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="$5,000 - Starter Visibility">$5,000 - Starter Visibility</SelectItem>
                <SelectItem value="$12,000 - Growth Visibility">$12,000 - Growth Visibility</SelectItem>
                <SelectItem value="$19,000 - Dominant Visibility">$19,000 - Dominant Visibility</SelectItem>
                <SelectItem value="Custom / Not sure yet">Custom / Not sure yet</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Campaign Goals</Label>
            <Select value={formData.campaignGoals} onValueChange={(v) => setFormData((p) => ({ ...p, campaignGoals: v }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select a goal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Brand Awareness">Brand Awareness</SelectItem>
                <SelectItem value="Lead Generation">Lead Generation</SelectItem>
                <SelectItem value="Product Launch">Product Launch</SelectItem>
                <SelectItem value="Event Promotion">Event Promotion</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Preferred Timeline</Label>
            <Select value={formData.timeline} onValueChange={(v) => setFormData((p) => ({ ...p, timeline: v }))}>
              <SelectTrigger>
                <SelectValue placeholder="Select a timeline" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ASAP">ASAP</SelectItem>
                <SelectItem value="Within 1 month">Within 1 month</SelectItem>
                <SelectItem value="1–3 months">1–3 months</SelectItem>
                <SelectItem value="3+ months">3+ months</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Anything else we should know?</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="min-h-[100px]"
            />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Application"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default PartnerForm;
