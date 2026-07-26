const timer = document.getElementById("timer");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

let seconds = 1500;
let interval;

function updateDisplay(){

    let minutes = Math.floor(seconds / 60);

    let secs = seconds % 60;

    timer.textContent =
        `${String(minutes).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;

}

function startTimer(){

    interval = setInterval(()=>{

        if(seconds > 0){

            seconds--;

            updateDisplay();

        }

    },1000);

}

function pauseTimer(){

    clearInterval(interval);

}
function resetTimer(){

    clearInterval(interval);

    seconds = 1500;

    updateDisplay();

}
startBtn.addEventListener("click",startTimer);

pauseBtn.addEventListener("click",pauseTimer);

resetBtn.addEventListener("click",resetTimer);

updateDisplay();

localStorage.setItem("theme","pink");

const theme = localStorage.getItem("theme");

