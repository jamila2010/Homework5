import React from 'react'
import {UseHook} from '../hooks/UseHook'
import {useState} from 'react'

function Products() {
  const [api, setApi] =useState('http://localhost:3000/products')  
  const {data, error, pending}=UseHook(api)


  return (
    <div className='flex flex-wrap gap-[50px] justify-center items-center mt-[50px]  '>
      {error && <h2>Not Found</h2> }
      {pending &&<h2>Loading...</h2> }
      {data&& data.map((product)=>{
        return (
      <div className='flex flex-wrap'>
          <a href="#" className="group relative overflow-hidden shadow-2xs rounded-[8px] border border-gray-100 ">
  <button
    className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
  >
    <span className="sr-only">Wishlist</span>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    </svg>
  </button>

  <img
    src={product.image}
    alt=""
    className="h-[350px] w-[300px] object-cover transition duration-500 group-hover:scale-105 sm:h-72"
  />

  <div className="relative  bg-white p-6 w-[360px] ">
    <p className="text-gray-700">
     {product.price}$
      <span className="text-gray-400 line-through"> <br />{Math.floor(product.price*3)} $</span>
    </p>

    <h3 className="mt-1.5 text-lg font-medium text-gray-900">{product.name} </h3>

    <p className="mt-1.5 line-clamp-3 text-gray-700">
      {product.description}
    </p>

    <form className="mt-4 flex gap-4">
      <button
        className="block w-full rounded-sm bg-gray-100 px-4 py-3 text-sm font-medium text-gray-900 transition hover:scale-105"
      >
        Add to Cart
      </button>

      <button
        type="button"
        className="block w-full rounded-sm bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:scale-105"
      >
        Buy Now
      </button>
    </form>
  </div>
</a>
      </div>

        )
      })}
    </div>
  )
}

export default Products
