import Image from 'next/image'
import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";




const CustomerService = () => {
    return (
        <div className='w-full flex mt-[20px] mb-[50px] flex-col items-center justify-center'>
            <div className='flex w-[85%] justify-evenly items-center '>


                <div className='flex flex-col gap-[10px] items-center justify-center'>
                    <div className='border-[10px] border-purple-400 flex items-center justify-center w-[80px] h-[80px] rounded-full  bg-black' >
                        <CiDeliveryTruck size={28} color='white' />
                    </div>
                    <p>FREE AND FAST DELIVERY</p>
                    <p>Free delivery for all orders over $140</p>
                </div>

                <div className='flex flex-col gap-[10px] items-center justify-center'>
                    <div className='border-[10px] flex items-center justify-center border-purple-400 w-[80px] h-[80px] rounded-full  bg-black' >
                        <TfiHeadphoneAlt size={26} color='white' />
                    </div>
                    <p>24/7 CUSTOMER SERVICE</p>
                    <p>Friendly 24/7 customer support </p>
                </div>

                <div className='flex flex-col gap-[10px] items-center justify-center'>
                    <div className='border-[10px] flex items-center justify-center border-purple-400 w-[80px] h-[80px] rounded-full  bg-black' >
                        <AiOutlineSafetyCertificate size={26} color='white' />
                    </div>
                    <p>MONEY BACK GUARANTEE</p>
                    <p>We return money within 30 days</p>
                </div>

            </div>
        </div>



    )
}

export default CustomerService