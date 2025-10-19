import {Outlet} from "react-router-dom"
import Navbar from "../components/Navbar"
import React from 'react'

export default function MainLayout() {
  return (
    <div>
      <header>
        <nav> <Navbar /> </nav>
      </header>
      <main>
       <Outlet />
      </main>
      <footer>
        
      </footer>
    </div>
  )
}
