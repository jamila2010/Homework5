import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar"
import React from 'react'
import Footer from "../components/Footer"

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col ">  
      <header className=' sticky top-0 z-[1000] bg-white flex justify-between shadow-md '>
        <nav className="w-full px-4 py-3 "> <Navbar /> </nav>
      </header>
      <main className="w-full container p-4 grow mx-auto ">
       <Outlet />
      </main>
      <footer className="bg-gray-100 py-10">
        <Footer />
      </footer>
    </div>
  )
}
