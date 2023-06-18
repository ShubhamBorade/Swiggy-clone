import React,{useState,useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import {Link} from "react-router-dom"

const Body = () => {

  const [filteredRestro, setFilteredRestro] = useState(null); //original list of restro that we want to be unchange

  const [copyofRestro,setCopyOfRestro] = useState([]); //copy of original list of restro in which we will apply filters

  const [searchText,setSearchText] = useState("");

  useEffect(()=>{
    fetchData();
  },[])

  const fetchData = async () =>{
    const data = await  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);

    setFilteredRestro(json?.data?.cards[2]?.data?.data?.cards); //original list of restro

    setCopyOfRestro(json?.data?.cards[2]?.data?.data?.cards); //copy of original list of restro in which we will filtered so that original list of restro remains unaltered because when we search second time it will search from original list of restro(all 15 restro)
  }

  if(filteredRestro === null){
    return <Shimmer/>
  }

    return (
            <div>
            <div className='mt-28'>

            <div className='btn bg-gray-100  flex justify-around h-10'>

              {/* input search functionality / filtering the restor with name*/}
              <div className='mt-2'>
                <input className='outline-none ml-2 border-2 border-gray-300' type="text" 
                value={searchText}
                onChange={(e)=> setSearchText(e.target.value)}/>
                <button className='w-20 bg-gray-300 ml-2' 
                onClick={()=>{
                  const filteredRestroByName = copyofRestro.filter((res)=> res.data.name.toLowerCase().includes(searchText.toLowerCase()))
                  setFilteredRestro(filteredRestroByName);
                }}>Search</button>
              </div>

              
            {/* {  filter logic with rating greater than 4} */}
            <button className='w-48 ml-10  border-1 p-1 rounded-full px-4 bg-gray-200 border-gray-300 hover:bg-gray-400'  onClick={()=>{
              const  filterRestroByRating = copyofRestro.filter((res)=> res.data.avgRating > 4 )
              setFilteredRestro(filterRestroByRating)
            }}>Top Rated Restaurant</button>
            </div>

           </div>
           {/* mapping over filtered restro */}
           <div className='restaurant-container flex flex-wrap mx-3'>
             { 
               filteredRestro.map((restaurant)=>(
             <Link key={restaurant.data.id}  to={"/restaurant/" + restaurant.data.id}> <RestaurantCard  resList={restaurant}/></Link>
              ))} 
           </div>
           </div>
      
    )
}

export default Body
