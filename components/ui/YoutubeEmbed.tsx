import React from 'react';



export const YouTubeEmbed = ({
  embedId
}: {
  embedId: string
}) => {
  return(<div className="aspect-w-16 aspect-h-9">
    <iframe
      className="w-full h-full rounded-lg"
      src={`https://www.youtube.com/embed/${embedId}`}
      title="YouTube video player"
      width="100%"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>)
};

export default YouTubeEmbed;