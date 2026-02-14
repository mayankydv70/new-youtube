import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/contants';
import VideoCard  from './VideoCard';
import { Link } from 'react-router-dom';
import { AdVideoCard } from './VideoCard';

const VideoContainer = () => {

  useEffect(() => {
    getVideo()
  }, []);

  const [video, setVideo] = useState([])

  const getVideo = async () => {
   const data = await fetch(YOUTUBE_VIDEO_API)
   const json = await data.json();
   
   setVideo(json.items)
  };

  
  return (
    <div className='h-full overflow-y-auto '>
    <div className="flex flex-wrap">
       {video[0] && <AdVideoCard info={video[0]} />}
      {video.map((video) => (
       <Link key={video.id} to={"/watch?v=" + video.id}>
        <VideoCard  info={video} />
        </Link>
       ) ) }
        
    </div>

    </div>
  )
}

export default VideoContainer;