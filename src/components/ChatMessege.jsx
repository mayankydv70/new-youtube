import React from 'react'
import { USER_ICON } from '../utils/contants'

const ChatMessege = ({name, text}) => {
  return (
    <div className='flex gap-3 items-center my-2 '>
      <img 
       className='h-10  cursor-pointer rounded-full'
       src={USER_ICON} alt="" />
       <h1 className='font-bold'>{name}</h1>
       <h2 className='font-medium'>{text}</h2>
    </div>
  )
}

export default ChatMessege;