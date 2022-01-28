import React from "react";

const YoutubeVid = ({ vidId }) => (
  <div className="video-responsive">
    <iframe
      width="100%"
      height="300"
      src={`https://www.youtube.com/embed/${vidId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeVid;
