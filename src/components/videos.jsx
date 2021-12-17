import React, { Component } from "react";
import Video from "./video";

class Videos extends Component {
  render() {
    return (
      <div className="video-list">
        {this.props.videos.map((video) => (
          <Video key={video.id} video={video} />
        ))}
      </div>
    );
  }
}

export default Videos;
