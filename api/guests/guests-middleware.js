const Guest = require("../guests/guests-model");

function validateGuestId(req, res, next) {
    Guest.findGuestById(req.params.id)
        .then(guest => {
            if (guest) {
                req.guest = guest;
                next();
            } else {
                res.status(400).json({ message: "Invalid guest ID" });
            }
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error });
        });
}

function validateData(req, res, next) {
    if (!req.body[0].name && !req.body[0].date && !req.body[0].time && !req.body[0].items) {
        res.status(400).json({ message: "Missing guest data" });
    } else {
        next();
        
    }
}

function validateGuestData(req, res, next) {
    if (!req.body[0].user_id && !req.body[0].role && !req.body[0].guest_items) {
        res.status(400).json({ message: "Missing guest data" });
    } else {
        next();
    }
}

module.exports = { 
    validateGuestId, 
    validateData, 
    validateGuestData 
};