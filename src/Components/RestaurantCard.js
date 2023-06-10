import React from 'react'

const RestaurantCard = ({imgUrl}) => {
    return (
        <div className='mt-8 '>
            <div className='border-2 border-gray-100  w-52 shadow-lg ml-1 p-1 hover:cursor-pointer hover:shadow-xl mx-2 bg-gray-100'>
                <img className='w-48 mx-auto mt-1 h-44' src={imgUrl} alt="resto-img" />
                <h3 className='ml-1'>Meghana foods</h3>
                <h4 className='ml-1'>Biryani, north indian</h4>
                <h4 className='ml-1'>4.4 stars</h4>
                <h4 className='ml-1'>36 minutes</h4>
            </div>
        </div>
    )
}

export default RestaurantCard
