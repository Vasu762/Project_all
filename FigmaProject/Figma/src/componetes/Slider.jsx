import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import image5 from '../assets/image5.png'
// import v1 from '../assets/v1.jpeg'
// import v2 from '../assets/v2.jpeg'
// import v3 from '../assets/v3.jpeg'
// import v4 from '../assets/v4.jpeg'
// import v5 from '../assets/v5.jpeg'

const Slider = () => {
    const slides = [
        {
            url: image1,
        },
        {
            url: image2,
        },
        {
            url: image3,
        },

        {
            url: image4,
        },
        {
            url: image5,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    return (
        <>
            <div className='bg-slate-50'>
                <div className='max-w-[1400px] max-sm:h-[380px] w-full m-auto py-10 px-4 relative group'>
                    <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className='w-full xl:h-[500px] max-sm:h-full rounded-2xl bg-center bg-contain bg-no-repeat duration-500'
                    ></div>
                    {/* Left Arrow */}
                    <div className='xl:ms-48 max-sm:top-[50%] xl:top-[50%]  absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>
                    {/* Right Arrow */}
                    <div className='xl:me-48  absolute max-sm:top-[50%] xl:top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>
                    <div className='flex top-4 justify-center py-2'>
                        {slides.map((slide, slideIndex) => (
                            <div
                                key={slideIndex}
                                onClick={() => goToSlide(slideIndex)}
                                className='text-2xl cursor-pointer'
                            >
                                <RxDotFilled />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='xl:mx-[230px] xl:pb-20 max-sm:pb-16 xl:w-[600px] xl:ms-[470px]'>
                    <p className='text-center   xl:text-sm text-slate-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit aspernatur, omnis id necessitatibus veritatis iure eos fugiat atque porro non nemo impedit, quaerat soluta repellat, eum tempora sapiente animi error.</p>
                </div>
            </div>
        </>
    )
}
export default Slider
