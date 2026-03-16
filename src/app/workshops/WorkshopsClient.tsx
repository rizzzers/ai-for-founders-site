"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Wrench, Calendar, Users, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  experience: z.string().min(10, "Please describe your experience with AI"),
  interests: z.array(z.string()).min(1, "Please select at least one area of interest"),
});

const interestOptions = [
  "AI Strategy & Implementation",
  "Machine Learning Fundamentals",
  "AI Tools for Productivity",
  "Building AI-Powered Products",
  "AI Ethics & Governance",
  "Automation & Workflows",
  "Data Science & Analytics",
  "AI for Marketing & Sales",
];

export default function WorkshopsClient() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", phone: "", company: "", experience: "", interests: [] },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    try {
      const { error: insertError } = await supabase.from("workshop_submissions").insert({
        name: values.name,
        email: values.email,
        phone: values.phone || null,
        company: values.company || null,
        experience: values.experience,
        interests: values.interests,
      });
      if (insertError) throw new Error("Failed to save submission");

      await supabase.functions.invoke("send-workshop-email", { body: values });

      toast({ title: "Registration Successful!", description: "We'll be in touch soon with workshop details." });
      form.reset();
    } catch {
      toast({ title: "Registration Failed", description: "Please try again later.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 px-4 bg-gradient-to-b from-card/50 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-6 text-primary border-primary/20">
            <Wrench className="h-4 w-4 mr-2" />
            Hands-On AI Workshops
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">Master AI for Your Business</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Join our exclusive hands-on workshops designed specifically for startup founders and entrepreneurs
            ready to integrate AI into their business strategies.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Interactive Sessions</h3>
              <p className="text-muted-foreground">Hands-on workshops with real-world applications and case studies</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-muted-foreground">Learn from AI practitioners and successful entrepreneurs</p>
            </div>
            <div className="text-center">
              <Star className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Networking</h3>
              <p className="text-muted-foreground">Connect with other founders building AI-powered businesses</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Register for Upcoming Workshops</h2>
            <p className="text-muted-foreground">
              Fill out the form below and we&apos;ll notify you about our next workshop sessions.
            </p>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address *</FormLabel>
                      <FormControl>
                        <Input placeholder="john@company.com" type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 123-4567" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="experience"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Experience with AI *</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us about your current experience with AI and what you're hoping to learn..."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interests"
                render={() => (
                  <FormItem>
                    <FormLabel>Areas of Interest *</FormLabel>
                    <div className="grid md:grid-cols-2 gap-3">
                      {interestOptions.map((interest) => (
                        <FormField
                          key={interest}
                          control={form.control}
                          name="interests"
                          render={({ field }) => (
                            <FormItem key={interest} className="flex flex-row items-start space-x-3 space-y-0">
                              <FormControl>
                                <Checkbox
                                  checked={field.value?.includes(interest)}
                                  onCheckedChange={(checked) =>
                                    checked
                                      ? field.onChange([...field.value, interest])
                                      : field.onChange(field.value?.filter((v) => v !== interest))
                                  }
                                />
                              </FormControl>
                              <FormLabel className="text-sm font-normal">{interest}</FormLabel>
                            </FormItem>
                          )}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Registering..." : "Register for Workshop"}
              </Button>
            </form>
          </Form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
