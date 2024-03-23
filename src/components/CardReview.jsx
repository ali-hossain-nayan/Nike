import React from 'react'
import { star } from '../assets/icons'

const CardReview = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <img src={imgURL} alt="img" className='rounded-full w-[120px] h-[120px] object-cover' />
            <p className='mt-8 max-w-sm text-center '>{feedback}</p>
            <div className='mt-3 flex justify-center items-center gap-2'>
                <img src={star} alt="star" width={24} height={24} />
                <p className='text-xl'>{rating}</p>
            </div>
            <h2 className='text-center font-bold text-3xl'>{customerName}</h2>
        </div>
    )
}

export default CardReview