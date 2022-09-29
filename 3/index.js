let name = "usman khan";

function toTitleCase(str){
    str.toLowerCase();
    str = str.split(" ");
    for(let i=0; i<str.length; i++){
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    str = str.join(" ");
    return str;
}

console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(toTitleCase(name));
