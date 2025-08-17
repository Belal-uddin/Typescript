// Simple Array
const flowers: string[] = ["Rose", "Sunflower", "Waterlily"];

// Array of Arrays (2D Array)
const waterLilyByColor: string[][] = [
  ["Shada Shapla", "Lal Shapla"], 
  ["Nil Shapla", "Holud Shapla"]
];

// Example of usage:
console.log(flowers[0]); // Rose
console.log(waterLilyByColor[0][1]); 




// Multiple types
const importantDates: (Date | string)[] = [new Date(), '2025-02-21'];