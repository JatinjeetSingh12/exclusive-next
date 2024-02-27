import { categoriesData } from '@/app/data/HomeData'
import { Colors } from '@/app/styles/Colors'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import Image from 'next/image'
import React from 'react'

const Categories = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center '>

            <div className='w-[85%]  '>

                <div className='flex items-center gap-[15px]'>
                    <div style={{ backgroundColor: Colors.red }} className='w-[20px] rounded-sm  h-[40px]'>
                    </div>
                    <p style={{ color: Colors.red }} className='font-bold'>Categories</p>
                </div>
                <div className='flex mt-[20px]'>
                    <p className='text-[26px] font-bold'>Browse By Category</p>
                </div>

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent   className='px-[15px] py-[20px] '>
                        {categoriesData.map((item, index) => (
                            <CarouselItem key={index} className=" rounded-md cursor-pointer transition ease-in-out hover:scale-110  flex border-gray-500  items-center justify-center border-[1px]   lg:basis-1/6 mx-[15px] group max-w-[170px] min-w-[170px] h-[145px]">
                                <div className='flex flex-col gap-2   rounded-md items-center justify-center'>
                                    <Image src={item.img} alt='img'  />
                                    <p>{item.name}</p>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <div className='absolute top-[-23px] right-[100px] '>
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>




            </div>



        </div>
    )
}

export default Categories