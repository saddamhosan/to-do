import React from 'react';
import { useNavigate } from 'react-router-dom';

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
                alert('task added successfully')
                navigate('/allTask')
              }
          });
    }
    return (
      <div className='font-serif'>
        <h1 className='text-center text-3xl my-8 font-bold text-blue-500'>Added A New Task</h1>
        <form className="w-1/2 mx-auto" onSubmit={handleAddTask}>
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
          <input className='block w-32 mx-auto border-2 text-xl rounded-xl' type="submit" value="Add Task" />
        </form>
      </div>
    );
};

export default AddTask;