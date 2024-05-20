const prompt = require('prompt-sync')({ sigint: true });
const number = Number(prompt('Enter a number: '))
let isPrime=true
if(number<2){
    isPrime=false
}else{
    for(let num=2;num<=Math.floor(number/2);num++){
        if(number%num==0){
            isPrime=false
            break;
        }
}  
}
console.log(isPrime?'The given number is Prime':'The given number is not prime');