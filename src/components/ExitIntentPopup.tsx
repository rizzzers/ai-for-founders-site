"use client"
import { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const STORAGE_KEY = "exit-intent-dismissed";

const ExitIntentPopup = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && !sessionStorage.getItem(STORAGE_KEY)) {
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("/api/forms/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
      toast({ title: "You're in!", description: "Check your inbox." });
    } catch {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const handleDismiss = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md border-primary/20 bg-background p-0 overflow-hidden gap-0">
        <div className="flex justify-center pt-8 pb-2">
          <img
            src="/lovable-uploads/AIFF_Art.png"
            alt="AI for Founders"
            className="h-16 w-16 object-contain"
          />
        </div>
        <div className="px-8 pb-8 text-center">
          <DialogTitle className="text-3xl md:text-4xl font-bold tracking-tight mb-2 gradient-text">
            You're Early.
          </DialogTitle>
          <p className="text-muted-foreground mb-8">
            Stay that way.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 text-primary p-4 bg-primary/10 rounded-lg">
              <CheckCircle className="h-5 w-5" />
              <span className="font-medium">You're subscribed!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="text-center"
              />
              <Button type="submit" disabled={loading} className="w-full text-base font-semibold">
                {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "I'm In"}
              </Button>
              <button
                type="button"
                onClick={handleDismiss}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors mt-2 block mx-auto"
              >
                I'll catch up later
              </button>
            </form>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExitIntentPopup;
