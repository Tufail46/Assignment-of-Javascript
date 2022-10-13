// Function for different size shirts with different messages
function make_shirt(size = "Large", message = "I love Javascript") {
    return console.log("Size: " + size + "\n" + message + "\n");
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "Gain weight by learning some Javascript");