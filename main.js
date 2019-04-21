const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();


app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.get("/style", function(req,res){
    res.sendFile(__dirname+"/style.css");
});

app.get("/logo", function(req,res){
    res.sendFile(__dirname+"/logo.png");
});

app.listen(3000, function(){
    console.log("Example app listening on port port!");
});
