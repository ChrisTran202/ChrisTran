import {Link } from 'react-router-dom'


export const About = () => {
    
  // variables for left/right buttons
    const rightArrow = '>'
    const leftArrow = '<'
    
  return (
    <section id="about" className="flex flex-col items-center justify-center pt-[5rem] h-[90vh]  animate-fade-up animate-duration-1000 animate-delay-[200ms] animate-ease-in-out animate-fill-both ">
      <div className="border-[#ff9d48] border-[.1rem] w-[80%] md:h-[100vh]  rounded-[5rem] ">
        <div className=' flex flex-col items-center pb-[2rem]'>
          {/* title */}
          <h1 id="title" className='bg-gradient-to-tr from-red-400 via-violet-800 to-yellow-500 bg-clip-text text-transparent text-4xl md:text-6xl font-bold pt-[2rem] '>
            ABOUT
          </h1>
          {/* description */}
          <h2 className="text-white text-center p-5 md:pt-[5rem] md:w-[70%] md:text-3xl">
              In the year 2022, I broke free from the grind of blue-collar jobs, diving headfirst into the realm of front-end web development. 
            I got hooked when I started creating things turning it from code into functional features and responsive designs for the web. 
            There are so many things to learn that you will always end up going down the rabbit hole of things to know and many different ways to do one the thing.
          </h2>  
          <h2 className="text-white p-5 md:w-[70%] text-center md:text-3xl ">
            When I am not glued to the screen, you will find me tending the garden, casting lines with my wife, or simply goofing around with our two cats.
          </h2>
        </div>
      </div>
      
{/* left button */}
      <div className="flex flex-row items-center justify-between  w-[80%] pt-2">
        <nav className="flex  items-center  bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent hover:text-gray-100 hover:scale-125 ease-in-out duration-200 hover:shadow-xl font-bold text-[1.3rem] ">
          <Link id="title" to='/' className="md:text-3xl">
            {leftArrow} Home  
          </Link>
        </nav>
{/* right button */}
        <nav className="flex mitems-center justify-end  bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent hover:text-gray-100 hover:scale-125 ease-in-out duration-200 hover:shadow-xl font-bold text-[1.3rem] ">
          <Link id="title" to='/projects' className="md:text-3xl">
            Projects {rightArrow} 
          </Link>
        </nav>
        
      </div>
      
    </section>

    // 3
  )
}
