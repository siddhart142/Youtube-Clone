import React, { useState } from 'react';

const VideoCard = ({ info }) => {


  const [playVideo, setPlayVideo] = useState(false);

  const handleMouseOver = () =>{
    setPlayVideo(true)
  }
  const handleMouseOut = () =>{
    setPlayVideo(false)
  }
  console.log(info)
    if (!info) {
        return <div>Loading...</div>; // or handle the case when info is undefined
      }
  const { snippet, statistics,id } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount, likeCount, commentCount } = statistics;

  return (
    <div className=' m-4  w-96 rounded-3xl' >
    {/* <div className=' m-4  w-96 rounded-3xl' onMouseEnter ={handleMouseOver} onMouseLeave ={handleMouseOut}> */}

      <img className="rounded-3xl w-96 " alt="thumbnail" src={thumbnails.high.url} /> 
      {/* {playVideo &&  <iframe
        width= "368px"
        height = "256px"
      src={"https://www.youtube.com/embed/"+{id}+"?autoplay=1&amp;start=23"}
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
       allowFullScreen></iframe>} */}
      <ul className='m-2'>
        <li className='font-bold pb-4 ' >{title}</li>
        <li>{channelTitle}</li>
        <li>Views: {viewCount}</li>
        <li>Likes: {likeCount}</li>
      </ul>
    </div>
  );
}

export default VideoCard;
