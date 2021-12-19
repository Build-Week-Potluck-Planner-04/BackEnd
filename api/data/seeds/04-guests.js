
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("guests").del()
    .then(function () {
      // Inserts seed entries
      return knex("guests").insert([
        {
          guest_id: 1, 
          guest_name: "Muzan Kibutsuji", 
          user_id: 1
        },
        {
          guest_id: 2, 
          guest_name: "Akaza", 
          user_id: 2
        },
        {
          guest_id: 3, 
          guest_name: "Daki", 
          user_id: 3
        },
        {
          guest_id: 4, 
          guest_name: "Enmu", 
          user_id: 4
        },
        {
          guest_id: 5, 
          guest_name: "Rokuro", 
          user_id: 5
        },
        {
          guest_id: 6, 
          guest_name: "Koinatsu", 
          user_id: 6
        },
        {
          guest_id: 7, 
          guest_name: "Rui", 
          user_id: 7
        },
        {
          guest_id: 8, 
          guest_name: "Hinatsuru", 
          user_id: 8
        },
        {
          guest_id: 9, 
          guest_name: "Makio", 
          user_id: 9
        },
        {
          guest_id: 10, 
          guest_name: "Suma", 
          user_id: 10
        },
      ]);
    });
};
