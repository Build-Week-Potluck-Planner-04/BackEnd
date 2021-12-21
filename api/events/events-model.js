const database = require("../../data/dbConfig");

function events() {
    return database("events");
}

function findEventById(id) {
    return database("events")
        .where({ id })
        .first();
}

async function addEvent(potluck) {
    return database("events")
        .insert(potluck);
}

function updateEvent(id, changes) {
    return database("events")
        .where({ id })
        .update(changes[0]);
}

function deletePotluck(id) {
    return database("events")
        .where({ id })
        .del();
}

module.exports = {
    events,
    findEventById,
    addEvent,
    updateEvent,
    deletePotluck
}