require("dotenv").config();
const path = require("path");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use(bodyParser.json());
server.use(cors());

// auth and api routes
server.use("/api", require("./routes"));

// static file-serving middleware
server.use(express.static(path.join(__dirname, "build")));

server.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server is running on ${PORT}`));
