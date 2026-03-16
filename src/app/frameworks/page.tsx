import type { Metadata } from "next";
import FrameworksClient from "./FrameworksClient";

export const metadata: Metadata = {
  title: "Frameworks from the Show | AI for Founders",
  description:
    "Strategic thinking tools discussed by founders on AI for Founders. Browse, search, and explore frameworks from every episode.",
  keywords:
    "startup frameworks, founder strategies, AI frameworks, validation, leadership, competitive advantage",
  alternates: { canonical: "https://aifor-founders.com/frameworks" },
  openGraph: {
    title: "Frameworks from the Show - AI for Founders",
    description: "Strategic thinking tools from every AI for Founders podcast episode.",
    url: "https://aifor-founders.com/frameworks",
  },
};

export default function FrameworksPage() {
  return <FrameworksClient />;
}
