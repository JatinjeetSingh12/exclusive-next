import React from 'react'

const LoginForm = () => {
    return (
        <div className='flex flex-col  h-[550px] justify-center items-center'>
            <div className='flex flex-col w-[350px] '>

                <p className='text-[32px] font-bold'>
                    Log in to Exclusive
                </p>
                <p className='self-start text-[14px] mt-[5px] mb-[10px]'>
                    Enter your details below
                </p>

                <input className='border-b-[1px] mt-[30px] border-black' placeholder='Email or Phone Number' />
                <input className='border-b-[1px] mt-[30px] border-black' placeholder='Password' />
                <div className='flex items-center justify-between mt-[20px]'>
                    <div className='bg-red-500 text-white px-[35px] py-[12px] rounded-md items-center '>
                        <p className='text-[10px]'>Log in</p>
                    </div>

                    <p className='text-red-500'>Forget Password?</p>
                </div>
            </div>

        </div>
    )
}

export default LoginForm