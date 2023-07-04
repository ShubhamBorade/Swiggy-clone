import logo from "../Utils/swiggy.svg"
import { useState } from "react";
import { Link } from "react-router-dom"
import useOnlineStatus from '../Utils/useOnlineStatus'
import { useSelector } from "react-redux";

const Header = () =>{

  const [btn, setBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();
  
  const cartItems = useSelector(store => store.cart.items)


    return (
     <div className="flex justify-between bg-blue-50 shadow-lg fixed top-0 w-full">
      <div className="left">
       <img className="w-32 h-14 my-1" src={logo} alt="logo" />
      </div>
      <div className="right">
        <ul className="flex justify-between mt-3 mr-[120px]">
            {/* <li className="py-1">OnlineStatus : {onlineStatus ? "🟢" : "🔴"}</li> */}
            <li className="px-8 py-1 cursor-pointer font-semibold hover:text-blue-400"> <Link to="/">Home</Link></li>
            <li className="px-8 py-1 cursor-pointer font-semibold hover:text-blue-400"> <Link to="/about">About</Link></li>
            <li className="px-8 py-1 cursor-pointer font-semibold hover:text-blue-400"> <Link to="/contact">Contact Us</Link></li>
            <li className="px-8 py-1 cursor-pointer font-semibold hover:text-blue-400">  <Link to="/cart">Cart</Link> <span className="bg-yellow-400 rounded-full px-2 text-white">{cartItems.length}</span> </li>
            <button className="px-3 py-1 mx-2 bg-gray-300 rounded" onClick={()=> btn==="Login" ? setBtn("Logout"):setBtn("Login")}>{btn}</button>
        </ul>

      </div>
     </div>
    )
}

export default Header;