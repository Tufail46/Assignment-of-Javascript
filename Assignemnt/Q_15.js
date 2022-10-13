let friendName = ["Wajid Ali", "Johar Hafeez", "Liaqat Ali Shah", "Muhammad Tahir"];
let message = " you are invited for dinner at my home, Kindly join us.";
let i = 0;
// Sending invation messages to the friends
while (i < friendName.length){
    console.log("Hello " + friendName[i] + "!" + message + "\n\n");
    i++;
}
// Wajid Ali is not coming for the dinner
console.log(friendName[0], " cannot come for dinner. \n\n");
// Replacing Wajid Ali with Waqas Ahmad in guest list
friendName[0] = "Muhammad Zohaib Khan";
let j = 0;

// Sending invation messages to updated list of friends
while (j < friendName.length){
    console.log("Hello " + friendName[j] + "!" + message + "\n\n");
    j++;
}