import { Products } from '@/app/data/HomeData'
import { Colors } from '@/app/styles/Colors'
import React from 'react'
import ProductCard from '../custom/ProductCard'
import { Button } from '@/components/ui/button'

const BestMonthProduct = () => {


    const monthProductData = Products.filter(item=>item.type=="month");

    return (
        <div className='w-full flex flex-col items-center mt-[20px] justify-center '>

            <div className='w-[92%]  md:w-[98%] lg:w-[91%]  '>

                <div className='flex items-center gap-[15px]'>
                    <div style={{ backgroundColor: Colors.red }} className='w-[20px] rounded-sm  h-[40px]'>
                    </div>
                    <p style={{ color: Colors.red }} className='font-bold'>This Month</p>
                </div>
                <div className='flex mt-[20px] justify-between'>
                    <p className='text-[26px] font-bold'>Best Selling Products</p>
                    <Button style={{ backgroundColor: Colors.red }} className='items-center justify-center'>View All</Button>
                </div>


                <div className='flex flex-wrap gap-[30px] lg:justify-normal justify-center items-center pl-[20px] m-auto'>
                    {monthProductData.map((item, index) => (
                        <div key={index} className='mt-[20px]'>
                            <ProductCard index={index} item={item} />
                        </div>
                    ))}
                </div>


            </div>



        </div>
    )
}

export default BestMonthProduct