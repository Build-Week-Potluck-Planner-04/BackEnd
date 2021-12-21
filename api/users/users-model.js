const database = require("../data/db-config");

function find() {
    return database("users")
        .select("id", "username");
}

function findBy(filter) {
    return database("users")
        .select("id", "username", "password")
        .where(filter);
}

function findById(id) {
    return database("users")
        .select("id", "username")
        .where({ id })
        .first();
}

async function addUser(user) {
    const [id] = await database("users")
        .insert(user, "id");
    return findById(id);
}

module.exports = {
    find,
    findBy,
    findById,
    addUser,
}