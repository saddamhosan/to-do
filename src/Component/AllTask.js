import React, { useEffect, useState } from "react";
import Task from "./Task";

const AllTask = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/task")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);
  return (
    <div>
      this is all task:{tasks.length}
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <Task
                key={task._id}
                task={task}
                index={index}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllTask;
