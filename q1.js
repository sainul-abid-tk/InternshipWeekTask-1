const prompt=require('prompt-sync')({sigint:true})
const age=Number(prompt("Enter Your Age: "))

if(age>=18){
    console.log("You are eligible for voting!!!");
}else{
   console.log("You are not eligible for voting!!!");
}
