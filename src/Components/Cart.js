import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../Utils/cartSlice";

const Cart = () =>{

    const cartItems = useSelector(store=>store.cart.items);

    // console.log(cartItems[0].card.info);
    const dispatch = useDispatch();

    const HandleClearCart = () =>{
       dispatch(clearCart());
    }

    return(
       <div className="mt-20 mx-48 border-2 border-gray-200 bg-[#E9ECEE]">
        <div className="flex justify-around">
            <h1 className="font-bold ml-2">CART {cartItems.length} ITEMS</h1>
            <button className="bg-blue-300 rounded-md px-5 py-1" onClick={()=>HandleClearCart()}>ClearCart</button>
        </div>
        <div className="flex-col flex-wrap">
            {cartItems.map((item)=><FoodItem key={item.card.info.id} cartItems={item}/>)}
        </div>
       </div>
    )
}

export default Cart;