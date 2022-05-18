import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Task = ({ task, index, tasks, setTasks }) => {
  const { name, description, _id } = task;
  const [complete, setCompleat] = useState(false);

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
        fetch(`http://localhost:4000/task/${id}`, {
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
        {!complete && <button onClick={() => setCompleat(true)} class="btn btn-xs">
          Complete
        </button>}
      </td>
      <td>
        <button onClick={() => handleDelete(_id)} class="btn btn-xs">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Task;