var host = "localhost"; //for this example replace with remote IP address
var port = 8080;
var express = require("express");

var app = express();


//root end point
app.get("/", function (request, response) {
    response.send("Hello world, this is a plain text end point.."); //this is plain text
});


//example json object
app.get("/person", function (request, response) {
    var obj = {}; //this object is a JavaScript object compatible directly with JSON(javascript object notation)
    obj.name = "Juan";
    obj.last_name = "Doe";
    obj.age = 21;
    obj.desc = "A man who has experienced the unearthly depths of madness.."
    response.send(obj); //response is automatically send as json type of object.
});

//start express server
app.listen(port,host);
