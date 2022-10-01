import express from "express"

const app = express();

app.use(express.static("public"));


let users = [
    {
        id: 1,
        username: 'A',
        password: 'S'
    }
]

app.get("/", (req,res)=>{
    res.sendFile(path.resolve("public/frontpage.html"))
})




app.listen(8080,()=>{
    console.log("Server is running on ", 8080)
} )