import React, { Component } from "react";
import Video from "./video";

class Videos extends Component {
  handleVideoClick = (video) => {
    this.props.onClickVideo(video);
  };
  render() {
    return (
      <div className="video-list">
        {this.props.videos.map((video) => (
          <Video
            key={video.id}
            video={video}
            onClickVideo={this.handleVideoClick}
          />
        ))}
      </div>
    );
  }
}

export default Videos;
