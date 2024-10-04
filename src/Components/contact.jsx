import ContactGirl from "../Images/Girl.png"
import { useState, useEffect } from "react"
import axios from "axios"
function Contact (){
    const [ Name, setName] = useState("")
    const [ Email, setEmail] = useState("")
    const [ Date, setDate] = useState("")
    const [ Price, setPrice] = useState("")
    const [ Message, setMessage] = useState("")

    const HandlePostMessage = (e)=> {
        e.preventDefault()
        axios.post("http://localhost:5000/contact/create", {
            "fullname": Name,
            "email": Email,
            "price": Price,
            "date": Date,
            "description": Message

        }).then(() => {
            alert("Thanks for Hiring Me")
            setName("")
            setEmail("")
            setPrice("")
            setDate("")
            setDescription("")
        }).catch((error) => {
            alert("Error: " + error)
            console.log(error)
        })
        // useEffect = () => {
        //     HandlePostMessage()
        // }
    }
    return <div id="Contact" className="mb-[100px] sm:mt-0 mt-[300px]">
        <img className="w-[300px] mt-[-445px] sm:mt-[-440px] ml-[-12%]  sm:ml-[16%] absolute" src={ContactGirl} alt="" />
        <div className="sm:w-[750px] w-[335px] sm:flex sm:justify-between sm:ml-[23%] ml-[10%] px-[20px] pb-[15px] sm:pb-0 sm:px-[30px] pt-[50px] mt-[20%] sm:h-[450px] rounded-[20px] bg-black">
            <div className="w-[235px] ml-[20px] text-white">
                <h1 className="font-semibold text-orange text-3xl "> Get in Touch </h1>
                <p className="mt-8"> Reach out to discuss your project ideas and start collaborating on something amazing together!</p>
                <div className="flex gap-1 mt-8">
                    <i class="fa-solid fa-phone w-[35px] pt-[8px]  text-[18px] text-center h-[35px] rounded-full bg-[#fd6e0074]"></i>
                    <h1 className="text-xl mt-[3px]"> +252617216218 </h1>
                </div>
                <div className="flex gap-1 mt-4">
                    <i class="fa-solid fa-envelope w-[35px] pt-[8px]  text-[18px] text-center h-[35px] rounded-full bg-[#fd6e0074]"></i>
                    <h1 className="text-xl mt-[2px]"> bakaryare@gmail.com </h1>
                </div>
            </div>
            <div className="text-white w-[350px]">
                <h1 className=" mt-[30px] sm:mt-0 text-xl font-semibold"> Send me a message </h1>
                <form>
                    <input value={Name} onChange={(event) => setName(event.target.value)} className="w-[300px] mt-3 outline-none h-[35px] placeholder:text-[#bcbbbb] text-white font-semibold placeholder:font-semibold px-[10px] rounded-[10px] bg-[#fd6e0074]" type="text" placeholder="Name" />
                    <input value={Email} onChange={(event) => setEmail(event.target.value)} className="w-[300px] mt-4 outline-none h-[35px] placeholder:text-[#bcbbbb] text-white font-semibold placeholder:font-semibold px-[10px] rounded-[10px] bg-[#fd6e0074]" type="email" placeholder="Email" />
                    <input value={Date} onChange={(event) => setDate(event.target.value)} className="w-[140px] mt-4 outline-none h-[35px] placeholder:text-[#bcbbbb] text-white font-semibold placeholder:font-semibold px-[10px] rounded-[10px] bg-[#fd6e0074]" type="date" placeholder="Email" />
                    <input value={Price} onChange={(event) => setPrice(event.target.value)} className="w-[140px] mt-4 ml-[20px] outline-none h-[35px] placeholder:text-[#bcbbbb] text-white font-semibold placeholder:font-semibold px-[10px] rounded-[10px] bg-[#fd6e0074]" type="tell" placeholder="Budget" />
                    <textarea value={Message} onChange={(event) => setMessage(event.target.value)} className="w-[300px] mt-4 outline-none h-[120px] placeholder:text-[#bcbbbb] text-white font-semibold placeholder:font-semibold px-[10px] rounded-[10px] bg-[#fd6e0074]" placeholder="Project Details"></textarea>
                    <button onClick={HandlePostMessage} className="w-[150px] hover:bg-white  hover:text-black hover:font-semibold h-[40px] rounded-[10px] font-semibold mt-2 bg-orange"> Send message </button>
                </form>
            </div>

        </div>
    </div>
}
export default Contact