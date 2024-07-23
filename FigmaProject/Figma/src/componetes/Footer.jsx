import React from 'react'
import Location from '../assets/LOCATION.png'
import message from '../assets/MESSAGE.png'
import CALL from '../assets/CALL.png'

const Footer = () => {
    return (

        <>
            <div className='bg-slate-100'>
                <div className='xl:mx-[250px] flex justify-between flex-wrap xl:pb-16 max-sm:p-2 max-sm:pb-16'>
                    <div className='xl:pt-20 max-sm:pt-20 xl:w-[220px] max-sm:w-full'>
                        <h1 className='text-3xl font-bold'>Let's discuss your project</h1>

                        <div className='mt-14'>
                            <div className='mt-3'>
                                <img className='inline' src={CALL} alt="" />
                                <p className='inline xl:ms-5 text-gray-500'>+7624965951</p>
                            </div>

                            <div className='mt-3'>
                                <img className='inline' src={message} alt="" />
                                <p className='inline xl:ms-5 text-gray-500'>your@gmail.com</p>
                            </div>

                            <div className='mt-3'>
                                <img className='inline' src={Location} alt="" />
                                <p className='inline xl:ms-5 text-gray-500'>245 King Street, Touterie Victoria 8520 Australia</p>
                            </div>
                        </div>
                    </div>


                    <div className='xl:w-[500px] max-sm:mt-14 max-sm:w-full'>
                        <p className='text-gray-500 xl:pt-20'>i'm always open to discussing product</p>
                        <b className='text-lg'>design work or partnerships.</b> <br />

                        <div>
                            <input className="outline-none bg-slate-100 xl:mt-7 max-sm:mt-7" placeholder='Name*' type="text" name="" id="" />
                            <hr className='mt-2' />
                        </div>

                        <div className='xl:flex xl:justify-between xl:mt-4'>
                            <div className='xl:w-[240px] max-sm:mt-5'>
                                {/* 1 */}
                                <input className="outline-none bg-slate-100 xl:mt-7" placeholder='Email*' type="text" name="" id="" />
                                <hr className='mt-2' />
                            </div>

                            <div className='xl:w-[240px] max-sm:mt-5'>
                                {/* 2 */}
                                <input className="outline-none bg-slate-100 xl:mt-7" placeholder='Subject*' type="text" name="" id="" />
                                <hr className='mt-2' />
                            </div>
                        </div>

                        <div className='xl:mt-11 max-sm:mt-5'>
                            {/* <hr /> */}
                            <input className="outline-none bg-slate-100 " placeholder='' type="text" name="" id="" />
                            <hr className='mt-2' />
                        </div>

                        <div className='xl:mt-4 max-sm:mt-3'>
                            <button className='border-2 border-solid border-gray-500 p-1 px-6 rounded-lg'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='w-full h-12 bg-black'>

            </div>
        </>
    )
}

export default Footer
