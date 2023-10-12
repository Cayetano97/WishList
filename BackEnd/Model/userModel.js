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
      enum: [
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
    wishlist: [
      {
        type: Object,
        properties: {
          product_name: {
            type: String,
            required: true,
          },
          url: {
            type: String,
          },
          store: {
            type: String,
          },
          price: {
            type: Number,
          },
          comments: {
            type: String,
          }
        },  timestamps: true // VER SI FUNCIONA TIMESTAMP ASÍ
      }
    ],
    lists: [
      {
        type: Schema.Types.ObjectId,
        ref: "lists",
      },
    ],
    collections: [
      {
        type: Schema.Types.ObjectId,
        ref: "collections",
      },
    ],
    friends: [
      {
        type: Object,
        properties: {
          id_user: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "users",
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
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
