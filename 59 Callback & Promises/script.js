console.log('Promises');

let prom1 = new Promise((resove,reject)=>{

    setTimeout(()=>{
        let a = Math.random();
        if(a < 0.5){
            reject("Not a Random No");
        }else{

            console.log('Yes I am Done');
            resove("Naeem");
        }
        
    }, 3000)
})

prom1.then((a)=>{
    console.log(a);
    
}).catch((err)=>{
    console.log(err);
    
})

