import { CDN_URL } from '../Utils/Constants';


const FoodItem = ({cartItems}) => {

    // console.log(cartItems[0].card.info.name)
    //  const {name,description,imageId} = item.card.info;

    const {name,description,imageId} =cartItems.card.info;

    return (
        <div>
           
            <div className='flex my-6 ml-1 hover:cursor-pointer transition rounded-lg'>
                 <div className='flex w-96'>
                    <img className='w-16 rounded-lg  h-16' src={CDN_URL+imageId} alt="resto-img" />
                    <h3 className='ml-3 text-lg font-semibold'>{name}</h3>
                 </div>   
                    <span className='bg-white w-20 h-7 flex justify-between'>
                        <span className='ml-1 font-bold text-xl'>-</span>
                        <span className='font-bold mt-1'>2</span>
                        <span className='mr-1  font-bold text-xl'>+</span>
                    </span>

                    <span className='ml-20'>$100</span>
               
                {/* <h4 className='ml-1 flex-wrap text-gray-500'>{description}</h4> */}
            </div>
            <hr/>
        </div>
    )
}

export default FoodItem
