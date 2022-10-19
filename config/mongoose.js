//require the library
const mongoose = require("mongoose");

//connect to the db
mongoose.connect("mongodb://localhost/to-do_app_db");

//acquire the connection
const db = mongoose.connection;

//check for error
db.on("error", console.error.bind(console, "error connecting to db"));

//if db is connected the print the message

db.once("open", function () {
  console.log("successfully connected to the db");
});
