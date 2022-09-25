let list = document.getElementById("tasks")

function todo(){
    fetch("/tasks").
    then(resolve =>resolve.json().
    then(res=>{

        let date = res.date
        let task = res.tasks


        console.log(task.length)

        for(let i = 0; i<task.length; i++){
            let newTask = document.createElement("tr")
            let taskId = document.createElement("td")
            let taskName = document.createElement("td")
            let taskDate = document.createElement("td")
            let taskStatus = document.createElement("td")


        
            taskId.textContent = task[i].taskId
            taskName.textContent = task[i].taskName
            taskDate.textContent = task[i].taskDate
            taskStatus.textContent= task[i].taskStatus


            console.log(task[i].taskName)
        
            list.appendChild(newTask)
            newTask.appendChild(taskId)
            newTask.appendChild(taskName)
            newTask.appendChild(taskDate)
            newTask.appendChild(taskStatus)
        
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