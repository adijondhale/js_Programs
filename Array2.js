const myHero=["ironman","spiderman","hulk","thor","captain america"];
const dc=["batman","superman","flash","green lantern","aquaman"];

myHero.push("black widow"); // Adds a single element
// myHero.push(dc);
// console.log(myHero); // Adds the entire dc array as a single elements
// const allHeros=myHero.concat(dc); // Concatenates dc to myHero
const allHeros=[...myHero, ...dc]; // Spread operator to merge arrays
console.log(allHeros); // Still shows the original myHero array


const a=[1,2,3,[4,5,6,6],7,8,9,[10,11]];
const v=a.flat(Infinity); // Flattens the array to a single level
console.log(v); // Outputs the flattened array

console.log(Array.isArray("Aditya")); // Checks if myHero is an array
console.log(Array.from("Aditya")); // Converts a string to an array
console.log(Array.from({ length: 5 }, (_, i) => i + 1));

console.log(Object.entries({name: "Aditya", age: 25})); // Converts an object to an array of key-value pairs
console.log(Object.keys({name: "Aditya", age: 25}));
console.log(Object.values({name: "Aditya", age: 25}));

let scor1=100
let sore2=200
let scor3=300

console.log(Array.of(scor1, sore2, scor3)); // Creates an array from the scores