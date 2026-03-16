
export interface EpisodeLink {
  text: string;
  url: string;
}

export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  publishDate: string;
  audioUrl: string;
  duration?: string;
  showNotes: string[];
  fullShowNotes: string[];
  links: EpisodeLink[];
  imageUrl?: string;
  spotifyUrl?: string;
}

const decodeEntities = (text: string): string => {
  return text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ");
};

const extractLinks = (html: string): EpisodeLink[] => {
  const linkRegex = /<a[^>]+href="([^"]+)"[^>]*>([^<]*)<\/a>/gi;
  const links: EpisodeLink[] = [];
  let match;
  while ((match = linkRegex.exec(html)) !== null) {
    const url = decodeEntities(match[1]).replace(/⁠/g, "").trim();
    const text = decodeEntities(match[2]).replace(/⁠/g, "").trim();
    if (url && !url.includes("anchor.fm/s/")) {
      links.push({ text: text || url, url });
    }
  }
  return links;
};

const extractParagraphs = (html: string): string[] => {
  // Split by <p> tags to get paragraphs
  const parts = html.split(/<\/?p[^>]*>/gi);
  return parts
    .map(part => {
      // Replace <br> with newlines
      let cleaned = part.replace(/<br\s*\/?>/gi, "\n");
      // Replace <strong> with text
      cleaned = cleaned.replace(/<\/?strong>/gi, "");
      // Strip remaining HTML tags
      cleaned = cleaned.replace(/<[^>]*>/g, "");
      // Decode entities
      cleaned = decodeEntities(cleaned);
      // Clean up whitespace but preserve intentional newlines
      cleaned = cleaned.replace(/[ \t]+/g, " ").trim();
      // Remove invisible characters
      cleaned = cleaned.replace(/⁠/g, "").trim();
      return cleaned;
    })
    .filter(p => p.length > 0);
};

const isBoilerplate = (text: string): boolean => {
  const lower = text.toLowerCase();
  return (
    lower.includes("kitcaster.com") ||
    lower.includes("ryanestes.info") ||
    lower.includes("aiforfounders.co") ||
    lower.includes("drop a review") ||
    lower.includes("leave a review") ||
    lower.includes("this show runs on kitcaster") ||
    (lower.startsWith("http") && !lower.includes("linkedin.com"))
  );
};

export const parseRSSFeed = async (rssUrl: string): Promise<PodcastEpisode[]> => {
  try {
    console.log('Fetching RSS feed from:', rssUrl);
    
    const proxyUrls = [
      `https://cors-anywhere.herokuapp.com/${rssUrl}`,
      `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(rssUrl)}`,
      `https://api.allorigins.win/raw?url=${encodeURIComponent(rssUrl)}`,
      `https://corsproxy.io/?${encodeURIComponent(rssUrl)}`
    ];
    
    let xmlText: string | undefined;
    
    for (const proxyUrl of proxyUrls) {
      try {
        console.log('Trying proxy:', proxyUrl);
        const response = await fetch(proxyUrl, {
          headers: {
            'Accept': 'application/rss+xml, application/xml, text/xml'
          }
        });
        
        if (response.ok) {
          xmlText = await response.text();
          console.log('Successfully fetched RSS feed');
          break;
        }
      } catch (proxyError) {
        console.log('Proxy failed:', proxyUrl, proxyError);
        continue;
      }
    }
    
    if (!xmlText) {
      throw new Error('All proxy services failed');
    }
    
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");
    
    const parserError = xmlDoc.querySelector("parsererror");
    if (parserError) {
      console.error('XML parsing error:', parserError.textContent);
      throw new Error('Failed to parse RSS XML');
    }
    
    const items = xmlDoc.querySelectorAll("item");
    console.log(`Found ${items.length} episodes in RSS feed`);
    
    const episodes: PodcastEpisode[] = [];
    
    items.forEach((item, index) => {
      const title = item.querySelector("title")?.textContent || `Episode ${index + 1}`;
      const descriptionRaw = item.querySelector("description")?.textContent || "";
      const pubDate = item.querySelector("pubDate")?.textContent || "";
      const enclosure = item.querySelector("enclosure");
      const audioUrl = enclosure?.getAttribute("url") || "";
      const duration = item.querySelector("itunes\\:duration, duration")?.textContent || "";
      const image = item.querySelector("itunes\\:image");
      const imageUrl = image?.getAttribute("href") || "";
      const linkEl = item.querySelector("link");
      const spotifyUrl = linkEl?.textContent?.trim() || "";
      
      // Extract links before stripping HTML
      const links = extractLinks(descriptionRaw);
      
      // Extract paragraphs preserving structure
      const allParagraphs = extractParagraphs(descriptionRaw);
      
      // Separate content from boilerplate
      const contentParagraphs = allParagraphs.filter(p => !isBoilerplate(p));
      
      // Short description for cards (first meaningful paragraph)
      const firstParagraph = contentParagraphs[0] || "";
      const description = firstParagraph.length > 200 
        ? firstParagraph.substring(0, 200).replace(/\s+\S*$/, "") + "…"
        : firstParagraph;
      
      // Show notes preview (first 3 paragraphs)
      const showNotes = contentParagraphs.slice(0, 3);
      
      episodes.push({
        id: `episode-${index}`,
        title: decodeEntities(title).trim(),
        description,
        publishDate: pubDate,
        audioUrl,
        duration,
        showNotes,
        fullShowNotes: contentParagraphs,
        links,
        imageUrl: imageUrl || undefined,
        spotifyUrl: spotifyUrl || undefined
      });
    });
    
    console.log(`Parsed ${episodes.length} episodes successfully`);
    return episodes;
  } catch (error) {
    console.error("Error parsing RSS feed:", error);
    throw error;
  }
};
