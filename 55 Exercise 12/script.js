let boxes = document.body.firstElementChild.children;
let container = document.body.firstElementChild;

// let rand = (a)=>{
//     return Math.floor((Math.random()*a)+1);
// }

// let bgc = {
//     1 : "red",
//     2 : "blue",
//     3 : "black",
//     4 : "pink",
//     5 : "orange"
// }

// let textClr = {
//     5 : "red",
//     3 : "blue",
//     4 : "black",
//     2 : "pink",
//     1 : "orange"
// }

// let posi = {
//     1 : "end",
//     2 : "start",
//     3 : "center"
// }

// let space = {
//     1 : "space-around",
//     2 : "space-between",
//     3 : "space-evenly",
//     4 : "center",
//     // 5 : "start",
//     // 6 : "end"
// }

// let direction = {
//     1 : "row",
//     2 : "row-reverse"
// }

// container.style.justifyContent = space[rand(4)]
// container.style.flexDirection = direction[rand(2)]

// for (const e of boxes) {
//     let clr = bgc[rand(5)];
//     let tclr = textClr[rand(5)];
//     let c = posi[rand(3)];
    
    

//     console.log(e);
//     e.style.background = clr;
//     e.style.color = tclr;
//     e.style.alignSelf = c;
    
// }

let getRandomColor = ()=>{
    let val1 = Math.ceil(0+Math.random()*255);
    let val2 = Math.ceil(0+Math.random()*255);
    let val3 = Math.ceil(0+Math.random()*255);
    
    return `rgb(${val1},${val2},${val3})`;
}

for (const e of boxes) {
    
    e.style.background = getRandomColor();
    e.style.color = getRandomColor();

}