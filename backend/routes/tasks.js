const Task = require("../models/task");
const express = require("express");
const router = express.Router();

router.post("/create", async (req, res) => {
  console.log(req.body)
  try {
    const task = await new Task(req.body).save();
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
 * Alternatively - deletes document and replaces it with new one
 */
router.post("/put", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});

/** 
 * CREATE 'DELETE' REQUEST 
 * Deletes the document with the ID (or matching content?) specified in URL
*/
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.send(tasks);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
