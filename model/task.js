const mongoose = require("mongoose");

// schema for db for data to be stored

// testing

console.log("Schema loaded");

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  duedate: {
    type: Date,
  },
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
