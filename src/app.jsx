import React, { Component, useEffect, useState } from "react";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  const onSearch = (keyword) => {
    youtube
      .search(keyword) //
      .then((videos) => setVideos(videos));
  };

  useEffect(() => {
    youtube
      .mostPopular() //
      .then((videos) => setVideos(videos));
  }, []);
  return (
    <>
      <SearchHeader onSearch={onSearch} />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
