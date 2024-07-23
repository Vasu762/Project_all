import React from 'react'


const Header = () => {
  return (
    
    <div className='mt-[-30px] container'>
      <div className="bg-hero-pattern bg-cover xl:h-screen max-sm:h-[420px] bg-right bg-no-repeat   xl:px-[275px] max-sm:px-[10px]">
        <div className=''>
          <h1 className='xl:text-5xl xl:font-bold xl:relative  xl:top-[280px] max-sm:relative max-sm:top-[130px]  max-sm:font-bold  xl:w-[500px] max-sm:w-[300px] max-sm:text-2xl'> Building digital product , brands <span className='underline text-blue-700'>experience.</span></h1>
          <p className='xl:relative max-sm:top-[180px] xl:top-[310px] xl:w-[450px] max-sm:relative max-sm:w-[390px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quam adipisicing elit. Deserunt quam</p>
          <button className='xl:relative xl:mt-[330px] max-sm:relative max-sm:mt-[200px] border-2 border-solid border-gray-500 p-1 px-3 rounded-full'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Header
