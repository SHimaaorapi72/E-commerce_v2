import React, { useContext } from 'react'
import Title from './Title'
import { shopContext } from '../context/shopContext'

const CartTotal = () => {
    const {delivery_fee ,getCartAmount, currency } = useContext(shopContext)

    const subtotal = getCartAmount(); 

    let total = subtotal + Number(delivery_fee);
  return (
    <div className='w-full'>
                <div className='text-2xl'>
                    <Title text1={'CART'} text2={'TOTALS'} />
                </div>
                <div className='flex flex-col gap-2 mt-2 text-sm'>
                    <div className='flex justify-between'>
                        <p>subtotal</p>
                        <p>{currency+subtotal}.00</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <p>Shipping Fee</p>
                        <p>{currency+delivery_fee}.00</p>
                    </div>
                    <hr />
                    <div className='flex justify-between'>
                        <b>Total</b>
                        <b>{subtotal > 0 ? currency+total :currency+'0'}.00</b>
                    </div>

                </div>

            </div>
   
    
  )
}

export default CartTotal


