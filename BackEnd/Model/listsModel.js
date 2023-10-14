const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const listsSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "users",
    },
    
    list_name: {
        type: String,
        trim: true,
        cast: false,
        required: [true, "List_name is required"],
    },

    icon: {
        type: String,
        enum: [
          "Baby",
          "Ball",
          "Cake",
          "Dummy",
          "Family",
          "Friend",
          "Gift",
          "Grass",
          "Heart",
          "Plant",
          "Retirement",
          "Ring",
          "Sock",
          "Stroller",
          "Tree",
          "User",
        ],
        default: "User",
    },

    id_collection: {
        type: Schema.Types.ObjectId,
        ref: "collections",
    },

    person_associated: [
        {
            type: Object,
            properties: {
                id_user: {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: "users",
                },
                username: {
                    type: String,
                    required: true,
                    ref: "users",
                },
                name: {
                    type: String,
                    required: true,
                    ref: "users",
                },
            },
        }
    ],

    shared: [
        {
            type: Object,
            properties: {
                id_user: {
                    type: Schema.Types.ObjectId,
                    required: true,
                    ref: "users",
                },
                username: {
                    type: String,
                    required: true,
                    ref: "users",
                },
                name: {
                    type: String,
                    required: true,
                    ref: "users",
                },
            },
        }
    ],
    
    list_items: [
        {
        type: Object,
        properties: {

            product_name: {
                type: String,
                required: true,
            },

            status: {
                type: String,
                enum: ["Por comprar", "Comprado"],
                default: "Por comprar",
            },

            url: {
                type: String,
            },

            store: {
                type: String,
            },

            price: {
                type: String,
            },

            comments: {
                type: String,
            },

            bought_by: {
                type: Object,
                properties: {
                    id_user: {
                        type: Schema.Types.ObjectId,
                        required: true,
                        ref: "users",
                    },
                    username: {
                        type: String,
                        required: true,
                        ref: "users",
                    },
                    name: {
                        type: String,
                        required: true,
                        ref: "users",
                    },
                },
            },

            bought_date: {
                type: Date,
            },
            
        }, timestamps: true // VER SI FUNCIONA TIMESTAMP ASÍ
        },
    ],
}, {timestamps: true});

const Lists = mongoose.model("Lists", listsSchema, "lists");

module.exports = Lists;