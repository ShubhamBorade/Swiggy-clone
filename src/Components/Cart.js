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

    // console.log(cartItems[0].card.info.price)

    
     const total = cartItems.reduce((acc,curr)=>{
         acc = acc + curr.card.info.price;
         return acc;
     },0)
    // console.log(total/100)
     

    return(
       <div className="mt-20 mx-72">
            <div className="flex justify-between">
                <h1 className="font-semibold text-xl ml-2">CART {cartItems.length} ITEMS</h1>
                <button className="bg-blue-400 font-semibold text-white hover:bg-blue-500 rounded-sm px-5 py-1 mb-5" onClick={()=>HandleClearCart()}>ClearCart</button>
            </div>
            <hr/>
            <div className="flex-col flex-wrap">
                {cartItems.map((item)=><FoodItem key={item.card.info.id} cartItems={item} />)}
            </div>

            <div className="flex font-semibold justify-between">
                <h1>Net Pay</h1>
                <h1>₹{total/100}</h1>
            </div>
       </div>
    )
}

export default Cart;