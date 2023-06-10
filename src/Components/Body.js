import React from 'react'
import RestaurantCard from './RestaurantCard'

const Body = () => {
    return (
        <div>
           <div className='search'></div>
           <div className='restaurant-container flex flex-wrap mx-3'>
            <RestaurantCard imgUrl="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4"/>
            <RestaurantCard imgUrl="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4"/>
           </div>
        </div>
    )
}

export default Body
