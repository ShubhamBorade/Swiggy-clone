import { CDN_URL } from '../Utils/Constants';


const FoodItem = ({cartItems}) => {

    const items = Object.entries(cartItems);

        console.log(items)
    // console.log(cartItems[0].card.info.price)
    //  const {name,description,imageId} = item.card.info;

    const {name,price,imageId} =cartItems.card.info;
    
    // const total = items.reduce((acc,curr)=>{
    //     acc = acc + curr.card.info.price;
    //     return acc;
    // },0)

    return (
        <div>
           
            <div className='flex justify-between my-6 ml-1 hover:cursor-pointer transition rounded-lg'>
                 <div className='flex w-96'>
                    <img className='w-16 rounded-lg  h-16' src={CDN_URL+imageId} alt="resto-img" />
                    <h3 className='ml-3 text-lg font-semibold'>{name}</h3>
                 </div>   
                    <span className='w-20 h-7 flex justify-between border-[1px] border-gray-400 pb-3'>
                        <span  className='ml-1 font-bold '>-</span>
                        <span className=''>0</span>
                        <span className='mr-1  font-bold '>+</span>
                    </span>

                    <span className='ml-20'>₹{price/100}</span>
               
                {/* <h4 className='ml-1 flex-wrap text-gray-500'>{description}</h4> */}
            </div>
            <hr/>

        </div>
    ) 
}

export default FoodItem
