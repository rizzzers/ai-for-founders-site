import type { Metadata } from "next";
import SchedulePodcastClient from "./SchedulePodcastClient";

export const metadata: Metadata = {
  title: "Schedule Podcast Interview - AI for Founders | Free Guest Booking",
  description:
    "Schedule your free interview on the AI for Founders podcast — Top 100 Entrepreneurship podcast reaching 20,000+ engaged founders and entrepreneurs. Book your 1-hour interview session now.",
  keywords:
    "podcast interview booking, AI for founders guest, podcast guest application, entrepreneur podcast interview, schedule podcast recording",
  alternates: { canonical: "https://aiforfounders.co/schedule-podcast" },
  openGraph: {
    title: "Schedule a Podcast Interview - AI for Founders",
    description: "Book a free 1-hour interview on the Top 100 Entrepreneurship podcast.",
    url: "https://aiforfounders.co/schedule-podcast",
  },
};

export default function SchedulePodcastPage() {
  return <SchedulePodcastClient />;
}
