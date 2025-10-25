import {useParams} from 'react-router-dom'
import { UseHook } from '../hooks/UseHook'
import { useState } from 'react'

function Contact () {
    const [product, setProduct] = useState(null)
    const [api, setApi] =useState('https://jsonplaceholder.typicode.com/users')  
    const {data, error, pending, formData}=UseHook(api)
    const {id}=useParams()
    const [showModal, setModal]=useState(false)

    const handleModal=()=>{
      setModal(true)
    }

    const handleClose=()=>{
      setModal(false)
    }
   

    // const filteredData=data && data.products.filter((item)=> item.id == id)
  return (
   <div>
    
      {pending &&<h2 className='mx-auto w-[100px] '>Loading...</h2> }
    <button className='ml-auto mr-[20px] px-[15px] py-[5px] rounded-[8px] border hover:bg-amber-100 font-medium' onClick={(e)=>{handleModal()}}>
      Create +
    </button>
      <div className='flex flex-wrap gap-[50px] justify-center items-center mt-[50px]  '>
      {error && <h2>Not Found</h2> }
      {pending &&<h2>Loading...</h2> }
      {data&& data.map(({name, email, phone,id })=>{
        return (
      <div className='flex flex-wrap' key={id}>
          <a href="#" className="group relative overflow-hidden shadow-2xs rounded-[8px] border border-gray-100 ">
            <div className="relative  bg-white p-6 w-[360px] ">
    <h3 className="mt-1.5 text-lg "> Name: <span className='font-medium'> {name}</span> </h3>
    <p className="text-lg ">
   Email:
<span className="text-lg font-medium italic"> {email} </span>
    </p>
    Phone number:
<p className=" sm:block sm:text-xs text-[18px] ">
      {phone}
        </p>
  </div>
</a>
      </div>

        )
      })}
    </div>
  
     {showModal && 
       <div className=' fixed inset-0 bg-black/60 z-50 flex justify-center items-center '>
       <form onSubmit={(e)=>{
        e.preventDefault()
        setModal(false)
        formData(e.target)
       }} className='border bg-white rounded-[10px] flex flex-col gap-[15px] w-96 mx-auto p-[20px] '>
        <label>Name
            <input type="text" placeholder='Enter your name' autoComplete='off' className='border px-[10px] py-[5px] rounded-[8px]  w-full' name='name' id='name' />
        </label>
        <label>Number
            <input type="number" placeholder='Enter your phone number' autoComplete='off' className='border px-[10px] py-[5px] rounded-[8px]  w-full' name='number' id='number' />
        </label>

      <label > Email
        <input name="email" id="email" placeholder='Enter your email' autoComplete='off' className='border px-[10px] py-[5px] rounded-[8px] w-full'></ input>
      </label>
       <div className='flex gap-[20px] '>
          <button className=' px-[15px] py-[5px] rounded-[8px] border font-medium w-full hover:bg-teal-600 hover:text-white'  >Create</button>
         <button className=' px-[15px] py-[5px] rounded-[8px] border hover:bg-amber-100 font-medium w-full ' onClick={()=>{
       handleClose()
       }}>Close</button>
       </div>

     </form>
     </div>
      }
   </div>

  )
}

export default Contact







// function Contact() {
  
//   return (
//     <div className='contact'>
//      <form>
//         <label>Name
//             <input type="text" placeholder='Enter your name' autoComplete='off' />
//         </label>
//         <label>Number
//             <input type="number" placeholder='Enter your phone number' autoComplete='off' />
//         </label>
//          <textarea name="" id="" placeholder='Leave your feedback here' autoComplete='off' className='feedback'></textarea>
      
//      </form>
//      <div id='map'></div>
//     </div>
//   )
// }

// export default Contact
