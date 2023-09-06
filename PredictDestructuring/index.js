// Predict Destructuring
// For the following five blocks of code, predict the output. If a line of code will throw an error, state the error.

// Problem 1

const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)


[Running] node "c:\Users\rinnn\OneDrive\Desktop\Coding_Dojo\Mern\Javascript\Fundamentals\PredictDestructuring\index.js"
Tesla
Mercedes

[Done] exited with code=0 in 0.072 seconds



// Problem 2

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);


[Running] node "c:\Users\rinnn\OneDrive\Desktop\Coding_Dojo\Mern\Javascript\Fundamentals\PredictDestructuring\index.js"
c:\Users\rinnn\OneDrive\Desktop\Coding_Dojo\Mern\Javascript\Fundamentals\PredictDestructuring\index.js:29
console.log(name);
            ^

ReferenceError: name is not defined
    at Object.<anonymous> (c:\Users\rinnn\OneDrive\Desktop\Coding_Dojo\Mern\Javascript\Fundamentals\PredictDestructuring\index.js:29:13)
    at Module._compile (node:internal/modules/cjs/loader:1256:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.17.1

[Done] exited with code=1 in 0.068 seconds



// Problem 3

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);



[Running] node "c:\Users\rinnn\OneDrive\Desktop\Coding_Dojo\Mern\Javascript\Fundamentals\PredictDestructuring\index.js"
12345
undefined

[Done] exited with code=0 in 0.068 seconds





// Problem 4

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);


[Running] node "c:\Users\rinnn\OneDrive\Desktop\Coding_Dojo\Mern\Javascript\Fundamentals\PredictDestructuring\index.js"
false
true

[Done] exited with code=0 in 0.069 seconds




// Problem 5

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);


[Running] node "c:\Users\rinnn\OneDrive\Desktop\Coding_Dojo\Mern\Javascript\Fundamentals\PredictDestructuring\index.js"
value
[ 1, 5, 1, 8, 3, 3 ]
1
5

[Done] exited with code=0 in 0.069 seconds


