import { useState } from "react"
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/images/logo-bookmark.svg'
import { FaSquareTwitter,  FaSquareFacebook } from "react-icons/fa6";

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(!open)
  return (
    <div className="mx-auto w-full bg-transparent">
      <nav className="w-full mx-auto flex justify-between items-center py-4 px-2 max-w-[1120px]">
        {/* left side */}
        <div className={`w-full md:w-auto px-4 ${!open ? "flex items-center justify-between " : " hidden" }`}>
           <img src={Logo} alt="Logo" />
           {/* open & close */}
           <div onClick={() => handleClick()} className="md:hidden z-40">
               <FaBars size={25} className="text-black cursor-pointer"/>
           </div>
        </div>

        {/* navigation */}
        <div className="hidden md:flex gap-12">
            <ul className="flex justify-between space-x-10 text-[14px] items-center text-black">
            <li>
                <a href="#" className="uppercase hover:text-red-400">
                  Features
                </a>
              </li>
            <li>
                <a href="#" className="uppercase hover:text-red-400">
                  Pricing
                </a>
              </li>
            <li>
                <a href="#" className="uppercase hover:text-red-400">
                  Contact
                </a>
              </li>
            </ul>
            <button className="py-3 px-5 border-[2px] rounded-md uppercase border-red-400 hover:text-red-400 hover:bg-white hover:border-red-400 cursor-pointer bg-red-400 text-white font-semibold">Login</button>
        </div>

        {/* mobile menu */}
        <div className={`fixed top-[0] w-full h-full z-40 duration-500 bg-black/70 ease-in p-[40px] ${open ? 'left-0' : 'left-[-100%]'}`}>
          {/* logo */}
          <div className="flex items-center justify-between w-full md:w-auto px-4">
          <img src={Logo} alt="Logo" />
           {/* open & close */}
           <div onClick={() => handleClick()} className="md:hidden z-60">
               <FaTimes size={25} className="text-white cursor-pointer"/>
           </div> 
          </div>
          {/* navigation */}
          <div className="flex flex-col gap-4 my-6 w-full px-6">
          <ul className="flex flex-col justify-center text-[14px] items-center gap-8 text-white w-full my-4">
            <li className="border-y-[1px] border-b-white w-full flex items-center text-center justify-center py-2"> 
                <a href="#" className="uppercase hover:text-red-400 text-2xl py-2">
                  Features
                </a>
              </li>
            <li className="border-b-[1px] border-b-white w-full flex items-center text-center justify-center py-2">
                <a href="#" className="uppercase hover:text-red-400 text-2xl">
                  Pricing
                </a>
              </li>
            <li className="border-b-[1px] border-b-white w-full flex items-center text-center justify-center">
                <a href="#" className="uppercase hover:text-red-400 text-2xl py-2">
                  Contact
                </a>
              </li>
            </ul>
            <button className="py-3 px-5 border-[2px] rounded-md uppercase hover:text-red-400 cursor-pointer text-white font-semibold text-xl">Login</button>
          </div>

          {/* icons */}
          <div className="flex items-center justify-center text-white gap-4 absolute bottom-5 right-[40%]">
          <FaSquareTwitter size={32}/>
          <FaSquareFacebook size={32}/>

          </div>
        
        </div>
      </nav>
    </div>
  )
}

export default Navbar