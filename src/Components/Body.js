import React,{useState} from 'react'
import RestaurantCard from './RestaurantCard'
import { RestaurantList } from '../Utils/Constants'

const Body = () => {

  const [listofrestro, SetListOfRestro] = useState(RestaurantList)

    return (
        <div>
            {/* {  filter logic with rating greater than 4} */}
            <button className='m-3 mt-4 border-1 p-1 rounded-full px-4 bg-gray-200 border-gray-300 hover:bg-gray-400'  onClick={()=>{
              const  filterRestro = listofrestro.filter((res)=> res.data.avgRating > 4 )
                SetListOfRestro(filterRestro)
            }}>Top Rated Restaurant</button>
           <div className='restaurant-container flex flex-wrap mx-3'>
             { 
               listofrestro.map((restaurant)=>(
              <RestaurantCard key={restaurant.data.id}  resList={restaurant}/>
              ))} 
           </div>
        </div>
    )
}

export default Body
