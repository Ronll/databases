var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var dbConnection = mysql.createConnection({
      user: "root",
      password: "q121212",
      database: "chat1"
    });
    dbConnection.connect();


exports.addMessage = function (userName, content, room) {

 dbConnection.query('INSERT INTO messages (userId, content, room) VALUES ((SELECT id FROM users WHERE userName = "'+userName+'"), "'+content+'", "'+room+'");',  function(err, result){
  if (err) throw err;
  console.log(result, 'in db');
 });
};

exports.addUser = function(userName){
  dbConnection.query('INSERT INTO users(userName) VALUES("'+ userName +'");',  function(err, result){
    if(err) throw err;
      console.log(result, 'in db');
  });
};



//'INSERT INTO chat1(userName) VALUES("' + userName +'");'


//INSERT INTO messages (userName, content, room) VALUES ('Ron', 'hello ham', 'home');

//('INSERT INTO messages (userName, content, room) VALUES (?,?,?)', [userName, content, room]



  //'INSERT INTO messages (userName) VALUES (?)', [userName]


  //SELECT id FROM users WHERE userName = '+userName+'