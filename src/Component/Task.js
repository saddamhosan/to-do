import React from 'react';
import Swal from 'sweetalert2';

const Task = ({ task, index, tasks, setTasks }) => {
  const { name, description, _id, complete } = task;

  const handleComplete=(id)=>{
      fetch(`https://limitless-wave-44594.herokuapp.com/task/${id}`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if(data.modifiedCount){
             Swal.fire({
               position: "top-center",
               icon: "success",
               title: "Your task has been complete",
               showConfirmButton: false,
               timer: 1800,
             });
          }
        });
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://limitless-wave-44594.herokuapp.com/task/${id}`, {
          method: "delete",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
                const exists=tasks.filter(task=>task._id !== id)
                setTasks(exists)
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td className={complete ? " line-through" : ""}>{name}</td>
      <td className={complete ? " line-through" : ""}>{description}</td>
      <td>
        {!complete && <button onClick={()=>handleComplete(_id)} class="btn btn-xs bg-blue-700 border-0">
          Complete
        </button>}
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} class="btn btn-xs bg-red-600 border-0">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Task;