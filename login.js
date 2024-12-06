const mysql = require("mysql");
const express = require("express");
const bodyParser = require("body-parser");
const encoder = bodyParser.urlencoded();

const app = express();
app.use("/assets",express.static("assets"));

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'nodejs'

});

// connect to the database
connection.connect((err) => {
    if (err) throw err;
    else console.log("Connected to the database successfully!");
})


app.get("/",function(req,res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",encoder,function(req,res){
    console.log(req.body);
    var username = req.body.username;
    var password = req.body.password;
    connection.query("select * from loginuser where user_name = ? and user_pass = ?",[username,password],function(error,results,fields){
        console.log(username,password);
        console.log(results);
        if (results.length > 0){
            console.log("User authenticated successfully!");
            res.redirect("/welcome.html");
        }
        else{
            res.redirect("/");
        }



    });
});


// When login is successful
app.get("/welcome.html",function(req,res){
    res.sendFile(__dirname + "/welcome.html");
});


// When user tries to log out


// set app port

app.listen(3000);