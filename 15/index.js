let guests = ["Zia Khan", "Muhammad Ali", "Steve Jobs"];

// prints invitation to guests //
guests.forEach(item => console.log(`Mr.${item} you are invited for dinner at my place.`));

console.log(`\n${guests[2]}  couldn't come for the dinner\n`);

// replacing guest //
guests[2] = "Bill Gates";

// prints invitation to guests //
guests.forEach(item => console.log(`Mr.${item} you are invited for dinner at my place.`));