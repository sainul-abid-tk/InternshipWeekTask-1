const prompt = require('prompt-sync')({ sigint: true });
const string = String(prompt('Enter a String: '))
let reversedString=""
for(let i=string.length-1;i>=0;i--){
   reversedString+=string[i]
}
console.log(reversedString);