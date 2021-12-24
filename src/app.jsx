import React, { Component, useEffect, useState } from "react";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App() {
  const [videos, setVideos] = useState([]);

  const onSearch = (keyword) => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&type=video&key=AIzaSyDAdlftPwJtY1w-EOBKxtqKn06ro0IznH0`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) =>
        result.items.map((video) => ({ ...video, id: video.id.videoId }))
      )
      .then((items) => setVideos(items))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDAdlftPwJtY1w-EOBKxtqKn06ro0IznH0",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <>
      <SearchHeader onSearch={onSearch} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
