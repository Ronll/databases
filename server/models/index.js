var db = require('../db');

module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (username, message, roomname) {
      db.addMessage(username, message, roomname);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (userName) {
      db.addUser(userName);
    }
  }
};

//talk to the database 

//router will call the methods of this file 


//models.messages.post(req.body['username'],req.body['message'],req.body['roomname']) ;