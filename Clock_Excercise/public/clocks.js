let clock = document.getElementById("clock");
let start = document.getElementById("start");
let bpm = document.getElementById("bpm");
let hardcodedBPM = 60;

/*
function getTime(){
fetch("/time")
.then(resolve => resolve.json())
.then(res => {
    let hour = res.hour
    let min = res.min
    let sec = res.sec
    console.log(sec)

    document.querySelector("#clock").textContent = hour + ":" + min + ":" + sec 
})};
*/

function calculateBPS(bpm){
document.getElementById("bpm").textContent=bpm;
let bps = 60/bpm
return bps*1000
}

function playSound(){
    var audio = new Audio('tick.wav');
    audio.play()
}

function startMetronome(){
let bps = calculateBPS(120)
console.log(bps)

setInterval(playSound,bps)
}

startMetronome();
//setInterval(getTime, 1000);