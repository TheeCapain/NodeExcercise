import express from "express"
import { type } from "os";
import path from "path"

const app = express();

app.get("/", (req,res)=>{
    res.sendFile(path.resolve("public/frontpage.html"))
})



let pokemon = [
    {id:1,
    name: "Bulbasaur",
    type:"grass"},
    {id:2,
     name: "Charizard",
    type:"fire"},
    {id:3,
    name: "Evee",
    type:"grass"}]

app.get("/pokemon",(req,res)=>{
console.log(pokemon)
res.send( + pokemon.name)
})

app.listen(8080,(error)=>{
    console.log("Server is running on port", 8080);
});

console.log("Hello there")