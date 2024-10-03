import BakarLogo from "../Images/bakarlogo.png"
import { useState } from "react"
function Header (){
    const [IsOpen, setIsOpen] = useState(false)
    const HandleOpen = ()=> {
        setIsOpen(true)
    }
    const HandleClose = ()=> {
        setIsOpen(false)
    }
   
    return <div>
        <div className="sm:w-[75%] w-[80%]   sm:flex rounded-[30px] pt-[12px] px-[20px] justify-between ml-[10%] text-white sm:ml-[13%] mt-8   bg-black ">
            <img className="ml-2 w-[100px] h-[60px] mt-1" src={BakarLogo} alt="" />
            <i style={{display: IsOpen == true ? "none" : ""}}  onClick={HandleOpen} class="fa-solid fa-bars sm:hidden absolute text-white top-[50px] right-16 text-4xl"></i>
            <i style={{display: IsOpen == true ? "block" : ""}} onClick={HandleClose}  class="fa-solid fa-x sm:hidden absolute hidden text-white top-[50px] right-16 text-4xl"></i>
            <ul style={{display: IsOpen == true ? "block": ""}} className="sm:flex hidden sm:pb-0 pb-[20px] text-xl font-semibold mr-4 gap-8 mt-2"> 
                <li className="hover:text-orange hover:font-semibold"> Home </li>
                <li className="hover:text-orange hover:font-semibold"> Services </li>
                <li className="hover:text-orange hover:font-semibold"> Skills </li>
                <li className="hover:text-orange hover:font-semibold"> About </li>
                <li className="hover:text-orange hover:font-semibold"> Contact</li>
            </ul>

        </div>
    </div>
}
export default Header 