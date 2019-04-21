const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});
app.get("/success", function(req, res){
    res.sendFile(__dirname+"/success.html");
});
app.get("/failed", function(req, res){
    res.sendFile(__dirname+"/failed.html");
});

app.post("/", function(req, res){
    const fname = req.body.firstname;
    const lname = req.body.lastname;
    const email = req.body.email;
    const data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: fname,
                    LNAME: lname
                }
            }
        ]
    }
    const jsonData = JSON.stringify(data);

    const options = {
        url: "https://us20.api.mailchimp.com/3.0/lists/2ac565a4d3",
        method: "POST",
        headers: {
            "Authorization": "wygor96 8ba28efaf6f2529fbc51ec5c60052bcc-us20"
        },
        body: jsonData
    };

    request(options, function(error, response, body){
        if (response.statusCode = 200) {
            res.sendFile(__dirname+"/success.html");
        }else{
            console.log(response.statusCode);
            res.sendFile(__dirname+"/failed.html");
        }
    });
});


app.listen(process.env.PORT || 3000, function(){
    console.log("Node server running on port 3000!");
});