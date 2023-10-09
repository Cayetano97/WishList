const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../Model/userModel");

// Check database connection

router.get("/check", async (req, res) => {
  try {
    const users = await User.find({});
    console.log(users);
    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Login

router.post("/login", async (req, res) => {
  try {
    console.log(req.body);
    const data = await User.findOne({ email: req.body.email }).exec();
    console.log(data);
    if (data) {
      console.log("Entra en data")
      // const password = await bcrypt.compare(req.body.password, data.password);
      // if (password) {
        res.status(200).json({
          Status: "Success Login",
          data: {
            // username: data.username || null,
            email: data.email,
            password: data.password,
          },
          error: null,
        });
      // } else {
      //   body = req.body;
      //   res.status(404).json({
      //     Status: "Error - Failed Login",
      //     data: null,
      //     error: "Fallo Login - Email or password incorrect",
      //   });
      // }
    } else {
      res.status(404).json({
        Status: "Error",
        data: null,
        error: "Fallo Login - Email or password incorrect",
      });
    }
  } catch (error) {
    res.status(404).json({
      Status: "Failed",
      datasaved: null,
      error: "Fallo Login - Email or password incorrect",
    });
  }
});

// Register

router.post("/register", async (req, res) => {
  try {
    const data = new User({
      email: req.body.email,
      name: req.body.name,
      username: req.body.username,
      // password: await bcrypt.hash(req.body.password, 10),
      password: req.body.password,
    });
    const datasaved = await data.save();
    res.status(200).json({ Status: "Success register", datasaved });
  } catch (error) {
    res.status(400).json({ Status: "Error", error: "Fallo register" });
  }
});

module.exports = router;
