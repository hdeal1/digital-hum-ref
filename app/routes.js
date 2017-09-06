var mysql = require('mysql');
var conn = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'mysql',
	database: 'digital-humanities'

});

module.exports = function(app){
	
	app.get('/', function(req,res){
		conn.query("SELECT datatype FROM dataset", function(err, dataset){
			res.render('index.html', {datatype: dataset[1].datatype});
		});
	});

	app.get('/add_data', function(req,res){
		res.render('add_data.html');
	});

	app.post('/insert_data', function(req,res){
		console.log("Connection made.");
		conn.query("INSERT INTO dataset (datatype, sender, sender_loc, recipient, recipient_loc, quantity, units) VALUES (?,?,?,?,?,?,?);", [req.body.datatype, req.body.sender, req.body.sender_loc, req.body.recipient, req.body.recipient_loc, req.body.quantity, req.body.units]);
		});
		

	app.get('/map_vis', function(req,res){
		res.render('map_vis.html');
	});


};

// "INSERT INTO user (username, password, change_flag) VALUES (?, ?, 1)")
// "INSERT INTO dataset(datatype, sender, sender_loc, recipient, recipient_loc, quantity, units, additional) VALUES ('+req.body.datatype+', '+req.body.sender','+req.body.sender_loc+','+req.body.recipient+','+req.body.recipient_loc+','+req.body.quantity+','+req.body.units+','+req.body.additional+')";
