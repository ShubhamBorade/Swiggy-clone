import logo from "../Utils/swiggy.svg"

const Header = () =>{
    return (
     <div className="flex justify-between bg-blue-50 shadow-lg">
      <div className="left">
       <img className="w-32 h-14 my-1" src={logo} alt="logo" />
      </div>
      <div className="right">
        <ul className="flex justify-between mt-3 mr-[120px]">
            <li className="px-8 py-1 cursor-pointer hover:font-bold">Home</li>
            <li className="px-8 py-1 cursor-pointer hover:font-bold">About</li>
            <li className="px-8 py-1 cursor-pointer hover:font-bold">Contact Us</li>
            <li className="px-8 py-1 cursor-pointer hover:font-bold">Cart</li>
        </ul>

      </div>
     </div>
    )
}

export default Header;