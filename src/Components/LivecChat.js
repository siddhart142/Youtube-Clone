import React, { useEffect } from 'react'
import Chatmsg from './Chatmsg'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../Utils/chatSlice';
import { generate } from '../Utils/helper';
const LivecChat = () => {

    const dispatch = useDispatch();

    const chatMsg = useSelector((store) => store.chat.messages)

    useEffect(()=>{
        const i = setInterval(() => {

            // API Polling

            dispatch(addMessage({
                name : generate(),
                msg : "Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, quas?"
            }))
             console.log("heloo")
        }, 2000);

        return () => clearInterval(i);

    },[])


  return (
    <div className='h-[900px] border w-full rounded-lg bg-gray-50 overflow-y-scroll flex flex-col-reverse'>
      {/* <Chatmsg name="Sid" msg="Hello world" /> */}
      
      {chatMsg.map((c)=> (
        <Chatmsg name={c.name} msg={c.msg} />
      ))}
    </div>
  )
}

export default LivecChat
