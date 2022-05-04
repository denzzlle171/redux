import React from "react";
import Task from './Task';



const TasksList = ({ tasks, handleTaskStatusChange, handleTaskDelete }) => {
  
  return (
    <ul className="list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          {...task}
          onChange={handleTaskStatusChange}
          onDelete={handleTaskDelete}
        />
      ))}
    </ul>
  );
};
export default TasksList