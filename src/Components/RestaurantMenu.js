import {useState, useEffect } from "react";
// import Shimmer from "./Shimmer";

const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState()

    useEffect(()=>{
      fetchMenu();
    },[])

    const fetchMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER");
        const json = await data.json();
        // console.log(json.data.cards[0].card.card.info.name);
        setResInfo(json.data.cards[0].card.card.info);
    }

    //  const {name} = resInfo?.cards[0]?.card?.card?.info;


    return (
        <div className="mt-20">
            <h1>{resInfo.name}</h1>
            <h2>{resInfo.cuisines.join(",")}</h2>
            <ul>
                <li>{resInfo.avgRating}</li>
                <li> {resInfo.costForTwo/100}</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;