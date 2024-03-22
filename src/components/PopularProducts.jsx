import React from 'react'
import { products } from '../constants'
import ProductCard from './ProductCard'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-bold'>Our
          <span className='text-violet-500 p-2 inline-block mt-5'>Popular</span>Products
        </h2>
        <p className='text-xl mt-2 lg:max-w-lg'> Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value</p>
      </div>
      <div className='mt-20 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
        {products.map((item) => (
          <ProductCard key={item.name}{...item} />
        ))}
      </div>

    </section>
  )
}

export default PopularProducts