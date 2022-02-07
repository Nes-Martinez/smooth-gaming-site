require("dotenv").config();
const path = require("path");
const express = require("express");
const publicPath = path.join(__dirname, "..", "public");

const app = express();

app.use(express.json());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// auth and api routes
app.use("/api", require("./routes"));

//static file-serving middleware
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.use(express.static(path.join(__dirname, "..", "images")));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
