import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  return (
    <section className="flex  justify-center pt-[5rem] h-[90vh]  ">
        <div className="border-[#ff9d48] border-[.1rem] w-[80%] h-auto rounded-[5rem]">
          <h1 id="title" className='flex flex-col items-center bg-gradient-to-tr from-red-400 via-violet-800 to-yellow-500 bg-clip-text text-transparent text-2xl md:text-4xl font-bold pt-[2rem] '>
            CONTACT
          </h1>
        <div className=' flex flex-row  items-center justify-center gap-5 p-[2rem] '>
          <div><a href="https://www.linkedin.com/in/christopherctran/" target="_blank"><FaLinkedin className="bg-[#ff9d4857]   rounded-md  w-[2rem] h-[2rem] hover:scale-125 ease-in-out duration-200 hover:shadow-xl"/></a></div>
          <a id="email" href="mailto:christran202@gmail.com" target="_blank" alt='email'><IoIosMail className="bg-[#ff9d486c]  rounded-md w-[2rem] h-[2rem] hover:scale-125 ease-in-out duration-200"/></a>

          
        </div>
      </div>      

          
        
      
    </section>
  )
}

export default Contact
