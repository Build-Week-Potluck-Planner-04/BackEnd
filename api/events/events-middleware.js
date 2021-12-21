const Event = require("../events/events-model");

function validateEventId(req, res, next) {
    Event.findEventById(req.params.id)
        .then(event => {
            if (event) {
                req.event = event;
                next();
            } else {
                res.status(400).json({ message: "Invalid event ID" });
            }
        })
        .catch(error => {
            res.status(500).json({ errorMessage: error });
        });
}

function validateData(req, res, next) {
    if (!req.body[0].name && !req.body[0].date && !req.body[0].time && !req.body[0].items) {
        res.status(400).json({ message: "Missing event data" });
    } else {
        next();
        
    }
}

function validateEventData(req, res, next) {
    if (!req.body[0].user_id && !req.body[0].role && !req.body[0].event_name) {
        res.status(400).json({ message: "Missing event data" });
    } else {
        next();
    }
}

module.exports = { 
    validateEventId, 
    validateData, 
    validateEventData 
};