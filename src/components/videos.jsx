import React, { Component } from "react";

class Videos extends Component {
  state = {
    videos: [],
  };
  componentDidMount = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDAdlftPwJtY1w-EOBKxtqKn06ro0IznH0",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          videos: data.items,
        })
      )
      .catch((error) => console.log("error", error));
  };

  render() {
    const { videos } = this.state;
    console.log(videos);
    return (
      <div className="video-list">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
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
        ))}
      </div>
    );
  }
}

export default Videos;
