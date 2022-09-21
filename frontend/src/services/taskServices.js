import axios from "axios";
const apiUrl = "http://localhost:8080/api/tasks";

export async function getTasks() {
  const tasks = await axios.get(apiUrl);
  return tasks;
}

export async function addTask(task) {
  let req = await axios.post(apiUrl + "/create", task);
  return req.data;
}

/* CREATE 'PUT' FUNCTIONS */
export async function updateTask(task) {
  console.log(task);
  task = await axios.put(apiUrl + "/update/" + task._id, {task});
  console.log(task);
  return task;
}

/* CREATE 'DELETE' FUNCTIONS */
export function deleteTask(task) {
  return axios.delete(apiUrl + "/delete/" + task._id);
}