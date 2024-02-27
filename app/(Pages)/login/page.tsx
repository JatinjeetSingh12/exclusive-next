'use client'
import Image from 'next/image'
import React from 'react'
import LoginForm from '../../components/auth/LoginForm'

const login = () => {
  
  
  return (
    <div  className='flex my-[40px] '>
      <div className=' w-[50%]'>
        <Image className='h-[550px] ' alt='img' src={require('@/public/auth-phone.png')} />
      </div>
      <div className='w-[50%]'>
        <LoginForm />
      </div>
    </div>
  )
}

export default login