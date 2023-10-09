const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
      cast: false,
      required: [true, "Username is required"],
    },
    name: {
      type: String,
      trim: true,
      cast: false,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      cast: false,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      trim: true,
      cast: false,
      required: [true, "Password is required"],
    },
    icon: {
      type: String,
      Enum: [
        "Jellyfish",
        "Sheep",
        "Deer",
        "Whale",
        "Cat",
        "Bird",
        "Mouse",
        "Crab",
        "Butterfly",
        "Pig",
        "Fox",
        "Bear",
        "User",
      ],
      default: "User",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
