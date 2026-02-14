import React from 'react'

const VideoCard = ({info}) => {

  const { snippet, statistics } = info || {}
  if(!snippet) return null
  const { channelTitle, title, thumbnails } = snippet;


  return (
    <div  className='px-5 py-3 mx-4 my-3 w-118  rounded-lg cursor-pointer shadow-lg'>
        <img className='rounded-lg' src={thumbnails.high.url} alt="thumbnails" />
        <ul>
            <li className='py-2 font-bold'>{title}</li>
            <li>{channelTitle}</li>
            <li>{statistics?.viewCount || 0} views</li>
        </ul>

    </div>
  )
}

export const AdVideoCard = ({ info }) => {
   return (
         <div className='border border-red-800 p-1 '>
          <VideoCard info={info} />
         </div>
         )
}

export default VideoCard;