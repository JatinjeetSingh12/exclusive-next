import { ExploreProductsData } from '@/app/data/HomeData'
import { Colors } from '@/app/styles/Colors'
import { Button } from '@/components/ui/button'
import React from 'react'
import ProductCard from '../custom/productCard'

const ExploreProducts = () => {
    return (
        <div className='w-full flex flex-col items-center justify-center '>

            <div className='w-[85%] '>

                <div className='flex items-center gap-[15px]'>
                    <div style={{ backgroundColor: Colors.red }} className='w-[20px] rounded-sm  h-[40px]'>
                    </div>
                    <p style={{ color: Colors.red }} className='font-bold'>Our Products</p>
                </div>

                <div className='flex mt-[20px]  '>
                    <p className='text-[26px] font-bold'>Explore Our Products</p>
                </div>


                <div className='flex flex-wrap gap-[30px] items-center pl-[20px] m-auto'>
                    {ExploreProductsData.map((item, index) => (
                        <div className='mt-[20px]'>
                            <ProductCard index={index} item={item} />
                        </div>
                    ))}
                </div>
                <div className='flex items-center justify-center my-[50px]'>
                    <Button style={{backgroundColor:Colors.red}}>View All Products</Button>
                </div>

            </div>



        </div>
    )
}

export default ExploreProducts