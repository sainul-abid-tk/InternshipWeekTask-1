const prompt=require('prompt-sync')({sigint:true})
console.log("Find the sum of digits");
const numbers=String(prompt("Enter the numbers seperate with comma: "))
const numOfArrays=numbers.split(',').map((num)=>(+num))
const sumOfArray=(arr)=>{
    let sum=0
    for(let index=0;index<=arr.length-1;index++){
        sum+=arr[index]
    }
    return sum
}
console.log(`sum of the given digits is:- '${sumOfArray(numOfArrays)}'`)

