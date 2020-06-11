/**
 * Required External Modules
 */

 const express = require("express");
 //utilities for working with files and dir paths
 const path = require("path");

/**
 * App Variables
 */
 //creating the port, 3030 by default if undefined
const app = express();
const port = process.env.PORT || "3030";
/**
 *  App Configuration
 */
 //look in views dir as source
app.set("views", path.join(__dirname, "views"));
//use this template engine
app.set("view engine", "pug");
//images or css to be used now go inside public dir
app.use(express.static(path.join(__dirname, "public")));
/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
  //render the view
  res.render("index", { title: "Home"});
})
/**
 * Server Activation
 */
//start a server listening for incoming requests on PORT
app.listen(port, () => {
  console.log("Listening")
});
