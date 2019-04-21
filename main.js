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

    const options = {
        url: "https://us20.api.mailchimp.com/3.0/lists/2ac565a4d3",
        method: "POST",

    };
    request(options, function(error, response, body){
        if (error) {
            console.log(error);
        }else{
            console.log(response.statusCode);
        }
    });
});


app.listen(3000, function(){
    console.log("Node server running on port 3000!");
});

// mailchimp api key: 8ba28efaf6f2529fbc51ec5c60052bcc-us20
// list id 49709