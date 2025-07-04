const mySym= Symbol("mySymbol");

const jsUser = {
    name:"Aditya",
    "full name":"Aditya Jondhale", // Property with space in name
    age:22,
    location:"India",
    [mySym]:"this is a symbol property",
    skills:["JavaScript", "React", "Node.js"],
    email:"adijondhale@gmail.com",
    isLoggedIn: true,
}
console.log(jsUser);
console.log(jsUser.name); // Accessing object properties
console.log(jsUser["age"]); // Accessing object properties using bracket notation
console.log(jsUser.skills[0]); // Accessing array within an object
console.log(jsUser["skills"]);
console.log(jsUser["full name"]); // Accessing property with space in name
console.log(jsUser["full name"].length); // Length of the string in the property
console.log(jsUser[mySym]); // Accessing symbol property

// Object.freeze(jsUser); // Freezes the object, preventing further modifications
jsUser.email="xyz@gmail.com"
// Freezes the object, preventing further modifications
console.log(jsUser.email); // Updated email property
console.log(typeof jsUser); // Outputs the type of jsUser
console.log(typeof jsUser[mySym]); 

jsUser.greeting=function(){
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
// console.log(jsUser.greeting()); // Calling the greeting method
jsUser.greeting(); // Calling the greeting method