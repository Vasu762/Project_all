import React from 'react'
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
import image6 from '../assets/image6.png'
import left from '../assets/span.left_nav.png'
import right from '../assets/span.right_nav.png'

const Section3 = () => {
  return (
    <>

      <div className='bg-white mt-14'>
        <h1 className='text-center font-bold text-3xl'>Our Selected Projects</h1>
        <div>
          <p className='text-center text-slate-500 xl:mt-6 max-sm:mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nisi recusanda  Tempore nisi recusanda</p>
          <p className='text-center text-slate-500 max-sm:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nisi recusanda </p>
        </div>


        {/* image */}
        <div className='grid xl:grid-cols-2 max-sm:grid-cols-1 xl:px-60 max-sm:py-14 max-sm:p-3'>
          <div>
            <img className='xl:w-[500px] h-[400px] xl:mt-6 ' src={image1} alt="" />
          </div>
          <div>
            <img className='xl:w-[500px] h-[400px] xl:mt-6 max-sm:mt-3' src={image2} alt="" />
          </div>
          <div>
            <img className='xl:w-[500px] h-[400px] xl:mt-6 max-sm:mt-3' src={image3} alt="" />
          </div>
          <div>
            <img className='xl:w-[500px] h-[400px] xl:mt-6 max-sm:mt-3' src={image4} alt="" />
          </div>
          <div>
            <img className='xl:w-[500px] h-[400px] xl:mt-6 max-sm:mt-3' src={image5} alt="" />
          </div>
          <div>
            <img className='xl:w-[500px] h-[400px] xl:mt-6 max-sm:mt-3' src={image6} alt="" />
          </div>
        </div>
      </div>


      {/* <div className='bg-gray-100'>
        <div className=' xl:mx-[230px]'>
          <div className='flex justify-between xl:pt-[200px] max-sm:pt-[150px]'>
            <div className='max-sm:mx-2'>
              <img src={left} alt="" />
            </div>

            <div className='max-sm:mx-2'>
              <img src={right} alt="" />
            </div>
          </div>

          <div className=' xl:mx-[230px] max-sm:mt-16 max-sm:pb-14'>
            <p className='text-center xl:mt-16 xl:pb-16 xl:text-sm text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit aspernatur, omnis id necessitatibus veritatis iure eos fugiat atque porro non nemo impedit, quaerat soluta repellat, eum tempora sapiente animi error.</p>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Section3
