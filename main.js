const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
    const fname = req.body.firstname;
    const lname = req.body.lastname;
    const email = req.body.email;

    console.log("Here are your credencials: "+fname+ " " +lname+" "+email+".");
});


app.listen(3000, function(){
    console.log("Node server running on port 3000!");
});
