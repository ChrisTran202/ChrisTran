import { useState } from "react"
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);

  const handleNav = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header className="flex  items-center justify-end  fixed top-0 left-0  w-full bg-transparent z-50 animate-fade-down animate-duration-1000 animate-ease-in animate-fill-both">
      <a href="/"
         id="logo"
         className="text-[1.2rem] md:text-3xl p-4 bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent font-bold shadow-white-xl w-full">
        CT.dev
      </a>
  {/* Big Screen Menu */}
      <nav className=" justify-end bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent hidden w-[50vw] xl:w-[30vw] sm:flex justify-right  gap-[.8rem] md:gap-[2rem] font-semibold text-[1.2rem] ">
        <Link to='/' id="title" className="hover:text-gray-100 hover:scale-125 ease-in-out duration-200 hover:shadow-xl active:border-solid active:bg-clip-text md:text-2xl ">
          Home
        </Link>
        <Link to='about' id="title" className="hover:text-gray-100 hover:scale-125 ease-in-out duration-200 hover:shadow-xl md:text-2xl">
          About
        </Link>
        <Link to='projects' id="title" className="hover:text-gray-100 hover:scale-125 ease-in-out duration-200 hover:shadow-xl md:text-2xl">
          Projects
          
        </Link>
        {/* <Link to='contact' id="title" className="hover:text-gray-100 hover:scale-125 ease-in-out duration-200 hover:shadow-xl">
          Contact
        </Link> */}
      </nav>
        
    {/* Small screen menu */}
    <div className="p-[.4rem] ">
      <nav className=" bg-gradient-to-r from-rose-400 to-orange-300 sm:hidden flex flex-col items-end gap-1 font-semibold rounded-[.8rem] ">
        {/* nav icon */}
        <button onClick={handleNav}
                className="sm:hidden p-2 font-bold text-xl hover:text-whitwhitecky ease-in-out  duration-2000 ">
                  {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        
          <nav className={showMenu ? 'font-bold fixed left-0 top-0 w-[60%] h-[100vh] rounded-r-[3rem]  ease-in-out duration-500 bg-[#000000ed] text-2xl  flex flex-col gap-4 items-center ' : 'fixed left-[-100%]'}>
            <Link to='/' id="title" className="hover:text-white bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent pt-10 p-4 hover: ">
              Home
            </Link>
            <Link to='/about' id="title" className="hover:text-white bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent p-4 md:text-3xl ">
              About
            </Link>
            <Link to='/projects' id="title" className="hover:text-white bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent p-4 md:text-3xl ">
              Projects
            </Link>
          </nav>
      </nav>
    </div>

  

    </header>
)}

export default Navbar