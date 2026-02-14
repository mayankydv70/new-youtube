import React, { useEffect, useState } from 'react'
import { addMessage } from '../utils/chatSlice'
import { useDispatch, useSelector } from 'react-redux'
import ChatMessege from './ChatMessege'
import { generateRandomName, generateRandomText } from '../utils/helper'

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState('')

  const dispatch = useDispatch()
  const chatMessages = useSelector((store) => store.chat.messages)

    useEffect(() =>{
       const i = setInterval(() => {
            dispatch(addMessage({
                name: generateRandomName(),
                text: generateRandomText(),
            }))
        },1000)

        return () => clearInterval(i)
    },[dispatch])

  return (
    <>
    <div className='px-2 py-2 m-2 w-full h-146 border-2 border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
   {chatMessages.map((c, i) => (
     <ChatMessege 
      key={i}
       name={c.name}
       text={c.text}
      />
   ))}
     </div>
    </div>
    <form className='flex items-center w-full p-1 ml-2 border border-black ' 
       onSubmit={(e) => {e.preventDefault()
         dispatch(addMessage({
             name: "mayank yadav",
             text: liveMessage,
         }))
         setLiveMessage('')
        } }>
        <input
        value={liveMessage}
        onChange={(e) => {
            setLiveMessage(e.target.value)
        }}
        className='border px-2 m-2 w-full'
        type="text" />
        <button className='bg-blue-300 rounded-md px-3 py-1 cursor-pointer'>send</button>
    </form>
    </>
  )
}

export default LiveChat