import React from 'react'

const Hero = () => {
  return (
    <div className='bg-hero-bg h-[950px] flex '>
        <div className='w-full bg-white opacity-90 flex flex-col justify-center items-center pb-20 relative'>
            <span className='bg-green-600 w-[350px] h-[400px] absolute rounded-full blur-[130px] -z-10 left-[20%] '></span>
            <span className='bg-blue-600 w-[350px] h-[200px] absolute rounded-full blur-[120px] -z-10 right-[20%] '></span>

            <h2 className='text-7xl font-bold text-center'>
              Revolutionising Everyday <br /> Life with <span className="text-red-500">Dcatzoon</span>
            </h2>
            <p className='pt-10 text-2xl font-semibold'>
            Seamlessly connect, communicate, transact, and enjoy - all under one brand. 
          From social media to food delivery, <br /> payments to everyday tasks, we empower you 
          with the tools to thrive.
            </p>

            <button className='bg-black px-5 py-3 rounded-lg text-red-50 text-[20px] font-medium mt-8  '>Connect With Us</button>
        </div>  
    </div>
  )
}

export default Hero
