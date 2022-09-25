
let list = document.getElementById("list")

function todo(){
    fetch("/tasks").
    then(resolve =>resolve.json().
    then(res=>{

        let date = res.date
        let task = res.tasks



        for(let i = 0; i<task.list; i++){
            console.log(task[i].taskName)
            let task = document.createElement("li").textContent=task[i].taskName
            list.appendChild(task)
        }
    })
)}

todo()


/* Misforstod opgave om at bruge new Date(); og lavede metronom som ikke havde behov for dette library
let start = document.getElementById("start");
document.getElementById("start").addEventListener("click",startMetronome)
let bpmField = document.getElementById("bpm");
const audio = new Audio("tick.wav")

function metronome(){
    fetch("/metronomes")
    .then(resolve => resolve.json())
    .then(res=>{
    })
}

function calculateBPS(bpm){
bpmField.textContent=bpm;
let bps = 60/bpm
return bps*1000
}

function playSound(){
    audio.muted = false;
    audio.play()
}

function startMetronome(){
    let bps = calculateBPS(120)
    console.log(bps)
    setInterval(playSound,bps)
}
*/