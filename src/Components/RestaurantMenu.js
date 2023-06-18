import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../Utils/Constants";
import { MENU_LIST_URL } from "../Utils/Constants";

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
        // console.log(json)
        setResInfo(json.data);
    }
   
    //keep this line here only dont user ternary operator else it will throuw error
    if(resInfo === null) return <Shimmer/>

    const {name,cuisines,avgRating} =resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card //to fetch menu
      
    // console.log(itemCards);
    return (
        <div className="mt-24 mx-auto w-9/12">
            <div>
                <div className="flex justify-between">
                 <div>
                    <h1 className="font-semibold text-2xl">{name}</h1> 
                    <h3 className=" mt-2">{cuisines.join(",")}</h3>
                    </div>
                    <h1 className="bg-gray-100 px-2 py-1 mt-6 border-1 border-gray-300 rounded">⭐{avgRating}</h1>
                </div>
             </div>
             <hr className="my-2"/>
             <h1 className="font-bold">Menu</h1>
            <ul className="ml-5 my-4">
                {itemCards.map((item)=>
                <div key={item?.card?.info?.id}>
                    <div className="flex justify-between">
                        <li className="my-3 font-semibold" >{item?.card?.info?.name} <br/>  {"Rs."}{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice /100} </li>
                        <div className="flex-col justify-center">
                            <img className="w-36 shadow-xl cursor-pointer" src={MENU_LIST_URL+item?.card?.info?.imageId}/>
                            <button className="text-green-600 font-semibold ml-11 bg-gray-200 px-3 mt-3 hover:shadow-md" alt="image">ADD</button>
                        </div>
                    </div>
                    <hr className="my-10"/>
                 </div>
                 )}
            </ul>
        </div>
    )
}

export default RestaurantMenu;