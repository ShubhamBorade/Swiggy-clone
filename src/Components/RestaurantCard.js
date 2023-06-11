import React from 'react'
import { CDN_URL } from '../Utils/Constants';

const RestaurantCard = ({resList}) => {

    const {name,cuisines,cloudinaryImageId,costForTwo,deliveryTime,avgRating} =resList.data;
    return (
        <div className='mt-8'>
            <div className='border-2 border-gray-100  w-60  ml-1 p-1 hover:cursor-pointer hover:shadow-xl mx-16 bg-gray-100 hover:scale-105 transition'>
                <img className='w-full mx-auto  h-44' src={CDN_URL+cloudinaryImageId} alt="resto-img" />
                <h3 className='ml-1 text-lg font-semibold'>{name}</h3>
                <h4 className='ml-1 flex-wrap opacity-70'>{cuisines[0]}</h4>
                <h4 className='ml-1'>{avgRating}⭐</h4>
                <div className='flex '>
                    <h4 className='ml-1'>₹{costForTwo / 100}</h4>
                    <div className='ml-9'> - </div>
                    <h4 className='ml-10'>{deliveryTime} Min</h4>
                </div>
            </div>
        </div>
    )
}

export default RestaurantCard
