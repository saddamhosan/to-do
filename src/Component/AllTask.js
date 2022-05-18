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
    <div className="font-serif px-6 min-h-[78vh]">
      <h1 className="text-center text-3xl my-8 font-bold text-blue-500">
        My All Task
      </h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Description</th>
              <th>Complete</th>
              <th>Delete</th>
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
