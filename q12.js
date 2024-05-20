const prompt = require('prompt-sync')({ sigint: true });
const size=Number(prompt("Enter the size of array: "))
const numbers=String(prompt("Enter the numbers seperate with comma: "))
const numOfArrays=numbers.split(',').map((num)=>(+num))
for(let i=0;i<=size-1;i++){
   for(let j=0;j<=size-1;j++){
    if(numOfArrays[i]>numOfArrays[j]){
        temp=numOfArrays[i]
        numOfArrays[i]=numOfArrays[j]
        numOfArrays[j]=temp
    }
   }
}
console.log(`Given array= ${numbers}`);
console.log(`Sorted array= ${numOfArrays}`);
