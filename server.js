// Require packages
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

// Set up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set static folder to "public"
app.use(express.static("public")) 

// Set html routes using module files
const htmlRoutes = require("./routes/htmlRoutes")
app.use(htmlRoutes)

// Set api routes using module files
const apiRoutes = require("./routes/apiRoutes")
app.use("/api", apiRoutes)

// Set listening port
app.listen(PORT, function() {
    console.log("Server listening on Port " + PORT)
})