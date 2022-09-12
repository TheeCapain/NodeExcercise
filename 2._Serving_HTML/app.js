const app = express();

import express from "express";

app.use(express.static("public"))

import path from "path";

import packageJSON from "./package.json"

console.log(require(packageJSON))

import {incrementVisitorCounter} from "./geocitiesUtil.js"

app.get("/", (req, res) =>{
    console.log("Total visitors" + incrementVisitorCounter())
    //dirname only was in common js
    //res.sendFile(__dirname + "/public/frontpage.html")
    res.send(path.resolve("./public/frontpage.html"))
})

app.listen(8080, () => console.log("Server is running",8080))