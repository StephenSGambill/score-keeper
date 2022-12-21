let homeScoreVar = document.getElementById("homeScore");
let guestScoreVar = document.getElementById("guestScore");
let hCount = 0;
let gCount = 0;

function hPlusOne(){
    hCount = hCount + 1;
    homeScoreVar.innerText = hCount;
}

function hPlusTwo(){
    hCount = hCount + 2;
    homeScoreVar.innerText = hCount;
}

function hPlusThree(){
    hCount = hCount + 3;
    homeScoreVar.innerText = hCount;
}


function gPlusOne(){
    gCount = gCount + 1;
    guestScoreVar.innerText = gCount;
}

function gPlusTwo(){
    gCount = gCount + 2;
    guestScoreVar.innerText = gCount;
}

function gPlusThree(){
    gCount = gCount + 3;
    guestScoreVar.innerText = gCount;
}

function clearScore(){
    homeScoreVar.innerText = 0;
    guestScoreVar.innerText = 0;
    hCount = 0;
    gCount = 0;
}