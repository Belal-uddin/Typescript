// Specifying the type of a variable is called type annotation. It helps TypeScript understand what kind of data a variable can hold, making your code safer and easier to understand.

import { defaultMaxListeners } from "events";

let age: number = 25; // age is a number

let myName: string = "Md Belal Uddin"; // name is a string

let isStudent: boolean = true; // isStudent is a boolean

let nothingMuch: null = null; // nothingMuch is null

let nothing: undefined = undefined; // nothing is undefined


// Array
let hobbies: string[] = ["Reading", "Coding", "Traveling"]; // hobbies is an array of strings

let myNumbers: number[] = [1, 2, 3, 4, 5]; // myNumbers is an array of numbers


// Classes
class Car{

}

let car: Car = new Car(); // car is an instance of the Car class



// Object Literal
let point: { x: number; y: number; z: number } = {
    x: 10,
    y: 20,
    z: 30
    }; // point is an object with x, y, and z as numbers

// Function
const printMessage: (message:string) => void = (message: string) => {
    console.log(message); // printMessage takes a string and returns nothing (void)
}
printMessage("Hello, TypeScript!");





// When to use annotation?

// 1. When declaring variables without initialization
let colors = ["red", "green", "blue"];
// let fountColor; 
// If we don't specify a type, TypeScript infers it as 'any' by default and this is problematic because it can lead to unexpected behavior later in the code. So we should always specify the type of a variable when we declare it without initialization.

let foundColor: boolean; // Explicitly specifying the type as boolean
for (let i= 0; i < colors.length; i++) {
    if(colors[i] === "red") {
        foundColor = true; // fountColor is inferred as 'any'
    }
}

// 2. When function return types are not clear. When it returns 'any' or 'unknown'

const json = '{"name": "Belal", "age": 25}'; // JSON string
const user: {name:string; age:number} = JSON.parse(json); // user is of type 'any' by default





// Type annotation for function parameters and return types

const addNumbers = (a: number, b:number): number =>{
    return a+b; 
}

// anonymous function example
const multiplyNumbers = function(a: number, b: number): number {
    return a * b;
}


// Destructuring with type annotation
const person = {
    name: "Belal",
    age: 25,
    isStudent: true
};

const PrintPersonInfo = (details: { name: string; age: number; isStudent: boolean }) => {
    console.log(`Name: ${details.name}, Age: ${details.age}, Is Student: ${details.isStudent}`);
}

PrintPersonInfo(person); // Calling the function with the person object