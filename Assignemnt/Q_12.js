let friendNames = ["Wajid Ali", "Johar Hafeez", "Liaqat Ali Shah", "Muhammad Tahir"];

let message = "Greetings: Welcome to the party ";
let greetingsMessage = "";
let i = 0;
while (i < friendNames.length) {
    greetingsMessage = message + friendNames[i];
    console.log(greetingsMessage);
    i++;
}