let guests = ["Zia Khan", "Muhammad Ali", "Steve Jobs"];

// prints invitation to guests //
guests.forEach(item => console.log(`Mr.${item} you are invited for dinner at my place.`));

console.log(`\n${guests[2]}  couldn't come for the dinner\n`);

// replacing guest //
guests[2] = "Bill Gates";

// prints invitation to guests //
guests.forEach(item => console.log(`Mr.${item} you are invited for dinner at my place.`));

console.log("\nI founded a bigger dinner table.\n");

// add guest at start of array //
guests.unshift("Danyal Nagori");
// add guest in middle of array //
guests.splice(Math.floor(guests.length)/2, 0 , "Zeeshan Hanif");
// add guest at the end of array //
guests.push("Ishaq Bhojani");

// prints invitation to guests //
guests.forEach(item => console.log(`Mr.${item} you are invited for dinner at my place.`));

// removes all guests except 2 //
while(guests.length > 2){
    console.log(`We are sorry ${guests.pop()} we can't invite you for dinner`);
}

// prints invitation to remaining guests //
guests.forEach(item => console.log(`Mr.${item} you are still invited for dinner at my place.`));

// removes the remaining 2 guests //
while(guests.length >= 1){
    guests.pop();
}

console.log(guests);

// exporting to use in exercise 19 //
export let numberOfGuests = guests.length;

