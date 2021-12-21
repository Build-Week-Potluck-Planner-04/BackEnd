const database = require("../../data/dbConfig");
const { findEventById } = require("../events/events-model");

function findGuestById(id) {
    return database("user_data as ud")
        .where("ud.role", "guest")
        .where({ id })
        .first();
}

function getGuests() {
    return database("user_data as ud")
        .where("ud.role", "guest");
}

async function addGuest(guestInfo) {
    await database("user_data")
        .insert(guestInfo, "id")
        .then(id => {
            return findEventById(id[0]);
        })
}

module.exports = {
    findGuestById,
    getGuests,
    addGuest
}