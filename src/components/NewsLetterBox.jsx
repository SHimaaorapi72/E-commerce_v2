import React from 'react'

const NewsLetterBox = () => {

    const onSubmitHandler =(event)=>{
        event.preventDefault();

    }
  return (
    <div className='text-center'>
        <p className='text-gray-800 font-medium prata-regular text-2xl'>
        Subscribe now & get 20% off
        </p>
        <p className='text-gray-400 mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    
    <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center mx-auto gap-3 my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type="email" placeholder='Enter Your Email' required/>
        <button className='bg-black text-white text-xs py-4 px-10' type='submit'>SUBSCRIBE</button>

    </form>
    </div>
  )
}

export default NewsLetterBox
