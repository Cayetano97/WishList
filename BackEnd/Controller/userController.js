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
          status: "Success Login",
          data: {
            _id: data._id,
            email: data.email,
            password: data.password,
            name: data.name,
            username: data.username,
            icon: data.icon,
            wishlist: data.wishlist,
          },
          error: null,
        });
      } else {
        body = req.body;
        res.status(404).json({
          status: "Error - Failed Login",
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
            status: "Success Login",
            data: {
              _id: userData._id,
              email: userData.email,
              password: userData.password,
              name: userData.name,
              username: userData.username,
              icon: userData.icon,
              wishlist: userData.wishlist,
            },
            error: null,
          });
        } else {
          body = req.body;
          res.status(404).json({
            status: "Error - Failed Login",
            data: null,
            error: "Fallo Login - Username or password incorrect",
          });
        }
      } else {
        res.status(404).json({
          status: "Error",
          data: null,
          error: "Fallo Login - Email or username incorrect",
        });
      }
    }
  } catch (error) {
    res.status(404).json({
      status: "Failed",
      data: null,
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
    res
      .status(200)
      .json({ status: "Success register", data: datasaved, error: null });
  } catch (error) {
    res
      .status(400)
      .json({ status: "Error", data: null, error: "Fallo register" });
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
      .json({ status: "Success updating user info", data, error: null });
  } catch (error) {
    res
      .status(401)
      .json({ status: "Failed updating user info", data: null, error });
  }
});

// Get user info

router.get("/userinfo/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({ _id: id }).exec();
    res
      .status(200)
      .json({ status: "Success getting user info", data, error: null });
  } catch (error) {
    res
      .status(401)
      .json({ status: "Failed getting user info", data: null, error });
  }
});

// Delete user by id

router.delete("/deleteuser/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const data = await User.deleteOne({ _id: id }).exec();
    res
      .status(200)
      .json({ status: "Success deleting user", data, error: null });
  } catch (error) {
    res.status(401).json({ status: "Failed deleting user", data: null, error });
  }
});

module.exports = router;
