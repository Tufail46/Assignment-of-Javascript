// Program for different stages of life
function stageOfLife (age) {
    if (age < 2) {
        return console.log("\nThe person is a baby");
    } else if (age >= 2 && age < 4) {
        return console.log("\nThe person is a toddler");
    } else if (age >= 4 && age < 13) {
        return console.log("\nThe person is a Kid");
    } else if (age >= 13 && age < 20) {
        return console.log("\nThe person is a teenager");
    } else if (age >= 20 && age < 65) {
        return console.log("\nThe person is an adult");
    } else if (age >= 65) {
        return console.log("\nThe person is an elder");
    } 
}
stageOfLife(1);
stageOfLife(3);
stageOfLife(10);
stageOfLife(17);
stageOfLife(50);
stageOfLife(70);