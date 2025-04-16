console.log("Loops")

let a = 1;

for (let i = 0; i < 10; i++) {
    console.log(a+i)
    
}

let obj = {
    name : "naeem",
    rool : "programmer"
}

for (const key in obj) {
   
        const element = obj[key];
        console.log(key, element)
        
}

for (const c of "NAEEM") {
    
    console.log(c)
}

let i =5 ;

while (i < 8) {
    console.log(i)
    i++
}