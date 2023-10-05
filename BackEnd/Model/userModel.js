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
      required: [true, "Username is required"],
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
        "deer",
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
    list: [
      {
        type: Schema.Types.ObjectId,
        ref: "list",
      },
    ],
    collections: [
      {
        type: Schema.Types.ObjectId,
        ref: "collections",
      },
    ],
    friends: {
      type: Object,
      properties: {
        id_user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "user",
        },
        state: {
          type: String,
          enum: ["Pendiente", "Aceptado"],
          default: "Pendiente",
        },
        petition_date: {
          type: Date,
          default: Date.now(),
        },
        accepted_date: {
          type: Date,
        },
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;