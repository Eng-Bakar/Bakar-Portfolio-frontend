import NovaCare from "../Images/NovaCare.png"
import WorkSpace from "../Images/WorkSpace.png"
import Electrnic from "../Images/Electronic.png"
function Projects (){
    return <div id="Projects" className=" mt-[100px]">
        <h1 className="text-center text-4xl font-semibold text-orange"> My Projects </h1>
        <p className="text-center w-[350px] sm:w-[500px] text-[20px] sm:text-[17px] ml-[5%] sm:ml-[30%] mt-3"> I build innovative websites and apps, like Novacare, Work Sapce and Bakar Gadgets, combining full-stack development with creative, user-centric design.</p>
        <div className="sm:flex justify-around   mb-[100px] ">
            <div>
                <div className="w-[350px] relative overflow-hidden max-w-4xl mx-auto mt-10 h-[400px] rounded-[20px] bg-[#FFEBDB] ">
                    <img className="w-[200px] mt-[-30%] ml-[35%] rounded-md  shadow-lg" src={NovaCare} alt="" />
                    <img className="absolute top-10 left-8 w-[200px] rounded-md shadow-xl transform -translate-x-4  translate-y-4" src={NovaCare} alt="" />
                </div>
                <h1 className="text-xl font-semibold text-orange ml-6 mt-4 sm:mt-0 sm:ml-2"> Web Design </h1>
                <h1 className="text-xl mt-[-6px] ml-6 sm:ml-2 font-bold"> NovaCare landing page design  </h1>
            </div>
            <div>
                <div className="w-[350px] relative overflow-hidden max-w-4xl mx-auto mt-10 h-[400px] rounded-[20px] bg-[#FFEBDB] ">
                    <img className="w-[200px] mt-[-110%] ml-[35%] rounded-md  shadow-lg" src={WorkSpace} alt="" />
                    <img className="absolute top-10 left-8 w-[200px] rounded-md shadow-xl transform -translate-x-4  translate-y-4" src={WorkSpace} alt="" />
                </div>
                <h1 className="text-xl font-semibold text-orange ml-6 mt-4 sm:mt-0 sm:ml-2"> Web Design </h1>
                <h1 className="text-xl mt-[-6px] ml-6 sm:ml-2 font-bold"> Work-Space landing page design  </h1>
            </div>
            <div>
                <div className="w-[350px] relative overflow-hidden max-w-4xl mx-auto mt-10 h-[400px] rounded-[20px] bg-[#FFEBDB] ">
                    <img className="w-[200px] mt-[-100%] ml-[35%] rounded-md  shadow-lg" src={Electrnic} alt="" />
                    <img className="absolute top-10 left-8 w-[200px] rounded-md shadow-xl transform -translate-x-4  translate-y-4" src={Electrnic} alt="" />
                </div>
                <h1 className="text-xl font-semibold text-orange ml-6 mt-4 sm:mt-0 sm:ml-2"> Web Design </h1>
                <h1 className="text-xl mt-[-6px] ml-6 sm:ml-2 font-bold"> Electronic landing page design  </h1>
            </div>
            
           
        </div>
    </div>
}
export default Projects