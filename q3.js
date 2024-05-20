const prompt=require('prompt-sync')({sigint:true})
console.log("Find the area of the rectangle!!");
const length=Number(prompt("Enter the length: "))
const width=Number(prompt("Enter the width: "))

let Area=0
Area=length*width
console.log("Area of the rectangle is=",Area);

