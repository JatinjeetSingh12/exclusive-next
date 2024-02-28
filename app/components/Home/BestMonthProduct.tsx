import { monthProduct } from '@/app/data/HomeData'
import { Colors } from '@/app/styles/Colors'
import React from 'react'
import ProductCard from '../custom/ProductCard'
import { Button } from '@/components/ui/button'

const BestMonthProduct = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center '>

    <div className='w-[85%] '>

        <div className='flex items-center gap-[15px]'>
            <div style={{ backgroundColor: Colors.red }} className='w-[20px] rounded-sm  h-[40px]'>
            </div>
            <p style={{ color: Colors.red }} className='font-bold'>This Month</p>
        </div>
        <div className='flex mt-[20px] justify-between'>
            <p className='text-[26px] font-bold'>Best Selling Products</p>
            <Button style={{backgroundColor:Colors.red}} className='items-center justify-center'>View All</Button>
        </div>


        <div className='flex flex-wrap gap-[30px] items-center pl-[20px] m-auto'>
            {monthProduct.map((item,index)=>(
                <div className='mt-[20px]'>
                    <ProductCard index={index} item={item}  />
                </div>
            ))}
        </div>


    </div>



</div>
  )
}

export default BestMonthProduct