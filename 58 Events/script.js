let button = document.getElementById("btn");

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b>Hello Duniya</b> How are you";
})

document.addEventListener("contextmenu",()=>{
    alert("Hi Right Clicked")
})
document.addEventListener("keydown",(e)=>{
    console.log(e.key)
})