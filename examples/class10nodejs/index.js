console.log("Hello world");

const arthamtic = require('./reuse');

const fs = require('fs'); 

const express = require('express');


var a = 10;
var b = 20;

console.log("sum of a,b is", arthamtic.sum(a,b));
console.log("diff of a,b is", arthamtic.diff(a,b));
console.log("multiplication of of a,b is", arthamtic.mul(a,b));
console.log("division of a,b is", arthamtic.diff(a,b));

var fileContent = fs.readFile('./webapp/simpletext.txt','utf-8',function(err,data){
    console.log(err);
    console.log(data);
});

var app = express();

app.get('/', function(req, res){
    res.send('hello world');
});

app.listen(30);
