import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='m-2 px-5 py-2 bg-gray-200 cursor-pointer rounded-lg font-medium text-lg'>{name}</button>
    </div>
  )
}

export default Button