import React, { useState } from 'react'
import Button from './Button'
import { arrowRight } from '../assets/icons'
import { shoes, statistics } from '../constants'
import { bigShoe1 } from '../assets/images'
import CardShow from './CardShow'

const Hero = () => {
  const [Img, setImg] = useState(bigShoe1)
  return (
    <section id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
        <p className='text-xl text-violet-400'>Our Winter Collection</p>
        <h1 className='mt-10 text-8xl max-sm:text[72px] font-bold '><span className=' xl:whitespace-nowra '>The New Arrival</span>
          <br />
          <span className='text-violet-500 p-2 inline-block mt-5 '>Nike</span>
          Shoes
        </h1>
        <p className='p-4 text-lg mt-6 mb-6 sm:max-w-sm'>Discover stylish Nike arrivals,quality comfort and innovation for your active life</p>
        <Button label="Shop now" iconUrl={arrowRight} />
        <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
          {statistics.map((item) => (
            <div key={item.value}>
              <p className='text-4xl font-bold'>{item.value}</p>
              <p className='text-lg'>{item.label}</p>
            </div>
          ))}</div>
      </div>
      <div className='flex flex-1 relative justify-center items-center
         max-xl:py-36 xl:min-h-screen bg-primary   bg-center '>
        <img src={Img} alt="big-show-collection " width={600} height={500}
          className='object-contain relative z-10'
        />
        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6 '>
          {shoes.map((shoe) => (
            <div key={shoe}>
              <CardShow imgUrl={shoe} changeShoeImg={(shoe) => setImg(shoe)} bigShoeImg={Img} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero