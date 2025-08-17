// Array-like structure where each element represents some property of a record

// A tuple of [string, number]
let student: [string, number] = ["Rahim", 21];

console.log(student[0]); // "Rahim"
console.log(student[1]); // 21




// Define a tuple for student information: [name, age, isGraduated]
type StudentInfo = [string, number, boolean]; // This is a Type Alias for a tuple type called StudentInfo

// Use it for different students
let rakib: StudentInfo = ["Mehedi", 22, true];
let sumaiya: StudentInfo = ["Sumaiya", 24, true];
let imran: StudentInfo = ["Sagor", 20, false];

