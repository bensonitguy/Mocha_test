var express = require("express");

module.exports = function(){
	var app = express();
	app.get('/',function(req,res){
		res.send('Hello World');
	});

	app.get('/users/:user',function(req,res){
		res.send("Username is"+ req.user + " query string is"
			+ req.query.attr);
	});

	return app;
};