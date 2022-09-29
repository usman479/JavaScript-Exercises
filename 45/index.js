const carMaker = (manufacturer,model,other) => {
    return {
        manufacturer,
        model,
    }
}

console.log(carMaker("honda","2005"));
console.log(carMaker("GMC","2020",{color:"black"}));