var x = 10;
// value of x is 10,
// X (Capita X is different )
x;

// Display data in console 
// Check type of data 

typeof(x);
// Number
x = "10";

typeof(x);
// Character

x = false;
//Boolean


//Data conversion
//From integer to character vice versa
// Use a function parseInt

y = parseInt(x);

typeof(x);
//Integer

typeof(y);
//Character 
//_________________________________
//Array

//Symbols - () - paranthasis, {} - curly brackets, [] - square brackets 

var aFruits = ["Apple", "Bananna", "Cherry"];
// Index always start with Zero 

//To find length of array property is
aFruits.length;

aFruits[0];
//To access first item in an arry 

aFruits[1];
//To access second item in an arry 

//Last item in an array is 
aFruits( aFruits.length - 1 );

//Array functions 
// Add item (Always at end), 
// Insert item (Where we want to insert / mid of an array)
// Remove item 

aFruits.push("Pineapple");

//Check now 
aFruits;
// it display all items 

//To check last item in an array 
aFruits[ aFruits.length - 1 ];

// Remove an item from an arry 
aFruits.pop();
// always removes last item an array 

// Insert an item middle of array 
aFruits.splice(1, 0, "Blackberry");

//Display array 
aFruits;

//Remove item from an array 
aFruits.splice(1,1);

aFruits.push("Pineapple");
aFruits.push("Blackberry");
aFruits.push("Orange");
//See data
aFritus;
//sort data
aFruits.sort();


// ___________________________________________
//Loops on arrays

for( i=0; i< aFruits.length;i++ ){
    let item = aFruits[i];
    console.log( item );
}

// for each 
aFruits.forEach(function(item)){
    console.log(item);
}

//Note - performance wise - for loop faster, than for each.

// ______________________________________________
// String operations

//Split function
var name = "SAP UI5 FIORI OData"

var aName = name.split();

aName;


//Concat 
var A = 'Easy course' + name;

A.concat(Name);




























