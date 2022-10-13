let visitPlaces = ["Green land", "Moscow", "Lake Baikal", "Edenborough", "Buenos Aires"];
// Original array
console.log("Orignal Array:\n\n" + visitPlaces);
// Array sorted in alphabetical order
console.log("\n\n Array in alphabetical order without modifying orignal Array:\n" + visitPlaces.slice().sort());
// Original array
console.log("\n\n Original Array:\n" + visitPlaces);
// Array sorted in reverse order
console.log("\n\n Array in Reverse order without modifying orignal Array:\n" + visitPlaces.slice().sort().reverse());
// Original array
console.log("\n\n Original Array:\n" + visitPlaces);
// Array sorted in reverse order also its order has been changed
console.log("\n\n Reversed and also the order has been changed:\n" + visitPlaces.reverse());
// Array sorted back to its original form
console.log("\n\n Reversed the order for your list again, back to its orignal order:\n" + visitPlaces.reverse());
// Array sorted in alphabetical order and its original order is modified
console.log("\n\n Array sorted in alphabetical order and orignal order has been modified:\n" + visitPlaces.sort());
// Array sorted in reversed alphabetical order and its order has been remodified
console.log("\n\n Reversed alphabetical order and array has been remodified to current form:\n" + visitPlaces.reverse());