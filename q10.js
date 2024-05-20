console.log("Remove the duplicate digits from an array!!");
const prompt = require('prompt-sync')({ sigint: true });
const numbers=String(prompt("Enter the numbers seperate with comma: "))
const numOfArrays=numbers.split(',').map((num)=>(+num))
for(let i=0;i<numOfArrays.length;i++){ 
    for(let j=i+1;j<numOfArrays.length;j++){ 
        if(numOfArrays[i]==numOfArrays[j]){
          numOfArrays.splice(j,1)
        }
    }
}
console.log(numOfArrays);