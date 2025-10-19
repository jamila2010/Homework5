import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <nav>
        <h1>Logo</h1>
        <ul>
            <li> <NavLink to="./" >Home</NavLink></li>
            <li> <NavLink to="./Product" >Product</NavLink> </li>
            <li> <NavLink to="./About" >About Us</NavLink> </li>
            <li> <NavLink to="./Contact" >Contact Us</NavLink> </li>
        </ul>

      </nav>
    </div>
  )
}

export default Navbar
