import express from "express"
import path from "path"

const app = express();

import { renderPage } from "./util/templateEngine.js";

const frontpagePage = renderPage("./public/pages/frontpage/frontpage.html", 
{ 
    tabTitle: "Welcome",
    cssLink: `<link rel="stylesheet" href="./public/components/navbar/header.css">` 
});

let articles = [{
    id:1,
    headline:"Crud",
    content: "Some text here",
    images:''
},{
    id:2,
    headline:"CallBack functions",
    content: "Some text here",
    images:''
},{
    id:3,
    headline:"JSON packages",
    content: "Some text here",
    images:''
}]

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send(frontpagePage);
});


app.get("/", (req,res)=>{
    res.sendFile(path.resolve("/public/components/frontpage.html"))
 
})

app.get("/article",(req,res)=>{
    res.send({
        articles: articles
    })
})

app.get("/articles/:id",(req,res)=>{
    res.send(guns[req.params.id-1])
})


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});