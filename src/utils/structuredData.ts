// Organization structured data
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "AI for Founders",
  "alternateName": "AI for Founders Podcast",
  "url": "https://aifor-founders.lovable.app",
  "logo": "https://aifor-founders.lovable.app/lovable-uploads/c20d4f23-52cf-4b12-b7ab-6a6b13edc00a.png",
  "description": "Top 100 Entrepreneurship podcast and weekly newsletter for startup founders building with AI. Reaching 20,000+ engaged entrepreneurs, funded founders, and CEOs with expert AI insights, strategies, and hands-on workshops.",
  "foundingDate": "2024",
  "founder": {
    "@type": "Person",
    "name": "Ryan Estes",
    "jobTitle": "Host & Creator",
    "url": "https://ryanestes.info"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "email": "contact@aiforfounders.co"
  },
  "sameAs": [
    "https://open.spotify.com/show/4YN2z0kiz5cj2xxJ6xF5va",
    "https://podcasts.apple.com/us/podcast/ai-for-founders/id1798265052",
    "https://www.youtube.com/@AIforfounders1",
    "https://ai-founders-edge.lovable.app/blog"
  ],
  "audience": {
    "@type": "Audience",
    "audienceType": "Startup Founders, Entrepreneurs, CEOs, Business Leaders"
  }
};

// Website structured data
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "AI for Founders",
  "alternateName": "AI for Founders - Podcast, Newsletter & Workshops",
  "url": "https://aifor-founders.lovable.app",
  "description": "Your ultimate guide to building with AI - Top 100 Entrepreneurship podcast, weekly newsletter, and hands-on workshops for startup founders",
  "publisher": {
    "@type": "Organization",
    "name": "AI for Founders",
    "founder": {
      "@type": "Person",
      "name": "Ryan Estes"
    }
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://aifor-founders.lovable.app/resources?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "about": {
    "@type": "Thing",
    "name": "Artificial Intelligence for Business",
    "description": "AI tools, strategies, and education for entrepreneurs and startup founders"
  }
};

// Podcast structured data
export const podcastSchema = {
  "@context": "https://schema.org",
  "@type": "PodcastSeries",
  "name": "AI for Founders Podcast",
  "description": "Top 100 Entrepreneurship podcast with 20,000+ subscribers. Weekly interviews with successful founders, expert AI strategies, and actionable insights for entrepreneurs building AI-powered businesses.",
  "url": "https://aifor-founders.lovable.app/podcast",
  "author": {
    "@type": "Person",
    "name": "Ryan Estes",
    "url": "https://ryanestes.info"
  },
  "publisher": {
    "@type": "Organization",
    "name": "AI for Founders"
  },
  "webFeed": "https://feeds.transistor.fm/ai-for-founders",
  "genre": ["Business", "Technology", "Entrepreneurship", "Artificial Intelligence"],
  "audience": {
    "@type": "Audience",
    "audienceType": "Startup Founders, Entrepreneurs, CEOs, Business Leaders"
  }
};

// Workshop structured data
export const workshopSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "AI for Founders Workshops",
  "description": "Hands-on AI workshops designed specifically for startup founders and entrepreneurs",
  "url": "https://aifor-founders.lovable.app/workshops",
  "provider": {
    "@type": "Organization",
    "name": "AI for Founders"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Entrepreneurs, Startup Founders, Business Leaders"
  },
  "educationalLevel": "Intermediate to Advanced"
};

// Tool collection structured data
export const toolCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "AI Tools for Founders - Curated Directory 2026",
  "description": "Curated collection of 100+ best AI tools for entrepreneurs and startup founders. Updated weekly with the latest AI innovations across development, marketing, operations, and more.",
  "url": "https://aifor-founders.lovable.app/resources",
  "numberOfItems": 100,
  "itemListOrder": "https://schema.org/ItemListOrderAscending",
  "about": {
    "@type": "Thing",
    "name": "Artificial Intelligence Tools for Business",
    "description": "AI software, platforms, and services for startups and entrepreneurs"
  },
  "audience": {
    "@type": "Audience",
    "audienceType": "Startup Founders, Entrepreneurs, Business Owners"
  }
};

// FAQ structured data helper
export const createFAQSchema = (faqs: Array<{question: string, answer: string}>) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};