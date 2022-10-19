// importing Task Schema
const Task = require("../model/task");

// adding Task COntroller
module.exports.create = function (req, res) {
  // Creating new DB entry as per input from user
  Task.create(
    {
      category: req.body.category,
      description: req.body.description,
      duedate: req.body.duedate,
    },
    function (err, newTask) {
      if (err) {
        console.log("error in creating !");
        return;
      }
      console.log("#########", newTask);
      return res.redirect("back");
    }
  );
};

//removing task list
module.exports.delete = function (req, res) {
  if (req.body.id == undefined) {
    console.log("Please select a task");
    return res.render("back");
  }
  // for single task
  else if (typeof req.body.id == "string") {
    Task.findByIdAndDelete(req.body.id, function (err) {
      if (err) {
        console.log("error ");
        return;
      }
      return res.redirect("back");
    });
  }
  // if multiple Id is selected
  else {
    for (let i of req.body.id) {
      Task.findByIdAndDelete(i, function (err) {
        if (err) {
          console.log("error in deleteing the task");
          return;
        }
      });
    }
    return res.redirect("back");
  }
  // When single Id was selected
  // Task.findByIdAndDelete(id, function (err) {
  //   if (err) {
  //     console.log("error in deleting an object from database");
  //     return;
  //   }
  //   return res.redirect("back");
  // });
};
