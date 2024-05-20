const prompt = require('prompt-sync')({ sigint: true });
const numbers=String(prompt("Enter the numbers seperate with comma: "))
const numOfArrays=numbers.split(',').map((num)=>(+num)).sort((n1,n2)=>n1-n2)
let median=0
let length=numOfArrays.length
if(length%2===0){
    //  here we have getting 2 median numbers
    let median1=numOfArrays[(length/2)-1]
    let median2=numOfArrays[(length/2)]
    median=(median1+median2)/2
  console.log(`Median of the given array is= '${median}'`);
}else{
    median=((length+1)/2)-1
    console.log(`Median of the given array is= '${numOfArrays[median]}'`);
}