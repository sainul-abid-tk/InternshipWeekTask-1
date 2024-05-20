const prompt = require('prompt-sync')({ sigint: true });
const num1=Number(prompt("Enter the 1st number: "))
const num2=Number(prompt("Enter the 2nd number: "))
const operation=String(prompt("Enter the operations(+,-,/,*,%): "))
let output=0
switch(operation){
    case '+':
      output=num1+num2
      break;
    case '-':
      output=num1-num2
      break;
    case '*':
      output=num1*num2
      break;
    case '/':
      output=num1/num2
      break;
    case '%':
      output=num1%num2
      break;
    default:
        'invalid input!!'  
}
console.log(`${num1} ${operation} ${num2} = ${output}`);
