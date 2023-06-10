import React from 'react'
import RestaurantCard from './RestaurantCard'
import { RestaurantList } from '../Utils/Constants'

const Body = () => {
    return (
        <div>
{/* {  filter login with rating greater than 4} */}
            <button className='m-3' onClick={()=>{
                RestaurantList = RestaurantList.filter((res)=>res.data.avgRating < 4 )
                console.log(RestaurantList);
             } }>Top Rated Restaurant</button>
           <div className='restaurant-container flex flex-wrap mx-3'>
             { 
               RestaurantList.map((restaurant)=>(
              <RestaurantCard key={restaurant.data.id}  resList={restaurant}/>
              ))} 
           </div>
        </div>
    )
}

export default Body
