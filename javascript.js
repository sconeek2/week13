/*/working with variables
const fname = 'Scott';
let age = 42;
var hairColor = 'brownish';
console.log(fname + " " + age + " " +  hairColor);
age = 39;
hairColor = 'red';
console.log('age: ' + age + ", and hair color: " + hairColor);
fname = 'Greg';*/

/*/Working with numbers
let someNum = 42;

someNum += 15;

someNum -= 8;
console.log(someNum);

let someAvg = (26 + 44 + 72 + 86 + 112)/5;
console.log(someAvg);

let theNumber = 14;
console.log(theNumber+1)*/

/*/Working with strings
let aVar = "run",
    bVar = "statue",
    cVar = "grumpy",
    dVar = "fuscia",
    eVar = "Happy Gilmore",
madlib = "Today I decided to go for a " + aVar + ". \nI ran over to the " + bVar + ". \nThe statue was a bright " + dVar + ". \nWhen I turned around I saw my friend " + eVar + ".";
console.log(madlib);
const madlibLiteral = `Today I decided to go for a ${aVar}. \nI ran over to the ${bVar}. \nThe statue was a bright ${dVar}. \nWhen I turned around I saw my friend ${eVar}`;
console.log(madlibLiteral);*/

/*/Conditionals
let x = 84,
    y = 98;

if (x > y){
    console.log("Hello World")
} else console.log("Goodbye World");

let addButter = true;
let popcorn = addButter == true ? "The popcorn is delicious" : "The popcorn is good but could use some butter";
console.log(popcorn);

let soldOut = true;
let onSale = true

let message = (!soldOut && onSale) ? "I got tickets!" : "I did not get tickets";

console.log(message);

if(!soldOut && onSale){
    console.log("I got tickets")
} else console.log("I did not get tickets");*/

/*/Loops

for(i = 100; i >= 0; i--){
    console.log(i);
}

for(i = 0; i < 51; i++){
    if(i % 2 != 0 && i % 5 === 0){
        console.log(i);
    }
}

// let total = 0;
// for (i = 0; i <= 10; i++){
//     total += 3;
// }
// console.log(total);
let i = 0,
    total = 0;
while(i < 11){
    total += 3;
    i++;
}
console.log(total);

for (i = 0; i <= 100; i++){
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    } else if (i % 5 == 0){
        console.log("Buzz");
    } else if (i % 3 == 0){
        console.log("Fizz")
    } else console.log(i);
}*/