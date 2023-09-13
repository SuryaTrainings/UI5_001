const reuse = require('./reuse');

console.log("Simple json server application");

//simple functions
var x = 20;
var y = 5;
var z = reuse.addNumbers(x,y);

console.log("the output is " + z );


var z = reuse.subtractNumbers(x,y);

console.log("the output is " + z );


var z = reuse.multiplyNumbers(x,y);

console.log("the output is " + z );


var z = reuse.divNumbers(x,y);

console.log("the output is " + z );

