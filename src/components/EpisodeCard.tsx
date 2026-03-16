"use client"

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PodcastEpisode } from "@/utils/rssParser";
import { Calendar, Clock, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EpisodeCardProps {
  episode: PodcastEpisode;
  youtubeThumbnail?: string;
}

const EpisodeCard = ({ episode }: EpisodeCardProps) => {
  const [showAllNotes, setShowAllNotes] = useState(false);
  
  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const displayedNotes = showAllNotes ? episode.showNotes : episode.showNotes.slice(0, 2);

  return (
    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
      <CardHeader className="pb-4">
        <div className="flex flex-col sm:flex-row gap-6">
          {episode.imageUrl && (
            <div className="flex-shrink-0">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={episode.imageUrl} 
                  alt={`${episode.title} cover art`}
                  className="w-full sm:w-40 h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <CardTitle className="text-2xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {episode.title}
            </CardTitle>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="font-medium">{formatDate(episode.publishDate)}</span>
              </div>
              {episode.duration && (
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="font-medium">{episode.duration}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6 pt-2">
        {/* Show Notes */}
        {episode.showNotes && episode.showNotes.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-border" />
              <h3 className="font-semibold text-sm uppercase tracking-wide text-primary">Show Notes</h3>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div 
              className={`space-y-2 text-sm text-muted-foreground leading-relaxed transition-all duration-300 ${
                showAllNotes ? 'animate-accordion-down' : ''
              }`}
            >
              {displayedNotes.map((note, index) => (
                <p key={index} className="pl-4 border-l-2 border-primary/30 hover:border-primary/60 transition-colors">
                  {note}
                </p>
              ))}
            </div>
            {episode.showNotes.length > 2 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowAllNotes(!showAllNotes)}
                className="text-xs h-9 px-4 font-medium hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                {showAllNotes ? (
                  <>
                    <ChevronUp className="h-4 w-4 mr-1" />
                    Show Less
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4 mr-1" />
                    Read More ({episode.showNotes.length - 2} more)
                  </>
                )}
              </Button>
            )}
          </div>
        )}
        
        {/* Audio Player */}
        {episode.audioUrl && (
          <div className="w-full pt-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs uppercase tracking-wide text-muted-foreground font-semibold">Listen Now</span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <audio 
              controls 
              className="w-full rounded-lg"
              preload="metadata"
              style={{
                filter: 'brightness(0.9) contrast(1.1)',
              }}
            >
              <source src={episode.audioUrl} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default EpisodeCard;
