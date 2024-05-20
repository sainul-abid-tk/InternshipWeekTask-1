console.log("To check the given number is palindrome or not!!!");
const prompt = require('prompt-sync')({ sigint: true });
const string=String(prompt("Enter a string: "))
let duplicate=""
for(i=string.length-1;i>=0;i--){
    duplicate+=string[i]
}
console.log(string===duplicate?`The given string is palindrome`:`The given string is not palindrome!!`);