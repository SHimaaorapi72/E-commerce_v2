import React from 'react'
import { assets } from './../assets/assets';

const Footer = () => {
  return (
    <>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img className='w-32 mb-4' src={assets.logo} alt="logo" />
            <p className='text-sm text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.</p>
        </div>
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <p className='text-sm text-gray-500 mb-1'>Home</p>
            <p className='text-sm text-gray-500 mb-1'>About us</p>
            <p className='text-sm text-gray-500 mb-1'>Delivery</p>
            <p className='text-sm text-gray-500 mb-1'>Privacy policy</p>
            
        </div>
        <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <p className='text-sm text-gray-500 mb-1'>+1-000-000-0000</p>
            <p className='text-sm text-gray-500 mb-1'>greatstackdev@gmail.com</p>
            <p className='text-sm text-gray-500 mb-1'>Instagram</p>
        </div>
      
    </div>
    <hr />
    <p className="py-5 text-sm text-center">Copyright 2024@ greatstack.dev - All Right Reserved.</p> 
    </>
    
  )
}

export default Footer
