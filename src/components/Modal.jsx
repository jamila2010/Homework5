import React from 'react'

function Modal({children}) {
  return (
    <div className=" fixed inset-0 bg-black/60 z-50 text-black  flex justify-center items-center ">
       {children}
        </div>
  )
}

export default Modal

