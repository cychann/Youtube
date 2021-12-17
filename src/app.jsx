import React, { Component } from "react";
import "./app.css";
import Detail from "./components/detail";
import Navbar from "./components/navbar";
import Videos from "./components/videos";

class App extends Component {
  state = {
    videos: [],
    videoToPlay: [],
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

  handleVideoClick = (video) => {
    console.log(video);
  };

  handleSearch = (keyword) => {
    console.log(keyword);
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=AIzaSyDAdlftPwJtY1w-EOBKxtqKn06ro0IznH0`,
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ videos: data.items });
      })
      .catch((error) => console.log("error", error));
  };

  render() {
    return (
      <>
        <Navbar onSearch={this.handleSearch} />
        <Videos
          videos={this.state.videos}
          onClickVideo={this.handleVideoClick}
        />
        {/* <Detail /> */}
      </>
    );
  }
}

export default App;
