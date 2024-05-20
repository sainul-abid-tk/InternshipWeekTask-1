const prompt = require('prompt-sync')({ sigint: true });
const annIncome=Number(prompt("Enter your annual income: "))
let incomeTaxAmount=0
if(annIncome>250000 && annIncome<=500000){
   incomeTaxAmount=Math.floor((annIncome*5)/100)
}else if(annIncome>500000 && annIncome<=1000000){
    incomeTaxAmount=Math.floor((annIncome*20)/100)
}else if(annIncome>1000000 && annIncome<=5000000){
    incomeTaxAmount=Math.floor((annIncome*30)/100)
}
console.log(incomeTaxAmount==0?'You have no tax':`Your should pay the income tax,Amount = '${incomeTaxAmount}'`);