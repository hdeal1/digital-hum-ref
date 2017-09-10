var mysql = require('mysql');
var conn = mysql.createConnection({
	host	: 'localhost',
	user	: 'root',
	password: 'mysql',
	database: 'digital_humanities'

});

module.exports = function(app){
	
	app.get('/', function(req,res){
		res.render('index.html')

	});
	
	app.get('/add_data', function(req,res){
		conn.query("SELECT num_inputs FROM project_meta;", function(err, inputs){
			res.render('add_data.html', {inputs: inputs[0].num_inputs});
		});
	});

	app.post('/insert_data', function(req,res){
		console.log("Connection made.");
		//conn.query("INSERT INTO project_meta (project_name, num_inputs, meta_data) VALUES (?,?,?);", [req.body.col0, req.body.col1, req.body.col2]);
	});
		

	app.get('/map_vis', function(req,res){
		res.render('map_vis.html');
	});


};

// "INSERT INTO user (username, password, change_flag) VALUES (?, ?, 1)")
// "INSERT INTO dataset(datatype, sender, sender_loc, recipient, recipient_loc, quantity, units, additional) VALUES ('+req.body.datatype+', '+req.body.sender','+req.body.sender_loc+','+req.body.recipient+','+req.body.recipient_loc+','+req.body.quantity+','+req.body.units+','+req.body.additional+')";
//SELECT COUNT(*) FROM information_schema.tables WHERE table_schema = 'dbo' and TABLE_TYPE='BASE TABLE'
//select count(*) from information_schema.columns where table_name = 'dataset'
