import { React, useState } from "react";
import { addTask } from "../services/taskServices";

const CreateTask = () => {
  /* CREATE 'CreateTask' COMPONENT */
  const [name, setName] = useState("");

  let handleSubmit = function(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  return (
    <div>
      <h3>Create Task</h3>
      <p>Tasks are only one letter, task away!</p>
    <form>
      <label>
        <input
          type="text"
          value={name}
          onChange={(e) => addTask({task: e.target.value})}
          // onSubmit={handleSubmit}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
  )
}

export default CreateTask;
