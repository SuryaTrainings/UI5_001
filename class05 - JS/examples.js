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