let h3 = document.querySelector("h3");
let btn = document.querySelector("button");
let div = document.querySelector("div");


btn.addEventListener("click", function (){
    let rndmclr = getrndmclr();
    h3.innerText = rndmclr;
    div.style.backgroundColor = rndmclr;
});

function getrndmclr() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}