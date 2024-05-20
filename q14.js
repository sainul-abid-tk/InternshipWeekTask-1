const prompt = require('prompt-sync')({ sigint: true });
const nums1=String(prompt("Enter the 1st array numbers seperate with comma: "))
const nums2=String(prompt("Enter the 2nd array numbers seperate with comma: "))
const array1=nums1.split(',').map((num)=>(+num))
const array2=nums2.split(',').map((num)=>(+num))
let commonNumbers=""
for(i=0;i<=array1.length-1;i++){
    for(j=0;j<=array2.length-1;j++){
       if(array1[i]===array2[j]){
        commonNumbers+=`${array1[i]} `
       }
    }
}
console.log(`Given arrays intersected numbers are: ${commonNumbers}`);
