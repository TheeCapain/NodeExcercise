import express from "express"
import path from "path"
const app = express();
//idea: Depending on time the background will change
//Base the sun and moon rotating?

app.use(express.static("public"))

app.get("/", (req,res)=>{
    res.sendFile(path.resolve("public/frontpage.html"))
})


app.get('/time', (req, res) => {
    const date = new Date();
      res.send({
        hour: date.getHours(),
        min : date.getMinutes(),
        sec: date.getSeconds(),
      })
});

app.get('/metronome',(req,res)=>{
    res.send({
        metronome: bps
    })
})
        

app.listen(8080,()=>{
    console.log("Server is running on ", 8080)
} )