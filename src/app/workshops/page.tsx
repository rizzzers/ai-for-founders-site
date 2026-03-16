import type { Metadata } from "next";
import WorkshopsClient from "./WorkshopsClient";

export const metadata: Metadata = {
  title: "AI Workshops for Founders - Hands-On AI Training & Strategy Sessions",
  description:
    "Join exclusive hands-on AI workshops for startup founders and entrepreneurs. Learn practical AI implementation, master cutting-edge tools, develop AI business strategies, and network with successful founders.",
  keywords:
    "AI workshops, artificial intelligence training, founder education, AI business strategy, entrepreneur workshops, AI implementation, startup AI training",
  alternates: { canonical: "https://aiforfounders.co/workshops" },
  openGraph: {
    title: "AI Workshops for Founders",
    description: "Hands-on AI workshops designed for startup founders. Learn, build, and network.",
    url: "https://aiforfounders.co/workshops",
  },
};

export default function WorkshopsPage() {
  return <WorkshopsClient />;
}
