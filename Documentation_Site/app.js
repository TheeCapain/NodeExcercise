import express from "express"
import path from "path"
import { title } from "process";

const app = express();

app.use(express.static("public"));


let users = [
    {
        id: 1,
        username: 'A',
        password: 'S'
    }
]

let homeBtn=[
{
    title:'Portfolio',
    href:''
}
]

let menu = [
    {
        title:'Home',
        href:''
    }, 
    {
        title: 'Rest API',
        href:''
    }, 
    {
        title: 'Callback functions',
        href:''

    },
    {
        title: 'CRUD',
        href:''
    }
]

app.get("/", (req,res)=>{
    res.sendFile(path.resolve("public/pages/frontpage.html"))
})


app.get("/header", (req, res )=>{
    res.send({
        menu:menu,
        homeBtn:homeBtn
    })

})






app.listen(8080,()=>{
    console.log("Server is running on ", 8080)
} )