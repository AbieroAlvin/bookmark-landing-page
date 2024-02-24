import Logo from '../assets/images/logo-bookmark.svg'
import { FaSquareTwitter,  FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full mx-auto p-6 bg-blue-900 flex items-center justify-center">
       <nav className="w-full flex items-center justify-between md:flex-row flex-col max-w-[1120px]">
         <div className='flex md:flex-row flex-col items-center gap-8'>
            <img src={Logo} alt="logo" />
            <div>
            <ul className="flex md:justify-between justify-center text-[14px] items-center text-white md:flex-row  flex-col md:space-x-10 md:space-y-0 space-y-8">
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
            </div>
         </div>
         {/* icons */}
         <div className="flex items-center justify-center text-white gap-4 md:mt-0 mt-8">
          <FaSquareTwitter size={32} className='hover:text-red-500'/>
          <FaSquareFacebook size={32} className='hover:text-red-500'/>
          </div>
       </nav>
    </div>
  )
}

export default Footer