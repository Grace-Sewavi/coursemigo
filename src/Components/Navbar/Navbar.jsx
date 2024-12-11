import React, { useState } from 'react'
import logo from '../../assets/Frame 1000001341.png'
import { Link } from 'react-router-dom'
import './Navbar.css'



const Navbar = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className=' bg-div flex w-full static justify-between text-block py-6 px-32 md:px-10 bg-white drop-shadow-md'>
        <Link to ='/' className='md:w-40 w-70 h-10'>
        <img src= {logo} alt="" className='md:w-40 w-70 h-10'/>
        </Link>

    <div className='relative hidden md:flex  justify-between gap-1'>
      <i className='bx bx-search absolute pl-4 top-4'></i>
      <input type="text" placeholder='Search here....' className='py-2 font-sans pl-10 rounded-xl border-2 bg-gray-200 focus:outline-none' />
      </div> 

      <ul className='hidden xl:flex items-center gap-6 font-sans text-base'>
        <li><Link to ="/courses" className='p-3  font-sans hover-bg-sky-400 hover:text-sky-600 rounded-md transition-all cursor-pointer'>Courses</Link></li>
        <li><Link to ="/features" className='p-3 font-sans  hover-bg-sky-400 hover:text-sky-600 rounded-md transition-all cursor-pointer'>Features</Link></li>
        <li><Link to ="/pricing" className='p-3 font-sans  hover-bg-sky-400 hover:text-sky-600 rounded-md transition-all cursor-pointer'>Pricing</Link></li>
        <li><Link to ="/about" className='p-3  font-sans hover-bg-sky-400 hover:text-sky-600 rounded-md transition-all cursor-pointer'>About</Link></li>
        <li><Link to ="/blog" className='p-3 font-sans  hover-bg-sky-400 hover:text-sky-600 rounded-md transition-all cursor-pointer'>Blog</Link></li>
        </ul>   

        <div className=' gap-8 hidden lg:flex'>
                <button className='btn font-sans px-12 rounded-md text-sm bg-white hover:bg-blue-500  hover:outline-black'>Log In</button>
                <button className='px-12 rounded-md font-sans text-sm bg-sky-500 hover:bg-opacity-55 focus:outline-black'>Sign Up</button>
            </div>  

        <i className='bx bx-menu xl:hidden block mt-1 ml-12 text-2xl cursor-pointer'
        onClick={() => setIsMenuOpen(!isMenuOpen)}></i>

        <div className={`absolute xl:hidden top-24 font-sans left-0 w-full bg-white flex flex-col items-center gap-6 
         text-md transform transition-transform ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
        style={{transition:"transform 0.3s ease, opacity 0.3s ease"}}
        >
          <Link to ='/courses' className ="w-full">
          <li className='list-none w-full text-center font-sans p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Courses</li>
          </Link>
          <Link to ='/features' className ="w-full">
          <li className='list-none w-full text-center font-sans p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Features</li>
          </Link>
          <Link to ='/pricing' className ="w-full">
          <li className='list-none w-full text-center font-sans p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Pricing</li>
          </Link>
          <Link to ='/about' className ="w-full">
          <li className='list-none w-full text-center font-sans p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>About</li>
          </Link>
          <Link to ='/blog' className ="w-full">
          <li className='list-none w-full text-center font-sans p-4 hover:bg-sky-400 hover:text-white transition-all cursor-pointer'>Blogs</li>
          </Link>
        </div>
    </div>
  )
}

export default Navbar