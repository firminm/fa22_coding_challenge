import React, { useState, useEffect } from "react";
import Task from "./Task";
import { getTasks } from "../services/taskServices";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      getTasks().then((dbData) => {
        let { data } = dbData;
        setTasks(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, [tasks]);

  return (
    <div className='d-flex flex-column align-items-center pt-2'>
      <h1 className='text-center'>Tasks</h1>
      <div>
        {tasks.length ? (
          tasks.map((task) => <Task key={task._id} task={task} />) // all of these guys have the same id?
        ) : (
          <p className='pt-5 text-center'>"No Tasks Created"</p>
        )}
      </div>
    </div>
  );
};

export default TaskList;
