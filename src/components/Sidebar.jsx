import React from 'react'
import { MdHome } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { FaHistory } from "react-icons/fa";
import { MdPlaylistPlay } from "react-icons/md";
import { MdOutlineVideoSettings } from "react-icons/md";
import { FaHatCowboy } from "react-icons/fa";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlineFileDownload } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Sidebar = () => {

  const isMenuOpan = useSelector((store) => store.app.isMenuOpen)

  if(!isMenuOpan) return null;
  return (
    <div className='w-[22] shadow-lg p-5  h-full scroll-auto  '>
         <div className=' items-center   pl-5  border-b border-gray-300'>
            <ul>
              <Link to="/"> <li
               className='flex gap-7 mb-4 items-center hover:bg-gray-200 cursor-pointer'>
               <span className='text-4xl'><MdHome /></span> <h1 className='text-xl font-medium'>Home 
                </h1></li></Link>
               <li className='flex gap-7 mb-4 items-center hover:bg-gray-200 cursor-pointer'> <span className='text-4xl'><SiYoutubeshorts /></span> <h1 className='text-xl font-medium'>Short</h1></li>               
               <li className='flex gap-7 mb-4 items-center hover:bg-gray-200 cursor-pointer'> <span className='text-4xl'><MdSubscriptions /></span> <h1 className='text-xl font-medium'>Subsciption</h1></li>               
            </ul>
            
          </div>
           <div className=' items-center   pl-5  border-b border-gray-300'>
           <h1 className='text-4xl font-semibold flex gap-4 my-7 items-center hover:bg-gray-200'>you <IoIosArrowForward /></h1>
            <ul>
               <li className='flex gap-7 mb-4 items-center cursor-pointer hover:bg-gray-200'> <span className='text-4xl'><FaHistory /></span> <h1 className='text-xl font-medium'>History</h1></li>
               <li className='flex gap-7 mb-4 items-center cursor-pointer hover:bg-gray-200'> <span className='text-4xl'><MdPlaylistPlay /></span> <h1 className='text-xl font-medium'>Playlist</h1></li>               
               <li className='flex gap-7 mb-4 items-center cursor-pointer hover:bg-gray-200'> <span className='text-4xl'><MdOutlineVideoSettings /></span> <h1 className='text-xl font-medium'>Your videos</h1></li>               
               <li className='flex gap-7 mb-4 items-center cursor-pointer hover:bg-gray-200'> <span className='text-4xl'><FaHatCowboy /></span> <h1 className='text-xl font-medium'>Your course</h1></li>               
               <li className='flex gap-7 mb-4 items-center cursor-pointer hover:bg-gray-200'> <span className='text-4xl'><MdOutlineWatchLater /></span> <h1 className='text-xl font-medium'>Watch later</h1></li>               
               <li className='flex gap-7 mb-4 items-center cursor-pointer hover:bg-gray-200'> <span className='text-4xl'><AiOutlineLike /></span> <h1 className='text-xl font-medium'>Like videos</h1></li>               
               <li className='flex gap-7 mb-4 items-center cursor-pointer hover:bg-gray-200'> <span className='text-4xl'><MdOutlineFileDownload /></span> <h1 className='text-xl font-medium'>Dounload</h1></li>               
            </ul>
            
          </div>
           <div className=' items-center   pl-5  border-b border-gray-300'>
           <h1 className='text-2xl font-semibold flex gap-4 my-7 items-center hover:bg-gray-200'>Subscription<IoIosArrowForward /></h1>
            <ul>
               <li className='flex gap-7 mb-4 items-center cursor-pointer hover:bg-gray-200'> <span className='text-2xl'><FaRegUserCircle /></span> <h1 className='text-xl font-medium'>T - series</h1></li>
               <li className='flex gap-7 mb-4 items-center cursor-pointer hover:bg-gray-200'> <span className='text-2xl'><FaRegUserCircle /></span> <h1 className='text-xl font-medium'>Akshay shaini</h1></li>               
               <li className='flex gap-7 mb-4 items-center cursor-pointer hover:bg-gray-200'> <span className='text-2xl'><FaRegUserCircle /></span> <h1 className='text-xl font-medium'>R2H</h1></li>               
               <li className='flex gap-7 mb-4 items-center cursor-pointer hover:bg-gray-200'> <span className='text-2xl'><FaRegUserCircle /></span> <h1 className='text-xl font-medium'>chai with code</h1></li>               
               <li className='flex gap-7 mb-4 items-center cursor-pointer hover:bg-gray-200'> <span className='text-2xl'><FaRegUserCircle /></span> <h1 className='text-xl font-medium'>swagger </h1></li>               
               <li className='flex gap-7 mb-4 items-center cursor-pointer hover:bg-gray-200'> <span className='text-2xl'><FaRegUserCircle /></span> <h1 className='text-xl font-medium'>stoper</h1></li>               
               <li className='flex gap-7 mb-4 items-center cursor-pointer hover:bg-gray-200'> <span className='text-2xl'><FaRegUserCircle /></span> <h1 className='text-xl font-medium'>personal</h1></li>               
            </ul>
            
          </div>
      </div>
  )
}

export default Sidebar