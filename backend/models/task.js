const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* CREATE 'taskSchema' */
/**
 * @param {String} body The body
 */
const taskSchema = new mongoose.Schema(
    {
        data: { type: String, required: true },
    }
);
taskSchema.methods.exists = function exists() {
    const greeting = this.data
        ? "hello and " + this.data
        : "no data";
    console.log(greeting);
};
module.exports = mongoose.model("task", taskSchema);
