import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Product from './components/Products'
import MainLayout from './layout/MainLayout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
 const routs=createBrowserRouter([{
  path:"/",
  element:<MainLayout />,
  children:[
    {
      index:true,
      element:<Home />,
    },
    {
      path:"about",
      element:<About />,
    },
    {
      path:"product",
      element: <Product />
    },{
      path:"contact",
      element: <Contact />
    }
  ]
 }])
  return (
   <RouterProvider router={routs} />
  )
}
