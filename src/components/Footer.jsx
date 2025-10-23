import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
<div className="bg-gray-100 w-full h-[20px] flex mx-auto justify-center ">
  <div className="mx-auto max-w-5xl px-4 py-[10px] sm:px-6 lg:px-8 flex gap-[50px] justify-between ">
<p className='border-width:[1px solid black] rounded-[50%] ' ><i class="fa-brands fa-facebook"></i></p>
<p className='border-width:[1px solid black] rounded-[50%] ' ><i class="fa-brands fa-twitter"></i></p>
<p className='border-width:[1px solid black] rounded-[50%] ' ><i class="fa-brands fa-instagram"></i></p>
<p className='border-width:[1px solid black] rounded-[50%] ' ><i class="fa-brands fa-github"></i></p>
<p className='border-width:[1px solid black] rounded-[50%] ' ><i class="fa-brands fa-google"></i></p>
<p className='border-width:[1px solid black] rounded-[50%] ' ><i class="fa-brands fa-youtube"></i></p>

  <hr />
  </div>

    </div>
  )
}

export default Footer
