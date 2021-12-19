
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("invites").del()
    .then(function () {
      // Inserts seed entries
      return knex("invites").insert([
        {
          invite_id: 1,
          user_id: 1, 
          event_id: 1, 
          organizer: true, 
          is_going: true
        },
        {
          invite_id: 2,
          user_id: 2, 
          event_id: 2, 
          organizer: true, 
          is_going: false
        },
        {
          invite_id: 3,
          user_id: 3, 
          event_id: 3, 
          organizer: true, 
          is_going: true,
        },
        {
          invite_id: 4,
          user_id: 4, 
          event_id: 4, 
          organizer: true, 
          is_going: false,
        },
        {
          invite_id: 5,
          user_id: 5, 
          event_id: 5, 
          organizer: false, 
          is_going: true,
        },
        {
          invite_id: 6,
          user_id: 6, 
          event_id: 6, 
          organizer: false, 
          is_going: true,
        },
        {
          invite_id: 7,
          user_id: 7, 
          event_id: 7, 
          organizer: false, 
          is_going: false,
        },
        {
          invite_id: 8,
          user_id: 8, 
          event_id: 8, 
          organizer: false, 
          is_going: true,
        },
      ]);
    });
};
