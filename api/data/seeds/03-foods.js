
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("foods").del()
    .then(function () {
      // Inserts seed entries
      return knex("foods").insert([
        {
          food_id: 1, 
          food_name: "Sushi"
        },
        {
          food_id: 2, 
          food_name: "Soba"
        },
        {
          food_id: 3, 
          food_name: "Yakitori"
        },
        {
          food_id: 4, 
          food_name: "Sukiyaki"
        },
        {
          food_id: 5, 
          food_name: "Takoyaki"
        },
        {
          food_id: 6, 
          food_name: "Onigiri"
        },
        {
          food_id: 7, 
          food_name: "Shabu Shabu"
        },
        {
          food_id: 8, 
          food_name: "Tonkatsu"
        },
        {
          food_id: 9, 
          food_name: "Tempura"
        },
      ]);
    });
};
