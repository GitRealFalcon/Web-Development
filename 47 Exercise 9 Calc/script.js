// // foulti Calculator


// let b = 5;
// let c = 5;

// const a = Math.random() < 0.1;

// if (a == true) {
    
//     console.log(b + c);
//     console.log(b * c);
//     console.log(b - c);
//     console.log(b / c);
// }else{
//     console.log(b - c);
//     console.log(b + c);
//     console.log(b / c);
//     console.log(b ** c);
// }


// let random = Math.random();
// console.log(random);

// let a = prompt("Entar frist Number");
// let b = prompt("Enter operation");
// let c = prompt("Enter second Number");

// let obj = {
//     "+" : "-",
//     "*" : "+",
//     "-" : "/",
//     "/" : "**",
// }

// if(random > 0.1){

//     alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
// }else{
//     b = obj[b];
//     alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
// }

let rand = Math.floor(Math.random() * 100)
console.log(rand)

let obj = {
    "+" : "-",
    "-" : "+",
    "*" : "/",
    "/" : "*"
}

let a = prompt("Enter Tha Frist number");
let b = prompt("Enter Operation");
let c = prompt("Enter second number");

if(rand < 30 ){

    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}else{
    b = obj[b];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}