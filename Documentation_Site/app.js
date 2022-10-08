import express from "express"
import path from "path"

const app = express();

import { renderPage } from "./util/templateEngine.js";

const frontpagePage = renderPage("./public/pages/frontpage/frontpage.html", 
{ 
    tabTitle: "Welcome",
    cssLink: `<link rel="stylesheet" href="./public/components/navbar/header.css">` 
});

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.send(frontpagePage);
});


app.get("/", (req,res)=>{
    res.sendFile(path.resolve("/public/components/frontpage.html"))
})


const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, (error) => {
    if (error) {
        console.log(error);
    }
    console.log("Server is running on port", server.address().port);
});