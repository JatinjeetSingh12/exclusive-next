import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import SignupForm from '../../components/auth/SignupForm'


const signup = () => {

    

    return (
        <div  className='flex my-[40px] '>
            <div className=' w-[50%]'>
                <Image className='h-[550px] ' alt='img' src={require('@/public/auth-phone.png')} />
            </div>
            <div className='w-[50%]'>
                <SignupForm />
            </div>
        </div>
    )
}

export default signup