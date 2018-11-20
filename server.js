var express = require("express");
var mongoose = require("mongoose");
var app = express();
var bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


var http = require("http").Server(app);
var conString = "mongodb://prabhat:prabhat123@ds211694.mlab.com:11694/chat-bot";
app.use(express.static(__dirname))

var Chats = new mongoose.Schema({
  name: String,
    chat: String
});

var User = mongoose.model("User", Chats);
mongoose.connect(conString, { useMongoClient: true }, (err) => {
    console.log("Database connection", err)
})

app.post("/notification", (req, res) => {
    var chat = new User(req.body);
    console.log("yahan toh aaya");
  	chat.save()
    .then(item => {
      res.send("message sent");
    }).catch(err => {
      res.status(400).send("unable to save to database");
    });

});

app.get("/chats", (req, res) => {
    User.find({}, (error, chats) => {
        res.send(chats);
    })
});


// connection establishment 

var server = app.listen(3000,function(){
	console.log("connected");
});





