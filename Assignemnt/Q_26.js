let alien_color = "green";
// if statment for shooting green color alien
if (alien_color == "green") {
  console.log("\nYou just earned 5 points for shooting an alien");
} else if (alien_color !== "green") {
  console.log("\nYou have earned 10 points");
}
alien_color = "yellow";
// new version for running if block
if (alien_color == "green") {
  console.log("\nYou just earned 5 points for shooting an alien");
}
// new version for running else if block
if (alien_color !== "green") {
  console.log("\nYou have earned 10 points");
}