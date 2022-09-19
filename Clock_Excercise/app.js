import express from "express"
import { type } from "os";
import path from "path"
const app = express();
//idea: Depending on time the background will change
//Base the sun and moon rotating?

app.use(express.static("public"))



app.get("/", (req,res)=>{
    res.sendFile(path.resolve("public/frontpage.html"))
    console.log(intervalFunc)
    res.send({ data: [intervalFunc] });
})

function intervalFunc() {
    let hour = new Date().getHours()
let min = new Date().getMinutes()
let sec = new Date().getSeconds()
let time = hour +":"+ min+":" + sec
    console.log(time);
  }

setInterval(intervalFunc, 1000); 


app.get("/", (req, res) => {
  
});

app.listen(8080,()=>{
    console.log("Server is running on ", 8080)
} )