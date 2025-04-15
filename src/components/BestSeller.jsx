/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/shopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const {products} =useContext(shopContext);
    
    const [bestseller, setBestSellerProducts] = useState([])
    

    useEffect(() => {

        const bestProducts =  products.filter((item)=> item.bestseller)

        setBestSellerProducts(bestProducts.slice(0,5))

        
    }, [])

  return (
    <div className='my-10'>
    <div className='text-center py-8 text-3xl'>
        <Title text1={"BEST "} text2={"SELLERS"} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>
    </div>

    {/* rendering products */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        
        {bestseller.map((item , index)=>(
            <ProductItem key={index} id={item._id} img={item.image} name={item.name} price={item.price}   />
        ))}
    </div>

</div>
  )
}

export default BestSeller
