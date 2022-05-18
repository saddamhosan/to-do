import React from 'react';

const Task = ({task,index}) => {
    return (
      <tr>
        <th>{index +1}</th>
        <td>{task.name}</td>
        <td>{task.description}</td>
        <td>
          <button class="btn btn-xs">Complete</button>
        </td>
        <td>
          <button class="btn btn-xs">Delete</button>
        </td>
      </tr>
    );
};

export default Task;