// An interface is like blueprint for object

// Define an interface for a student
interface Student{
    name: string;
    age: number;
    isGraduated: boolean;
}


// Now use the upper interface;
let stuent1 : Student = {
    name: "Belal",
    age: 25,
    isGraduated: true
}



// Function in Interface

interface Shop{
    name: string;
    location: string;

    getDetails(): string; // Function signature
}


const teaStall: Shop = {
    name: "Mama Cha Ghor",
    location: "Cumilla",

    getDetails: function(): string {
        return `${this.name} is located at ${this.location}.`;
    }
}

console.log(teaStall.getDetails()); // Mama Cha Ghor is located at Cumilla.



// Code resuing using interface

interface Vehicle {
    brand: string;
    speed: number;
    mover(): void;
}


const Rickshaw: Vehicle = {
    brand: "Bajaj",
    speed: 60,

    mover: function(): void {
        console.log(`${this.brand} is moving at ${this.speed} km/h.`);
    }
}

const Car: Vehicle = {
    brand: "Toyota",
    speed: 120,

    mover: function(): void {
        console.log(`${this.brand} is moving at ${this.speed} km/h.`);
    }
}


Rickshaw.mover(); // Bajaj is moving at 60 km/h.
Car.mover(); // Toyota is moving at 120 km/h.