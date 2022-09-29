console.log(`is "usman" == 'usman'? I predicted True`);
console.log(`is "usman" == 'Usman'? I predicted False`);

console.log(`is "a" == "A".toLowerCase()? I predicted True`);
console.log(`is "A" == "A".toLowerCase()? I predicted False`);

console.log(`is 2 == 1+1? I predicted True`);
console.log(`is 2 == 1+2? I predicted False`);

console.log(`is 2 < 1+2? I predicted True`);
console.log(`is 2 > 1+2? I predicted False`);


console.log(`is 2 <= 2? I predicted True`);
console.log(`is 2 >= 3? I predicted False`);

console.log("true && true? I predicted True");
console.log("false && true? I predicted False");

console.log("false || true? I predicted True");
console.log("false || false? I predicted False");

let array = [2,4,6,8,10];

console.log(!!array.find(item => 7==item)); 
console.log(!!array.find(item => 8==item));