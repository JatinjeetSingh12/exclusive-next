'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { CiHeart } from 'react-icons/ci';
import { FaRegHeart, FaRegUser, FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCartOutline } from 'react-icons/io5';



const Navbar = () => {

    const pathname = usePathname()

    return (
        <div className='w-full'>

            <div className='bg-black text-white  h-[40px] md:h-[48px] flex items-center justify-center'>
                <Link href={'/'}>
                    <p className='text-[10px] text-center md:text-[14px]'>Summer Sale For All Swim Suits and Free Express Delivery - OFF 50%!</p>
                </Link>
            </div>


            <div className='flex px-[10px] justify-between  md:justify-around items-center pt-[20px] pb-[10px] border-b-2'>
                <p className='text-[20px] font-bold'>Exclusive</p>

                <div className='flex md:hidden'>
                    <GiHamburgerMenu size={24} />
                </div>

                <div className='hidden md:block'>

                    <div className='flex lg:justify-around lg:gap-12  md:gap-[16px]'>
                        <div className={pathname == '/' ? 'border-b-2 border-black' : 'text-black'}>
                            <Link href={'/'}>Home</Link>
                        </div>
                        <div className={pathname == '/contact' ? 'border-b-2 border-black' : 'text-black'}>
                            <Link href={'/contact'}>Contact</Link>
                        </div>
                        <div className={pathname == '/about' ? 'border-b-2 border-black' : 'text-black'}>
                            <Link href={'/about'}>About</Link>
                        </div>
                        <div className={pathname == '/signup' ? 'border-b-2 border-black' : 'text-black'}>
                            <Link href={'/signup'}>Sign Up</Link>
                        </div>

                    </div>
                </div>

                <div className='hidden md:block'>

                    <div className='flex   items-center justify-center gap-[16px]' >
                        <div className='hidden md:block'>
                            <div className='flex  items-center bg-neutral-100 p-2 rounded-sm'>
                                <input placeholder='What are you looking for?' className='  bg-neutral-100 outline-none text-[12px]' type="text" />
                                <FaSearch />
                            </div>

                        </div>
                        <div className='hidden md:block'>
                            <div className='flex items-center gap-[15px]'>
                                <FaRegHeart size={20} />
                                <IoCartOutline size={24} />
                                <FaRegUser size={18} />
                            </div>
                        </div>


                    </div>

                </div>


            </div>


        </div>
    )
}

export default Navbar 