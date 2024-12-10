import React from 'react'
import './About.css'
import testA from '../../assets/test-1.png'
import testB from '../../assets/test-2.png'
import testC from '../../assets/test-3.png'



const About = () => {
  return (
    <>
      <div className='about-img py-32'>
        <p className='text text-xl font-bold'>Our Ambition</p>
      <h1 className='md:text-5xl text-4xl mt-2 font-bold leading-snug'><span className=' bg-sky-300'>Empo</span>wering individuals <br/> globally</h1>
          <button className='lg:mt-10 mt-10 md:py-5 md:px-12 px-8 py-3 text-black bg-white font-sans font-bold rounded-md text-md'>Stories from Our Learners</button>
      </div>

      <div className='w-full mt-20'>
      <h1 className='md:text-5xl text-4xl text-center font-bold'><span className=' bg-sky-200'>Abo</span>ut Us</h1>
      <p className='about md:text-2xl text-md font-normal text-center mt-5 leading-10'>Coursemigo offers affordable, unlimited access to diverse <br/> courses through a subscription model, enabling users to explore <br/> various subjects, share resources with family, and enjoy flexible,<br/> high-quality online education.</p>
      </div>

      <div className=' testimonial w-full mt-20'>
          <div className='flex  md:items-start items-center md:flex-row flex-col gap-5 py-10 '>
            <img src={testA} alt="" className='md:w-2/5 w-3/4 h-80' />
            <img src={testB} alt="" className='md:w-2/5 w-3/4 h-80' />
            <img src={testC}alt="" className='md:w-2/5 w-3/4 h-80'/>
          </div>
      </div>

      <div className=''>
      <h1 className='md:text-5xl text-4xl text-center mt-24 font-bold'>Our  <span className=' bg-sky-200'>Goa</span>ls</h1>
      <div className=' mt-10 goal'>
      <p className='test md:text-2xl text-md font-normal text-center mt-2 md:leading-10 leading-8'>At Coursemigo, we believe that education has the power to change lives. By <br/> providing accessible and high-quality learning opportunities, we aim to empower<br/>  individuals across the globe to reach their full potential. Whether it's advancing <br/> careers, discovering new passions, or simply gaining knowledge, our mission is <br/> to make learning a force for positive change—serving communities, bridging <br/> gaps, and creating opportunities for everyone, everywhere.</p>
      </div>

      <p className=' blue text-sky-400 py-10  pb-20 text-center font-bold md:text-2xl text-lg'>Advancing Global Progress Through Learning</p>
      
      <div className=' journey w-fullmt-4'>
        <h1 className='text-center py-16 text-white md:text-5xl text-4xl font-bold'>Our Journey</h1>
        <p className=' text-white md:text-2xl text-md font-normal text-center pb-20 md:leading-10 leading-8'>The traditional pay-per-course model can be expensive and restrictive for <br/> learners eager to explore various topics. Coursemigo solves this by offering <br/> a subscription model that grants unlimited access to a wide range of <br/> courses. This makes education more affordable and encourages users to <br/> explore multiple subjects while sharing resources with family, enhancing <br/> accessibility and flexibility in online learning.</p>
      </div>


      <div>
      <p className=' blue text-sky-400 py-20 text-center font-bold md:text-2xl text-lg'>Join our global community and start learning today!</p>
      </div>
      </div>
    </>
  )
}

export default About