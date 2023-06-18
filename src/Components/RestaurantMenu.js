import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../Utils/Constants";

const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null)

    const {resId} = useParams();


    useEffect(()=>{
      fetchMenu();
    },[])

    const fetchMenu = async () =>{
        const data = await fetch(MENU_URL+resId+"&submitAction=ENTER");
        const json = await data.json();
        // console.log(json.data.cards[0].card.card.info.name);
        console.log(json)
        setResInfo(json.data);
    }
   
    //keep this line here only dont user ternary operator else it will throuw error
    if(resInfo === null) return <Shimmer/>

    const {name,cuisines} =resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card //to fetch menu
      
    console.log(itemCards);
    return (
        <div className="mt-20">
             <h1 className="font-bold">{name}</h1> 
             <h3 className="ml-5">{cuisines.join(",")}</h3>
             <h1 className="font-bold">Menu</h1>
            <ul className="ml-5">
                {itemCards.map((item)=> <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {"Rs."}{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice /100}</li>)}
            </ul>
        </div>
    )
}

export default RestaurantMenu;