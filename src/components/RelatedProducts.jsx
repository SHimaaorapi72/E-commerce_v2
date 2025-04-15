import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const RelatedProducts = ({category , subcategory}) => {

    const {products} = useContext(shopContext)
    const [relatedProducts, setRelatedProducts] = useState([])


    useEffect(() => {
        if(products.length > 0){
            let productCopy = products.slice();

            productCopy = productCopy.filter((item)=> category === item.category );
            productCopy = productCopy.filter((item)=> subcategory === item.subCategory);
            
            setRelatedProducts(productCopy.slice(0,5))
            console.log(productCopy.slice(0,5))
        }
    }, [products, category, subcategory]);

  return (
    <div className='grid grid-cols-2 sm:cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3'>
    {relatedProducts.map((item , index) =>(
      <ProductItem key={index} id={item._id} name={item.name} img={item.image} price={item.price} />
    ))}

  </div>
  )
}

export default RelatedProducts
