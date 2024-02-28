import { TodaySaleData } from '@/app/data/HomeData';
import Image from 'next/image';
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Colors } from '@/app/styles/Colors';
import { FaStar } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import { Button } from "@/components/ui/button"





const TodaySale = () => {
    return (
        <div className='w-full flex flex-col items-end mt-[20px] justify-center '>

            <div className='w-[93%]'>

                <div className='flex items-center gap-[15px]'>
                    <div style={{ backgroundColor: Colors.red }} className='w-[20px] rounded-sm  h-[40px]'>
                    </div>
                    <p style={{ color: Colors.red }} className='font-bold'>Today's</p>
                </div>
                <div className='flex mt-[20px]'>
                    <p className='text-[26px] font-bold'>Flash Sales</p>
                </div>



                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full "
                >
                    <CarouselContent className='mt-[20px]'>
                        {TodaySaleData.map((item, index) => (
                            <CarouselItem key={index} className="cursor-pointer md:basis-1/2 relative lg:basis-1/4 gap-[20px] group max-w-[300px] min-w-[300px]">
                                <div style={{ backgroundColor: Colors.productBg }} className='flex flex-col rounded-md items-center justify-center w-full max-h-[270px] min-h-[270px] relative'>
                                    <Image className='transition ease-in-out group-hover:translate-y-[-20px] w-[170px] h-[170px]' src={item.img} alt='img' />
                                    <div className='absolute top-0 left-0 right-0 bottom-0 '>
                                        <div className=' h-full w-full flex flex-col justify-between'>

                                            <div className='flex  justify-between'>
                                                <div style={{ backgroundColor: Colors.red }} className='flex items-center justify-center mt-[10px] ml-[10px]  rounded-sm  w-[55px] h-[26px] '>
                                                    <p className='text-white text-[10px] self-center'>-40%</p>
                                                </div>
                                                <div className='flex flex-col mt-[10px] mr-[10px]  gap-[10px]'>
                                                    <div className='p-[7px] bg-white rounded-2xl grid place-self-center'>
                                                        <FaRegHeart className='cursor-pointer' color='black' size={18} />
                                                    </div>
                                                    <div className='p-[7px] bg-white rounded-2xl grid place-self-center'>
                                                        <IoMdEye className='cursor-pointer' color='black' size={20} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='hidden group-hover:block '>

                                                <div className='py-[5px] grid place-content-center rounded-b-md   bg-black  items-center  justify-center w-full'>
                                                    <p className='text-white text-lg'>Add to Cart</p>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <div className='flex flex-col gap-2'>

                                    <p className='font-bold mt-[10px]'>{item.name}</p>
                                    <div className='flex gap-2'>
                                        <p className='flex gap-[5px] ' style={{ color: Colors.red }}>$120</p>
                                        <p className='line-through text-gray-500'>$160</p>
                                    </div>
                                    <div className='flex gap-[5px] '>
                                        {Array.from({ length: 5 }).map(() => (
                                            <FaStar color='#FFAD33' />
                                        ))}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className='absolute top-[-23px] right-[100px] '>
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>

                <div className='flex items-center justify-center mt-[40px]'>
                    <Button style={{ backgroundColor: Colors.red }} >View All Products</Button>
                </div>



            </div>

        </div>
    )
}

export default TodaySale



