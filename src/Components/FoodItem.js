import { CDN_URL } from '../Utils/Constants';
import { useDispatch } from 'react-redux';
import { addItem } from '../Utils/cartSlice';
import { useState } from 'react';

const FoodItem = ({cartItems}) => {

    const [count, setCount] = useState(1);

        // console.log(items)
    // console.log(cartItems[0].card.info.price)
    //  const {name,description,imageId} = item.card.info;
    const dispatch = useDispatch();

    const {name,price,imageId} =cartItems.card.info;
    
    const HandleAddItems = () =>{
        dispatch(addItem(cartItems));
         setCount(count + 1);
    }

    console.log(cartItems)

    return (
        <div>
           
            <div className='flex justify-between my-6 ml-1 hover:cursor-pointer transition rounded-lg'>
                 <div className='flex w-96'>
                    <img className='w-16 rounded-lg  h-16' src={CDN_URL+imageId} alt="resto-img" />
                    <h3 className='ml-3 text-lg font-semibold'>{name}</h3>
                 </div>   
                    <span className='w-20 h-7 flex justify-between border-[1px] border-gray-400 pb-3'>
                        <span  className='ml-1 font-bold '>-</span>
                        <span className=''>{count}</span>
                        <span onClick={()=>HandleAddItems()} className='mr-1  font-bold '>+</span>
                    </span>

                    <span className='ml-20'>₹{price/100}</span>
               
                {/* <h4 className='ml-1 flex-wrap text-gray-500'>{description}</h4> */}
            </div>
            <hr/>

        </div>
    ) 
}

export default FoodItem
