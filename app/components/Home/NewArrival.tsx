import { Colors } from '@/app/styles/Colors'
import Image from 'next/image'
import React from 'react'

const NewArrival = () => {
    return (
        <div className='w-full  mb-[50px] flex flex-col items-center justify-center '>

            <div className='w-[85%] '>

                <div className='flex items-center gap-[15px]'>
                    <div style={{ backgroundColor: Colors.red }} className='w-[20px] rounded-sm  h-[40px]'>
                    </div>
                    <p style={{ color: Colors.red }} className='font-bold'>Featured</p>
                </div>

                <div className='flex mt-[20px]  '>
                    <p className='text-[26px] font-bold'>New Arrival</p>
                </div>


                <div className='flex mx-[10px] gap-[20px]  justify-between mt-[20px]'>
                    <div className='relative rounded-md cursor-pointer h-[550px] w-[570px] bg-black '>


                        <Image alt='alt' src={require('@/public/products/ps5.png')} className='w-full h-full ' />

                        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} className='absolute rounded-md flex  top-0 right-0 left-0 bottom-0 '>
                            <div className='h-full pl-[26px] pb-[40px] flex flex-col justify-end  text-white w-[50%]'>
                                <p className='text-[22px] font-bold'>PlayStation 5</p>
                                <p>Black and white version of the PS5 coming out on sale.</p>
                                <p className='font-bold underline'>Shop Now</p>
                            </div>
                            <div className='h-full w-[50%]'></div>
                        </div>

                    </div>

                    <div className='flex flex-col justify-between '>
                        <div className='relative w-[550px] cursor-pointer rounded-md h-[260px] bg-black'>
                            <Image src={require('@/public/products/women-collection.png')} alt='img' className='rounded-md w-full h-full' />

                            <div style={{ backgroundColor: 'rgba(0,0,0,0.3)' }} className='flex  absolute  top-0 right-0 left-0 bottom-0'>
                                <div className='flex justify-end text-white pl-[18px]  gap-[5px] pb-[30px]  flex-col w-[50%] '>

                                    <p className='font-bold text-[20px]'>Women's Collections</p>
                                    <p className=''>Featured woman collections that gives you another vibe.</p>
                                    <p className='underline font-bold'>Shop Now</p>
                                </div>
                                <div className='w-[50%]'></div>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div  className='w-[270px] h-[284px] cursor-pointer bg-black flex items-center relative justify-center'>
                                <div className='bg-[#D9D9D9] blur-3xl w-[100px] h-[100px]'></div>
                                <Image alt='img' src={require('@/public/products/three-speaker.png')} className='absolute w-[200px] h-[200px]' />
                                <div style={{ backgroundColor: 'rgba(0,0,0,0.1)' }} className='flex flex-col justify-end text-white pl-[20px] pb-[20px] absolute top-0 right-0 left-0 bottom-0 '>
                                    <p className='text-[24px] font-bold'>Speakers</p>
                                    <p className=''>Amazon wireless speakers</p>
                                    <p className='underline text-[18px]'>Shop Now</p>
                                </div>
                            </div>
                            <div className='w-[270px] h-[284px] cursor-pointer  bg-black flex items-center relative justify-center'>
                                <div className='bg-[#D9D9D9] blur-3xl w-[110px] h-[110px]'></div>
                                <Image alt='img' src={require('@/public/products/perfumr.png')} className='absolute w-[200px] h-[200px]' />
                                <div style={{ backgroundColor: 'rgba(0,0,0,0.1)' }} className='flex flex-col justify-end text-white pl-[20px] pb-[20px] absolute top-0 right-0 left-0 bottom-0 '>
                                    <p className='text-[24px] font-bold'>Perfume</p>
                                    <p className=''>GUCCI INTENSE OUD EDP</p>
                                    <p className='underline text-[18px]'>Shop Now</p>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default NewArrival