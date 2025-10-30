import {useParams} from 'react-router-dom'
import { UseHook } from '../hooks/UseHook'
import { useState } from 'react'

function ProductPage() {
    const [product, setProduct] = useState(null)
    const [api, setApi] =useState('https://dummyjson.com/products')  
    const {data, error, pending}=UseHook(api)
    const {id}=useParams()

    const filteredData=data && data.products.filter((item)=> item.id == id)
    // setProduct(filteredData)
  return (
  <div>
     {pending && <div className=' fixed inset-0 bg-black/60 z-50 flex justify-center items-center'> <h2 className='mx-auto w-[100px] text-white text-[20px] '><span className="loading loading-spinner loading-xl"></span>
</h2> </div>}
    {filteredData && filteredData.map(({id, thumbnail, title, price, rating, availabilityStatus, weight, description , brand, reviews , stock, returnPolicy , discountPercentage})=>{
      return (
         <article key={id} className="rounded-xl border-2 border-gray-100 bg-white max-w-[800px] mx-auto mt-10">
  <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 cursor-pointer">
    <a href="#" className="block shrink-0">
      <img
        alt={title}
        src={thumbnail}
        className="size-55 rounded-lg object-cover"
      />
    </a>

    <div>
      <h3 className="font-medium sm:text-lg">
        <a href="#" className="hover:underline"> {title} </a>
      </h3>

      <p className=" text-sm text-gray-700">
       {description}
      </p>
      <p className='text-[20px] '>${price} </p>
          <p  className="text-gray-700"><span>{discountPercentage}% off! </span></p>
      <div className="mt-2 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center gap-1 text-gray-500">
         
            <p className="hidden sm:block sm:text-xs sm:text-gray-500">
         Rating:
          <a href="#" className="font-medium underline hover:text-gray-700"> {rating} ⭐️ </a>
        </p>
          
        </div>

        <span className="hidden sm:block" aria-hidden="true">&middot;</span>
         <svg
            xmlns="http://www.w3.org/2000/svg"
            className="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
          <p className="text-xs">{reviews.length} comments</p>
       
      </div>
      <p> Brand:
          <a href="#" className="font-medium  hover:text-gray-700"> {brand} </a></p>
        <p>Return policy:  {returnPolicy}</p>
    </div>
  </div>

  <div className="flex justify-end">
    <strong
      className="-me-[2px] -mb-[2px] inline-flex items-center gap-1 rounded-ss-xl rounded-ee-xl bg-green-600 px-3 py-1.5 text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>

      <span className="text-[10px] font-medium sm:text-xs">{stock} left </span>
    </strong>
  </div>
   
</article>
      )
    })}
    {filteredData && filteredData.map(({reviews})=>{
      return (
        reviews.map(({rating, comment, date, reviewerName, riviewerEmail})=>{
  return (
             <article className="rounded-xl border-2 border-gray-100 bg-white max-w-[600px] mx-auto mt-10">
      <div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8 cursor-pointer">
        <img
          alt={reviewerName}
          src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          className="size-24 rounded-lg object-cover"
        />

        <div>
          <h3 className="font-medium sm:text-lg">{reviewerName}</h3>
          <p className="text-green-600 font-bold mt-3"> {rating <2?  "⭐️" : rating<3? "⭐️⭐️": rating<4 ? "⭐️⭐️⭐️" : rating<5? "⭐️⭐️⭐️⭐️" :"⭐️⭐️⭐️⭐️" } </p>
          <p className="text-sm text-gray-700 mt-2">{comment}</p>
        </div>
      </div>

      <div className="flex justify-end p-4">
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:scale-105 transition">
          {date}
        </button>
      </div>
    </article>
        )
        })
      )
    })}
  </div>

  )
}

export default ProductPage
