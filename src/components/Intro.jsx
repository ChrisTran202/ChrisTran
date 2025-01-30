import { FaLinkedin } from 'react-icons/fa';
// import { IoIosMail } from 'react-icons/io';
import { IoNewspaper } from 'react-icons/io5';
import profileImg from '../assets/profileImg.png'
import { Link } from 'react-router-dom';

function Intro()  { 

  const rightArrow = '>'

  return (
    
    <section className='flex flex-col gap-5 items-center h-[80vh] md:h-[85vh] justify-center mt-[5rem] animate-fade-up animate-duration-1000 animate-delay-[200ms] animate-ease-in-out animate-fill-both '>
      <div className='flex bg-[url(./assets/Skyscape.jpg)]  bg-[#21083e]  sm:bg-auto md:bg-cover  bg-no-repeat bg-center rounded-t-[25rem] flex-col items-center w-[80%] h-[80vh] md:h-[90vh] rounded-[5rem]  border-[#ff9d48] border-[.1rem]'>
      
      {/* title */}
        <div className='font-bold flex flex-col items-center '>
          <h1 
            id='title' 
            className='bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent text-[3rem] md:text-[5rem] xl:text-[8rem] h-[9rem] md:h-[14rem] pt-[3rem] md:pt-[3rem] drop-shadow-2xl animate-fade-right animate-duration-700 animate-ease-in animate-fill-both'
          >
            Chris Tran 
          </h1>
          <h2 
            id='title'  
            className='text-[#ffffff]  text-[1.4rem] md:text-4xl  animate-fade-left animate-duration-700 animate-delay-[700ms] animate-ease-in animate-fill-both '>
              Frontend Web Developer
          </h2>
          
          <div className='pt-[2rem] lg:pt-[5rem] flex-col items-center justify-center'>

            {/* profile picture */}
              <img 
                src={profileImg} 
                className=' rounded-[20rem] w-[250px]'
              />
              
            <div className='flex flex-row items-center justify-center'>
              
              {/* linkedin */}
              <a 
                href='https://www.linkedin.com/in/christopherctran/' 
                target='_blank' 
                className='flex justify-center p-6 animate-fade-left animate-duration-700 animate-delay-[1100ms] animate-ease-in animate-fill-both '
              >
                <FaLinkedin className='bg-[#ffa600] border-[#da28fd] hover:border-white hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-[.2rem] rounded-md  w-[2rem] h-[2rem]  md:h-[3rem] md:w-[3rem] hover:scale-125 ease-in-out duration-200 '/>
              </a>
              
              {/* email */}
              {/* <a 
                href='' 
                target='_blank'
                className='flex justify-center p-6 animate-fade-left animate-duration-700 animate-delay-[900ms] animate-ease-in animate-fill-both'
              >
                  <IoIosMail className='bg-[#ffa600] border-[#da28fd] hover:border-white hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-[.2rem]  rounded-md  w-[2rem] h-[2rem] md:h-[3rem] md:w-[3rem] hover:scale-125 ease-in-out duration-200 ' />
              </a> */}
            </div>

            <div className='flex flex-row items-center justify-center animate-fade-left animate-duration-700 animate-delay-[1000ms] animate-ease-in animate-fill-both'>
              {/* resume button */}
                <button className='flex items-center justify-center hover:scale-125 ease-in-out duration-200   bg-[#ffa600] border-[#da28fd] hover:border-white  hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] border-[.2rem] rounded-xl w-[7rem] h-[2rem] md:w-[8.5rem] md:h-[3rem] animate-bounce  animate-duration-1000'>
                  <a 
                  href='' 
                  target='_blank' 
                  className='flex justify-center p-6 animate-fade-left animate-duration-700 animate-delay-[1100ms] animate-ease-in animate-fill-both hovber:scale-125'>
                    <IoNewspaper className='  rounded-md p-1 w-[2rem] h-[2rem] md:h-[3rem] md:w-[3rem]'/>
                      <p className='text-black p-1 md:text-[1.2rem] md:p-2'>
                        Resume
                      </p>
                  </a>
                </button>
            </div>
          </div>

          </div>
        </div>
        
      
      {/* right arrow */}
      <div className='flex flex-row items-center justify-end w-[80%]'>
        <nav className='flex  items-center justify-end bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent hover:text-gray-100 hover:scale-125 ease-in-out duration-200 hover:shadow-xl font-bold text-[1.3rem] '>
           <Link 
            id='title' 
            to='about' 
            className='md:text-3xl'>
              About {rightArrow}
          </Link>
        </nav>
        
      </div>
    </section>
)}
// 2

export default Intro

