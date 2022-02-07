import React from "react";

const YoutubeVid = ({ vidId }) => (
  <div className="videoResponsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube-nocookie.com/embed/${vidId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export default YoutubeVid;
