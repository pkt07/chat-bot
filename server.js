var express = require("express")
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));


app.use(express.static(__dirname));
app.get('/', function(req, res) {
        res.sendFile(__dirname + "/" + "index.html"); // in case of frontend req
        });

var server = app.listen(3000,function(){
	console.log("connected");
});