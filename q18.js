const prompt = require('prompt-sync')({ sigint: true });
const wRTest=Number(prompt("Enter your written test mark: "))
const lbExam=Number(prompt("Enter your lab exam mark: "))
const assign=Number(prompt("Enter your assignments mark: "))
let totalAvrg=((wRTest*70)/100)+((lbExam*20)/100)+((assign*10)/100)

console.log(`Your over all grade is '${Math.floor(totalAvrg)}'`);