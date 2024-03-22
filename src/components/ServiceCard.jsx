import React from 'react'

const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
        <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[70px] shadow-2xl px-10 py-16'>
            <div className='flex w-11 h-11 justify-center items-center bg-violet-500 rounded-full'>
                <img src={imgURL} alt={label} width={24} height={24} />
            </div>
            <h2 className='mt-5 text-3xl font-bold '>{label}</h2>
            <p className='mt-3 text-lg p-2'>{subtext}</p>

        </div>
    )
}

export default ServiceCard