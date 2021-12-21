import React from "react";
import styles from "./video_item.module.css";

const VideoItem = (props) => (
  <li className={styles.video}>
    <img
      className={styles.thumbnail}
      src={props.video.snippet.thumbnails.medium.url}
      alt=""
    />
    <div className={styles.video_description}>
      <span className={styles.title}>{props.video.snippet.title}</span>
      <span className={styles.channel}>{props.video.snippet.channelTitle}</span>
    </div>
  </li>
);

export default VideoItem;
