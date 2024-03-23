import React from 'react'
import Button from './Button'

const Subscribe = () => {
  return (
    <section className='max-container' id='contact-us'>
      <div className='flex flex-1 justify-center items-center mt-12 '>
        <h2 className='text-4xl justify-center items-center'>Signup for <span className='text-violet-500'>Updates </span>& Newsletter</h2>
      </div>
      {/* lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full */}
      <div className=' flex max-sm:justify-end items-center max-sm:w-full border rounded-full mt-8 p-2'>
        <input type='text' placeholder='subscribe@nike.com' className='input' />
        <Button label='Signup' />
      </div>
    </section>
  )
}

export default Subscribe