import React from 'react';

const VideoCard = ({ info }) => {

  // console.log(info)
    if (!info) {
        return <div>Loading...</div>; // or handle the case when info is undefined
      }
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails } = snippet;
  const { viewCount, likeCount, commentCount } = statistics;

  return (
    <div className='shadow-lg m-4  w-96 rounded-3xl'>
      <img className="rounded-3xl w-96 " alt="thumbnail" src={thumbnails.high.url} />
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
