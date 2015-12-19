var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var dbConnection = mysql.createConnection({
      user: "root",
      password: "zubur1",
      database: "chat1"
    });
    dbConnection.connect();


var addMessage function (userName, content, room) {
 connection.query('INSERT INTO messages ('userName', 'content', 'room')', [userName, content, room], function(err, result){
  if (err) throw err;
 }  
}


