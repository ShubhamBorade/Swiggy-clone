import React from 'react'
import { CDN_URL } from '../Utils/Constants';

const RestaurantCard = ({resList}) => {

    const {name,cuisines,cloudinaryImageId,costForTwo,deliveryTime,avgRating} =resList.data;
    return (
        <div className='mt-8 '>
            <div className='border-2 border-gray-100  w-56 shadow-lg ml-1 p-1 hover:cursor-pointer hover:shadow-xl mx-4 bg-gray-100'>
                <img className='w-48 mx-auto mt-1 h-44' src={CDN_URL+cloudinaryImageId} alt="resto-img" />
                <h3 className='ml-1'>{name}</h3>
                <h4 className='ml-1 flex-wrap'>{cuisines[0]}</h4>
                <h4 className='ml-1'>{avgRating}</h4>
                <h4 className='ml-1'>{costForTwo / 100}RS</h4>
                <h4 className='ml-1'>{deliveryTime} minutes</h4>
            </div>
        </div>
    )
}

export default RestaurantCard
