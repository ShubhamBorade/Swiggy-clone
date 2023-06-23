import { useState,useEffect } from "react";
import { MENU_URL } from "../Utils/Constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null)

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

    return resInfo;
}

export default useRestaurantMenu;