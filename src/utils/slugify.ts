/**
 * Generate a URL-friendly slug from an episode title.
 * e.g. "AI Marketing with Jane Doe | Ep. 42" → "ai-marketing-with-jane-doe-ep-42"
 */
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/['']/g, "") // remove apostrophes
    .replace(/[^\w\s-]/g, " ") // replace special chars with space
    .replace(/\s+/g, "-") // spaces to dashes
    .replace(/-+/g, "-") // collapse multiple dashes
    .replace(/^-|-$/g, "") // trim leading/trailing dashes
    .slice(0, 80); // keep URL reasonable
};

/**
 * Find an episode by its slug from the episodes array.
 * Returns the episode and its original index.
 */
export const findEpisodeBySlug = <T extends { title: string }>(
  episodes: T[],
  slug: string
): { episode: T; index: number } | null => {
  const idx = episodes.findIndex((ep) => generateSlug(ep.title) === slug);
  if (idx === -1) return null;
  return { episode: episodes[idx], index: idx };
};
