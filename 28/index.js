let age = 20;

if(age < 0){
    console.log("Invalid input");
} else if(age < 2){
    console.log("the person is a baby");
} else if (age < 4){
    console.log("the person is a toddler");
} else if (age < 13) {
    console.log("the person is a kid");
} else if (age < 20) {
    console.log("the person is a teenager");
} else if (age < 65) {
    console.log("the person is a adult");
} else {
    console.log("the person is a elder");
}