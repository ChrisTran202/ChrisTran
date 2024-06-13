import {Link } from 'react-router-dom'
import Graycat from '../assets/graycat.png'
import Orangecat from '../assets/orangecat.png'

export const About = () => {
    
  // variables for left/right buttons
    const rightArrow = '>'
    const leftArrow = '<'
    
  return (
    <section id="about" className="flex flex-col items-center justify-center pt-[5rem] h-auto animate-fade-up animate-duration-1000 animate-delay-[200ms] animate-ease-in-out animate-fill-both ">
      <div className="border-[#ff9d48] border-[.1rem] w-[80%] md:h-[85vh]  rounded-[5rem] ">
        <div className=' flex flex-col items-center pb-[2rem]'>
          {/* title */}
          <h1 id="title" className='bg-gradient-to-tr from-red-400 via-violet-800 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-6xl font-bold pt-[2rem] '>
            ABOUT
          </h1>
          {/* description */}
          <div className='h-[60vh] md:h-[60vh] w-[50vw] flex flex-col items-center justify-center  '>
            <h2 className=" text-white text-center text-[14px] w-[70vw] p-5 md:pt-[2rem] md:w-auto h-[34vh] md:h-[25rem] md:text-[20px] lg:text-[25px]">
                In the year 2022, I broke free from the grind of blue-collar jobs, diving headfirst into the realm of front-end web development. 
              I got hooked when I started creating things turning it from code into functional features and responsive designs for the web. 
              There are so many things to learn that you will always end up going down the rabbit hole of things to know and many different ways to do one the thing.
            </h2>  
            <h2 className="text-white text-[14px] p-5 w-[70vw] md:w-[50vw] text-center md:text-[20px] lg:text-[25px] ">
              When I am not glued to the screen, you will find me tending the garden, casting <br/>lines with my wife, or simply goofing around with our two cats.
            </h2>
          </div>

          {/* Cat Icons */}
          <div className=' h-[70px] md:h-[1rem] lg:h-[100px] grid grid-cols-2 gap-[7rem] md:gap-[20rem]  justify-between items-center'>
            <div>
             <img src={Graycat} alt="car" className=' h-20 lg:h-[8rem] animate-bounce  animate-duration-1000 animate-delay-[200ms]' /> 
            </div>
            <div>
              <img src={Orangecat} alt="car" className=' h-20 lg:h-[8rem] rotate-15 motion-safe:animate-spin animate-duration-1000  animate-delay-2000ms' />
            </div>
           </div>
        </div>
      </div>
      
{/* left button */}
      <div className="flex flex-row items-center justify-between  w-[80%] pt-">
        <nav className="flex  items-center  bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent hover:text-gray-100 hover:scale-125 ease-in-out duration-200 hover:shadow-xl font-bold text-[1.3rem] ">
          <Link id="title" to='/' className="md:text-3xl">
            {leftArrow} Home  
          </Link>
        </nav>
{/* right button */}
        <nav className="flex mitems-center justify-end  bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent hover:text-gray-100 hover:scale-125 ease-in-out duration-200 hover:shadow-xl font-bold text-[1.3rem]  ">
          <Link id="title" to='/projects' className="md:text-3xl">
            Projects {rightArrow} 
          </Link>
        </nav>

        
        
      </div>
      
    </section>

    // 3
  )
}
