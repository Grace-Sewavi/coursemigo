import React from 'react'
import logo from '../../assets/Coursemigo.png'
import copy from '../../assets/Vector (2).png'
import youtube from '../../assets/Group.png'
import linkedin from '../../assets/Group (1).png'
import vector from '../../assets/Vector.png'
import facebook from '../../assets/Vector (1).png'
import twitter from '../../assets/Frame 956.png'


const Footer = () => {
  return (
    <div className='bg-black min-w-full h-full text-white'>
        <div className='lg:flex flex lg:justify-evenly  justify-center text-md sm:text-md pt-28 '>
            <div className='md:gap-x-3 gap-x-5'>
                <div className='w-12 h-5 bg-white -mb-5'></div>
                <ul>
                    <img className='w-36 h-5' src={logo} alt=''/> 
                    <li className='mt-5 font-sans'>Unlimited Learning</li>
                    <li className='mt-5 font-sans'>Explore Courses....</li>
                </ul>
            </div>


            <div>
                <ul>
                    <li className='font-sans md:ml-0 ml-10 lg:mt-0 mt-10'>Features</li>
                    <li className='mt-5 md:ml-0 ml-10 font-sans'>Courses</li>
                    <li className='mt-5 md:ml-0 ml-10 font-sans'>Pricing</li>
                    <li className='mt-5 md:ml-0 ml-10 font-sans'>Pricing</li>
                    <li className='mt-5 md:ml-0 ml-10 font-sans md:block hidden'>Blog</li>
                    <li className='mt-5 md:ml-0 ml-10 font-sans md:block hidden'>FAQs</li>
                </ul>
            </div>

            <div>
                <ul className='md:block hidden'>
                    <li className='font-sans lg:mt-0 mt-5'>Support</li>
                    <li className='mt-5 font-sans'>Help Center</li>
                    <li className='mt-5 font-sans'>Tech Support</li>
                    <li className='mt-5 font-sans'>Community</li>
                    <li className='mt-5 font-sans'>Contact</li>
                    <li className='mt-5 font-sans'>Feedback</li>
                </ul>
            </div>

            
            <div>
                <ul className='md:block hidden'>
                    <li className='font-sans lg:mt-0  mt-5 '>Legal</li>
                    <li className='mt-5 font-sans'>Terms of Service</li>
                    <li className='mt-5 font-sans'>Privacy Policy</li>
                    <li className='mt-5 font-sans'>Cookie Policy</li>
                </ul>
            </div>
        </div>


        <div className='lg:flex justify-end gap-3 pt-20 mr-20 md:block hidden'>
                <img className='w-5 h-5' src={youtube} alt=''/>
                <img className='w-5 h-5' src={linkedin} alt=''/>
                <img className='w-5 h-5' src={vector} alt=''/>
                <img className='w-5 h-5' src={facebook} alt=''/>
                <img className='w-5 h-5' src={twitter} alt=''/>
            </div>

        <div className='flex ml-5 font-sans pb-12 md:mt-0 mt-16'>
            <img  className=' sm:h-6' src={copy} alt=''/> <span className='font-sans ml-1 lg:text-md text-md'>2024 Coursemigo Inc. All rights reserved.</span>
                 <div className='w-9/12 mt-4 md:block hidden ml-3 h-0.5 bg-white'></div>
         </div>
    </div>
  )
}

export default Footer