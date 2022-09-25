import express from "express"
import path from "path"

const app = express();

app.use(express.static("public"))

let tasks = [
    {
        taskId:1,
        taskName: "Take out the trash",
        taskDate: "21.9.2022",
        taskStatus: "Not done",
    },
    {
        taskId:2,
        taskName: "clean closet",
        taskDate:"25.9.2022",
        taskStatus: "Not done",
    },
    {
        taskId:3,
        taskName: "Do a flip",
        taskDate:"28.9.2022",
        taskStatus: "Not done"
    }
]



app.get("/", (req,res)=>{
    res.sendFile(path.resolve("public/frontpage.html"))
})

app.get("/time", (req,res)=>{
    const date = new Date();

    console.log(date.toLocaleDateString())

    res.send({
        dateYear: date.getFullYear(),
        dateMonth: date.getMonth() + 1,
        dateDay: date.getDate(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        seconds: date.getSeconds(),
    })
})


app.get("/tasks", (req,res)=>{
    const date = new Date();

    console.log(date.toLocaleDateString())

    res.send({
        tasks : tasks,
    })
})

app.get("/tasks/:id",(req,res)=>{
    const tempTask = req.body;
    tempTask.taskId = nextI
})

/*
app.get('/metronomes',(req,res)=>{
    res.send({
        sound: audio
    })
})
*/      

app.listen(8080,()=>{
    console.log("Server is running on ", 8080)
} )