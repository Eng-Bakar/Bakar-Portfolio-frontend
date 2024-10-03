import TestmonialIMG from "../Images/Testmonials.png"
import { BiLogoMongodb } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiCanva } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";



function Testmonials (){
    return <div className="">
        <img className="w-full  relative h-[650px]  sm:h-[550px]" src={TestmonialIMG} alt="" />
        <div className="  absolute mt-[-610px] sm:mt-[-500px]   ">
            <div className="text-white  sm:ml-[320px]">
                <h1 className="text-4xl ml-5 sm:ml-0 sm:text-center font-bold"> My <span className="text-orange">Work Experience</span> </h1>
                <p className="text-[18px] mt-3 ml-6 sm:ml-0 sm:px-0 w-[340px] sm:w-[550px] text-center"> My work blends web development and graphic design, delivering innovative, high-quality solutions that exceed client expectations through creativity and precision. </p>
            </div>
            <div className="sm:mt-[100px] mt-[40px] sm:flex justify-between ml-[150px] w-full">
                <div className=" ml-[-22%] sm:ml-[30px]">
                    <h1 className="text-2xl text-white font-semibold"> Full-Stack Web Developer </h1>
                    <h1 className="text-white  sm:mt-3 ml-16 mt-3  "> May 2024 - Present</h1>
                    <div className="sm:ml-10 ml-14 mt-5">
                        <div  className="text-white  mt-2 flex gap-1">
                            <BiLogoMongodb className="w-[35px] text-[16px] p-2 h-[35px] rounded-full bg-[#fd6f00]" />
                            <SiExpress className="w-[35px] text-[16px] p-2 h-[35px] rounded-full bg-[#fd6f00]" />
                            <FaReact className="w-[35px] text-[16px] p-2 h-[35px] rounded-full bg-[#fd6f00]" />
                            <FaNodeJs className="w-[35px] text-[16px] p-2 h-[35px] rounded-full bg-[#fd6f00]" />
                        </div>
                        <h1 className="text-white tracking-[26px] ml-[8px] font-semibold text-xl "> MERN</h1>   
                    </div>
                </div>
                <div className="sm:mt-[80px] mt-[40px] sm:ml-0 ml-[-25%] ">
                    <div className="border-b-2 border-dashed relative border-b-white  w-[270px]"></div>
                    <div className="w-[30px] absolute mt-[-16px] ml-[-10px] h-[30px] p-1 rounded-full bg-transparent border-white border-dashed border-2">
                        <div className="bg-orange w-full h-full rounded-full "></div>
                    </div>
                    <div className="w-[30px] absolute mt-[-16px] ml-[120px] h-[30px] p-1 rounded-full bg-transparent border-white border-dashed border-2">
                        <div className="bg-white w-full h-full rounded-full "></div>
                    </div>
                    <div className="w-[30px] absolute mt-[-16px] ml-[250px] h-[30px] p-1 rounded-full bg-transparent border-white border-dashed border-2">
                        <div className="bg-orange w-full h-full rounded-full "></div>
                    </div>
                </div>

                <div className="sm:ml-[30px] ml-[-30px] sm:mt-[10px] mt-8">
                    <h1 className="text-2xl text-white font-semibold"> Graphic Design </h1>
                    <h1 className="text-white  mt-3 ml-3 "> July 2019 - Present</h1>
                    <div className="ml-3 mt-5">
                        <div  className="text-white  mt-2 flex gap-6">
                            <SiCanva className="text-[26px] text-orange " />
                            <SiAdobephotoshop className="text-[26px] text-orange " />
                            <SiAdobeillustrator className="text-[26px] text-orange " />
                        </div>
                        <h1 className="text-white  ml-[-15px] font-semibold text-xl "> Canva <span className="ml-[8px]">PS</span> <span className="ml-[23px]">AI</span></h1>   
                    </div>
                </div>
            </div>
        </div>
        
    </div>  
}
export default Testmonials