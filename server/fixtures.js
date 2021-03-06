if (Meteor.users.find().count() === 0) {
   console.log("Filling DB with mock users");
   Accounts.createUser({
      username: 'Richard',
      password: '123123',
      profile: {
         name: "Actief C. Lid",
         active: true,
         comments: "Dit is commentaar.",
         email: "President-ETV@tudelft.nl"
      },
   });
   Accounts.createUser({
      username: 'Harry',
      password: '123123',
      profile: {
         name: "Inactieve L. Zak",
         active: false,
         comments: "Dit is commentaar.",
         email: "Secretaris-ETV@tudelft.nl"
      }
   });
}

if (Articles.find().count() === 0) {
   console.log("Filling DB with mock articles");
   Articles.insert({
      author: "Mater Tua",
      title: "Random artikel",
      status: "Temporary Version",
      category: "Article",
      pages: 3,
      editor: Meteor.users.findOne()._id,
   });
   Articles.insert({
      author: "Mater Tua",
      title: "Ander random artikel",
      status: "Final Version",
      category: "Article",
      pages: 2,
      editor: Meteor.users.findOne()._id,
   });
   Articles.insert({
      author: "Richard",
      title: "Over auto's",
      status: "Final Version",
      category: "Article",
      pages: 4,
      editor: Meteor.users.findOne()._id,
   });
   Articles.insert({
      author: "Die ene van hiernaast",
      title: "Ulysses",
      status: "Temporary Version",
      category: "Article",
      pages: 2,
      editor: Meteor.users.findOne()._id,
   });
}

if (Issues.find().count() === 0) {
   console.log("Filling DB with mock issues");
   Issues.insert({
      issueNumber: {year: 1, edition: 1},
      comments:    "Testcommentaar",
      color: "rgb(100,100,0)",
      articles: Articles.find().fetch().map(function(obj) {return obj._id}),
   });
}
