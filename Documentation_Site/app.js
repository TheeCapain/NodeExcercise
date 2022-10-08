import express from "express"
import path from "path"
import { title } from "process";

const app = express();

import { renderPage } from "./util/templateEngine.js";

const frontpagePage = renderPage("./public/pages/frontpage/frontpage.html", 
{ 
    tabTitle: "Welcome",
    cssLink: `<link rel="stylesheet" href="./public/frontpage/frontpage.css">` 
});

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send(frontpagePage);
});


let users = [
    {
        id: 1,
        username: 'A',
        password: 'S'
    }]



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
    res.sendFile(path.resolve("/public/components/frontpage.html"))
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




const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});