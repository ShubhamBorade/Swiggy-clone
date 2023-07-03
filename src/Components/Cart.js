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
       <div className="mt-20">
        <h1 className="font-bold ml-2">Cart Items - {cartItems.length}</h1>
        <button className="bg-blue-300 rounded-md px-5 py-1" onClick={()=>HandleClearCart()}>ClearCart</button>
        <div className="flex flex-wrap">
            {cartItems.map((item)=><FoodItem key={item.card.info.id} cartItems={item}/>)}
        </div>
       </div>
    )
}

export default Cart;