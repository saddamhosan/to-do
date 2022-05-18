import React from 'react';

const AddTask = () => {
    const handleAddTask=(e)=>{
        e.preventDefault()
        const name=e.target.name.value
        const description = e.target.description.value
        const task = { name, description };
        console.log(task);
    }
    return (
      <div>
        <h1>this is add task</h1>
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