
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users").del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        {
          user_id: 1, 
          username: "Tanjiro_Kamado", 
          password: "1234", 
          role: "organizer"
        },
        {
          user_id: 2, 
          username: "Nezuko_Kamado", 
          password: "1234", 
          role: "organizer"
        },
        {
          user_id: 3, 
          username: "Inosuke_Hashibira", 
          password: "1234", 
          role: "organizer"
        },
        {
          user_id: 4, 
          username: "Zenitsu_Agatsuma", 
          password: "1234", 
          role: "organizer"
        },
        {
          user_id: 5, 
          username: "Giyu_Tomioka", 
          password: "1234", 
          role: "guest"
        },
        {
          user_id: 6, 
          username: "Tengen_Uzui", 
          password: "1234", 
          role: "guest"
        },
        {
          user_id: 7, 
          username: "Shinobu_Kocho", 
          password: "1234", 
          role: "guest"
        },
        {
          user_id: 8, 
          username: "Mitsuri_Kanroji", 
          password: "1234", 
          role: "guest"
        },
        {
          user_id: 9, 
          username: "Obanai_Iguro", 
          password: "1234", 
          role: "guest"
        },
      ]);
    });
};
