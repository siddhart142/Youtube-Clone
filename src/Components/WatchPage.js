import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../Utils/appSlice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LivecChat from './LivecChat';

const WatchPage = () => {
    const dispatch = useDispatch();

    // const params = useParams();
    const [searchParams,setSearchParams] = useSearchParams();
    console.log(searchParams.get("v"));
    // console.log(params)
    useEffect(()=>{
        dispatch( closeMenu() )
    },[])
  return (
 
      <div className='col-span-11 p-2 flex flex-col'>
      <div className='flex'>
      <div >
        <iframe className='ml-32 mt-16 rounded-2xl ' width="1600"
        height="900" 
        src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        </div>
        <div className="mt-16 w-full">
          <LivecChat/>
        </div>
        </div>
          <CommentsContainer/>
        </div>


  )
}

export default WatchPage
