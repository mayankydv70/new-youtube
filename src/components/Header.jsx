import React, { useState, useEffect } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import { HAMBERGER_ICON, USER_ICON, YOUTUBE_LOGO, YOUTUBE_SEARCH_API } from '../utils/contants'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';


function Header() {

  const [searchQuery, setSearchQuery] = useState("")
  const [suggestion, setSuggestion] = useState([])
  const [showSuggestion, setShowSuggestion] = useState(false)

  const searchCache = useSelector((store) => store.search)
  
  const dispatch = useDispatch()

  const toggleMenuHandler = () =>  {
     dispatch(toggleMenu())
  }

  useEffect(() => {
  window.addEventListener("scroll", () => {
    setShowSuggestion(false)
  })
}, [])

useEffect(() => {

  const Timer =  setTimeout(() =>  {
    if(searchCache[searchQuery]){
      setSuggestion[searchCache[searchQuery]]
    } else {
      getSearchSuggetion()
    }
  
  }, 200)

    return () => {
      clearTimeout(Timer)
    }
},[searchQuery])


const getSearchSuggetion = async () => {
   const data = await fetch(`/yt/complete/search?client=firefox&ds=yt&q=${searchQuery}`)
   const json = await data.json()
   setSuggestion(json[1])
   dispatch(cacheResults({
    [searchQuery]: json[1],
   }))
}

  return (
    <div className='flex justify-between items-center m-2 py-2 shadow-lg'>
      <div  className='flex items-center'>
        <img className='h-16  p-4 cursor-pointer rounded-full  hover:bg-gray-200 flex justify-center items-center'
        onClick={() => toggleMenuHandler()}
         src={HAMBERGER_ICON} alt="" />
        <img className='h-20' src={YOUTUBE_LOGO} alt="" />
      </div>
      <div className='flex items-center'>
     <div>
      <div className='flex'>
        <input
        value={searchQuery}
        onFocus={() => setShowSuggestion(true)}
        onBlur={() => setShowSuggestion(false)}
        onChange={(e) => setSearchQuery(e.target.value)}
        className='ml-40 w-160 h-12 border rounded-l-full px-8 py-4 text-xl font-medium'
        type="text" />
        <button className='w-20 border text-4xl flex items-center justify-center bg-gray-200  mr-80 rounded-r-full h-12'>
          <CiSearch />
        </button>
        </div>
          
          {showSuggestion && (
             <div className='ml-40 w-150 bg-white rounded-2xl p-5 shadow-lg fixed  '>
            <ul> 
            {suggestion.map((s,i) =>  (
              <li key={i}  className='flex items-center gap-3 text-xl font-medium py-4 px-2  hover:bg-gray-100 '><CiSearch />{s}</li>
            ))}
            </ul>
           </div>
          )}
     </div>
        </div>
        <div>

      </div>
     
      <div className='flex items-center'>
       <span className='flex justify-center items-center gap-2 text-xl font-medium cursor-pointer bg-gray-200  px-5 h-12 rounded-full'>
           <FaPlus />
             Create
             </span>
        <span className='mx-5 text-5xl cursor-pointer'><IoMdNotificationsOutline /></span>
        <img 
         className='h-20 mr-10 cursor-pointer'
        src={USER_ICON} alt="" />
      </div>
    </div>
  )
}

export default Header;