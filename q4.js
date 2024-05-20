const prompt=require('prompt-sync')({sigint:true})
console.log("Convertion of celsius to fahrenheit");
const c=Number(prompt('Enter the temprature in celsius: '))
let f=0
f=((9/5*c)+32).toFixed(2)
console.log(`${c}°C = ${f}°F`);
