const prompt = require('prompt-sync')({ sigint: true });
const number = Number(prompt('Enter a number: '))

const factorial=(num)=>{
   if(num==1 || num==0){
    return 1
   }else{
    let factOfNum=num*factorial(num-1)
    return factOfNum
   }
}
console.log(`Factorial of the ${number} is '${factorial(number)}'`);