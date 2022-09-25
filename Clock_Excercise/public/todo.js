let list = document.getElementById("tasks")

function clock(){
    fetch("/time").
    then(resolve =>resolve.json().
    then(res=>{
        let year = res.dateYear
        let month = res.dateMonth
        let day  = res.dateDay
        let hour = res.hour
        let minute = res.minute
        let seconds = res.seconds
        let date = day + "-" + month + "-" + year

        document.getElementById("time").textContent = hour + ":" + minute + ":" + seconds
        document.getElementById("date").textContent = date

      
    })
)}

function todo(){
    fetch("/tasks").
    then(resolve =>resolve.json().
    then(res=>{
        let task = res.tasks
        taskTable(task)
        document.getElementById("date").textContent = date

      
    })
)}

function taskTable(task){
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
    
        list.appendChild(newTask)
        newTask.appendChild(taskId)
        newTask.appendChild(taskName)
        newTask.appendChild(taskDate)
        newTask.appendChild(taskStatus)
    }
    
}
setInterval(clock,1000)
todo()



//Havde glemt at lave opgaven efter date() tingen 
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
bpmField.textContent=bpm + "bpm";
let bps = 60/bpm
return bps*1000
}

function playSound(){
    audio.muted = false;
    audio.play()
}

function startMetronome(){
    let bps = calculateBPS(60)
    console.log(bps)
    setInterval(playSound,bps)
}
