import { Link } from 'react-router-dom'
import Carousel from './carousel/Carousel'
// import Carousel from '../components/Carousel.jsx'
// import { Carousel, IconButton } from "@material-tailwind/react";

export const Projects = () => {

 
  // variables for left/right buttons
  const leftArrow = '<'
  const rightArrow = '>'

  return (
    <section className="flex flex-col items-center justify-center pt-[5rem] h-[100vh] animate-fade-up animate-once animate-ease-linear ">
      <div className="border-[#ff9d48] border-[.1rem] w-[80%] h-[90vh] rounded-[5rem]">
        {/* title */}
        <h1 id="title" className='flex flex-col items-center bg-gradient-to-tr from-red-400 via-violet-800 to-yellow-500 bg-clip-text text-transparent text-4xl font-bold pt-[2rem] '>
            PROJECTS
        </h1>

        {/* Carousel display */}
        <div className='items-center justify-center w-[100%] h-[100%] '>
          <Carousel />
        </div>
          

      </div>    
        
      <div className="flex flex-row items-center justify-between  w-[80%] m-5">
        {/* left arrow */}
        <nav className="flex  items-center  bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent font-bold hover:text-gray-100 hover:scale-125 ease-in-out duration-200 hover:shadow-xl text-[1.3rem]  ">
          <Link id="title" to='/About' className='md:text-3xl'> 
           {leftArrow} About  
          </Link>
        </nav>
        {/* right arrow */}
        <nav className="flex  items-center  bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent hover:text-gray-100 hover:scale-125 ease-in-out duration-200 hover:shadow-xl font-bold text-[1.3rem] ">
          <Link id="title" to='/' className='md:text-3xl'> 
            Home {rightArrow} 
          </Link>
        </nav>
      </div>



    </section>
    // 4
  )
}