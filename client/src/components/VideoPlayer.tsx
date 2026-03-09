import { useState } from "react";
import { Play } from "lucide-react";

interface VideoPlayerProps {
  videoUrl?: string;
  thumbnailUrl: string;
  title: string;
  duration?: string;
}

export default function VideoPlayer({
  videoUrl,
  thumbnailUrl,
  title,
  duration = "2:45",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {!isPlaying ? (
        <div className="relative group cursor-pointer" onClick={() => setIsPlaying(true)}>
          {/* Thumbnail */}
          <img
            src={thumbnailUrl}
            alt={title}
            className="w-full h-auto rounded-2xl shadow-2xl"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-black/30 group-hover:bg-black/40 transition-colors">
            <div className="bg-accent text-accent-foreground rounded-full p-6 group-hover:scale-110 transition-transform">
              <Play className="w-8 h-8 fill-current" />
            </div>
          </div>

          {/* Duration Badge */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {duration}
          </div>

          {/* Play Text */}
          <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold text-sm">
            ▶ Watch Video
          </div>
        </div>
      ) : (
        <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl">
          {/* Embedded Video */}
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={videoUrl || "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"}
              title={title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-4 right-4 bg-black/70 hover:bg-black/90 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors"
          >
            ✕
          </button>
        </div>
      )}

      {/* Video Description */}
      <div className="mt-4 text-center">
        <p className="text-foreground font-semibold">{title}</p>
        <p className="text-sm text-muted-foreground mt-1">
          See exactly what's inside the guide (2:45)
        </p>
      </div>
    </div>
  );
}
