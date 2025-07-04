const myArr =[1,2,3,4,5,6,7,8,9,10];
console.log(myArr[0])

const myheroes = ['Superman', 'Batman', 'Wonder']
const myArr2 = new Array(1,2,3,4,5,6,7,8,9,10);

// myArr2.push(11);
// console.log(myArr2);
// myArr2.pop();
console.log(myArr2);

myArr2.unshift(0); // Adds an element at the beginning
myArr2.unshift(0);
myArr2.shift(); // Removes the first element
myArr2.splice(2, 0, 'New Element'); // Adds 'New Element
console.log(myArr2);

myArr.splice(2, 1, 'New Element');
console.log(myArr)

console.log(myArr.includes(5)); // Checks if 5 is in the array
console.log(myArr.indexOf(5)); // Returns the index of 5

const newArr = myArr.join('!! '); // Joins elements into a string
console.log(newArr);
console.log(typeof newArr); // Outputs the type of 

console.log(myArr)
//slice
const slicedArr = myArr.slice(2, 5); // Slices elements from index 2 to 4
console.log(slicedArr);