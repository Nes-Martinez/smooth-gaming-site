require("dotenv").config();
const express = require("express");
const db = require("./config/db");

const app = express();

app.use(express.json());

const syncDB = () => db.sync();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
