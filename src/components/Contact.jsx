import React from 'react'





function Contact() {
  
  return (
    <div className='contact'>
     <form>
        <label>Name
            <input type="text" placeholder='Enter your name' autoComplete='off' />
        </label>
        <label>Number
            <input type="number" placeholder='Enter your phone number' autoComplete='off' />
        </label>
         <textarea name="" id="" placeholder='Leave your feedback here' autoComplete='off' className='feedback'></textarea>
      
     </form>
     <div id='map'></div>
    </div>
  )
}

export default Contact
