/**
 * Server-side RSS fetcher for podcast episodes.
 * Uses direct fetch (no CORS proxy needed on server) and regex-based XML parsing
 * (no DOMParser, which is browser-only).
 */

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

const RSS_URL = "https://anchor.fm/s/1004a68d8/podcast/rss";

const decodeEntities = (text: string): string =>
  text
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#x27;/g, "'")
    .replace(/&nbsp;/g, " ");

/** Extract text content from a tag, handling both CDATA and plain text */
const getTagText = (xml: string, tag: string): string => {
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(":", "\\:");
  const re = new RegExp(
    `<${escaped}[^>]*>(?:<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>|([\\s\\S]*?))</${escaped}>`,
    "i"
  );
  const m = xml.match(re);
  if (!m) return "";
  return decodeEntities((m[1] ?? m[2] ?? "").trim());
};

/** Extract an attribute value from a self-closing or opening tag */
const getAttr = (xml: string, tag: string, attr: string): string => {
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(":", "\\:");
  const re = new RegExp(`<${escaped}[^>]*\\s${attr}="([^"]*)"`, "i");
  const m = xml.match(re);
  return m ? decodeEntities(m[1]) : "";
};

const splitItems = (xml: string): string[] => {
  const items: string[] = [];
  let pos = 0;
  while (true) {
    const s = xml.indexOf("<item>", pos);
    if (s === -1) break;
    const e = xml.indexOf("</item>", s);
    if (e === -1) break;
    items.push(xml.slice(s, e + 7));
    pos = e + 7;
  }
  return items;
};

const extractParagraphs = (html: string): string[] =>
  html
    .split(/<\/?p[^>]*>/gi)
    .map((part) =>
      decodeEntities(
        part
          .replace(/<br\s*\/?>/gi, "\n")
          .replace(/<\/?strong>/gi, "")
          .replace(/<[^>]*>/g, "")
          .replace(/[ \t]+/g, " ")
          .replace(/⁠/g, "")
          .trim()
      )
    )
    .filter((p) => p.length > 0);

const isBoilerplate = (text: string): boolean => {
  const l = text.toLowerCase();
  return (
    l.includes("kitcaster.com") ||
    l.includes("ryanestes.info") ||
    l.includes("aiforfounders.co") ||
    l.includes("drop a review") ||
    l.includes("leave a review") ||
    l.includes("this show runs on kitcaster") ||
    (l.startsWith("http") && !l.includes("linkedin.com"))
  );
};

const extractLinks = (html: string): EpisodeLink[] => {
  const re = /<a[^>]+href="([^"]+)"[^>]*>([^<]*)<\/a>/gi;
  const links: EpisodeLink[] = [];
  let m: RegExpExecArray | null;
  while ((m = re.exec(html)) !== null) {
    const url = decodeEntities(m[1]).replace(/⁠/g, "").trim();
    const text = decodeEntities(m[2]).replace(/⁠/g, "").trim();
    if (url && !url.includes("anchor.fm/s/")) {
      links.push({ text: text || url, url });
    }
  }
  return links;
};

export async function fetchRssFeed(): Promise<PodcastEpisode[]> {
  const res = await fetch(RSS_URL, {
    next: { revalidate: 3600 }, // ISR: refresh every hour
  });
  if (!res.ok) throw new Error(`RSS fetch failed: ${res.status} ${res.statusText}`);

  const xml = await res.text();
  const items = splitItems(xml);

  return items.map((item, index) => {
    const title = getTagText(item, "title") || `Episode ${index + 1}`;
    const descRaw = getTagText(item, "description");
    const pubDate = getTagText(item, "pubDate");
    const audioUrl = getAttr(item, "enclosure", "url");
    const duration =
      getTagText(item, "itunes:duration") || getTagText(item, "duration");
    const imageUrl =
      getAttr(item, "itunes:image", "href") || getAttr(item, "image", "href");
    const spotifyUrl = getTagText(item, "link");

    const links = extractLinks(descRaw);
    const allParagraphs = extractParagraphs(descRaw);
    const content = allParagraphs.filter((p) => !isBoilerplate(p));

    const firstPara = content[0] ?? "";
    const description =
      firstPara.length > 200
        ? firstPara.slice(0, 200).replace(/\s+\S*$/, "") + "…"
        : firstPara;

    return {
      id: `episode-${index}`,
      title: title.trim(),
      description,
      publishDate: pubDate,
      audioUrl,
      duration: duration || undefined,
      showNotes: content.slice(0, 3),
      fullShowNotes: content,
      links,
      imageUrl: imageUrl || undefined,
      spotifyUrl: spotifyUrl || undefined,
    };
  });
}
