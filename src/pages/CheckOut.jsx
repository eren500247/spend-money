import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const CheckOut = () => {
  const {cartList} = useSelector((state)=>state.cartSlice)
  const totalPrice = cartList.reduce((total,item)=> total + item.price,0)
  if(cartList.length > 0){
    return (
      <div>
       <div className='max-w-[900px] mx-auto mt-5 px-2 py-2 overflow-auto shadow-xl rounded'>
          <h1 className='text-3xl font-bold leading-10 mb-5'>Vocher</h1>
          {
            cartList.length <= 0 ? (
              <p>There is no cart</p>
            ) : (
              <ul>
                {
                  cartList.map((data)=>(
                    <li key={data.id}>
                      <div className='flex justify-between text-gray-500'>
                        <p>{data.title}</p>
                        <p>$ {data.price.toFixed(2)}</p>
                      </div>
                    </li>
                  ))
                }
              </ul>
            )
          }
          <div className='float-right my-3'>
            <p className='text-lg font-bold'>Total Price : $ {totalPrice.toFixed(2)}</p>
          </div>
          <div className='clear-right float-right'>
            <button className='bg-indigo-600 text-white px-2 py-1 w-32 rounded-md' type='button' onClick={()=>print()}>Print</button>
          </div>
       </div>
      </div>
    )
  }else{
   return <Navigate to="/"/>
  }
}

export default CheckOut