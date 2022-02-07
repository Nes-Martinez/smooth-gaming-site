require("dotenv").config();
const path = require("path");
const express = require("express");

const app = express();

app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// auth and api routes
app.use("/api", require("./routes"));

//static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "images")));

app.listen(5000, () => console.log(`Server is running on 5000`));
