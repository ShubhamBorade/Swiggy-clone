
const Header = () =>{
    return (
     <div className="flex justify-between bg-blue-100 shadow-lg">
      <div className="left">
       <img className="w-36 h-16 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxrzZDUk2YEJriFfZ-PKmPhZLZjtdxgSjpOA&usqp=CAU" alt="" />
      </div>
      <div className="right">
        <ul className="flex mt-5 mr-[100px]">
            <li className="px-8 cursor-pointer hover:font-bold">Home</li>
            <li className="px-8 cursor-pointer hover:font-bold">About</li>
            <li className="px-8 cursor-pointer hover:font-bold">Contact Us</li>
            <li className="px-8 cursor-pointer hover:font-bold">Cart</li>
        </ul>

      </div>
     </div>
    )
}

export default Header;