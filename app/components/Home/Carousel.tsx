'use client'
import { carouselData, categories, Categories } from '@/app/data/HomeData'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";



const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onNext = () => {
        const lastIndex = currentIndex === carouselData.length - 1;
        const nextIndex = lastIndex ? 0 : currentIndex + 1;
        setCurrentIndex(nextIndex);
    }

    const onPrev = () => {
        const firstIndex = currentIndex === 0;
        const prevIndex = firstIndex ? carouselData.length - 1 : currentIndex - 1;
        setCurrentIndex(prevIndex);
    }

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    }

    let intervalId: any;

    const startInterval = () => {
        intervalId = setInterval(() => {
            const lastIndex = currentIndex === carouselData.length - 1;
            const nextIndex = lastIndex ? 0 : currentIndex + 1;
            setCurrentIndex(nextIndex);
        }, 3000);
    };

    useEffect(() => {
        startInterval();

        return () => {
            clearInterval(intervalId);
        };

    }, [currentIndex]);

    return (
        <div>
            <div className='flex h-[200px] md:h-[350px]  '>

                <div className='w-[20%] hidden md:block'>

                    <div className='flex    justify-end pr-[10px] border-r-2'>
                        <div className='flex  lg:mt-[20px] mt-[10px] lg:gap-[14px] gap-[8px] flex-col align-center lg:w-[80%] w-[95%]   '>
                            {categories.map((item: Categories) => (
                                <div className='flex justify-between'
                                    key={item.id}>
                                    <p className='text-[16px] font-semibold'>{item.name}</p>
                                    {item.subCategoriesCheck &&
                                        <p>{">"}</p>
                                    }
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* carousal */}
                <div className='flex md:w-[80%]  w-[100%]'>
                    <div className='w-[85%]  h-[90%] m-auto relative group '>

                        <Image priority src={carouselData[currentIndex].image} alt='img' className='w-full h-full absolute rounded-sm' />

                        {/* left arrow */}
                        <div onClick={onPrev} className='hidden group-hover:block absolute items-center justify-center cursor-pointer top-[50%] left-[5px] rounded-2xl p-[2px] bg-white/30'>
                            <FaAngleLeft color='black' size={24} />
                        </div>

                        {/* right arrow */}
                        <div onClick={onNext} className='hidden group-hover:block absolute items-center justify-center cursor-pointer top-[50%] right-[5px] rounded-2xl p-[2px] bg-white/30'>
                            <FaAngleRight color='black' size={24} />
                        </div>

                        {/* dots */}
                        <div className='absolute flex  left-[40%] md:left-[50%] bottom-0 '>
                            {carouselData.map((_, slideIndex) => (
                                <RxDotFilled key={slideIndex} onClick={() => { goToSlide(slideIndex) }} className='cursor-pointer' color={slideIndex === currentIndex ? 'red' : 'white'} size={16} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel


