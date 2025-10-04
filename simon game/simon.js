let gameSeq = [];
let userSeq = [];
let btnclrs = ["blue", "orange", "violet", "red"]
let h3 = document.querySelector("h3");

let start = false;
let level = 0;

//whnever any key pressed on document game started
document.addEventListener("keypress", function () {
    if (start == false) {
        console.log("game start");
        start = true;

        levelUp();
    }
});

//whenever game click btn , it flash-change clor to white
function gameFlash(btn) {
    btn.classList.add("flash");
    //flash for som ms after that remove it
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

//whenever we click btn , it flash-change clor to green
function userFlash(btn) {
    btn.classList.add("userflash");
    //flash for som ms after that remove it
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250);
}


function levelUp() {
    //whenever level up called user seq has been reset to empty
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;

    //choosing random btn from btns array
    let ranIdx = Math.floor(Math.random() * 3);
    let ranClr = btnclrs[ranIdx];
    //based on color class we choosing random button 
    let ranBtn = document.querySelector(`.${ranClr}`);
    // console.log(ranIdx);
    // console.log(ranClr);
    // console.log(ranBtn);
    gameSeq.push(ranClr);

    console.log(gameSeq);
    gameFlash(ranBtn);
}

function checkAns(idx) {
    // let idx = level - 1;
    if (userSeq[idx] == gameSeq[idx]) {
        //console.log("same value.");

        if (userSeq.length == gameSeq.length) {
            levelUp();
        }
    } else {
        // h3.innerText = "Game over! press any key to start.";

        h3.innerHTML = `Game over! your score is <b>${level}<b/> <br> Press any key to start.`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 200);
        //reset game
        reset();
    }
}

function btnPress() {
    //console.log("btn was pressed..");
    //console.log(this);
    let btn = this;
    userFlash(btn);

    //finding color for which button has been pressed by user
    let userColor = btn.getAttribute("id");
    //console.log(userColor);
    userSeq.push(userColor);

    //after pushing usercolor check its ans
    checkAns(userSeq.length - 1);

}
//selecting & accessing all buttons
let btns = document.querySelectorAll(".btn");
for (btn of btns) {
    btn.addEventListener("click", btnPress);
}

function reset() {
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
