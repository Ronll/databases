var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {  }, // a function which handles a get request for all messages
    post: function (req, res) {  
      //console.log(req.body['username'],req.body['message'],req.body['roomname']);
      models.messages.post(req.body['username'],req.body['message'],req.body['roomname']) ;
      res.send('the second one worked BIATCH');
    } // a function which handles posting a message to the database

    //
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      //model.adduser(req.data); 
      //console.log(req.body['username'], 'req params');
      models.users.post(
        req.body['username']
        );
      res.send('it worked');
    }
  }
};

//