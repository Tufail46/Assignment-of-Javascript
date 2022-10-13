let car = 'subaru';

// Test for equality
console.log("\n\n Is the value of variable is subaru? I Predict True", car == 'subaru');
// Test of inequality
console.log("\n Is the value of variable is Subaru? I Predict False", car == 'Subaru');

// function for testing to check either the string is in uppercase of lowercase
function verifyCase(character) {
    if (character == character.toUpperCase()) {
        return false;
       }
    if (character == character.toLowerCase()){
        return true;
    }
}
// Printing message to verify the case of the variable
console.log("\n Is the text of variable car is in Lower Case? I predict True", verifyCase(car));

//  Numerical test: for equality 
console.log("\n Is the variable has value equat to subaru? I predict True", car == "subaru");
//  Numerical test: for inequality
console.log("\n Is the variable has value not equal to subaru? I predict False", car !== 'subaru');
//  Numerical test: for greater than 
console.log("\n Is the variable has one element? I predict True", car.length > 0);
//  Numerical test for less than
console.log("\n Is the variable has no element? I predict False", car.length < 0);
//  Numerical test for greater than or equal to
console.log("\n Is the variable has one and more element? I predict True", car.length >= 0);
//  Numerical test for less than or equal to
console.log("\n Is the variable has no element? I predict False", car.length <= 0);

//Test for and
console.log("\n Is the variable has value of subaru and Subaru? I predict False", car == 'subaru' && car == 'Subaru');
// Test for OR 
console.log("\n Is the variable has value of subaru OR Subaru? I predict True", car == 'subaru' || car == 'SUBARU');

//Test for checing an item is in a array
console.log("\n Is a variable is an array ? I predict False", car == []);

//Test for checking an item is not in a array
console.log("\n Is car is not an array ? I predict True", car !== []);