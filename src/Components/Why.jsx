import BakarStreet from "../Images/BakarSteet.jpg"
// import { Link } from "react-router-dom"
import {Link} from "react-scroll"
function Why (){
    return <div className="bg-[#010101e6] pb-[20px] sm:pb-0 sm:flex justify-around  w-full mt-[100px] rounded-[30px] sm:h-[500px] ">
            <div className="sm:pt-[100px] pt-[30px]">
                <div className="bg-orange  relative sm:w-[330px] ml-12 w-[250px] h-[250px] sm:h-[350px] rounded-b-full rounded-tl-full overflow-hidden">
                    <img className="absolute w-full h-full object-cover object-top rounded-b-full rounded-tl-full" src={BakarStreet} alt="" />
                    <div className="flex justify-center items-center w-full h-full  bg-opacity-40 absolute"></div>
                </div>
            </div>
            <div className="sm:pt-[120px]  mt-[30px] ml-[30px] sm:ml-0 w-[340px] sm:w-[400px] text-white">
                <h1 className="text-4xl font-bold text-white"> Why <span className="text-orange"> Hire me</span>?</h1>
                <p className="sm:text-[16px] text-[18px] mt-4 leading-[30px] sm:leading-[25px] "> Hire me for innovative, high-quality web development and design that delivers seamless functionality, creative solutions, and impactful results</p>
                <Link to="Contact" smooth={true} duration={500}><button className="w-[150px] h-[40px] font-semibold text-white bg-orange text-[18px] hover:bg-white hover:text-black mt-6 rounded-[10px]"> Hire me</button></Link>
            </div>

    </div>
}
export default Why