const prefixFind=(arr)=>{
    let fstStrng="" 
    let prefix=""
    let count=0
    const sortedArray=arr.sort((str1,str2)=>str1.length-str2.length)
   for(let i=0;i<=sortedArray[0].length-1;i++){
     if(count===sortedArray.length-1){
        prefix=fstStrng
    }
    fstStrng+=sortedArray[0][i]
    count=0
      for(let j=1;j<=sortedArray.length-1;j++){
         if(sortedArray[j].startsWith(fstStrng)){
            count++
        }
      }
   }
   return prefix
}
const array = ["flower", "fows", "flew"];
console.log(prefixFind(array)!=""?`Common prefix is '${prefixFind(array)}'`:'no common prefix');
// output "fl"