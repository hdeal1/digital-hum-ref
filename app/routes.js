var mysql = require('mysql');
var conn = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'mysql',
	database: 'digital-humanities'

});

module.exports = function(app){
	
	app.get('/', function(req,res){
	res.render('index.html');
	});

	app.get('/add_data', function(req,res){
		res.render('add_data.html');
	});

	app.post('/insert_data', function(req,res){
		conn.connect(function(err){
			if (err) throw err;
			console.log("Connection made.");
			console.log(req.body.datatype);
			conn.query("INSERT INTO dataset (datatype, sender, sender_loc, recipient, recipient_loc, quantity, units) VALUES (?,?,?,?,?,?,?);", [req.body.datatype, req.body.sender, req.body.sender_loc, req.body.recipient, req.body.recipient_loc, req.body.quantity, req.body.units]);
		});
		
	});


};

// "INSERT INTO user (username, password, change_flag) VALUES (?, ?, 1)")
// "INSERT INTO dataset(datatype, sender, sender_loc, recipient, recipient_loc, quantity, units, additional) VALUES ('+req.body.datatype+', '+req.body.sender','+req.body.sender_loc+','+req.body.recipient+','+req.body.recipient_loc+','+req.body.quantity+','+req.body.units+','+req.body.additional+')";
