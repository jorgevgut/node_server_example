var host = "localhost"; //for this example replace with remote IP address
var port = 8080;
var express = require("express");

var app = express();

//this is sample data, assume this might come from a DataBase, files or external sources
var data = [
    {
        id:1,
        name:"John",
        last_name:"Doe",
        age:30
    },
    {
        id:2,
        name:"Andy",
        last_name:"Doe",
        age:41
    },
    {
        id:3,
        name:"Sandy",
        last_name:"Doe",
        age:37
    },
    {
        id:4,
        name:"Jane",
        last_name:"Doe",
        age:26
    }
];


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

//example json object when asking with parameter
app.get("/person/:id", function (request, response) {
    var obj;
    var id = request.params.id;
    //functional way to find within sample data
    obj = data.filter( function(elem) {return elem.id == id;})
    response.send(obj); //response is automatically send as json type of object.
});


//start express server
app.listen(port,host);
