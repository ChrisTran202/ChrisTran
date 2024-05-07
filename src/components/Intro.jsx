import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoNewspaper } from "react-icons/io5";
import car from '../assets/car.jpg'

function Intro() {
  return (
    
    <section className='flex  items-center justify-center pt-[5rem]'>
      <div className='flex bg-[url(./assets/Skyscape.jpg)]  bg-[#21083e]  sm:bg-auto md:bg-cover  bg-no-repeat bg-center rounded-t-[25rem] flex-col items-center w-[80%] rounded-[5rem] border-[#ff9d48] border-[.1rem]'>
      
        <div className=' font-bold flex flex-col items-center '>
          <h1 className=' bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent text-[3.8rem] h-[9rem] md:h-[13rem] pt-[4rem] drop-shadow-2xl md:text-[7rem]  animate-fade-right animate-duration-700 animate-ease-in animate-fill-both'>
            Chris Tran 
          </h1>
          <h2 className='text-[#ffffff]  text-2xl md:text-3xl  py-1  animate-fade-left animate-duration-700 animate-delay-[1000ms] animate-ease-in animate-fill-both  '>
            Frontend Web Developer
          </h2>
          

          <div className='py-[3rem] flex-col items-center justify-center'>
            <div className="animate-rotate-[-3deg] animate-duration-2000 animate-ease-in animate-fill-both">
            <img src={car} className=' rounded-[5rem] border-[#ff9d48] border-[.1rem] w-[300px] h-[250px] md:w-[400px] md:h-[400px] shadow-2xl object-cover animate-fade-up animate-duration-700 animate-delay-[1300ms] animate-ease-in animate-fill-both '/>
            </div>
            <div className="flex flex-row items-center justify-center">
              <a href="https://www.linkedin.com/in/christopherctran/" target="_blank" className=" flex justify-center p-6 animate-fade-left animate-duration-700 animate-delay-[1500ms] animate-ease-in animate-fill-both  "><FaLinkedin className="bg-[#ff9d486f] border-[#ff9d48] border-[.2rem] rounded-md  w-[2rem] h-[2rem]  md:h-[3rem] md:w-[3rem] hover:scale-125 ease-in-out duration-200 hover:shadow-xl"/></a>
              <a href="" target="_blank" className=" flex justify-center p-6 animate-fade-left animate-duration-700 animate-delay-[1500ms] animate-ease-in animate-fill-both  "><IoIosMail className="bg-[#ff9d486e] border-[#ff9d48] border-[.2rem]  rounded-md  w-[2rem] h-[2rem] md:h-[3rem] md:w-[3rem] hover:scale-125 ease-in-out duration-200 hover:shadow-xl"/></a>
            </div> 
            <div className="flex flex-row items-center justify-center animate-fade-left animate-duration-700 animate-delay-[1500ms] animate-ease-in animate-fill-both">
              <button className="flex items-center justify-center hover:scale-125 ease-in-out duration-200 hover:shadow-xl bg-[#ff9d486f] border-[#ff9d48] border-[.2rem] rounded-xl w-[7rem] h-[2rem] md:w-[8.5rem] md:h-[3rem] animate-bounce animate-duration-1000 ">
                <a href="" target="_blank" className=" flex justify-center p-6 animate-fade-left animate-duration-700 animate-delay-[1500ms] animate-ease-in animate-fill-both  "><IoNewspaper className="  rounded-md p-1 w-[2rem] h-[2rem] md:h-[3rem] md:w-[3rem] "/><p className="text-black p-1 md:text-[1.2rem] md:p-2">Resume</p></a>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
)}

export default Intro

