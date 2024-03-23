import React from 'react'
import { reviews } from '../constants'
import CardReview from './CardReview'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h2 className='text-center font-bold text-4xl'>What Our <span className='text-violet-500'>Customers <br /></span>Say?
      </h2>
      <p className='text-center text-xl p-2'>Here is the overall reviews of our
        satisfied customers for our exceptional service...</p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-12'>
        {reviews.map((item, index) => (
          <CardReview
            key={index}
            imgURL={item.imgURL}
            customerName={item.customerName}
            rating={item.rating}
            feedback={item.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews