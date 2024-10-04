import BakarLogo from "../Images/bakarlogo.png"
import { useState } from "react"
// import { Link } from "react-router-dom"
import {Link} from "react-scroll"
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
                <li className="hover:text-orange hover:font-semibold"> <Link to="home" smooth={true} duration={500}> Home </Link> </li>
                <li className="hover:text-orange hover:font-semibold"> <Link to="Services" smooth={true} duration={500}> Services </Link> </li>
                <li className="hover:text-orange hover:font-semibold"> <Link to="Projects" smooth={true} duration={500}> Projects </Link> </li>
                <li className="hover:text-orange hover:font-semibold"> <Link to="About" smooth={true} duration={500}> About </Link> </li>
                <li className="hover:text-orange hover:font-semibold"> <Link to="Contact" smooth={true} duration={500}> Contact </Link> </li>
            </ul>

        </div>
    </div>
}
export default Header 