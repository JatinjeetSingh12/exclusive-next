'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaSearch } from "react-icons/fa";


const Navbar = () => {

    const pathname = usePathname()

    return (
        <>
            <div className='bg-black text-white h-[40px] md:h-[48px] flex items-center justify-center'>
                <Link href={'/'}>
                <p className='text-[10px] md:text-[14px]'>Summer Sale For All Swim Suits and Free Express Delivery - OFF 50%!</p>
                </Link>
            </div>


            <div className='flex px-[100px] justify-between items-center pt-[20px] pb-[10px] border-b-2'>
                <p className='text-[20px] font-bold'>Exclusive</p>

                <div className='flex justify-evenly gap-12'>
                    <div className={pathname=='/'?'border-b-2 border-black':'text-black'}>
                    <Link href={'/'}>Home</Link>
                    </div>
                    <div className={pathname=='/contact'?'border-b-2 border-black':'text-black'}>
                    <Link href={'/contact'}>Contact</Link>
                    </div>
                    <div className={pathname=='/about'?'border-b-2 border-black':'text-black'}>
                    <Link href={'/about'}>About</Link>
                    </div>
                    <div className={pathname=='/signup'?'border-b-2 border-black':'text-black'}>
                    <Link href={'/signup'}>Sign Up</Link>
                    </div>
                </div>
                

                <div className='flex items-center bg-neutral-100 p-2 rounded-sm'> 
                        <input placeholder='What are you looking for?' className='bg-neutral-100 outline-none'   type="text" />
                        <FaSearch />                    
                </div>

            </div>

        </>
    )
}

export default Navbar 