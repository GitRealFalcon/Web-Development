// fectorial

let a = 10;

let ans = 1;

for(i = a ; i > 0; i--){
    ans = ans * i;
}

console.log(ans);

function fectorial(num){
    let arr = Array.from(Array(num+1).keys());
    console.log(arr.slice(1));
   let c = arr.slice(1).reduce((a,b)=>{
        return a*b;
    })

    return c;
}


console.log(fectorial(a));