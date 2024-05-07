import { useState } from "react"
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="flex flex-row items-center justify-between sm:justify-around fixed top-0 left-0  w-full bg-transparent z-50 animate-fade-down animate-duration-1000 animate-ease-in animate-fill-both">
      <a href="/"
        className="text-3xl p-4 bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent font-bold shadow-white-xl w-[10rem]">
        CT.dev
      </a>
  {/* Big Screen Menu */}
      <nav className="  bg-gradient-to-r from-rose-400 to-orange-300 bg-clip-text text-transparent hidden sm:flex justify-right  items-center gap-[2rem] font-semibold text-[1.2rem] ">
        <a href="#">
          Home
        </a>
        <a href="#">
          About
        </a>
        <a href="#">
          Projects
        </a>
        <a href="#">
          Contact
        </a>
      </nav>
        
    {/* Small screen menu */}
    <div className="p-[.4rem] ">
      <nav className=" bg-gradient-to-r from-rose-400 to-orange-300 sm:hidden flex flex-col items-end gap-1 font-semibold rounded-[.8rem] ">
        <button onClick={() => setShowMenu(!showMenu)}
                className="sm:hidden p-2 font-bold text-xl hover:text-gray-500 sticky ease-in-out  duration-2000 ">
                  {showMenu ? <GrClose /> : <GiHamburgerMenu />}
        </button>
        {showMenu && (
          <nav className="flex flex-col font-bold items-center gap-2 w-[6rem] py- ease-in-out  duration-2000 sticky   absolute">
            <a href="#" className="hover:text-gray-500">
              Home
            </a>
            <a href="#" className="hover:text-gray-500">
              About
            </a>
            <a href="#" className="hover:text-gray-500">
              Contact
            </a>
          </nav>
          
        )}
      </nav>
      </div>

    </header>
)}

export default Navbar