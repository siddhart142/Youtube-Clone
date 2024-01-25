import { useEffect, useState } from "react"
import React from 'react'
import { YOUTUBE_VIDEOS_API } from "../Utils/Constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
const VideoContainer = () => {

  const [videos,setVideos] = useState([])

  useEffect(() => {
    getVideos()
  },[]);

  const getVideos = async () => {

    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    // console.log(json)
    setVideos(json.items)
  }

  // if(!videos) return null;
  return (
    <div className="flex flex-wrap">
      {/* <VideoCard info ={videos[0]} /> */}
      {videos.map((video) => <Link key={video.id} to={"/watch?v="+video?.id}> <VideoCard  info={video}/> </Link> )}
      {/* video */}
    </div>
  )
}

export default VideoContainer
