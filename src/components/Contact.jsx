import { useParams } from "react-router-dom";
import { UseHook } from "../hooks/UseHook";
import { useState } from "react";
import Modal from "./Modal";

function Contact() {
  const [product, setProduct] = useState(null);
  const [api, setApi] = useState("https://jsonplaceholder.typicode.com/users");
  const { data, error, pending, formData, createUser, deleteUser, updateData } =UseHook(api);
  const { id } = useParams();
  const [showModal, setModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [updateUser, setUpdateUser]=useState(null)

  const handleModal = () => {
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
    setEditModal(false)
  };

  // const filteredData=data && data.products.filter((item)=> item.id == id)
  return (
    <div className="text-black bg-white">
      {pending && (
        <div className=" fixed inset-0 bg-black/60 z-50 flex justify-center items-center">
          {" "}
          <h2 className="mx-auto w-[100px] text-white text-[70px] ">
            <span className="loading loading-spinner loading-xl"></span>
          </h2>{" "}
        </div>
      )}
      <button
        className="ml-auto mr-[20px] px-[15px] py-[5px] rounded-[8px] border hover:bg-amber-100 font-medium"
        onClick={(e) => {
          handleModal();
        }}
      >
        Create +
      </button>
      <div className="flex flex-wrap gap-[50px] justify-center items-center mt-[50px] text-black  ">
        {error && <h2>Not Found</h2>}
        {/* {pending &&<h2>Loading...</h2> } */}
        {!pending && !error && data && data.length === 0 && (
          <div>
            {" "}
            <h1 className=" font-bold text-[70px] mx-auto w-[500px] ">
              No users left
            </h1>{" "}
          </div>
        )}
        {/* DATA */}
        {data &&
          data.map(({ name, email, phone, id }) => {
            return (
              <div className="flex flex-wrap" key={id}>
                <a
                  href="#"
                  className="group relative overflow-hidden shadow-2xs rounded-lg border border-gray-100 "
                >
                  {/* BUTTONS */}
                  <div className="flex gap-[5px] ">
                    {/* DELETEBUTTON */}
                    <button
                      className="ml-[350px] mr-5 mt-[10px] transition-transform duration-300 hover:rotate-12  hover:scale-105 cursor-pointer hover:text-[red] "
                      onClick={() => {
                        deleteUser(id);
                      }}
                    >
                      <i className="fa-solid fa-trash"></i>
                      {/* EDITBUTTON */}
                    </button>
                    <button
                      className="hover:animate-bounce  mr-5 mt-[10px] transition-transform  duration-10 hover:rotate-12  hover:scale-105 cursor-pointer hover:text-[green] "
                      onClick={(e) => {
                        setEditModal(true);
                        setUpdateUser({name,email,phone,id})
                      }}
                    >
                      <i class="fa-solid fa-pencil"></i>
                    </button>
                  </div>
                  <div className="relative text-black  bg-white px-6 pb-6 w-[360px]  ">
                    <h3 className="mt-1.5 text-lg ">
                      {" "}
                      Name: <span className="font-medium"> {name}</span>{" "}
                    </h3>
                    <p className="text-lg ">
                      Email:
                      <span className="text-lg font-medium italic">
                        {" "}
                        {email}{" "}
                      </span>
                    </p>
                    Phone number:
                    <p className=" sm:block sm:text-xs text-[18px] ">{phone}</p>
                  </div>
                </a>
              </div>
            );
          })}
      </div>
        {/* MODAL */}
      {showModal && (
        <Modal>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setModal(false);
              const newUser = formData(e.target);
              createUser(newUser);
            }}
            className="border bg-white rounded-[10px] text-black  flex flex-col gap-[15px] w-96 mx-auto p-[20px] "
          >
            <label>
              Name
              <input
                type="text"
                placeholder="Enter your name"
                autoComplete="off"
                className="border px-[10px] py-[5px] rounded-lg  w-full"
                name="name"
                id="name"
              />
            </label>
            <label>
              Number
              <input
                type="number"
                placeholder="Enter your phone number"
                autoComplete="off"
                className="border px-2.5 py-[5px] rounded-lg  w-full"
                name="phone"
                id="phone"
              />
            </label>

            <label>
              {" "}
              Email
              <input
                name="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                className="border px-2.5 py-[5px] rounded-lg w-full"
              ></input>
            </label>
            <div className="flex gap-[20px] ">
              <button className=" px-[15px] py-[5px] rounded-lg text-black   border font-medium w-full hover:bg-teal-600 hover:text-white">
                Create
              </button>
              <button
                className=" px-[15px] py-[5px]  rounded-lg text-black   border hover:bg-amber-100 font-medium w-full "
                onClick={() => {
                  handleClose();
                }}
              >
                Close
              </button>
            </div>
          </form>
        </Modal>
      )}
      {editModal && updateUser && (
        <Modal>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEditModal(false);
              const updatedUser = formData(e.target);
              updateData(updateUser.id, updatedUser)
             
            }}
            className="border bg-white rounded-[10px] text-black  flex flex-col gap-[15px] w-96 mx-auto p-[20px] "
          >
            <label>
              Name
              <input
              defaultValue={updateUser.name}
                type="text"
                placeholder="Enter your name"
                autoComplete="off"
                className="border px-[10px] py-[5px] rounded-lg  w-full"
                name="name"
                id="name"
              />
            </label>
            <label>
              Number
              <input
              defaultValue={updateUser.phone}
                type="number"
                placeholder="Enter your phone number"
                autoComplete="off"
                className="border px-2.5 py-[5px] rounded-lg  w-full"
                name="phone"
                id="phone"
              />
            </label>

            <label>
              {" "}
              Email
              <input
               defaultValue={updateUser.email}
               type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                autoComplete="off"
                className="border px-2.5 py-[5px] rounded-lg w-full"
              ></input>
            </label>
            <div className="flex gap-[20px] ">
              <button className=" px-[15px] py-[5px] rounded-lg text-black   border font-medium w-full hover:bg-teal-600 hover:text-white">
                Save
              </button>
              <button
                className=" px-[15px] py-[5px]  rounded-lg text-black   border hover:bg-amber-100 font-medium w-full "
                onClick={() => {
                  handleClose();
                }}
              >
                Close
              </button>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default Contact;
