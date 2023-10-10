const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../Model/userModel");

// Login

router.post("/login", async (req, res) => {
  try {
    const data = await User.findOne({ email: req.body.email }).exec();
    if (data) {
      const password = await bcrypt.compare(req.body.password, data.password);
      if (password) {
        res.status(200).json({
          Status: "Success Login",
          data: {
            id: data._id,
            email: data.email,
            password: data.password,
          },
          error: null,
        });
      } else {
        body = req.body;
        res.status(404).json({
          Status: "Error - Failed Login",
          data: null,
          error: "Fallo Login - Email or password incorrect",
        });
      }
    } else {
      const userData = await User.findOne({ username: req.body.email }).exec();
      if (userData) {
        console.log("Entra en userData");
        const password = await bcrypt.compare(
          req.body.password,
          userData.password
        );
        if (password) {
          res.status(200).json({
            Status: "Success Login",
            data: {
              email: userData.email,
              password: userData.password,
            },
            error: null,
          });
        } else {
          body = req.body;
          res.status(404).json({
            Status: "Error - Failed Login",
            data: null,
            error: "Fallo Login - Username or password incorrect",
          });
        }
      } else {
        res.status(404).json({
          Status: "Error",
          data: null,
          error: "Fallo Login - Email or username incorrect",
        });
      }
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
      password: await bcrypt.hash(req.body.password, 10),
    });
    const datasaved = await data.save();
    res.status(200).json({ Status: "Success register", datasaved });
  } catch (error) {
    res.status(400).json({ Status: "Error", error: "Fallo register" });
  }
});

// Update User´s info

router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const data = await User.updateOne(
      { _id: id },
      {
        $set: body,
      },
      { new: true, upsert: false }
    );
    res
      .status(200)
      .json({ Status: "Success updating user info", data, error: null });
  } catch (error) {
    res
      .status(401)
      .json({ Status: "Failed updating user info", data: null, error });
  }
});

// Get user info

router.get("/userinfo/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }).exec();
    res.status(200).json({ Status: "Success getting user info", data });
  } catch (error) {
    res.status(401).json({ Status: "Failed getting user info", data: null });
  }


});

module.exports = router;
