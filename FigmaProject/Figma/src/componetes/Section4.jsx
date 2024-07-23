import React from 'react'
import arrow1 from '../assets/arrow1.png'
import arrow2 from '../assets/arrow2.png'

const Section4 = () => {
  return (
    <div className='bg-white pb-12'>
      <div className='xl:mx-[200px] max-sm:pt-12  max-sm:px-1'>
        <h1 className='text-center text-2xl font-bold xl:pt-14'>Lastest Blogs</h1>
        <p className='text-center xl:ps-[170px] xl:pe-[170px] mt-3 text-sm text-gray-500'> Nesciunt quis natus dolore excepturi, obcaecati tempore laudantium, iure minus illo sapiente esse, quibusdam atque laboriosam ullam ea reiciendis eos inventore voluptate.</p>
      </div>

      <div className='grid xl:grid-cols-3 max-sm:grid-cols-2 xl:mx-[250px] xl:mt-12 xl:gap-4 max-sm:mt-12 max-sm:gap-4 max-sm:px-2'>

        <div className='bg-Blog1 bg-contain bg-no-repeat '>
          <h6 className='text-white xl:ms-10 xl:mt-[230px] max-sm:ms-4 max-sm:mt-[120px]'>july 01,2021</h6>
          <h1 className='font-bold  xl:text-xl text-white xl:ms-10 max-sm:text-sm max-sm:ms-4'>World's most famous </h1>
          <h1 className='font-bold xl:text-xl text-white xl:ms-10 max-sm:text-sm max-sm:ms-4 '>developers and designers</h1>
        </div>

        <div className='bg-Blog2 bg-contain bg-no-repeat'>
          <h6 className='text-white xl:ms-10 xl:mt-[230px] max-sm:ms-4 max-sm:mt-[120px]'>june 22,2021</h6>
          <h1 className='font-bold  xl:text-lg text-white xl:ms-10 max-sm:text-sm max-sm:ms-4'>Learn About Wireframes Before </h1>
          <h1 className='font-bold xl:text-xl text-white xl:ms-10 max-sm:text-sm max-sm:ms-4 max-sm:hidden'>Hiring Web Developer</h1>
        </div>

        <div className='bg-Blog3 bg-contain bg-no-repeat  max-sm:hidden'>
          <h6 className='text-white xl:ms-10 xl:mt-[230px] max-sm:ms-4 max-sm:mt-[120px]'>Aprile 07,2021</h6>
          <h1 className='font-bold  xl:text-xl text-white xl:ms-10 max-sm:text-sm max-sm:ms-4'>7 Ways to Optimize Your</h1>
          <h1 className='font-bold xl:text-xl text-white xl:ms-10 max-sm:text-sm max-sm:ms-4 '>WordPress Website</h1>
        </div>

      </div>
      <div className='xl:mx-[200px] flex justify-center mt-4 gap-x-7'>
        <div className='mt-2'>
          <img  src={arrow1} alt="" />
        </div>

        <div >
          <h4 className='text-gray-500'>1.</h4>
        </div>

        <div>
          <h4 className='text-gray-500'>2.</h4>
        </div>

        <div>
          <h4 className='text-gray-500'>3.</h4>
        </div>

        <div>
          <h4 className='text-gray-500'>4.</h4>
        </div>

        <div className='mt-2'>
          <img src={arrow2} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Section4
