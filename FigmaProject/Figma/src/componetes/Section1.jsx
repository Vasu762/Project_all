import React from 'react'
import image2 from '../assets/div.image.png'

const Section1 = () => {
  return (
    <div className='flex max-sm:flex-wrap max-sm:px-2'>
      <div className='max-sm:order-2'>
        <img src={image2} className='xl:w-[700px] max-sm:w-[100%] max-sm:h-[100%] max-sm:mt-10' alt="" />
      </div>
      <div className='max-sm:order-1'>
        <h1 className='font-bold text-2xl xl:w-[200px] xl:ms-[50px] xl:mt-[100px] max-sm:mt-[100px] max-sm:w-[200px]'>We Are Experts in our Filed.</h1>

        <p className='xl:ms-[50px] xl:mt-[20px] xl:w-[500px] text-gray-600 font-normal max-sm:mt-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, pariatur sunt architecto totam</p>

        <p className='xl:ms-[50px] xl:mt-[20px] xl:w-[500px] text-gray-600 font-light max-sm:mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste qui tempore aperiam repudiandae cupiditate odio mollitia voluptatum quos? Repellendus recusandae veritatis eos fugit velit tempore, veniam quibusdam autem itaque porro.</p>

        <button className='xl:ms-[50px] xl:mt-7 border-2 border-solid border-black p-2 px-3 rounded-full max-sm:mt-4'>Download cv</button>
      </div>
    </div>
  )
}

export default Section1
