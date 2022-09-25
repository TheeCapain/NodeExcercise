import express from "express"
import path from "path"

const app = express();

app.use(express.static("public"))

let tasks = [
    {
        taskId:1,
        taskName: "Take out the trash",
        taskDate: date.getDate()
    },
    {
        taskId:2,
        taskName: "clean closet",
        taskDate:""
    },
    {
        taskId:3,
        taskName: "Do a flip",
        taskDate:""
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