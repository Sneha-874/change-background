const mainButton = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".randomColor");
function randomColorGenerator(){
    const red = Math.floor(Math.random()*256);
    const green = Math.floor(Math.random()*256);
    const blue = Math.floor(Math.random()*256);
    const randomColor = `rgb(${red} , ${green} , ${blue})`;
    return randomColor;
}
mainButton.addEventListener("click" , ()=>{
    const randomColor = randomColorGenerator();
    body.style.backgroundColor = randomColor;
    currentColor.textContent = randomColor;
})



//pehle humne button ko select kiya aur usme event listener click add kiya
//usme humne ke variable banaya randomColor jisme ek function call kiya jo jhume random color return kar rha hai
//math.random() hume 0 se 1 ke beech ki decimal values deta hai
//math.random()*10 0 se 10 ke beech ki values deta hai jisme 10 not included
//rgb values red , green , blue ke liye 0 se 255 tak vary hoti hai
//3 variables mein humne random 0 se 255 tak values generate ki
//unhe integer values mein convert karne ke liye math.floor() use kiya
