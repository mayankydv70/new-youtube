import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list = [ "Songs","All",  "Gaming", "Music", "Sport", "Cricket", "Kabaddi", "Java Script",  "Shradhha kapoor" , "Movies", "Gym", "Coding", "mi"]
  return (
    <div className='flex  '>
       {list.map((elem, index) => (
        <Button name={elem} key={index} />
       ) )}
    </div>
  )
}

export default ButtonList