const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/* CREATE 'taskSchema' */
/**
 * @param {String} body The body
 */
const taskSchema = new mongoose.Schema(body,
    {
        methods: {
            find() { return -1; }
        }
    }
    );

module.exports = mongoose.model("task", taskSchema);
