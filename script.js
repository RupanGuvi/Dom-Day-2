const circle = document.getElementById("circle");
const input = document.getElementById("color");
input.addEventListener("change",()=>{
    circle.style.backgroundColor =input.value;
})

