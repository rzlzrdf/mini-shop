import React from 'react'

const ProductCard = (props) => {
  return (
    <div className='border border-solid border-slate-400 p-4 rounded-md text-center'>
        <img src={props.product.image} className='aspect-square w-full object-cover mb-4' />
        <h5 className='text-2xl font-bold text-center '>{props.product.title}</h5>
        <div className='text-xl font-bold text-red-500'>{props.product.price}</div>
        <button className='px-6 py-3 bg-green-500 border-0 text-white mt-8'>Go to Product</button>
    </div>
  )
}

export default ProductCard