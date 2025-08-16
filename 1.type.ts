// 1. Primitive Types

// number
let population: number = 170; // Bangladesh has around 170 million people

// string
let city: string = "Dhaka"; // Capital city

// boolean
let isFlooded: boolean = true; // Some areas may be flooded

// null
let lostBook: null = null; // Book is missing

// undefined
let futurePlan: undefined = undefined; // Not decided yet

// symbol
let id1: symbol = Symbol("studentID");
let id2: symbol = Symbol("studentID");
// id1 and id2 are always unique

// bigint
let nationalBudget: bigint = 3500000000000n; // Big number for taka

// void
function sayHello(): void {
  console.log("Assalamu Alaikum, Bangladesh!");
}

// any
let randomThing: any = "Rickshaw"; 
randomThing = 100; 
randomThing = true; 
// can be anything


// 2. Object Types

// Interface
interface Student {
  name: string;
  roll: number;
}
let student1: Student = { name: "Hasan", roll: 7 };

// Type Alias
type Village = {
  name: string;
  district: string;
};
let myVillage: Village = { name: "Shibpur", district: "Narsingdi" };

// Class
class CricketPlayer {
  name: string;
  runs: number;

  constructor(name: string, runs: number) {
    this.name = name;
    this.runs = runs;
  }
}
let shakib = new CricketPlayer("Shakib Al Hasan", 5000);

// Enum
enum Season {
  Summer,
  Rainy,
  Winter,
}
let currentSeason: Season = Season.Rainy;

// Tuple
let studentInfo: [string, number] = ["Rahim", 21]; // name + age

// Array
let foods: string[] = ["Hilsha", "Panta Bhat", "Rasgulla"];
