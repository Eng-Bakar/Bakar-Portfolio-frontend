import WebDev from "../Images/WebDev.png"
import AppDev from "../Images/AppDev.png"
import GraphicDesign from "../Images/Designn.png"
function Services (){
    return <div id="Services" className="mt-[100px]">
        <h1 className="sm:text-3xl text-4xl font-bold text-center text-orange"> My Services </h1>
        <p className="sm:w-[500px] text-[20px] sm:text-[16px]  px-[20px] text-center sm:ml-[30%]  mt-3">I offer custom web development, graphic design, and app development services, creating visually appealing, responsive, and user-friendly digital solutions.</p>
        <div className="sm:flex ml-[12%] sm:ml-0 justify-around mt-10">
            <div className="w-[300px] p-[20px] h-[300px] rounded-[20px] shadow-xl inset hover:shadow-orange hover:shadow-2xl shadow-orange ">
                <img className="w-[60px]" src={WebDev} alt="" />
                <h1 className="text-2xl font-bold  mt-[30px]">Web Development</h1>
                <p className="mt-5"> I create custom, responsive websites and web applications focused on functionality and seamless user experiences. </p>
            </div>

            <div className="w-[300px] sm:mt-0 mt-[10%] p-[20px] h-[300px] rounded-[20px] shadow-xl inset hover:shadow-orange hover:shadow-2xl shadow-orange ">
                <img className="w-[40px]" src={AppDev} alt="" />
                <h1 className="text-2xl font-bold  mt-[30px]">App Development</h1>
                <p className="mt-5"> I develop user-friendly, efficient mobile and web applications, delivering seamless functionality across multiple platforms. </p>
            </div>

            <div className="w-[300px] sm:mt-0 mt-[10%] p-[20px] h-[300px] rounded-[20px] shadow-xl inset hover:shadow-orange hover:shadow-2xl shadow-orange ">
                <img className="w-[65px]" src={GraphicDesign} alt="" />
                <h1 className="text-2xl font-bold  mt-[30px]">Graphic Design</h1>
                <p className="mt-5"> I design visually compelling graphics, logos, and branding materials that elevate your brand's identity and impact.</p>
            </div>
        </div>
    </div>
}
export default Services;