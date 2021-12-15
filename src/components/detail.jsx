import React, { Component } from "react";
import Youtube from "react-youtube";

class Detail extends Component {
  state = {
    videos: [],
    selectedVideoId: "",
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

  onReady = (event) => {
    event.target.pauseVideo();
  };
  render() {
    const { videos } = this.state;
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };
    console.log(videos);
    return (
      <>
        <div className="video-player">
          <Youtube videoId="3c584TGG7jQ" opts={opts} onReady={this.onReady} />
          <div className="video-detail"></div>
          <div className="video-list"></div>
        </div>
        <div className="video-list"></div>
      </>
    );
  }
}

export default Detail;
