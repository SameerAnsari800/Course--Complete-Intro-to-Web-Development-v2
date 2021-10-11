const person = {   //this curly brace means objects 
    Name: "Sameer Ansari",
    city: "Jodhpur",
    favoriteFood: "taco",
    state: "Rajasthan",
    wantsTacosRightNow: true,
    numberofTacosWanted: 100,
    address:{
        street: "123 place",
        apt:"123"
    }
};
console.log(person.address.street);
const propName = 'Name';
console.log(person);
console.log(person.Name);
console.log(person["Name"]); // same as the line above;definitely prefer using the other one
console.log(person.city);
console.log(person[propName]);
 