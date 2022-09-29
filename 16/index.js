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

