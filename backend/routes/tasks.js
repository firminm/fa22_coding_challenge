const Task = require("../models/task");
const express = require("express");
const { response } = require("express");
const router = express.Router();


/**
 * Sample cURL:
 * curl -H "Content-Type: application/json" -X POST -d {\"data\":\"bald\"} localhost:8080/api/tasks/create
 */
router.post("/create", async (req, res) => {
  console.log(req.body)
  try {
    const task = await new Task(req.body).save();
    // Task.create(req.body);  // Saves to legit database (mongodb srv)
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

/**
 * Reminder....
 * GET  = parameters for function stored in URL
 * POST = parameters for function stored in body
 */



/**
 * CREATE 'PUT' REQUEST
 * Finds the specified document and updates the value present in the body
 * 
 * Example cURL:
 * curl -H "Content-Type: application/json" -X PUT -d {\"data\":\"hamlet\"} localhost:8080/api/tasks/update/6328bf9fac65bd263ebd3bc9
 */
router.put("/update/:id", async (req, res) => {
  let updatedTask = await Task.updateOne(
    req.params,
    {$set: req.body}
  );
  res.send(updatedTask);
});

/** 
 * CREATE 'DELETE' REQUEST 
 * 
 * Example cURL:
 * curl -X DELETE localhost:8080/api/tasks/delete/6328c20e2efc119791f52b55 -H "Accept: application/json"
*/
router.delete("/delete/:id", async (req, res) => {
  try {
    let deletedTask = await Task.deleteOne(req.params);
    res.send(deletedTask);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
