let userNames = ["Admin", "Muhammad Tufail", "Wajid Ali", "Johar Hafeez", "Waqas Ahmad", "Muhammad Zohaib", "Muhammad Tahir"];

for (i in userNames) {
    if ("Admin" ==  userNames[i]){
        console.log("Hello Admin, would you like to see a status report?");
    } else {
        console.log("\nHello "+ userNames[i] + ", thankyou for logging in again");
    }
}