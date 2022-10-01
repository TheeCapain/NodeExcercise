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
    },
    {
        title: 'LOGIN',
        href:''
    }
]

let mainContent = [
    {
        title:'CRUD conventions',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend pulvinar consectetur. Nam eros quam, ornare sed arcu non, dictum dictum purus. Nunc viverra, nisl ut finibus tempor, elit sem pharetra velit, molestie tristique turpis sapien et neque.'
    }, 
    {
        title:'Call back functions',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eleifend pulvinar consectetur. Nam eros quam, ornare sed arcu non, dictum dictum purus. Nunc viverra, nisl ut finibus tempor, elit sem pharetra velit, molestie tristique turpis sapien et neque.'
    }, 
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

app.get("/content",(req,res)=>{
    res.send({
        articleTitle: mainContent.title,
        articleContent: mainContent.content
    })
})






app.listen(8080,()=>{
    console.log("Server is running on ", 8080)
} )