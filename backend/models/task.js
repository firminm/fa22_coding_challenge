const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* CREATE 'taskSchema' */
/**
 * @param {String} task The body
 */
const taskSchema = new mongoose.Schema(
    {
        task: { type: String, required: true },
    }
);
taskSchema.methods.exists = function exists() {
    const greeting = this.task
        ? "hello and " + this.task
        : "no data";
    console.log(greeting);
};
module.exports = mongoose.model("task", taskSchema);
