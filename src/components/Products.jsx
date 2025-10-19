import React from 'react'
import {useState, useCallback, useEffect} from "react"
import "./Products.css"



export default function Product() {
  const [products, setProducts] = useState (null)
  const [api,setApi] = useState("http://localhost:3000/products")

  const getData=useCallback(async ()=>{
    const res= await fetch (api)
    const data= await res.json()
    setProducts(data)
    console.log(data)
  })
  useEffect(()=>{
   getData()
  }, [api])
  return (
    <div className='main' >
      <div className='cards'>
        {products &&
        products.map((product) =>{
          return (
            <div className='card' key={product.id}>
              <img src={product.image} alt="product photo" />
              <h1>
                {" "}
                {product.name}
              </h1>
              <h1>price:{product.price} $ </h1>
              <p>rating:{product.rating} <span className='star'><i class="fa-solid fa-star"></i></span>
              </p>
              <p>Brand {product.brand}</p>
              <p>category : {product.category} </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
