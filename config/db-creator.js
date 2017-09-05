var mysql = require('mysql');

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"mysql",
  database: "digital-humanities"
});

conn.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE dataset(datatype TEXT, sender TEXT, sender_loc TEXT, recipient TEXT, recipient_loc TEXT, quantity INTEGER, units TEXT)";
  conn.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});