import BakarLogo from "../Images/bakar logoWhite.png"
import { useState } from "react";
import axios from 'axios'

function Footer (){
    const [Email, setEmail] = useState("")
    const HandleGetNewsletter = ()=> {
        axios.post("http://localhost:5000/newsletter/create", {
            "email" : Email,
        }).then(() => {
            alert("Subscribed successfully!")
            setEmail("")
        }).catch((error) => {
            console.log(error)
        })
    }
    return <div className="w-full mt-[100px] sm:h-[300px] bg-[#010101d9] px-[20px] sm:px-[100px]"> 
        <div className=" sm:flex justify-between pt-[40px] sm:pt-[110px]   ">
        
        <div className="w-[200px] ">
            <img className=" ml-[40%] sm:ml-0" src={BakarLogo} alt="" />
        </div>
      
            <ul className="flex gap-6 mt-4 sm:mt-12">
                {/* <li className=" font-bold text-white text-2xl hover:text-orange">Pages</li> */}
                <li className="text-[18px] hover:font-semibold text-white hover:text-orange">Home</li>
                <li className="text-[18px] hover:font-semibold text-white hover:text-orange">Services</li>
                <li className="text-[18px] hover:font-semibold text-white hover:text-orange">Skills</li>
                <li className="text-[18px] hover:font-semibold text-white hover:text-orange">About</li>
                <li className="text-[18px] hover:font-semibold text-white hover:text-orange">Contact</li>
            </ul>
            <div className="">
                <h1 className="text-2xl font-bold mt-4 sm:mt-0 mb-3 text-white "> Get Exclusive <span className="text-orange">Updates!</span> </h1>
                <div className="flex ">
                    <input value={Email} onChange={(event) => setEmail(event.target.value)} className="sm:w-[220px] w-[270px] h-[40px] sm:h-[35px] text-white rounded-l-[10px] px-2 placeholder:text-[#ededed] outline-none bg-[#fd6e0057]" type="text" placeholder="Email" />
                    <button onClick={HandleGetNewsletter} className="sm:w-[35px] w-[40px] h-[40px] sm:h-[35px] rounded-r-[10px] mt-[px] text-white font-semibold mt- bg-[#fd6e00] outline-none"><i class="fa-solid fa-paper-plane text-xl"> </i></button>
                </div>
                    <div className="flex gap-3 mt-3 ml-10">
                        <a href="https://wa.me/+252617216218"><i class="fa-brands fa-square-whatsapp text-3xl text-white hover:text-orange "></i></a>
                        <a href="https://www.facebook.com/Aargoonle"><i class="fa-brands fa-square-facebook text-3xl text-white hover:text-orange "></i></a>
                        <a href="https://www.instagram.com/eng.bakar01/"><i class="fa-brands fa-square-instagram text-3xl text-white hover:text-orange "></i></a>
                        <a href="https://www.linkedin.com/in/eng-bakar-642ab232a/"><i class="fa-brands fa-linkedin text-3xl text-white hover:text-orange "></i></a>
                        <a href="https://discord.com/channels/@me"><i class="fa-brands fa-discord text-3xl text-white hover:text-orange "></i></a>
                    </div>
            </div>

        </div>
            <div className="border-t-2 mt-3 pb-[40px] sm:pb-0 border-t-[#ffffff62] w-full">
                <h1 className="text-white right-[100px] mt-1 absolute"> Terms of service - Privacy Policy</h1>

            </div>
    </div>
}
export default Footer;