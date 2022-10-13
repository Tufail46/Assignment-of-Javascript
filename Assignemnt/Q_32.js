// List of current users
let currentUsers = ["Muhammad Tufail", "Wajid Ali", "Johar Hafeez", "Waqas Ahmad"];
// List of new users
let newUsers = ["Zia", "Danyal", "Muhammad Tufail", "Muhammad Uzair", "Muhammad Khubaib"];
// Program for matching items
function match(item,array){
    let matched = false;
     array.forEach(element => {
        if(element == item)
            {
                matched=true;
            }
    });
    return matched;
}
// Loop for printing message either username is available or already taken
newUsers.forEach(element=>{
    if(match(element,currentUsers))
    {
        console.log(element + " username is already taken\n");
    }
    else
        console.log(element + " is availbe to use\n");
});