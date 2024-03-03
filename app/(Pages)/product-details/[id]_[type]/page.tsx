'use client'

import ProductDetails from '@/app/components/productDetails/ProductDetails';
import RelatedItems from '@/app/components/productDetails/RelatedItems';
import { ProductCard, Products } from '@/app/data/HomeData';
import React, { useEffect, useState } from 'react'

type ParamsType = {
    slug: string;
    type: string;
}

const page = ({ params }: { params: ParamsType }) => { 

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='w-[85%] '>

                <p>Home{" > "}Details</p>

                <ProductDetails  />
                <RelatedItems />

            </div>
        </div>
    )
}

export default page