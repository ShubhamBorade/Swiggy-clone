import React,{useState,useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'

const Body = () => {

  const [listofrestro, SetListOfRestro] = useState([]);

  useEffect(()=>{
    fetchData();
  })

  const fetchData = async () =>{
    const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.6774769&lng=73.8512324&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json);
    SetListOfRestro(json?.data?.cards[2]?.data?.data?.cards);
  }

  if(listofrestro.length === 0){
    return <Shimmer/>
  }

    return (
            <div>
            <div className='mt-28'>
            {/* {  filter logic with rating greater than 4} */}
            <div className='btn bg-gray-100 w-full'>
            <button className='-mt-3 ml-3 fixed border-1 p-1 rounded-full px-4 bg-gray-200 border-gray-300 hover:bg-gray-400'  onClick={()=>{
              const  filterRestro = listofrestro.filter((res)=> res.data.avgRating > 4 )
                SetListOfRestro(filterRestro)
            }}>Top Rated Restaurant</button>
            </div>

           </div>
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
