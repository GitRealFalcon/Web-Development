let a = prompt("enter a number");
let b = prompt("enter a number");

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed");

}

let sum = parseInt(a) + parseInt(b);

try {
    alert("sum is", sum * x);

} catch (error) {
    console.log('Error Aa Gya Bhai');
    console.log(error)

}





