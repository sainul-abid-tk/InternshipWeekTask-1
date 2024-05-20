let count=0
for(row=0;row<=4;row++){
    str=""
    for(col=row;col>=0;col--){
    str+=`${String.fromCharCode(65+count)} `   
     count++  
    }
    console.log(str);
}