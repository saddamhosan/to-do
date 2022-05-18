import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const AddTask = () => {
    const navigate=useNavigate()
    const handleAddTask=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const description = e.target.description.value
        const task = { name, description };
        fetch("http://localhost:4000/task", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(task),
        })
          .then((res) => res.json())
          .then((data) => {
              if(data.insertedId){
                e.target.reset()
                Swal.fire({
                  position: "top-center",
                  icon: "success",
                  title: "Your task has been saved",
                  showConfirmButton: false,
                  timer: 1800,
                });
                navigate('/allTask')
              }
          });
    }
    return (
      <div className="font-serif min-h-[78vh]">
        <h1 className="text-center text-3xl my-8 font-bold text-blue-500">
          Added A New Task
        </h1>
        <form className="md:w-1/2 mx-auto" onSubmit={handleAddTask}>
          <input
            className="block border w-10/12 mx-auto p-2 my-2 rounded-xl"
            type="text"
            name="name"
            placeholder="Name"
          />
          <textarea
            className="block border  w-10/12 mx-auto p-2 my-2 rounded-xl"
            name="description"
            placeholder="Description"
          ></textarea>
          <input
            className="block w-32 mx-auto border-2 text-xl rounded-xl my-4 py-1 bg-blue-500 text-white"
            type="submit"
            value="Add Task"
          />
        </form>
      </div>
    );
};

export default AddTask;