let userName = "Muhammad Tufail, Student of Metaverse & Web3";
let upperCase = userName.toUpperCase(); // to convert it into UpperCase
let lowerCase = userName.toLowerCase(); // to covert it into lowerCase
console.log(upperCase);
console.log(lowerCase);

// to convert it into TitleCase
let userNewName = userName.split(" ");
updatedPersonName = "";
for(i in userNewName){
    let newName = userNewName[i].replace(userNewName[i][0],userNewName[i][0].toUpperCase());
    updatedPersonName = updatedPersonName.concat(newName).concat(" ");
}

console.log(updatedPersonName);