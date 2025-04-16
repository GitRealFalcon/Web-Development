const { error } = require("console");
const fs = require("fs");

console.log('Starting');

fs.writeFile("naeem.txt", "naeem saifee", ()=>{
    console.log("Done");

    fs.readFile("naeem.txt", (error , data)=>{
        console.log(error, data.toString());
        
    })
    
});

fs.appendFile("naeem2.txt", "how are", (error,data)=>{
    console.log(data);
    
})

console.log('End');