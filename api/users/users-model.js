const database = require("../data/db-config");

const findBy = (filter) => {
    return database("users")
        .where(filter);
}

const findById = (id) => {
    return database("users")
        .where("user_id", id)
        .first();
}

async function insert(newUser) {
    await database("users")
        .insert(newUser);
    
    const userArray = await findBy({ username: newUser.username });
    
    return userArray[0];
}

module.exports = {
    findBy,
    findById,
    insert
}