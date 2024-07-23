import React from 'react'
import SVD1 from '../assets/SVG1.png'
import SVD2 from '../assets/SVG2.png'
import SVD3 from '../assets/SVG3.png'
import SVD4 from '../assets/SVG4.png'

const Section2 = () => {
  return (
    <div className='bg-gray-100'>

      <div className='max-sm:mt-10 pb-8'>
        <h1 className='font-semibold text-3xl text-center xl:pt-7 max-sm:pt-14'>My Awesome Service</h1>
        <p className='text-center xl:mt-7 max-sm:mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error doloremque similique repellendus atque </p>
        <p className='text-center xl:mt-1 max-sm:hidden '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde error </p>
      </div>

      <div className='grid xl:grid-cols-4 max-sm:grid-cols-1 xl:container xl:px-[320px] xl:pb-10 max-sm:pb-6'>
        <div className='xl:h-[200px] xl:w-[200px] max-sm:h-[130px] max-sm:m-2 bg-white xl:px-7 xl:pt-7 max-sm:py-7 max-sm:ps-4 '>
          <img className='xl:h-12 xl:w-12 max-sm:h-10 max-sm:w-10 ' src={SVD1} alt="" />
          <h2 className='font-semibold xl:mt-5 max-sm:mt-2'>UI/UX Design</h2>
        </div>

        <div className='h-[200px] xl:w-[200px] max-sm:h-[130px] bg-white xl:px-7 xl:pt-7 max-sm:py-7 max-sm:ps-4 max-sm:m-2'>
          <img className='xl:h-12 xl:w-12 max-sm:h-10 max-sm:w-10' src={SVD2} alt="" />
          <h2 className='font-semibold xl:mt-5 max-sm:mt-2'>Graphic Design</h2>
        </div>

        <div className='h-[200px] xl:w-[200px] max-sm:h-[130px] bg-white xl:px-7 xl:pt-7 max-sm:py-7 max-sm:ps-4 max-sm:m-2'>
          <img className='xl:h-12 xl:w-12 max-sm:h-10 max-sm:w-10' src={SVD3} alt="" />
          <h2 className='font-semibold xl:mt-5 max-sm:mt-2'>Product Design</h2>
        </div>

        <div className='h-[200px] xl:w-[200px] max-sm:h-[130px] bg-white xl:px-7 xl:pt-7 max-sm:py-7 max-sm:ps-4 max-sm:m-2'>
          <img className='xl:h-12 xl:w-12 max-sm:h-10 max-sm:w-10' src={SVD4} alt="" />
          <h2 className='font-semibold xl:mt-5 max-sm:mt-2'>Brand Identity</h2>
        </div>
      </div>
    </div>
  )
}

export default Section2
