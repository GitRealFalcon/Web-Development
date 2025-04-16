let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newarr = arr.map((e)=>{
    return e**2;
})

// for(i = 0 ; i < arr.length ; i++){
//     newarr.push(arr[i]**2);
// }



console.log(newarr);

const greater = (e)=>{
    if(e>7){
        return true;
    }
    return false;
}

console.log(newarr.filter(greater));

let mult = (a ,b)=>{
    return a*b;
}

console.log(arr.reduce(mult));



console.log(Array.from("Naeem"));