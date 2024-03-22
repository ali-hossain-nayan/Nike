import React from 'react'
import Button from './Button'
import { shoe7 } from '../assets/images'

const SuperQuality = () => {
  return (
    <section id='about-us' className='flex justify-between items-center max-lg:flex-col gap-12 w-full max-container'>
      <div className='flex flex-1 flex-col'>
        <h1 className='mt-10 text-4xl max-sm:text[72px] font-bold '><span className=' xl:whitespace-nowra '>We Provide You</span>
          <br />
          <span className='text-violet-500 
           inline-block mt-2 '>Super Quality</span><br />
          Shoes
        </h1>
        <p className='p-3 text-lg mt-4 mb-4 sm:max-w-sm '>
          Ensuring Premium comfort and style our crafted footwear is designed to elevate your experience, providing you the
          unmatched quality...</p>
        <div>

          <Button label="View details" />
        </div>

      </div>
      <div className='flex flex-1 justify-center items-center'>
        <img src={shoe7} alt="shoe7" width={570} height={520} className='object-contain' />
      </div>

    </section>
  )
}

export default SuperQuality