import React from "react";
import { deleteTask, updateTask } from "../services/taskServices";


const Task = ({ task }) => {
  // Task 
  /* CREATE UPDATE OPERATION */
  function updateTaskBtn() {
    task.task = task.task === "Write an input form" ? "go to bed": "Write an input form";
    try {
      updateTask(task);
      alert("Task has been updated successfully!");
    } catch (error) {
      alert("Task was not able to be updated :(");
    }
  }

  /* CREATE DELETE OPERATION*/
  function deleteTaskBtn() {
    try {
      deleteTask(task.task);
      alert("Task has been deleted successfully!");
    } catch (error) {
      alert("Task was not able to be deleted :(");
    }
  }

  return (
    <div className='pb-3 pt-1'>
      <p className='text-center'>{`${task.task}`}</p>
      <div>
        <button onClick={deleteTaskBtn}>DELETE</button>
        <button onClick={updateTaskBtn}>UPDATE</button>
      </div>
    </div>
  );
};

export default Task;
