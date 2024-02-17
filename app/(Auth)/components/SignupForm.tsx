import Link from 'next/link'
import React from 'react'

const SignupForm = () => {
    return (
        <div className='flex flex-col  h-[550px] justify-center items-center'>
            <div className='flex flex-col w-[350px] '>

                <p className='text-[32px] font-bold'>
                    Create an account
                </p>
                <p className='self-start text-[14px] mt-[5px] mb-[10px]'>
                    Enter your details below
                </p>

                <input className='border-b-[1px] mt-[30px] border-black' placeholder='Name' />
                <input className='border-b-[1px] mt-[30px] border-black' placeholder='Email or Phone Number' />
                <input className='border-b-[1px] mt-[30px] border-black' placeholder='Password' />
                <div className='flex gap-2 flex-col items-center mt-[20px]'>
                    <div className='bg-red-500 flex w-[350px] text-white justify-center  py-[12px] rounded-md items-center '>
                        <p className='text-[14px] '>Create Account</p>
                    </div>
                    <div className='flex w-[350px] border-[1px] border-black justify-center py-[12px]   rounded-md items-center '>
                        <p className='text-[14px] '>Sign Up with google</p>
                    </div>
                </div>
                <p className='self-center mt-2'>Already have an account?  <Link href={'/login'}>
                 <span className='border-b-[1px] border-black'>Log in</span> </Link></p>
            </div>

        </div>
    )
}

export default SignupForm