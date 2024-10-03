import BakarSpeaking from "../Images/BakarSpeach.jpg"
function AboutMe (){
    return <div className="mt-[100px] sm:flex sm:justify-between sm:px-[100px]">
        <div className="mt-4">
            <div className="bg-orange relative sm:w-[410px] w-[320px] ml-[7%] sm:ml-0 sm:h-[410px] h-[320px] rounded-bl-[50%] rounded-tr-[90%] rounded-tl-[60%] rounded-br-[20%] ">
                <img className="absolute w-full h-full rounded-tr-[90%] rounded-tl-[60%] rounded-bl-[40%] rounded-br-[20%]" src={BakarSpeaking} alt="" />
            </div>
        </div>
        <div className="mr-[50px] px-[20px] sm:px-0  sm:w-[450px] ">
            <h1 className="text-4xl pb-1 font-bold border-b-4 mt-[50px] sm:mt-0 text-orange  border-b-orange w-[180px]"> About Me </h1>
            <p className="sm:text-md text-[20px] leading-[30px] w-[340px] sm:w-[450px] mt-3"> I'm a full-stack web developer and graphic designer with a passion for creating visually appealing, functional digital solutions. I specialize in building responsive websites and custom applications, delivering seamless user experiences that engage and captivate.</p>
            <div className=" mt-[50px] sm:mt-[20px]">
                <div>
                    <h1 className="font-bold text-xl mb-1"> Web Development </h1>
                    <div className="flex">
                        <hr className="w-[400px]  rounded-[20px] h-[6px] bg-orange" />
                        <hr className="w-[80px] rounded-[20px] ml-[-10px]   h-[6px] bg-[#EDECEC]" />
                        <div className="w-[20px] h-[20px] rounded-full border-3 absolute mt-[-7px] ml-[245px] sm:ml-[360px] border-[#EDECEC] bg-orange"></div>
                    </div>
                </div>
                <div className="mt-6">
                    <h1 className="font-bold text-xl mb-1"> App Development </h1>
                    <div className="flex">
                        <hr className="w-[350px]  rounded-[20px] h-[6px] bg-orange" />
                        <hr className="w-[120px] rounded-[20px] ml-[-10px]   h-[6px] bg-[#EDECEC]" />
                        <div className="w-[20px] h-[20px] rounded-full border-3 absolute mt-[-7px] ml-[210px] sm:ml-[330px] border-[#EDECEC] bg-orange"></div>
                    </div>
                </div>
                <div className="mt-6">
                    <h1 className="font-bold text-xl mb-1"> Graphic Design </h1>
                    <div className="flex">
                        <hr className="w-[250px]  rounded-[20px] h-[6px] bg-orange" />
                        <hr className="w-[220px] rounded-[20px] ml-[-10px]   h-[6px] bg-[#EDECEC]" />
                        <div className="w-[20px] h-[20px] rounded-full border-3 absolute mt-[-7px] ml-[150px] sm:ml-[220px] border-[#EDECEC] bg-orange"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default AboutMe