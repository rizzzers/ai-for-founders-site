"use client";
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface ThumbnailData {
  url: string;
  videoId: string;
}

interface ThumbnailCache {
  [index: number]: ThumbnailData;
}

const CACHE_KEY = 'yt_thumbnails_cache_v2';
const CACHE_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours

interface StoredCache {
  timestamp: number;
  key: string;
  data: ThumbnailCache;
}

function loadFromLocalStorage(cacheKey: string): ThumbnailCache | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const stored: StoredCache = JSON.parse(raw);
    if (stored.key !== cacheKey) return null;
    if (Date.now() - stored.timestamp > CACHE_TTL_MS) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return stored.data;
  } catch {
    return null;
  }
}

function saveToLocalStorage(cacheKey: string, data: ThumbnailCache) {
  try {
    const stored: StoredCache = { timestamp: Date.now(), key: cacheKey, data };
    localStorage.setItem(CACHE_KEY, JSON.stringify(stored));
  } catch {
    // Storage full or unavailable
  }
}

export const useYouTubeThumbnails = (episodeTitles: string[]) => {
  const [thumbnails, setThumbnails] = useState<ThumbnailCache>({});
  const [loading, setLoading] = useState(false);

  const cacheKey = episodeTitles.join('|');

  useEffect(() => {
    if (episodeTitles.length === 0) return;

    const cached = loadFromLocalStorage(cacheKey);
    if (cached && Object.keys(cached).length > 0) {
      setThumbnails(cached);
      return;
    }

    const fetchThumbnails = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase.functions.invoke('youtube-thumbnails', {
          body: { titles: episodeTitles },
        });

        if (error) {
          console.error('Failed to fetch YouTube thumbnails:', error);
          return;
        }

        if (data?.thumbnails) {
          const parsed: ThumbnailCache = {};
          for (const [key, val] of Object.entries(data.thumbnails)) {
            parsed[parseInt(key)] = val as ThumbnailData;
          }
          setThumbnails(parsed);
          saveToLocalStorage(cacheKey, parsed);
        }
      } catch (err) {
        console.error('YouTube thumbnails error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchThumbnails();
  }, [cacheKey]);

  return { thumbnails, loading };
};
