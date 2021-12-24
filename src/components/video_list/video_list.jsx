import React from "react";
import Video from "../video/video";

const VideoList = (props) => {
  return (
    <div>
      {props.videos.map((video) => (
        <Video video={video} />
      ))}
    </div>
  );
};

export default VideoList;
