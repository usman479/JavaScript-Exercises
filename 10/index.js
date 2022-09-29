// Code of Exercise number 3 //
let name = "usman khan";

// function to convert string to title case //
function toTitleCase(str){
    // converts the whole string to lower case 
    str.toLowerCase();
    // separates the words and returns them as an array //
    str = str.split(" ");
    for(let i=0; i<str.length; i++){
        // turns first character of each word in uppercase //
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    // joins the array in a single string //
    str = str.join(" ");
    // returns new string as a title case //
    return str;
}

// prints the name as a title case //
console.log(toTitleCase(name));
