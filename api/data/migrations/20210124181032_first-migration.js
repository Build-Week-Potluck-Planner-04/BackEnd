exports.up = async (knex) => {
  await knex.schema

    // Users table
    .createTable("users", (table) => {
      table.increments("user_id")
      table.string("username", 20)
        .notNullable()
        .unique()
      table.string("password", 20)
        .notNullable()
      table.string("role", 20)
        .notNullable()
    })

    // Foods table
    .createTable("foods", (table) => {
      table.increments("food_id")
      table.string("food_name")
    })

    // Guests Info table
    .createTable("guests", (table) => {
      table.increments("guest_id")
      table.string("guest_name")
      table.integer("user_id")
        .unsigned()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
    })

    // Events (Event Info) table
    .createTable("events", (table) => {
      table.increments("event_id")
      table.string("event_name")
        .notNullable()
      table.string("date")
        .notNullable()
      table.string("time")
        .notNullable()
      table.string("location")
        .notNullable()
    })

    // Attending Guests table
    .createTable("invites", (table) => {
      table.increments("invite_id")
      table.integer("user_id")
        .unsigned()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table.integer("event_id")
        .unsigned()
        .notNullable()
        .references("event_id")
        .inTable("events")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
      table.boolean("organizer")
        .defaultTo(false)
      table.boolean("is_going")
        .defaultTo(false)
    })
}

exports.down = async (knex) => {
  await knex.schema.dropTableIfExists("invites")
  await knex.schema.dropTableIfExists("events")
  await knex.schema.dropTableIfExists("guests")
  await knex.schema.dropTableIfExists("foods")
  await knex.schema.dropTableIfExists("users")
}
