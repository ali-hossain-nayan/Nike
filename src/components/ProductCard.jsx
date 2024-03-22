import React from 'react'
import { star } from '../assets/icons'

const ProductCard = ({ imgURL, name, price }) => {
    return (
        <div className='flex flex-1 flex-col w-full max-sm:w-full'>
            <img src={imgURL} alt={name} className='w-[280px] h-[280px]' />
            <div className='mt-8 flex justify-start gap-2'>
                <img src={star} alt="rating" width={25} height={25} />

                <h1 className='text-xl'>4.8</h1>
            </div>
            <p className='mt-2 text-2xl font-semibold p-2'>{name}</p>
            <p className='text-violet-600 text-2xl mt-2'>{price}</p>
        </div>
    )
}

export default ProductCard