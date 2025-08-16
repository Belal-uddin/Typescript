// Specifying the type of a variable is called type annotation. It helps TypeScript understand what kind of data a variable can hold, making your code safer and easier to understand.

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