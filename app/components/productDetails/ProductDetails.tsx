'use client'
import { Colors } from '@/app/styles/Colors'
import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import Line from '../custom/Line';
import { Button } from '@/components/ui/button';
import { FaRegHeart } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import Image from 'next/image';
import { CiDeliveryTruck } from 'react-icons/ci';





const ProductDetails = () => {


    const [mainPhoto, setMainPhoto] = useState(require('@/public/products/controller-1.png'))


    return (
        <div className='flex w-full gap-[18px] my-[20px] justify-between h-[600px]'>

            {/* side images */}
            <div className='flex flex-col w-[15%] justify-start gap-[20px]'>

                <div onMouseEnter={() => { setMainPhoto(require('@/public/products/controller-1.png')) }} className='grid place-content-center h-[138px] w-[170px]' style={{ backgroundColor: Colors.productBg, borderColor: 'blue', borderWidth: mainPhoto === require('@/public/products/controller-1.png') ? 'thin' : 0 }}>
                    <Image src={require('@/public/products/controller-1.png')} width={125} height={125} alt='alt' />
                </div>

                <div onMouseEnter={() => { setMainPhoto(require('@/public/products/controller-2.png')) }} className='grid place-content-center h-[138px] w-[170px]' style={{ backgroundColor: Colors.productBg,  borderColor: 'blue',borderWidth: mainPhoto === require('@/public/products/controller-2.png') ? 'thin' : 0 }}>
                    <Image src={require('@/public/products/controller-2.png')} alt='alt' />
                </div>
                <div onMouseEnter={() => { setMainPhoto(require('@/public/products/controller-3.png')) }} className='grid place-content-center h-[138px] w-[170px]' style={{ backgroundColor: Colors.productBg, borderColor: 'blue', borderWidth: mainPhoto === require('@/public/products/controller-3.png') ? 'thin' : 0 }}>
                    <Image src={require('@/public/products/controller-3.png')} alt='alt' />

                </div>
                <div onMouseEnter={() => { setMainPhoto(require('@/public/products/controller-4.png')) }} className='grid place-content-center h-[138px] w-[170px]' style={{ backgroundColor: Colors.productBg, borderColor: 'blue', borderWidth: mainPhoto === require('@/public/products/controller-4.png') ? 'thin' : 0 }}>
                    <Image src={require('@/public/products/controller-4.png')} alt='alt' />
                </div>
            </div>


            {/* center image */}
            <div style={{ backgroundColor: Colors.productBg }} className='grid place-content-center w-[45%] h-full' >
                <Image className='w-[400px]' height={300} src={mainPhoto} alt='alt' />
            </div>



            {/* details */}
            <div className='w-[30%] flex flex-col gap-[10px] '>

                <p className='font-bold text-[20px]'>Havice HV G-92 Gamepad</p>

                <div className='flex items-center gap-[10px] '>
                    <div className='flex items-center gap-1'>
                        {Array.from({ length: 5 }).map(() => (
                            <FaStar color='#FFAD33' />
                        ))}
                    </div>
                    <p className='text-gray-400'>(150 reviews)  {' | '}  </p>
                    <p className='text-green-400'>In Stock</p>

                </div>

                <p className='text-[20px]'>$192.00</p>

                <p className='pr-[15px]'>PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.</p>

                <Line />

                <div className='flex items-center gap-[12px]'>
                    <p className='text-[20px]'>Colours:</p>
                    <div className="w-[15px] h-[15px] rounded-full bg-red-400"></div>
                    <div className="w-[15px] h-[15px] rounded-full bg-blue-400 "></div>
                </div>

                <div className='flex items-center gap-[16px]'>
                    <p className='text-[20px]'>Size:</p>

                    <div className='flex gap-[10px]'>
                        <div className='border-[2px] rounded-md  border-black grid place-content-center w-[35px] h-[35px]'>
                            <p>XL</p>
                        </div>
                        <div className='border-[2px] rounded-md border-black grid place-content-center w-[35px] h-[35px]'>
                            <p>X</p>
                        </div>
                        <div className='border-[2px] rounded-md border-black grid place-content-center w-[35px] h-[35px]'>
                            <p>L</p>
                        </div>
                        <div className='border-[2px] rounded-md border-black grid place-content-center w-[35px] h-[35px]'>
                            <p>M</p>
                        </div>
                    </div>

                </div>

                <div className='flex items-center justify-around '>


                    {/* <div className='flex h-[44px]  rounded-md mt-2  justify-around '>
                        <div className='border-gray-400 rounded-l-md flex items-center border-[1px] px-[20px] '>
                            <p className='text-3xl'>-</p>
                        </div>
                        <div className='border-y-[1px] flex items-center px-[20px] border-gray-400'>
                            <p className='font-bold text-[22px]'>
                                0
                            </p>
                        </div>
                        <div style={{ backgroundColor: Colors.red }} className='grid place-content-center rounded-r-md text-2xl text-white  px-[20px]'><p>+</p></div>
                    </div>
                    <div className='flex  flex-row items-center mt-[10px]  '>
                        <Button className='w-[135px] h-[44px]' style={{ backgroundColor: Colors.red }} >Buy Now</Button>
                    </div>
                    <div className='border-2  mt-[10px] p-[10px] rounded-md'>
                        <FaRegHeart size={20} />
                    </div> */}


                </div>

                <div className='flex mt-[10px] rounded-md flex-col border-[1px] border-gray-400 '>
                    <div className='flex items-center gap-[10px] p-[16px]'>
                        <CiDeliveryTruck size={34} />
                        <div>
                            <p className='font-bold'>Free Delivery</p>
                            <p className="underline">Enter your postal code for Delivery Availability</p>
                        </div>
                    </div>
                    <Line />
                    <div className='flex gap-[10px] p-[16px] items-center'>
                        <GrPowerReset size={24} />
                        <div>
                            <p>Return Delivery</p>
                            <p className="underline">Free 30 Days Delivery Returns.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ProductDetails