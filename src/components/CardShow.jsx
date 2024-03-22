import React from 'react'

const CardShow = ({ imgUrl, changeShoeImg, bigShoeImg }) => {
    const handleClick = () => {
        if (bigShoeImg !== imgUrl.bigShoe) {
            changeShoeImg(imgUrl.bigShoe)
        }
    }
    return (
        <div className=" rounded-xl 
     cursor-pointer max-sm:flex-1" onClick={handleClick}>
            <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
                <img src={imgUrl.thumbnail} alt="collection" width={127} height={104} className='object-contain' />
            </div>

        </div>
    )
}

export default CardShow