const timeDisplay = document.querySelector('.time-display');
const start_btn = document.getElementById('start');
const pause_btn = document.getElementById('pause');
const reset_btn = document.getElementById('reset');

let StartTime = 0;
let ElapsedTime = 0;
let paused = true;
let Intervaled;
let hours = 0;
let minutes = 0;
let seconds = 0;

start_btn.addEventListener("click", () => {
    if (paused) {
        paused = false;
        StartTime = Date.now() - ElapsedTime;
        Intervaled = setInterval(UpdateTime, 1000);
    }
})


pause_btn.addEventListener("click", () => {
    if (!paused) {
        paused = true;
        ElapsedTime = Date.now() - StartTime;
        clearInterval(Intervaled);
    }
});

reset_btn.addEventListener("click", () => {
    paused = true;
    clearInterval(Intervaled);
    StartTime = 0;
    ElapsedTime = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;

    timeDisplay.textContent = "00:00:00";
})

function UpdateTime() {
    ElapsedTime = Date.now() - StartTime;

    seconds = Math.floor((ElapsedTime / 1000) % 60);
    minutes = Math.floor((ElapsedTime / (1000 * 60)) % 60);
    hours = Math.floor((ElapsedTime / (1000 * 60 * 60)) % 60);
    seconds = pad(seconds);
    minutes = pad(minutes);
    hours = pad(hours);

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;


    function pad(unit) {
        return (("0") + unit).length > 2 ? unit : "0" + unit;
    }
}