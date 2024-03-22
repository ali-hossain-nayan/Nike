import React from 'react'
import { offer } from '../assets/images'
import Button from './Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-center items-center max-xl:flex-col-reverse gap-32 max-container '>
      <div className='flex-1'>
        <img src={offer} alt="offer" width={773} height={687} className='w-full' />
      </div>
      <div className='flex flex-1 flex-col'>
        <h1 className='mt-10 text-4xl max-sm:text[72px] font-bold '><span className=' xl:whitespace-nowra '>Special Offer!</span>
          <br />
          <span className='text-violet-500 
           inline-block mt-2 '>For Limited Time</span><br />
        </h1>
        <p className='p-3 text-lg mt-4 mb-4 sm:max-w-sm '>
          Ensuring Premium comfort and style our crafted footwear is designed to elevate your experience, providing you the
          unmatched quality...</p>
        <div>
          <Button label="Shop now" iconUrl={arrowRight} />
        </div>

      </div>
    </section>
  )
}

export default SpecialOffer