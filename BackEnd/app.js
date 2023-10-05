const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.set("strictQuery", false);
mongoose.set("runValidators", true);

const PORT = 8000;
const app = express();

app.use(express.json());
app.use(cors());

const URL = process.env.DATABASE_URL;

mongoose.connect(URL, { useNewUrlParser: true });

const db = mongoose.connection;

db.once("Connected", () => {
  console.log("Database connected");
});

db.on("Disconected", () => {
  console.log("Database disconected");
});

db.on("Error", (error) => {
  console.log("Database error", error);
});

const user = require("./Controller/userController");
app.use("/", user);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
