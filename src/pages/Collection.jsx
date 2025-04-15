import React, { useContext, useEffect, useState } from 'react'
import { shopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collection = () => {
  const { products ,search , showSearch } = useContext(shopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [collection, setCollection] = useState([])
  const [category, setCategory] = useState([])
  const [sortPrice, setSortPrice] = useState('relavent')
  const [subCategory, setSubCategory] = useState([])


  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }

  }

  const applyFilter = () => {
    let productCopy = products.slice()

    if(search && showSearch){
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category))
    }
    setCollection(productCopy)

    if (subCategory.length > 0) {
      productCopy = productCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setCollection(productCopy)

    

  }

  const sortProducts = () => {

    let cpyProducts = products.slice()
    if (sortPrice === 'low-high') {
      cpyProducts.sort((a, b) => a.price - b.price);
    }

    if (sortPrice === 'high-low') {
      cpyProducts.sort((a, b) => b.price - a.price);
    }
    setCollection(cpyProducts);
  }

  useEffect(() => {

    applyFilter()
    

  }, [subCategory, category ,search , showSearch])

  useEffect(() => {

     sortProducts()
    

  }, [sortPrice])




  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* filter options */}
      <div className='min-w-60'>
        <p onClick={() => { setShowFilter(!showFilter) }} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="dropdown_icon" />
        </p>


        {/* category filter */}
        <div className={`${showFilter ? 'block' : 'hidden'} sm:block border border-gray-300 pl-5 pt-3 mt-6 py-2`}>

          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm text-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory} />Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'} onChange={toggleCategory} />kids
            </p>
          </div>

        </div>
        {/* Type filter */}

        <div className={`${showFilter ? 'block' : 'hidden'} sm:block border border-gray-300 pl-5 pt-3 mt-6 py-2`}>

          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm text-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'} onChange={toggleSubCategory} />Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory} />Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory} />Winterwear
            </p>
          </div>

        </div>
      </div>

      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-3'>
          <Title text1={'ALL'} text2={'COLLECTIONS'} />

          <form class="max-w-sm">
            <select onChange={(e) => (setSortPrice(e.target.value))} id="type" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-md block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value="relavent" selected>Sort by:Relavent</option>
              <option value="low-high">Sort by:Low to High</option>
              <option value="high-low">Sort by:High to Low</option>

            </select>
          </form>


        </div>


        {/* collection rendering */}
        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {collection.map((item, index) => (
            <ProductItem index={index} id={item._id} img={item.image} name={item.name} price={item.price} />
          ))}

        </div>



      </div>
    </div>

  )
}

export default Collection
