import { Colors } from '@/app/styles/Colors'
import React, { FC } from 'react'
import { FaRegHeart, FaStar } from 'react-icons/fa'
import Image from 'next/image'
import { IoMdEye } from 'react-icons/io'
import { ProductCard } from '@/app/data/HomeData'
import Link from 'next/link'


type Props = {
    item:ProductCard;
    index:number;
}

const ProductCard:FC<Props> = ({index,item}) => {
    return (
        <div  key={index} className="cursor-pointer  relative   group max-w-[250px]  min-w-[250px]">
            <div style={{ backgroundColor: Colors.productBg }} className='flex flex-col rounded-md items-center justify-center w-full max-h-[270px] min-h-[270px] relative'>
                <Image className='transition ease-in-out group-hover:translate-y-[-20px] w-[170px] h-[170px]' src={item.image} alt='img' />
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
                                <Link href={{href:'/product-details/[id]_[type]'}} as={`/product-details/${item?.slug}_${item?.type}`}>
                                <div  className='p-[7px] bg-white rounded-2xl grid place-self-center'>
                                    <IoMdEye className='cursor-pointer' color='black' size={20} />
                                </div>
                                </Link>
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
        </div>
    )
}

export default ProductCard