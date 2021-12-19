
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("events").del()
    .then(function () {
      // Inserts seed entries
      return knex("events").insert([
        {
          event_id: 1, 
          event_name: "DSC: New Year Party", 
          date: "01/01/2022", 
          time: "12:00 AM", 
          location: "Tsuzumi Mansion"
        },
        {
          event_id: 2, 
          event_name: "Valentines Day ", 
          date: "02/14/2022", 
          time: "4:30 PM", 
          location: "Butterfly Mansion"
        },
        {
          event_id: 3, 
          event_name: "Hiking/Picnic", 
          date: "03/24/2022", 
          time: "3:30 PM", 
          location: "Sagiri Mountain"
        },
        {
          event_id: 4, 
          event_name: "Inosuke's Birthday Bash", 
          date: "04/22/2022", 
          time: "5:00 PM", 
          location: "Swordsmith Village"
        },
        {
          event_id: 5, 
          event_name: "Tanjiro's Birthday Party", 
          date: "07/14/2022", 
          time: "5:30 PM", 
          location: "Kumotori Mountain"
        },
        {
          event_id: 6, 
          event_name: "Zenitsu's Birthday Party", 
          date: "09/03/2022", 
          time: "3:30 PM", 
          location: "Ushigome District"
        },
        {
          event_id: 7, 
          event_name: "Hashira Meeting", 
          date: "09/07/2022", 
          time: "10:00 AM", 
          location: "DSC: Headquarters"
        },
      ]);
    });
};
