// step 1:start
// step 2:numbers getting from user input and assign to numbers variable
// step 3:search key getting from user input and assign to searchKey variable
// step 4:numbers convert in to sorted array
// step 5:assign a variable isFound=false for searchkey found
// step 6:assign a variable low=0
// step 7:assign a variable up=sortedArray of length
// step 8:create a while loop
// step 9:assign a test expression inside while loop as to check low<=up
// step 10:In the body of the loop we assign a variable mid=Math.floor((low+up)/2) for getting middle value of sorted array
// step 11:We check if the searchKey is equal to array[mid](to get a mid value of the array)
// step 12:if that true we change the isFound variable to true and break the loop 
// step 13: after the loop we check isFound is equal to true ,print 'The given number is found!!' otherwise print 'Numeber is not found!!'
// step 14: if the step 12 is false again check searchKey greater is greater than array[mid](to get a mid value of the array)
// step 15:if that true change the variable low=mid+1 beacuse its a sorted array so the value should be after the the middle value ,and go to step 9
// step 16:if the step 14 is false change the variable up=mid-1 beacuse its a sorted array so the value should be before the the middle value ,and go to step 9
console.log("Binary search!!");
const prompt = require('prompt-sync')({ sigint: true });
const numbers=String(prompt("Enter the numbers seperate with comma: "))
const searchKey=Number(prompt("Enter the searchKey: "))
const numOfArrays=numbers.split(',').map((num)=>(+num))
const array=numOfArrays.sort((n1,n2)=>n1-n2)
let isFound=false
let low=0
let up=array.length-1
while(low<=up){
    let mid=Math.floor((low+up)/2)
    if(searchKey==array[mid]){
        isFound=true
        break;
    }else if(searchKey>array[mid]){
        low=mid+1
    }else{
        up=mid-1
    }
}
console.log(isFound?'The given number is found!!':'Numeber is not found!!');