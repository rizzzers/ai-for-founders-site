import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllTools, findToolBySlug, generateToolSlug } from "@/data/tools";
import ToolDetailClient from "./ToolDetailClient";

export function generateStaticParams() {
  return getAllTools().map((t) => ({ slug: generateToolSlug(t.name) }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const result = findToolBySlug(params.slug);
  if (!result) return { title: "Tool Not Found" };

  const { tool, theme, category } = result;
  const domain = (() => {
    try {
      return new URL(tool.url).hostname;
    } catch {
      return "";
    }
  })();
  const faviconUrl = domain
    ? `https://www.google.com/s2/favicons?domain=${domain}&sz=64`
    : undefined;

  return {
    title: `${tool.name} - AI Tool Review | AI for Founders`,
    description: tool.description,
    keywords: `${tool.name}, AI tool, ${category}, ${theme}, startup tools, founder tools`,
    alternates: {
      canonical: `https://aifor-founders.com/tools/${params.slug}`,
    },
    openGraph: {
      title: `${tool.name} - AI Tool Review | AI for Founders`,
      description: tool.description,
      url: `https://aifor-founders.com/tools/${params.slug}`,
      type: "article",
      ...(faviconUrl ? { images: [{ url: faviconUrl, alt: tool.name }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: `${tool.name} - AI Tool Review | AI for Founders`,
      description: tool.description,
    },
  };
}

export default function ToolDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const result = findToolBySlug(params.slug);
  if (!result) notFound();

  const { tool, theme, category } = result;

  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: tool.name,
    description: tool.description,
    url: tool.url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    review: {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Ryan Estes",
        url: "https://aifor-founders.com/about",
      },
      reviewBody: tool.description,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
      />
      <ToolDetailClient
        tool={tool}
        theme={theme}
        category={category}
      />
    </>
  );
}
