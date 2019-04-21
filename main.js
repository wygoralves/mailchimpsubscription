const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/style.css", function(req,res){
    res.sendFile(__dirname+"/style.css");
});

app.get("/logo.png", function(req,res){
    res.sendFile(__dirname+"/logo.png");
});

app.listen(3000, function(){
    console.log("Example app listening on port port!");
});
