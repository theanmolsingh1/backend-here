//what is nodeJS:
//nodejs is a runtime environment for javascript,
// jo javascript ke code ko chrome ke v8 engine ke bahar bhi run kra sakta hai.
//nodeJS bhi chrome ke v8 engine se he bna hai.


//these are file module from node:
const fs = require('node:fs');

fs.writeFile("test.txt" , "hey this is me, anmol", (err)=>{
    if(err) console.log(err);
    else console.log("Done!");
}) 

fs.readFile("test.txt", "utf8" , (err, data)=>{
    if(err) console.log(err);
    else console.log(data);
})