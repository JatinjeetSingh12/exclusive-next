import React from 'react'

const Footer = () => {
    return (
        <div className='h-[300px] w-full  bg-black'>
            <div className='flex flex-col items-center justify-center h-full '>

                <div className='flex w-[85%]   my-[30px] h-[90%]   justify-around '>
                    <div className='text-white min-w-[250px] max-w-[250px] '>
                        <p className='text-[25px]'>Exclusive</p>
                        <div className='flex flex-col gap-[10px] mt-[10px]'>
                        <p >Subscribe</p>
                        <p>Get 10% off your first order</p>
                        </div>
                    </div>

                    <div className='text-white  min-w-[250px] max-w-[250px]'>
                        <p className='text-[25px]'>Support</p>
                        <div className='flex flex-col gap-[10px] mt-[10px]'>
                        <p>Suite 894 392 Alline Spur, Forestfort, MA 84442-0796</p>
                        <p>exclusive@gmail.com</p>
                        <p>+88015-88888-9999</p>
                        </div>
                    </div>
                    <div className='text-white min-w-[250px] max-w-[250px]'>
                        <p className='text-[25px]'>My Account</p>
                        <div className='flex flex-col gap-[10px] mt-[10px]'>
                        <p>Login/Register</p>
                        <p>Cart</p>
                        <p>Whislist</p>
                        <p>Shop</p>
                        </div>
                    </div>
                    <div className='text-white min-w-[250px] max-w-[250px]'>
                        <p className='text-[25px]'>Quick Link</p>
                        <div className='flex flex-col gap-[10px] mt-[10px]'>
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>FAQ</p>
                        <p>Contract</p>
                        </div>
                    </div>
                    <div className='text-white min-w-[250px] max-w-[250px]'>
                        <p className='text-[25px]'>Download App</p>
                        <div className='flex flex-col gap-[10px] mt-[10px]'>
                        <p>Save $3 with  App New USER Only</p>
                        </div>
                    </div>

                </div>
                <div className='flex w-full py-[20px] items-center justify-center border-t-[0.5px] border-gray-600 text-white h-[10%] '>
                    <p className='text-gray-300'>Copyright</p>
                </div>
            </div>

        </div>
    )
}

export default Footer