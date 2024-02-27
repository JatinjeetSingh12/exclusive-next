'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ImageSale = () => {


  const saleTimeEnd = new Date('2024-03-31T00:00:00')

  const [timeRemaining, setTimeRemaing] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const currentTime = new Date();

    const difference = saleTimeEnd.getTime() - currentTime.getTime();

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));


      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      return { days, hours, minutes, seconds }
    }
    else {
      return { hours: 0, minutes: 0, seconds: 0 };
    }
  }


  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Run only on the client side
      const intervalId = setInterval(() => {
        setTimeRemaing (calculateTimeRemaining());
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [])

  const days = timeRemaining.days;
  const hours = timeRemaining.hours;
  const minutes = timeRemaining.minutes;
  const seconds = timeRemaining.seconds;


  return (
    <div className='flex items-center my-[50px] justify-center'>
      <div className='flex  bg-black w-[80%] rounded-sm h-[420px]'>

        <div className='w-[45%] pl-[50px]  pt-[50px] gap-6 h-full flex flex-col  '>
          <p className='text-[#00FF66] font-bold '>Categories</p>
          <div className='grid place-content-center '>
            <p className='text-white text-4xl font-bold self-center'>Enhance Your Music Experience</p>
          </div>
          <div className='flex   gap-[20px]'>
            <div className='flex flex-col bg-white text-black items-center text-[12px] font-bold justify-center w-[62px] h-[62px] rounded-full' >
              <p>{days}</p>
              <p>days</p>
            </div>
            <div className='flex flex-col bg-white text-black items-center text-[12px] font-bold justify-center w-[62px] h-[62px] rounded-full'>
              <p>{hours}</p>
              <p>Hours</p>
            </div>
            <div className='flex flex-col bg-white text-black items-center text-[12px] font-bold justify-center w-[62px] h-[62px] rounded-full'>
              <p>{minutes}</p>
              <p>Minutes</p>
            </div>
            <div className='flex flex-col bg-white text-black items-center text-[12px] font-bold justify-center w-[62px] h-[62px] rounded-full'>
              <p>{seconds}</p>
              <p>seconds</p>
            </div>
          </div>
          <Button className='bg-[#00FF66]   w-[25%] rounded-sm'>Buy Now</Button>
        </div>
        <div className='relative w-[55%] h-full  grid place-content-center'>
          <div className=' w-[300px] items-center justify-center h-[300px] blur-3xl rounded-full  bg-[#D9D9D9]'>

          </div>
          <Image alt='img' className='absolute left-[90px] top-[90px]  w-[400px] h-[270px]' src={require('@/public/products/jbl-speaker.png')} />

        </div>
      </div>
    </div>
  )
}

export default ImageSale