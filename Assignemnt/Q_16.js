// From Question 15
let friendName = ["Wajid Ali", "Johar Hafeez", "Liaqat Ali Shah", "Muhammad Tahir"];
let message = " you are invited for dinner, Kindly join us.";
let i = 0;
while (i < friendName.length){
    console.log("Hello " + friendName[i] + "!" + message + "\n\n");
    i++;
}
console.log(friendName[0], " cannot come for dinner. \n\n");
friendName[0] = "Muhammad Zohaib Khan";
let j = 0;
while (j < friendName.length){
    console.log("Hello " + friendName[j] + "!" + message + "\n\n");
    j++;
}
// Message to inform guest about bigger dinner table
console.log("Hey folks!, I have found a bigger Dinner Table \n\n");
// Inserting name at the start of the array
friendName.unshift("Wisal Khan");
// Inserting name at the end of the array
friendName.push("Haris Alam");
// Inserting name at the mid of the array
friendName.splice(3, 0,"Mian Asfahan Ali Gul");
// While loop for printing message of invitation for guests 
let k = 0;
while (k < friendName.length){
    console.log("Hello "+ friendName[k] + "!" + message + "\n\n");
    k++;
}