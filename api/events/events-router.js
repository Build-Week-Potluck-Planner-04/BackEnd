const express = require("express");
const router = express.Router();
const Users = require("../users/users-model");
const Events = require("./events-model");
const { 
    validateEventId, 
    validateData 
} = require("./events-middleware");

router.get("/events", async (req, res) => {
    Events.events()
        .then(events => {
            res.status(200).json(events);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error });
        })
});

router.get("/event/:id", validateEventId, async (req, res) => {
    try {
        const user = await Users.potluckByUser(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user)
    } catch(error) {
        res.status(500).json({ errorMessage: error });
    }
});

router.post("/event", validateData, (req, res) => {
    const eventInfo = req.body;

    Events.addEvent(eventInfo)
        .then(event => {
            res.status(201).json(event);
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error });
        })
});

router.put("/event/:id", validateData, (req, res) => {
    const id = req.params.id;

    Events.updatePotluck(id, req.body)
        .then(potluck => {
            res.status(200).json({ potluck, message: "Potluck updated successfully" });
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error });
        })
});

router.delete("/event/:id", validateEventId, (req, res) => {
    Events.deletePotluck(req.params.id)
        .then(() => {
            res.status(200).json({ message: "Potluck deleted successfully" });
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error });
        })
});

module.exports = router;