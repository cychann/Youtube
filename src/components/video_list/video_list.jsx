import React from "react";
import Video from "../video/video";
import styles from "./video_list.module.css";

const VideoList = (props) => {
  return (
    <div className={styles.videos}>
      {props.videos.map((video) => (
        <Video video={video} key={video.id} />
      ))}
    </div>
  );
};

export default VideoList;
