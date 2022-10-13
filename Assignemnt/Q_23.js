let car = 'subaru';

//5 True tests 
// True statement: variable car has value of subaru
console.log("Is car == 'subaru'? I predict True.", car == 'subaru');
// True statement: data type of variable is string
console.log("\nIs typeof car == 'string' ? I predict True.", typeof(car) == "string");
// True statement: variable has value greater than 0
console.log("\nIs car.length > 0? I predict True", car.length > 0);
// True statement: variable has value greater than 0 & data type of variable is string
console.log("\nIs car.length > 0 and Is car == 'subaru' ? I predict True", car.length > 0 && car == 'subaru');
// True statement: variable contain one value like subaru
console.log("\nIs car !== \"\" ? I predict True", car !== "" );

//5 False tests
// False statement: variable car has value different than assign value 
console.log("\n\n\nIs car == 'Subaru'? I predict False.", car == 'Subaru');
// False statement: data type of variable is string not a number so false statement
console.log("\nIs typeof car == 'number' ? I predict False.", typeof(car) == "number");
// False statement: variable (car) has one element so result is false
console.log("\nIs car.length < 0? I predict False", car.length < 0);
// False statement: statement is false because variable has one element and also its value is different from assign value
console.log("\nIs car.length < 0 and Is car == 'Subaru' ? I predict False", car.length < 0 && car == 'Subaru');
// False statement: statement is false because variable contain one value like subaru
console.log("\nIs car == \"\" ? I predict False", car == "");