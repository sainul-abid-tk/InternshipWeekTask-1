const prompt = require('prompt-sync')({ sigint: true });
const limit=Number(prompt("Enter the row limit: "))
let count=1
for(let row=1;row<=limit;row++){
     str=""
    for(let col=row;col>=1;col--){
        str+=`${count} `
        count++
    }
    console.log(str);
}