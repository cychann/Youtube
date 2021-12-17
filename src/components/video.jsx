import React, { Component } from "react";

class Video extends Component {
  render() {
    const { video } = this.props;
    return (
      <div className="video-card">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt=""
          width="270px"
          height="150"
        />
        <div className="video-description">
          <span className="video-title">{video.snippet.title}</span>
          <span>{video.snippet.channelTitle}</span>
        </div>
      </div>
    );
  }
}

export default Video;
