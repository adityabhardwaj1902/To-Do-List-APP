// importing rquired library
const express = require("express");
const path = require("path");
// const bodyParser = require("body-parser");

// Assigning port number were our server will run
const port = 8000;

//
const db = require("./config/mongoose");

const app = express();

// define array for checking whether we are able to send data or not

// var tasks = [
//   {
//     category: "work",
//     description: "Finish TO DO app",
//     duedate: "1/1/1",
//   },
//   {
//     category: "Entertainment",
//     description: "Watch Anime",
//     duedate: "1/1/1",
//   },
// ];

// setting template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// setting body-parser
app.use(express.urlencoded({ extended: false }));

// setting folder for static content
app.use(express.static("assets"));

// setting up routes
app.use("/", require("./routes"));

// enabling server to run on given port
app.listen(port, function (err) {
  if (err) {
    console.log("Error in running the server");
  }
  console.log(`Express server is running on ${port}`);
});
