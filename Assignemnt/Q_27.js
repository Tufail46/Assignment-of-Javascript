// programming for shooting an alien
function alien_color (color) {
    if (color == "green") {
        return console.log("\nYou have earned 5 points");
    } else if (color == "yellow") {
        return console.log("\nYou have earned 10 points");
    } else if (color == "red") {
        return console.log("\nYou have earned 15 points");
    }
}
alien_color("green");
alien_color("yellow");
alien_color("red");