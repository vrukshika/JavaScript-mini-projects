let ip = document.querySelector("#text");
let p = document.querySelector("p");

ip.addEventListener("input", function () {
    console.log(this.value);
    p.innerText = this.value; //ip.value
    
})