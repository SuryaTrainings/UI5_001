//  Creating on object 
// undefined
var oCar = {
    name : "Maruthi",
    model : "2023",
    weight : "500kg",
    color : "White"
}
// undefined
// Type of object 
typeof(oCar);
// 'object'

// Accessing an object 
oCar
// {name: 'Maruthi', model: '2023', weight: '500kg', color: 'White'}

// Ways to print an object value 
oCar.name
// 'Maruthi'
oCar["name"]
// 'Maruthi'

// Print all key & values in an object 
oCar
{name: 'Maruthi', model: '2023', weight: '500kg', color: 'White'}

for( var item in oCar ){
    console.log(item);
}
// VM1411:2 name
// VM1411:2 model
// VM1411:2 weight
// VM1411:2 color

// 
for( var item in oCar ){
    console.log(oCar[item]);
}
// VM1480:2 Maruthi
// VM1480:2 2023
// VM1480:2 500kg
// VM1480:2 White
// undefined

// Change values in an object 
oCar
// {name: 'Maruthi', model: '2023', weight: '500kg', color: 'White'}
oCar.name = "Skoda";
// 'Skoda'
oCar
// {name: 'Skoda', model: '2023', weight: '500kg', color: 'White'} 

aArray = [ "1", "2", "3" ]
(3) ['1', '2', '3']
aArray
(3) ['1', '2', '3']0: "1"1: "2"2: "3"length: 3[[Prototype]]: Array(0)
aArray.forEach(function(){})
undefined
aArray.forEach(function(item){
    console.log(item);
})
VM214:2 1
VM214:2 2
VM214:2 3
undefined
var string = "Hello world, very good morning";
undefined
string
'Hello world, very good morning'
var aString = string.split(" ");
undefined
aString
(5) ['Hello', 'world,', 'very', 'good', 'morning']0: "Hello"1: "world,"2: "very"3: "good"4: "morning"length: 5[[Prototype]]: Array(0)
string + "welcome to SAP UI5 FIORI OData class";
'Hello world, very good morningwelcome to SAP UI5 FIORI OData class'
string.concat("welcome to SAP UI5 FIORI OData class");
'Hello world, very good morningwelcome to SAP UI5 FIORI OData class'

oCar = {} 
{}
typeof(oCar);
'object'

oCar = {} 
{}
typeof(oCar);
'object'
oCar = {
    model : "2023",
    brand : "maruthi",
    weight : "500kg",
    color : "white"
}
{model: '2023', brand: 'maruthi', weight: '500kg', color: 'white'}brand: "maruthi"color: "white"model: "2023"weight: "500kg"[[Prototype]]: Object
oCar.brand
'maruthi'
oCar["brand"]
'maruthi'
pn = "color"
'color'
oCar[pn]
'white'
pn = "weight"
'weight'
oCar[pn]
'500kg'
oCar.brand = "skoda";
'skoda'
oCar
{model: '2023', brand: 'skoda', weight: '500kg', color: 'white'}brand: "skoda"color: "white"model: "2023"weight: "500kg"[[Prototype]]: Object


oCar = {} 
{}
typeof(oCar);
'object'
oCar = {
    model : "2023",
    brand : "maruthi",
    weight : "500kg",
    color : "white"
}
{model: '2023', brand: 'maruthi', weight: '500kg', color: 'white'}brand: "maruthi"color: "white"model: "2023"weight: "500kg"[[Prototype]]: Object
oCar.brand
'maruthi'
oCar["brand"]
'maruthi'
pn = "color"
'color'
oCar[pn]
'white'
pn = "weight"
'weight'
oCar[pn]
'500kg'
oCar.brand = "skoda";
'skoda'
oCar
{model: '2023', brand: 'skoda', weight: '500kg', color: 'white'}brand: "skoda"color: "white"model: "2023"weight: "500kg"[[Prototype]]: Object
oCar = [
  {
	"model": "2023",
	"brand": "skoda",
	"weight": "500kg",
	"color": "orange"
}, 
  {
	"model": "2023",
	"brand": "maruthi",
	"weight": "570",
	"color": "white"
}]
(2) [{…}, {…}]0: brand: "skoda"color: "orange"model: "2023"weight: "500kg"[[Prototype]]: Object1: brand: "maruthi"color: "white"model: "2023"weight: "570"[[Prototype]]: Objectlength: 2[[Prototype]]: Array(0)
oCar[1].brand
'maruthi'
oCar[0].brand
'skoda'
for( var item in oCar){
    console.log(item);
}
VM1278:2 0
VM1278:2 1
undefined
for( var item in oCar){
    console.log(oCar[item]);
}
VM1347:2 {model: '2023', brand: 'skoda', weight: '500kg', color: 'orange'}brand: "skoda"color: "orange"model: "2023"weight: "500kg"[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
VM1347:2 {model: '2023', brand: 'maruthi', weight: '570', color: 'white'}
undefined
for( var item in oCar){
    console.log(oCar[item].brand);
}
VM1380:2 skoda
VM1380:2 maruthi
undefined
for( var item in oCar){
    console.log(oCar[item].color);
}
VM1417:2 orange
VM1417:2 white
undefined