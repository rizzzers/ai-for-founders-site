"use client";

import { useState, useEffect } from 'react';
import { parseRSSFeed, PodcastEpisode } from '@/utils/rssParser';

export const usePodcastFeed = (rssUrl: string) => {
  const [episodes, setEpisodes] = useState<PodcastEpisode[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEpisodes = async () => {
      try {
        console.log('Starting to fetch podcast episodes...');
        setLoading(true);
        setError(null);
        const parsedEpisodes = await parseRSSFeed(rssUrl);
        console.log('Successfully parsed episodes:', parsedEpisodes.length);
        setEpisodes(parsedEpisodes);
      } catch (err) {
        const errorMessage = 'Failed to load podcast episodes. This may be due to CORS restrictions.';
        setError(errorMessage);
        console.error('RSS feed error:', err);
        
        // Try to provide a fallback or helpful message
        console.log('You can try accessing the RSS feed directly at:', rssUrl);
      } finally {
        setLoading(false);
      }
    };

    if (rssUrl) {
      fetchEpisodes();
    }
  }, [rssUrl]);

  return { episodes, loading, error };
};
