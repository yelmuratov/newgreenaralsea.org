import React, { useState } from 'react';

interface YouTubeEmbedProps {
  embedId?: string|null;
  fade:string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ embedId,fade }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailSrc = `https://img.youtube.com/vi/${embedId}/maxresdefault.jpg`;
  const videoSrc = `https://www.youtube.com/embed/${embedId}?autoplay=1`;

  const playVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div data-aos={fade} className="aspect-w-16 aspect-h-9 relative w-full h-0 pb-[56.25%]">
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center cursor-pointer" onClick={playVideo}>
        {!isPlaying && (
          <>
            <img src={thumbnailSrc} alt="Play video" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex justify-center items-center">
              <a href="#" className="w-12 h-12 bg-white-500 rounded-full ring-4 ring-white flex items-center justify-center hover:bg-purple-400 transition" onClick={(e) => { e.preventDefault(); playVideo(); }}>
                <span className="sr-only">Watch the video</span>
                <svg className="ml-1 w-6 h-6" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430054 3 0.339746L15 7.26795Z" fill="white" />
                </svg>
              </a>
            </div>
          </>
        )}
      </div>
      {isPlaying && (
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={videoSrc}
          frameBorder="0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
};

export default YouTubeEmbed;