import { NavLink, } from "react-router-dom"
function ErrorPage() {
  return (
    <div className="bg-[url('https://media.istockphoto.com/id/1180378155/vector/deep-space.jpg?s=612x612&w=0&k=20&c=KkQ3Ro_VcLL3Q5mtOgKavC_k-BKls7GKkdgDdQKhAVs=') ]   bg-cover bg-center w-full h-screen flex flex-col gap-[30px] items-center justify-center ">
      <h1 className=" text-4xl font-bold">Wrong page</h1>
      <button className="px-[10px] py-[5px] border rounded-lg hover:bg-amber-50 "> <NavLink to="/" >Go back</NavLink> </button>
    </div>
  )
}

export default ErrorPage
