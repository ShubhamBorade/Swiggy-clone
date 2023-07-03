import { CDN_URL } from '../Utils/Constants';


const FoodItem = ({cartItems}) => {

    // console.log(cartItems[0].card.info.name)
    //  const {name,description,imageId} = item.card.info;

    const {name,description,imageId} =cartItems.card.info;
    return (
        <div>
            <div className=' my-6  w-60  ml-1 hover:cursor-pointer mx-16 bg-gray-100  transition hover:shadow-[0px_0px_8px_2px_rgba(0,0,0,0.3)] rounded-lg'>
                <img className='w-full rounded-lg  h-44' src={CDN_URL+imageId} alt="resto-img" />
                <h3 className='ml-1 text-lg font-semibold'>{name}</h3>
                <h4 className='ml-1 flex-wrap text-gray-500'>{description}</h4>
                {/* <h4 className='ml-1'>{avgRating}⭐</h4>
                <div className='flex '>
                    <h4 className='ml-1'>₹{costForTwo / 100}</h4>
                    <div className='ml-9'> - </div>
                    <h4 className='ml-10'>{deliveryTime} Min</h4> 
                  </div> */}
            </div>
        </div>
    )
}

export default FoodItem
