import express from "express"
import path from "path"

const app = express();

app.use(express.static("public"))

let tasks = [
    {
        taskId:1,
        taskName: "Take out the trash",
        taskDate: "1-2-2020",
        taskStatus: "Not done",
    },
    {
        taskId:2,
        taskName: "clean closet",
        taskDate:"1-2-2020",
        taskStatus: "Not done",
    },
    {
        taskId:3,
        taskName: "Do a flip",
        taskDate:"1-2-2020",
        taskStatus: "Not done"
    }
]



app.get("/", (req,res)=>{
    res.sendFile(path.resolve("public/frontpage.html"))
})

app.get("/tasks", (req,res)=>{
    const date = new Date();

    res.send({
        date: date.getDate(),
        tasks : tasks,

    
    })
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