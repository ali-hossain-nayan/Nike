import React from 'react'

const Button = ({ label, iconUrl }) => {
  return (
    <button className=' flex justify-center items-center gap-2 px-8 py-5 
    font-montserrat text-lg text-white bg-violet-600  rounded-full hover:bg-blue-600'>
      {label}
      {iconUrl && <img src={iconUrl} alt="right arrow-icon"
        className='ml-2 rounded-full w-6 h-6'
      />}
    </button>
  )
}

export default Button