async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            return resolve(100);
        }, 1000);
    })
}

// (async function main() {
//     // let a = await sleep();
//     // console.log(a);

//     // let b = await sleep();
//     // console.log(b);

// })()

function sum(a,b,c){
    return a+b+c;
}
(async function main() {
    // let a = await sleep();
    // console.log(a);

    // let b = await sleep();
    // console.log(b);

    // let [x,y,...z] = [4,5,7,5.7,6,3,8];
    // console.log(x,y,z);
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let {a,b} = obj;
    console.log(a , b);

    let arr = [1,2,3];
    console.log(sum(...arr));
    
    

})()