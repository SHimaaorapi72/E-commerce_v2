import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className=' pt-10 border-t text-center'>
      <div className='inline-flex gap-2 items-center mb-3 text-2xl'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-left'>
      <img className="w-full md:max-w-[480px]" src={assets.contact_img} alt=""/>
      <div className="flex flex-col justify-center items-start gap-6">
        <p className="font-semibold text-xl text-gray-600">Our Store</p>
        <p className=" text-gray-500 text-sm">54709 Willms Station<br/>Suite 350, 
        Washington, USA
        </p>
        <p className=" text-gray-500 text-sm">Tel: (415) 555-0132<br/>Email: admin@forever.com</p>
        <p className="font-semibold text-xl text-gray-600">Careers at Forever
          </p>
          <p className=" text-gray-500 text-sm">Learn more about our teams and job openings.</p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">Explore Jobs</button>
          </div>

      </div>
      
    </div>
    <NewsLetterBox />
    </div>
  )
}

export default Contact
