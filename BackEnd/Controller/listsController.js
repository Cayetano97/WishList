const express = require("express");
const router = express.Router();

const Lists = require("../Model/listsModel");
const User = require("../Model/userModel");


// Get all lists from a user
router.get("/lists/:id_user", async (req, res) => {
    try {
        const id_user = req.params.id_user;
        const data = await Lists.find({owner: id_user}).exec();
        res.status(200).json({
        status: "Success",
        data: data,
        error: null,
        });
    } catch (error) {
        res.status(404).json({
        status: "Error",
        data: null,
        error: error,
        });
    }
});

// Get one list from a user
router.get("/lists/:id_user/:id_list", async (req, res) => {
    try {
        const id_user = req.params.id_user;
        const id_list = req.params.id_list;
        const data = await Lists.findOne({owner: id_user, _id: id_list}).exec();
        res.status(200).json({
        status: "Success",
        data: data,
        error: null,
        });
    } catch (error) {
        res.status(404).json({
        status: "Error",
        data: null,
        error: error,
        });
    }
});

// Create a list
router.post("/newlist/:id_user", async (req, res) => {
    try {
        const id_user = req.params.id_user;
        const data = new Lists({
            owner: id_user, 
            list_name: req.body.list_name,
            icon: req.body.icon,
            id_collection: req.body.id_collection,
            shared: req.body.shared,
            list_items: req.body.list_items,
        });
        const datasaved = await data.save();

         // Actualizar el campo de listas del usuario con el ID de la lista nueva
        await User.findByIdAndUpdate(id_user, {
            $push: { lists: datasaved._id },
      });

        res.status(200).json({
        status: "Success",
        data: datasaved,
        error: null,
        });

    } catch (error) {
        res.status(404).json({
        Status: "Error",
        data: null,
        error,
        });
    }
});

module.exports = router;
