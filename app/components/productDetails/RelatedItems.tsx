import { Colors } from '@/app/styles/Colors'
import React from 'react'
import ProductCard from '../custom/ProductCard'
import { Button } from '@/components/ui/button'
import { Products } from '@/app/data/HomeData'

const RelatedItems = () => {

    const monthProductData = Products.filter(item=>item.type=="month");


    return (
        <div className='w-full   mb-[50px] mt-[20px] flex flex-col   '>

            <div className=''>

                <div className='flex  items-center gap-[15px]'>
                    <div style={{ backgroundColor: Colors.red }} className='w-[20px] rounded-sm  h-[40px]'>
                    </div>
                    <p style={{ color: Colors.red }} className='font-bold flex '>Related Items</p>
                </div>


                <div className='flex mx-[30px] flex-wrap gap-[30px] items-center pl-[20px] m-auto'>
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

export default RelatedItems