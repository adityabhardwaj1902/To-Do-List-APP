const Task = require("../model/task");

let colors = {
  work: "red",
  college: "green",
  home: "yellow",
  exercise: "grey",
  other: "cyan",
};

module.exports.home = function (req, res) {
  Task.find({}, function (err, tasks) {
    if (err) {
      console.log("error in fetching contacts from db");
      return;
    }
    return res.render("home", {
      title: "TO DO APP",
      tasks_list: tasks,
      colors_list: colors,
    });
  });
};
