import BakarImg from "../Images/Bakar.jpg"
import { Link } from "react-router-dom";
import Resume from "../Docs/BakarResume.pdf"
function HeroSection (){
    return <div id="home" className="sm:flex sm:justify-between mt-[40px] px-[20px] sm:px-[100px]"> 
        <div className="sm:w-[450px] mt-[6%] ">
            <div className="border-2 border-black w-[80px] h-[30px] rounded-[20px] text-center">
                <h1 className="font-semibold"> Hello!</h1>
            </div>
            <h1 className="text-4xl leading-[50px] mt-3 font-bold"> I'm <span className="text-orange">Bakar</span> <br className="sm:flex hidden" /> Full-stack Web Developer </h1>
            <p className="font-semibold text-[20px] sm:text-[16px] mt-2 mb-4"> Combining creativity with technical skills, I'll excel as a full-stack web developer and graphic designer, delivering impactful and user-friendly digital solutions.</p>
            <div className="bg-[#fd6e0040] sm:mt-3 mt-6 border-2 border-[#fd6e0056] flex  w-[270px] pt-1 h-[55px] rounded-[20px] sm:rounded-[30px]">
                <Link to="https://github.com/Eng-Bakar"><button className="bg-orange pt-[6px] hover:bg-black hover:text-white  w-[135px] ml-[10px] h-[40px] flex justify-center  text-white font-semibold text-center rounded-[15px] sm:rounded-[30px] mt-[1px]"> My GitHup <i class="fa-brands ml-2 text-2xl mb-2 fa-github"></i></button> </Link>
                <button className="text-black hover:underline hover:text-orange text-xl mb-2 ml-2 font-semibold">
                    <a href={Resume} download="BakarResume" className="flex items-center">
                        Resume  
                        <i className="fa-solid fa-download ml-2"></i>
                    </a>
                </button>
            </div>
        </div>
        <div className="w-[350px] mt-[40px] sm:mt-0 mr-[30px] relative rounded-[20px] h-[450px]">
            <img className="rounded-[20px]" src={BakarImg} alt="" />
            <div className="bg-black top-0 w-full h-[467px] opacity-35 rounded-[20px] absolute"></div>
        </div>
    </div>
}
export default HeroSection ;